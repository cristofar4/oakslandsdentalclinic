"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { SmartImage } from "@/components/shared/smart-image";

type BeforeAfterSliderProps = {
  image: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

/**
 * Interactive before/after comparison. Uses one source image for both sides
 * and simulates the "before" state with a CSS filter (duller, warmer, dimmer),
 * so the comparison always renders even when only a single photo is available.
 */
export function BeforeAfterSlider({
  image,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-border/70 shadow-soft",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      role="slider"
      aria-label="Drag to compare before and after"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
      }}
    >
      {/* After (base, bright and vivid) */}
      <SmartImage
        src={image}
        alt={afterLabel}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover [filter:saturate(1.08)_contrast(1.04)_brightness(1.03)]"
      />
      <span className="absolute right-4 top-4 z-10 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {afterLabel}
      </span>

      {/* Before (clipped, dulled with a CSS filter) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <SmartImage
          src={image}
          alt={beforeLabel}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover [filter:sepia(0.45)_saturate(0.75)_brightness(0.82)_contrast(0.95)]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-navy backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-20 flex items-center"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(11,36,71,0.15)]" />
        <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gold text-navy-950 shadow-glow transition-transform group-hover:scale-110">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
