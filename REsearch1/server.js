// REsearch1 backend proxy — zero dependencies, Node 18+.
// Reads REsearch1/.env (never expose OPENAI_API_KEY to the browser).
//   node server.js            → http://127.0.0.1:8787  (serves index.html + /api/*)
// Endpoints:
//   POST /api/semantic { query }              → embeddings-ranked local listings
//   POST /api/browse   { query, site? }       → OpenAI web-search (ChatGPT 5.6 Luna) for Zillow etc.
//   GET  /api/health                          → { ok, models }
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dir = path.dirname(fileURLToPath(import.meta.url));

// --- tiny .env loader (REsearch1/.env, fallback ../.env) ---
function loadEnv() {
  for (const p of [path.join(__dir, ".env"), path.join(__dir, "..", ".env")]) {
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, "utf8").split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#") || !t.includes("=")) continue;
      const i = t.indexOf("=");
      const k = t.slice(0, i).trim();
      let v = t.slice(i + 1).trim().replace(/^["']|["']$/g, "");
      if (!(k in process.env)) process.env[k] = v;
    }
  }
}
loadEnv();

const PORT = +(process.env.SEARCH_API_PORT || 8787);
const HOST = process.env.SEARCH_API_HOST || "127.0.0.1";
const KEY = process.env.OPENAI_API_KEY || "";
const EMBED_MODEL = process.env.OPENAI_EMBED_MODEL || "text-embedding-3-small";
const CHAT_MODEL = process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini";
const BROWSE_MODEL = process.env.OPENAI_BROWSE_MODEL || "chatgpt-5.6-luna";
const BROWSE_FALLBACK = process.env.OPENAI_BROWSE_FALLBACK_MODEL || "gpt-4o";
const CORS = (process.env.SEARCH_CORS_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
const MAX_RESULTS = +(process.env.SEARCH_BROWSE_MAX_RESULTS || 8);

// Small server-side listing corpus for semantic ranking (mirrors frontend demo data).
const LISTINGS = JSON.parse(fs.readFileSync(path.join(__dir, "listings.json"), "utf8"));

const cosine = (a, b) => {
  let d = 0, na = 0, nb = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) { d += a[i] * b[i]; na += a[i] ** 2; nb += b[i] ** 2; }
  return d / (Math.sqrt(na) * Math.sqrt(nb) || 1);
};

async function embed(text) {
  const r = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: EMBED_MODEL, input: text.slice(0, 2000) }),
  });
  if (!r.ok) throw new Error("embeddings " + r.status + " " + (await r.text()).slice(0, 300));
  const j = await r.json();
  return j.data[0].embedding;
}

// Embeddings cache (query + listing vectors) — in-memory only.
const vecCache = new Map();
async function listingVector(l) {
  const k = "L:" + l.id;
  if (!vecCache.has(k)) vecCache.set(k, await embed(`${l.address.street} ${l.address.city} ${l.beds}bd ${l.baths}ba $${l.price} ${l.desc} ${l.features.join(" ")}`));
  return vecCache.get(k);
}

// OpenAI Responses API with web_search tool (ChatGPT 5.6 Luna browsing).
async function browseWeb(query, site) {
  const siteHint = site && site !== "all" ? ` Limit to ${site} listing pages (e.g. site:${site}).` : " Prefer zillow.com, realtor.com, redfin.com listings.";
  const input = `Find current real-estate listings for: "${query}".${siteHint} Return ONLY JSON: {"results":[{"title":..., "url":..., "price":..., "beds":..., "baths":..., "city":..., "snippet":...}]} Max ${MAX_RESULTS} results, real URLs you actually browsed.`;
  const models = [BROWSE_MODEL, BROWSE_FALLBACK].filter(Boolean);
  let lastErr = "";
  for (const model of [...new Set(models)]) {
    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model, input, tools: [{ type: "web_search" }], max_output_tokens: 2000 }),
    });
    const t = await r.text();
    if (!r.ok) { lastErr = model + ": " + t.slice(0, 300); continue; }
    // Extract assistant text from Responses API payload.
    try {
      const j = JSON.parse(t);
      const chunks = [];
      for (const item of j.output || []) {
        for (const c of item.content || []) if (c.text) chunks.push(c.text);
        if (item.text) chunks.push(item.text);
      }
      const raw = chunks.join("\n");
      const m = raw.match(/\{[\s\S]*\}/);
      if (m) return { model, ...(JSON.parse(m[0])) };
      return { model, results: [{ title: "Browse result", url: "", snippet: raw.slice(0, 800) }] };
    } catch (e) { lastErr = model + " parse: " + String(e).slice(0, 200); }
  }
  throw new Error("browse failed: " + lastErr);
}

function send(res, code, obj, origin) {
  const h = { "Content-Type": "application/json" };
  if (origin && (CORS.length === 0 || CORS.includes(origin))) { h["Access-Control-Allow-Origin"] = origin; h["Vary"] = "Origin"; }
  res.writeHead(code, h); res.end(JSON.stringify(obj));
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin || "";
  if (req.method === "OPTIONS") { send(res, 204, {}, origin); return; }
  const url = new URL(req.url, `http://${req.headers.host}`);

  // --- static: serve index.html / full.html / listings.json ---
  if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(path.join(__dir, "index.html")).pipe(res); return;
  }
  if (req.method === "GET" && url.pathname === "/full.html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(path.join(__dir, "full.html")).pipe(res); return;
  }
  if (req.method === "GET" && url.pathname === "/listings.json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    fs.createReadStream(path.join(__dir, "listings.json")).pipe(res); return;
  }
  if (req.method === "GET" && url.pathname === "/api/health") {
    send(res, 200, { ok: true, hasKey: !!KEY, embedModel: EMBED_MODEL, chatModel: CHAT_MODEL, browseModel: BROWSE_MODEL }, origin); return;
  }

  if (req.method !== "POST") { send(res, 404, { error: "not found" }, origin); return; }
  let body = "";
  for await (const c of req) body += c;
  let q = {};
  try { q = JSON.parse(body || "{}"); } catch { /* ignore */ }

  try {
    if (url.pathname === "/api/semantic") {
      if (!KEY) { send(res, 400, { error: "OPENAI_API_KEY missing in .env — frontend will use local fallback." }, origin); return; }
      const query = String(q.query || "").slice(0, 500);
      if (!query) { send(res, 400, { error: "query required" }, origin); return; }
      const qv = await embed(query);
      const scored = [];
      for (const l of LISTINGS) scored.push({ ...l, score: cosine(qv, await listingVector(l)) });
      scored.sort((a, b) => b.score - a.score);
      send(res, 200, { model: EMBED_MODEL, results: scored.slice(0, q.limit || 8) }, origin); return;
    }
    if (url.pathname === "/api/browse") {
      if (!KEY) { send(res, 400, { error: "OPENAI_API_KEY missing in .env." }, origin); return; }
      const out = await browseWeb(String(q.query || ""), q.site || "all");
      send(res, 200, out, origin); return;
    }
    send(res, 404, { error: "unknown api" }, origin);
  } catch (e) { send(res, 500, { error: String(e.message || e).slice(0, 500) }, origin); }
});

server.listen(PORT, HOST, () => console.log(`REsearch1 → http://${HOST}:${PORT}  (browse model: ${BROWSE_MODEL})`));
