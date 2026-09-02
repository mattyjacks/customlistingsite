"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sliders, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  Layers,
  Palette,
  Eye,
  RefreshCw
} from "lucide-react";
import { TEMPLATES, TemplateDefinition } from "@/lib/property-data";

interface PresetProperty {
  id: string;
  address: string;
  city: string;
  state: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lotAcres: number;
  style: TemplateDefinition["id"];
  headline: string;
  img: string;
}

const PRESETS: PresetProperty[] = [
  {
    id: "chester",
    address: "77 Example Road",
    city: "Chester",
    state: "NH",
    price: 849900,
    beds: 4,
    baths: 3.5,
    sqft: 3850,
    lotAcres: 2.5,
    style: "editorial",
    headline: "Architectural Haven on 2.5 Secluded Acres",
    img: "/images/hero.jpg"
  },
  {
    id: "aspen",
    address: "410 Red Mountain Road",
    city: "Aspen",
    state: "CO",
    price: 4950000,
    beds: 5,
    baths: 6.0,
    sqft: 6200,
    lotAcres: 4.2,
    style: "midnight",
    headline: "Ultra-Modern Mountain Sanctuary with Panoramic Continental Divide Views",
    img: "/images/aerial.jpg"
  },
  {
    id: "hamptons",
    address: "18 Ocean Dune Lane",
    city: "East Hampton",
    state: "NY",
    price: 3850000,
    beds: 6,
    baths: 5.5,
    sqft: 5100,
    lotAcres: 1.8,
    style: "coastal",
    headline: "Hamptons Architectural Dune House with Private Beach Boardwalk",
    img: "/images/patio_backyard.jpg"
  }
];

