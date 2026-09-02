"use client";

import React, { useState } from "react";
import { 
  GraduationCap, 
  School, 
  Trees, 
  Waves, 
  Plane, 
  Building2, 
  MapPin, 
  Car, 
  Clock
} from "lucide-react";
import { NEIGHBORHOOD_ITEMS, NeighborhoodItem } from "@/lib/property-data";

const ICON_MAP = {
  GraduationCap,
  School,
  Trees,
  Waves,
  Plane,
  Building2
};

export function NeighborhoodRadar() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Highlights" },
    { id: "schools", label: "Top Schools & Academies" },
    { id: "nature", label: "Nature & Conservation Parks" },
    { id: "commute", label: "Regional Commute Distances" }
  ];

  const filteredItems = NEIGHBORHOOD_ITEMS.filter(
    item => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="neighborhood" className="py-16 bg-background text-foreground transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-600 dark:text-green-400 mb-1">
              <Trees className="w-3.5 h-3.5" />
              <span>HYPER-LOCAL LIVING</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-foreground">
              Neighborhood, Schools &amp; Regional Commute
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Explore top-rated Rockingham County school districts, pristine nature trails, and highway access to Boston.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Neighborhood Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map(item => {
            const Icon = (ICON_MAP as any)[item.icon] || MapPin;

            return (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>

                    {item.badge && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-muted text-foreground border border-border">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between text-xs font-medium text-foreground">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Car className="w-3.5 h-3.5 text-blue-500" />
                    <span>Drive Time</span>
                  </span>
                  <span className="font-mono font-bold text-blue-500">
                    {item.scoreOrDistance}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
