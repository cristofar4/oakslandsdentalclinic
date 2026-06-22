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

/**
 * next/image wrapper that (1) shows a blurred placeholder while loading so
 * images feel instant, and (2) degrades to an on-brand gradient if a remote
 * image fails (404, blocked host, etc.) instead of a broken-image icon.
 */
export function SmartImage({
  className,
  wrapperClassName,
  alt,
  onError,
  placeholder,
  blurDataURL,
  quality,
  ...props
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
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

  return (
    <Image
      alt={alt}
      className={className}
      quality={quality ?? 68}
      placeholder={placeholder ?? "blur"}
      blurDataURL={blurDataURL ?? BLUR_PLACEHOLDER}
      onError={(e) => {
        setFailed(true);
        onError?.(e);
      }}
      {...props}
    />
  );
}
