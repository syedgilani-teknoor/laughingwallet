import Link from "next/link";
import Image from "next/image";
import { STAGES, PROMISES } from "@/lib/stages";

// Accent tints for the goal-icon badges.
const BADGE: Record<string, string> = {
  coral: "bg-coral/10",
  mint: "bg-mint/10",
  sun: "bg-sun/20",
  ink: "bg-lilac",
};

// A single goal-icon badge with its label. `side` decides which way the
// dashed connector points (toward the friends in the centre).
function GoalBadge({
  emoji,
  title,
  accent,
  side,
}: {
  emoji: string;
  title: string;
  accent: string;
  side: "left" | "right";
}) {
  const connector = (
    <div className="relative hidden h-4 flex-1 lg:block">
      <div
        className={`connector absolute inset-x-0 top-1/2 -translate-y-1/2 ${
          side === "left" ? "to-center-right" : "to-center-left"
        }`}
      />
      <span
        className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-coral ${
          side === "left" ? "bead-right" : "bead-left"
        }`}
      />
    </div>
  );

  const badge = (
    <div className="flex w-28 shrink-0 flex-col items-center text-center">
      <div
        className={`float grid h-16 w-16 place-items-center rounded-full text-3xl shadow-card ${BADGE[accent]}`}
      >
        {emoji}
      </div>
      <span className="mt-2 text-xs font-semibold leading-tight text-ink/80">
        {title}
      </span>
    </div>
  );

  return (
    <div className="flex items-center gap-2">
      {side === "left" ? (
        <>
          {badge}
          {connector}
        </>
      ) : (
        <>
          {connector}
          {badge}
        </>
      )}
    </div>
  );
}

export default function Hero() {
  const left = STAGES.slice(0, 3);
  const right = STAGES.slice(3, 6);

  return (
    <section className="relative overflow-hidden pt-10">
      {/* Twinkling sparkles, scattered like the mock-up. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="twinkle absolute left-[6%] top-24 text-xl text-sky">✦</span>
        <span className="twinkle absolute right-[8%] top-40 text-lg text-lilac" style={{ animationDelay: "0.6s" }}>✦</span>
        <span className="twinkle absolute left-[14%] bottom-24 text-lg text-mint/50" style={{ animationDelay: "1.2s" }}>✦</span>
        <span className="twinkle absolute right-[16%] bottom-16 text-xl text-sun" style={{ animationDelay: "0.3s" }}>✦</span>
      </div>

      {/* Rotating sun, top-right like the poster. */}
      <div aria-hidden className="pointer-events-none absolute right-[22%] top-6 hidden lg:block">
        <svg width="70" height="70" viewBox="0 0 70 70">
          <g className="spin-rays" style={{ transformOrigin: "35px 35px" }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <rect
                key={i}
                x="34"
                y="2"
                width="2"
                height="10"
                rx="1"
                fill="#FFC24B"
                transform={`rotate(${i * 30} 35 35)`}
              />
            ))}
          </g>
          <circle cx="35" cy="35" r="15" fill="#FFC24B" />
        </svg>
      </div>

      {/* Headline — the poster's title. */}
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-ink/60 sm:text-base">
          Three friends, one goal:
        </p>
        <h1 className="mt-1 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
          Cartoon Finance <span className="text-coral">&amp; Laughs</span>
        </h1>
      </div>

      {/* Poster body: icons flank the central cast (desktop). */}
      <div className="relative mx-auto mt-10 hidden max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 lg:grid">
        <div className="flex flex-col gap-6">
          {left.map((s) => (
            <GoalBadge key={s.slug} emoji={s.emoji} title={s.title} accent={s.accent} side="left" />
          ))}
        </div>

        <CenterStage />

        <div className="flex flex-col gap-6">
          {right.map((s) => (
            <GoalBadge key={s.slug} emoji={s.emoji} title={s.title} accent={s.accent} side="right" />
          ))}
        </div>
      </div>

      {/* Mobile: cast on top, goals in a grid below. */}
      <div className="mt-8 px-5 lg:hidden">
        <CenterStage />
        <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4">
          {STAGES.map((s) => (
            <div key={s.slug} className="flex flex-col items-center text-center">
              <div className={`float grid h-14 w-14 place-items-center rounded-full text-2xl shadow-card ${BADGE[s.accent]}`}>
                {s.emoji}
              </div>
              <span className="mt-2 text-[11px] font-semibold leading-tight text-ink/80">
                {s.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gold promise strip along the bottom, like the poster. */}
      <div className="mt-14 bg-sun/90">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-5 py-3 text-center font-display text-sm font-bold text-ink sm:text-base">
          <span aria-hidden>💙</span>
          {PROMISES.map((p, i) => (
            <span key={p} className="flex items-center gap-5">
              {i > 0 && <span aria-hidden className="text-ink/30">|</span>}
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// The central "cast" + video banner + tagline + calls to action.
function CenterStage() {
  return (
    <div className="mx-auto w-full max-w-md text-center">
      {/* The three friends — cropped from the original mock-up art and
          floated gently. Swap friends.png for final illustration anytime. */}
      <div className="float mx-auto w-full max-w-sm">
        <Image
          src="/friends.png"
          alt="The three Laughing Wallet friends cheering"
          width={452}
          height={348}
          priority
          className="mx-auto h-auto w-full"
        />
      </div>

      {/* The two-tone video banner with a shine sweep. */}
      <div className="relative mt-6 overflow-hidden rounded-xl2 bg-white px-6 py-4 shadow-card">
        <div className="shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />
        <p className="font-display text-sm font-extrabold uppercase tracking-wide text-sun sm:text-base">
          Short cartoon videos:
        </p>
        <p className="font-display text-lg font-extrabold uppercase tracking-tight text-sky sm:text-xl">
          Finance stuff <span className="text-coral">+</span> jokes!
        </p>
      </div>

      <p className="mt-4 font-display text-base font-bold text-ink sm:text-lg">
        One plan. Every goal. A better future. <span aria-hidden>💙</span>
      </p>

      {/* Real navigation — keeps it a working site, not just a poster. */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/plan"
          className="rounded-xl bg-coral px-6 py-3 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
        >
          Try the savings planner
        </Link>
        <Link
          href="/learn"
          className="rounded-xl border border-ink/15 bg-white px-6 py-3 font-semibold text-ink transition hover:bg-lilac"
        >
          Watch the videos
        </Link>
      </div>
    </div>
  );
}
