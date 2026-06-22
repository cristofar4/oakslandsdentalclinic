"use client";

import { useGsapContext } from "@/hooks/use-gsap-context";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { type ElementType } from "react";

type TextRevealProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  highlight?: string;
};

/**
 * Word-by-word GSAP reveal with a soft mask. The full text remains in the DOM
 * for SEO and is split into spans on the client only.
 */
export function TextReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  highlight,
}: TextRevealProps) {
  const ref = useGsapContext(
    (ctx) => {
      const words = ctx.self.querySelectorAll(".tr-word > span");
      gsap.set(words, { yPercent: 120 });
      gsap.to(words, {
        yPercent: 0,
        duration: 0.9,
        delay,
        ease: "power4.out",
        stagger: 0.045,
        scrollTrigger: {
          trigger: ctx.self,
          start: "top 85%",
        },
      });
    },
    [text],
  );

  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={cn("text-balance", className)}>
      {words.map((word, i) => {
        const isHighlight = highlight
          ? highlight
              .toLowerCase()
              .includes(word.toLowerCase().replace(/[.,]/g, ""))
          : false;
        return (
          <span
            key={`${word}-${i}`}
            className="tr-word inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
          >
            <span
              className={cn(
                "inline-block will-change-transform",
                isHighlight && "text-gradient-gold",
              )}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
