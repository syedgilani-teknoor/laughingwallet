import type { Metadata } from "next";
import SavingsCalculator from "@/components/SavingsCalculator";

export const metadata: Metadata = {
  title: "Savings planner — The Laughing Wallet",
  description:
    "See what steady monthly saving could grow into over time. A simple, no-signup savings projector.",
};

export default function PlanPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 inline-flex rounded-full bg-mint/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint">
          Planning tool
        </p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          What could your savings become?
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Move the sliders to match your situation. No account, no email, no
          catch — just a quick look at the power of saving a little, often.
        </p>
      </div>

      <SavingsCalculator />
    </section>
  );
}
