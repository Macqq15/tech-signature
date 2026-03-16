import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TopControls } from "@/components/TopControls";
import HeroApprovalAnimation from "@/components/HeroApprovalAnimation";
import {
  ArrowRight,
  Headset,
  Newspaper,
  PenLine,
  BarChart3,
  Bell,
  Star,
  Megaphone,
  Package,
  Mail,
  Bot,
  Server,
  Brain,
  Rocket,
  Building2,
  ShoppingCart,
  Zap,
  Users,
  Eye,
  CheckCircle2,
  ArrowUpRight,
  Cpu,
  TrendingUp,
  Shield,
  ChevronDown,
  AlertTriangle,
  Clock,
  Check,
  Play,
  XCircle,
  Linkedin,
} from "lucide-react";
import { aeTranslations, Language } from "@/lib/ae-translations";
import { cn } from "@/lib/utils";

import trebitLogo from "@/assets/trebit.webp";
import monumoLogo from "@/assets/monumo logo.svg";
import cameronLogo from "@/assets/Cameron_hair_logo_sklep(3).svg";
import jewelryLabLogo from "@/assets/JewelryLab logo.webp";
import founderPhoto from "@/assets/founder-photo.jpg";

const brandLogos = [
  { name: "Trebit", src: trebitLogo, h: "h-7" },
  { name: "JewelryLab", src: jewelryLabLogo, h: "h-7" },
  { name: "Monumo", src: monumoLogo, h: "h-6", invert: true },
  { name: "Cameron Hair", src: cameronLogo, h: "h-7", invert: true },
];

const agentIcons = [Headset, Newspaper, PenLine, BarChart3, Bell, Star, Megaphone, Package, Mail];
const tierIcons = [Brain, Bot, Server];
const forWhoIcons = [ShoppingCart, Building2, Rocket];

// TODO: Replace with your Google Calendar appointment scheduling URL
const BOOKING_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0";

const controlColors: Record<string, string> = {
  green: "bg-emerald-500",
  yellow: "bg-amber-400",
  red: "bg-red-400",
  gray: "bg-slate-300",
};

// --- Warm UI primitives (V2 style) ---

