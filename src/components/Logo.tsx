"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

/**
 * Official V·Living lockup.
 *
 * Renders the brand asset from /logo.svg (falling back to /logo.png). If neither
 * file is present yet, it degrades to a refined chrome wordmark "V·Living" with a
 * small "FRACTIONAL OWNERSHIP" sublabel — so the demo never shows a broken image.
 * The user can drop the real file at public/logo.svg to swap it in with zero code
 * changes.
 */
export function Logo({
  className = "",
  showLockup = true,
  imgClassName = "h-9 w-auto",
}: {
  className?: string;
  showLockup?: boolean;
  imgClassName?: string;
}) {
  // "svg" -> try png -> "wordmark" fallback.
  const [stage, setStage] = useState<"svg" | "png" | "wordmark">("svg");

  if (stage !== "wordmark") {
    const src = stage === "svg" ? "/logo.svg" : "/logo.png";
    return (
      <span className={`inline-flex items-center ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${SITE.name} · ${SITE.lockup}`}
          className={imgClassName}
          onError={() => setStage(stage === "svg" ? "png" : "wordmark")}
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-display text-[26px] tracking-tight v-gradient-text leading-none">
        V·Living
      </span>
      {showLockup && (
        <span className="text-[8px] font-bold tracking-[0.32em] text-on-surface-variant uppercase mt-0.5">
          {SITE.lockup}
        </span>
      )}
    </span>
  );
}
