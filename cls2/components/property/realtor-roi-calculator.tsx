"use client";

import React, { useState } from "react";
import { TrendingUp, DollarSign, Award, CheckCircle2, ArrowRight, Sparkles, Percent } from "lucide-react";
import Link from "next/link";

export function RealtorRoiCalculator() {
  const [listingPrice, setListingPrice] = useState(849900);
  const [customDomain, setCustomDomain] = useState("77ExampleRoad.com");
  const [commissionRate, setCommissionRate] = useState(2.5);

  const commission = Math.round(listingPrice * (commissionRate / 100));
  const siteCost = 499;
  const roiMultiplier = Math.round(commission / siteCost);

  return (
    <section id="roi-calculator" className="py-16 bg-gradient-to-br from-amber-500/10 via-background to-background border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-500 border border-amber-500/30">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>REALTOR COMMISSION ROI MODELER</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-foreground">
            How a $499 Custom Site Yields a {roiMultiplier}x Commission ROI
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Demonstrate to homeowners in their living room that you invest your own marketing dollars into their listing with a bespoke domain.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Sliders */}
            <div className="space-y-5 text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-foreground">
                  <span>Target Listing Price</span>
                  <span className="font-mono text-amber-500 font-bold text-sm">
                    ${listingPrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="300000"
                  max="2500000"
                  step="25000"
                  value={listingPrice}
                  onChange={(e) => setListingPrice(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-amber-500"
                  aria-label="Target listing price slider"
                />
              </div>

              {/* Commission Rate Selector */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-foreground">
                  <span>Commission Rate</span>
                  <span className="font-mono text-amber-500 font-bold text-sm">
                    {commissionRate.toFixed(1)}%
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-muted border border-border text-center">
                  {[2.0, 2.5, 3.0, 5.0].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setCommissionRate(rate)}
                      className={`py-1 rounded-lg text-xs font-semibold transition-all ${
                        commissionRate === rate
                          ? "bg-card text-foreground font-bold shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {rate.toFixed(1)}%
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-foreground block">
                  Bespoke Property Domain Name
                </label>
                <input
                  type="text"
                  value={customDomain}
                  onChange={(e) => setCustomDomain(e.target.value)}
                  placeholder="e.g. 77ExampleRoad.com"
                  className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none"
                  aria-label="Bespoke Property Domain Name"
                />
              </div>

              <div className="p-3 rounded-xl bg-muted/50 border border-border text-xs text-muted-foreground space-y-1">
                <div className="font-bold text-foreground">Listing Presentation Talking Point:</div>
                <p className="italic">
                  &ldquo;Other agents just upload 20 photos to Zillow. We build a dedicated, high-speed website at <strong>{customDomain || "yourhome.com"}</strong> with interactive 360° tours and self-optimizing buyer algorithms.&rdquo;
                </p>
              </div>
            </div>

            {/* Right ROI Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-background to-card border-2 border-amber-500/40 space-y-6 shadow-md text-center md:text-left">
              <div className="space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-500 font-bold">
                  PROJECTED COMMISSION ({commissionRate.toFixed(1)}%)
                </div>
                <div className="font-display font-black text-3xl sm:text-4xl text-foreground">
                  ${commission.toLocaleString()}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-border text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">MattyJacks Custom Site Cost:</span>
                  <span className="font-mono font-bold text-foreground">$499 One-Time</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Net Listing Profit:</span>
                  <span className="font-mono font-bold text-emerald-500">
                    +${(commission - siteCost).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="font-bold text-foreground">Return on Investment:</span>
                  <span className="font-mono font-black text-xl text-amber-500">
                    {roiMultiplier}x ROI
                  </span>
                </div>
              </div>

              <Link
                href="/control-panel"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all active:scale-95"
              >
                <span>Build A Site In Control Panel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
