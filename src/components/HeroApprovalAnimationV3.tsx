import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  TrendingUp,
  Star,
  Check,
  MousePointer2,
  ShieldCheck,
  Bell
} from 'lucide-react';

interface Scenario {
  id: number;
  type: 'support' | 'ads' | 'reviews';
  notification: string;
  agentLabel: string;
  agentIcon: string;
  result: string;
  color: string;
  accent: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 0,
    type: 'support',
    notification: "23 support tickets overnight",
    agentLabel: "Support Agent",
    agentIcon: "S",
    result: "21/23 resolved automatically",
    color: "text-emerald-600",
    accent: "bg-emerald-500",
  },
  {
    id: 1,
    type: 'ads',
    notification: "Ad campaign underperforming",
    agentLabel: "Ad Manager",
    agentIcon: "A",
    result: "Budget rebalanced, ROAS +34%",
    color: "text-blue-600",
    accent: "bg-blue-500",
  },
  {
    id: 2,
    type: 'reviews',
    notification: "New negative review (2-star)",
    agentLabel: "Review Agent",
    agentIcon: "R",
    result: "Response drafted & posted",
    color: "text-amber-600",
    accent: "bg-amber-500",
  }
];

const HeroApprovalAnimationV3: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SCENARIOS.length);
      setKey((prev) => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const scenario = SCENARIOS[index];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden font-sans select-none">
      <style>{`
        @keyframes v3-slideIn {
          0% { opacity: 0; transform: translateX(-40px); }
          15% { opacity: 1; transform: translateX(0); }
          25% { opacity: 1; transform: translateX(0); }
          30% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 0; transform: translateY(-20px); }
        }

        @keyframes v3-pressButton {
          0%, 18% { transform: scale(1); box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
          22% { transform: scale(0.92); box-shadow: 0 0 0 0 rgb(0 0 0 / 0); }
          26%, 100% { transform: scale(1); box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
        }

        @keyframes v3-ripple {
          0%, 22% { transform: scale(0); opacity: 0; }
          25% { transform: scale(1.5); opacity: 0.4; }
          35%, 100% { transform: scale(2.5); opacity: 0; }
        }

        @keyframes v3-agentFlyOut {
          0%, 30% { transform: translate(0, 0) scale(0); opacity: 0; }
          40% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 1; }
          70% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 1; }
          80%, 100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }

        @keyframes v3-resultReturn {
          0%, 65% { opacity: 0; transform: translateY(20px); }
          75% { opacity: 1; transform: translateY(0); }
          95% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        @keyframes v3-cursorMove {
          0% { transform: translate(100px, 100px); opacity: 0; }
          15% { transform: translate(40px, 40px); opacity: 1; }
          22% { transform: translate(0px, 0px); opacity: 1; }
          30% { transform: translate(-20px, 20px); opacity: 0; }
          100% { opacity: 0; }
        }

        .v3-slide-in { animation: v3-slideIn 8s infinite; }
        .v3-press { animation: v3-pressButton 8s infinite; }
        .v3-ripple { animation: v3-ripple 8s infinite; }
        .v3-fly-out { animation: v3-agentFlyOut 8s infinite cubic-bezier(0.34, 1.56, 0.64, 1); }
        .v3-result { animation: v3-resultReturn 8s infinite; }
        .v3-cursor { animation: v3-cursorMove 8s infinite; }
      `}</style>

      {/* Background Decorative Circles */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[400px] h-[400px] border border-emerald-200 rounded-full" />
        <div className="absolute w-[280px] h-[280px] border border-emerald-100 rounded-full" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-64 h-[420px]" key={key}>

        {/* Device Mockup */}
        <div className="absolute inset-0 bg-white border-[6px] border-slate-900 rounded-[40px] shadow-2xl overflow-hidden">
          <div className="p-4 flex flex-col h-full bg-slate-50">
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-2 bg-slate-200 rounded-full" />
              <div className="w-2 h-2 bg-slate-200 rounded-full" />
            </div>

            {/* Central Approval Area */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 relative">
                <ShieldCheck size={32} />
                <div className="absolute -inset-1 bg-emerald-500/10 rounded-2xl animate-pulse" />
              </div>

              <div className="space-y-2 text-center">
                <div className="h-3 w-24 bg-slate-200 rounded-full mx-auto" />
                <div className="h-2 w-16 bg-slate-100 rounded-full mx-auto" />
              </div>

              {/* Approval Buttons */}
              <div className="mt-4 flex gap-2 relative">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 opacity-60">
                  <Bell size={18} />
                </div>

                <div className="relative">
                  <div className="v3-ripple absolute inset-0 bg-emerald-400 rounded-xl" />
                  <div className="v3-press relative w-20 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Check size={20} strokeWidth={3} />
                    <div className="v3-cursor absolute bottom-[-30px] right-[-20px] text-slate-800">
                      <MousePointer2 size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Result area */}
            <div className="h-20 flex flex-col justify-end pb-4">
              <div className="v3-result opacity-0">
                <div className="bg-white p-2 rounded-lg border border-[hsl(40,12%,89%)] shadow-sm flex items-center gap-2">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Check size={12} className="text-emerald-600" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 truncate">{scenario.result}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Notification Card */}
        <div className="absolute top-10 -left-16 w-52 v3-slide-in opacity-0 z-20">
          <div className="bg-white p-3 rounded-xl border border-[hsl(40,12%,89%)] shadow-xl flex items-center gap-3">
            <div className={`w-8 h-8 ${scenario.accent} rounded-lg flex items-center justify-center text-white`}>
              {scenario.type === 'support' && <MessageSquare size={16} />}
              {scenario.type === 'ads' && <TrendingUp size={16} />}
              {scenario.type === 'reviews' && <Star size={16} />}
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold text-slate-900 leading-tight">{scenario.notification}</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[8px] text-slate-400 uppercase font-black">Urgent Approval</span>
              </div>
            </div>
          </div>
        </div>

        {/* Agents Flying Out */}
        <div
          className="v3-fly-out absolute z-30 opacity-0 pointer-events-none"
          style={{ '--tx': '140px', '--ty': '-80px' } as React.CSSProperties}
        >
          <AgentBadge label={scenario.agentLabel} icon={scenario.agentIcon} color={scenario.accent} />
        </div>

        <div
          className="v3-fly-out absolute z-30 opacity-0 pointer-events-none"
          style={{ '--tx': '-140px', '--ty': '-120px', animationDelay: '0.1s' } as React.CSSProperties}
        >
          <AgentBadge label="System Core" icon="⚙️" color="bg-slate-700" />
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 256 420">
          <defs>
            <linearGradient id="v3-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g className="v3-fly-out opacity-0">
            <path d="M128,200 Q200,150 268,120" stroke="url(#v3-grad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <path d="M128,200 Q50,150 -12,80" stroke="url(#v3-grad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          </g>
        </svg>

      </div>
    </div>
  );
};

const AgentBadge = ({ label, icon, color }: { label: string; icon: string; color: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className={`w-12 h-12 ${color} rounded-2xl shadow-lg flex items-center justify-center text-white text-lg font-black border-2 border-white`}>
      {icon}
    </div>
    <div className="bg-white px-2 py-1 rounded-full border border-[hsl(40,12%,89%)] shadow-sm flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      <span className="text-[9px] font-black uppercase text-slate-600 tracking-tight whitespace-nowrap">{label}</span>
    </div>
  </div>
);

export default HeroApprovalAnimationV3;
