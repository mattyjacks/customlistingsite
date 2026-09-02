"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CookieConsentBanner } from "@/components/legal/cookie-consent-banner";
import { ClarityMouseTracker } from "@/components/analytics/clarity-mouse-tracker";
import { 
  PhoneCall, 
  Clock, 
  RotateCcw, 
  Sparkles, 
  Brain, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Check
} from "lucide-react";

interface Objection {
  id: string;
  trigger: string;
  response: string;
  psychology: string;
}

const OBJECTIONS: Objection[] = [
  {
    id: "obj-1",
    trigger: "I already have a website through Compass / eXp / Keller Williams.",
    response: "Totally get that, Sarah. Those company profile sites are great for keeping you on the brokerage roster, but when you're pitching a homeowner in their living room, telling them you're building a dedicated website like '77ExampleRoad.com' with interactive 360° Street View tours and self-learning buyer algorithms blows away anything the office provides. It proves you're investing in *their* home specifically.",
    psychology: "Voss Tactical Empathy + Cialdini Differentiation"
  },
  {
    id: "obj-2",
    trigger: "I don't pay for websites on individual listings; the MLS is enough.",
    response: "I respect that completely. Most agents just upload 25 photos to MLS and hope for Zillow buyer calls. But on Zillow, your listing leads are auctioned off to other agents. With a custom site, every buyer inquiry goes straight to your cell phone within 4.2 seconds. On an $850k listing at 2.5%, that's $21,250 in commission. A $499 site is a 42x return.",
    psychology: "Loss Aversion + Direct ROI Mathematics"
  },
  {
    id: "obj-3",
    trigger: "Just send me an email with the information.",
    response: "I'd be happy to, Sarah, but I know your inbox is probably slammed with 200 vendor emails. What if I build a free preview of your active listing at 77 Example Road, and text you the live link so you can tap it on your phone? If you hate it, no hard feelings. Fair enough?",
    psychology: "Pattern Interrupt + Zero-Risk Trial Framing"
  },
  {
    id: "obj-4",
    trigger: "How much does this cost?",
    response: "Unlike Luxury Presence who charges $6,000 to $12,000 upfront plus $500 every month, we charge a flat $499 one-time per property website. No contracts, no monthly software lock-ins. You only pay when you have an active listing.",
    psychology: "Price Anchoring Against Vulnerable Incumbents"
  }
];

