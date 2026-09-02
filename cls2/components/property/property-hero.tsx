"use client";

import React, { useState } from "react";
import { 
  Bed, 
  Bath, 
  Maximize2, 
  Trees, 
  Calendar, 
  Camera, 
  MapPin, 
  ArrowRight,
  Sparkles,
  Share2,
  Check
} from "lucide-react";
import { PROPERTY_DATA } from "@/lib/property-data";

interface PropertyHeroProps {
  customHeadline?: string;
  customBadge?: string;
  onOpenShowingModal: () => void;
  onOpenGallery: () => void;
}

export function PropertyHero({
  customHeadline,
  customBadge,
  onOpenShowingModal,
  onOpenGallery
}: PropertyHeroProps) {
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `77 Example Road, Chester NH | CustomListingSite`,
          text: `Explore the luxury architectural residence at 77 Example Road, Chester NH: $849,900 on 2.5 acres.`,
          url: window.location.href,
        });
        return;
      } catch (err) {
        // Fallback to clipboard if user dismissed or cancelled native share
      }
    }

    // Fallback: Copy link to clipboard
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2200);
    }
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-obsidian-950 text-white min-h-[580px] lg:min-h-[640px] flex items-end">
      
      {/* Background High-Res Image with Luxury Vignette Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="77 Example Road, Chester NH Exterior Frontage"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/80 via-transparent to-obsidian-950/40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 space-y-6">
        
        {/* Dynamic Badge & MLS Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/90 text-slate-950 shadow-md backdrop-blur-md">
              {customBadge || "EXCLUSIVE RESIDENCE SHOWCASE"}
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/60 text-slate-200 border border-white/15 backdrop-blur-md">
              MLS #{PROPERTY_DATA.mlsNumber} &bull; Chester, NH
            </span>
          </div>

          {/* Working Share Button */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 hover:bg-black/80 text-slate-200 border border-white/15 backdrop-blur-md transition-colors"
            title="Share this listing"
            aria-label="Share listing link"
          >
            {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-amber-400" />}
            <span>{copiedShare ? "Link Copied!" : "Share Listing"}</span>
          </button>
        </div>

        {/* Headlines */}
        <div className="space-y-2 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400/90 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>{PROPERTY_DATA.address}, {PROPERTY_DATA.city}, {PROPERTY_DATA.state} {PROPERTY_DATA.zip}</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white drop-shadow-md">
            {customHeadline || PROPERTY_DATA.headline}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed drop-shadow line-clamp-3">
            {PROPERTY_DATA.description}
          </p>
        </div>

        {/* Pricing & Key Specs Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-4xl">
          
          <div className="space-y-0.5">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Offering Valuation
            </div>
            <div className="font-mono font-black text-3xl sm:text-4xl text-amber-400">
              ${PROPERTY_DATA.price.toLocaleString()}
            </div>
          </div>

          <div className="h-px md:h-10 w-full md:w-px bg-white/15" />

          {/* 4 Key Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
                <Bed className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white font-mono text-sm">{PROPERTY_DATA.beds}</div>
                <div className="text-slate-400 text-[10px]">Bedrooms</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
                <Bath className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white font-mono text-sm">{PROPERTY_DATA.baths}</div>
                <div className="text-slate-400 text-[10px]">Bathrooms</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white font-mono text-sm">{PROPERTY_DATA.sqft.toLocaleString()}</div>
                <div className="text-slate-400 text-[10px]">Interior SqFt</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
                <Trees className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white font-mono text-sm">{PROPERTY_DATA.lotAcres}</div>
                <div className="text-slate-400 text-[10px]">Private Acres</div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenShowingModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Private Tour</span>
            </button>

            <button
              onClick={onOpenGallery}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-colors"
            >
              <Camera className="w-4 h-4 text-cyan-400" />
              <span>View All 10 High-Res Photos</span>
            </button>

            <a
              href="#media-showcase"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <span>360° Street View &amp; Blueprint &darr;</span>
            </a>
          </div>

          <div className="text-xs text-slate-400 hidden lg:block">
            Presented by <strong className="text-white">{PROPERTY_DATA.brokerName}</strong> &bull; {PROPERTY_DATA.agentPhone}
          </div>
        </div>

      </div>
    </section>
  );
}
