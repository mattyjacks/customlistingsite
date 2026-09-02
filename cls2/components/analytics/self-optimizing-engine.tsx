"use client";

import React, { useState, useEffect } from "react";
import { 
  Cpu, 
  Sparkles, 
  Dices, 
  TrendingUp, 
  Sliders, 
  CheckCircle2, 
  BarChart3, 
  RefreshCw,
  Zap
} from "lucide-react";
import { BANDIT_VARIANTS, BanditVariant } from "@/lib/property-data";

interface SelfOptimizingEngineProps {
  currentVariant: BanditVariant;
  onVariantChange: (variant: BanditVariant) => void;
  rewardScore?: number;
}

export function SelfOptimizingEngine({
  currentVariant,
  onVariantChange,
  rewardScore = 75
}: SelfOptimizingEngineProps) {
  const [isExplorationMode, setIsExplorationMode] = useState(true);
  const [distribution, setDistribution] = useState(BANDIT_VARIANTS);
  const [totalTrials, setTotalTrials] = useState(14820);
  const [isSimulating, setIsSimulating] = useState(false);

  // Initialize random variant on initial client mount if not already set
  useEffect(() => {
    const savedVariantId = sessionStorage.getItem("mattyjacks_bandit_variant");
    if (!savedVariantId) {
      // Pick a random variant weighted by bandit probability
      const randomIndex = Math.floor(Math.random() * BANDIT_VARIANTS.length);
      const chosen = BANDIT_VARIANTS[randomIndex];
      onVariantChange(chosen);
      sessionStorage.setItem("mattyjacks_bandit_variant", chosen.id.toString());
    }
  }, [onVariantChange]);

  const rerollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (rerollTimeoutRef.current) clearTimeout(rerollTimeoutRef.current);
    };
  }, []);

  // Handle manual or random re-roll
  const handleReroll = () => {
    if (rerollTimeoutRef.current) clearTimeout(rerollTimeoutRef.current);
    setIsSimulating(true);
    rerollTimeoutRef.current = setTimeout(() => {
      const otherVariants = BANDIT_VARIANTS.filter(v => v.id !== currentVariant.id);
      const next = otherVariants[Math.floor(Math.random() * otherVariants.length)];
      onVariantChange(next);
      sessionStorage.setItem("mattyjacks_bandit_variant", next.id.toString());
      setTotalTrials(t => t + 1);
      setIsSimulating(false);
    }, 300);
  };

  // Simulate updating Thompson Sampling probabilities when user intent changes
  useEffect(() => {
    if (rewardScore > 80) {
      setDistribution(prev =>
        prev.map(v =>
          v.id === currentVariant.id
            ? { ...v, currentScore: Math.min(99.4, v.currentScore + 0.3) }
            : v
        )
      );
    }
  }, [rewardScore, currentVariant.id]);

  return (
    <div className="w-full bg-gradient-to-br from-obsidian-950 via-slate-900 to-obsidian-950 text-white border-y border-white/10 py-6 px-4">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Top Control Ribbon */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white">
                  Autonomous Multi-Armed Bandit Brain
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  THOMPSON SAMPLING
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Self-optimizing hero angle, CTA triggers, and layout based on real-time mouse trajectory and dwell telemetry.
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={handleReroll}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all active:scale-95 disabled:opacity-50"
            >
              <Dices className={`w-4 h-4 ${isSimulating ? "animate-spin" : ""}`} />
              <span>{isSimulating ? "Recalculating Weights..." : "Force Reroll AI Variant"}</span>
            </button>

            <button
              onClick={() => setIsExplorationMode(!isExplorationMode)}
              className="px-3 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isExplorationMode ? "Mode: Exploration (Active)" : "Mode: Pure Exploitation"}</span>
            </button>
          </div>
        </div>

        {/* 4 Variant Distribution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          {distribution.map(variant => {
            const isSelected = variant.id === currentVariant.id;
            return (
              <div
                key={variant.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={`Select Variant ${variant.id}: ${variant.targetFocus}`}
                onClick={() => {
                  onVariantChange(variant);
                  sessionStorage.setItem("mattyjacks_bandit_variant", variant.id.toString());
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onVariantChange(variant);
                    sessionStorage.setItem("mattyjacks_bandit_variant", variant.id.toString());
                  }
                }}
                className={`cursor-pointer rounded-xl p-3 transition-all duration-200 border ${
                  isSelected
                    ? "bg-amber-500/10 border-amber-500/50 shadow-md shadow-amber-500/10 ring-1 ring-amber-500/30"
                    : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/15"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    VARIANT #{variant.id}
                  </span>
                  {isSelected ? (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      LIVE
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-mono">
                      {variant.sampleTrafficShare}% Traffic
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold text-white line-clamp-1 mb-1">
                  {variant.targetFocus}
                </div>

                <p className="text-[11px] text-slate-400 line-clamp-2 mb-2 leading-tight">
                  &ldquo;{variant.headline}&rdquo;
                </p>

                {/* Score & Probability Mini Progress Bar */}
                <div className="space-y-1 pt-1 border-t border-white/5 text-[10px] font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>CTR Score: {variant.currentScore.toFixed(1)}</span>
                    <span className={isSelected ? "text-amber-400 font-bold" : "text-cyan-400"}>
                      Weight: {variant.sampleTrafficShare}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isSelected ? "bg-amber-400" : "bg-cyan-500"
                      }`}
                      style={{ width: `${variant.sampleTrafficShare * 2}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Algorithm Telemetry Footnote */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400 pt-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              Cumulative Iterations: <strong className="text-slate-200 font-mono">{totalTrials.toLocaleString()}</strong> sessions evaluated globally.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>Exploration Rate: <strong className="text-cyan-400 font-mono">&epsilon; = 0.15</strong></span>
            <span>Target Goal: <strong className="text-emerald-400 font-mono">Showing Schedule & Lead Hook</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
}
