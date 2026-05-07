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

const STAGE_COUNT = 7;

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

  // Page metadata
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Temultuous — Live Temu UK Opportunity Scanner for British Manufacturers";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const handleSubmit = useCallback(async (submission: FormSubmission) => {
    setFlow({ step: "loading", submission, stage: 0, leadId: null });

    // POST to /api/temultuous/submit. If the endpoint isn't wired yet (404 / network error),
    // we fall back to mock-mode so the UI is testable end-to-end without API keys.
    let leadId: string | null = null;
    try {
      const res = await fetch("/api/temultuous/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (res.ok) {
        const json = await res.json();
        leadId = json.leadId ?? null;
      }
    } catch {
      // network error — fall through to mock mode
    }

    if (leadId) {
      pollStatus(leadId, submission);
    } else {
      runMockFlow(submission);
    }
  }, []);

  const pollStatus = useCallback((leadId: string, submission: FormSubmission) => {
    let cancelled = false;
    setFlow({ step: "loading", submission, stage: 0, leadId });

    const tick = async () => {
      if (cancelled) return;
      try {
        const r = await fetch(`/api/temultuous/status?leadId=${encodeURIComponent(leadId)}`);
        if (r.ok) {
          const j = await r.json();
          if (j.state === "ready" && j.report) {
            setFlow({ step: "report", submission, data: j.report });
            return;
          }
          if (j.state === "failed") {
            setFlow({ step: "error", submission, message: j.error || "Something went wrong on our side." });
            return;
          }
          setFlow((prev) => prev.step === "loading" ? { ...prev, stage: Math.min(STAGE_COUNT - 1, j.stage ?? prev.stage) } : prev);
        }
      } catch {
        // ignore transient errors
      }
      setTimeout(tick, 3000);
    };
    tick();
    return () => { cancelled = true; };
  }, []);

  /**
   * Mock-mode runner for when the API isn't wired yet.
   * Simulates the 7-stage progression on a 90-second timeline and returns
   * deterministic mock report data based on tier-mapping classification.
   */
  const runMockFlow = useCallback((submission: FormSubmission) => {
    const stageDurationMs = 12000;
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
        <button
          onClick={onRetry}
          className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition"
        >
          Try again
        </button>
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

  return {
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
