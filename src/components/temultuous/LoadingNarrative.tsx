import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import type { FormSubmission } from "@/lib/temultuous/types";

interface Props {
  submission: FormSubmission;
  currentStage: number; // 0..7 — drives narrative
}

const STAGES = [
  "Connecting to Temu UK live data",
  "Searching listings for your category",
  "Pulling top 40 active listings",
  "Analysing prices, sales counts, ratings",
  "Identifying which sellers are UK-based",
  "Calculating your local advantage score",
  "Building your report",
];

export default function LoadingNarrative({ submission, currentStage }: Props) {
  // Map stage index → "done" / "active" / "pending"
  const statusOf = (i: number): "done" | "active" | "pending" => {
    if (i < currentStage) return "done";
    if (i === currentStage) return "active";
    return "pending";
  };

  const progressPct = Math.min(100, Math.round((currentStage / STAGES.length) * 100));

  return (
    <section className="min-h-[100svh] bg-background text-foreground grid place-items-center px-6 py-16">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] text-xs font-bold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Live · Working on your category
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
            Pulling Temu UK data on{" "}
            <span className="text-primary">"{submission.productType}"</span>
          </h2>
          <p className="text-muted-foreground">
            Hang on for about 90 seconds. We're doing this live, not from a database.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="h-2 w-full rounded-full bg-[hsl(var(--muted))] overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>{progressPct}%</span>
            <span>~{Math.max(5, 95 - progressPct)}s remaining</span>
          </div>
        </div>

        {/* Stages list */}
        <ul className="space-y-3">
          {STAGES.map((label, i) => {
            const s = statusOf(i);
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: s === "pending" ? 0.4 : 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`flex items-center gap-3 p-4 rounded-xl border ${
                  s === "active" ? "border-primary bg-[hsl(var(--accent))]" : "border-border bg-card"
                }`}
              >
                <span className="shrink-0 w-7 h-7 grid place-items-center">
                  <AnimatePresence mode="wait">
                    {s === "done" && (
                      <motion.span
                        key="done"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </motion.span>
                    )}
                    {s === "active" && (
                      <motion.span
                        key="active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Loader2 className="w-5 h-5 text-primary animate-spin" />
                      </motion.span>
                    )}
                    {s === "pending" && (
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                    )}
                  </AnimatePresence>
                </span>
                <span className={`text-sm md:text-base ${s === "active" ? "font-semibold text-foreground" : "text-foreground/80"}`}>
                  {label}
                </span>
              </motion.li>
            );
          })}
        </ul>

        <p className="text-xs text-muted-foreground text-center mt-8">
          This is real Temu UK data, not a template. The wait is the work.
        </p>
      </div>
    </section>
  );
}
