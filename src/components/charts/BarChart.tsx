"use client";

interface Bar {
  label: string;
  value: number;
}

/** Horizontal bars (yield per property). Theme-aware, pure markup. */
export function BarChart({
  bars,
  suffix = "",
}: {
  bars: Bar[];
  suffix?: string;
}) {
  const max = Math.max(...bars.map((b) => b.value)) || 1;
  return (
    <div className="flex flex-col gap-4">
      {bars.map((b) => (
        <div key={b.label} className="flex flex-col gap-1.5">
          <div className="flex justify-between text-label-sm">
            <span className="text-on-surface-variant truncate">{b.label}</span>
            <span className="text-ink font-label-md">
              {b.value}
              {suffix}
            </span>
          </div>
          <div className="h-2 rounded-full fill-subtle overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${(b.value / max) * 100}%`,
                background:
                  "linear-gradient(90deg, rgb(var(--accent) / 0.5), rgb(var(--accent)))",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
