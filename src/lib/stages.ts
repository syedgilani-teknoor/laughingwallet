// The six life-stage pillars, pulled straight from the mock-up.
// Each maps to a content category and (eventually) a planning tool.

export type Stage = {
  slug: string;
  title: string;
  blurb: string;
  emoji: string;
  accent: "coral" | "mint" | "sun" | "ink";
};

export const STAGES: Stage[] = [
  {
    slug: "buy-a-home",
    title: "Buy a Home",
    blurb: "Down payments, mortgages, and not panicking about either.",
    emoji: "🏡",
    accent: "coral",
  },
  {
    slug: "save-and-invest",
    title: "Save & Invest",
    blurb: "Turn spare change into a nest egg that actually grows.",
    emoji: "🐷",
    accent: "mint",
  },
  {
    slug: "cars-no-interest",
    title: "Cars, No Interest",
    blurb: "Financing a car without the dealership math headache.",
    emoji: "🚗",
    accent: "sun",
  },
  {
    slug: "family-and-experiences",
    title: "Family & Experiences",
    blurb: "Budget for the trips, the kids, and the good stuff.",
    emoji: "🌴",
    accent: "mint",
  },
  {
    slug: "protect-what-matters",
    title: "Protect What Matters",
    blurb: "Insurance and safety nets, explained like a friend would.",
    emoji: "🛡️",
    accent: "coral",
  },
  {
    slug: "retire-with-confidence",
    title: "Retire With Confidence",
    blurb: "Plan the rocking-chair years while they're still far off.",
    emoji: "🎉",
    accent: "ink",
  },
];

// The reassurance strip along the bottom of the mock-up.
export const PROMISES = [
  "Budget Smarter",
  "Avoid Debt",
  "Grow Wealth",
  "Secure Tomorrow",
];
