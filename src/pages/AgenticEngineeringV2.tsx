import React, { useState } from 'react';
import {
  Cpu, LayoutDashboard, MessageSquare, BarChart3, Bell,
  TrendingUp, Package, Mail, Search, CheckCircle2, XCircle,
  ShieldCheck, ArrowRight, Languages, Play,
  Megaphone, Smartphone,
} from 'lucide-react';
import HeroApprovalAnimation from '@/components/HeroApprovalAnimation';

// --- TRANSLATIONS ---
const translations = {
  en: {
    nav: { services: "Services", agents: "AI Agents", results: "Results", process: "Process", audit: "Free AI Audit" },
    hero: {
      badge: "AI That Actually Runs Your Business",
      h1_1: "Stop Hiring.",
      h1_2: "Start Deploying.",
      sub: "We build and deploy autonomous AI agents that handle the heavy lifting of e-commerce operations while you sleep.",
      cta1: "Book Free Audit",
      cta2: "View Agent Catalog",
      stat1: "9 agents / 47+ automations",
      stat2: "140+ / hours saved per month",
      stat3: "14 days / first agent live"
    },
    marquee: "Built Automation For",
    problem: {
      title: "Sound Familiar?",
      p1: { t: "Tool Fatigue", d: "12+ SaaS tools, none of them talking to each other." },
      p2: { t: "The Copy-Paste Trap", d: "Wasting 8 mins per ticket on manual workflows." },
      p3: { t: "Invisible Revenue Loss", d: "Bad reviews at 2 AM that nobody sees until Monday." }
    },
    control: {
      title: "You Stay in Control",
      dispatch: "Dispatch (AI handles fully)",
      prep: "Prep (AI does 80%, you finish)",
      yours: "Yours (Human only)",
      skip: "Skip (Deferred)",
      note: "As trust builds, you can expand Dispatch boundaries and let AI operate more autonomously."
    },
    pricing: {
      urgency: "We take max 5 new clients per month.",
      t1: "AI Playbook",
      t2: "AI Chief of Staff",
      t3: "AI On-Premise",
      popular: "Most Popular",
      control: "Full Control"
    },
    salary: {
      title: "The Agentic Math",
      support: "Support Agent",
      ads: "Ad Manager",
      ea: "Exec Assistant",
      human: "Human Cost",
      ai: "AI Agent",
      total: "Total Cost/mo"
    }
  },
  pl: {
    nav: { services: "Usługi", agents: "Agenci AI", results: "Wyniki", process: "Proces", audit: "Bezpłatny Audyt" },
    hero: {
      badge: "AI, które naprawdę prowadzi Twój biznes",
      h1_1: "Przestań zatrudniać.",
      h1_2: "Zacznij wdrażać.",
      sub: "Budujemy i wdrażamy autonomicznych agentów AI, którzy zajmują się operacjami e-commerce, podczas gdy Ty śpisz.",
      cta1: "Umów audyt",
      cta2: "Katalog Agentów",
      stat1: "9 agentów / 47+ automatyzacji",
      stat2: "140+ / oszczędzonych godzin",
      stat3: "14 dni / pierwszy agent live"
    },
    marquee: "Zautomatyzowaliśmy procesy dla",
    problem: {
      title: "Brzmi znajomo?",
      p1: { t: "Zmęczenie narzędziami", d: "12+ narzędzi SaaS, żadne ze sobą nie rozmawia." },
      p2: { t: "Pułapka kopiuj-wklej", d: "8 minut na zgłoszenie tracone na ręczne procesy." },
      p3: { t: "Niewidoczna utrata przychodów", d: "Złe opinie o 2 rano, których nikt nie widzi do poniedziałku." }
    },
    control: {
      title: "Ty zachowujesz kontrolę",
      dispatch: "Dispatch (AI obsługuje w pełni)",
      prep: "Prep (AI robi 80%, Ty kończysz)",
      yours: "Twoje (Tylko człowiek)",
      skip: "Pomiń (Odroczone)",
      note: "W miarę budowania zaufania, możesz rozszerzać granice Dispatch i pozwolić AI działać bardziej autonomicznie."
    },
    pricing: {
      urgency: "Przyjmujemy max 5 nowych klientów miesięcznie.",
      t1: "AI Playbook",
      t2: "AI Szef Sztabu",
      t3: "AI On-Premise",
      popular: "Najpopularniejszy",
      control: "Pełna Kontrola"
    },
    salary: {
      title: "Matematyka Agentów",
      support: "Support",
      ads: "Ad Manager",
      ea: "Asystent",
      human: "Koszt ludzki",
      ai: "Agent AI",
      total: "Koszt miesięczny"
    }
  }
};

