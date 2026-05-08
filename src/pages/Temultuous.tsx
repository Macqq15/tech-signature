import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import LandingForm from "@/components/temultuous/LandingForm";
import LoadingNarrative from "@/components/temultuous/LoadingNarrative";
import Report from "@/components/temultuous/Report";
import { classifyProduct, estimateMonthlyFromSales } from "@/lib/temultuous/tier-mapping";
import type { FormSubmission, Report as ReportData } from "@/lib/temultuous/types";

type FlowState =
  | { step: "form" }
  | { step: "loading"; submission: FormSubmission; stage: number; leadId: string | null }
  | { step: "report"; submission: FormSubmission; data: ReportData }
  | { step: "error"; submission: FormSubmission; message: string };

// 3-phase loading screen: Pulling → Reading listings → Compiling. Each ~30s.
const STAGE_COUNT = 3;
const STAGE_DURATION_MS = 30_000;

// Backend URL — Cloud Run service for prod, localhost for dev.
// Set VITE_TEMULTUOUS_API_URL via GitHub Actions secret at build time.
const API_BASE_URL =
  (import.meta.env.VITE_TEMULTUOUS_API_URL as string | undefined)?.replace(/\/+$/, "") ||
  (import.meta.env.DEV ? "http://localhost:8080" : "");

