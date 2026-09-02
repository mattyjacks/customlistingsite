import React from "react";
import { CheckCircle2, Home, Utensils, Trees, Wrench } from "lucide-react";

export function PropertySpecifications() {
  return (
    <section id="overview" className="py-16 bg-background text-foreground transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-foreground">
            Home Facts &amp; Architectural Specifications
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Complete property details and craftsmanship specs for 77 Example Road, Chester NH.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Interior Features */}
          <div className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-foreground font-bold text-base">
              <Home className="w-5 h-5 text-blue-500" />
              <h3>Interior Features</h3>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Bedrooms:</span>
                <span>4 Bedrooms</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Bathrooms:</span>
                <span>3 Full, 1 Half Bath</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Flooring:</span>
                <span>Natural Hardwood &amp; Slate</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Ceilings:</span>
                <span>Exposed Timber Beams (18&apos;)</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-foreground">Fireplace:</span>
                <span>Wood-Burning Stone Hearth</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Kitchen & Appliances */}
          <div className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-foreground font-bold text-base">
              <Utensils className="w-5 h-5 text-amber-500" />
              <h3>Chef&apos;s Kitchen</h3>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Cabinetry:</span>
                <span>Custom Slate-Blue Hardwood</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Countertops:</span>
                <span>Calacatta Quartz Waterfall</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Cooktop:</span>
                <span>6-Burner Commercial Gas</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Pantry:</span>
                <span>Butler&apos;s Walk-in Storage</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-foreground">Refrigerator:</span>
                <span>Built-in Sub-Zero French Door</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Grounds & Exterior */}
          <div className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-foreground font-bold text-base">
              <Trees className="w-5 h-5 text-emerald-500" />
              <h3>Grounds &amp; Structure</h3>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Acreage:</span>
                <span>2.5 Private Wooded Acres</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Construction:</span>
                <span>Architectural Vertical Cedar</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Garage:</span>
                <span>2-Car Heated + Workshop</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Outdoor Living:</span>
                <span>Flagstone Hearth &amp; Pergola</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-foreground">Zoning:</span>
                <span>Residential Agricultural</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Utilities & Mechanicals */}
          <div className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-foreground font-bold text-base">
              <Wrench className="w-5 h-5 text-purple-500" />
              <h3>Utilities &amp; Systems</h3>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Heating:</span>
                <span>Multi-Zone Heat Pump &amp; Air</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Cooling:</span>
                <span>Central AC (SEER 18+)</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Water Supply:</span>
                <span>Private Artesian Drilled Well</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-border">
                <span className="font-semibold text-foreground">Sewer:</span>
                <span>Private 4-Bedroom Septic</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-foreground">Electrical:</span>
                <span>200 Amp Service + Generator</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
