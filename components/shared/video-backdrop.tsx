"use client";

import { useRef, useState } from "react";
import { SmartImage } from "@/components/shared/smart-image";
import { cn } from "@/lib/utils";

type VideoBackdropProps = {
  poster: string;
  sources?: string[];
  className?: string;
  /** 0-100 darkness of the navy overlay for text legibility. */
  overlay?: number;
};

/**
 * Cinematic hero background. Always renders an animated gradient + a slow-zoom
 * poster image, then fades a looping muted video over the top once it can
 * play. If the video can't load, the hero still feels alive.
 */
export function VideoBackdrop({
  poster,
  sources = [],
  className,
  overlay = 62,
}: VideoBackdropProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Animated gradient base (always visible, never depends on network) */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute -inset-[20%] opacity-70">
        <div className="absolute left-[10%] top-[10%] h-[55%] w-[55%] animate-float rounded-full bg-teal/30 blur-[120px]" />
        <div className="absolute right-[8%] top-[20%] h-[50%] w-[50%] animate-float rounded-full bg-gold/25 blur-[120px] [animation-delay:1.5s]" />
        <div className="absolute bottom-[5%] left-[30%] h-[45%] w-[45%] animate-float rounded-full bg-navy-400/40 blur-[120px] [animation-delay:3s]" />
      </div>

      {/* Slow-zoom poster photo */}
      <div className="absolute inset-0 origin-center animate-[float_18s_ease-in-out_infinite] scale-110">
        <SmartImage
          src={poster}
          alt=""
          fill
          priority
          quality={55}
          sizes="100vw"
          className="object-cover opacity-80"
        />
      </div>

      {/* Looping video, fades in when playable */}
      {sources.length > 0 && (
        <video
          ref={ref}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
            ready ? "opacity-90" : "opacity-0",
          )}
        >
          {sources.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
      )}

      {/* Legibility overlays */}
      <div
        className="absolute inset-0 bg-navy-950"
        style={{ opacity: overlay / 100 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/60" />
      <div className="absolute inset-0 bg-grid-navy opacity-[0.08] [background-size:42px_42px]" />
    </div>
  );
}
