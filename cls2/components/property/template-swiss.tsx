import React from "react";
import { Grid, ArrowUpRight, Check, Compass, Eye } from "lucide-react";
import { PROPERTY_DATA } from "@/lib/property-data";

export function TemplateSwiss() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8 font-sans">
      
      {/* Swiss Modernist Grid Container */}
      <section className="p-8 sm:p-12 rounded-3xl bg-background border-2 border-foreground/80 shadow-2xl space-y-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-foreground pb-6 gap-4">
          <div>
            <span className="text-xs font-mono font-black uppercase tracking-widest text-rose-600">
              [ 04. SWISS MODERNIST GRID SYSTEM ]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground tracking-tighter mt-1">
              77 EXAMPLE ROAD
            </h2>
          </div>

          <div className="text-right font-mono">
            <div className="text-xs text-muted-foreground uppercase">LISTING VALUATION</div>
            <div className="text-3xl font-black text-foreground">
              ${PROPERTY_DATA.price.toLocaleString()}
            </div>
          </div>
        </div>

        {/* 2-Column High Contrast Layout with Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-xs sm:text-sm">
          
          <div className="md:col-span-7 space-y-4">
            <h3 className="font-display font-black text-xl text-foreground uppercase tracking-tight">
              Spatial Philosophy &amp; Form
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Constructed according to strict modern architectural principles. The home eliminates ornamental clutter, prioritizing pure volumetric proportion, natural light angles, and material honesty.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              2.5 private acres in Chester, New Hampshire provides an organic buffer that frames the minimalist vertical cedar structure.
            </p>
          </div>

          <div className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-foreground">
            <img
              src="/images/kitchen.jpg"
              alt="Swiss Precision Waterfall Island"
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute bottom-2 left-2 bg-foreground text-background font-mono font-bold text-[10px] px-2 py-0.5">
              FIG 01. CULINARY GEOMETRY
            </div>
          </div>

        </div>

        {/* Structured Specification Matrix */}
        <div className="border border-foreground/20 rounded-xl overflow-hidden font-mono text-xs">
          <div className="p-3 bg-foreground text-background font-bold uppercase tracking-wider flex justify-between">
            <span>Technical Property Matrix</span>
            <span className="text-rose-400 font-bold">100% SPEC COMPLIANCE</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="divide-y divide-border">
              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">GEOGRAPHIC COORDINATES</span>
                <span className="font-bold">42.9578° N, 71.2662° W</span>
              </div>
              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">TOTAL ENCLOSED AREA</span>
                <span className="font-bold">3,850 SQ FT</span>
              </div>
              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">PARCEL LAND AREA</span>
                <span className="font-bold">2.50 ACRES</span>
              </div>
            </div>

            <div className="divide-y divide-border">
              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">BEDROOM / BATH CONFIG</span>
                <span className="font-bold">4 BED / 3.5 BATH</span>
              </div>
              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">STRUCTURAL DELIVERY</span>
                <span className="font-bold">2021 ARCHITECTURAL</span>
              </div>
              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">HEATING EFFICIENCY</span>
                <span className="font-bold">SEER 18+ MULTI-ZONE</span>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
