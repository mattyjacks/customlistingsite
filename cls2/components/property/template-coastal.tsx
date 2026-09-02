"use client";

import React, { useState } from "react";
import { Waves, Sparkles, Sun, Compass } from "lucide-react";

interface CoastalSpace {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  desc: string;
  highlights: string[];
}

const COASTAL_SPACES: CoastalSpace[] = [
  {
    id: "great-room",
    title: "The Great Room & Timber Fireplace",
    subtitle: "Airy 18-foot ceilings with natural forest sightlines",
    img: "/images/living_room.jpg",
    desc: "Flooded with morning southern light through custom Andersen architectural windows. Features handcrafted natural wood beams and a massive honed-slate wood-burning fireplace.",
    highlights: ["18-Foot Cathedral Volume", "Natural White Oak Planks", "Direct Flagstone Patio Walkout"]
  },
  {
    id: "chef-kitchen",
    title: "Chef's Culinary Gallery & Island",
    subtitle: "Custom slate-blue cabinetry with quartz waterfall island",
    img: "/images/kitchen.jpg",
    desc: "A relaxed coastal gourmet kitchen featuring bespoke slate-blue millwork, a dramatic Calacatta waterfall island, and a walk-in butler's pantry with wine refrigeration.",
    highlights: ["Calacatta Quartz Island", "Commercial 6-Burner Gas Range", "Butler's Prep Pantry"]
  },
  {
    id: "primary-sanctuary",
    title: "The Primary Sanctuary Suite",
    subtitle: "Private retreat with forest overlook and spa bath",
    img: "/images/master_suite.jpg",
    desc: "Positioned on the upper level for total tranquility. Enclosed by forest canopy with an oversized walk-in California closet and radiant-heated bathroom stone floors.",
    highlights: ["Private Balcony Overlook", "Dual Custom Walk-In Closets", "Radiant Heated Floors"]
  },
  {
    id: "outdoor-hearth",
    title: "Flagstone Hearth & Pergola Grounds",
    subtitle: "850 SqFt outdoor stone entertaining space",
    img: "/images/patio_backyard.jpg",
    desc: "Step outside to an artisan flagstone patio with a built-in outdoor masonry fireplace, cedar shade pergola, and private forest trail access.",
    highlights: ["Stone Masonry Fireplace", "Cedar Shade Pergola", "Direct Forest Trail Access"]
  }
];

export function TemplateCoastal() {
  const [activeSpaceId, setActiveSpaceId] = useState<string>("great-room");

  const currentSpace = COASTAL_SPACES.find(s => s.id === activeSpaceId) || COASTAL_SPACES[0];

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8">
      
      {/* Coastal Walkthrough Stage */}
      <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950/10 via-card to-card border border-blue-500/20 shadow-xl space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-1">
              <Waves className="w-3.5 h-3.5" />
              <span>COASTAL RESORT WALKTHROUGH</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-foreground">
              A Room-by-Room Walkthrough Experience
            </h2>
          </div>

          <span className="text-xs text-muted-foreground font-mono">
            HAMPTONS AESTHETIC &bull; CHESTER, NH
          </span>
        </div>

        {/* Space Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {COASTAL_SPACES.map(space => (
            <button
              key={space.id}
              onClick={() => setActiveSpaceId(space.id)}
              className={`p-3 rounded-2xl text-left border transition-all text-xs ${
                space.id === activeSpaceId
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-muted/50 border-border text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <div className="font-bold truncate">{space.title.split("&")[0]}</div>
              <div className="text-[10px] opacity-80 truncate">{space.subtitle}</div>
            </button>
          ))}
        </div>

        {/* Selected Space Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pt-2">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg">
            <img
              src={currentSpace.img}
              alt={currentSpace.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-display font-extrabold text-xl text-foreground">
                {currentSpace.title}
              </h3>
              <p className="text-xs text-primary font-medium mt-0.5">
                {currentSpace.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {currentSpace.desc}
            </p>

            <div className="space-y-2 pt-2 border-t border-border">
              <div className="text-[11px] font-bold text-foreground uppercase tracking-wider">
                Key Architectural Highlights:
              </div>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {currentSpace.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
