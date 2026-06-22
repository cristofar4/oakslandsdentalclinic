"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { TextReveal } from "./text-reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  highlight?: string;
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  highlight,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-xl",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className={cn("eyebrow", light && "text-gold-300")}>
            <span className="h-px w-6 bg-gold/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <TextReveal
        as="h2"
        text={title}
        highlight={highlight}
        className={cn(
          "text-fluid-h2 font-semibold leading-[1.05]",
          light && "text-white"
        )}
      />
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-base md:text-lg leading-relaxed",
              light ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
