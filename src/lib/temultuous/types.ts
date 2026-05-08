// Shared types for the Temultuous lead magnet flow.

// Moat-based taxonomy (replaced traffic-light RED/AMBER/BLUE/GREEN 2026-05-08).
// Each tier names a *mechanism* of advantage rather than implying a hierarchy.
export type Tier = "LOCKED_OUT" | "MARGIN_MOAT" | "TRUST_MOAT" | "UNKNOWN";

export type CurrentStatus =
  | "never_sold"
  | "tried_didnt_work"
  | "already_selling"
  | "looking_into_it";

export interface FormSubmission {
  productType: string;
  businessName: string;
  email: string;
  currentStatus: CurrentStatus;
}

export interface LeadStatus {
  leadId: string;
  stage: number; // 0..7, drives the loading narrative
  state: "queued" | "scraping" | "analyzing" | "ready" | "failed";
  error?: string;
}

export interface ScrapedProduct {
  goodsId: string;
  title: string;
  priceGbp: number;
  marketPriceGbp: number | null;
  reductionPct: number | null;
  salesNum: string; // raw "1K+", "230" etc — from Temu
  rating: number | null;
  reviewCount: number | null;
  isBestSeller: boolean;
  isUkLocal: boolean; // derived from "2-day delivery" tag
  mallId: string;
  link: string;
}

export type HeatLabel = "COOL" | "WARM" | "HOT" | "WHITE_HOT";

export interface HeatBreakdown {
  mechanism: number;     // 0-60
  ukScarcity: number;    // 0-20
  demandSignal: number;  // 0-15
  marketDepth: number;   // 0-5
}

export interface Report {
  // User-facing opportunity score (0-95). Calculated from tier mechanism + UK
  // seller scarcity + demand signal + market depth. Replaces traffic-light
  // hierarchy with a personalised number that anchors the sales conversation.
  heatScore: number;
  heatLabel: HeatLabel;
  heatBreakdown: HeatBreakdown;

  // tier is now an internal mechanism reference that powers narrative; not the
  // primary display element. See HeatGauge component.
  tier: Tier;
  tierName: string;
  tierAdvantage: string;
  category: {
    matched: string;
    searchTerm: string;
    listingCount: number;
    priceRange: { min: number; max: number; median: number };
    avgRating: number;
    uniqueSellers: number;
  };
  topProducts: ScrapedProduct[];
  monthlyEstimate: {
    bracket: "10K+" | "1K+" | "500-999" | "100-499" | "<100";
    rangeLow: number;
    rangeHigh: number;
    methodology: string; // hedge text shown in report
  };
  ukDensity: {
    ukSellers: number;
    cnSellers: number;
    ukSharePct: number;
  };
  hooks: string[]; // 3 colleague-tone bullets
  generatedAt: string;
  dataSource?: {
    mode: "live" | "cached";
    provider: "apify-amit123" | "apify-crw" | "brightdata" | "cache" | "mock";
    snapshotAt: string;
  };
}
