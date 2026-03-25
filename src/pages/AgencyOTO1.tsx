import React, { useState, useEffect } from "react";
import {
  ArrowRight, Brain, Clock, Target, TrendingUp, Shield,
  CheckCircle2, X, Users, BarChart3, Megaphone, Wrench
} from "lucide-react";

const STRIPE_OTO1 = "#STRIPE_CHECKOUT_LINK_97";
const TIMER_MINUTES = 15;

function useOtoTimer(key: string) {
  const [seconds, setSeconds] = useState(() => {
    const saved = sessionStorage.getItem(key);
    if (saved) {
      const remaining = Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000));
      return remaining > 0 ? remaining : 0;
    }
    const expiry = Date.now() + TIMER_MINUTES * 60 * 1000;
    sessionStorage.setItem(key, String(expiry));
    return TIMER_MINUTES * 60;
  });

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return { seconds, expired: seconds === 0 };
}

const executives = [
  {
    icon: <Target size={22} />,
    title: "Chief Marketing Officer",
    subtitle: "CMO",
    capabilities: [
      "Audit your positioning vs competitors",
      "Content calendar with topics that convert",
      "Campaign briefs ready for execution",
      "Brand voice consistency across channels",
    ],
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Chief Sales Officer",
    subtitle: "CSO",
    capabilities: [
      "Qualify inbound leads in 60 seconds",
      "Objection handling scripts per prospect",
      "Proposal drafts matched to client pain",
      "Pipeline review with close probability",
    ],
  },
  {
    icon: <Wrench size={22} />,
    title: "Chief Technology Officer",
    subtitle: "CTO",
    capabilities: [
      "Tool stack audit: what to keep, cut, add",
      "Integration map across your platforms",
      "Automation opportunities ranked by ROI",
      "Security and data flow review",
    ],
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Chief Operations Officer",
    subtitle: "COO",
    capabilities: [
      "Bottleneck identification per client",
      "Process templates for onboarding, reporting",
      "Energy check: what drains you vs. grows you",
      "Weekly ops review with action items",
    ],
  },
  {
    icon: <Brain size={22} />,
    title: "CEO Dispatcher",
    subtitle: "CEO",
    capabilities: [
      "Routes any question to the right executive",
      "Multi-perspective analysis on hard decisions",
      "Weekly strategic review across all functions",
      "Financial scenario modeling",
    ],
  },
];

