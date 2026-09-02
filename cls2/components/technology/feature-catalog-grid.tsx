"use client";

import React, { useState } from "react";
import { 
  Layers, 
  Search, 
  Cpu, 
  Globe, 
  Zap, 
  Gauge, 
  Activity, 
  ShieldCheck, 
  MapPin, 
  LayoutDashboard, 
  Calculator, 
  TrendingUp, 
  Lock, 
  Sliders,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { WORKING_FEATURES, WorkingFeature } from "@/lib/property-data";

const ICON_MAP: Record<string, any> = {
  Cpu,
  Globe,
  Zap,
  Gauge,
  Activity,
  ShieldCheck,
  MapPin,
  LayoutDashboard,
  Calculator,
  TrendingUp,
  Lock,
  Sliders
};

export function FeatureCatalogGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Features (12)" },
    { id: "AI & Conversion", label: "AI & Conversion" },
    { id: "SEO & Traffic", label: "SEO & Traffic" },
    { id: "Speed & Infrastructure", label: "Speed & Edge" },
    { id: "Lead Capture", label: "Lead Capture & ROI" }
  ];

  const filteredFeatures = WORKING_FEATURES.filter(feat => {
    const matchesCategory = activeCategory === "all" || feat.category === activeCategory;
    const matchesSearch = 
      feat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feat.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="features" className="py-20 bg-background text-foreground transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL PRODUCTION FEATURE SET</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight">
            Visible Technology Engine: Features That Actually Work
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            No empty buzzwords or fake mockups. Every single algorithm, schema builder, speed optimization, and lead router listed below is fully operational in production.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search working features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-card border border-border text-xs text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
            />
          </div>

        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFeatures.map(feat => {
            const Icon = ICON_MAP[feat.icon] || Layers;

            return (
              <div
                key={feat.id}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-foreground leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Benchmark Ribbon */}
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-500 font-bold font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{feat.benchmark}</span>
                  </div>

                  <span className="text-[10px] text-muted-foreground font-mono uppercase">
                    {feat.category}
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
