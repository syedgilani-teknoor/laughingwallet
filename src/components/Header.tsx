import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Laughing Wallet home">
          {/* Simple wallet-with-a-wink mark. Swap for a real logo later. */}
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-lg"
          >
            👛
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            Laughing Wallet
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/learn"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink/70 transition hover:bg-lilac hover:text-ink"
          >
            Watch &amp; Learn
          </Link>
          <Link
            href="/plan"
            className="rounded-lg bg-coral px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:brightness-105"
          >
            Start planning
          </Link>
        </nav>
      </div>
    </header>
  );
}
