// Shared types for the Temultuous lead magnet flow.

export type Tier = "RED" | "AMBER" | "BLUE" | "GREEN" | "UNKNOWN";

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

export interface Report {
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
}
