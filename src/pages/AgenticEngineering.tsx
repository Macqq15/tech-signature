import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TopControls } from "@/components/TopControls";
import HeroApprovalAnimation from "@/components/HeroApprovalAnimation";
import {
  ArrowRight,
  Headset,
  Newspaper,
  FileText,
  BarChart3,
  Bell,
  Handshake,
  Megaphone,
  Calendar,
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
  X,
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

const agentIcons = [Headset, Newspaper, FileText, BarChart3, Bell, Handshake, Megaphone, Calendar, Mail];
const tierIcons = [Brain, Bot, Server, Rocket];
const forWhoIcons = [Building2, Rocket, ShoppingCart];

// Google Calendar Appointment Schedule — free Discovery Call (public URL)
const BOOKING_URL = "https://calendar.app.google/fFWpKufRhdUsmRkp6";

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
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);
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

      {/* ═══════════════ BEFORE & AFTER ═══════════════ */}
      <section className="py-24 px-6 bg-emerald-50/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">{t.beforeAfter.title}</h2>
          <p className="text-center text-slate-500 mb-16">{t.beforeAfter.subtitle}</p>
          <div className="space-y-8">
            {t.beforeAfter.items.map((item, i) => (
              <div key={i} className="group space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-lg flex items-center gap-2">
                    <Play size={16} className="text-emerald-500" /> {item.area}
                  </h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 relative">
                  <div className="p-6 bg-red-50/50 border border-red-100 rounded-xl flex gap-4">
                    <XCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                    <p className="text-sm text-slate-600">{item.before}</p>
                  </div>
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-emerald-500 text-white rounded-full items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                    <ArrowRight size={16} />
                  </div>
                  <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl flex gap-4">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <p className="text-sm text-slate-600">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* ═══════════════ BUILT FOR ═══════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">{t.forWho.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.forWho.items.map((item, i) => {
              const Icon = forWhoIcons[i];
              return (
                <WCard key={i} className="p-8 hover:shadow-xl group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
                  <WBadge className="bg-emerald-100 text-emerald-700">{item.range}</WBadge>
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

      {/* ═══════════════ DAY WITH AI ═══════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">{t.dayWithAi.title}</h2>
          <p className="text-center text-slate-500 mb-16">{t.dayWithAi.subtitle}</p>
          <div className="space-y-0">
            {t.dayWithAi.timeline.map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className={cn(
                    "w-4 h-4 rounded-full shrink-0 mt-1 transition-all duration-300",
                    item.agent === "You" || item.agent === "Ty"
                      ? "bg-emerald-500 ring-4 ring-emerald-100"
                      : "bg-[hsl(40,12%,89%)] group-hover:bg-emerald-500"
                  )} />
                  {i < t.dayWithAi.timeline.length - 1 && (
                    <div className="w-[2px] h-full min-h-[40px] bg-gradient-to-b from-emerald-300 to-transparent" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono font-bold text-slate-400">{item.time}</span>
                    <span className="font-black text-sm text-emerald-600">{item.agent}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.task}</p>
                </div>
              </div>
            ))}
          </div>
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
          <div className="grid md:grid-cols-3 gap-6">
            {t.tiers.items.slice(1).map((tier, idx) => {
              const i = idx + 1; // real tier index (Tier 1 is excluded from main page)
              const Icon = tierIcons[i];
              const isPopular = i === 1; // Tier 2 = Most Popular
              return (
                <div key={i} className={cn(
                  "p-8 rounded-[28px] border-2 transition-all hover:scale-[1.02] relative",
                  isPopular ? "bg-emerald-900 border-emerald-400 shadow-2xl shadow-emerald-900/50 lg:scale-105 lg:z-10" : "bg-emerald-950 border-emerald-800"
                )}>
                  {isPopular && (
                    <WBadge className="bg-emerald-400 text-emerald-950 absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">{tier.badge}</WBadge>
                  )}
                  {!isPopular && (
                    <WBadge className="bg-emerald-800 text-emerald-300 mb-4 inline-block">{tier.badge}</WBadge>
                  )}
                  <div className="flex items-center gap-3 mb-2 mt-2">
                    <Icon className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{tier.name}</span>
                  </div>
                  <h3 className="text-xl font-black mb-2 leading-tight">{tier.title}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-2xl font-black leading-tight">{tier.price}</span>
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

          {/* LIGHT entry path — soft mention of $14.95 LTO funnel (subpage) */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-emerald-300/80 text-sm leading-relaxed">
              Not ready for Tier 2 yet?{" "}
              <a href="/agency-starter-lto" className="text-emerald-400 font-semibold underline hover:text-emerald-300 transition-colors">
                Start with AI Board at $14.95
              </a>{" "}
              — self-serve thinking partner, 5 AI executives, 5 minutes from purchase to first answer. No subscription, no commitment.
            </p>
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
      <footer className="py-12 px-6 pb-24 md:pb-12 border-t border-[hsl(40,12%,89%)] text-slate-500 text-sm bg-[hsl(50,33%,96%)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md flex items-center justify-center text-white font-black text-[10px]">AE</div>
            <span className="font-bold text-slate-700">{t.footer.copy}</span>
          </div>
          <p className="text-slate-400 font-light tracking-wide">{t.footer.tagline}</p>
          <div className="flex items-center gap-8">
            <button onClick={() => setLegalModal("privacy")} className="hover:text-emerald-600 transition-colors">Privacy Policy</button>
            <button onClick={() => setLegalModal("terms")} className="hover:text-emerald-600 transition-colors">Terms of Service</button>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[hsl(40,12%,85%)]">
          <div className="space-y-4 text-[11px] text-slate-400/80 leading-relaxed">
            <p>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
            <p>RESULTS DISCLAIMER: The results, time savings, and case studies presented on this website represent outcomes achieved in specific contexts. These results are not typical, and individual results will vary significantly based on numerous factors including but not limited to: your existing operations, team size, market conditions, data quality, and many other variables outside our control. We make no guarantee that you will achieve similar results.</p>
            <p>EARNINGS DISCLAIMER: Any cost savings or revenue figures mentioned are provided for illustrative purposes only and should not be construed as a guarantee or promise of savings. There is no assurance that you will save any specific amount of money or time using the services provided by Agentic Engineering.</p>
            <p>TRADEMARK DISCLAIMER: All trademarks, service marks, trade names, product names, and logos appearing on this site are the property of their respective owners. Amazon, Shopify, Allegro, Claude, ChatGPT, and other referenced brands are trademarks of their respective companies.</p>
            <p className="pt-4 text-center text-slate-400">&copy; {new Date().getFullYear()} Agentic Engineering by Maciej Marek. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ═══════════════ LEGAL MODALS ═══════════════ */}
      {legalModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setLegalModal(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-[hsl(40,12%,89%)] px-8 py-5 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-xl font-black">{legalModal === "privacy" ? "Privacy Policy" : "Terms of Service"}</h2>
              <button onClick={() => setLegalModal(null)} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="px-8 py-8 prose prose-sm prose-slate max-w-none">
              {legalModal === "privacy" ? <PrivacyContent /> : <TermsContent />}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-md border-t border-[hsl(40,12%,89%)] px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-bold text-slate-700 truncate">{t.nav.cta}</span>
        <WBtn className="py-2 px-5 text-sm shrink-0" onClick={() => window.open(BOOKING_URL, "_blank")}>
          {t.nav.cta} <ArrowRight className="inline ml-1 w-4 h-4" />
        </WBtn>
      </div>
    </div>
  );
};

function PrivacyContent() {
  return (
    <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
      <p className="text-slate-400 text-xs">Last updated: March 2026</p>

      <p>This Privacy Policy applies to maciejmarek.com and all services provided under the Agentic Engineering brand ("we", "us", "our") and governs the collection, use, and protection of personal data in relation to our website and services.</p>
      <p>We are committed to protecting your privacy and handling your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable data protection laws.</p>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <p className="font-bold text-slate-800 mb-2">Data Controller Details:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Name: Maciej Marek / Agentic Engineering</li>
          <li>Email: hello@maciejmarek.com</li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-slate-800">1. Information We Collect</h3>
      <h4 className="font-bold text-slate-700">1.1 Information You Provide to Us</h4>
      <p>We collect and process the following personal data when you use our services:</p>
      <p className="font-bold text-slate-700">Contact Information:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Name and email address</li>
        <li>Business name and trading details</li>
        <li>Telephone number</li>
        <li>Job title and role</li>
      </ul>
      <p className="font-bold text-slate-700">Business Information:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Marketplace account access details (where authorised)</li>
        <li>API credentials and integration configurations</li>
        <li>Business process documentation shared during onboarding</li>
      </ul>
      <p className="font-bold text-slate-700">Commercial Information:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Sales data and performance metrics</li>
        <li>Product information and inventory data</li>
        <li>Advertising spend and campaign performance</li>
        <li>Customer reviews and feedback data</li>
      </ul>
      <p className="font-bold text-slate-700">Communication Data:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Correspondence via email, phone, or video conferencing</li>
        <li>Support tickets and queries</li>
        <li>Meeting notes and call recordings (where consent is provided)</li>
      </ul>

      <h4 className="font-bold text-slate-700">1.2 Information We Collect Automatically</h4>
      <p className="font-bold text-slate-700">Website Usage Data:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Browser type and version</li>
        <li>Pages visited and time spent</li>
        <li>Referring website addresses</li>
        <li>Device information</li>
      </ul>

      <h3 className="text-lg font-bold text-slate-800">2. How We Use Your Information</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>To provide, maintain, and improve our AI agent services</li>
        <li>To configure, deploy, and maintain AI agents on your behalf</li>
        <li>To communicate with you about your account and services</li>
        <li>To send you updates about service changes and new features</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h3 className="text-lg font-bold text-slate-800">3. Data Sharing</h3>
      <p>We do not sell your personal data. We may share data with:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Cloud hosting providers (for Tier 2 services) within the EU/EEA</li>
        <li>AI model providers (Anthropic, OpenAI) as necessary for agent operations — subject to their data processing agreements</li>
        <li>Payment processors for billing purposes</li>
      </ul>
      <p>For Tier 3 (On-Premise) clients: your data never leaves your infrastructure. AI models run locally on your hardware.</p>

      <h3 className="text-lg font-bold text-slate-800">4. Data Retention</h3>
      <p>We retain your data for the duration of our business relationship plus 12 months, or as required by law. You may request deletion at any time.</p>

      <h3 className="text-lg font-bold text-slate-800">5. Your Rights</h3>
      <p>Under GDPR, you have the right to:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Access your personal data</li>
        <li>Rectify inaccurate data</li>
        <li>Request erasure of your data</li>
        <li>Restrict processing</li>
        <li>Data portability</li>
        <li>Object to processing</li>
      </ul>
      <p>To exercise any of these rights, contact us at hello@maciejmarek.com.</p>

      <h3 className="text-lg font-bold text-slate-800">6. Cookies</h3>
      <p>We use essential cookies for website functionality. We do not use advertising or tracking cookies. Analytics cookies are used only with your consent.</p>

      <h3 className="text-lg font-bold text-slate-800">7. Changes to This Policy</h3>
      <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our website.</p>

      <h3 className="text-lg font-bold text-slate-800">8. Contact</h3>
      <p>For questions about this Privacy Policy, contact us at hello@maciejmarek.com.</p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
      <p className="text-slate-400 text-xs">Last updated: March 2026</p>

      <p>These Terms of Service ("Terms") govern your use of the services provided by Maciej Marek, operating as Agentic Engineering ("we", "us", "our"). By engaging our services, you agree to these Terms. If you do not agree to these Terms, you must not use our services.</p>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <p className="font-bold text-slate-800 mb-2">Service Provider:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Name: Maciej Marek / Agentic Engineering</li>
          <li>Email: hello@maciejmarek.com</li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-slate-800">1. Services</h3>
      <p>Agentic Engineering provides AI agent development, deployment, and maintenance services across three tiers:</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Tier 1 (AI Playbook):</strong> Pre-configured AI assistants delivered as files, with onboarding and training.</li>
        <li><strong>Tier 2 (AI Chief of Staff):</strong> Autonomous AI agents deployed in the cloud, with integrations, monitoring, and ongoing maintenance.</li>
        <li><strong>Tier 3 (AI On-Premise):</strong> Tier 2 deployed on client hardware, with hardware consulting and local model configuration.</li>
      </ul>

      <h3 className="text-lg font-bold text-slate-800">2. Engagement Process</h3>
      <p>All engagements begin with a free AI Audit call. Paid services commence only after mutual agreement through a formal proposal or service agreement. The Operations Deep-Dive fee is credited toward any subsequent setup.</p>

      <h3 className="text-lg font-bold text-slate-800">3. Payment Terms</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Tier 1: One-time payment due upon delivery.</li>
        <li>Tier 2: Setup fee due at project start. Monthly maintenance billed in advance.</li>
        <li>Tier 3: Setup fee due at project start. Monthly maintenance and quarterly re-evaluations billed in advance.</li>
        <li>All prices are exclusive of VAT where applicable.</li>
      </ul>

      <h3 className="text-lg font-bold text-slate-800">4. Guarantees & Refunds</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Tier 1 includes a 30-day money-back guarantee if you don't see value.</li>
        <li>Tier 2 includes a 30-day supervised launch period.</li>
        <li>Refund requests must be made in writing within the guarantee period.</li>
      </ul>

      <h3 className="text-lg font-bold text-slate-800">5. Intellectual Property</h3>
      <p>Upon full payment, clients own all custom configurations, agent setups, and data files created specifically for their business. We retain the right to use general methodologies, frameworks, and non-client-specific tools in other engagements.</p>

      <h3 className="text-lg font-bold text-slate-800">6. Data & Confidentiality</h3>
      <p>We treat all client data as confidential. We do not share, sell, or use client data for purposes other than delivering the agreed services. Our Privacy Policy provides detailed information about our data practices.</p>

      <h3 className="text-lg font-bold text-slate-800">7. Limitation of Liability</h3>
      <p>To the maximum extent permitted by law, our total liability for any claim arising from or related to our services shall not exceed the total fees paid by you in the 3 months preceding the claim. We do not guarantee specific results or performance outcomes.</p>

      <h3 className="text-lg font-bold text-slate-800">8. AI & Automation Disclaimer</h3>
      <p>AI agents operate within defined boundaries set during configuration. While we design agents to be reliable and accurate, AI systems may occasionally produce unexpected outputs. Human oversight is recommended for critical business decisions. We are not liable for actions taken by AI agents that fall within their configured operational parameters.</p>

      <h3 className="text-lg font-bold text-slate-800">9. Termination</h3>
      <p>Either party may terminate ongoing services with 30 days' written notice. Upon termination, we will provide all client data, configurations, and access credentials. Monthly fees are non-refundable for the current billing period.</p>

      <h3 className="text-lg font-bold text-slate-800">10. Governing Law</h3>
      <p>These Terms are governed by and construed in accordance with the laws of Poland. The parties submit to the jurisdiction of the courts of Poland for any disputes.</p>

      <h3 className="text-lg font-bold text-slate-800">11. Entire Agreement</h3>
      <p>These Terms, together with any Service Agreement and our Privacy Policy, constitute the entire agreement. Individual service agreements may contain additional or superseding terms specific to the engagement.</p>

      <h3 className="text-lg font-bold text-slate-800">12. Contact</h3>
      <p>For questions about these Terms, contact us at hello@maciejmarek.com.</p>
    </div>
  );
}

export default AgenticEngineering;
