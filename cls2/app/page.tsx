"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SelfOptimizingEngine } from "@/components/analytics/self-optimizing-engine";
import { ClarityMouseTracker } from "@/components/analytics/clarity-mouse-tracker";
import { AgenticPipelineDemo } from "@/components/analytics/agentic-pipeline-demo";
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
import { RealtorRoiCalculator } from "@/components/property/realtor-roi-calculator";
import { PropertySpecifications } from "@/components/property/property-specifications";
import { PriceHistoryTable } from "@/components/property/price-history-table";
import { ScheduleShowingModal } from "@/components/property/schedule-showing-modal";
import { PhotoGalleryModal } from "@/components/property/photo-gallery-modal";
import { WhyWeWinMatrix } from "@/components/technology/why-we-win-matrix";
import { UrlSchemaGenerator } from "@/components/technology/url-schema-generator";
import { SpeedToLeadSimulator } from "@/components/technology/speed-to-lead-simulator";
import { PerformanceBenchmarks } from "@/components/technology/performance-benchmarks";
import { FeatureCatalogGrid } from "@/components/technology/feature-catalog-grid";
import { CookieConsentBanner } from "@/components/legal/cookie-consent-banner";
import { BANDIT_VARIANTS, BanditVariant, TemplateDefinition } from "@/lib/property-data";

export default function HomePage() {
  // Bandit State
  const [currentVariant, setCurrentVariant] = useState<BanditVariant>(BANDIT_VARIANTS[0]);
  const [rewardScore, setRewardScore] = useState(75);

  // UI State
  const [activeTemplate, setActiveTemplate] = useState<TemplateDefinition["id"]>(
    BANDIT_VARIANTS[0].themeStyle
  );
  const [isHeatmapActive, setIsHeatmapActive] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);

  // When bandit variant changes, sync template style if desired
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

      {/* 2. Self-Optimizing Multi-Armed Bandit Brain HUD */}
      <SelfOptimizingEngine
        currentVariant={currentVariant}
        onVariantChange={handleVariantChange}
        rewardScore={rewardScore}
      />

      <main className="flex-1 w-full space-y-2">
        
        {/* 3. Property Hero Banner (Dynamic Headline Injection) */}
        <PropertyHero
          customHeadline={currentVariant.headline}
          customBadge={currentVariant.badgeText}
          onOpenShowingModal={() => setIsTourModalOpen(true)}
          onOpenGallery={() => handleOpenPhotoLightbox(0)}
        />

        {/* 4. Bespoke Template Switcher Bar */}
        <TemplateSwitcherBar
          activeTemplate={activeTemplate}
          onSelectTemplate={(id) => setActiveTemplate(id)}
        />

        {/* 5. Dynamic Active Template View */}
        <div className="px-4 sm:px-6 lg:px-8">
          {activeTemplate === "editorial" && <TemplateEditorial />}
          {activeTemplate === "midnight" && <TemplateMidnight />}
          {activeTemplate === "coastal" && <TemplateCoastal />}
          {activeTemplate === "swiss" && <TemplateSwiss />}
          {activeTemplate === "heritage" && <TemplateHeritage />}
          {activeTemplate === "blueprint" && <TemplateBlueprint />}
        </div>

        {/* 6. Interactive Dual Map & 360° Street View Media Showcase */}
        <MediaShowcaseDual
          onOpenPhotoLightbox={handleOpenPhotoLightbox}
        />

        {/* 7. Interactive Floorplan & Hotspots */}
        <InteractiveFloorplan
          onSelectPhoto={() => handleOpenPhotoLightbox(9)}
        />

        {/* 8. Neighborhood & Schools Radar */}
        <NeighborhoodRadar />

        {/* 9. Interactive Mortgage & Monthly Payment Estimator */}
        <MortgageEstimator />

        {/* 10. Comprehensive Specifications & Facts Grid */}
        <PropertySpecifications />

        {/* 11. Price & Assessment History */}
        <PriceHistoryTable />

        {/* 12. "Why We Win" Competitive Advantage Matrix */}
        <WhyWeWinMatrix />

        {/* 13. Interactive Technology Center (Working Features) */}
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

        {/* 14. Full Production Working Feature Catalog Grid */}
        <FeatureCatalogGrid />

        {/* 15. Google Antigravity Cloud Harness & Human-in-the-Loop Pipeline Demo */}
        <AgenticPipelineDemo />

        {/* 16. Realtor Commission 42x ROI Modeler */}
        <RealtorRoiCalculator />

      </main>

      {/* 17. Master Global Footer with NH RSA 507-H Compliance */}
      <SiteFooter />

      {/* 18. New Hampshire RSA 507-H Granular Cookie Consent Banner */}
      <CookieConsentBanner />

      {/* 19. Microsoft Clarity-Style Mouse Tracking & Heatmap Engine */}
      <ClarityMouseTracker
        isActive={isHeatmapActive}
        onRewardScoreUpdate={(score) => setRewardScore(score)}
      />

      {/* 20. Modals: Tour Booking & Photo Lightbox */}
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
