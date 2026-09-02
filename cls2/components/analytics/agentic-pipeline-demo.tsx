"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  ShieldCheck, 
  Check, 
  X, 
  Play, 
  Terminal, 
  Sparkles, 
  Cloud, 
  ArrowRight, 
  Layers, 
  Sliders, 
  CheckCircle2, 
  AlertCircle
} from "lucide-react";

interface CandidateSite {
  id: string;
  name: string;
  style: string;
  headline: string;
  tone: string;
  qaScore: number;
  contrastRatio: string;
  estimatedCtr: string;
  status: "pending" | "approved" | "rejected";
}

const INITIAL_CANDIDATES: CandidateSite[] = [
  {
    id: "cand-1",
    name: "Variant #A: Architectural Digest Prose",
    style: "Editorial Serif & Cream",
    headline: "An Exquisite Study in Secluded Natural Light",
    tone: "Poetic, High-Status, Narrative",
    qaScore: 98,
    contrastRatio: "14.2:1 (AAA Pass)",
    estimatedCtr: "+34.5%",
    status: "approved"
  },
  {
    id: "cand-2",
    name: "Variant #B: Obsidian High-Velocity Investor",
    style: "Midnight Glassmorphism",
    headline: "2.5 Secluded Acres • Turnkey Luxury Sanctuary",
    tone: "Direct-Response, Metric-Driven",
    qaScore: 95,
    contrastRatio: "12.8:1 (AAA Pass)",
    estimatedCtr: "+28.2%",
    status: "approved"
  },
  {
    id: "cand-3",
    name: "Variant #C: Hamptons Resort Casual",
    style: "Coastal Maritime Navy",
    headline: "Bespoke Modern Living Meets Classic New England Forest",
    tone: "Airy, Warm Family Luxury",
    qaScore: 92,
    contrastRatio: "11.5:1 (AAA Pass)",
    estimatedCtr: "+22.8%",
    status: "pending"
  }
];

