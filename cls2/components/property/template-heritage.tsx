import React from "react";
import { Crown, Sparkles, Shield, Award, Castle, Landmark } from "lucide-react";
import { PROPERTY_DATA } from "@/lib/property-data";

export function TemplateHeritage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8">
      
      {/* Heritage Manor Container */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#181308] via-obsidian-950 to-obsidian-950 text-slate-200 border-2 border-amber-500/40 shadow-2xl space-y-8">
        
        {/* Heritage Header */}
        <div className="text-center space-y-3 pb-6 border-b border-amber-500/20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <Crown className="w-3.5 h-3.5" />
            <span>HERITAGE GOLD MANOR ESTATE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-amber-100 font-bold tracking-tight">
            The Residence at Chester Manor
          </h2>

          <p className="font-serif italic text-amber-300/80 text-sm sm:text-base max-w-xl mx-auto">
            A distinguished New England private residence set upon two and a half acres of private natural grounds.
          </p>
        </div>

        {/* Narrative Columns with Estate Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4 font-serif text-sm leading-relaxed text-slate-300">
            <h3 className="font-bold text-amber-300 text-lg flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Architectural Lineage &amp; Grace</span>
            </h3>
            <p>
              Embodying the timeless dignity of historical New England craftsmanship, 77 Example Road blends enduring natural timber framing with sophisticated modern appointments.
            </p>
            <p>
              Each living space has been curated to inspire reflection, from the soaring cathedral hearth room to the private second-story reading gallery overlooking ancient pine and maple stands.
            </p>
          </div>

          <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl">
            <img
              src="/images/patio_backyard.jpg"
              alt="Chester Manor Grounds"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-amber-200 text-xs font-serif italic">
                Artisan flagstone hearth and outdoor pergola grounds
              </span>
            </div>
          </div>
        </div>

        {/* Provenance Details Grid */}
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
          <h4 className="font-bold text-amber-400 uppercase tracking-widest text-xs font-mono">
            Official Estate Provenance Registry
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-serif">
            <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20 space-y-1">
              <span className="text-slate-400 block">Formal Offering:</span>
              <span className="text-amber-200 font-bold font-mono text-base">${PROPERTY_DATA.price.toLocaleString()}</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20 space-y-1">
              <span className="text-slate-400 block">Private Territory:</span>
              <span className="text-amber-200 font-bold font-mono text-base">2.50 Contiguous Acres</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20 space-y-1">
              <span className="text-slate-400 block">Accommodations:</span>
              <span className="text-amber-200 font-bold font-mono text-base">4 Beds &bull; 3.5 Baths</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20 space-y-1">
              <span className="text-slate-400 block">Township Registry:</span>
              <span className="text-amber-200 font-bold text-sm">Chester, Rockingham County NH</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
