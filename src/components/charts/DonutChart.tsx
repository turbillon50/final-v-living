"use client";

interface Segment {
  label: string;
  value: number;
  color: string;
}

/** Pure-SVG donut chart with center label. Theme-aware. */
export function DonutChart({
  segments,
  size = 180,
  thickness = 22,
  centerLabel,
  centerSub,
}: {
  segments: Segment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerSub?: string;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgb(var(--border) / 0.12)"
            strokeWidth={thickness}
          />
          {segments.map((seg, i) => {
            const frac = seg.value / total;
            const dash = frac * c;
            const el = (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth={thickness}
                strokeDasharray={`${dash} ${c - dash}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            );
            offset += dash;
            return el;
          })}
        </svg>
        {(centerLabel || centerSub) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            {centerLabel && (
              <span className="font-display-md text-headline-lg text-ink leading-none">
                {centerLabel}
              </span>
            )}
            {centerSub && (
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                {centerSub}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2 text-label-sm">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: seg.color }}
            />
            <span className="text-on-surface-variant flex-1 truncate">
              {seg.label}
            </span>
            <span className="text-ink font-label-md">
              {Math.round((seg.value / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
