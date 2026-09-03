"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Eye, 
  Wrench, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Sliders, 
  ShieldCheck, 
  RotateCcw,
  Home,
  Briefcase
} from "lucide-react";

// Components for Buyer View
import { PropertyHero } from "@/components/property/property-hero";
import { TemplateSwitcherBar } from "@/components/property/template-switcher-bar";
import { TemplateEditorial } from "@/components/property/template-editorial";
import { TemplateMidnight } from "@/components/property/template-midnight";
import { TemplateCoastal } from "@/components/property/template-coastal";
import { TemplateSwiss } from "@/components/property/template-swiss";
import { TemplateHeritage } from "@/components/property/template-heritage";
import { TemplateBlueprint } from "@/components/property/template-blueprint";
import { MediaShowcaseDual } from "@/components/property/media-showcase-dual";
import { InteractiveFloorplan } from "@/components/property/interactive-floorplan";
import { NeighborhoodRadar } from "@/components/property/neighborhood-radar";
import { MortgageEstimator } from "@/components/property/mortgage-estimator";
import { PropertySpecifications } from "@/components/property/property-specifications";
import { PriceHistoryTable } from "@/components/property/price-history-table";
import { ScheduleShowingModal } from "@/components/property/schedule-showing-modal";
import { PhotoGalleryModal } from "@/components/property/photo-gallery-modal";

// Components for Seller / Realtor Toolset
import { SelfOptimizingEngine } from "@/components/analytics/self-optimizing-engine";
import { AgenticPipelineDemo } from "@/components/analytics/agentic-pipeline-demo";
import { RealtorRoiCalculator } from "@/components/property/realtor-roi-calculator";
import { WhyWeWinMatrix } from "@/components/technology/why-we-win-matrix";
import { UrlSchemaGenerator } from "@/components/technology/url-schema-generator";
import { SpeedToLeadSimulator } from "@/components/technology/speed-to-lead-simulator";
import { PerformanceBenchmarks } from "@/components/technology/performance-benchmarks";
import { FeatureCatalogGrid } from "@/components/technology/feature-catalog-grid";

// Shared Layout & Compliance
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ClarityMouseTracker } from "@/components/analytics/clarity-mouse-tracker";
import { CookieConsentBanner } from "@/components/legal/cookie-consent-banner";
import { BANDIT_VARIANTS, BanditVariant, TemplateDefinition } from "@/lib/property-data";

