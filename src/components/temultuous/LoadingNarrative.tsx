import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2, BarChart3, FileText } from "lucide-react";
import type { FormSubmission } from "@/lib/temultuous/types";

interface Props {
  submission: FormSubmission;
  currentStage: number; // 0..2 — drives the 3-phase reveal
}

interface Phase {
  title: (productType: string, ticker: number) => string;
  sub: string;
  icon: typeof Globe2;
}

// Three phases, ~30s each. Calmer than the prior 7-line list and matches the
// "talking to a colleague over a pint" voice — fewer marker words, more trust.
const PHASES: Phase[] = [
  {
    title: () => "Pulling Temu UK live data",
    sub: "Connecting to the marketplace and authenticating the scrape.",
    icon: Globe2,
  },
  {
    title: (product, ticker) => `Reading ${ticker} listings in ${product}`,
    sub: "Capturing prices, sales counts, ratings, and seller location.",
    icon: BarChart3,
  },
  {
    title: () => "Compiling your opportunity report",
    sub: "Tier classification, monthly volume estimate, UK seller density.",
    icon: FileText,
  },
];

const TICKER_TARGET = 47;

export default function LoadingNarrative({ submission, currentStage }: Props) {
  const safeStage = Math.max(0, Math.min(PHASES.length - 1, currentStage));
  const phase = PHASES[safeStage];
  const PhaseIcon = phase.icon;

  // Animated ticker for phase 2 — counts up to ~47 over the phase duration.
  // Sits at 0 outside phase 2, snaps to TICKER_TARGET when phase 3 begins.
  const [ticker, setTicker] = useState(0);
  useEffect(() => {
    if (safeStage < 1) {
      setTicker(0);
      return;
    }
    if (safeStage > 1) {
      setTicker(TICKER_TARGET);
      return;
    }
    // safeStage === 1: count from 0 to TICKER_TARGET over ~25s
    let n = 0;
    setTicker(0);
    const stepMs = 25_000 / TICKER_TARGET;
    const id = setInterval(() => {
      n += 1;
      setTicker(n);
      if (n >= TICKER_TARGET) clearInterval(id);
    }, stepMs);
    return () => clearInterval(id);
  }, [safeStage]);

  const progressPct = Math.min(100, Math.round(((safeStage + 1) / PHASES.length) * 100));
  const secondsRemainingApprox = Math.max(5, (PHASES.length - safeStage) * 30 - 5);

  return (
    <section className="min-h-[100svh] bg-background text-foreground grid place-items-center px-6 py-16">
      <div className="w-full max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] text-xs font-bold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live · Real Temu UK data
          </div>
        </motion.div>

        {/* Phase swap */}
        <div className="min-h-[280px] grid place-items-center mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={safeStage}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-[hsl(var(--accent))] grid place-items-center">
                  <PhaseIcon className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/40 animate-ping-slow" aria-hidden />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 leading-tight">
                  {phase.title(submission.productType, ticker)}
                </h2>
                <p className="text-muted-foreground text-base max-w-md mx-auto">
                  {phase.sub}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto">
          <div className="h-1.5 w-full rounded-full bg-[hsl(var(--muted))] overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="mt-3 flex justify-between text-xs text-muted-foreground tabular-nums">
            <span>Step {safeStage + 1} of {PHASES.length}</span>
            <span>~{secondsRemainingApprox}s remaining</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-10">
          Real Temu UK data, not a template. The wait is the work.
        </p>
      </div>
    </section>
  );
}
