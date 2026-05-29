"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n";

// May 2026 starts on a Friday. Lightweight interactive range picker for the demo.
const DAYS = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
const FIRST_WEEKDAY = 5; // Friday
const DAYS_IN_MONTH = 31;
const BOOKED = new Set([8, 9, 10, 28, 29]); // unavailable demo days

export function AvailabilityCalendar() {
  const { t } = useT();
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
                booked ? "text-on-surface-variant/30 line-through cursor-not-allowed" : "text-on-surface hover:fill-subtle",
                within && !isStart && !isEnd ? "bg-accent/30 text-ink" : "",
                isStart ? "bg-accent text-on-primary font-bold rounded-l-full" : "",
                isEnd ? "bg-accent text-on-primary font-bold rounded-r-full" : "",
                isStart && range.end === null ? "rounded-full" : "",
              ].join(" ")}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
        <Field label={t("cal.checkIn")} value={fmt(range.start)} />
        <Field label={t("cal.checkOut")} value={fmt(range.end)} />
        <Field label={t("cal.guests")} value={t("cal.guestsValue")} />
        <div className="flex items-center md:justify-end">
          <button
            onClick={() => setRange({ start: null, end: null })}
            className="h-11 px-6 fill-subtle hover:fill-subtle-2 rounded-full font-label-sm text-label-sm transition-colors text-ink"
          >
            {t("cal.reset")}
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
