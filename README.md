# Laughing Wallet

Money made simple, and kind of funny. A content hub (short cartoon videos +
articles) plus simple planning tools, built as one Next.js app.

Stack: **Next.js 14 (App Router) · TypeScript · Tailwind CSS**

## Run it locally

You need Node.js 18.18+ (Node 20 or 22 recommended).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other commands:

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

## What's in here

```
src/
├── app/
│   ├── layout.tsx        # shell: fonts, header, footer
│   ├── page.tsx          # homepage (hero + life stages + planner CTA)
│   ├── learn/page.tsx    # content hub — video grid by life stage (placeholders)
│   └── plan/page.tsx     # planning tool page
├── components/
│   ├── Header.tsx / Footer.tsx
│   ├── Hero.tsx          # the "Money stuff. And jokes." thesis + three friends
│   ├── LifeStages.tsx    # the six pillars + the dashed "journey line" motif
│   └── SavingsCalculator.tsx  # working savings projector (the first real tool)
└── lib/
    └── stages.ts         # the six life-stage pillars, in one place
```

## Design tokens

Defined in `tailwind.config.ts`:

- `ink` `#17233D` — deep navy, headlines, trust
- `coral` `#FF6A3D` — the "laugh", primary accent / CTAs
- `mint` `#16B27A` — money / growth
- `sun` `#FFC24B` — optimism highlights
- `paper` `#FFFBF4` — warm off-white background
- `lilac` `#EEEBFF` — soft surface tint

Fonts: Bricolage Grotesque (display) + Inter (body), loaded from Google Fonts
with a system-font fallback.

## Next steps (roadmap)

1. Replace the emoji placeholders in `Hero.tsx` with the real three-friends
   cartoon art, and drop real logo art into `Header.tsx`.
2. Connect a headless CMS (Sanity or Contentful) to feed `learn/` real videos
   and articles instead of the placeholder cards.
3. Add more planning tools alongside the savings projector (mortgage
   affordability, debt payoff, car financing) — one per life stage.
4. Add "save your progress", which introduces accounts/auth when you're ready.

## Deploying to AWS (later)

This is a standard Next.js app, so a few clean paths:

- **AWS Amplify Hosting** — easiest. Connect the Git repo, Amplify detects
  Next.js and builds/deploys it, SSR and all. Good default.
- **SST or AWS CDK** — infrastructure-as-code if you want the deploy fully in
  Terraform/CDK style, with the app on Lambda + CloudFront.
- **Static export + S3/CloudFront** — cheapest, but only works if you keep the
  site fully static. The current pages are static; note that adding server-side
  features (auth, saved plans, CMS preview) will need SSR, so Amplify or SST
  ages better.

Given the plan to grow this into an app with saved plans, **Amplify Hosting**
or **SST** are the more future-proof choices over a plain S3 static bucket.

---

_Educational content only. Laughing Wallet does not provide personalized
investment, legal, or tax advice._
