"use client";

import React, { useState, useEffect } from "react";
import { 
  Zap, 
  PhoneCall, 
  MessageSquare, 
  Clock, 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp,
  RotateCcw
} from "lucide-react";

interface DispatchStep {
  timeMs: number;
  label: string;
  detail: string;
  icon: any;
  status: "idle" | "running" | "done";
}

export function SpeedToLeadSimulator() {
  const [buyerName, setBuyerName] = useState("Alexander Vance");
  const [buyerPhone, setBuyerPhone] = useState("(603) 555-8392");
  const [isSimulating, setIsSimulating] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      timeMs: 250,
      label: "Edge Serverless Ingestion",
      detail: `Buyer showing request for 77 Example Rd captured in Vercel Edge region 'iad1' (12ms).`,
      icon: Zap
    },
    {
      timeMs: 950,
      label: "Two-Way Twilio SMS Dispatched",
      detail: `SMS sent to agent phone with pre-qualified buyer details & instant confirmation sent to ${buyerPhone}.`,
      icon: MessageSquare
    },
    {
      timeMs: 2400,
      label: "ElevenLabs AI Voice Agent Call",
      detail: `Outbound conversational voice call initiated to confirm appointment slot and agent availability.`,
      icon: PhoneCall
    },
    {
      timeMs: 4200,
      label: "Speed-to-Lead Locked & Calendared",
      detail: `Buyer & Listing Agent connected in 4.2 seconds. Calendar invite confirmed via webhook.`,
      icon: CheckCircle2
    }
  ];

  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleStartSimulation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsSimulating(true);
    setElapsedMs(0);
    setActiveStep(1);

    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      const currentElapsed = Date.now() - startTime;
      setElapsedMs(currentElapsed);

      if (currentElapsed >= 250 && currentElapsed < 950) {
        setActiveStep(1);
      } else if (currentElapsed >= 950 && currentElapsed < 2400) {
        setActiveStep(2);
      } else if (currentElapsed >= 2400 && currentElapsed < 4200) {
        setActiveStep(3);
      } else if (currentElapsed >= 4200) {
        setActiveStep(4);
        setIsSimulating(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 40);
  };

  const handleReset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsSimulating(false);
    setElapsedMs(0);
    setActiveStep(0);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE DISPATCH SIMULATOR</span>
          </div>
          <h3 className="font-display font-black text-xl text-foreground">
            Sub-5-Second Speed-to-Lead Automation Engine
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Test how our automated webhook triggers eliminate the 48-hour Realtor response lag with instant SMS & AI voice dispatch.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {activeStep > 0 && (
            <button
              onClick={handleReset}
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              title="Reset Simulator"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleStartSimulation}
            disabled={isSimulating}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all active:scale-95 disabled:opacity-50"
          >
            <Play className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin" : ""}`} />
            <span>{isSimulating ? "Dispatching..." : "Simulate 4.2s Lead Dispatch"}</span>
          </button>
        </div>
      </div>

      {/* Simulator Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="space-y-1">
          <label className="font-semibold text-foreground">Simulated High-Net-Worth Buyer</label>
          <input
            type="text"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            disabled={isSimulating}
            className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-foreground">Buyer Phone Number</label>
          <input
            type="text"
            value={buyerPhone}
            onChange={(e) => setBuyerPhone(e.target.value)}
            disabled={isSimulating}
            className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none"
          />
        </div>
      </div>

      {/* Real-time Timer Counter HUD */}
      <div className="p-4 rounded-2xl bg-obsidian-950 text-slate-200 border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-cyan-400" />
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-mono">
              Speed-to-Lead Response Time
            </div>
            <div className="font-mono font-black text-2xl text-white">
              {(elapsedMs / 1000).toFixed(2)}s
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="text-right">
            <div className="text-slate-400 text-[10px]">INDUSTRY BENCHMARK</div>
            <div className="text-rose-400 font-bold">48.0 Hours (Portal Lag)</div>
          </div>
          <div className="text-right border-l border-white/10 pl-4">
            <div className="text-slate-400 text-[10px]">QUALIFICATION MULTIPLIER</div>
            <div className="text-emerald-400 font-bold">21x Higher Close Rate</div>
          </div>
        </div>
      </div>

      {/* 4 Execution Steps Timeline */}
      <div className="space-y-3">
        {steps.map((step, idx) => {
          const stepNum = idx + 1;
          const isDone = activeStep > stepNum || (activeStep === 4 && stepNum === 4);
          const isCurrent = activeStep === stepNum && isSimulating;
          const Icon = step.icon;

          return (
            <div
              key={idx}
              className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 ${
                isDone
                  ? "bg-emerald-500/10 border-emerald-500/30 text-foreground"
                  : isCurrent
                  ? "bg-amber-500/10 border-amber-500/40 text-foreground ring-1 ring-amber-500/30"
                  : "bg-muted/30 border-border text-muted-foreground opacity-60"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isDone
                    ? "bg-emerald-500 text-slate-950 font-bold"
                    : isCurrent
                    ? "bg-amber-500 text-slate-950 font-bold animate-pulse"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
              </div>

              <div className="space-y-0.5 flex-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-foreground">
                    {step.label}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    T + {step.timeMs}ms
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* MIT Research Citation Alert */}
      <div className="p-4 rounded-xl bg-muted/40 border border-border text-xs text-muted-foreground flex items-start gap-3">
        <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-foreground">MIT Lead Response Management Study:</strong> Contacting a high-intent real estate prospect within 5 minutes results in a <strong className="text-emerald-500">2,100% (21x) increase in qualification probability</strong> compared to waiting 30 minutes. CustomListingSite completes the full loop in under 5 seconds.
        </p>
      </div>

    </div>
  );
}
