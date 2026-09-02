"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Cookie, Settings, Check, X } from "lucide-react";

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    banditOptimization: true
  });

  useEffect(() => {
    try {
      const consent = localStorage.getItem("mattyjacks_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(consent);
        if (parsed) {
          setPreferences({
            essential: true,
            analytics: Boolean(parsed.analytics),
            banditOptimization: Boolean(parsed.banditOptimization)
          });
        }
      }
    } catch (e) {
      // Fallback
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "mattyjacks_cookie_consent",
      JSON.stringify({ essential: true, analytics: true, banditOptimization: true, timestamp: Date.now() })
    );
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem(
      "mattyjacks_cookie_consent",
      JSON.stringify({ essential: true, analytics: false, banditOptimization: false, timestamp: Date.now() })
    );
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "mattyjacks_cookie_consent",
      JSON.stringify({ ...preferences, timestamp: Date.now() })
    );
    setShowPreferences(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-obsidian-950 text-slate-200 border border-white/15 rounded-2xl shadow-2xl p-5 backdrop-blur-xl space-y-4">
        
        {/* Banner Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-white">
                Privacy Notice & Cookie Preferences
              </h3>
              <p className="text-[11px] text-slate-400">
                MattyJacks LLC &bull; Compliant with New Hampshire Law (NH RSA 507-H)
              </p>
            </div>
          </div>

          <button
            onClick={handleRejectNonEssential}
            className="text-slate-400 hover:text-white p-1 rounded-md"
            aria-label="Dismiss and Reject Non-Essential"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Banner Body */}
        {!showPreferences ? (
          <>
            <p className="text-xs text-slate-300 leading-relaxed">
              We use essential edge cookies to operate this property showcase and local client-side telemetry to power our self-optimizing multi-armed bandit algorithm. Under the <strong className="text-white">New Hampshire Data Privacy Act (RSA 507-H)</strong>, you have the statutory right to opt-out. We never sell personal data to third parties.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <Link
                href="/privacy"
                className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-2"
              >
                Read Full Privacy & Cookie Policy
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-1"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Customize</span>
                </button>

                <button
                  onClick={handleRejectNonEssential}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  Reject Non-Essential
                </button>

                <button
                  onClick={handleAcceptAll}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/25 transition-all"
                >
                  Accept All
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Granular Preferences View */
          <div className="space-y-3 pt-2">
            <div className="space-y-2 text-xs">
              
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div>
                  <div className="font-semibold text-white">Strictly Necessary (Essential)</div>
                  <div className="text-[11px] text-slate-400">Required for routing, security, and edge TLS.</div>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  ALWAYS ACTIVE
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div>
                  <div className="font-semibold text-white">Self-Optimizing Bandit Telemetry</div>
                  <div className="text-[11px] text-slate-400">Calculates dwell time & click weight client-side.</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.banditOptimization}
                    onChange={(e) => setPreferences({ ...preferences, banditOptimization: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div>
                  <div className="font-semibold text-white">Anonymous Edge Analytics</div>
                  <div className="text-[11px] text-slate-400">Aggregated Core Web Vitals speed monitoring.</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>

            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-primary text-primary-foreground hover:opacity-90"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
