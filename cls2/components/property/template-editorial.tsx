import React from "react";
import { Quote, Sparkles, Compass, CheckCircle2, Bed, Bath, Maximize2, Trees, Camera, ArrowRight } from "lucide-react";
import { PROPERTY_DATA } from "@/lib/property-data";

export function TemplateEditorial() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto py-8">
      
      {/* Editorial Narrative Section */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#fdfbf7] dark:bg-[#151a24] border border-[#e8dfd1] dark:border-white/10 shadow-sm space-y-8 transition-colors">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-serif italic text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Architectural Digest Showcase Feature</span>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-400 border border-amber-500/30">
            CHESTER, NH &bull; PRIVATE ESTATE
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 dark:text-white font-normal tracking-tight leading-tight">
          The Residence Narrative: Where Natural Hardwood Harmony Meets Modern Spatial Clarity
        </h2>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4 text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed font-serif">
            <p>
              Welcome to <strong>77 Example Road</strong> in desirable Chester, New Hampshire. Presented exclusively by <strong>Example Realty</strong>, this 4-bedroom, 3.5-bath architectural residence integrates modern geometric precision with 2.5 acres of secluded forest canopy.
            </p>

            <p>
              The custom culinary gallery features slate-blue solid-wood cabinetry, a dramatic Calacatta quartz waterfall center island, and an expansive butler&apos;s pantry designed for seamless grand entertaining and relaxed morning gatherings alike.
            </p>
          </div>

          <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#e8dfd1] dark:border-white/10">
            <img
              src="/images/living_room.jpg"
              alt="Living room narrative"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-serif italic">
                Soaring 18-foot cathedral ceilings with natural forest sightlines
              </span>
            </div>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="my-6 p-6 sm:p-8 rounded-2xl bg-[#f5ede1] dark:bg-white/5 border-l-4 border-amber-600 dark:border-amber-400 space-y-2">
          <Quote className="w-8 h-8 text-amber-600/40 dark:text-amber-400/40" />
          <p className="font-serif italic text-xl sm:text-2xl text-stone-900 dark:text-white leading-snug">
            &ldquo;A light-filled sanctuary designed around open sightlines, natural hardwood textures, and uninterrupted views of New England woodland.&rdquo;
          </p>
          <span className="block text-xs font-mono text-amber-800 dark:text-amber-400 uppercase tracking-widest pt-2">
            Architectural Review • Autumn 2026
          </span>
        </div>

        {/* Narrative Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#e8dfd1] dark:border-white/10 text-stone-800 dark:text-stone-300 text-xs font-serif">
          <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-[#e8dfd1] dark:border-white/5 space-y-1">
            <div className="font-bold text-amber-800 dark:text-amber-400 text-sm">Light &amp; Volume</div>
            <p>18-foot cathedral ceilings with custom clerestory transom windows.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-[#e8dfd1] dark:border-white/5 space-y-1">
            <div className="font-bold text-amber-800 dark:text-amber-400 text-sm">Artisan Materials</div>
            <p>White oak wide-plank flooring, honed slate hearth, and vertical cedar.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-[#e8dfd1] dark:border-white/5 space-y-1">
            <div className="font-bold text-amber-800 dark:text-amber-400 text-sm">Secluded Living</div>
            <p>2.5 private acres buffered by conservation woodlands and trails.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
