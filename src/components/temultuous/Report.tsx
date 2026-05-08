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
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ReadProgressBar from "./ReadProgressBar";
import CalendlyEmbed from "./CalendlyEmbed";
import HeatGauge from "./HeatGauge";
import { MONTHLY_METHODOLOGY, estimateMonthlyFromSales } from "@/lib/temultuous/tier-mapping";
import type { Report as ReportData, FormSubmission, ScrapedProduct } from "@/lib/temultuous/types";

// Per-product monthly revenue estimate (units × price). Returns GBP range.
// Reuses the same tier-mapping bracket logic that powers the category aggregate.
function estimateProductRevenue(p: ScrapedProduct): { unitsLow: number; unitsHigh: number; revLow: number; revHigh: number } {
  const u = estimateMonthlyFromSales(p.salesNum, p.isBestSeller);
  return {
    unitsLow: u.rangeLow,
    unitsHigh: u.rangeHigh,
    revLow: Math.round(u.rangeLow * p.priceGbp),
    revHigh: Math.round(u.rangeHigh * p.priceGbp),
  };
}

const fmtGbpShort = (n: number) => {
  if (n >= 1_000_000) return `£${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 10_000) return `£${Math.round(n / 1000)}K`;
  if (n >= 1000) return `£${(n / 1000).toFixed(1)}K`;
  return `£${Math.round(n)}`;
};

interface Props {
  submission: FormSubmission;
  data: ReportData;
  onMilestone?: (pct: 25 | 50 | 75 | 100) => void;
  onCalendlyOpen?: () => void;
}

// Tier visuals removed (2026-05-08) — Section 1 hero is now <HeatGauge>, which
// owns its own gradient/icon mapping based on heat label rather than tier.
// Internal `tier` value still drives the narrative copy via report-builder.

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
  const isCached = data.dataSource?.mode === "cached";
  const snapshotTime = data.dataSource?.snapshotAt
    ? new Date(data.dataSource.snapshotAt).toLocaleString("en-GB")
    : null;
  const dataKicker = isCached ? "Latest available scan · Temu UK" : "Live data · Temu UK";

  return (
    <div ref={wrapRef} className="min-h-[100svh] bg-background text-foreground">
      <ReadProgressBar scopeRef={wrapRef} onMilestone={onMilestone} />

      <motion.div
        variants={cascadeContainer}
        initial="hidden"
        animate="show"
        className="container max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-10 md:space-y-14"
      >
        {/* SECTION 1 — Heat Score (replaces tier banner). Score is the personalised
            opportunity number; mechanism narrative (LOCKED OUT / MARGIN MOAT /
            TRUST MOAT) sits underneath as the explanation, not the headline. */}
        <motion.section variants={cascadeChild}>
          <HeatGauge
            score={data.heatScore}
            label={data.heatLabel}
            category={submission.productType}
            narrative={data.tierAdvantage}
          />
        </motion.section>

        {/* SECTION 2 — Category snapshot */}
        <motion.section variants={cascadeChild}>
          <SectionHeader
            icon={TrendingUp}
            kicker={dataKicker}
            title={isCached ? "What was selling in the latest available scan" : "What's selling right now in your category"}
          />
          {isCached && snapshotTime && (
            <p className="text-sm text-muted-foreground mb-4">
              Live Temu access is temporarily unavailable, so this uses the last successful scan from {snapshotTime}.
            </p>
          )}
          {(() => {
            const top5 = data.topProducts.slice(0, 5);
            const top5Revenue = top5.map(estimateProductRevenue);
            const combinedLow = top5Revenue.reduce((sum, r) => sum + r.revLow, 0);
            const combinedHigh = top5Revenue.reduce((sum, r) => sum + r.revHigh, 0);

            return (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <Stat label="Active listings" value={data.category.listingCount.toString()} />
                  <Stat label="Price range (GBP)" value={`${fmtGbp(data.category.priceRange.min)}–${fmtGbp(data.category.priceRange.max)}`} />
                  <Stat label="Unique sellers" value={data.category.uniqueSellers.toString()} />
                  <Stat
                    label="Top 5 combined potential"
                    value={`${fmtGbpShort(combinedLow)}–${fmtGbpShort(combinedHigh)}/mo`}
                    accent
                  />
                </div>

                <div className="bg-card border border-border rounded-2xl divide-y divide-border overflow-hidden">
                  {top5.map((p, i) => {
                    const rev = top5Revenue[i];
                    return (
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
                          {p.link && p.link !== "#" ? (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-start gap-1.5 text-sm font-medium leading-snug hover:text-primary transition-colors"
                            >
                              <span className="line-clamp-2">{p.title}</span>
                              <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-50 group-hover:opacity-100" />
                            </a>
                          ) : (
                            <p className="text-sm font-medium leading-snug line-clamp-2">{p.title}</p>
                          )}
                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                            <span><strong className="text-foreground">{fmtGbp(p.priceGbp)}</strong>{p.marketPriceGbp ? ` (was ${fmtGbp(p.marketPriceGbp)})` : ""}</span>
                            {p.rating !== null && <span>★ {p.rating.toFixed(1)}</span>}
                            <span>{p.salesNum} sold</span>
                            <span className="text-primary font-semibold">≈ {fmtGbpShort(rev.revLow)}–{fmtGbpShort(rev.revHigh)}/mo</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })()}
        </motion.section>

        {/* SECTION 3 — Monthly estimate */}
        <motion.section variants={cascadeChild}>
          <SectionHeader icon={Sparkles} kicker="Estimated demand" title="What top sellers are doing per month" />
          {(() => {
            const top1 = data.topProducts[0];
            const anchorRevLow = top1 ? Math.round(data.monthlyEstimate.rangeLow * top1.priceGbp) : 0;
            const anchorRevHigh = top1 ? Math.round(data.monthlyEstimate.rangeHigh * top1.priceGbp) : 0;
            return (
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <div className="grid sm:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Units / month</p>
                    <p className="text-4xl md:text-5xl font-extrabold text-primary leading-none">
                      {data.monthlyEstimate.rangeLow.toLocaleString()}–{data.monthlyEstimate.rangeHigh.toLocaleString()}
                    </p>
                  </div>
                  {top1 && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Revenue / month (top seller)</p>
                      <p className="text-4xl md:text-5xl font-extrabold text-primary leading-none">
                        {fmtGbpShort(anchorRevLow)}–{fmtGbpShort(anchorRevHigh)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">at {fmtGbp(top1.priceGbp)} per unit</p>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">
                    Bracket: {data.monthlyEstimate.bracket}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {MONTHLY_METHODOLOGY}
                </p>
              </div>
            );
          })()}
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
                ? `Only ${data.ukDensity.ukSharePct}% of top sellers are UK-based. The other ${100 - data.ukDensity.ukSharePct}% come from China — and that's your gap. Temu promised the UK government 50% would be UK by end of 2025. They're not there. Especially not in your category.`
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
              <p className="text-sm text-muted-foreground">After that, we manage your Temu store — listings, customer service, ads, inventory updates — for <strong className="text-foreground">20% of revenue</strong> (we'll talk specifics on the call). Or you take what we built and keep doing it yourself. Up to you. We're aligned because we only make money if you do.</p>
            </div>

            <CalendlyEmbed onOpen={onCalendlyOpen} />

            <p className="mt-6 text-xs text-muted-foreground">
              Report generated for {submission.businessName} · {new Date(data.generatedAt).toLocaleString("en-GB")}
              {data.dataSource?.provider ? ` · Source: ${formatProvider(data.dataSource.provider)}` : ""}
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

// --- Tiny helpers ---

function formatProvider(provider: NonNullable<ReportData["dataSource"]>["provider"]) {
  const labels: Record<NonNullable<ReportData["dataSource"]>["provider"], string> = {
    "apify-amit123": "Apify amit123",
    "apify-crw": "Apify CRW GB",
    brightdata: "Bright Data",
    cache: "last successful scan",
    mock: "demo data",
  };
  return labels[provider] ?? provider;
}

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

function Stat({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 ${accent ? "bg-primary text-primary-foreground border-2 border-primary" : "bg-card border border-border"}`}>
      <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{label}</p>
      <p className={`text-2xl font-extrabold ${accent ? "text-primary-foreground" : "text-foreground"}`}>{value}</p>
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
