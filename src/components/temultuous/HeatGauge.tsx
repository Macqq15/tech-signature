import { motion } from "framer-motion";
import { Snowflake, Cloud, Flame } from "lucide-react";
import type { HeatLabel } from "@/lib/temultuous/types";

interface Props {
  score: number;       // 30-95
  label: HeatLabel;    // COOL / WARM / HOT / WHITE_HOT
  category: string;    // submitted productType
  narrative: string;   // mechanism explanation under the gauge
}

const SCALE_MIN = 30;
const SCALE_MAX = 95;

/**
 * Map score to a percentage along the 30→95 gauge bar.
 */
function scoreToPct(score: number): number {
  const clamped = Math.max(SCALE_MIN, Math.min(SCALE_MAX, score));
  return ((clamped - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
}

/**
 * Visual treatment per heat band — gradient + icon + display label.
 * All bands stay positive in tone. Even "COOL" reads as opportunity-with-headroom,
 * not weakness.
 */
function visualForLabel(label: HeatLabel): {
  gradient: string;       // hero card background
  display: string;        // copy users see
  subline: string;        // one-line context
  icon: typeof Flame;
} {
  if (label === "WHITE_HOT") {
    return {
      gradient: "from-orange-500 via-red-500 to-rose-600",
      display: "WHITE HOT",
      subline: "Top 5% of UK manufacturers we scan. Drop everything else.",
      icon: Flame,
    };
  }
  if (label === "HOT") {
    return {
      gradient: "from-amber-500 via-orange-500 to-primary",
      display: "HOT",
      subline: "Top 15% of UK manufacturers we scan. Move soon.",
      icon: Flame,
    };
  }
  if (label === "WARM") {
    return {
      gradient: "from-sky-500 via-blue-500 to-orange-500",
      display: "WARM",
      subline: "Solid opportunity. Worth the build.",
      icon: Cloud,
    };
  }
  return {
    gradient: "from-blue-500 via-sky-500 to-cyan-500",
    display: "COOL",
    subline: "Smaller window, but the door is still open.",
    icon: Snowflake,
  };
}

export default function HeatGauge({ score, label, category, narrative }: Props) {
  const pct = scoreToPct(score);
  const v = visualForLabel(label);
  const VIcon = v.icon;

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${v.gradient} p-8 md:p-12 text-white shadow-2xl shadow-primary/30`}>
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" aria-hidden />

      <div className="relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-bold uppercase tracking-wider mb-6">
          Your Temu UK opportunity heat · {category}
        </div>

        {/* Big number + label */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-8">
          <div className="flex items-baseline gap-2">
            <motion.span
              className="text-7xl md:text-9xl font-black leading-none tabular-nums tracking-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {score}
            </motion.span>
            <span className="text-2xl md:text-3xl font-bold opacity-70">/100</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur grid place-items-center">
              <VIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold leading-tight">{v.display}</div>
              <div className="text-sm opacity-90 max-w-md">{v.subline}</div>
            </div>
          </div>
        </div>

        {/* Gauge bar */}
        <div className="relative mb-8">
          <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
            <motion.div
              className="h-full bg-white/80 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <motion.div
            className="absolute -top-1.5 w-5 h-5 rounded-full bg-white border-2 border-white/50 shadow-lg -ml-2.5"
            initial={{ left: "0%", opacity: 0 }}
            animate={{ left: `${pct}%`, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          />
          <div className="mt-3 flex justify-between text-[11px] font-bold uppercase tracking-wider opacity-80">
            <span>❄ Cool</span>
            <span>White hot 🔥</span>
          </div>
        </div>

        {/* Narrative explanation (mechanism reference) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/95 text-base md:text-lg leading-relaxed max-w-3xl"
        >
          {narrative}
        </motion.p>

        {/* Tiny methodology hint */}
        <p className="text-[11px] opacity-70 mt-6">
          Score reflects opportunity, not certainty — execution still matters. Calculated from shipping protection, UK seller density, demand signals, and market depth.
        </p>
      </div>
    </div>
  );
}
