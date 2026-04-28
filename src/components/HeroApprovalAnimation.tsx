import React, { useState, useEffect } from "react";
import { MessageSquare, TrendingUp, Package, Check, Bell, MousePointer2 } from "lucide-react";

interface Scenario {
  notification: string;
  subtitle: string;
  agentLabel: string;
  agentLetter: string;
  agentColor: string;
  agentBg: string;
  result: string;
  icon: React.ReactElement;
}

const scenarios: Scenario[] = [
  {
    notification: "23 support tickets overnight",
    subtitle: "Customer Support Queue",
    agentLabel: "Support Agent",
    agentLetter: "S",
    agentColor: "text-emerald-600",
    agentBg: "bg-emerald-100 border-emerald-300",
    result: "✓ 21/23 resolved automatically",
    icon: <MessageSquare className="w-4 h-4 text-emerald-500" />,
  },
  {
    notification: "Ad campaign underperforming",
    subtitle: "Facebook Ads · CPA +42%",
    agentLabel: "Ad Manager",
    agentLetter: "A",
    agentColor: "text-purple-600",
    agentBg: "bg-purple-100 border-purple-300",
    result: "✓ Budget rebalanced, ROAS +34%",
    icon: <TrendingUp className="w-4 h-4 text-purple-500" />,
  },
  {
    notification: "Stockout risk: 3 SKUs below threshold",
    subtitle: "Inventory · Reorder needed",
    agentLabel: "Inventory Agent",
    agentLetter: "I",
    agentColor: "text-amber-600",
    agentBg: "bg-amber-100 border-amber-300",
    result: "✓ Reorder placed with supplier",
    icon: <Package className="w-4 h-4 text-amber-500" />,
  },
];

const CYCLE_MS = 8000;

type Phase = "enter" | "approve" | "dispatch" | "result" | "fade";

const phaseTimings: { phase: Phase; at: number }[] = [
  { phase: "enter", at: 0 },
  { phase: "approve", at: 1200 },
  { phase: "dispatch", at: 2800 },
  { phase: "result", at: 5200 },
  { phase: "fade", at: 7200 },
];

