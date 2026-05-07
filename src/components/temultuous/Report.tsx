import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  Globe2,
  Lightbulb,
  Calendar,
  ArrowRight,
  Star,
  ShieldCheck,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ReadProgressBar from "./ReadProgressBar";
import CalendlyEmbed from "./CalendlyEmbed";
import { MONTHLY_METHODOLOGY } from "@/lib/temultuous/tier-mapping";
import type { Report as ReportData, FormSubmission } from "@/lib/temultuous/types";

interface Props {
  submission: FormSubmission;
  data: ReportData;
  onMilestone?: (pct: 25 | 50 | 75 | 100) => void;
  onCalendlyOpen?: () => void;
}

const TIER_VISUALS: Record<string, { gradient: string; icon: typeof Flame }> = {
  RED: { gradient: "from-red-500 via-orange-500 to-primary", icon: Flame },
  AMBER: { gradient: "from-amber-500 via-orange-500 to-primary", icon: TrendingUp },
  BLUE: { gradient: "from-blue-500 via-sky-500 to-primary", icon: Sparkles },
  GREEN: { gradient: "from-emerald-500 via-teal-500 to-primary", icon: ShieldCheck },
  UNKNOWN: { gradient: "from-slate-400 via-orange-400 to-primary", icon: Lightbulb },
};

const cascadeContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const cascadeChild = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const fmtGbp = (n: number) => `£${n.toFixed(n < 100 ? 2 : 0)}`;

