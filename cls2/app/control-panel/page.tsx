"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StudioBuilder } from "@/components/control-panel/studio-builder";
import { ClarityMouseTracker } from "@/components/analytics/clarity-mouse-tracker";
import { CookieConsentBanner } from "@/components/legal/cookie-consent-banner";
import { ScheduleShowingModal } from "@/components/property/schedule-showing-modal";

export default function ControlPanelPage() {
  const [isHeatmapActive, setIsHeatmapActive] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors">
      <SiteHeader
        onToggleHeatmap={() => setIsHeatmapActive(!isHeatmapActive)}
        isHeatmapActive={isHeatmapActive}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <StudioBuilder />
      </main>

      <SiteFooter />
      <CookieConsentBanner />
      <ClarityMouseTracker isActive={isHeatmapActive} />
      <ScheduleShowingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </div>
  );
}
