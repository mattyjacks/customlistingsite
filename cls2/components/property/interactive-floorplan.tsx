"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  MapPin, 
  Maximize2, 
  Eye, 
  Layers,
  ChevronRight,
  Info
} from "lucide-react";
import { FLOORPLAN_LEVELS, FloorplanPin } from "@/lib/property-data";

interface InteractiveFloorplanProps {
  onSelectPhoto: (src: string) => void;
}

export function InteractiveFloorplan({ onSelectPhoto }: InteractiveFloorplanProps) {
  const [activeLevelKey, setActiveLevelKey] = useState<string>("main");
  const [selectedPin, setSelectedPin] = useState<FloorplanPin | null>(
    FLOORPLAN_LEVELS.main.pins[0]
  );

  const activeLevel = FLOORPLAN_LEVELS[activeLevelKey];

  return (
    <section id="floorplan" className="py-16 bg-card text-foreground border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-500 mb-1">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>ARCHITECTURAL HOTSPOTS</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-foreground">
              Interactive Dimensioned Floorplan &amp; Hotspots
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Click any numbered room hotspot to inspect room measurements, architectural features, and photography.
            </p>
          </div>

          {/* Level Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-muted border border-border">
            {Object.entries(FLOORPLAN_LEVELS).map(([key, level]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveLevelKey(key);
                  setSelectedPin(level.pins[0] || null);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeLevelKey === key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={`Switch to ${level.name}`}
              >
                {level.name.split(" ")[0]} {level.name.split(" ")[1] || ""}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left 2 Cols: Interactive Blueprint Canvas */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-obsidian-950 border-2 border-cyan-500/30 bg-cad-grid min-h-[420px] sm:min-h-[480px] flex items-center justify-center p-6 shadow-xl">
            
            {/* Blueprint Overlay Image */}
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900/80 border border-white/10 shadow-2xl">
              <img
                src="/images/floorplan.jpg"
                alt="Floorplan Blueprint Graphic"
                className="w-full h-full object-contain p-2 opacity-85"
              />

              {/* Dynamic Coordinate Pins */}
              {activeLevel.pins.map((pin, idx) => {
                const isSelected = selectedPin?.id === pin.id;

                return (
                  <button
                    key={pin.id}
                    onClick={() => setSelectedPin(pin)}
                    style={{ top: pin.top, left: pin.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-all duration-300 ${
                      isSelected
                        ? "bg-amber-400 text-slate-950 scale-125 ring-4 ring-amber-400/40 z-20"
                        : "bg-cyan-500 text-slate-950 hover:scale-110 hover:bg-cyan-400 z-10"
                    }`}
                    title={`${pin.label} (${pin.roomSize})`}
                    aria-label={`Hotspot ${idx + 1}: ${pin.label}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Level Badge Callout */}
            <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-mono">
              {activeLevel.name}
            </div>
          </div>

          {/* Right Col: Selected Room Detail Spotlight */}
          {selectedPin && (
            <div className="p-6 rounded-3xl bg-background border border-border shadow-lg flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    ROOM SPOTLIGHT
                  </span>
                  <span className="font-mono text-xs font-bold text-muted-foreground">
                    Dimensions: {selectedPin.roomSize}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-xl text-foreground">
                    {selectedPin.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {selectedPin.description}
                  </p>
                </div>

                {/* Preview Thumbnail */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-sm group">
                  <img
                    src={selectedPin.img}
                    alt={selectedPin.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                    <button
                      onClick={() => onSelectPhoto(selectedPin.img)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white text-xs font-bold hover:bg-black transition-colors"
                      aria-label={`View full resolution of ${selectedPin.label}`}
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Full Resolution</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-muted-foreground border-t border-border flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Dimensions derived directly from architect construction drawings.</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
