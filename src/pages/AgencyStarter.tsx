import React, { useState } from 'react';
import { ArrowRight, Zap, TrendingUp, FileText, DollarSign, Search, Eye, ChevronDown, ChevronUp, Shield, Server, Check } from 'lucide-react';

export default function AgencyStarter() {
  const [bumpChecked, setBumpChecked] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const price = bumpChecked ? 19 : 12;
  const stripeLink = '#STRIPE_CHECKOUT_LINK'; // TODO: replace with real Stripe link

  const tools = [
    { name: 'AI Prospect Research', type: 'GROWTH', icon: <Search size={24} />, desc: 'Give it a niche. Get 10 prospects with: website, estimated ad spend, weak points, and a ready pitch angle.', output: '10 qualified prospects with pitch angles', color: 'text-violet-400', bg: 'bg-violet-500/10' },
    { name: 'AI Competitor Scanner', type: 'GROWTH', icon: <Eye size={24} />, desc: 'Feed it a client + 3 competitors. Get their ads, landing pages, pricing gaps, and opportunities to exploit.', output: 'Competitive intelligence brief', color: 'text-violet-400', bg: 'bg-violet-500/10' },
    { name: 'AI Client Report Generator', type: 'OPS', icon: <FileText size={24} />, desc: 'Monthly report ready to send. Formatted with highlights, flags, and recommendations. Your clients think you spent 3 hours on it.', output: 'Send-ready client report with data flags', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { name: 'AI Invoice Chaser', type: 'OPS', icon: <DollarSign size={24} />, desc: 'Paste your client list + amounts. Get payment reminders, follow-ups, and escalation emails. Soft, firm, or final — you choose the tone.', output: 'Payment reminder emails ready to send', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  const ladder = [
    { level: 1, name: 'AI Generator', desc: 'You give data, AI produces output. 70% of the work done.', price: '$12', active: true, color: 'from-amber-500 to-orange-500' },
    { level: 2, name: 'AI Memory', desc: 'Teach AI your agency once. It remembers. No more 5 questions every time.', price: '$27', active: false, color: 'from-emerald-500 to-teal-500' },
    { level: 3, name: 'AI Manager', desc: 'Full tool suite. AI knows what to do and how. You just say "do it."', price: '$67', active: false, color: 'from-violet-500 to-purple-500' },
    { level: 4, name: 'AI Employee', desc: '24/7 autonomous. Reports at 8am. Alerts in real-time. You sleep.', price: 'from $3,500', active: false, color: 'from-red-500 to-rose-500' },
  ];

  const faqs = [
    { q: 'What exactly do I get for $12?', a: '4 AI-powered tools (structured .md files) that work in Claude, ChatGPT, or Gemini: Prospect Research, Competitor Scanner, Client Report Generator, and Invoice Chaser. Plus a personalized 24-hour demo showing the tools running on YOUR agency data.' },
    { q: 'Are these just ChatGPT prompts?', a: 'No. Each tool includes structured output formatting, decision logic (e.g., if ROAS drops below target, it flags it), email templates ready to send to clients, and guardrails that prevent hallucinated metrics. Think of them as lightweight AI apps, not prompts.' },
    { q: 'Do I need any technical skills?', a: 'If you can copy-paste and use ChatGPT or Claude, you can use these tools. Each one asks you 3-5 questions, then generates the output. No coding, no API keys, no setup.' },
    { q: 'What\'s the upgrade path?', a: 'After purchase, you\'ll see options to teach your AI about your agency ($27 — fill once, it remembers), unlock 6 more tools ($67), or book a done-for-you setup call ($120). Later, we offer full agency AI transformation: autonomous agents that run reports, briefings, and client comms 24/7.' },
    { q: 'Can this run on my own servers? What about data privacy?', a: 'Yes. For agencies handling sensitive client data or with strict compliance requirements, we offer on-premise deployment using open-source AI models on your own GPU hardware (RTX 4090/5090). Zero API costs, zero data leaving your office. Full control, MIT-licensed stack.' },
    { q: 'What makes this different from Jasper, Copy.ai, or other AI tools?', a: 'Those are general-purpose content tools. This is built specifically for e-commerce agency operations: client reporting, prospect research, competitive intelligence, and payment collection. It understands ROAS, CPA, ad spend, and agency workflows. And you own everything — zero vendor lock-in.' },
    { q: 'What if it doesn\'t work for my agency?', a: 'If the tools don\'t save you at least 5 hours per week, email us for a full refund. No questions asked.' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-sans selection:bg-violet-500/30">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-bold">build<span className="text-violet-400">agentic</span></div>
          <a href="#get-started" className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5">
            Get Started — $12
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-8">
            Launch Week — Founding Members Get First Access
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Your Account Managers Spend{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-300 bg-clip-text text-transparent">
              15h/Week on Status Updates.
            </span>{' '}
            Mine Spend Zero.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            4 AI-powered tools that generate client reports, chase invoices, research prospects, and scan competitors. Built for e-commerce agency owners. $12 to try.
          </p>
          <a href="#get-started" className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 shadow-xl shadow-violet-600/20">
            Get Your AI Agency Starter <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            $12 one-time · <span className="text-gray-300 font-medium">$300+ value</span> · Delivery within 7 days
          </p>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="border-y border-white/5 bg-[#111118] py-8 px-6">
        <p className="max-w-3xl mx-auto text-center text-gray-400 italic text-base sm:text-lg leading-relaxed">
          "I turned a service business into a software company.{' '}
          <span className="text-gray-200 font-semibold not-italic">250K transactions/week, fully automated, zero manual ops.</span>{' '}
          Sold it for $50K. Now I help e-commerce agency owners do the same."
        </p>
      </section>

      {/* PROBLEM */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[3px] text-violet-400 font-semibold mb-3">The $3,000/month problem</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 leading-tight">Your team is leaking hours on work AI should be doing</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { hours: '15h/wk', role: 'Account Managers', pain: 'Answering "how\'s my campaign doing?" Writing status updates nobody reads. Copy-pasting between dashboards.' },
              { hours: '12h/wk', role: 'Media Buyers', pain: 'Building dashboards, pulling reports, formatting data. Strategic work pushed to "when I have time."' },
              { hours: '10h/wk', role: 'Project Managers', pain: 'Resource allocation spreadsheets, client follow-ups, onboarding checklists. Admin, not management.' },
            ].map((p, i) => (
              <div key={i} className="bg-[#111118] border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-colors">
                <div className="text-3xl font-extrabold text-red-400 mb-1">{p.hours}</div>
                <div className="text-xs uppercase tracking-[2px] text-violet-400 font-semibold mb-3">{p.role}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{p.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 px-6 bg-[#111118]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[3px] text-violet-400 font-semibold mb-3 text-center">What You Get</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-center">4 AI Tools. Zero Busywork.</h2>
          <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">Each tool produces formatted, ready-to-use output. Not prompts. Not templates. Finished work.</p>

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {tools.map((t, i) => (
              <div key={i} className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-7 hover:border-violet-500/30 hover:-translate-y-1 transition-all group relative">
                <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${t.type === 'GROWTH' ? 'bg-violet-500/10 text-violet-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                  {t.type}
                </span>
                <div className={`w-10 h-10 rounded-xl ${t.bg} flex items-center justify-center ${t.color} mb-4`}>
                  {t.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{t.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{t.desc}</p>
                <p className="text-xs text-emerald-400 pt-4 border-t border-white/5 font-medium">{t.output}</p>
              </div>
            ))}
          </div>

          {/* NOT A PROMPT */}
          <div className="bg-[#1a1a25] border border-white/5 rounded-2xl p-6 mb-8">
            <h3 className="font-bold mb-3">These are not prompts. Each tool includes:</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {['Structured output (tables, sections)', 'Decision logic (ROAS flags, alerts)', 'Ready-to-send templates', 'Anti-hallucination guardrails'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <Check size={14} className="text-violet-400 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* 24h DEMO */}
          <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 border border-violet-500/20 rounded-2xl p-8 text-center">
            <Zap className="mx-auto text-violet-400 mb-3" size={28} />
            <h3 className="text-xl font-bold mb-2">+ Bonus: 24h Personalized Demo</h3>
            <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
              After purchase, answer 3 quick questions about your agency. Within 24 hours, you'll receive a{' '}
              <span className="text-gray-200 font-semibold">full personalized report</span> — not the lite version. See the difference context makes.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#111118] border border-white/5 rounded-2xl p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[3px] text-violet-400 font-semibold mb-4">Why Listen to Me</p>
            <p className="text-xl sm:text-2xl font-bold leading-snug mb-8">
              "I automated my last service business to the point where it ran itself. Then I sold it."
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { val: '250K', lbl: 'transactions/week' },
                { val: '0', lbl: 'manual intervention' },
                { val: '$50K', lbl: 'exit' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-extrabold text-violet-400">{s.val}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.lbl}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed pt-6 border-t border-white/5">
              LetterOperators was a newsletter operations company. I turned it from a service business (1-2x valuation) into a software-like business (3-5x valuation) through automation. Now I'm doing the same for e-commerce agencies.
            </p>
          </div>
        </div>
      </section>

      {/* AUTONOMY LADDER */}
      <section className="py-20 px-6 bg-[#111118]">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[3px] text-violet-400 font-semibold mb-3 text-center">The Transformation Path</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-center">From Service Company to Software Company</h2>
          <p className="text-gray-400 text-center mb-12">Most agencies are stuck at Level 0. The $12 starter gets you to Level 1 today.</p>
          <div className="space-y-3">
            {ladder.map((l, i) => (
              <div key={i} className={`flex items-center gap-5 bg-[#0a0a0f] border rounded-xl p-5 transition-all ${l.active ? 'border-violet-500/40 shadow-lg shadow-violet-500/5' : 'border-white/5'}`}>
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${l.color} flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0`}>
                  {l.level}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm sm:text-base">{l.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{l.desc}</p>
                </div>
                <div className="text-sm font-bold text-violet-400 whitespace-nowrap">{l.price}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            <span className="text-emerald-400 font-semibold">You're here today.</span> Start at Level 1 for $12. Upgrade when ready.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent pointer-events-none" />
        <div className="max-w-xl mx-auto relative">
          <div className="bg-[#111118] border border-violet-500/30 rounded-3xl p-8 sm:p-10 text-center shadow-2xl shadow-violet-500/5">
            <p className="text-xs uppercase tracking-[3px] text-violet-400 font-semibold mb-3">Start Here</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">AI Agency Starter</h2>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
              4 AI tools + 24h personalized demo. Stop wasting hours on work AI should be doing.
            </p>
            <div className="flex items-baseline justify-center gap-3 mb-1">
              <span className="text-5xl font-extrabold">${price}</span>
              <span className="text-lg text-gray-500 line-through">$300+ value</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">One-time payment · Works with Claude, ChatGPT, or Gemini</p>

            {/* BUMP */}
            <div className="bg-amber-500/5 border-2 border-dashed border-amber-500/20 rounded-xl p-5 mb-6 text-left">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={bumpChecked}
                  onChange={() => setBumpChecked(!bumpChecked)}
                  className="mt-1 w-5 h-5 accent-amber-500 rounded flex-shrink-0"
                />
                <div>
                  <div className="text-amber-400 font-bold text-sm mb-1">YES! Add AI Content Batch — just $7 more</div>
                  <div className="text-gray-400 text-xs leading-relaxed">5th tool: generate content plans + drafts for multiple clients at once. Plan a week of content in 10 minutes instead of 3 hours.</div>
                </div>
              </label>
            </div>

            <a href={stripeLink} className="flex items-center justify-center gap-3 w-full bg-violet-600 hover:bg-violet-500 text-white py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 shadow-xl shadow-violet-600/20">
              Get Instant Access — ${price} <ArrowRight size={20} />
            </a>
            <p className="mt-4 text-xs text-gray-500">
              Founding members get delivery within 7 days. No questions asked refund if tools don't save you at least 5 hours/week.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5">
                <button
                  className="w-full flex items-center justify-between py-5 text-left font-semibold hover:text-violet-400 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp size={18} className="text-violet-400 flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-500 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-xs text-gray-500">
        &copy; 2026 buildagentic.com · Built by Maciej Marek · AI-native agency transformation.
      </footer>
    </div>
  );
}
