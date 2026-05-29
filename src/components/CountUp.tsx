"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Count-up animation on mount. `format` lets callers render currency/percent.
 */
export function CountUp({
  to,
  duration = 1200,
  decimals = 0,
  format,
  className = "",
}: {
  to: number;
  duration?: number;
  decimals?: number;
  format?: (v: number) => string;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>();

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(to * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [to, duration]);

  const display = format
    ? format(value)
    : value.toLocaleString("es-MX", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

  return <span className={className}>{display}</span>;
}