export default function Temultuous() {
  const { setTheme, resolvedTheme } = useTheme();
  const [previousTheme, setPreviousTheme] = useState<string | undefined>(undefined);
  const [flow, setFlow] = useState<FlowState>({ step: "form" });

  // Force light theme on this route only — restore on unmount.
  useEffect(() => {
    setPreviousTheme(resolvedTheme);
    setTheme("light");
    return () => {
      if (previousTheme) setTheme(previousTheme);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Page metadata. Maciejmarek.com's static index.html ships with the consultant
  // brand's title + meta description ("Stop hiring..."). When this page mounts on
  // /temultuous we override both at runtime so the browser tab and any social
  // previews triggered after JS boot show Temultuous-specific copy. Restored on unmount.
  useEffect(() => {
    const previousTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute("content") ?? null;

    document.title = "Temultuous — Live Temu UK Opportunity Scanner for British Manufacturers";
    metaDesc?.setAttribute(
      "content",
      "Run a live Temu UK scan in 90 seconds. Real listings, real prices, real UK seller density — and the gap. For free.",
    );

    return () => {
      document.title = previousTitle;
      if (previousDesc !== null) metaDesc?.setAttribute("content", previousDesc);
    };
  }, []);

  const handleSubmit = useCallback(async (submission: FormSubmission) => {
    setFlow({ step: "loading", submission, stage: 0, leadId: null });

    // If no backend is configured (preview/dev without API URL), fall back to mock mode
    // so the UX is still demoable end-to-end.
    if (!API_BASE_URL) {
      runMockFlow(submission);
      return;
    }

    // The Cloud Run /submit endpoint is synchronous: it scrapes Apify + builds the report
    // in one round-trip (typically 30-90 seconds). While the fetch is pending we animate
    // the loading narrative on a timer so the user sees progress, even though the real
    // backend stage is "everything happening at once".
    advanceLoadingTimer(submission);

    try {
      const res = await fetch(`${API_BASE_URL}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setFlow({
          step: "error",
          submission,
          message: body.error || `Server returned ${res.status}. Please try again.`,
        });
        return;
      }

      const { report } = (await res.json()) as { leadId: string; report: ReportData };
      setFlow({ step: "report", submission, data: report });
    } catch (err) {
      console.error("[temultuous] submit failed", err);
      setFlow({
        step: "error",
        submission,
        message: "We couldn't reach the analysis service. Check your connection or try again in a minute.",
      });
    }
  }, []);

  // Drive the LoadingNarrative stages on a timer while the real fetch is pending.
  // 7 stages over ~84 seconds. If the real fetch resolves earlier, the timer is
  // cancelled by the state transition.
  const advanceLoadingTimer = useCallback((submission: FormSubmission) => {
    let stage = 0;
    setFlow({ step: "loading", submission, stage, leadId: null });
    const stageDurationMs = STAGE_DURATION_MS;

    const tick = () => {
      stage += 1;
      setFlow((prev) => {
        // If state has moved off "loading" (because the real fetch resolved or failed),
        // the timer is effectively cancelled — we just no-op.
        if (prev.step !== "loading") return prev;
        return { ...prev, stage: Math.min(STAGE_COUNT - 1, stage) };
      });
      if (stage < STAGE_COUNT - 1) {
        setTimeout(tick, stageDurationMs);
      }
    };
    setTimeout(tick, stageDurationMs);
  }, []);

  /**
   * Mock-mode runner for when the API isn't wired yet.
   * Simulates the 7-stage progression on a 90-second timeline and returns
   * deterministic mock report data based on tier-mapping classification.
   */
  const runMockFlow = useCallback((submission: FormSubmission) => {
    const stageDurationMs = STAGE_DURATION_MS;
    let stage = 0;
    setFlow({ step: "loading", submission, stage, leadId: null });

    const advance = () => {
      stage += 1;
      if (stage >= STAGE_COUNT) {
        const data = buildMockReport(submission);
        setFlow({ step: "report", submission, data });
        return;
      }
      setFlow({ step: "loading", submission, stage, leadId: null });
      setTimeout(advance, stageDurationMs);
    };
    setTimeout(advance, stageDurationMs);
  }, []);

  // Pixel/CAPI hooks (real wiring happens in Phase 1B; for now console.log so we can verify the events are firing).
  const fireMilestone = useCallback((pct: 25 | 50 | 75 | 100) => {
    if (typeof window !== "undefined" && (window as any).__temultuousTrack) {
      (window as any).__temultuousTrack(`report_read_${pct}`);
    }
    // eslint-disable-next-line no-console
    console.debug("[temultuous] milestone", pct);
  }, []);

  const fireCalendlyOpen = useCallback(() => {
    if (typeof window !== "undefined" && (window as any).__temultuousTrack) {
      (window as any).__temultuousTrack("cta_calendly_open");
    }
    // eslint-disable-next-line no-console
    console.debug("[temultuous] calendly_open");
  }, []);

  return (
    <div className="temultuous-theme min-h-[100svh]">
      {flow.step === "form" && <LandingForm onSubmit={handleSubmit} />}
      {flow.step === "loading" && (
        <LoadingNarrative submission={flow.submission} currentStage={flow.stage} />
      )}
      {flow.step === "report" && (
        <Report
          submission={flow.submission}
          data={flow.data}
          onMilestone={fireMilestone}
          onCalendlyOpen={fireCalendlyOpen}
        />
      )}
      {flow.step === "error" && (
        <ErrorView
          message={flow.message}
          onRetry={() => setFlow({ step: "form" })}
        />
      )}
    </div>
  );
}

function ErrorView({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <section className="min-h-[100svh] grid place-items-center px-6 py-16 bg-background">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-extrabold mb-3">We hit a snag.</h2>
        <p className="text-muted-foreground mb-6">{message}</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={onRetry}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition"
          >
            Try again
          </button>
          <a
            href="mailto:maciej@maciejmarek.com?subject=Temultuous%20scan%20failed&body=Hi%2C%0A%0AThe%20Temu%20UK%20scan%20failed%20on%20my%20end.%20Could%20you%20run%20it%20manually%3F%0A%0ABusiness%3A%20%0AProduct%20type%3A%20%0A"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Or email us — we'll run the scan manually within 24h
          </a>
        </div>
      </div>
    </section>
  );
}

// ---- Mock report builder (used when /api isn't wired yet) -------------------

function buildMockReport(submission: FormSubmission): ReportData {
  const cls = classifyProduct(submission.productType);
  const top = mockTopProducts(submission.productType);
  const monthly = estimateMonthlyFromSales(top[0]?.salesNum ?? "1K+", true);
  const ukSellers = top.filter((p) => p.isUkLocal).length;
  const cnSellers = top.length - ukSellers;
  const ukSharePct = Math.round((ukSellers / Math.max(1, top.length)) * 100);

  // Mock heat score — frontend-side stand-in when backend isn't reachable.
  // Uses the same component weights as backend, simplified, for demo plausibility.
  const mechanismPts = cls.tier === "LOCKED_OUT" ? 60 : cls.tier === "MARGIN_MOAT" ? 45 : cls.tier === "TRUST_MOAT" ? 35 : 25;
  const ukScarcityPts = ukSharePct < 15 ? 20 : ukSharePct < 30 ? 15 : ukSharePct < 50 ? 10 : 5;
  const demandPts = top[0]?.isBestSeller ? 15 : 10;
  const depthPts = 5;
  const rawScore = mechanismPts + ukScarcityPts + demandPts + depthPts;
  const heatScore = Math.max(30, Math.min(95, rawScore));
  const heatLabel: ReportData["heatLabel"] = heatScore >= 85 ? "WHITE_HOT" : heatScore >= 70 ? "HOT" : heatScore >= 50 ? "WARM" : "COOL";

  return {
    heatScore,
    heatLabel,
    heatBreakdown: { mechanism: mechanismPts, ukScarcity: ukScarcityPts, demandSignal: demandPts, marketDepth: depthPts },
    tier: cls.tier,
    tierName: cls.tierLabel,
    tierAdvantage: cls.tierAdvantage,
    category: {
      matched: cls.matchedCategoryName,
      searchTerm: cls.searchTerm,
      listingCount: 47,
      priceRange: { min: 32, max: 280, median: 110 },
      avgRating: 4.5,
      uniqueSellers: 11,
    },
    topProducts: top,
    monthlyEstimate: {
      bracket: monthly.bracket,
      rangeLow: monthly.rangeLow,
      rangeHigh: monthly.rangeHigh,
      methodology: "",
    },
    ukDensity: { ukSellers, cnSellers, ukSharePct },
    hooks: [
      `You make this in the UK. Chinese sellers can't air-freight ${submission.productType.toLowerCase()} into the country at parcel scale — the rules lock them out. The door's wide open.`,
      `Temu told the UK government 50% of sales would come from UK sellers by end-2025. They're nowhere near. They're actively recruiting. You are the answer.`,
      `Right now, ${cnSellers} of the top 20 listings ship from outside the UK. That's ${cnSellers} pieces of business that should be yours.`,
    ],
    generatedAt: new Date().toISOString(),
    dataSource: {
      mode: "live",
      provider: "mock",
      snapshotAt: new Date().toISOString(),
    },
  };
}

function mockTopProducts(productType: string) {
  // Simple deterministic mock data so the report has texture even pre-API
  return [
    { goodsId: "1", title: `Premium ${productType} — UK Manufactured, Free Next-Day Delivery`, priceGbp: 89, marketPriceGbp: 149, reductionPct: 40, salesNum: "1K+", rating: 4.7, reviewCount: 234, isBestSeller: true, isUkLocal: true, mallId: "uk-001", link: "#" },
    { goodsId: "2", title: `Heavy-Duty ${productType} for Professional Use`, priceGbp: 65, marketPriceGbp: 110, reductionPct: 41, salesNum: "956", rating: 4.5, reviewCount: 187, isBestSeller: false, isUkLocal: false, mallId: "cn-001", link: "#" },
    { goodsId: "3", title: `${productType} Set, 4-Pack, Multi-Use`, priceGbp: 42, marketPriceGbp: 78, reductionPct: 46, salesNum: "462", rating: 4.6, reviewCount: 98, isBestSeller: false, isUkLocal: false, mallId: "cn-002", link: "#" },
    { goodsId: "4", title: `Eco-Friendly ${productType} — Made in Britain`, priceGbp: 110, marketPriceGbp: 180, reductionPct: 39, salesNum: "230", rating: 4.8, reviewCount: 67, isBestSeller: false, isUkLocal: true, mallId: "uk-002", link: "#" },
    { goodsId: "5", title: `Budget-Friendly ${productType} Starter Kit`, priceGbp: 32, marketPriceGbp: 56, reductionPct: 43, salesNum: "216", rating: 4.2, reviewCount: 41, isBestSeller: false, isUkLocal: false, mallId: "cn-003", link: "#" },
  ];
}
