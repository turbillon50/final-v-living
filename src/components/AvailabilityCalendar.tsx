"use client";

import { useState } from "react";

// May 2026 starts on a Friday. Lightweight interactive range picker for the demo.
const DAYS = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
const FIRST_WEEKDAY = 5; // Friday
const DAYS_IN_MONTH = 31;
const BOOKED = new Set([8, 9, 10, 28, 29]); // unavailable demo days

export function AvailabilityCalendar() {
  const [range, setRange] = useState<{ start: number | null; end: number | null }>({
    start: 20,
    end: 25,
  });

  const handleClick = (day: number) => {
    if (BOOKED.has(day)) return;
    setRange((prev) => {
      if (prev.start === null || prev.end !== null) {
        return { start: day, end: null };
      }
      if (day < prev.start) return { start: day, end: null };
      return { start: prev.start, end: day };
    });
  };

  const inRange = (day: number) =>
    range.start !== null &&
    range.end !== null &&
    day >= range.start &&
    day <= range.end;

  const cells: (number | null)[] = [
    ...Array(FIRST_WEEKDAY).fill(null),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
  ];

  const fmt = (d: number | null) =>
    d ? `${d} May, 2026` : "—";

  return (
    <div className="glass-panel rounded-2xl p-6 overflow-hidden">
      <div className="grid grid-cols-7 gap-1 text-center font-label-sm text-label-sm text-on-surface-variant mb-4">
        {DAYS.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {cells.map((day, i) => {
          if (day === null) return <div key={`e-${i}`} />;
          const booked = BOOKED.has(day);
          const isStart = day === range.start;
          const isEnd = day === range.end;
          const within = inRange(day);
          return (
            <button
              key={day}
              disabled={booked}
              onClick={() => handleClick(day)}
              className={[
                "h-10 flex items-center justify-center rounded-lg text-sm transition-colors",
                booked ? "text-secondary/20 line-through cursor-not-allowed" : "text-secondary hover:bg-white/5",
                within && !isStart && !isEnd ? "bg-primary-container/60 text-on-primary-fixed" : "",
                isStart ? "bg-primary-container text-on-primary-fixed font-bold rounded-l-full" : "",
                isEnd ? "bg-primary-container text-on-primary-fixed font-bold rounded-r-full" : "",
                isStart && range.end === null ? "rounded-full" : "",
              ].join(" ")}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/5">
        <Field label="Check-in" value={fmt(range.start)} />
        <Field label="Check-out" value={fmt(range.end)} />
        <Field label="Huéspedes" value="6 Personas" />
        <div className="flex items-center md:justify-end">
          <button
            onClick={() => setRange({ start: null, end: null })}
            className="h-10 px-6 bg-white/5 hover:bg-white/10 rounded-full font-label-sm text-label-sm transition-colors"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="font-label-sm text-label-sm text-on-surface-variant">{label}</p>
      <p className="font-label-md text-label-md text-primary">{value}</p>
    </div>
  );
}