export default function HomePage() {
  // Mode: "portal" (Landing choice), "buyer" (What the buyer sees), "seller" (Realtor & Seller tools)
  const [activeMode, setActiveMode] = useState<"portal" | "buyer" | "seller">("portal");

  // Bandit State (for seller / buyer demo)
  const [currentVariant, setCurrentVariant] = useState<BanditVariant>(BANDIT_VARIANTS[0]);
  const [rewardScore, setRewardScore] = useState(75);

  // Template State
  const [activeTemplate, setActiveTemplate] = useState<TemplateDefinition["id"]>(
    BANDIT_VARIANTS[0].themeStyle
  );

  // Modals & Heatmap
  const [isHeatmapActive, setIsHeatmapActive] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);

  const handleVariantChange = (variant: BanditVariant) => {
    setCurrentVariant(variant);
    setActiveTemplate(variant.themeStyle);
  };

  const handleOpenPhotoLightbox = (index: number) => {
    setGalleryStartIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors overflow-x-hidden">
      
      {/* 1. Global Navigation Header */}
      <SiteHeader
        onToggleHeatmap={() => setIsHeatmapActive(!isHeatmapActive)}
        isHeatmapActive={isHeatmapActive}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* Mode Switcher Banner (Visible across all views) */}
      <div className="w-full bg-muted/60 border-b border-border py-3 px-4 sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-foreground flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Perspective Switcher:</span>
            </span>
            <span className="text-muted-foreground hidden md:inline">
              Currently viewing: <strong className="text-foreground capitalize">{activeMode === "portal" ? "Overview Hub" : activeMode === "buyer" ? "Home Buyer View" : "Realtor & Seller Toolset"}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-xl bg-background/80 border border-border shadow-sm text-xs font-semibold">
            <button
              onClick={() => setActiveMode("portal")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeMode === "portal"
                  ? "bg-primary text-primary-foreground shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveMode("buyer")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeMode === "buyer"
                  ? "bg-blue-600 text-white shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>See Buyer View</span>
            </button>

            <button
              onClick={() => setActiveMode("seller")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeMode === "seller"
                  ? "bg-amber-500 text-slate-950 shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>See Seller Toolset</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full">
        
        {/* ========================================================================= */}
        {/* VIEW 1: SUPER SIMPLE UNDER-CONSTRUCTION PORTAL                             */}
        {/* ========================================================================= */}
        {activeMode === "portal" && (
          <section className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background">
            <div className="max-w-3xl w-full text-center space-y-8">
              
              {/* Under Construction Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-500 border border-amber-500/30">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span>UNDER CONSTRUCTION &bull; INTERACTIVE PREVIEW</span>
              </div>

              {/* Exact user-requested statement */}
              <div className="space-y-4">
                <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-tight">
                  CustomListingSite 2.0
                </h1>
                
                <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  This is an under-construction website with tech demos for both what the real estate buyer sees and for the tools that are available to the realtor or seller.
                </p>
              </div>

              {/* Two Primary Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-4">
                
                {/* Button 1: Buyer View */}
                <button
                  onClick={() => setActiveMode("buyer")}
                  className="group p-6 rounded-2xl bg-card border-2 border-border hover:border-blue-500 transition-all text-left space-y-3 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                      <Home className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-foreground">
                      See Buyer View
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Experience the single-property showcase exactly as home buyers see it: 6 luxury themes, 360° street views, interactive floorplans, and school radar.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-500 pt-1">
                    <span>Explore Listing Showcase</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </button>

                {/* Button 2: Seller Toolset */}
                <button
                  onClick={() => setActiveMode("seller")}
                  className="group p-6 rounded-2xl bg-card border-2 border-border hover:border-amber-500 transition-all text-left space-y-3 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-foreground">
                      See Seller Toolset
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Inspect the high-tech marketing tools: self-learning multi-armed bandit, 4.2s speed-to-lead simulator, Antigravity AI pipeline, and 42x ROI modeler.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-500 pt-1">
                    <span>Test Working Realtor Tools</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </button>

              </div>

              {/* Direct Link to Free Interactive Studio */}
              <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span>Want to generate your own bespoke listing in 60 seconds?</span>
                <Link
                  href="/control-panel"
                  className="font-bold text-foreground hover:text-primary underline underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>Open Free Studio Builder</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHAT THE BUYER SEES (Single-Property Showcase)                    */}
        {/* ========================================================================= */}
        {activeMode === "buyer" && (
          <div className="space-y-2 animate-in fade-in duration-200">
            
            {/* Buyer Mode Banner */}
            <div className="bg-blue-600/10 border-b border-blue-500/20 py-2.5 px-4 text-xs text-blue-400">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-500" />
                  <strong>BUYER VIEW ACTIVE:</strong> This is the front-facing property website presented to prospective home buyers.
                </span>
                <button
                  onClick={() => setActiveMode("seller")}
                  className="font-bold underline hover:text-blue-300"
                >
                  Switch to Seller Toolset &rarr;
                </button>
              </div>
            </div>

            {/* 1. Property Hero Banner */}
            <PropertyHero
              customHeadline={currentVariant.headline}
              customBadge={currentVariant.badgeText}
              onOpenShowingModal={() => setIsTourModalOpen(true)}
              onOpenGallery={() => handleOpenPhotoLightbox(0)}
            />

            {/* 2. Bespoke Template Switcher Bar */}
            <TemplateSwitcherBar
              activeTemplate={activeTemplate}
              onSelectTemplate={(id) => setActiveTemplate(id)}
            />

            {/* 3. Dynamic Active Template View */}
            <div className="px-4 sm:px-6 lg:px-8">
              {activeTemplate === "editorial" && <TemplateEditorial />}
              {activeTemplate === "midnight" && <TemplateMidnight />}
              {activeTemplate === "coastal" && <TemplateCoastal />}
              {activeTemplate === "swiss" && <TemplateSwiss />}
              {activeTemplate === "heritage" && <TemplateHeritage />}
              {activeTemplate === "blueprint" && <TemplateBlueprint />}
            </div>

            {/* 4. Interactive Dual Map & 360° Street View Media Showcase */}
            <MediaShowcaseDual
              onOpenPhotoLightbox={handleOpenPhotoLightbox}
            />

            {/* 5. Interactive Floorplan & Hotspots */}
            <InteractiveFloorplan
              onSelectPhoto={() => handleOpenPhotoLightbox(9)}
            />

            {/* 6. Neighborhood & Schools Radar */}
            <NeighborhoodRadar />

            {/* 7. Interactive Mortgage & Monthly Payment Estimator */}
            <MortgageEstimator />

            {/* 8. Comprehensive Specifications & Facts Grid */}
            <PropertySpecifications />

            {/* 9. Price & Assessment History */}
            <PriceHistoryTable />

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: SELLER & REALTOR TOOLSET (High-Tech Conversion Engine)            */}
        {/* ========================================================================= */}
        {activeMode === "seller" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            
            {/* Seller Mode Banner */}
            <div className="bg-amber-500/10 border-b border-amber-500/20 py-2.5 px-4 text-xs text-amber-500">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-500" />
                  <strong>SELLER &amp; REALTOR TOOLSET ACTIVE:</strong> Behind-the-scenes algorithms and conversion tools.
                </span>
                <button
                  onClick={() => setActiveMode("buyer")}
                  className="font-bold underline hover:text-amber-400"
                >
                  Switch to Buyer View &rarr;
                </button>
              </div>
            </div>

            {/* 1. Self-Optimizing Multi-Armed Bandit Brain HUD */}
            <SelfOptimizingEngine
              currentVariant={currentVariant}
              onVariantChange={handleVariantChange}
              rewardScore={rewardScore}
            />

            {/* 2. "Why We Win" Competitive Advantage Matrix */}
            <WhyWeWinMatrix />

            {/* 3. Interactive Technology Center (Working Features) */}
            <section className="py-20 bg-muted/30 border-b border-border transition-colors">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    LIVE WORKING TOOLS
                  </span>
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground">
                    Interactive Technology Demonstration
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Test the exact tools that make CustomListingSite 2.0 the highest-converting single-property software in the real estate industry.
                  </p>
                </div>

                {/* Tool 1: Programmatic URL Schema Generator */}
                <UrlSchemaGenerator />

                {/* Tool 2: Speed-to-Lead 4.2s Webhook Dispatch Simulator */}
                <SpeedToLeadSimulator />

                {/* Tool 3: Sub-100ms Core Web Vitals Benchmark Test */}
                <PerformanceBenchmarks />
              </div>
            </section>

            {/* 4. Full Production Working Feature Catalog Grid */}
            <FeatureCatalogGrid />

            {/* 5. Google Antigravity Cloud Harness & Human-in-the-Loop Pipeline Demo */}
            <AgenticPipelineDemo />

            {/* 6. Realtor Commission 42x ROI Modeler */}
            <RealtorRoiCalculator />

          </div>
        )}

      </main>

      {/* Shared Master Global Footer */}
      <SiteFooter />

      {/* Shared NH RSA 507-H Cookie Consent Banner */}
      <CookieConsentBanner />

      {/* Shared Clarity-Style Mouse Tracking Engine */}
      <ClarityMouseTracker
        isActive={isHeatmapActive}
        onRewardScoreUpdate={(score) => setRewardScore(score)}
      />

      {/* Shared Modals */}
      <ScheduleShowingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />

      <PhotoGalleryModal
        isOpen={isGalleryOpen}
        initialIndex={galleryStartIndex}
        onClose={() => setIsGalleryOpen(false)}
      />

    </div>
  );
}
