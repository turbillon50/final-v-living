"use client";

import { useState } from "react";

export function FilterChips({
  options,
  onChange,
}: {
  options: string[];
  onChange?: (value: string) => void;
}) {
  const [active, setActive] = useState(options[0]);

  return (
    <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 whitespace-nowrap">
      {options.map((opt) => {
        const isActive = opt === active;
        return (
          <button
            key={opt}
            onClick={() => {
              setActive(opt);
              onChange?.(opt);
            }}
            className={`px-6 py-2 min-h-[44px] rounded-full font-label-md text-label-md transition-all ${
              isActive
                ? "bg-accent text-on-primary cyan-glow"
                : "border border-border text-on-surface-variant hover:border-accent"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