export default function Report({ submission, data, onMilestone, onCalendlyOpen }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tierVisual = TIER_VISUALS[data.tier] ?? TIER_VISUALS.UNKNOWN;
  const TierIcon = tierVisual.icon;

  return (
    <div ref={wrapRef} className="min-h-[100svh] bg-background text-foreground">
      <ReadProgressBar scopeRef={wrapRef} onMilestone={onMilestone} />

      <motion.div
        variants={cascadeContainer}
        initial="hidden"
        animate="show"
        className="container max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-10 md:space-y-14"
      >
        {/* SECTION 1 — Tier reveal */}
        <motion.section variants={cascadeChild}>
          <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${tierVisual.gradient} p-8 md:p-12 text-white shadow-2xl shadow-primary/30`}>
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-bold uppercase tracking-wider mb-4">
                Your category · {submission.productType}
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur grid place-items-center">
                  <TierIcon className="w-8 h-8" />
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
                  {data.tierName}
                </h1>
              </div>
              <p className="text-white/95 text-lg md:text-xl leading-relaxed max-w-2xl">
                {data.tierAdvantage}
              </p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2 — Category snapshot */}
        <motion.section variants={cascadeChild}>
          <SectionHeader icon={TrendingUp} kicker="Live data · Temu UK" title="What's selling right now in your category" />
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <Stat label="Active listings" value={data.category.listingCount.toString()} />
            <Stat label="Price range (GBP)" value={`${fmtGbp(data.category.priceRange.min)}–${fmtGbp(data.category.priceRange.max)}`} />
            <Stat label="Unique sellers (top 20)" value={data.category.uniqueSellers.toString()} />
          </div>

          <div className="bg-card border border-border rounded-2xl divide-y divide-border overflow-hidden">
            {data.topProducts.slice(0, 5).map((p, i) => (
              <div key={p.goodsId} className="p-4 flex gap-4 items-start hover:bg-[hsl(var(--accent))] transition-colors">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary grid place-items-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {p.isBestSeller && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 fill-current" /> Best-Seller
                      </span>
                    )}
                    {p.isUkLocal && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                        <ShieldCheck className="w-3 h-3" /> UK 2-day
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium leading-snug line-clamp-2">{p.title}</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span><strong className="text-foreground">{fmtGbp(p.priceGbp)}</strong>{p.marketPriceGbp ? ` (was ${fmtGbp(p.marketPriceGbp)})` : ""}</span>
                    {p.rating !== null && <span>★ {p.rating.toFixed(1)}</span>}
                    <span>{p.salesNum} sold</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 3 — Monthly estimate */}
        <motion.section variants={cascadeChild}>
          <SectionHeader icon={Sparkles} kicker="Estimated demand" title="What top sellers are doing per month" />
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap items-baseline gap-3 mb-4">
              <span className="text-4xl md:text-5xl font-extrabold text-primary">
                {data.monthlyEstimate.rangeLow.toLocaleString()}–{data.monthlyEstimate.rangeHigh.toLocaleString()}
              </span>
              <span className="text-lg font-semibold text-muted-foreground">units/month</span>
              <span className="ml-auto inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">
                Bracket: {data.monthlyEstimate.bracket}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {MONTHLY_METHODOLOGY}
            </p>
          </div>
        </motion.section>

        {/* SECTION 4 — UK seller density */}
        <motion.section variants={cascadeChild}>
          <SectionHeader icon={Globe2} kicker="Where's the gap" title="UK sellers vs everyone else" />
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2 text-sm">
              <span className="font-bold">{data.ukDensity.ukSellers} UK</span>
              <span className="text-muted-foreground">vs</span>
              <span className="font-bold">{data.ukDensity.cnSellers} non-UK</span>
              <span className="ml-auto text-xs text-muted-foreground">in top 20 listings</span>
            </div>
            <div className="h-3 w-full rounded-full bg-[hsl(var(--muted))] overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: `${data.ukDensity.ukSharePct}%` }} />
            </div>
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
              {data.ukDensity.ukSharePct < 25
                ? `Only ${data.ukDensity.ukSharePct}% of top sellers are UK-based. The other ${100 - data.ukDensity.ukSharePct}% come from China — and that's your gap. Temu literally promised the UK government 50% would be UK by end of 2025. They're not there. Especially not in your category.`
                : `Around ${data.ukDensity.ukSharePct}% of top sellers ship from UK warehouses. Still under-represented vs Temu's 50% commitment, but the smart money is moving.`}
            </p>
          </div>
        </motion.section>

        {/* SECTION 5 — Opportunity hooks */}
        <motion.section variants={cascadeChild}>
          <SectionHeader icon={Lightbulb} kicker="Why this is yours to take" title="Three reasons you're sitting on a goldmine" />
          <div className="grid gap-4">
            {data.hooks.map((hook, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-2xl">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-base leading-relaxed">{hook}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 6 — Offer + Calendly */}
        <motion.section variants={cascadeChild}>
          <div className="rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-[hsl(var(--accent))] to-background p-8 md:p-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3 h-3" /> The offer
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              We'll get you on Temu. <span className="text-primary">Properly free.</span>
            </h2>
            <ul className="space-y-3 mb-6 text-base md:text-lg">
              <li className="flex gap-3">
                <Check /> <span>Temu seller account set up. VAT, EPR, the lot.</span>
              </li>
              <li className="flex gap-3">
                <Check /> <span>Your first listings written, photographed, optimised.</span>
              </li>
              <li className="flex gap-3">
                <Check /> <span>Live and selling within 2 weeks.</span>
              </li>
            </ul>
            <div className="bg-card border border-primary/30 rounded-2xl p-5 mb-6">
              <p className="text-base md:text-lg font-bold mb-1">You pay us nothing until you've made £5,000 in Temu sales.</p>
              <p className="text-sm text-muted-foreground">After that, we take over management on a percentage. Or you keep doing it yourself. Up to you. We're aligned because we only make money if you do.</p>
            </div>

            <CalendlyEmbed onOpen={onCalendlyOpen} />

            <p className="mt-6 text-xs text-muted-foreground">
              Report generated for {submission.businessName} · {new Date(data.generatedAt).toLocaleString("en-GB")}
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

// --- Tiny helpers ---

function SectionHeader({ icon: Icon, kicker, title }: { icon: typeof TrendingUp; kicker: string; title: string }) {
  return (
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] text-xs font-bold uppercase tracking-wider mb-3">
        <Icon className="w-3 h-3" /> {kicker}
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">{title}</h2>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-extrabold text-foreground">{value}</p>
    </div>
  );
}

function Check() {
  return (
    <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground grid place-items-center mt-1">
      <ArrowRight className="w-3.5 h-3.5" />
    </span>
  );
}
