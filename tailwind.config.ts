import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Laughing Wallet palette — grounded in the mock-up
        ink: "#17233D",      // deep navy — headlines, trust
        coral: "#FF6A3D",    // the "laugh" — primary accent / CTAs
        mint: "#16B27A",     // money / growth — secondary
        sun: "#FFC24B",      // optimism pops / highlights
        sky: "#2F6BEA",      // bright blue — the banner's second colour
        paper: "#FFFBF4",    // warm off-white page background
        lilac: "#EEEBFF",    // soft surface tint (echoes the sparkles)
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(23, 35, 61, 0.18)",
        lift: "0 18px 40px -14px rgba(23, 35, 61, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
