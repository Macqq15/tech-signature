// RED / AMBER / BLUE / GREEN tier taxonomy seeding the lead magnet.
// Each tier is a structural moat against Chinese sellers on Temu UK.

import type { Tier } from "./types";

export interface CategoryDef {
  name: string;
  keywords: string[]; // user-input matching
  searchTerm: string; // canonical query to send to Apify
}

export interface TierDef {
  key: Tier;
  label: string;
  advantage: string; // 1-2 sentence colleague-tone explanation
  categories: CategoryDef[];
}

export const TAXONOMY: TierDef[] = [
  {
    key: "RED",
    label: "RED — Hazmat / Aerosols / Regulated",
    advantage:
      "Chinese sellers physically can't air-freight aerosols, flammables, or regulated chemicals into the UK at parcel scale. The shipping rules lock them out. You make it here. The door's open and nobody's walking through it.",
    categories: [
      { name: "Aerosol cleaners", keywords: ["aerosol cleaner", "spray cleaner", "aerosol disinfectant", "spray disinfectant"], searchTerm: "aerosol cleaner" },
      { name: "Aerosol body care", keywords: ["deodorant", "body spray", "perfume spray", "antiperspirant"], searchTerm: "deodorant spray" },
      { name: "Garden chemicals", keywords: ["weed killer", "pesticide", "garden chemical", "fungicide", "herbicide"], searchTerm: "weed killer" },
      { name: "Lighter fluids", keywords: ["lighter fluid", "lighter refill", "butane refill"], searchTerm: "lighter fluid" },
      { name: "Paint and varnish", keywords: ["paint", "varnish", "spray paint", "wood stain", "primer"], searchTerm: "wood paint" },
    ],
  },
  {
    key: "AMBER",
    label: "AMBER — Heavy Liquids / Perishables",
    advantage:
      "Liquids and perishables are uneconomic to ship from China — water weight kills the margin, fragility kills the parcel. UK manufacturers have a structural shipping advantage on these.",
    categories: [
      { name: "Cleaning liquids", keywords: ["liquid cleaner", "detergent", "floor cleaner", "kitchen cleaner"], searchTerm: "kitchen cleaner liquid" },
      { name: "Personal care liquids", keywords: ["shampoo", "body wash", "shower gel", "hair conditioner"], searchTerm: "shampoo" },
      { name: "Food and confectionery", keywords: ["sweets", "biscuits", "snacks", "chocolate", "honey"], searchTerm: "british sweets" },
      { name: "Drinks and concentrates", keywords: ["cordial", "syrup", "drink concentrate", "squash"], searchTerm: "cordial syrup" },
    ],
  },
  {
    key: "BLUE",
    label: "BLUE — Oversized / Heavy Goods",
    advantage:
      "Furniture, mattresses, and large appliances are uneconomic to air-freight. Ocean freight from China is slow and unreliable. UK warehouse delivery wins on speed, returns, and customer trust. Temu has admitted this publicly — they've named furniture and appliances as their UK local-seller priorities.",
    categories: [
      { name: "Garden furniture", keywords: ["garden furniture", "patio set", "outdoor furniture", "rattan set"], searchTerm: "garden furniture" },
      { name: "Mattresses", keywords: ["mattress", "memory foam mattress", "bed mattress"], searchTerm: "mattress" },
      { name: "Sofas and large seating", keywords: ["sofa", "couch", "armchair", "recliner"], searchTerm: "sofa" },
      { name: "Wardrobes and storage", keywords: ["wardrobe", "chest of drawers", "large storage", "bedroom furniture"], searchTerm: "wardrobe" },
      { name: "Large kitchen appliances", keywords: ["fridge", "washing machine", "tumble dryer", "dishwasher", "oven"], searchTerm: "kitchen appliance" },
    ],
  },
  {
    key: "GREEN",
    label: "GREEN — Compliance-Sensitive / Trust",
    advantage:
      "UK shoppers are sceptical of Chinese listings for products kids and bodies actually touch. UKCA marks, BSI certifications, and local manufacturing are real signals — not marketing copy. This is your trust premium.",
    categories: [
      { name: "Baby and toddler products", keywords: ["baby food", "baby formula", "weaning", "toddler food"], searchTerm: "baby food" },
      { name: "Health and supplements", keywords: ["vitamins", "supplements", "protein powder", "health drink"], searchTerm: "vitamins" },
      { name: "Safety equipment", keywords: ["safety helmet", "PPE", "safety gloves", "high vis"], searchTerm: "safety helmet" },
      { name: "Children's toys", keywords: ["wooden toys", "kids toys", "educational toys", "british toys"], searchTerm: "wooden toys" },
    ],
  },
];

export const FALLBACK_TIER: TierDef = {
  key: "UNKNOWN",
  label: "Looks like a non-obvious category",
  advantage:
    "Your category doesn't sit cleanly in our four standard tiers — but that often means there's an even bigger gap nobody's spotted yet. We'll show you what's actually selling on Temu UK in your space and where the white space is.",
  categories: [],
};
