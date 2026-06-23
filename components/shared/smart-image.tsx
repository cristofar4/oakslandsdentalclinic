"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/brand/logo";

type SmartImageProps = ImageProps & {
  /** Optional wrapper class when used with `fill`. */
  wrapperClassName?: string;
};

// Tiny inline gradient shown (blurred) while the real image streams in, so
// there is never an empty box — images feel instant even on slow connections.
const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMCcgaGVpZ2h0PScxNCc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSdnJyB4MT0nMCcgeTE9JzAnIHgyPScxJyB5Mj0nMSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nI2VlZjJmOScvPjxzdG9wIG9mZnNldD0nNTUlJyBzdG9wLWNvbG9yPScjZDZlMGYwJy8+PHN0b3Agb2Zmc2V0PScxMDAlJyBzdG9wLWNvbG9yPScjYWVjMWUwJy8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9JzIwJyBoZWlnaHQ9JzE0JyBmaWxsPSd1cmwoJTIzZyknLz48L3N2Zz4=";

// Deterministic seed from the alt/src so a given slot always falls back to the
// same photo (stable across reloads) but different slots differ.
function seedFrom(value: unknown, fallback: string) {
  const str = typeof value === "string" && value ? value : fallback;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash.toString(36);
}

/**
 * Image wrapper with three layers of resilience:
 *  1. A blurred gradient placeholder while the real image streams in.
 *  2. If the primary (e.g. Unsplash) image fails, fall back to a guaranteed
 *     real photo (Lorem Picsum, deterministic per slot) so nothing is ever
 *     blank — even when a source URL is wrong or a host is unreachable.
 *  3. If even that fails (offline), show an on-brand gradient mark.
 */
export function SmartImage({
  className,
  wrapperClassName,
  alt,
  src,
  onError,
  placeholder,
  blurDataURL,
  quality,
  ...props
}: SmartImageProps) {
  // 0 = primary, 1 = real-photo fallback, 2 = branded placeholder
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  if (stage === 2) {
    return (
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-ivory via-white to-navy-50",
          wrapperClassName,
        )}
        aria-label={typeof alt === "string" ? alt : undefined}
        role="img"
      >
        <span className="pointer-events-none absolute inset-0 bg-grid-navy opacity-[0.05] [background-size:26px_26px]" />
        <LogoMark className="h-16 w-16 opacity-25" />
      </span>
    );
  }

  if (stage === 1) {
    const seed = seedFrom(alt, typeof src === "string" ? src : "oaklands");
    // Plain <img> to a host that returns a real photo for any seed — bypasses
    // the Next optimizer so it loads directly in the browser.
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://picsum.photos/seed/${seed}/1100/825?grayscale`}
        alt={typeof alt === "string" ? alt : ""}
        loading="lazy"
        decoding="async"
        onError={() => setStage(2)}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
      />
    );
  }

  return (
    <Image
      alt={alt}
      src={src}
      className={className}
      quality={quality ?? 68}
      placeholder={placeholder ?? "blur"}
      blurDataURL={blurDataURL ?? BLUR_PLACEHOLDER}
      onError={(e) => {
        setStage(1);
        onError?.(e);
      }}
      {...props}
    />
  );
}
