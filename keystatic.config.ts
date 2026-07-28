import { config, fields, collection } from "@keystatic/core";

// Life-stage options — kept in sync with src/lib/stages.ts.
const STAGE_OPTIONS = [
  { label: "Buy a Home", value: "buy-a-home" },
  { label: "Save & Invest", value: "save-and-invest" },
  { label: "Cars, No Interest", value: "cars-no-interest" },
  { label: "Family & Experiences", value: "family-and-experiences" },
  { label: "Protect What Matters", value: "protect-what-matters" },
  { label: "Retire With Confidence", value: "retire-with-confidence" },
] as const;

export default config({
  // Local storage reads/writes files on your machine during development.
  // To let a non-technical editor publish from the hosted site, switch this
  // to GitHub storage once the repo is up, e.g.:
  //   storage: { kind: "github", repo: "your-org/laughing-wallet" }
  storage: { kind: "local" },

  ui: {
    brand: { name: "Laughing Wallet" },
  },

  collections: {
    videos: collection({
      label: "Videos",
      // Each entry is one YouTube video shown on the Watch & Learn page.
      slugField: "title",
      path: "content/videos/*",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({
          name: { label: "Title" },
        }),
        youtubeUrl: fields.url({
          label: "YouTube link",
          description:
            "Paste the full YouTube URL (e.g. https://www.youtube.com/watch?v=...).",
        }),
        description: fields.text({
          label: "Short description",
          multiline: true,
        }),
        stage: fields.select({
          label: "Life stage",
          description: "Which milestone does this video belong to?",
          options: [...STAGE_OPTIONS],
          defaultValue: "save-and-invest",
        }),
        publishedAt: fields.date({
          label: "Published date",
          defaultValue: { kind: "today" },
        }),
      },
    }),
  },
});
