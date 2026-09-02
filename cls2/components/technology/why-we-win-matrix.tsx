import React from "react";
import { Check, X, Sparkles, ShieldAlert, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ComparisonRow {
  dimension: string;
  clsAdvantage: string;
  luxuryPresence: string;
  zillowPortals: string;
  legacyBrokerage: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: "Lead Exclusivity & Routing",
    clsAdvantage: "100% Exclusive to You. Instant SMS & AI Voice dispatch in < 5 seconds.",
    luxuryPresence: "Exclusive, but slow standard form emails with no automated dispatch.",
    zillowPortals: "ZERO exclusivity. Your buyer leads are auctioned to 3-4 competing 'Premier Agents'.",
    legacyBrokerage: "Leads often route to office floor-duty agents or general brokerage inbox."
  },
  {
    dimension: "Cost & Lock-In Contracts",
    clsAdvantage: "$499 Flat One-Time (or $99/mo edge-hosted). Zero long-term lock-in.",
    luxuryPresence: "$6,000–$12,000 Upfront + $500/mo mandatory 12-month contract ($12,000+ total).",
    zillowPortals: "$2,000–$8,000/mo ongoing ad spend or 35% commission referral fee upon closing.",
    legacyBrokerage: "Included in brokerage split, but basic cookie-cutter templates."
  },
  {
    dimension: "Conversion Optimization",
    clsAdvantage: "Self-Optimizing Bayesian Multi-Armed Bandit testing hero angles, copy & CTAs.",
    luxuryPresence: "Static WordPress page. Zero continuous automated A/B or bandit optimization.",
    zillowPortals: "Optimized to keep buyers on Zillow clicking other competing homes.",
    legacyBrokerage: "Completely static subpage buried on brokerage domain."
  },
  {
    dimension: "Page Speed & Edge TTFB",
    clsAdvantage: "< 100ms Edge TTFB globally on Next.js 15 & Cloudflare TLS 1.3.",
    luxuryPresence: "2,500ms–4,500ms TTFB bloated with legacy WordPress plugins & unoptimized JS.",
    zillowPortals: "1,800ms–3,200ms TTFB bogged down by ad trackers and third-party scripts.",
    legacyBrokerage: "3,000ms+ slow generic IDX iframe syndication."
  },
  {
    dimension: "Programmatic SEO Schema",
    clsAdvantage: "Native JSON-LD RealEstateListing schema indexes in Google within hours.",
    luxuryPresence: "Standard basic WordPress meta tags, rarely updated dynamically.",
    zillowPortals: "Zillow owns the SEO authority. You get zero domain ranking benefits.",
    legacyBrokerage: "No custom schema; generic MLS syndicated content."
  },
  {
    dimension: "Human-In-The-Loop AI",
    clsAdvantage: "Google Antigravity cloud harness with 1-click licensed broker quality gate.",
    luxuryPresence: "Manual human agency agency design cycles taking 3-6 weeks to launch.",
    zillowPortals: "Generic automated MLS scraping with frequent photo and data errors.",
    legacyBrokerage: "None; manual copy-pasting from MLS sheets."
  }
];

export function WhyWeWinMatrix() {
  return (
    <section id="comparison" className="py-20 bg-card text-foreground border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>UNCOMPROMISING COMPETITIVE ADVANTAGE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight">
            Why CustomListingSite Outclasses Legacy Real Estate Tech
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Legacy agencies charge $10,000+ for slow WordPress sites. Major portals auction your hard-won listing leads to competitors. We engineered an edge-powered conversion machine that puts <strong className="text-foreground">100% of the commission in your pocket</strong>.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-xl">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-xs uppercase tracking-wider font-mono">
                <th className="p-4 sm:p-5 text-muted-foreground w-1/4">Evaluation Dimension</th>
                <th className="p-4 sm:p-5 bg-amber-500/10 text-amber-500 font-extrabold w-1/4 border-x border-amber-500/20">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>CustomListingSite 2.0</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-muted-foreground w-1/4">Luxury Presence</th>
                <th className="p-4 sm:p-5 text-muted-foreground w-1/4">Zillow / Portals</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs sm:text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr 
                  key={idx} 
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="p-4 sm:p-5 font-semibold text-foreground align-top">
                    {row.dimension}
                  </td>
                  
                  {/* CustomListingSite 2.0 Highlighted Column */}
                  <td className="p-4 sm:p-5 bg-amber-500/[0.04] border-x border-amber-500/20 font-medium text-foreground align-top space-y-1">
                    <div className="flex items-start gap-2">
                      <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-500 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{row.clsAdvantage}</span>
                    </div>
                  </td>

                  {/* Luxury Presence Column */}
                  <td className="p-4 sm:p-5 text-muted-foreground align-top space-y-1">
                    <div className="flex items-start gap-2">
                      <div className="p-0.5 rounded-full bg-rose-500/20 text-rose-500 mt-0.5 shrink-0">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{row.luxuryPresence}</span>
                    </div>
                  </td>

                  {/* Zillow Column */}
                  <td className="p-4 sm:p-5 text-muted-foreground align-top space-y-1">
                    <div className="flex items-start gap-2">
                      <div className="p-0.5 rounded-full bg-rose-500/20 text-rose-500 mt-0.5 shrink-0">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{row.zillowPortals}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deep Dive Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 via-amber-500/10 to-emerald-500/10 border border-border">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base">Want to read our 14-minute strategic business breakdown?</h4>
            <p className="text-xs text-muted-foreground">
              Deconstructing incumbent pricing vulnerabilities, headless Next.js architecture, and the MattyJacks talent arbitrage model.
            </p>
          </div>

          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20 transition-all shrink-0"
          >
            <span>Read Strategic Business Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
