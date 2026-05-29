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
            className={`px-6 py-2 rounded-full font-label-md text-label-md transition-all ${
              isActive
                ? "bg-primary-fixed text-on-primary-fixed cyan-glow"
                : "border border-white/10 text-secondary hover:border-primary-fixed"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