// --- COMPONENTS ---

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${className}`}>
    {children}
  </span>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-[hsl(48,25%,97%)] border border-[hsl(40,12%,89%)] rounded-2xl transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const Btn = ({ children, variant = "primary", className = "", onClick }: { children: React.ReactNode, variant?: "primary" | "outline", className?: string, onClick?: () => void }) => {
  const styles = variant === "primary"
    ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-200"
    : "border-2 border-[hsl(40,12%,89%)] hover:border-emerald-500 bg-transparent";

  return (
    <button onClick={onClick} className={`px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 ${styles} ${className}`}>
      {children}
    </button>
  );
};

export default function AgenticEngineeringV2() {
  const [lang, setLang] = useState<'en' | 'pl'>('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[hsl(50,33%,98%)] text-slate-900 font-sans selection:bg-emerald-100">

      {/* --- CSS for custom animations --- */}
      <style>{`
        @keyframes ae-marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        @keyframes ae-pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: .6; } }
        @keyframes ae-wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        @keyframes ae-fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes ae-flow { 0% { stroke-dashoffset: 24; } 100% { stroke-dashoffset: 0; } }
        .ae-marquee { animation: ae-marquee 40s linear infinite; }
        .ae-pulse-slow { animation: ae-pulse-slow 4s cubic-bezier(0.4,0,0.6,1) infinite; }
        .ae-wiggle { animation: ae-wiggle 1s ease-in-out infinite; }
        .ae-fade-in-up { animation: ae-fade-in-up 0.6s ease-out forwards; }
        .ae-flow { animation: ae-flow 3s linear infinite; }
      `}</style>

      {/* 1. FLOATING NAV */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
        <div className="bg-white/80 backdrop-blur-md border border-[hsl(40,12%,89%)] rounded-full px-4 py-2 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-2 px-4">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-black text-sm">AE</div>
            <span className="font-extrabold hidden md:block">Agentic</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#v2-services" className="hover:text-emerald-600 transition-colors">{t.nav.services}</a>
            <a href="#v2-agents" className="hover:text-emerald-600 transition-colors">{t.nav.agents}</a>
            <a href="#v2-process" className="hover:text-emerald-600 transition-colors">{t.nav.process}</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'pl' : 'en')}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors flex items-center gap-1"
            >
              <Languages size={18} />
              <span className="text-xs font-bold uppercase">{lang}</span>
            </button>
            <Btn className="py-2 px-5 text-sm">{t.nav.audit}</Btn>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 ae-fade-in-up">
            <Badge className="bg-emerald-100 text-emerald-700">{t.hero.badge}</Badge>
            <h1 className="text-6xl md:text-7xl font-black leading-[1.1]">
              {t.hero.h1_1}<br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                {t.hero.h1_2}
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              {t.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Btn variant="primary" className="flex items-center justify-center gap-2">
                {t.hero.cta1} <ArrowRight size={20} />
              </Btn>
              <Btn variant="outline">{t.hero.cta2}</Btn>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[hsl(40,12%,89%)]">
              {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((stat, i) => (
                <div key={i}>
                  <p className="font-black text-2xl text-emerald-600">{stat.split(' / ')[0]}</p>
                  <p className="text-sm text-slate-500">{stat.split(' / ')[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ANIMATED APPROVAL FLOW */}
          <div className="hidden lg:block">
            <HeroApprovalAnimation />
          </div>
        </div>
      </section>

      {/* 3. LOGO MARQUEE */}
      <section className="py-20 bg-white border-y border-[hsl(40,12%,89%)] overflow-hidden">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-10">{t.marquee}</p>
        <div className="relative">
          <div className="flex ae-marquee whitespace-nowrap gap-8">
            {[1,2,3,4,5,6,1,2,3,4,5,6].map((i, idx) => (
              <div key={idx} className="flex-shrink-0 w-48 h-20 bg-[hsl(48,25%,97%)] border border-[hsl(40,12%,89%)] rounded-xl flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-black text-xl text-slate-300">BRAND {i}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </section>

      {/* 4. PROBLEM SECTION */}
      <section id="v2-services" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16">{t.problem.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[t.problem.p1, t.problem.p2, t.problem.p3].map((item, i) => (
            <Card key={i} className="p-8 hover:border-red-200 hover:shadow-xl group transition-all">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <XCircle className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.t}</h3>
              <p className="text-slate-600 leading-relaxed">{item.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. BEFORE & AFTER */}
      <section className="py-24 px-6 bg-emerald-50/30">
        <div className="max-w-5xl mx-auto space-y-8">
          <ComparisonRow title="Customer Support" saving="6.5h → 5 min" before="Human checks inbox every 20 mins. Typos, manual copy-paste." after="Agent resolves 80% of tickets in 15 seconds. Human only for VIPs." />
          <ComparisonRow title="Ad Management" saving="12h → 0 min" before="Manually pausing high-CPA ads. 8-hour delay on budget shifts." after="AI adjusts bids every 15 mins based on inventory & real ROAS." />
        </div>
      </section>

      {/* 6. CONTROL FRAMEWORK */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <ShieldCheck className="mx-auto text-emerald-500 mb-6" size={48} />
        <h2 className="text-4xl font-black mb-16">{t.control.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ControlCard color="bg-emerald-500" border="border-emerald-200" title={t.control.dispatch} active />
          <ControlCard color="bg-amber-400" border="border-amber-200" title={t.control.prep} />
          <ControlCard color="bg-red-400" border="border-red-200" title={t.control.yours} />
          <ControlCard color="bg-slate-300" border="border-slate-200" title={t.control.skip} />
        </div>
        <p className="mt-10 text-slate-500 italic max-w-2xl mx-auto">{t.control.note}</p>
      </section>

      {/* 8. AGENTS GRID */}
      <section id="v2-agents" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">The Deployment Suite</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AgentCard icon={<MessageSquare />} name="Customer Support" saves="40h/wk" desc="Automated ticket resolution & escalations." />
            <AgentCard icon={<LayoutDashboard />} name="Executive Briefing" saves="5h/wk" desc="Daily P&L summaries via Slack or Email." />
            <AgentCard icon={<Search />} name="Listing & Content" saves="15h/wk" desc="Auto-optimizes SEO & images based on trends." />
            <AgentCard icon={<BarChart3 />} name="Analytics Engine" saves="10h/wk" desc="Real-time attribution across all channels." />
            <AgentCard icon={<Bell />} name="Proactive Alerts" saves="∞ risk" desc="Detects stockouts & price drops instantly." />
            <AgentCard icon={<MessageSquare />} name="Review Intel" saves="8h/wk" desc="Responds to reviews and extracts feedback." />
            <AgentCard icon={<TrendingUp />} name="Ad Manager" saves="25h/wk" desc="Dynamic budget allocation & creative testing." />
            <AgentCard icon={<Package />} name="Inventory Intel" saves="12h/wk" desc="Predictive restocking & lead time tracking." />
            <AgentCard icon={<Mail />} name="Email Campaigns" saves="20h/wk" desc="Personalized flows generated for segments." />
          </div>
        </div>
      </section>

      {/* 12. PRICING */}
      <section id="v2-process" className="py-24 px-6 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-amber-400 text-amber-950 font-black py-3 px-8 rounded-full w-fit mx-auto mb-16 animate-bounce">
            {t.pricing.urgency}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard title={t.pricing.t1} price="€497" features={['Model-agnostic setup', '1 Core Agent', 'Audit Report', '30-day guarantee']} />
            <PricingCard title={t.pricing.t2} price="€1,500" popular features={['3 Core Agents', 'Human-in-the-loop setup', 'Slack Integration', 'Weekly Tuning']} />
            <PricingCard title={t.pricing.t3} price="Custom" features={['Full Agentic Workforce', 'On-Premise Deployment', 'Mobile Management', 'Dedicated Architect']} />
          </div>
        </div>
      </section>

      {/* 13. SALARY COMPARISON */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-center">{t.salary.title}</h2>
        <div className="border border-[hsl(40,12%,89%)] rounded-2xl overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-[hsl(40,12%,89%)]">
              <tr>
                <th className="p-6 font-bold">Role</th>
                <th className="p-6 font-bold">{t.salary.human}</th>
                <th className="p-6 font-bold">{t.salary.ai}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[hsl(40,12%,89%)]">
              <SalaryRow role={t.salary.support} human="€3,000" ai="Included" />
              <SalaryRow role={t.salary.ads} human="€4,000" ai="Included" />
              <SalaryRow role={t.salary.ea} human="€2,500" ai="Included" />
              <tr className="bg-emerald-50 font-black text-emerald-700 text-lg">
                <td className="p-6">{t.salary.total}</td>
                <td className="p-6 line-through text-red-500">€9,500/mo</td>
                <td className="p-6 text-2xl">€1,500/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[32px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <Cpu className="mx-auto mb-8 opacity-20" size={80} />
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            What Would You Do With 140 Extra Hours Per Month?
          </h2>
          <Btn className="bg-white !text-emerald-900 hover:bg-slate-100 text-xl px-12 py-6 !shadow-none">
            Schedule Your Free Audit Call
          </Btn>
          <p className="mt-8 text-emerald-100 font-medium">15 minutes. Zero pressure. Total clarity.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-[hsl(40,12%,89%)] text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2024 Agentic Engineering. AI that works as hard as you do.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-600">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function AgentNode({ icon, label, status, pos, delay }: { icon: React.ReactElement; label: string; status: string; pos: string; delay: string }) {
  return (
    <div className={`absolute ${pos} flex flex-col items-center gap-3 transition-all duration-700 ae-fade-in-up`} style={{ animationDelay: delay }}>
      <div className="relative">
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75" style={{ animationDelay: delay }}></div>
        <div className="w-14 h-14 bg-white border border-[hsl(40,12%,89%)] rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
          {React.cloneElement(icon, { size: 24 })}
        </div>
      </div>
      <div className="bg-white px-3 py-1 rounded-full border border-[hsl(40,12%,89%)] shadow-sm">
        <p className="text-[10px] font-black uppercase text-slate-400 text-center leading-tight">{label}</p>
        <p className="text-[9px] font-bold text-emerald-600 whitespace-nowrap">{status}</p>
      </div>
    </div>
  );
}

function ComparisonRow({ title, saving, before, after }: { title: string; saving: string; before: string; after: string }) {
  return (
    <div className="group space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-black text-lg flex items-center gap-2">
          <Play size={16} className="text-emerald-500" /> {title}
        </h4>
        <Badge className="bg-emerald-500 text-white">{saving}</Badge>
      </div>
      <div className="grid md:grid-cols-2 gap-4 relative">
        <div className="p-6 bg-red-50/50 border border-red-100 rounded-xl flex gap-4">
          <XCircle className="text-red-400 shrink-0" />
          <p className="text-sm text-slate-600">{before}</p>
        </div>
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-emerald-500 text-white rounded-full items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
          <ArrowRight size={16} />
        </div>
        <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl flex gap-4">
          <CheckCircle2 className="text-emerald-500 shrink-0" />
          <p className="text-sm text-slate-600">{after}</p>
        </div>
      </div>
    </div>
  );
}

function ControlCard({ title, color, border, active }: { title: string; color: string; border: string; active?: boolean }) {
  return (
    <div className={`p-6 border-2 rounded-2xl text-left bg-white transition-all ${active ? border + ' shadow-xl ring-4 ring-emerald-50' : 'border-[hsl(40,12%,89%)]'}`}>
      <div className={`w-3 h-3 rounded-full mb-4 ${color}`} />
      <p className="font-black leading-tight">{title}</p>
    </div>
  );
}

function AgentCard({ icon, name, saves, desc }: { icon: React.ReactElement; name: string; saves: string; desc: string }) {
  return (
    <Card className="p-8 hover:shadow-2xl group cursor-default">
      <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed">{desc}</p>
      <div className="pt-4 border-t border-[hsl(40,12%,89%)] flex justify-between items-center">
        <span className="text-[10px] font-black uppercase text-slate-400">Time Saved</span>
        <span className="text-emerald-600 font-black">{saves}</span>
      </div>
    </Card>
  );
}

function PricingCard({ title, price, features, popular }: { title: string; price: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`p-10 rounded-[32px] border-2 transition-all hover:scale-[1.02] relative ${popular ? 'bg-emerald-900 border-emerald-400 shadow-2xl shadow-emerald-900/50 scale-105 z-10' : 'bg-emerald-950 border-emerald-800'}`}>
      {popular && (
        <Badge className="bg-emerald-400 text-emerald-950 absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}
      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-black">{price}</span>
        {price !== "Custom" && <span className="opacity-60 text-sm">/mo</span>}
      </div>
      <ul className="space-y-4 mb-10">
        {features.map((f, i) => (
          <li key={i} className="flex gap-3 text-sm opacity-90">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            {f}
          </li>
        ))}
      </ul>
      <Btn className={`w-full ${popular ? '!bg-emerald-400 !text-emerald-950 !shadow-none' : ''}`}>Get Started</Btn>
    </div>
  );
}

function SalaryRow({ role, human, ai }: { role: string; human: string; ai: string }) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="p-6 font-bold">{role}</td>
      <td className="p-6 text-red-500 line-through opacity-50">{human}</td>
      <td className="p-6 text-emerald-600 font-bold">{ai}</td>
    </tr>
  );
}
