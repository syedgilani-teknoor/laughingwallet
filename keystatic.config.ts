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

// Storage switches on an env var so the same code works everywhere:
//   - Local dev (no env var set)  -> writes .yaml files on disk, as before.
//   - Production on Vercel        -> set NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND=github
//     (plus the three KEYSTATIC_GITHUB_* / KEYSTATIC_SECRET vars) and the CMS
//     commits straight to the repo, triggering a redeploy.
// Until that env var is set, the build stays on local storage and never fails
// for missing GitHub credentials.
const storage =
  process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND === "github"
    ? ({
        kind: "github",
        repo: { owner: "syedgilani-teknoor", name: "laughingwallet" },
      } as const)
    : ({ kind: "local" } as const);

export default config({
  storage,

  ui: {
    brand: { name: "The Laughing Wallet" },
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
