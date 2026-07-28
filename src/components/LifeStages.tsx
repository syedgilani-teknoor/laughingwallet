import Link from "next/link";
import { STAGES } from "@/lib/stages";

const ACCENT: Record<string, string> = {
  coral: "bg-coral/10 text-coral",
  mint: "bg-mint/10 text-mint",
  sun: "bg-sun/20 text-ink",
  ink: "bg-ink/5 text-ink",
};

export default function LifeStages() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16" id="stages">
      <div className="mb-3 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Wherever you are, we&apos;ve got a plan for it
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Pick the milestone you&apos;re facing. Each one comes with videos and a
          planner built for exactly that moment.
        </p>
      </div>

      {/* The signature journey line threading the stages together. */}
      <div aria-hidden className="journey-line mx-auto my-8 h-3 max-w-3xl" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {STAGES.map((stage) => (
          <Link
            key={stage.slug}
            href={`/learn#${stage.slug}`}
            className="group rounded-xl2 border border-ink/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span
              className={`mb-4 inline-grid h-12 w-12 place-items-center rounded-xl text-2xl ${ACCENT[stage.accent]}`}
            >
              {stage.emoji}
            </span>
            <h3 className="font-display text-xl font-bold text-ink">
              {stage.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              {stage.blurb}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-coral">
              Explore
              <span aria-hidden className="transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
