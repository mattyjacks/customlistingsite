import React from "react";
import { Compass, Ruler, Layers, Box, Cpu, Eye } from "lucide-react";
import { PROPERTY_DATA } from "@/lib/property-data";

export function TemplateBlueprint() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8 font-mono">
      
      {/* Blueprint Studio Stage */}
      <section className="p-8 sm:p-12 rounded-3xl bg-blueprint-dark border-2 border-cyan-400/40 bg-cad-grid text-slate-200 shadow-2xl space-y-8">
        
        {/* Title Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-cyan-500/30 pb-6 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-bold">
              <Compass className="w-4 h-4" />
              <span>DWG NO: ARCH-2026-77EX</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              77 EXAMPLE RD &bull; CAD SPEC SHEET
            </h2>
          </div>

          <div className="text-right">
            <div className="text-xs text-slate-400">STRUCTURAL APPRAISAL</div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-300">
              ${PROPERTY_DATA.price.toLocaleString()}
            </div>
          </div>
        </div>

        {/* CAD Blueprint Drawing Visual Stage */}
        <div className="relative rounded-2xl overflow-hidden border border-cyan-500/40 bg-slate-950 p-4 shadow-xl">
          <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-black/80 border border-cyan-500/30 text-[10px] text-cyan-400 font-mono">
            SCALE: 1/4&quot; = 1&apos;-0&quot; &bull; CAD ARCHITECTURAL ELEVATION
          </div>
          <img
            src="/images/floorplan.jpg"
            alt="2D Floorplan CAD Drawing"
            className="w-full max-h-[360px] object-contain opacity-90 mx-auto"
          />
        </div>

        {/* 3 Structural Callout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          
          <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Ruler className="w-4 h-4" />
              <span>Dimensional Volume</span>
            </div>
            <ul className="space-y-1 text-slate-300">
              <li>• Total Area: 3,850 SqFt Gross</li>
              <li>• Main Level: 2,240 SqFt</li>
              <li>• Upper Sanctuary: 1,610 SqFt</li>
              <li>• Ceilings: 18&apos;-0&quot; Peak Height</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Layers className="w-4 h-4" />
              <span>Envelope &amp; Framing</span>
            </div>
            <ul className="space-y-1 text-slate-300">
              <li>• 2x6 Exterior Framing @ 16&quot; O.C.</li>
              <li>• R-40 Blown Cellulose Insulation</li>
              <li>• Vertical Architectural Cedar Siding</li>
              <li>• Architectural Low-E Glass (U-0.24)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Cpu className="w-4 h-4" />
              <span>Mechanical Systems</span>
            </div>
            <ul className="space-y-1 text-slate-300">
              <li>• Multi-Zone Inverter Heat Pump</li>
              <li>• Central Air (SEER 18 Rating)</li>
              <li>• 200A Underground Service Feed</li>
              <li>• Whole-Home Generator Transfer Ready</li>
            </ul>
          </div>

        </div>

        {/* Technical Blueprint Footnote */}
        <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-300 flex items-center justify-between">
          <span>CAD Engineering Reference: Rockingham County NH GIS Record #48-219</span>
          <span className="font-bold">STATUS: READY FOR CONVEYANCE</span>
        </div>

      </section>

    </div>
  );
}