const WBadge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${className}`}>
    {children}
  </span>
);

const WCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[hsl(48,25%,97%)] border border-[hsl(40,12%,89%)] rounded-2xl transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const WBtn = ({ children, variant = "primary", className = "", onClick }: { children: React.ReactNode; variant?: "primary" | "outline"; className?: string; onClick?: () => void }) => {
  const styles = variant === "primary"
    ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-200"
    : "border-2 border-[hsl(40,12%,89%)] hover:border-emerald-500 bg-transparent";
  return (
    <button onClick={onClick} className={`px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 ${styles} ${className}`}>
      {children}
    </button>
  );
};

const AgenticEngineering = () => {
  const [lang, setLang] = useState<Language>("en");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = aeTranslations[lang];
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[hsl(50,33%,98%)] text-slate-900 font-sans selection:bg-emerald-100 overflow-x-hidden">
      <TopControls lang={lang} setLang={setLang} hideTheme />

      {/* Inline animations */}
      <style>{`
        @keyframes ae-marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        @keyframes ae-fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .ae-marquee { animation: ae-marquee 40s linear infinite; }
        .ae-fade-in-up { animation: ae-fade-in-up 0.6s ease-out forwards; }
      `}</style>

      {/* FLOATING NAV */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden md:block w-[95%] max-w-4xl">
        <div className="bg-white/80 backdrop-blur-md border border-[hsl(40,12%,89%)] rounded-full px-4 py-2 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-2 px-4">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-black text-sm">AE</div>
            <span className="font-extrabold">Agentic</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            <button onClick={() => scrollTo("tiers")} className="hover:text-emerald-600 transition-colors">{t.nav.services}</button>
            <button onClick={() => scrollTo("agents")} className="hover:text-emerald-600 transition-colors">{t.nav.agents}</button>
            <button onClick={() => scrollTo("proof")} className="hover:text-emerald-600 transition-colors">{t.nav.proof}</button>
            <button onClick={() => scrollTo("process")} className="hover:text-emerald-600 transition-colors">{t.nav.process}</button>
          </div>
          <WBtn className="py-2 px-5 text-sm" onClick={() => window.open(BOOKING_URL, "_blank")}>{t.nav.cta}</WBtn>
        </div>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 ae-fade-in-up">
            <WBadge className="bg-emerald-100 text-emerald-700">{t.hero.badge}</WBadge>
            <h1 className="text-6xl md:text-7xl font-black leading-[1.1]">
              {t.hero.titleLine1}<br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                {t.hero.titleLine2}
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">{t.hero.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WBtn variant="primary" className="flex items-center justify-center gap-2" onClick={() => window.open(BOOKING_URL, "_blank")}>
                {t.hero.ctaSecondary} <ArrowRight size={20} />
              </WBtn>
              <WBtn variant="outline" onClick={() => scrollTo("tiers")}>{t.hero.ctaPrimary}</WBtn>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[hsl(40,12%,89%)]">
              {[
                { val: t.hero.stat1, label: t.hero.stat1label },
                { val: t.hero.stat2, label: t.hero.stat2label },
                { val: t.hero.stat3, label: t.hero.stat3label },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-black text-2xl text-emerald-600">{s.val}</p>
                  <p className="text-sm text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroApprovalAnimation />
          </div>
        </div>
      </section>

      {/* ═══════════════ CREDIBILITY BAR ═══════════════ */}
      <section className="py-20 bg-white border-y border-[hsl(40,12%,89%)] overflow-hidden">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-10">{t.credibility.title}</p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex ae-marquee whitespace-nowrap gap-8">
            {[...brandLogos, ...brandLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-48 h-20 bg-[hsl(48,25%,97%)] border border-[hsl(40,12%,89%)] rounded-xl flex items-center justify-center px-6 group hover:border-emerald-500/30 transition-all">
                <img src={logo.src} alt={logo.name} className={cn("max-w-full object-contain opacity-50 group-hover:opacity-100 transition-opacity", logo.h, logo.invert && "dark:invert")} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROBLEM ═══════════════ */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-4">{t.problem.title}</h2>
        <p className="text-center text-slate-500 text-lg mb-16">{t.problem.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {t.problem.cards.map((card, i) => {
            const icons = [Zap, Users, Eye];
            const Icon = icons[i];
            return (
              <WCard key={i} className="p-8 hover:border-red-200 hover:shadow-xl group">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-red-500 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </WCard>
            );
          })}
        </div>
      </section>

      {/* ═══════════════ CONTROL FRAMEWORK ═══════════════ */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <Shield className="mx-auto text-emerald-500 mb-6" size={48} />
        <h2 className="text-4xl font-black mb-4">{t.control.title}</h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-16">{t.control.subtitle}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {t.control.framework.map((item, i) => (
            <div key={i} className={cn(
              "p-6 border-2 rounded-2xl text-left bg-white transition-all",
              i === 0 ? "border-emerald-200 shadow-xl ring-4 ring-emerald-50" : "border-[hsl(40,12%,89%)]"
            )}>
              <div className={cn("w-3 h-3 rounded-full mb-4", controlColors[item.color])} />
              <p className="font-black leading-tight mb-2">{item.level} — {item.label}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-slate-500 italic max-w-2xl mx-auto">{t.control.footnote}</p>
      </section>

      {/* ═══════════════ PROOF ═══════════════ */}
      <section id="proof" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">{t.proof.title}</h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16">{t.proof.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.proof.items.map((item, i) => (
              <WCard key={i} className="overflow-hidden hover:shadow-xl group">
                <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                <div className="p-8">
                  <WBadge className="bg-emerald-100 text-emerald-700 mb-4 inline-block">{item.tag}</WBadge>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                  <div className="text-3xl font-extrabold text-emerald-600 mb-4">{item.result}</div>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </WCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FOUNDER ═══════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
            <div className="flex flex-col items-center gap-4">
              <img
                src={founderPhoto}
                alt={t.founder.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-emerald-100 shadow-xl"
              />
              <div className="text-center">
                <p className="font-black text-lg">{t.founder.name}</p>
                <p className="text-sm text-emerald-600 font-semibold">{t.founder.role}</p>
              </div>
              <a
                href={t.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-black">{t.founder.title}</h2>
              <p className="text-slate-600 leading-relaxed">{t.founder.bio}</p>
              <p className="text-emerald-700 font-semibold leading-relaxed">{t.founder.cta}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 9 AGENTS ═══════════════ */}
      <section id="agents" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">{t.agents.title}</h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-4">{t.agents.subtitle}</p>
          <WBadge className="bg-emerald-100 text-emerald-700 mb-12 inline-block">{t.agents.available}</WBadge>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.agents.items.map((agent, i) => {
              const Icon = agentIcons[i];
              return (
                <WCard key={i} className="p-8 hover:shadow-2xl group cursor-default">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{agent.desc}</p>
                  <div className="pt-4 border-t border-[hsl(40,12%,89%)] flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-slate-400">Impact</span>
                    <span className="text-emerald-600 font-black text-sm">{agent.saves}</span>
                  </div>
                </WCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section id="process" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">{t.process.title}</h2>
          <p className="text-center text-slate-500 mb-16">{t.process.subtitle}</p>
          {t.process.steps.map((step, i) => (
            <div key={i} className="relative flex gap-8 group">
              {i < t.process.steps.length - 1 && (
                <div className="absolute left-[27px] top-[56px] w-[2px] h-[calc(100%-28px)] bg-gradient-to-b from-emerald-300 to-transparent" />
              )}
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-emerald-200 flex items-center justify-center text-xl font-black text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300 bg-white">
                {step.number}
              </div>
              <div className="pb-12">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <WBadge className="bg-slate-100 text-slate-600 text-[10px] font-mono">{step.tag}</WBadge>
                </div>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ TIERS ═══════════════ */}
      <section id="tiers" className="py-24 px-6 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">{t.tiers.title}</h2>
          <p className="text-center text-emerald-200 max-w-2xl mx-auto mb-8">{t.tiers.subtitle}</p>
          <div className="bg-amber-400 text-amber-950 font-black py-3 px-8 rounded-full w-fit mx-auto mb-16 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {t.tiers.urgency}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.tiers.items.map((tier, i) => {
              const Icon = tierIcons[i];
              const isPopular = i === 1;
              return (
                <div key={i} className={cn(
                  "p-10 rounded-[32px] border-2 transition-all hover:scale-[1.02] relative",
                  isPopular ? "bg-emerald-900 border-emerald-400 shadow-2xl shadow-emerald-900/50 scale-105 z-10" : "bg-emerald-950 border-emerald-800"
                )}>
                  {isPopular && (
                    <WBadge className="bg-emerald-400 text-emerald-950 absolute -top-3 left-1/2 -translate-x-1/2">{tier.badge}</WBadge>
                  )}
                  {!isPopular && (
                    <WBadge className="bg-emerald-800 text-emerald-300 mb-4 inline-block">{tier.badge}</WBadge>
                  )}
                  <div className="flex items-center gap-3 mb-2 mt-2">
                    <Icon className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{tier.name}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">{tier.title}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-black">{tier.price}</span>
                  </div>
                  <p className="text-sm text-emerald-100/70 mb-6 leading-relaxed">{tier.desc}</p>
                  {tier.value && (
                    <div className="mb-4 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {tier.value}
                      </div>
                    </div>
                  )}
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((f, k) => (
                      <li key={k} className="flex gap-3 text-sm opacity-90">
                        <CheckCircle2 className="text-emerald-400 shrink-0 w-4 h-4 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {tier.limitation && (
                    <p className="text-[11px] text-emerald-100/50 italic mb-4">{tier.limitation}</p>
                  )}
                  {tier.guarantee && (
                    <p className="text-[11px] text-emerald-400 font-semibold">{tier.guarantee}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Comparison table (merged) */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-black text-center mb-2 text-white">{t.comparison.title}</h3>
            <p className="text-center text-emerald-200 text-sm mb-8">{t.comparison.subtitle}</p>
            <div className="border border-emerald-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-emerald-900 border-b border-emerald-800">
                  <tr>
                    <th className="p-4 font-bold text-emerald-200 text-sm">{t.comparison.colRole}</th>
                    <th className="p-4 font-bold text-emerald-200 text-sm">{t.comparison.colCost}</th>
                    <th className="p-4 font-bold text-emerald-200 text-sm hidden sm:table-cell">{t.comparison.colHours}</th>
                    <th className="p-4 font-bold text-emerald-400 text-sm">{t.comparison.colAi}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-800">
                  {t.comparison.items.map((item, i) => (
                    <tr key={i} className="hover:bg-emerald-900/50 transition-colors">
                      <td className="p-4 font-bold text-white text-sm">{item.role}</td>
                      <td className="p-4 text-red-400 line-through opacity-60 font-mono text-sm">{item.cost}</td>
                      <td className="p-4 text-emerald-300/50 text-sm hidden sm:table-cell">{item.hours}</td>
                      <td className="p-4 text-emerald-400 font-bold text-sm">{item.ai}</td>
                    </tr>
                  ))}
                  <tr className="bg-emerald-500/20 font-black text-emerald-300">
                    <td className="p-4" colSpan={2}>{t.comparison.total}</td>
                    <td className="p-4 hidden sm:table-cell" colSpan={2}></td>
                  </tr>
                </tbody>
              </table>
              <div className="px-4 py-3 bg-emerald-900/50 text-center">
                <p className="text-xs text-emerald-300/60">{t.comparison.footnote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">{t.faq.title}</h2>
          <div className="space-y-3">
            {t.faq.items.map((item, i) => (
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

      {/* ═══════════════ CTA ═══════════════ */}
      <section id="cta" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[32px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <Cpu className="mx-auto mb-8 opacity-20" size={80} />
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">{t.cta.title}</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8 leading-relaxed text-lg">{t.cta.desc}</p>
          <WBtn className="bg-white !text-emerald-900 hover:bg-slate-100 text-xl px-12 py-6 !shadow-none" onClick={() => window.open(BOOKING_URL, "_blank")}>
            {t.cta.button} <ArrowUpRight className="inline ml-2 w-5 h-5" />
          </WBtn>
          <p className="text-sm text-emerald-200 mt-6 font-medium">{t.cta.guarantee}</p>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-12 px-6 border-t border-[hsl(40,12%,89%)] text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {t.footer.copy}</p>
          <p className="text-xs">{t.footer.tagline}</p>
        </div>
      </footer>
    </div>
  );
};

export default AgenticEngineering;
