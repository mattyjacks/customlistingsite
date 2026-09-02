"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { 
  Home, 
  Sparkles, 
  Sliders, 
  Layers, 
  Zap, 
  BookOpen, 
  PhoneCall, 
  ShieldCheck, 
  Menu, 
  X, 
  Eye, 
  Activity,
  ArrowRight
} from "lucide-react";

interface SiteHeaderProps {
  onToggleHeatmap?: () => void;
  isHeatmapActive?: boolean;
  onOpenTourModal?: () => void;
}

export function SiteHeader({ 
  onToggleHeatmap, 
  isHeatmapActive = false,
  onOpenTourModal 
}: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Telemetry & Compliance Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-obsidian-950 via-slate-900 to-obsidian-950 text-slate-300 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5" />
              LIVE MULTI-ARMED BANDIT ACTIVE
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">
              Self-Optimizing Real Estate Engine • NH RSA 507-H Compliant • Powered by Google Antigravity Cloud Harness
            </span>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            {onToggleHeatmap && (
              <button
                onClick={onToggleHeatmap}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                  isHeatmapActive
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm shadow-rose-500/30"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
                title="Toggle Microsoft Clarity-style real-time mouse tracking and click heatmap"
              >
                <Activity className={`w-3.5 h-3.5 ${isHeatmapActive ? "text-rose-400 animate-pulse" : "text-slate-400"}`} />
                <span>{isHeatmapActive ? "Clarity Heatmap: ON" : "Clarity Heatmap: OFF"}</span>
              </button>
            )}
            <Link 
              href="/privacy" 
              className="text-slate-400 hover:text-white transition-colors text-[11px] hidden md:inline"
            >
              Privacy Notice (NH)
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-background/85 backdrop-blur-md shadow-md border-b border-border" 
            : "bg-background/95 backdrop-blur-sm border-b border-border/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-amber-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-blue-500 group-hover:text-amber-500 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-display font-extrabold text-lg tracking-tight">
                <span>CustomListingSite</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 font-bold border border-blue-500/20">
                  2.0
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground font-medium -mt-1 tracking-wide">
                by MattyJacks LLC
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            <Link 
              href="/" 
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                pathname === "/" ? "text-primary bg-primary/10 font-semibold" : "text-foreground/80 hover:text-foreground hover:bg-muted"
              }`}
            >
              Showcase
            </Link>

            <Link 
              href="/control-panel" 
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                pathname === "/control-panel" ? "text-primary bg-primary/10 font-semibold" : "text-foreground/80 hover:text-foreground hover:bg-muted"
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-amber-500" />
              <span>Free Studio</span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30">
                PRO
              </span>
            </Link>

            <a 
              href="/#features" 
              className="px-3 py-1.5 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
            >
              Working Tech
            </a>

            <a 
              href="/#pipeline" 
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-500" />
              <span>AI Pipeline</span>
            </a>

            <Link 
              href="/research" 
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                pathname === "/research" ? "text-primary bg-primary/10 font-semibold" : "text-foreground/80 hover:text-foreground hover:bg-muted"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-500" />
              <span>Research</span>
            </Link>

            <Link 
              href="/playbook" 
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                pathname === "/playbook" ? "text-primary bg-primary/10 font-semibold" : "text-foreground/80 hover:text-foreground hover:bg-muted"
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-purple-500" />
              <span>Playbook</span>
            </Link>

            <Link 
              href="/privacy" 
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                pathname === "/privacy" ? "text-primary bg-primary/10 font-semibold" : "text-foreground/80 hover:text-foreground hover:bg-muted"
              }`}
            >
              NH Privacy
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5">
            <ThemeSwitcher />

            {onOpenTourModal && (
              <button
                onClick={onOpenTourModal}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20 transition-all active:scale-95"
              >
                <span>Schedule Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <Link
              href="/control-panel"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500/15 text-amber-500 hover:bg-amber-500/25 border border-amber-500/30 transition-all"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Build Site</span>
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
            >
              <Home className="w-4 h-4 text-blue-500" />
              <span>Property Showcase (77 Example Rd)</span>
            </Link>

            <Link
              href="/control-panel"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20"
            >
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                <span>Free Interactive Control Panel</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                TRY FREE
              </span>
            </Link>

            <a
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
            >
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>Working Technology Features</span>
            </a>

            <a
              href="/#pipeline"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
            >
              <Zap className="w-4 h-4 text-cyan-500" />
              <span>Google Antigravity AI Pipeline</span>
            </a>

            <Link
              href="/research"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
            >
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <span>Strategic Business Plan & Research</span>
            </Link>

            <Link
              href="/playbook"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
            >
              <PhoneCall className="w-4 h-4 text-purple-500" />
              <span>Cold Calling Playbook & Decision Tree</span>
            </Link>

            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Privacy & Cookie Policy (NH RSA 507-H)</span>
            </Link>

            {onToggleHeatmap && (
              <button
                onClick={() => {
                  onToggleHeatmap();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium bg-muted"
              >
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-rose-500" />
                  <span>Clarity Mouse Heatmap & Trails</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isHeatmapActive ? "bg-rose-500 text-white" : "bg-muted-foreground/20"}`}>
                  {isHeatmapActive ? "ACTIVE" : "OFF"}
                </span>
              </button>
            )}
          </div>
        )}
      </header>
    </>
  );
}
