import { PROMISES } from "@/lib/stages";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      {/* The reassurance strip from the bottom of the mock-up. */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-5 text-center font-display font-semibold text-sun">
          {PROMISES.map((p, i) => (
            <span key={p} className="flex items-center gap-6">
              {i > 0 && <span aria-hidden className="text-white/20">|</span>}
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center">
        <div>
          <div className="font-display text-lg font-extrabold">The Laughing Wallet</div>
          <p className="mt-1 max-w-sm text-sm text-white/60">
            Money made simple, and kind of funny. One plan, every goal, a better
            future.
          </p>
        </div>
        <p className="max-w-xs text-xs leading-relaxed text-white/40">
          Educational content only. Laughing Wallet does not provide
          personalized investment, legal, or tax advice. Talk to a licensed
          professional before making financial decisions.
        </p>
      </div>
    </footer>
  );
}
