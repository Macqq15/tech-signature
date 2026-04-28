import React from "react";
import { CheckCircle2, Mail, ArrowRight, Package, Upload, Play, MessageCircle } from "lucide-react";

export default function AgencyThankYou() {
  const steps = [
    {
      icon: <Mail className="text-emerald-600" size={22} />,
      title: "Check your email",
      desc: "Delivery arrives within 2 minutes at the address you used at checkout. Look for \"Your AI Board is ready\". If not in inbox, check spam.",
    },
    {
      icon: <Upload className="text-emerald-600" size={22} />,
      title: "Open Claude.ai (or ChatGPT Plus / Gemini Advanced)",
      desc: "Easiest: claude.ai → New Project → name it \"AI Board\". Upload the 3 files from the zip to Project Knowledge. For ChatGPT/Gemini, see README.md inside the zip.",
    },
    {
      icon: <Play className="text-emerald-600" size={22} />,
      title: "Type \"Run onboarding\"",
      desc: "AI Board asks you 8 questions about your business (5 min). It generates your filled agency-context.md. Then it's live and thinking about YOUR agency.",
    },
    {
      icon: <MessageCircle className="text-emerald-600" size={22} />,
      title: "Try your first real question",
      desc: "Good first asks: \"My biggest pain is [X]. What would the CMO + COO suggest?\" or \"Should I raise prices on my biggest client? Give me 3 perspectives.\"",
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(50,33%,98%)] text-slate-900 font-sans selection:bg-emerald-100 px-6 py-12">
      <div className="max-w-2xl mx-auto">

        {/* SUCCESS HEADER */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-emerald-600" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            You're In.{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Welcome to the Founders.
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your AI Board is on its way. Here's exactly what to do next — takes 5 minutes total.
          </p>
        </div>

        {/* STEPS */}
        <div className="bg-[hsl(48,25%,97%)] border border-[hsl(40,12%,89%)] rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Package className="text-emerald-600" size={24} />
            <h2 className="text-xl font-black">Get started in 5 minutes</h2>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-[hsl(40,12%,89%)]">
                  <span className="text-emerald-600 font-black text-sm">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1 flex items-center gap-2">
                    {step.icon}
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UPGRADE PATH — MINIMAL SOFT MENTION (per CMO/CSO review 2026-04-26) */}
        <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 mb-8">
          <h3 className="font-black text-xl mb-3">When you're ready for more</h3>
          <p className="text-slate-600 text-sm mb-5 leading-relaxed">
            AI Board is your thinking partner. When you need <strong className="text-slate-900">actual automation</strong> — agents running reports, briefings, and alerts 24/7 from your stack — that's Tier 2-4 territory ($3.5K-25K builds).
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/#tiers"
              className="inline-flex items-center gap-2 bg-emerald-500 text-white hover:bg-emerald-600 px-5 py-3 rounded-full font-bold text-sm shadow-lg shadow-emerald-200 transition-all"
            >
              See custom services <ArrowRight size={16} />
            </a>
            <a
              href="https://calendar.app.google/fFWpKufRhdUsmRkp6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[hsl(40,12%,89%)] hover:border-emerald-500 px-5 py-3 rounded-full font-bold text-sm text-slate-700 transition-all"
            >
              Free 30-min discovery call
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="text-center text-sm text-slate-500">
          <p className="mb-2">
            Questions? Reply to your delivery email — it goes straight to Maciej.
          </p>
          <p>
            Or email <a href="mailto:info@maciejmarek.com" className="text-emerald-600 font-semibold hover:underline">info@maciejmarek.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
