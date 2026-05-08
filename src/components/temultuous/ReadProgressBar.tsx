import { useEffect, useState } from "react";

/**
 * Sticky read-progress bar at the top of the report page.
 * Tracks how far the user has scrolled through the report (0..100%).
 * Fires onMilestone callbacks at 25/50/75/100% (used for Pixel/CAPI events).
 */
interface Props {
  scopeRef?: React.RefObject<HTMLElement>; // optional: measure inside a specific element
  onMilestone?: (pct: 25 | 50 | 75 | 100) => void;
}

export default function ReadProgressBar({ scopeRef, onMilestone }: Props) {
  const [pct, setPct] = useState(0);
  const [fired, setFired] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handler = () => {
      const el = scopeRef?.current;
      let p = 0;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        p = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
      } else {
        const doc = document.documentElement;
        const total = doc.scrollHeight - window.innerHeight;
        p = total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0;
      }
      setPct(p);

      if (onMilestone) {
        for (const m of [25, 50, 75, 100] as const) {
          if (p >= m && !fired.has(m)) {
            setFired((prev) => new Set(prev).add(m));
            onMilestone(m);
          }
        }
      }
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [scopeRef, onMilestone, fired]);

  return (
    <div className="sticky top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
        aria-hidden
      />
    </div>
  );
}