export function AgenticPipelineDemo() {
  const [candidates, setCandidates] = useState<CandidateSite[]>(INITIAL_CANDIDATES);
  const [isSimulatingAgent, setIsSimulatingAgent] = useState(false);
  const [agentLogs, setAgentLogs] = useState<string[]>([
    "[Google Antigravity Cloud] Agentic Harness initialized on cloud cluster.",
    "[Ingestion Subagent] Ingested MLS #NH-994821 (77 Example Rd, Chester NH).",
    "[Vision Subagent] 10 photos analyzed; tagged 4 exterior, 5 interior, 1 CAD blueprint.",
    "[Chrome DevTools Subagent] Responsive viewports verified: Mobile 375px, Tablet 768px, Desktop 1920px.",
    "[Human Quality Gate] Waiting for broker sign-off before edge deployment."
  ]);

  const sweepTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    return () => {
      if (sweepTimeoutRef.current) clearTimeout(sweepTimeoutRef.current);
    };
  }, []);

  const handleRunAgentSweep = () => {
    if (sweepTimeoutRef.current) clearTimeout(sweepTimeoutRef.current);
    setIsSimulatingAgent(true);
    setAgentLogs(prev => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] Spawning new Antigravity development subagent...`
    ]);

    sweepTimeoutRef.current = setTimeout(() => {
      setAgentLogs(prev => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] Subagent synthesized Variant #D (Swiss Modernist Edition).`,
        `[${new Date().toLocaleTimeString()}] Core Web Vitals audit: LCP 0.8s, CLS 0.00, FID 12ms.`,
        `[${new Date().toLocaleTimeString()}] Sent to Human Approval Queue for quality validation.`
      ]);

      const newCand: CandidateSite = {
        id: `cand-${Date.now()}`,
        name: `Variant #${String.fromCharCode(65 + candidates.length)}: Swiss Typographic Grid`,
        style: "Swiss Modernist Grotesk",
        headline: "Pure Geometry & Natural Hardwoods in Chester, NH",
        tone: "Modernist, Structured, Architectural",
        qaScore: 96,
        contrastRatio: "16.1:1 (AAA Pass)",
        estimatedCtr: "+29.4%",
        status: "pending"
      };

      setCandidates(prev => [newCand, ...prev]);
      setIsSimulatingAgent(false);
    }, 1800);
  };

  const handleApprove = (id: string) => {
    setCandidates(prev =>
      prev.map(c => (c.id === id ? { ...c, status: "approved" as const } : c))
    );
    setAgentLogs(prev => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] ✅ Human Broker Approved ${id}. Deployed to Vercel Edge Multi-Armed Bandit.`
    ]);
  };

  const handleReject = (id: string) => {
    setCandidates(prev =>
      prev.map(c => (c.id === id ? { ...c, status: "rejected" as const } : c))
    );
    setAgentLogs(prev => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] ❌ Human Broker Rejected ${id}. Excluded from live traffic.`
    ]);
  };

  return (
    <section id="pipeline" className="py-20 bg-background text-foreground border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-500 border border-purple-500/20">
            <Cloud className="w-3.5 h-3.5" />
            <span>CLOUD AGENTIC HARNESS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight">
            Human-In-The-Loop Agentic AI Pipeline
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We use <strong className="text-foreground">Google Antigravity</strong> as a cloud development harness to generate bespoke variations of your luxury property site. Every single variation is rigorously pre-tested and <strong className="text-emerald-500">100% human-approved</strong> before public buyers ever lay eyes on it.
          </p>
        </div>

        {/* 4-Step Pipeline Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-card border border-border space-y-3 relative group hover:border-blue-500/40 transition-colors shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-lg">
                STEP 01
              </span>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </div>
            <h4 className="font-bold text-base">Raw Data Ingestion</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ingests raw MLS property specifications, high-res photography, CAD vector blueprints, and GIS parcel coordinates.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-card border border-border space-y-3 relative group hover:border-purple-500/40 transition-colors shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-purple-500 bg-purple-500/10 px-2.5 py-1 rounded-lg">
                STEP 02
              </span>
              <Cpu className="w-4 h-4 text-purple-500 animate-pulse" />
            </div>
            <h4 className="font-bold text-base">Antigravity Synthesis</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Autonomous cloud subagents draft bespoke storytelling, test color palettes, verify WCAG AAA contrast, and run headless Chrome tests.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-card to-card border-2 border-amber-500/40 space-y-3 relative shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/20 px-2.5 py-1 rounded-lg">
                STEP 03 • CRITICAL GATE
              </span>
              <ShieldCheck className="w-5 h-5 text-amber-500" />
            </div>
            <h4 className="font-bold text-base text-amber-500">Human Quality Gate</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Zero hallucinated content.</strong> A licensed broker or editor reviews each variant, reviews copy tone, and approves with 1-click.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-card border border-border space-y-3 relative group hover:border-emerald-500/40 transition-colors shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                STEP 04
              </span>
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </div>
            <h4 className="font-bold text-base">Multi-Armed Bandit Edge</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Only human-approved variants enter the self-learning edge bandit, dynamically maximizing showing requests and buyer dwell time.
            </p>
          </div>

        </div>

        {/* Interactive Human Quality Control Cockpit & Simulator */}
        <div className="bg-obsidian-950 text-slate-200 rounded-3xl border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <h3 className="font-display font-bold text-lg text-white">
                  Interactive Broker Approval Cockpit
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Try out the human-in-the-loop quality gate. Review pending AI-synthesized variants below and approve or reject them.
              </p>
            </div>

            <button
              onClick={handleRunAgentSweep}
              disabled={isSimulatingAgent}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:brightness-110 shadow-lg shadow-purple-500/20 transition-all active:scale-95 disabled:opacity-50 shrink-0"
            >
              <Play className={`w-3.5 h-3.5 ${isSimulatingAgent ? "animate-spin" : ""}`} />
              <span>{isSimulatingAgent ? "Antigravity Synthesizing..." : "Trigger Antigravity Agent Sweep"}</span>
            </button>
          </div>

          {/* Candidate Approval Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {candidates.map(cand => (
              <div
                key={cand.id}
                className={`p-4 rounded-2xl border transition-all ${
                  cand.status === "approved"
                    ? "bg-emerald-950/20 border-emerald-500/40 ring-1 ring-emerald-500/20"
                    : cand.status === "rejected"
                    ? "bg-rose-950/15 border-rose-500/30 opacity-60"
                    : "bg-white/5 border-amber-500/40 shadow-lg shadow-amber-500/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {cand.style}
                  </span>

                  {cand.status === "approved" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      HUMAN APPROVED
                    </span>
                  )}
                  {cand.status === "rejected" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                      REJECTED
                    </span>
                  )}
                  {cand.status === "pending" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse">
                      AWAITING REVIEW
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-sm text-white mb-1">{cand.name}</h4>
                <p className="text-xs text-amber-300 italic mb-3">
                  &ldquo;{cand.headline}&rdquo;
                </p>

                <div className="space-y-1 text-[11px] text-slate-400 pb-3 border-b border-white/10">
                  <div className="flex justify-between">
                    <span>Tone & Prose:</span>
                    <span className="text-slate-200">{cand.tone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lighthouse QA:</span>
                    <span className="text-emerald-400 font-mono font-bold">{cand.qaScore}/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contrast:</span>
                    <span className="text-cyan-400 font-mono">{cand.contrastRatio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Est. CTR Lift:</span>
                    <span className="text-amber-400 font-mono font-bold">{cand.estimatedCtr}</span>
                  </div>
                </div>

                {/* Approval Action Controls */}
                <div className="pt-3 flex items-center justify-end gap-2">
                  {cand.status !== "approved" && (
                    <button
                      onClick={() => handleApprove(cand.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Approve Variant</span>
                    </button>
                  )}

                  {cand.status !== "rejected" && (
                    <button
                      onClick={() => handleReject(cand.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Reject</span>
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* Antigravity Cloud Console Log Stream */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Google Antigravity Cloud Harness Stream
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                Agent Status: IDLE (Listening)
              </span>
            </div>

            <div className="h-28 overflow-y-auto font-mono text-xs p-3 bg-black/50 rounded-xl border border-white/5 space-y-1.5">
              {agentLogs.map((log, idx) => (
                <div key={idx} className="text-slate-300 text-[11px]">
                  {log}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
