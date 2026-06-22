"use client";

import { gsap } from "gsap";
import { process } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { useGsapContext } from "@/hooks/use-gsap-context";

export function ProcessSection() {
  const ref = useGsapContext((ctx) => {
    gsap.fromTo(
      ".process-progress",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top",
        scrollTrigger: {
          trigger: ".process-track",
          start: "top 70%",
          end: "bottom 70%",
          scrub: 0.6,
        },
      }
    );

    gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
      gsap.from(step, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: step, start: "top 82%" },
      });
      const dot = step.querySelector(".process-dot");
      if (dot) {
        gsap.fromTo(
          dot,
          { scale: 0.4, backgroundColor: "#d6e0f0" },
          {
            scale: 1,
            backgroundColor: "#C9A24B",
            duration: 0.4,
            scrollTrigger: { trigger: step, start: "top 70%" },
          }
        );
      }
    });
  }, []);

  return (
    <section ref={ref} className="relative bg-ivory py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="The experience"
          title="Your journey to a confident smile"
          highlight="confident"
          description="Four considered steps designed around your comfort — clear, calm and entirely tailored to you."
        />

        <div className="process-track relative mx-auto mt-16 max-w-3xl">
          {/* Vertical track */}
          <div className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-0.5 bg-navy/10 md:left-1/2 md:-translate-x-1/2">
            <div className="process-progress h-full w-full origin-top bg-gold" />
          </div>

          <div className="space-y-12">
            {process.map((item, i) => (
              <div
                key={item.step}
                className={`process-step relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[27px] top-1 z-10 -translate-x-1/2 md:left-1/2">
                  <div className="process-dot flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gold ring-4 ring-ivory" />
                </div>

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
                  }`}
                >
                  <span className="font-display text-5xl font-semibold text-navy/10">
                    {item.step}
                  </span>
                  <h3 className="-mt-4 font-display text-2xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
