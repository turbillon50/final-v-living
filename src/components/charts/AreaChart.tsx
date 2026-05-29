"use client";

import { useId } from "react";

/**
 * Pure-SVG area/line chart with gradient fill, cyan stroke and a subtle grid.
 * Responsive via viewBox; theme-aware via CSS vars.
 */
export function AreaChart({
  data,
  height = 200,
  className = "",
}: {
  data: number[];
  height?: number;
  className?: string;
}) {
  const id = useId();
  const W = 600;
  const H = height;
  const pad = 8;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const x = (i: number) =>
    pad + (i / (data.length - 1)) * (W - pad * 2);
  const y = (v: number) =>
    pad + (1 - (v - min) / range) * (H - pad * 2);

  const linePath = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L ${x(data.length - 1).toFixed(1)} ${H - pad} L ${x(0).toFixed(1)} ${H - pad} Z`;

  const gridLines = [0.25, 0.5, 0.75];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={`w-full ${className}`}
      preserveAspectRatio="none"
      role="img"
      aria-label="Gráfica de área"
    >
      <defs>
        <linearGradient id={`area-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0" />
        </linearGradient>
      </defs>
      {gridLines.map((g) => (
        <line
          key={g}
          x1={pad}
          x2={W - pad}
          y1={pad + g * (H - pad * 2)}
          y2={pad + g * (H - pad * 2)}
          stroke="rgb(var(--border) / 0.12)"
          strokeWidth={1}
        />
      ))}
      <path d={areaPath} fill={`url(#area-${id})`} />
      <path
        d={linePath}
        fill="none"
        stroke="rgb(var(--accent))"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={x(data.length - 1)}
        cy={y(data[data.length - 1])}
        r={4}
        fill="rgb(var(--accent))"
      />
    </svg>
  );
}
