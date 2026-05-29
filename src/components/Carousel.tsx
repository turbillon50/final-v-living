"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Icon } from "./Icon";

interface CarouselProps {
  children: React.ReactNode;
  /** Tailwind width classes applied to each item wrapper. */
  itemClassName?: string;
  className?: string;
  gapClassName?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayMs?: number;
  ariaLabel?: string;
}

export function Carousel({
  children,
  itemClassName = "min-w-[80%] sm:min-w-[340px]",
  className = "",
  gapClassName = "gap-gutter",
  showArrows = true,
  showDots = false,
  autoplay = false,
  autoplayMs = 5000,
  ariaLabel,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Drag-to-scroll (pointer events)
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const updateActive = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    children.forEach((c, i) => {
      const cCenter = c.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(cCenter - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  const scrollByDir = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  }, []);

  const scrollToIndex = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (child) {
      el.scrollTo({ left: child.offsetLeft - 8, behavior: "smooth" });
    }
  }, []);

  // Autoplay
  useEffect(() => {
    if (!autoplay || paused) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const atEnd =
        el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByDir(1);
      }
    }, autoplayMs);
    return () => clearInterval(id);
  }, [autoplay, autoplayMs, paused, scrollByDir]);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label={ariaLabel}
    >
      <div
        ref={trackRef}
        onScroll={updateActive}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={(e) => {
          // Swallow click if it was a drag, so links don't fire on swipe.
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
        className={`flex ${gapClassName} overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth pb-2 cursor-grab active:cursor-grabbing select-none`}
      >
        {items.map((child, i) => (
          <div key={i} className={`snap-start shrink-0 ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>

      {showArrows && items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scrollByDir(-1)}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full glass text-ink opacity-0 group-hover:opacity-100 transition-opacity hover:scale-105 active:scale-95"
          >
            <Icon name="chevron_left" />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => scrollByDir(1)}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full glass text-ink opacity-0 group-hover:opacity-100 transition-opacity hover:scale-105 active:scale-95"
          >
            <Icon name="chevron_right" />
          </button>
        </>
      )}

      {showDots && items.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir al elemento ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                active === i
                  ? "w-6 bg-accent"
                  : "w-1.5 fill-subtle-2 hover:bg-accent/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