function CountdownTimer({ seconds, expired }: { seconds: number; expired: boolean }) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  if (expired) {
    return (
      <div className="text-center">
        <p className="text-sm font-bold text-red-500">This offer has expired</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="bg-slate-900 text-white rounded-lg px-3 py-2 min-w-[3rem] text-center">
        <span className="text-2xl font-black font-mono">{String(mins).padStart(2, "0")}</span>
      </div>
      <span className="text-2xl font-black text-slate-400">:</span>
      <div className="bg-slate-900 text-white rounded-lg px-3 py-2 min-w-[3rem] text-center">
        <span className="text-2xl font-black font-mono">{String(secs).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

export default function AgencyOTO1() {
  const { seconds, expired } = useOtoTimer("oto1_timer");
  return (
    <div className="min-h-screen bg-[hsl(50,33%,98%)] text-slate-900 font-sans selection:bg-emerald-100 overflow-x-hidden">

      {/* GREEN CONFIRMATION BAR */}
      <div className="bg-emerald-600 text-white text-center py-3 px-4 text-sm font-semibold">
        Your Agency Chief of Staff is confirmed. One more thing before you go:
      </div>

      {/* TIMER BAR */}
      <div className="bg-slate-50 border-b border-[hsl(40,12%,89%)] py-4 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">This offer expires in</p>
          <CountdownTimer seconds={seconds} expired={expired} />
        </div>
      </div>

      {/* HERO */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-emerald-600 font-bold uppercase tracking-wider mb-4">One-Time Offer. Not Available Later.</p>
          <h1 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6">
            Your Chief of Staff Runs Operations.{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Who Runs Strategy?
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The Chief of Staff handles day-to-day. But marketing, sales, tech, and operations still land on your desk. The Full Box gives you an entire C-Suite that shares your agency context file. Five executive skills. One unified brain.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4">Chief of Staff Alone</p>
              <ul className="space-y-3">
                {[
                  "Operations handled, but strategy is still you",
                  "Marketing ideas? Think of them yourself",
                  "Sales call prep? Wing it every time",
                  "Tech decisions? Google it, hope for the best",
                  "No one challenges your blind spots",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">The Full Box (C-Suite)</p>
              <ul className="space-y-3">
                {[
                  "CMO audits your positioning and plans campaigns",
                  "CSO qualifies leads and drafts proposals",
                  "CTO maps your tools and finds automation gaps",
                  "COO spots bottlenecks before clients complain",
                  "CEO routes any question to the right executive",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE 5 EXECUTIVES */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-3">Five Executives. One Context File.</h2>
          <p className="text-center text-slate-500 text-sm mb-10">
            They all read from the same agency context you already filled in. No extra setup.
          </p>

          <div className="space-y-4 mb-10">
            {executives.map((exec, i) => (
              <div
                key={i}
                className="bg-[hsl(48,25%,97%)] border border-[hsl(40,12%,89%)] rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-emerald-600">{exec.icon}</div>
                  <div>
                    <p className="font-black text-sm">{exec.title}</p>
                    <p className="text-xs text-slate-400">{exec.subtitle}</p>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {exec.capabilities.map((cap, j) => (
                    <li key={j} className="flex gap-2 text-xs text-slate-600">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* HOW IT WORKS */}
          <div className="bg-[hsl(48,25%,97%)] border border-[hsl(40,12%,89%)] rounded-2xl p-8">
            <h3 className="font-bold text-center mb-6">How it works</h3>
            <div className="space-y-4">
              {[
                { step: "1", text: "You already have your context file from the Chief of Staff. No extra setup needed." },
                { step: "2", text: "Upload any executive skill to your AI platform. It reads the same context file." },
                { step: "3", text: "Ask the CEO which executive to use, or go directly to the one you need." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-black shrink-0">
                    {item.step}
                  </div>
                  <p className="text-sm text-slate-600 pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MATH SECTION */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-black text-center mb-6">The math on replacing yourself</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Hiring these roles</p>
                <p className="text-3xl font-black text-red-400">$25,000<span className="text-sm font-normal text-slate-400">/month</span></p>
                <p className="text-xs text-slate-500 mt-1">CMO + CSO + CTO + COO + CEO time</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">The Full Box</p>
                <p className="text-3xl font-black text-emerald-400">$97<span className="text-sm font-normal text-slate-400"> once</span></p>
                <p className="text-xs text-slate-500 mt-1">All 5 executives + Chief of Staff included</p>
              </div>
            </div>
            <p className="text-center text-sm text-slate-400">
              Not a replacement for real executives. A thinking partner that covers the gaps until you can afford them.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-[hsl(48,25%,97%)] border-2 border-emerald-200 rounded-2xl p-10 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">Business Out of the Box</p>
            <h3 className="text-2xl font-black mb-2">The Full Box</h3>
            <p className="text-sm text-slate-500 mb-1">5 AI executive skills + CEO dispatcher + Chief of Staff included</p>
            <p className="text-xs text-slate-400 mb-4">All sharing your agency context. Zero extra setup.</p>
            <div className="mb-4">
              <CountdownTimer seconds={seconds} expired={expired} />
            </div>
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span className="text-5xl font-black">$97</span>
              <span className="text-sm text-slate-400">one-time</span>
            </div>
            {expired ? (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-red-600 font-bold text-lg mb-1">This offer has expired</p>
                <p className="text-sm text-slate-500">This one-time offer is no longer available.</p>
              </div>
            ) : (
              <>
                <a
                  href={STRIPE_OTO1}
                  className="inline-flex items-center justify-center gap-2 w-full bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-200 px-8 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95"
                >
                  Yes, Give Me the Full Box: $97 <ArrowRight size={20} />
                </a>
                <p className="mt-4 text-xs text-slate-400">
                  30-day money back guarantee. Not available after this page.
                </p>
              </>
            )}
          </div>

          <a
            href="/agency-oto2"
            className="inline-block mt-8 text-sm text-slate-400 hover:text-slate-600 transition-colors underline"
          >
            No thanks, I'll stick with the Chief of Staff
          </a>
        </div>
      </section>
    </div>
  );
}
