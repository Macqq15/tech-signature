import React, { useState } from "react";
import {
  ArrowRight, User, FileText, Briefcase,
  ChevronDown, Shield, Check, X, Clock, BarChart3, Users, AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";
import HeroBoardAnimation from "@/components/HeroBoardAnimation";
import founderPhoto from "@/assets/founder-photo.jpg";

// --- V1 DESIGN SYSTEM PRIMITIVES ---

const WBadge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${className}`}>{children}</span>
);

const WCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[hsl(48,25%,97%)] border border-[hsl(40,12%,89%)] rounded-2xl transition-all duration-300 ${className}`}>{children}</div>
);

const WBtn = ({ children, variant = "primary", className = "", onClick, href }: { children: React.ReactNode; variant?: "primary" | "outline"; className?: string; onClick?: () => void; href?: string }) => {
  const styles = variant === "primary"
    ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-200"
    : "border-2 border-[hsl(40,12%,89%)] hover:border-emerald-500 bg-transparent";
  const cls = `px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 ${styles} ${className}`;
  if (href) return <a href={href} className={`inline-flex items-center justify-center gap-2 ${cls}`}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
};

// --- V6 AI BOARD LTO FRAMEWORK ---
// LTO: AI Board in a Box $14.95 + 2 optional bumps ($7 each: Lead Gen Agent + Content Machine).
// Bump modal appears pre-checkout. Combined price updates based on bumps selected.

const STRIPE_LINKS = {
  base:       "https://buy.stripe.com/00w7sFe9e56H5YM32Qg7e00",  // LTO $14.95 (AI Board only)
  bump1_only: "https://buy.stripe.com/7sYaERd5afLl4UI9reg7e01",  // LTO + Lead Gen = $21.95
  bump2_only: "https://buy.stripe.com/cNicMZ8OU1Uv5YMavig7e02",  // LTO + Content Machine = $21.95
  both_bumps: "https://buy.stripe.com/fZu5kx9SYar14UIbzmg7e03",  // LTO + both bumps = $28.95
};

const faqs = [
  {
    q: "What exactly do I get for $14.95?",
    a: "A .zip containing: (1) the AI Board skill file with 5 executives (CEO/CMO/CSO/CTO/COO) + their coordination logic, (2) a shared agency-context.md template, (3) an onboarding prompt that guides you through 8-question setup in 5 minutes, (4) platform-specific instructions for Claude.ai, ChatGPT Plus, Gemini Advanced, Claude Code. Lifetime v1 access."
  },
  {
    q: "Is this just ChatGPT prompts?",
    a: "No — the shared context file is the key difference. Prompt packs give you 500 generic prompts. AI Board gives you 5 executives who read YOUR business context (clients, revenue, pain points) and answer in that context. Plus multi-perspective dispatching: one question, 3 executive views, synthesized recommendation."
  },
  {
    q: "Do I need any technical skills?",
    a: "If you can upload a .zip file or paste text into ChatGPT, you can use this. The onboarding prompt asks 8 questions, generates your filled context file. 5 minutes from purchase to productive use."
  },
  {
    q: "What happens after I buy?",
    a: "You get email delivery within 2 minutes: the .zip with AI Board files. Open Claude.ai (or ChatGPT/Gemini), new project, upload 3 files, type \"Run onboarding\". 8 questions later, your AI Board is live and thinking about your business."
  },
  {
    q: "Who is this for?",
    a: "Agency owners and small business founders running client retainers who make every strategic call alone. If you'd hire a fractional CMO/CSO if you could afford it ($5-20K/mo), AI Board gives you 5 executives on demand for $14.95. NOT for: pure solopreneurs with no clients, or anyone expecting a magic button."
  },
  {
    q: "What's the upgrade path if I want more?",
    a: "Optional, no pushy upsells: $197 Diagnostic Call (45-min 1:1 to plan deployment), $497 Wiring Service (2-hour hands-on call, we configure everything together), Tier 2 Done-For-You AI Agents ($3.5-5K setup + monthly) — custom-built automation generating briefings, reports, alerts 24/7."
  },
  {
    q: "Sahil Lavingia's skills are free on GitHub. Why pay you?",
    a: "Sahil's free skills are excellent — for solopreneurs building generic bootstrapped businesses. AI Board is built for agency owners and small business founders running client retainers. Our executives understand ROAS, client churn, scope creep, pipeline stages, fractional-hire decisions. Plus the shared context file personalizes every output to YOUR business. Different problem, different solution."
  },
];

