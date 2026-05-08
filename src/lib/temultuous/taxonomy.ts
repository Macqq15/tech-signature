// Moat-based taxonomy. Mirrors temultuous-api/src/taxonomy.ts on the backend.
// Each tier names a *mechanism* of advantage UK manufacturers have over Chinese
// sellers on Temu UK — there's no hierarchy, every moat is its own strong story.
//
// Replaces the old traffic-light RED/AMBER/BLUE/GREEN scheme (2026-05-08) which
// implied "RED is best, GREEN is third" — the opposite of how we want manufacturers
// to feel about their tier classification.

import type { Tier } from "./types";

export interface CategoryDef {
  name: string;
  keywords: string[];
  searchTerm: string;
}

export interface TierDef {
  key: Tier;
  label: string;
  advantage: string;
  categories: CategoryDef[];
}

export const TAXONOMY: TierDef[] = [
  {
    key: "LOCKED_OUT",
    label: "LOCKED OUT — Chinese sellers blocked at the border",
    advantage:
      "Chinese sellers physically can't air-freight aerosols, flammables, or regulated chemicals into the UK at parcel scale. The shipping rules lock them out. You make it here. The door's open and nobody's walking through it.",
    categories: [
      { name: "Aerosol cleaners", keywords: ["aerosol cleaner", "spray cleaner", "aerosol disinfectant", "spray disinfectant", "aerosol spray"], searchTerm: "aerosol cleaner" },
      { name: "Aerosol body care", keywords: ["deodorant", "body spray", "perfume spray", "antiperspirant", "hairspray"], searchTerm: "deodorant spray" },
      { name: "Garden chemicals", keywords: ["weed killer", "pesticide", "garden chemical", "fungicide", "herbicide", "insecticide", "slug killer"], searchTerm: "weed killer" },
      { name: "Lighter fluids", keywords: ["lighter fluid", "lighter refill", "butane refill", "gas refill"], searchTerm: "lighter fluid" },
      { name: "Paint and varnish", keywords: ["paint", "varnish", "spray paint", "wood stain", "primer", "lacquer"], searchTerm: "wood paint" },
      { name: "Industrial chemicals", keywords: ["solvent", "thinner", "white spirit", "acetone", "industrial chemical", "degreaser"], searchTerm: "degreaser" },
      { name: "Adhesives and sealants", keywords: ["glue", "adhesive", "sealant", "silicone sealant", "epoxy", "wood glue"], searchTerm: "adhesive sealant" },
    ],
  },
  {
    key: "MARGIN_MOAT",
    label: "MARGIN MOAT — Their freight kills their margin",
    advantage:
      "Heavy liquids and oversized goods are uneconomic to ship from China — water weight, fragility, ocean-freight slowness all chip away at their margin before the product even hits a UK shelf. You ship from a UK warehouse. They can't compete on speed, returns, or unit economics. Temu has named these categories as their UK local-seller priorities.",
    categories: [
      // Heavy liquids (was AMBER)
      { name: "Cleaning liquids", keywords: ["liquid cleaner", "detergent", "floor cleaner", "kitchen cleaner", "bathroom cleaner", "all purpose cleaner"], searchTerm: "kitchen cleaner liquid" },
      { name: "Janitorial and industrial cleaning", keywords: ["janitorial", "industrial cleaner", "concentrate cleaner", "commercial cleaner", "bulk cleaner", "wholesale cleaning"], searchTerm: "industrial cleaner concentrate" },
      { name: "Disinfectants and sanitisers", keywords: ["disinfectant", "sanitiser", "sanitizer", "antibacterial", "germ killer", "hand sanitiser", "wc cleaner", "toilet cleaner"], searchTerm: "disinfectant" },
      { name: "Personal care liquids", keywords: ["shampoo", "body wash", "shower gel", "hair conditioner", "hand soap", "liquid soap"], searchTerm: "shampoo" },
      { name: "Beauty and skincare", keywords: ["moisturiser", "moisturizer", "lotion", "skincare", "face cream", "body lotion", "serum"], searchTerm: "body lotion" },
      { name: "Food and confectionery", keywords: ["sweets", "biscuits", "snacks", "chocolate", "honey", "jam", "preserve", "british food", "tea", "coffee"], searchTerm: "british sweets" },
      { name: "Drinks and concentrates", keywords: ["cordial", "syrup", "drink concentrate", "squash", "soft drink"], searchTerm: "cordial syrup" },
      { name: "Pet food and care", keywords: ["pet food", "dog food", "cat food", "pet shampoo", "pet treats", "dog treats"], searchTerm: "pet food" },
      // Oversized goods (was BLUE)
      { name: "Garden furniture", keywords: ["garden furniture", "patio set", "outdoor furniture", "rattan set", "garden table"], searchTerm: "garden furniture" },
      { name: "Mattresses", keywords: ["mattress", "memory foam mattress", "bed mattress", "pocket sprung"], searchTerm: "mattress" },
      { name: "Sofas and large seating", keywords: ["sofa", "couch", "armchair", "recliner", "corner sofa"], searchTerm: "sofa" },
      { name: "Wardrobes and storage", keywords: ["wardrobe", "chest of drawers", "large storage", "bedroom furniture", "ottoman"], searchTerm: "wardrobe" },
      { name: "Large kitchen appliances", keywords: ["fridge", "washing machine", "tumble dryer", "dishwasher", "oven", "hob", "extractor hood"], searchTerm: "kitchen appliance" },
      { name: "Office furniture", keywords: ["office chair", "office desk", "ergonomic chair", "filing cabinet", "office furniture"], searchTerm: "office chair" },
      { name: "Building materials", keywords: ["timber", "lumber", "decking", "fencing panel", "garden fence", "shed", "garden building"], searchTerm: "garden fence panel" },
    ],
  },
  {
    key: "TRUST_MOAT",
    label: "TRUST MOAT — UK marks beat Chinese price",
    advantage:
      "UK shoppers don't trust Chinese listings for products kids and bodies actually touch. UKCA marks, BSI certifications, \"Made in Britain\" — these are real signals to a buyer evaluating safety, not marketing copy. That's your trust premium, and it's worth more than any price war.",
    categories: [
      { name: "Baby and toddler products", keywords: ["baby food", "baby formula", "weaning", "toddler food", "baby skincare"], searchTerm: "baby food" },
      { name: "Health and supplements", keywords: ["vitamins", "supplements", "protein powder", "health drink", "multivitamin"], searchTerm: "vitamins" },
      { name: "Safety equipment / PPE", keywords: ["safety helmet", "ppe", "personal protective", "safety gloves", "high vis", "respirator"], searchTerm: "ppe safety" },
      { name: "Children's toys", keywords: ["wooden toys", "kids toys", "educational toys", "british toys", "soft toys"], searchTerm: "wooden toys" },
      { name: "Pharmaceutical and medical", keywords: ["medical", "first aid", "bandage", "wound care", "pharmacy"], searchTerm: "first aid kit" },
      { name: "Workwear and uniforms", keywords: ["workwear", "work boots", "uniform", "industrial clothing", "high vis vest"], searchTerm: "workwear" },
      { name: "Tools and hardware", keywords: ["hand tool", "power tool", "drill", "screwdriver", "spanner", "tool set"], searchTerm: "tool set" },
      { name: "Packaging and shipping supplies", keywords: ["packaging", "boxes", "bubble wrap", "shipping supplies", "cardboard box", "mailing"], searchTerm: "packaging boxes" },
    ],
  },
];

export const FALLBACK_TIER: TierDef = {
  key: "UNKNOWN",
  label: "We pulled live Temu data on your category",
  advantage:
    "Your input doesn't sit cleanly in our standard moat tiers — but the live scrape went through and the data below is real Temu UK listings for your category. Often the most interesting opportunities sit in this kind of white space, where neither Chinese sellers nor existing UK manufacturers have moved yet.",
  categories: [],
};
