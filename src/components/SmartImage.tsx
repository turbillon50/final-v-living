"use client";

import { useState } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Wrapper class — defaults to absolute fill so it covers a positioned parent. */
  wrapperClassName?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
}

/**
 * Premium image with a gradient skeleton while loading and a branded gradient
 * placeholder on error. Never shows a broken-image icon.
 */
export function SmartImage({
  src,
  alt,
  className = "",
  wrapperClassName,
  loading = "lazy",
}: SmartImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  return (
    <span
      className={
        wrapperClassName ??
        "absolute inset-0 block w-full h-full overflow-hidden"
      }
    >
      {/* Skeleton / placeholder layer */}
      {status !== "loaded" && (
        <span
          aria-hidden
          className="absolute inset-0 block animate-pulse"
          style={{
            background:
              "linear-gradient(135deg, rgb(var(--surface-2)) 0%, rgb(var(--surface)) 55%, rgb(var(--surface-3)) 100%)",
          }}
        >
          {status === "error" && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className="material-symbols-outlined select-none"
                style={{
                  color: "rgb(var(--accent) / 0.5)",
                  fontSize: 40,
                  fontVariationSettings:
                    "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 40",
                }}
                aria-hidden
              >
                villa
              </span>
            </span>
          )}
        </span>
      )}

      {status !== "error" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`${className} transition-opacity duration-700 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </span>
  );
}