// --- Bump Modal (pre-checkout) ---
function BumpModal({ onClose }: { onClose: () => void }) {
  const [bump1, setBump1] = useState(false);
  const [bump2, setBump2] = useState(false);

  const total = 14.95 + (bump1 ? 7 : 0) + (bump2 ? 7 : 0);
  let link = STRIPE_LINKS.base;
  if (bump1 && bump2)      link = STRIPE_LINKS.both_bumps;
  else if (bump1)          link = STRIPE_LINKS.bump1_only;
  else if (bump2)          link = STRIPE_LINKS.bump2_only;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={20} />
        </button>

        <h3 className="text-2xl font-black text-center mb-2">Add Any of These?</h3>
        <p className="text-sm text-slate-500 text-center mb-6">Two optional AI skills, $7 each. Check what you want.</p>

        <label className="bg-amber-50 border-2 border-amber-200 hover:border-amber-400 rounded-xl p-4 mb-3 flex gap-3 cursor-pointer transition-colors">
          <input
            type="checkbox"
            checked={bump1}
            onChange={(e) => setBump1(e.target.checked)}
            className="mt-1 w-4 h-4 accent-amber-500 flex-shrink-0"
          />
          <div>
            <h4 className="text-amber-700 font-bold text-sm mb-1">+ AI Lead Gen Agent — $7</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Paste a lead (LinkedIn/website) → personalized cold email + 3 follow-ups + pitch angle. Built for founders who hate cold outreach.
            </p>
          </div>
        </label>

        <label className="bg-amber-50 border-2 border-amber-200 hover:border-amber-400 rounded-xl p-4 mb-5 flex gap-3 cursor-pointer transition-colors">
          <input
            type="checkbox"
            checked={bump2}
            onChange={(e) => setBump2(e.target.checked)}
            className="mt-1 w-4 h-4 accent-amber-500 flex-shrink-0"
          />
          <div>
            <h4 className="text-amber-700 font-bold text-sm mb-1">+ AI Content Machine — $7</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Feed 10-20 past posts/emails → skill learns your voice → writes LinkedIn, newsletters, client emails in YOUR voice (not ChatGPT's).
            </p>
          </div>
        </label>

        <WBtn variant="primary" className="w-full text-lg py-5 flex items-center justify-center gap-2 mb-3" href={link}>
          Checkout — ${total.toFixed(2)} <ArrowRight size={20} />
        </WBtn>

        <button
          onClick={onClose}
          className="block w-full text-center text-sm text-slate-400 hover:text-slate-600 transition-colors underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function AgencyStarterLTO() {
  const [showBump, setShowBump] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openCheckout = () => setShowBump(true);

  return (
    <div className="min-h-screen bg-[hsl(50,33%,98%)] text-slate-900 font-sans selection:bg-emerald-100 overflow-x-hidden">

      <style>{`
        @keyframes ae-fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .ae-fade-in-up { animation: ae-fade-in-up 0.6s ease-out forwards; }
      `}</style>

      {/* BUMP MODAL */}
      {showBump && <BumpModal onClose={() => setShowBump(false)} />}

      {/* ═══ 1. HEADLINE + PAIN ═══ */}
      <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center ae-fade-in-up">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Stop Making Every{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Strategic Call Alone.
              </span>
            </h1>
            <h2 className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl md:max-w-none mx-auto md:mx-0">
              5 AI executives — CMO, CSO, CTO, COO + CEO dispatcher — trained on agency problems. Multi-perspective thinking partner for pricing, positioning, client decisions. Upload once, first answer in 5 minutes.
            </h2>
          </div>

          {/* Hero animation — 3 strategic decision scenarios cycling */}
          <div className="hidden md:block">
            <HeroBoardAnimation />
          </div>
        </div>
      </section>

      {/* ═══ 2. WHAT IS IT ═══ */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-6">What Is AI Board in a Box?</h2>
          <p className="text-slate-600 leading-relaxed text-center text-lg mb-6">
            <span className="font-bold text-slate-900">AI Board</span> is a skill file with 5 trained executives — CMO, CSO, CTO, COO + CEO dispatcher — built specifically for agency owners and small business founders. Not generic prompts. A structured system with agency-specific decision logic, personalized output, and anti-hallucination guardrails.
          </p>
          <p className="text-slate-600 leading-relaxed text-center">
            You fill in a shared <span className="font-bold text-slate-900">agency-context.md</span> once. All 5 executives read it and think from your business&rsquo;s perspective. Ask a strategic question, get <span className="font-bold text-slate-900">multi-perspective analysis + a clear next step</span> in the time it takes to finish your coffee.
          </p>
        </div>
      </section>

      {/* ═══ 3. CTA #1: EARLY PRICE ANCHOR ═══ */}
      <section className="py-12 px-6 bg-white border-y border-[hsl(40,12%,89%)]">
        <div className="max-w-xl mx-auto text-center">
          <WBadge className="bg-amber-100 text-amber-700 mb-4 inline-block">⚡ Founders pricing · first 100 buyers only</WBadge>
          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="text-5xl font-black">$14.95</span>
            <span className="text-lg text-slate-400 line-through">$47</span>
          </div>
          <p className="text-sm text-slate-500 mb-6">Fractional CMOs cost $5-20K/mo. This is your AI-powered first team — for the price of one fancy dinner.</p>
          <WBtn variant="primary" className="text-lg px-10 py-5 flex items-center justify-center gap-2 w-full sm:w-auto mx-auto" onClick={openCheckout}>
            Get Instant Access: $14.95 <ArrowRight size={20} />
          </WBtn>
          <p className="mt-3 text-xs text-slate-400">One-time payment · Lifetime v1 · No subscriptions</p>
        </div>
      </section>

      {/* ═══ 4. FOUNDER STORY ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-6 mb-10">
            <img src={founderPhoto} alt="Maciej Marek" className="w-28 h-28 rounded-full object-cover border-4 border-emerald-100 shadow-xl" />
            <div className="text-center">
              <p className="font-black text-lg">Maciej Marek</p>
              <p className="text-sm text-emerald-600 font-semibold">Systems Builder. Sold his last company for 5 figures.</p>
            </div>
          </div>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              I ran a newsletter operations company processing 250K transactions per week. And I was drowning. Status updates, client reports, invoice follow-ups, prospect research. The same repetitive decisions, over and over. 40+ hours a week on ops alone.
            </p>
            <p>
              I tried everything. Hired copywriters. Outsourced reporting to VAs. Batched newsletters. Every solution just moved the bottleneck. <span className="font-bold text-slate-900">The problem wasn&rsquo;t the tasks. The problem was that every strategic call still needed me.</span>
            </p>
            <p>
              So I stopped hiring people to do the thinking and started building systems that replaced it. Every report, every alert, every client touchpoint. We ended up running the entire business in under 4 hours a week.
            </p>
            <p>
              What was a &ldquo;service business&rdquo; valued at 1-2x revenue became a &ldquo;software business&rdquo; valued at 3-5x. Acquired February 2026 for a 5-figure sum.
            </p>
            <p>
              Now I&rsquo;ve distilled that approach into <span className="font-bold text-slate-900">AI Board</span> — the 5 executives I wish I&rsquo;d had on day one. Packaged so you get value within 5 minutes of downloading.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 5. NO MORE / INSTEAD YOU'LL GET ═══ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-black text-center mb-12">Here's What This Means for Your Agency...</h2>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-600">
              <X size={24} /> No More:
            </h3>
            <ul className="space-y-4">
              {[
                "Three-week decisions because you had no one to bounce ideas off",
                "Generic ChatGPT answers that don't know your clients or KPIs",
                "$200/hour fractional consultants for questions you'll ask twice",
                "Hiring a CMO just to get positioning advice",
                "Guessing at pricing, then regretting it on every proposal",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-600">
                  <X size={16} className="text-red-400 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-emerald-600">
              <Check size={24} /> Instead You&rsquo;ll Get:
            </h3>
            <ul className="space-y-4">
              {[
                "Multi-perspective analysis on any strategic decision in 60 seconds",
                "Positioning audit using April Dunford's framework, on demand",
                "Pricing strategy tailored to your client base — not theoretical",
                "Ops bottleneck diagnosis (Theory of Constraints) with specific fixes",
                "A thinking partner that remembers your context, 24/7, forever",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-600">
                  <Check size={16} className="text-emerald-500 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ═══ 6. EVERYTHING INCLUDED ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">Here&rsquo;s Everything You&rsquo;re Getting for $14.95</h2>
          <p className="text-center text-slate-500 mb-12">Works with any major AI platform. No coding, no API keys.</p>

          <div className="space-y-6">
            {/* 5 Executives */}
            <WCard className="p-8 border-emerald-200 border-2">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0 font-black text-xl">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-xl mb-2">5 AI Executives</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    A trained executive team that reads your business context and thinks from multiple angles on every decision:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: "CEO Dispatcher", desc: "Routes + synthesizes 3 views" },
                      { label: "CMO", desc: "Positioning, content, campaigns" },
                      { label: "CSO", desc: "Sales, pricing, objections" },
                      { label: "CTO", desc: "Stack audit, build-vs-buy" },
                      { label: "COO", desc: "Bottlenecks, process fixes" },
                    ].map(({ label, desc }, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                        <div>
                          <span className="font-semibold text-slate-800 block leading-tight">{label}</span>
                          <span className="text-slate-400 text-xs">{desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </WCard>

            {/* The Context File */}
            <WCard className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <FileText size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-xl mb-2">Agency Context File + Onboarding</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    Fill it in once (5-10 min via guided onboarding prompt). All 5 executives remember everything:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Your clients: names, retainers, KPIs, campaign types",
                      "Your team: who handles what, capacity, specializations",
                      "Your services: pricing, packages, upsell opportunities",
                      "Your voice: how you communicate with clients",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600">
                        <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-400 mt-3">Every output personalized. No generic AI fluff.</p>
                </div>
              </div>
            </WCard>

            {/* Cross-platform */}
            <WCard className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0 font-black text-lg">
                  ⚙
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-xl mb-2">This Is NOT a Prompt Pack</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">What makes AI Board different:</p>
                  <ul className="space-y-2">
                    {[
                      "Shared context file — all 5 executives read the same source of truth",
                      "Multi-perspective dispatcher — one question, 3 views, one answer",
                      "Zero-hallucination rules — execs say \"I don't know\" instead of inventing numbers",
                      "Cross-platform — Claude.ai, Claude Desktop, Claude Code, ChatGPT Plus, Gemini Advanced",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600">
                        <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </WCard>
          </div>
        </div>
      </section>

      {/* ═══ 7. CTA #2 ═══ */}
      <section id="get-started" className="py-16 px-6 bg-white border-y border-[hsl(40,12%,89%)]">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-black mb-2">AI Board in a Box — Founders Edition</h3>
          <p className="text-sm text-slate-500 mb-6">5 AI executives + shared context + guided onboarding. Lifetime v1.</p>
          <div className="flex items-baseline justify-center gap-3 mb-1">
            <span className="text-5xl font-black text-slate-900">$14.95</span>
            <span className="text-lg text-slate-400 line-through">$47</span>
          </div>
          <p className="text-xs text-emerald-600 font-semibold mb-6">Founders pricing · first 100 buyers only</p>
          <WBtn variant="primary" className="w-full sm:w-auto text-lg py-5 px-10 flex items-center justify-center gap-2 mx-auto" onClick={openCheckout}>
            Yes, Send Me My AI Board: $14.95 <ArrowRight size={20} />
          </WBtn>
          <p className="mt-4 text-xs text-slate-400">
            One-time payment · Lifetime v1 · No subscriptions · v2 upgrade at 50% off when it ships
          </p>
        </div>
      </section>

      {/* ═══ 8. SOCIAL PROOF / RESTATE VALUE ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8">Built by Someone Who Automated a Real Business and Sold It for 5 Figures</h2>
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mb-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">Before</p>
              <p className="font-black text-2xl text-red-500">40h/week</p>
              <p className="text-sm text-slate-500 mt-1">manual ops</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">After</p>
              <p className="font-black text-2xl text-emerald-600">4h/week</p>
              <p className="text-sm text-slate-500 mt-1">dashboard check · strategy only</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
            Same thinking. Same type of system. Different business: yours. AI Board is built on the same approach that turned a service company into a software company worth acquiring.
          </p>
        </div>
      </section>

      {/* ═══ 9. CTA #3 ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[32px] p-12 md:p-16 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">What Would You Decide Differently If You Had a CMO, CSO, CTO + COO on Call 24/7?</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Pricing, positioning, next hire, which client to fire, when to raise, what to build next — every high-stakes call gets 5 perspectives in 60 seconds.
          </p>
          <WBtn className="bg-white !text-emerald-900 hover:bg-slate-100 text-lg px-10 py-5 !shadow-none" onClick={openCheckout}>
            Yes, Give Me the AI Board <ArrowRight className="inline ml-2 w-5 h-5" />
          </WBtn>
          <p className="text-sm text-emerald-200 mt-4 font-medium">$14.95 one-time · Founders pricing · first 100 buyers only</p>
        </div>
      </section>

      {/* ═══ 10. WORKS WITH EVERY PLATFORM ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <WCard className="p-8 md:p-10 text-center border-emerald-200">
            <Shield className="mx-auto mb-4 text-emerald-500" size={36} />
            <h2 className="text-2xl font-black mb-4">Works With Every Major AI Platform</h2>
            <p className="text-slate-600 leading-relaxed text-sm mb-6">
              You already have at least one of these. No new subscriptions. No API keys. No setup wizardry.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {["Claude.ai", "Claude Desktop", "Claude Code", "ChatGPT Plus", "Gemini Advanced"].map((p) => (
                <span key={p} className="px-4 py-2 rounded-full bg-[hsl(48,25%,97%)] border border-[hsl(40,12%,89%)] text-xs font-semibold text-slate-700">
                  {p}
                </span>
              ))}
            </div>
            <p className="text-slate-600 leading-relaxed text-sm mb-6">
              Upload the .zip files to your preferred platform. Run the onboarding prompt. 5 minutes later, your AI Board is thinking about your business.
            </p>
            <button onClick={openCheckout} className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold underline transition-colors">
              Ready? Get Instant Access: $14.95
            </button>
          </WCard>
        </div>
      </section>

      {/* ═══ 11. FAQ ═══ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
          <p className="text-center text-slate-500 text-sm mb-8">Questions? Email <a href="mailto:info@maciejmarek.com" className="text-emerald-600 font-semibold">info@maciejmarek.com</a></p>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="rounded-xl border border-[hsl(40,12%,89%)] overflow-hidden bg-[hsl(48,25%,97%)]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-emerald-50/50 transition-colors"
                >
                  <span className="font-semibold text-sm pr-4">{item.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200", openFaq === i && "rotate-180")} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. FOOTER ═══ */}
      <footer className="py-12 px-6 pb-24 md:pb-12 border-t border-[hsl(40,12%,89%)] text-slate-500 text-sm bg-[hsl(50,33%,96%)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md flex items-center justify-center text-white font-black text-[10px]">R</div>
            <span className="font-bold text-slate-700">runsitself · by Maciej Marek</span>
          </div>
          <p className="text-slate-400">AI-native systems. No duct tape.</p>
          <span>&copy; {new Date().getFullYear()} · Poland (EU)</span>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[hsl(40,12%,85%)]">
          <p className="text-[11px] text-slate-400/80 leading-relaxed text-center">
            RESULTS DISCLAIMER: The results and case studies presented represent outcomes achieved in specific contexts. Individual results will vary. We make no guarantee of specific savings or revenue outcomes.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-md border-t border-[hsl(40,12%,89%)] px-4 py-3 flex items-center justify-between">
        <div>
          <span className="text-sm font-black text-slate-700">$14.95</span>
          <span className="text-xs text-slate-400 ml-2">one-time</span>
        </div>
        <WBtn className="py-2 px-5 text-sm shrink-0" onClick={openCheckout}>
          Get AI Board <ArrowRight className="inline ml-1 w-4 h-4" />
        </WBtn>
      </div>
    </div>
  );
}