export default function HeroApprovalAnimation() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("enter");

  useEffect(() => {
    const interval = setInterval(() => {
      setScenarioIdx((prev) => (prev + 1) % scenarios.length);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPhase("enter");
    const timers = phaseTimings.slice(1).map(({ phase: p, at }) =>
      setTimeout(() => setPhase(p), at)
    );
    return () => timers.forEach(clearTimeout);
  }, [scenarioIdx]);

  const s = scenarios[scenarioIdx];
  const isFading = phase === "fade";

  return (
    <div
      className="relative h-[500px] w-full select-none"
      style={{
        transition: "opacity 0.6s ease",
        opacity: isFading ? 0 : 1,
      }}
    >
      {/* ── STEP 1: Notification card slides in ── */}
      <div
        className="absolute left-0 top-8 w-64"
        style={{
          transform: phase === "enter" ? "translateX(-40px)" : "translateX(0)",
          opacity: phase === "enter" ? 0 : 1,
          transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="bg-white rounded-xl border border-[hsl(40,12%,89%)] shadow-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
              New Alert
            </span>
          </div>
          <p className="text-sm font-bold text-slate-800 leading-snug">{s.notification}</p>
          <p className="text-[11px] text-slate-400 mt-1">{s.subtitle}</p>
        </div>
        {/* Arrow pointing to phone */}
        <div
          className="flex items-center justify-end mt-3 mr-[-24px]"
          style={{
            opacity: ["approve", "dispatch", "result"].includes(phase) ? 1 : 0,
            transition: "opacity 0.4s ease 0.3s",
          }}
        >
          <div className="w-16 h-[2px] bg-gradient-to-r from-slate-200 to-emerald-300 rounded" />
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-emerald-400" />
        </div>
      </div>

      {/* ── STEP 2: Central phone / dashboard ── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          {/* Glow */}
          <div
            className="absolute -inset-4 rounded-3xl bg-emerald-400/10 blur-xl"
            style={{
              opacity: phase === "approve" ? 1 : 0.3,
              transition: "opacity 0.5s ease",
            }}
          />
          {/* Phone frame */}
          <div className="relative w-48 h-72 bg-white rounded-[24px] border-2 border-slate-200 shadow-2xl overflow-hidden">
            {/* Status bar */}
            <div className="h-6 bg-slate-50 border-b border-slate-100 flex items-center justify-center">
              <div className="w-12 h-1.5 rounded-full bg-slate-200" />
            </div>
            {/* Screen content */}
            <div className="p-4 flex flex-col h-[calc(100%-24px)]">
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-300 mb-3">
                Agentic HQ
              </p>
              {/* Task card */}
              <div className="bg-slate-50 rounded-lg border border-slate-100 p-3 mb-3">
                <div className="flex items-center gap-2 mb-1.5">
                  {s.icon}
                  <span className="text-[10px] font-bold text-slate-700 leading-tight">
                    {s.notification}
                  </span>
                </div>
                <p className="text-[9px] text-slate-400">{s.subtitle}</p>
              </div>
              {/* Approve / Review buttons */}
              <div
                className="flex gap-2 relative"
                style={{
                  opacity: ["approve", "dispatch", "result"].includes(phase) ? 1 : 0,
                  transform: ["approve", "dispatch", "result"].includes(phase)
                    ? "translateY(0)"
                    : "translateY(8px)",
                  transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {/* Review button */}
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 opacity-60">
                  <Bell className="w-4 h-4" />
                </div>

                {/* Approve button with ripple + cursor */}
                <div className="relative">
                  {/* Ripple */}
                  {phase === "dispatch" && (
                    <div
                      className="absolute inset-0 bg-emerald-400 rounded-xl pointer-events-none"
                      style={{ animation: "ae-ripple 0.6s ease-out forwards" }}
                    />
                  )}
                  <div
                    className="relative w-20 h-10 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300"
                    style={{
                      backgroundColor: phase === "dispatch" || phase === "result" ? "#059669" : "#10B981",
                      transform: phase === "dispatch" ? "scale(0.92)" : "scale(1)",
                    }}
                  >
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  {/* Animated cursor */}
                  <div
                    className="absolute text-slate-800 pointer-events-none"
                    style={{
                      bottom: -28,
                      right: -16,
                      opacity: phase === "approve" ? 1 : 0,
                      transform: phase === "approve"
                        ? "translate(0, 0)"
                        : "translate(40px, 40px)",
                      transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    <MousePointer2 size={22} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STEP 3: Agent dispatches outward ── */}
      <div
        className="absolute right-4 top-[38%] -translate-y-1/2"
        style={{
          opacity: ["dispatch", "result"].includes(phase) ? 1 : 0,
          transform: ["dispatch", "result"].includes(phase)
            ? "translateX(0)"
            : "translateX(-30px)",
          transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s",
        }}
      >
        {/* Dotted path from phone */}
        <div className="flex items-center gap-0 absolute -left-16 top-1/2 -translate-y-1/2">
          <svg width="60" height="40" viewBox="0 0 60 40" className="overflow-visible">
            <path
              d="M0,20 C20,20 30,10 55,10"
              stroke="#10B981"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>
        {/* Agent bubble */}
        <div
          className={`w-14 h-14 rounded-full border-2 ${s.agentBg} flex items-center justify-center shadow-lg`}
          style={{
            animation:
              phase === "dispatch"
                ? "ae-agent-pop 0.5s cubic-bezier(0.22,1,0.36,1) forwards"
                : "none",
          }}
        >
          <span className={`text-lg font-black ${s.agentColor}`}>
            {s.agentLetter}
          </span>
        </div>
        <div className="text-center mt-2">
          <p className="text-[10px] font-bold text-slate-500">{s.agentLabel}</p>
          <div
            className="flex items-center justify-center gap-1 mt-1"
            style={{
              opacity: phase === "dispatch" ? 1 : 0,
              transition: "opacity 0.3s ease 0.5s",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-bold text-emerald-600">
              Working...
            </span>
          </div>
        </div>
      </div>

      {/* ── STEP 4: Result badge overlapping phone ── */}
      <div
        className="absolute left-1/2 -translate-x-[20%] bottom-[60px] z-30 w-64"
        style={{
          opacity: phase === "result" ? 1 : 0,
          transform:
            phase === "result" ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="bg-emerald-50 rounded-xl border border-emerald-200 shadow-lg p-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-800">{s.result}</p>
              <p className="text-[10px] text-emerald-600 mt-0.5">
                Just now · No human effort needed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scenario dots (progress) ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {scenarios.map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === scenarioIdx ? 24 : 8,
              backgroundColor: i === scenarioIdx ? "#10B981" : "#E2E8F0",
            }}
          />
        ))}
      </div>

      {/* ── Extra keyframes ── */}
      <style>{`
        @keyframes ae-ripple {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes ae-agent-pop {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
