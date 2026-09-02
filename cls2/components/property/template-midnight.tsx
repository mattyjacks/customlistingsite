import React from "react";
import { Moon, ShieldCheck, Activity, Sparkles, Terminal, Eye, Zap, Layers } from "lucide-react";
import { PROPERTY_DATA } from "@/lib/property-data";

export function TemplateMidnight() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8">
      
      {/* Metric Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-cyan-500/30 backdrop-blur-xl text-center shadow-lg">
          <div className="font-mono font-black text-xl sm:text-2xl text-cyan-400">
            ${PROPERTY_DATA.price.toLocaleString()}
          </div>
          <div className="text-[10px] font-mono uppercase text-slate-400 mt-0.5">
            Active Listing Price
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-white/10 backdrop-blur-xl text-center shadow-lg">
          <div className="font-mono font-black text-xl sm:text-2xl text-white">
            {PROPERTY_DATA.beds} Beds
          </div>
          <div className="text-[10px] font-mono uppercase text-slate-400 mt-0.5">
            Bedrooms
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-white/10 backdrop-blur-xl text-center shadow-lg">
          <div className="font-mono font-black text-xl sm:text-2xl text-white">
            {PROPERTY_DATA.baths} Baths
          </div>
          <div className="text-[10px] font-mono uppercase text-slate-400 mt-0.5">
            Bathrooms
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-white/10 backdrop-blur-xl text-center shadow-lg">
          <div className="font-mono font-black text-xl sm:text-2xl text-emerald-400">
            {PROPERTY_DATA.sqft.toLocaleString()}
          </div>
          <div className="text-[10px] font-mono uppercase text-slate-400 mt-0.5">
            Interior SqFt
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-amber-500/30 backdrop-blur-xl text-center shadow-lg col-span-2 sm:col-span-1">
          <div className="font-mono font-black text-xl sm:text-2xl text-amber-400">
            {PROPERTY_DATA.lotAcres} Ac
          </div>
          <div className="text-[10px] font-mono uppercase text-slate-400 mt-0.5">
            Private Grounds
          </div>
        </div>
      </div>

      {/* Cyber Executive Narrative Box */}
      <section className="p-8 sm:p-10 rounded-3xl bg-obsidian-950/90 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-8 text-slate-200">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
            <Moon className="w-3.5 h-3.5" />
            <span>MIDNIGHT EXECUTIVE DASHBOARD MODE</span>
          </div>

          <span className="text-[11px] font-mono text-slate-400">
            PARCEL ID: ROCKINGHAM-03036-77 &bull; SECURE CONVEYANCE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              Obsidian Architecture: 77 Example Road, Chester NH
            </h2>
            <p>
              An obsidian-inspired retreat of light-filled open spaces, natural hardwoods, and serene tree-lined vistas. 77 Example Road represents modern luxury engineered for the discerning technologist and executive.
            </p>

            <div className="p-4 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-400 text-cyan-200 font-mono text-xs sm:text-sm">
              &ldquo;Engineered with multi-zone high-efficiency climate controls, 200A dedicated power, and private natural acreage—the ultimate balance of rural solitude and hyper-speed connectivity.&rdquo;
            </div>
          </div>

          <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl">
            <img
              src="/images/aerial.jpg"
              alt="Aerial Forest Canopy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="font-mono text-cyan-300 text-xs">
                Aerial Canopy: 2.5 Contiguous Forested Acres
              </span>
            </div>
          </div>
        </div>

        {/* System Diagnostics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
          <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1">
            <div className="text-slate-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>POWER FEED</span>
            </div>
            <div className="font-bold text-white">200A Dedicated Underground</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1">
            <div className="text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>CLIMATE COP</span>
            </div>
            <div className="font-bold text-white">Multi-Zone Inverter Heat Pump</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1">
            <div className="text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>TITLE QUALITY</span>
            </div>
            <div className="font-bold text-white">Fee Simple Unencumbered</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1">
            <div className="text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>FOUNDATION</span>
            </div>
            <div className="font-bold text-white">Poured Reinforced Concrete</div>
          </div>
        </div>
      </section>

    </div>
  );
}