export function StudioBuilder() {
  const [selectedPresetId, setSelectedPresetId] = useState("chester");
  const [deviceViewport, setDeviceViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  
  // Studio Inputs
  const [address, setAddress] = useState("77 Example Road");
  const [city, setCity] = useState("Chester");
  const [state, setState] = useState("NH");
  const [price, setPrice] = useState(849900);
  const [beds, setBeds] = useState(4);
  const [baths, setBaths] = useState(3.5);
  const [sqft, setSqft] = useState(3850);
  const [acres, setAcres] = useState(2.5);
  const [headline, setHeadline] = useState("Architectural Haven on 2.5 Secluded Acres");
  const [templateStyle, setTemplateStyle] = useState<TemplateDefinition["id"]>("editorial");
  const [aiTone, setAiTone] = useState("Poetic Architectural Digest");
  const [banditMode, setBanditMode] = useState("Balanced Thompson Sampling (Default)");

  // Deployment state
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployProgress, setDeployProgress] = useState(0);
  const [deployStep, setDeployStep] = useState("");
  const [deployedUrl, setDeployedUrl] = useState("");
  const [copiedUrl, setCopiedUrl] = useState(false);

  // Timeouts ref for clean unmounting
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(t => clearTimeout(t));
    };
  }, []);

  const handleLoadPreset = (preset: PresetProperty) => {
    setSelectedPresetId(preset.id);
    setAddress(preset.address);
    setCity(preset.city);
    setState(preset.state);
    setPrice(preset.price);
    setBeds(preset.beds);
    setBaths(preset.baths);
    setSqft(preset.sqft);
    setAcres(preset.lotAcres);
    setHeadline(preset.headline);
    setTemplateStyle(preset.style);
    setDeployedUrl("");
  };

  const handleSimulateDeploy = () => {
    // Clear any prior deploy timeouts
    timeoutsRef.current.forEach(t => clearTimeout(t));
    timeoutsRef.current = [];

    setIsDeploying(true);
    setDeployProgress(15);
    setDeployStep("1/4 Compiling Next.js 15 Server Components...");

    const t1 = setTimeout(() => {
      setDeployProgress(45);
      setDeployStep("2/4 Generating Google RealEstateListing JSON-LD Schema...");
    }, 800);

    const t2 = setTimeout(() => {
      setDeployProgress(80);
      setDeployStep("3/4 Deploying to Vercel Global Edge CDN (iad1 / sfo1 / lhr1)...");
    }, 1600);

    const t3 = setTimeout(() => {
      setDeployProgress(100);
      setDeployStep("4/4 Live Edge Deployment Operational (< 85ms TTFB)");
      const slug = address.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      setDeployedUrl(`https://${slug || "77exampleroad"}.customlistingsite.com`);
      setIsDeploying(false);
    }, 2400);

    timeoutsRef.current.push(t1, t2, t3);
  };

  const handleCopyLink = () => {
    if (!deployedUrl) return;
    navigator.clipboard.writeText(deployedUrl);
    setCopiedUrl(true);
    const t = setTimeout(() => setCopiedUrl(false), 2000);
    timeoutsRef.current.push(t);
  };

  return (
    <div className="space-y-8">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/15 via-primary/10 to-purple-500/10 border border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-500 border border-amber-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREE INTERACTIVE CONTROL PANEL</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-foreground">
            Property Site Generator Studio
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Test our property generator with zero signup required. Edit specs, adjust AI tone, select templates, and preview across devices.
          </p>
        </div>

        {/* Preset Quick Loader */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-muted-foreground block">
            Load Luxury Demo Preset:
          </label>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map(p => (
              <button
                key={p.id}
                onClick={() => handleLoadPreset(p)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedPresetId === p.id
                    ? "bg-primary text-primary-foreground shadow-sm font-bold"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
                aria-label={`Load preset for ${p.city}, ${p.state}`}
              >
                {p.city}, {p.state}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Studio Grid: Controls on Left, Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Controls Studio (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-amber-500" />
                <span>Property Attributes</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                LIVE REACTIVE
              </span>
            </div>

            {/* Inputs */}
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="font-semibold text-foreground text-xs">Property Street Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none focus:ring-2 focus:ring-primary/20 text-xs"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 space-y-1">
                  <label className="font-semibold text-foreground text-xs">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground text-xs">State</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground text-xs">Listing Price ($)</label>
                <input
                  type="number"
                  value={price || ""}
                  onChange={(e) => setPrice(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-mono font-bold outline-none text-xs"
                />
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-4 gap-2">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground text-xs">Beds</label>
                  <input
                    type="number"
                    value={beds || ""}
                    onChange={(e) => setBeds(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full px-2 py-2 rounded-xl bg-background border border-border text-foreground font-mono text-center outline-none text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground text-xs">Baths</label>
                  <input
                    type="number"
                    step="0.5"
                    value={baths || ""}
                    onChange={(e) => setBaths(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full px-2 py-2 rounded-xl bg-background border border-border text-foreground font-mono text-center outline-none text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground text-xs">SqFt</label>
                  <input
                    type="number"
                    value={sqft || ""}
                    onChange={(e) => setSqft(Math.max(100, Number(e.target.value) || 100))}
                    className="w-full px-2 py-2 rounded-xl bg-background border border-border text-foreground font-mono text-center outline-none text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground text-xs">Acres</label>
                  <input
                    type="number"
                    step="0.1"
                    value={acres || ""}
                    onChange={(e) => setAcres(Math.max(0.1, Number(e.target.value) || 0.1))}
                    className="w-full px-2 py-2 rounded-xl bg-background border border-border text-foreground font-mono text-center outline-none text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground text-xs">Hero Headline</label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none text-xs"
                />
              </div>
            </div>

            {/* Template Selector */}
            <div className="space-y-1.5 pt-2">
              <label className="font-semibold text-foreground block text-xs">
                Luxury Architectural Template
              </label>
              <select
                value={templateStyle}
                onChange={(e) => setTemplateStyle(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none text-xs"
              >
                {TEMPLATES.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.badge})
                  </option>
                ))}
              </select>
            </div>

            {/* AI Copywriting Tone */}
            <div className="space-y-1.5">
              <label className="font-semibold text-foreground block text-xs">
                Google Antigravity AI Copywriting Tone
              </label>
              <select
                value={aiTone}
                onChange={(e) => setAiTone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none text-xs"
              >
                <option>Poetic Architectural Digest (High-Status Luxury)</option>
                <option>Direct-Response High-Velocity (Investor Focused)</option>
                <option>Modern Minimalist (Spatial Clarity &amp; Craft)</option>
                <option>Family Haven &amp; Coastal Warmth (Storytelling)</option>
              </select>
            </div>

            {/* Multi-Armed Bandit Exploration Mode */}
            <div className="space-y-1.5">
              <label className="font-semibold text-foreground block text-xs">
                Self-Optimizing Bandit Exploration Algorithm
              </label>
              <select
                value={banditMode}
                onChange={(e) => setBanditMode(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none text-xs"
              >
                <option>Balanced Thompson Sampling (&epsilon; = 0.15)</option>
                <option>Aggressive Exploration (&epsilon; = 0.30 - Fast Learning)</option>
                <option>Pure Exploitation (Always Show Highest-Scoring Winner)</option>
              </select>
            </div>

            {/* Deploy Trigger Button */}
            <button
              onClick={handleSimulateDeploy}
              disabled={isDeploying}
              className="w-full py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Cpu className={`w-4 h-4 ${isDeploying ? "animate-spin" : ""}`} />
              <span>{isDeploying ? "Deploying to Edge..." : "Deploy 5-Second Cloud Sandbox"}</span>
            </button>

            {/* Deployment Progress Bar & URL output */}
            {isDeploying && (
              <div className="space-y-2 p-3 rounded-xl bg-muted/60 border border-border text-[11px] animate-in fade-in">
                <div className="flex justify-between font-mono">
                  <span>{deployStep}</span>
                  <span className="font-bold">{deployProgress}%</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${deployProgress}%` }}
                  />
                </div>
              </div>
            )}

            {deployedUrl && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs space-y-2 animate-in zoom-in-95">
                <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Edge Sandbox Deployed!</span>
                  </span>
                  <span className="text-[10px] font-mono">TTFB: 78ms</span>
                </div>

                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-background border border-border font-mono text-[11px]">
                  <span className="truncate text-foreground font-semibold">{deployedUrl}</span>
                  <button
                    onClick={handleCopyLink}
                    className="p-1 text-muted-foreground hover:text-foreground shrink-0"
                    title="Copy Link"
                    aria-label="Copy deployed sandbox URL"
                  >
                    {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Simulated Viewport (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Viewport Switcher Toolbar */}
          <div className="p-3 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <span>Interactive Viewport:</span>
              <span className="font-mono text-foreground uppercase">{deviceViewport}</span>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-muted border border-border">
              <button
                onClick={() => setDeviceViewport("desktop")}
                className={`p-1.5 rounded-lg text-xs transition-colors flex items-center gap-1 ${
                  deviceViewport === "desktop"
                    ? "bg-background text-foreground shadow-sm font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Desktop View (100% full width)"
                aria-label="Switch to desktop view"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>

              <button
                onClick={() => setDeviceViewport("tablet")}
                className={`p-1.5 rounded-lg text-xs transition-colors flex items-center gap-1 ${
                  deviceViewport === "tablet"
                    ? "bg-background text-foreground shadow-sm font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Tablet View (768px)"
                aria-label="Switch to tablet view"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>

              <button
                onClick={() => setDeviceViewport("mobile")}
                className={`p-1.5 rounded-lg text-xs transition-colors flex items-center gap-1 ${
                  deviceViewport === "mobile"
                    ? "bg-background text-foreground shadow-sm font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Mobile View (375px iPhone frame)"
                aria-label="Switch to mobile view"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>
          </div>

          {/* Interactive Simulated Device Stage */}
          <div className="p-4 sm:p-6 rounded-3xl bg-muted/40 border border-border min-h-[560px] flex items-center justify-center overflow-x-auto">
            
            <div
              className={`transition-all duration-300 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden ${
                deviceViewport === "desktop"
                  ? "w-full"
                  : deviceViewport === "tablet"
                  ? "w-[480px] sm:w-[540px]"
                  : "w-[340px]"
              }`}
            >
              {/* Simulated Browser Address Bar */}
              <div className="px-4 py-2.5 bg-muted/70 border-b border-border flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <div className="flex-1 text-center bg-background py-0.5 px-2 rounded-md border border-border truncate">
                  https://www.{address.toLowerCase().replace(/[^a-z0-9]+/g, "") || "77exampleroad"}.com
                </div>
              </div>

              {/* Dynamic Property Showcase Preview Body */}
              <div className="max-h-[520px] overflow-y-auto scrollbar-thin space-y-6">
                
                {/* Mini Hero */}
                <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                  <img
                    src={selectedPresetId === "chester" ? "/images/hero.jpg" : selectedPresetId === "aspen" ? "/images/aerial.jpg" : "/images/patio_backyard.jpg"}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-between">
                    <span className="self-start text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-mono">
                      {templateStyle.toUpperCase()} STYLE PREVIEW
                    </span>

                    <div className="text-white space-y-1">
                      <div className="text-xs text-slate-300 font-mono">
                        {city}, {state}
                      </div>
                      <h4 className="font-display font-black text-xl sm:text-2xl leading-tight">
                        {address}
                      </h4>
                      <div className="font-mono font-black text-amber-400 text-lg">
                        ${price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Specs Strip */}
                <div className="px-5 grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-muted/60 border border-border">
                    <div className="font-mono font-bold text-foreground">{beds}</div>
                    <div className="text-[10px] text-muted-foreground">Beds</div>
                  </div>
                  <div className="p-2 rounded-xl bg-muted/60 border border-border">
                    <div className="font-mono font-bold text-foreground">{baths}</div>
                    <div className="text-[10px] text-muted-foreground">Baths</div>
                  </div>
                  <div className="p-2 rounded-xl bg-muted/60 border border-border">
                    <div className="font-mono font-bold text-foreground">{sqft.toLocaleString()}</div>
                    <div className="text-[10px] text-muted-foreground">SqFt</div>
                  </div>
                  <div className="p-2 rounded-xl bg-muted/60 border border-border">
                    <div className="font-mono font-bold text-foreground">{acres}</div>
                    <div className="text-[10px] text-muted-foreground">Acres</div>
                  </div>
                </div>

                {/* Mini Story Narrative */}
                <div className="px-5 pb-6 space-y-2 text-xs text-muted-foreground leading-relaxed">
                  <div className="font-bold text-sm text-foreground">
                    {headline}
                  </div>
                  <p>
                    Tone: <em>{aiTone}</em>. Engineered with autonomous multi-armed bandit optimization ({banditMode}), sub-5-second speed-to-lead webhook routing, and Google Schema.org RealEstateListing injection.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
