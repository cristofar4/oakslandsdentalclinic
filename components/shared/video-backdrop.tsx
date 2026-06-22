"use client";

import { useEffect, useRef, useState } from "react";
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
 * poster image. On larger screens with a healthy connection it then fades a
 * looping muted video over the top. On phones, data-saver, or slow networks
 * the video is never downloaded — the poster + gradient keep the hero alive
 * while images and content load fast.
 */
export function VideoBackdrop({
  poster,
  sources = [],
  className,
  overlay = 62,
}: VideoBackdropProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    if (sources.length === 0) return;

    const evaluate = () => {
      const wideEnough = window.matchMedia("(min-width: 1024px)").matches;
      // Respect data-saver and slow connections when the browser exposes them.
      const conn = (
        navigator as Navigator & {
          connection?: { saveData?: boolean; effectiveType?: string };
        }
      ).connection;
      const slow =
        conn?.saveData === true ||
        (conn?.effectiveType
          ? /(^|-)(2g|3g)$/.test(conn.effectiveType)
          : false);
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      setAllowVideo(wideEnough && !slow && !reduced);
    };

    evaluate();
    const mq = window.matchMedia("(min-width: 1024px)");
    mq.addEventListener("change", evaluate);
    return () => mq.removeEventListener("change", evaluate);
  }, [sources.length]);

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

      {/* Looping video — only mounted on capable screens/connections */}
      {allowVideo && sources.length > 0 && (
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
