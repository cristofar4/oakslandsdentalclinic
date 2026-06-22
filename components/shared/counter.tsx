"use client";

import { useGsapContext } from "@/hooks/use-gsap-context";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type CounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
};

export function Counter({
  value,
  suffix = "",
  prefix = "",
  className,
  duration = 2,
}: CounterProps) {
  const ref = useGsapContext(
    (ctx) => {
      const el = ctx.self.querySelector(".counter-value");
      if (!el) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctx.self,
          start: "top 88%",
        },
        onUpdate: () => {
          el.textContent = Math.floor(obj.val).toLocaleString("en-US");
        },
      });
    },
    [value],
  );

  return (
    <div ref={ref} className={cn("tabular-nums", className)}>
      <span aria-hidden="true">{prefix}</span>
      <span className="counter-value" aria-hidden="true">
        0
      </span>
      <span aria-hidden="true">{suffix}</span>
      <span className="sr-only">
        {prefix}
        {value.toLocaleString("en-US")}
        {suffix}
      </span>
    </div>
  );
}
