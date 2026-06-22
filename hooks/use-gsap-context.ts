"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scopes GSAP animations to a container and cleans them up automatically.
 * Respects prefers-reduced-motion by skipping the animation callback.
 */
export function useGsapContext(
  callback: (ctx: { self: HTMLElement }) => void,
  deps: React.DependencyList = [],
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      // Make sure anything hidden for animation becomes visible.
      el.querySelectorAll<HTMLElement>(".reveal-hidden").forEach((node) => {
        node.style.opacity = "1";
        node.style.transform = "none";
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => callback({ self: el }), el);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
