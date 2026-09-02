"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { 
  Activity, 
  Eye, 
  Flame, 
  Terminal, 
  Minimize2, 
  Maximize2, 
  RefreshCw, 
  SlidersHorizontal,
  Sparkles,
  MousePointer
} from "lucide-react";

interface TelemetryEvent {
  id: string;
  timestamp: string;
  type: "move" | "click" | "hover" | "scroll" | "dead_click" | "intent";
  detail: string;
}

interface ClarityMouseTrackerProps {
  isActive?: boolean;
  onRewardScoreUpdate?: (score: number) => void;
}

export function ClarityMouseTracker({ 
  isActive = true,
  onRewardScoreUpdate 
}: ClarityMouseTrackerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [dwellSeconds, setDwellSeconds] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [intentScore, setIntentScore] = useState(65);
  const [isHudMinimized, setIsHudMinimized] = useState(false);
  const [showCanvasOverlay, setShowCanvasOverlay] = useState(true);
  const [events, setEvents] = useState<TelemetryEvent[]>([]);

  const lastPosRef = useRef({ x: 0, y: 0, time: 0 });
  const heatPointsRef = useRef<{ x: number; y: number; radius: number; intensity: number }[]>([]);
  const clickRipplesRef = useRef<{ x: number; y: number; radius: number; alpha: number; color: string }[]>([]);
  const trailsRef = useRef<{ x: number; y: number; alpha: number }[]>([]);
  const lastClickRef = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });

  const addEvent = useCallback((type: TelemetryEvent["type"], detail: string) => {
    const timeStr = new Date().toLocaleTimeString([], { hour12: false, minute: "2-digit", second: "2-digit" });
    setEvents(prev => [
      { id: Math.random().toString(36).substring(2, 7), timestamp: timeStr, type, detail },
      ...prev.slice(0, 19)
    ]);
  }, []);

  // Timer for dwell time & intent scoring
  useEffect(() => {
    const timer = setInterval(() => {
      setDwellSeconds(d => {
        const next = d + 1;
        // Periodic intent recalculation
        if (next % 5 === 0) {
          setIntentScore(prev => {
            const calculated = Math.min(99, Math.round(50 + (next * 0.8) + (clickCount * 4) + (scrollDepth * 0.3)));
            if (onRewardScoreUpdate) onRewardScoreUpdate(calculated);
            return calculated;
          });
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [clickCount, scrollDepth, onRewardScoreUpdate]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const depth = Math.min(100, Math.round((window.scrollY / totalHeight) * 100));
        setScrollDepth(depth);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move and click tracking
  useEffect(() => {
    if (!isActive) return;

    let moveDebounce: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = lastPosRef.current.time > 0 ? Math.max(1, now - lastPosRef.current.time) : 16;
      const dx = lastPosRef.current.time > 0 ? e.clientX - lastPosRef.current.x : 0;
      const dy = lastPosRef.current.time > 0 ? e.clientY - lastPosRef.current.y : 0;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const vel = lastPosRef.current.time > 0 ? Math.round((dist / dt) * 1000) : 0; // px/s

      setCoords({ x: e.clientX, y: e.clientY });
      setVelocity(vel);

      lastPosRef.current = { x: e.clientX, y: e.clientY, time: now };

      // Add trail and heatmap point
      trailsRef.current.push({ x: e.clientX, y: e.clientY, alpha: 0.9 });
      if (trailsRef.current.length > 25) trailsRef.current.shift();

      if (Math.random() < 0.3) {
        heatPointsRef.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: Math.min(45, 15 + vel * 0.03),
          intensity: 0.08
        });
        if (heatPointsRef.current.length > 200) heatPointsRef.current.shift();
      }

      // Debounced event log for hover
      clearTimeout(moveDebounce);
      moveDebounce = setTimeout(() => {
        const target = document.elementFromPoint(e.clientX, e.clientY);
        if (target) {
          const tag = target.tagName.toLowerCase();
          const id = target.id ? `#${target.id}` : "";
          const text = (target.textContent || "").substring(0, 15).trim();
          if (["button", "a", "input", "select", "img"].includes(tag) || id) {
            addEvent("hover", `Hover on <${tag}${id}> "${text}"`);
          }
        }
      }, 350);
    };

    const handleClick = (e: MouseEvent) => {
      const now = Date.now();
      setClickCount(c => c + 1);

      // Check for rage click (fast repeated clicks near same point)
      const distFromLast = Math.hypot(e.clientX - lastClickRef.current.x, e.clientY - lastClickRef.current.y);
      const timeDiff = now - lastClickRef.current.time;

      if (distFromLast < 30 && timeDiff < 400 && lastClickRef.current.time > 0) {
        addEvent("dead_click", `⚠️ Rapid Click / Intent Spike @ (${e.clientX}, ${e.clientY})`);
        clickRipplesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: 12,
          alpha: 1,
          color: "#f43f5e"
        });
      } else {
        const target = e.target as HTMLElement;
        const tag = target ? target.tagName.toLowerCase() : "elem";
        addEvent("click", `Click @ (${e.clientX}, ${e.clientY}) on <${tag}>`);
        clickRipplesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: 10,
          alpha: 1,
          color: "#38bdf8"
        });
      }

      lastClickRef.current = { x: e.clientX, y: e.clientY, time: now };

      // Add high intensity point on click
      heatPointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 50,
        intensity: 0.35
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      clearTimeout(moveDebounce);
    };
  }, [isActive, addEvent]);

  // Canvas render loop for cursor trails, click ripples, and heatmap
  useEffect(() => {
    if (!isActive || !showCanvasOverlay) return;

    let animFrame: number;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Match canvas size to viewport
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Heatmap Dwell Points
      heatPointsRef.current.forEach(pt => {
        const grad = ctx.createRadialGradient(pt.x, pt.y, 2, pt.x, pt.y, pt.radius);
        grad.addColorStop(0, `rgba(245, 158, 11, ${pt.intensity})`);
        grad.addColorStop(0.5, `rgba(239, 68, 68, ${pt.intensity * 0.6})`);
        grad.addColorStop(1, "rgba(56, 189, 248, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Cursor Trails
      for (let i = 0; i < trailsRef.current.length; i++) {
        const t = trailsRef.current[i];
        t.alpha -= 0.025;
        if (t.alpha > 0) {
          ctx.beginPath();
          ctx.arc(t.x, t.y, 4 * t.alpha, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${t.alpha * 0.7})`;
          ctx.fill();
        }
      }
      trailsRef.current = trailsRef.current.filter(t => t.alpha > 0);

      // 3. Draw Click Ripples
      for (let i = 0; i < clickRipplesRef.current.length; i++) {
        const r = clickRipplesRef.current[i];
        r.radius += 2.2;
        r.alpha -= 0.035;
        if (r.alpha > 0) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = r.color;
          ctx.lineWidth = 2.5;
          ctx.globalAlpha = Math.max(0, r.alpha);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
      clickRipplesRef.current = clickRipplesRef.current.filter(r => r.alpha > 0);

      animFrame = requestAnimationFrame(render);
    };

    animFrame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animFrame);
  }, [isActive, showCanvasOverlay]);

  if (!isActive) return null;

  return (
    <>
      {/* Fullscreen Overlay Canvas for Heatmap & Ripples */}
      {showCanvasOverlay && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-30"
          style={{ mixBlendMode: "screen" }}
        />
      )}

      {/* Floating Microsoft Clarity Telemetry HUD */}
      <aside 
        aria-label="Clarity Mouse & Telemetry HUD"
        className={`fixed bottom-5 right-5 z-40 transition-all duration-300 ${
          isHudMinimized ? "w-64" : "w-80 sm:w-96"
        }`}
      >
        <div className="bg-obsidian-950/95 text-slate-200 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* HUD Title Bar */}
          <div className="px-4 py-3 bg-gradient-to-r from-slate-900 to-obsidian-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="font-display font-bold text-xs text-white tracking-wide flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-rose-400" />
                CLARITY MOUSE TELEMETRY
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setShowCanvasOverlay(!showCanvasOverlay)}
                className={`p-1 rounded text-xs transition-colors ${
                  showCanvasOverlay ? "text-amber-400 bg-amber-500/10" : "text-slate-400 hover:text-white"
                }`}
                title="Toggle visual heatmap canvas overlay"
              >
                <Flame className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsHudMinimized(!isHudMinimized)}
                className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                title={isHudMinimized ? "Expand Telemetry HUD" : "Minimize Telemetry HUD"}
              >
                {isHudMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* HUD Content */}
          {!isHudMinimized && (
            <div className="p-4 space-y-3.5 text-xs">
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Coords</div>
                  <div className="font-mono font-bold text-white text-xs mt-0.5">
                    {coords.x}, {coords.y}
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Speed</div>
                  <div className="font-mono font-bold text-cyan-400 text-xs mt-0.5">
                    {velocity} px/s
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Scroll Depth</div>
                  <div className="font-mono font-bold text-emerald-400 text-xs mt-0.5">
                    {scrollDepth}%
                  </div>
                </div>
              </div>

              {/* Dwell Time & Purchase Intent Score Bar */}
              <div className="space-y-1.5 p-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-rose-500/10 border border-amber-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Buyer Intent Probability
                  </span>
                  <span className="font-mono font-bold text-amber-400 text-xs">
                    {intentScore}% {intentScore > 80 ? "🔥 HIGH INTENT" : "👀 BROWSING"}
                  </span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 via-amber-500 to-rose-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${intentScore}%` }}
                  />
                </div>

                <div className="flex justify-between text-[10px] text-slate-400 pt-0.5">
                  <span>Dwell: {dwellSeconds}s</span>
                  <span>Clicks: {clickCount}</span>
                  <span>Algorithm: Thompson Bandit</span>
                </div>
              </div>

              {/* Real-time Interaction Event Terminal Stream */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-emerald-400" />
                    Live Interaction Feed
                  </span>
                  <span className="text-[10px] text-slate-500">Client-Side Private</span>
                </div>

                <div className="h-24 overflow-y-auto font-mono text-[10.5px] p-2 bg-black/40 rounded-lg border border-white/5 space-y-1 scrollbar-thin">
                  {events.length === 0 ? (
                    <div className="text-slate-500 italic">Listening for user clicks, hovers, and scroll events...</div>
                  ) : (
                    events.map(ev => (
                      <div key={ev.id} className="flex items-start gap-1.5 leading-tight">
                        <span className="text-slate-500 shrink-0">[{ev.timestamp}]</span>
                        <span className={
                          ev.type === "click" ? "text-amber-400 font-bold" :
                          ev.type === "dead_click" ? "text-rose-400 font-bold" :
                          ev.type === "scroll" ? "text-emerald-400" :
                          ev.type === "hover" ? "text-cyan-400" : "text-slate-300"
                        }>
                          {ev.detail}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          )}

          {/* Collapsed view summary */}
          {isHudMinimized && (
            <div className="px-4 py-2.5 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">
                {coords.x}, {coords.y} • {velocity} px/s
              </span>
              <span className="font-bold text-amber-400 font-mono">
                Intent: {intentScore}%
              </span>
            </div>
          )}

        </div>
      </aside>
    </>
  );
}
