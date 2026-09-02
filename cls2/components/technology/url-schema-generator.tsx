"use client";

import React, { useState } from "react";
import { 
  Globe, 
  Copy, 
  Check, 
  Share2, 
  QrCode, 
  Code2, 
  ExternalLink,
  Sparkles
} from "lucide-react";

export function UrlSchemaGenerator() {
  const [address, setAddress] = useState("77 Example Road");
  const [city, setCity] = useState("Chester");
  const [state, setState] = useState("NH");
  const [zip, setZip] = useState("03036");
  const [price, setPrice] = useState(849900);
  const [agent, setAgent] = useState("Matthew Jackson");
  const [campaign, setCampaign] = useState("yard-sign-qr");
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);

  // Generate clean slug
  const cleanSlug = address.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const fullDomain = `https://www.${cleanSlug || "77exampleroad"}.com`;
  const fullTrackingUrl = `${fullDomain}?utm_source=${campaign}&utm_medium=offline-print&utm_campaign=listing-launch&agent=${encodeURIComponent(agent.toLowerCase().replace(/\s+/g, ""))}`;

  // Generated JSON-LD Schema
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": `${address}, ${city}, ${state} ${zip}`,
    "url": fullDomain,
    "price": price,
    "priceCurrency": "USD",
    "datePosted": "2026-08-25",
    "validFrom": "2026-08-25",
    "description": `Luxury single-property residence at ${address}, ${city}, ${state}. Presented by ${agent}.`,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "about": {
      "@type": "SingleFamilyResidence",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address,
        "addressLocality": city,
        "addressRegion": state,
        "postalCode": zip,
        "addressCountry": "US"
      },
      "numberOfRooms": 9,
      "numberOfBedrooms": 4,
      "numberOfBathroomsTotal": 3.5,
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": 3850,
        "unitCode": "FTK"
      }
    }
  };

  const schemaString = JSON.stringify(schemaJson, null, 2);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(fullTrackingUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(schemaString);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xl space-y-6">
      
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-500 mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>INTERACTIVE TOOL</span>
          </div>
          <h3 className="font-display font-black text-xl text-foreground">
            Programmatic SEO URL Schema & OpenGraph Builder
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Test how our engine constructs Google-ready semantic URL schemas, rich RealEstateListing JSON-LD, and UTM tracking links.
          </p>
        </div>

        <button
          onClick={handleCopyUrl}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-md transition-all active:scale-95 shrink-0"
        >
          {copiedUrl ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copiedUrl ? "Copied Link!" : "Copy Live URL"}</span>
        </button>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        
        <div className="space-y-1.5">
          <label className="font-semibold text-foreground">Property Street Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label className="font-semibold text-foreground">City & State</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-2/3 px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium focus:ring-2 focus:ring-primary/20 outline-none"
            />
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-1/3 px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="font-semibold text-foreground">Listing Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label className="font-semibold text-foreground">Campaign Tag / Sign Rider</label>
          <select
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium focus:ring-2 focus:ring-primary/20 outline-none"
          >
            <option value="yard-sign-qr">Yard Sign Rider QR Code</option>
            <option value="open-house-flyer">Open House Printed Flyer</option>
            <option value="postcard-mailer">Targeted Luxury Postcard</option>
            <option value="instagram-bio">Instagram Reels Bio Link</option>
            <option value="mls-syndication">MLS Public Remarks Link</option>
          </select>
        </div>

      </div>

      {/* Generated Results: Live URL + Social Card + JSON-LD */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        
        {/* Left: Dynamic Social OpenGraph Preview Card */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-foreground flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5 text-blue-500" />
              Dynamic Social OpenGraph Card Preview
            </span>
            <span className="text-[11px] text-muted-foreground font-mono">
              Auto-Generated at Edge
            </span>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden bg-background shadow-md group">
            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
              <img
                src="/images/hero.jpg"
                alt="Social OpenGraph Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                    EXCLUSIVE LISTING
                  </span>
                  <span className="text-xs font-mono font-bold text-white bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    ${price.toLocaleString()}
                  </span>
                </div>

                <div className="space-y-0.5 text-white">
                  <div className="text-xs font-mono text-slate-300">Chester, NH 03036</div>
                  <div className="font-display font-black text-lg">{address}</div>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-card space-y-1">
              <div className="text-[11px] text-muted-foreground font-mono flex items-center gap-1">
                <span>{cleanSlug}.com</span>
                <span>&bull;</span>
                <span>Presented by {agent}</span>
              </div>
              <div className="font-bold text-sm text-foreground">
                Architectural Showcase | 4 Beds, 3.5 Baths, 2.5 Private Acres
              </div>
            </div>
          </div>

          {/* Generated Clean Tracking URL Display */}
          <div className="p-3 rounded-xl bg-muted/60 border border-border font-mono text-xs text-foreground break-all flex items-center justify-between gap-2">
            <span className="text-blue-500 font-semibold truncate">{fullTrackingUrl}</span>
            <button
              onClick={handleCopyUrl}
              className="p-1.5 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground shrink-0 transition-colors"
              title="Copy link"
            >
              {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Right: Generated JSON-LD Schema.org Block */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-foreground flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-purple-500" />
              Live Google Schema.org RealEstateListing JSON-LD
            </span>
            <button
              onClick={handleCopySchema}
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              {copiedSchema ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
              <span>{copiedSchema ? "Copied!" : "Copy Schema"}</span>
            </button>
          </div>

          <div className="relative rounded-2xl bg-obsidian-950 text-slate-200 border border-white/10 p-4 font-mono text-[11px] h-[280px] overflow-y-auto scrollbar-thin">
            <pre className="text-emerald-400">
              <code>{schemaString}</code>
            </pre>
          </div>

          <p className="text-[11px] text-muted-foreground">
            ⚡ Injected automatically into the Next.js 15 HTML head. Googlebot extracts beds, baths, price, and geo-coordinates in under 4 hours.
          </p>
        </div>

      </div>

    </div>
  );
}
