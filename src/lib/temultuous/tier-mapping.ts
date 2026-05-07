// Classifier: user input → tier + canonical category + Apify search term.
// MVP uses keyword matching (deterministic, free). Later we can add a Claude
// fallback for ambiguous inputs.

import { TAXONOMY, FALLBACK_TIER, type CategoryDef, type TierDef } from "./taxonomy";
import type { Tier } from "./types";

export interface ClassificationResult {
  tier: Tier;
  tierLabel: string;
  tierAdvantage: string;
  matchedCategoryName: string;
  searchTerm: string;
  confidence: "high" | "medium" | "low";
}

const norm = (s: string) => s.toLowerCase().trim().replace(/\s+/g, " ");

export function classifyProduct(rawInput: string): ClassificationResult {
  const input = norm(rawInput);
  if (!input) return defaultUnknown(rawInput);

  let bestTier: TierDef | null = null;
  let bestCategory: CategoryDef | null = null;
  let bestScore = 0;

  for (const tier of TAXONOMY) {
    for (const category of tier.categories) {
      for (const kw of category.keywords) {
        const k = norm(kw);
        if (input === k) return hit(tier, category, "high");
        if (input.includes(k) || k.includes(input)) {
          const score = Math.min(input.length, k.length);
          if (score > bestScore) {
            bestScore = score;
            bestTier = tier;
            bestCategory = category;
          }
        }
      }
    }
  }

  if (bestTier && bestCategory) {
    return hit(bestTier, bestCategory, bestScore > 8 ? "medium" : "low");
  }

  return defaultUnknown(rawInput);
}

function hit(tier: TierDef, category: CategoryDef, confidence: ClassificationResult["confidence"]): ClassificationResult {
  return {
    tier: tier.key,
    tierLabel: tier.label,
    tierAdvantage: tier.advantage,
    matchedCategoryName: category.name,
    searchTerm: category.searchTerm,
    confidence,
  };
}

function defaultUnknown(rawInput: string): ClassificationResult {
  return {
    tier: FALLBACK_TIER.key,
    tierLabel: FALLBACK_TIER.label,
    tierAdvantage: FALLBACK_TIER.advantage,
    matchedCategoryName: rawInput,
    searchTerm: rawInput, // pass user input through to Apify
    confidence: "low",
  };
}

// Map cumulative sales bracket to a defensible monthly range.
// Hedged ranges reflect that Temu does not expose listing creation date,
// so monthly velocity is estimated from cumulative sales + visibility signals.
export function estimateMonthlyFromSales(salesNum: string, isBestSeller: boolean): {
  bracket: "10K+" | "1K+" | "500-999" | "100-499" | "<100";
  rangeLow: number;
  rangeHigh: number;
} {
  const s = (salesNum || "").toLowerCase();
  if (s.includes("10k") || s.includes("100k") || s.includes("50k") || s.includes("20k") || s.includes("30k") || s.includes("40k")) {
    return { bracket: "10K+", rangeLow: isBestSeller ? 800 : 400, rangeHigh: isBestSeller ? 3000 : 1500 };
  }
  if (s.includes("1k") || s.includes("2k") || s.includes("3k") || s.includes("5k") || s.includes("7k") || s.includes("9k")) {
    return { bracket: "1K+", rangeLow: isBestSeller ? 80 : 40, rangeHigh: isBestSeller ? 500 : 300 };
  }
  const n = parseInt(s.replace(/[^0-9]/g, ""), 10);
  if (!isNaN(n)) {
    if (n >= 500) return { bracket: "500-999", rangeLow: 30, rangeHigh: 150 };
    if (n >= 100) return { bracket: "100-499", rangeLow: 10, rangeHigh: 50 };
    return { bracket: "<100", rangeLow: 1, rangeHigh: 10 };
  }
  return { bracket: "<100", rangeLow: 1, rangeHigh: 10 };
}

export const MONTHLY_METHODOLOGY = `Estimated from cumulative Temu sales counts plus marketplace visibility signals (Best-Seller badges, reviews, promo tags). Temu does not publish per-month velocity, so these are defensible ranges, not exact figures. Real monthly numbers come from week-over-week scraping after launch.`;
