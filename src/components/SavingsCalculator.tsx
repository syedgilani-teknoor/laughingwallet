"use client";

import { useMemo, useState } from "react";

const CAD = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

// Compound growth with regular monthly contributions.
function project(
  start: number,
  monthly: number,
  years: number,
  annualRatePct: number
) {
  const months = years * 12;
  const r = annualRatePct / 100 / 12;
  let balance = start;
  let contributed = start;
  for (let i = 0; i < months; i++) {
    balance = balance * (1 + r) + monthly;
    contributed += monthly;
  }
  return { balance, contributed, growth: balance - contributed };
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}) {
  return (
    <label className="block">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-medium text-ink/70">{label}</span>
        <span className="font-display text-sm font-bold text-ink">
          {suffix === "%" ? `${value}%` : CAD.format(value)}
          {suffix && suffix !== "%" ? ` ${suffix}` : ""}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-coral"
      />
    </label>
  );
}

export default function SavingsCalculator() {
  const [start, setStart] = useState(1000);
  const [monthly, setMonthly] = useState(300);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(6);

  const result = useMemo(
    () => project(start, monthly, years, rate),
    [start, monthly, years, rate]
  );

  return (
    <div className="grid gap-8 rounded-xl2 border border-ink/5 bg-white p-6 shadow-card sm:p-8 lg:grid-cols-2">
      <div className="space-y-6">
        <Field
          label="Starting amount"
          value={start}
          onChange={setStart}
          min={0}
          max={50000}
          step={500}
        />
        <Field
          label="Monthly contribution"
          value={monthly}
          onChange={setMonthly}
          min={0}
          max={3000}
          step={25}
        />
        <Field
          label="Years of saving"
          value={years}
          onChange={setYears}
          min={1}
          max={40}
          step={1}
          suffix="yrs"
        />
        <Field
          label="Estimated annual return"
          value={rate}
          onChange={setRate}
          min={0}
          max={12}
          step={0.5}
          suffix="%"
        />
      </div>

      <div className="flex flex-col justify-center rounded-xl bg-ink p-8 text-center text-white">
        <p className="text-sm uppercase tracking-wide text-white/60">
          In {years} years you could have
        </p>
        <p className="my-2 font-display text-4xl font-extrabold text-sun sm:text-5xl">
          {CAD.format(Math.round(result.balance))}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-left">
          <div className="rounded-lg bg-white/5 p-3">
            <p className="text-xs text-white/60">You put in</p>
            <p className="font-display font-bold">
              {CAD.format(Math.round(result.contributed))}
            </p>
          </div>
          <div className="rounded-lg bg-white/5 p-3">
            <p className="text-xs text-white/60">Growth earned</p>
            <p className="font-display font-bold text-mint">
              {CAD.format(Math.round(result.growth))}
            </p>
          </div>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-white/40">
          Estimate only. Returns are not guaranteed and this is not financial
          advice.
        </p>
      </div>
    </div>
  );
}
