"use client";

import React from "react";
import { 
  BookOpen, 
  Moon, 
  Waves, 
  Grid, 
  Crown, 
  Compass, 
  Sparkles,
  Layers
} from "lucide-react";
import { TEMPLATES, TemplateDefinition } from "@/lib/property-data";

interface TemplateSwitcherBarProps {
  activeTemplate: TemplateDefinition["id"];
  onSelectTemplate: (templateId: TemplateDefinition["id"]) => void;
}

const ICON_MAP = {
  BookOpen,
  Moon,
  Waves,
  Grid,
  Crown,
  Compass
};

export function TemplateSwitcherBar({
  activeTemplate,
  onSelectTemplate
}: TemplateSwitcherBarProps) {
  return (
    <div id="templates" className="w-full bg-card/90 backdrop-blur-md border-y border-border py-3 px-4 sticky top-16 z-30 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* Left Label */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <span>Bespoke Template Switcher</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-500 font-bold">
                6 STYLES
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground hidden sm:block">
              Switch between 6 completely distinct luxury layouts for 77 Example Rd:
            </p>
          </div>
        </div>

        {/* 6 Template Buttons Carousel */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none w-full md:w-auto">
          {TEMPLATES.map((tpl, idx) => {
            const isActive = activeTemplate === tpl.id;
            const Icon = (ICON_MAP as any)[tpl.icon] || BookOpen;

            return (
              <button
                key={tpl.id}
                onClick={() => onSelectTemplate(tpl.id)}
                aria-pressed={isActive}
                aria-label={`Select template ${idx + 1}: ${tpl.name}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-foreground text-background shadow-md scale-102 ring-1 ring-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : ""}`} />
                <span>{idx + 1}. {tpl.name}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
