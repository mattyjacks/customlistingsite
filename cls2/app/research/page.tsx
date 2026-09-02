"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CookieConsentBanner } from "@/components/legal/cookie-consent-banner";
import { ClarityMouseTracker } from "@/components/analytics/clarity-mouse-tracker";
import { RealtorRoiCalculator } from "@/components/property/realtor-roi-calculator";
import { WhyWeWinMatrix } from "@/components/technology/why-we-win-matrix";
import { 
  BookOpen, 
  TrendingUp, 
  TrendingDown, 
  Layers, 
  Award, 
  Cpu, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  CheckCircle2,
  XCircle
} from "lucide-react";

export default function ResearchPage() {
  const [isHeatmapActive, setIsHeatmapActive] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors">
      <SiteHeader
        onToggleHeatmap={() => setIsHeatmapActive(!isHeatmapActive)}
        isHeatmapActive={isHeatmapActive}
      />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-12">
        
        {/* Research Header Hero */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-obsidian-950 via-slate-900 to-obsidian-950 text-white border border-white/15 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <BookOpen className="w-4 h-4" />
            <span>STRATEGIC BUSINESS WHITE PAPER</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight text-white">
            Strategic Business Plan &amp; Competitive Analysis: <span className="text-amber-400">CustomListingSite.com</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            A rigorous technical appraisal of the structural vulnerabilities in legacy real estate marketing technology, deconstructing incumbent pricing models (Luxury Presence), outlining headless Next.js edge architecture, and demonstrating operational talent arbitrage under the <strong>MattyJacks LLC</strong> ecosystem.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-2 border-t border-white/10 font-mono">
            <div>Published: <strong className="text-slate-200">August 2026</strong></div>
            <div>Author: <strong className="text-slate-200">MattyJacks Real Estate Technologies</strong></div>
            <div>Status: <strong className="text-emerald-400">Executive Ready</strong></div>
          </div>
        </div>

        {/* 3 Key Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-2">
            <div className="font-mono font-black text-3xl text-rose-500">87%</div>
            <div className="font-bold text-sm text-foreground">5-Year Agent Failure Rate</div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Driven by extreme customer acquisition costs and predatory $500/mo SaaS platform lock-ins that deliver zero seller listing conversions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-2">
            <div className="font-mono font-black text-3xl text-amber-500">$100–$499</div>
            <div className="font-bold text-sm text-foreground">Median Monthly Ad Budget</div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The vast majority of productive solo agents cannot afford $10,000+ upfront design agency fees, leaving a massive underserved market.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-2">
            <div className="font-mono font-black text-3xl text-emerald-500">&lt; 100ms</div>
            <div className="font-bold text-sm text-foreground">Headless TTFB Target</div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Next.js 15 server components deployed at the edge outperform bloated 3.8-second WordPress IDX plugins by over 38x speed.
            </p>
          </div>
        </div>

        {/* Section 1: The Incumbent Vulnerability (Luxury Presence Teardown) */}
        <section id="luxury-presence" className="p-6 sm:p-8 rounded-2xl bg-card border border-border space-y-5 shadow-sm">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500">
            <span>SECTION 01</span>
          </div>
          <h2 className="font-display font-bold text-2xl text-foreground">
            Deconstructing The Incumbent: Luxury Presence Pricing Vulnerabilities
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Luxury Presence has historically dominated top-tier real estate web design by charging high retainer contracts. However, an analysis of their operational model reveals key vulnerabilities that create a massive opening for CustomListingSite:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-rose-950/10 border border-rose-500/20 space-y-2">
              <div className="font-bold text-rose-500 text-sm flex items-center gap-1.5">
                <XCircle className="w-4 h-4" />
                <span>Incumbent Vulnerabilities (Luxury Presence)</span>
              </div>
              <ul className="space-y-1.5 text-muted-foreground">
                <li>• <strong>Extortionate Upfronts:</strong> $6,000 to $12,000 upfront setup fees.</li>
                <li>• <strong>Mandatory Lock-In:</strong> $500/month recurring contracts (12-month lock).</li>
                <li>• <strong>WordPress Technical Debt:</strong> 3.5s+ load times, heavy plugin dependencies.</li>
                <li>• <strong>Static Templates:</strong> Zero autonomous Bayesian multi-armed bandit optimization.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/10 border border-emerald-500/20 space-y-2">
              <div className="font-bold text-emerald-500 text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>CustomListingSite Disruption (MattyJacks)</span>
              </div>
              <ul className="space-y-1.5 text-muted-foreground">
                <li>• <strong>Flat One-Time Cost:</strong> $499 flat per property site (no lock-in).</li>
                <li>• <strong>Edge Speed:</strong> Sub-100ms globally on Next.js 15 &amp; Cloudflare.</li>
                <li>• <strong>Autonomous Bandits:</strong> Continuously learns winning hero angles &amp; copy.</li>
                <li>• <strong>Sub-5s Speed-to-Lead:</strong> Instant Twilio SMS &amp; AI voice agent dispatch.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Head-to-Head Comparison Matrix Component */}
        <WhyWeWinMatrix />

        {/* Interactive Realtor ROI Modeler */}
        <RealtorRoiCalculator />

        {/* Section 2: Talent Arbitrage & Cloud Harness */}
        <section className="p-6 sm:p-8 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/10 text-purple-500">
            <span>SECTION 02</span>
          </div>
          <h2 className="font-display font-bold text-2xl text-foreground">
            The MattyJacks Operational Talent Arbitrage &amp; Google Antigravity Cloud Harness
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            How do we deliver a $10,000-grade custom web application for $499? Through <strong>agentic workflow acceleration</strong> powered by Google Antigravity. Rather than having human web designers spend 40 hours manually slicing Figma files into WordPress, autonomous Antigravity subagents synthesize code, run automated visual regression tests in headless Chrome, and verify Core Web Vitals before staging.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            A human licensed real estate editor conducts a high-level quality review, approves the design with 1-click, and deploys it to the edge. This reduces human labor hours from 40 hours to 20 minutes, passing the radical cost savings directly to Realtors.
          </p>
        </section>

      </main>

      <SiteFooter />
      <CookieConsentBanner />
      <ClarityMouseTracker isActive={isHeatmapActive} />
    </div>
  );
}
