"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/brand/logo";

type SmartImageProps = ImageProps & {
  /** Optional wrapper class when used with `fill`. */
  wrapperClassName?: string;
};

/**
 * next/image wrapper that degrades gracefully: if a remote image fails to
 * load (404, blocked host, etc.) it swaps to an on-brand gradient placeholder
 * instead of a broken-image icon. Keeps the premium look even offline.
 */
export function SmartImage({
  className,
  wrapperClassName,
  alt,
  onError,
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
      onError={(e) => {
        setFailed(true);
        onError?.(e);
      }}
      {...props}
    />
  );
}