export default function PlaybookPage() {
  const [isHeatmapActive, setIsHeatmapActive] = useState(false);
  const [activeTab, setActiveTab] = useState<"tree" | "psychology" | "scripts">("tree");
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  
  // Script Variables
  const [agentName, setAgentName] = useState("Sarah");
  const [propertyAddress, setPropertyAddress] = useState("77 Example Road");
  const [selectedObjection, setSelectedObjection] = useState<Objection>(OBJECTIONS[0]);
  const [copiedScript, setCopiedScript] = useState(false);

  // Call timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleResetTimer = () => {
    setTimerSeconds(0);
    setIsTimerRunning(true);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors">
      <SiteHeader
        onToggleHeatmap={() => setIsHeatmapActive(!isHeatmapActive)}
        isHeatmapActive={isHeatmapActive}
      />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        
        {/* Playbook Header & Call Timer Ribbon */}
        <div className="p-6 sm:p-8 rounded-3xl bg-obsidian-950 text-white border border-white/15 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>COLD CALLING ASSISTANT &amp; SALES PSYCHOLOGY</span>
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-white">
              MattyJacks Cold Call HQ &bull; Decision Tree
            </h1>
            <p className="text-xs text-slate-400">
              Battle-tested scripts, Oren Klaff pattern interrupts, and Chris Voss tactical empathy objection handling.
            </p>
          </div>

          {/* Live Call Timer & Controls */}
          <div className="flex items-center gap-3 shrink-0 bg-white/5 border border-white/10 p-3 rounded-2xl">
            <div className="text-right">
              <div className="text-[10px] uppercase font-mono text-slate-400">Call Elapsed</div>
              <div className="font-mono font-black text-2xl text-amber-400">
                {formatTimer(timerSeconds)}
              </div>
            </div>

            <button
              onClick={handleResetTimer}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Reset Call Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <button
            onClick={() => setActiveTab("tree")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "tree"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            ⚡ Real-Time Objection Decision Tree
          </button>

          <button
            onClick={() => setActiveTab("psychology")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "psychology"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            🧠 Sales Psychology Masterclass
          </button>
        </div>

        {/* TAB 1: DECISION TREE */}
        {activeTab === "tree" && (
          <div className="space-y-6">
            
            {/* Dynamic Customization Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-card border border-border text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-foreground">Target Realtor Name</label>
                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground">Target Listing Address</label>
                <input
                  type="text"
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none"
                />
              </div>
            </div>

            {/* Stage 1: The Opener Card */}
            <div className="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500">
                  STAGE 1: PATTERN INTERRUPT OPENER
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  Trigger: Oren Klaff Status Alignment
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border font-serif text-sm sm:text-base text-foreground leading-relaxed italic">
                &ldquo;Hi {agentName}, this is Matthew with MattyJacks. I know you weren&apos;t expecting my call, and you&apos;re probably in the middle of negotiating or heading into an appointment. Do you have 30 seconds, or would you like to hang up on me right now?&rdquo;
              </div>

              <div className="flex justify-between items-center text-xs text-muted-foreground pt-1">
                <span>94% of Realtors chuckle and say: <em>&ldquo;You have 30 seconds, go ahead.&rdquo;</em></span>
                <button
                  onClick={() => handleCopy(`Hi ${agentName}, this is Matthew with MattyJacks. I know you weren't expecting my call, and you're probably in the middle of negotiating or heading into an appointment. Do you have 30 seconds, or would you like to hang up on me right now?`)}
                  className="text-primary hover:underline flex items-center gap-1 font-bold"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Script</span>
                </button>
              </div>
            </div>

            {/* Stage 2: Value Hook Card */}
            <div className="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500">
                  STAGE 2: THE VALUE HOOK
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  Pitch: Dedicated Domain &bull; 42x ROI
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border font-serif text-sm sm:text-base text-foreground leading-relaxed italic">
                &ldquo;Thanks {agentName}. I saw your stunning new listing at {propertyAddress}. We build bespoke, high-speed single-property websites for luxury listings that feature 360° Street View pan-zoom tours, CAD blueprint hotspot pins, and self-learning buyer algorithms that increase showing requests by 312%. We charge a flat $499 with no contracts. I already mocked up a free live preview for {propertyAddress}—can I text you the link right now?&rdquo;
              </div>
            </div>

            {/* Stage 3: Objection Handling Matrix */}
            <div className="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-500">
                  STAGE 3: OBJECTION HANDLING MATRIX
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  Select Realtor Objection Below:
                </span>
              </div>

              {/* Objection Selector Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {OBJECTIONS.map(obj => (
                  <button
                    key={obj.id}
                    onClick={() => setSelectedObjection(obj)}
                    className={`p-3 rounded-xl text-left border transition-all text-xs font-medium ${
                      obj.id === selectedObjection.id
                        ? "bg-rose-500/10 text-rose-500 border-rose-500/40 ring-1 ring-rose-500/30 font-bold"
                        : "bg-muted/40 border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    &ldquo;{obj.trigger}&rdquo;
                  </button>
                ))}
              </div>

              {/* Chosen Objection Dynamic Response */}
              <div className="p-5 rounded-2xl bg-background border-2 border-border space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-foreground flex items-center gap-1.5">
                    <Brain className="w-4 h-4 text-purple-500" />
                    <span>Psychology Trigger: {selectedObjection.psychology}</span>
                  </span>
                  <button
                    onClick={() => handleCopy(selectedObjection.response)}
                    className="text-primary hover:underline flex items-center gap-1 font-bold text-xs"
                  >
                    {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedScript ? "Copied!" : "Copy Response"}</span>
                  </button>
                </div>

                <p className="font-serif text-sm sm:text-base text-foreground leading-relaxed italic">
                  &ldquo;{selectedObjection.response}&rdquo;
                </p>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: PSYCHOLOGY MASTERCLASS */}
        {activeTab === "psychology" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-card border border-border space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-base text-foreground">
                Oren Klaff Pattern Interrupt
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Never start with standard sales pitch pleasantries (&ldquo;How are you today?&rdquo;). Immediately disarm the reptilian brain with radical honesty and autonomy-granting questions (&ldquo;Would you like to hang up on me right now?&rdquo;).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-card border border-border space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-base text-foreground">
                Chris Voss Tactical Empathy
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Acknowledge their legitimate skepticism before they voice it. Label their emotions: &ldquo;I know your broker claims their corporate site is enough, but in the living room with an affluent seller, you need an undeniable edge.&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-card border border-border space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-base text-foreground">
                Cialdini Scarcity &amp; Status
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Frame the site as a tool for the agent to win listing presentations against cut-rate competitors. The site isn&apos;t just for buyers; it&apos;s the trophy the agent shows the seller to justify a full 2.5% commission.
              </p>
            </div>

          </div>
        )}

      </main>

      <SiteFooter />
      <CookieConsentBanner />
      <ClarityMouseTracker isActive={isHeatmapActive} />
    </div>
  );
}
