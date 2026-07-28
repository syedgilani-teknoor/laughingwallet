import Link from "next/link";
import Hero from "@/components/Hero";
import LifeStages from "@/components/LifeStages";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LifeStages />

      {/* Planner call-to-action band */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-center gap-6 rounded-xl2 bg-lilac p-10 text-center sm:p-14">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Stop guessing. Start planning.
          </h2>
          <p className="max-w-lg text-ink/70">
            Our first tool shows what steady saving can turn into. Drag a few
            sliders and watch your future add up.
          </p>
          <Link
            href="/plan"
            className="rounded-xl bg-coral px-7 py-3 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            Open the savings planner
          </Link>
        </div>
      </section>
    </>
  );
}
