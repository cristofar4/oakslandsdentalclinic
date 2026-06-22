"use client";

import { gsap } from "gsap";
import { timeline } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { useGsapContext } from "@/hooks/use-gsap-context";

export function StoryTimeline() {
  const ref = useGsapContext(() => {
    gsap.fromTo(
      ".timeline-line-fill",
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        transformOrigin: "left",
        scrollTrigger: {
          trigger: ".timeline-track",
          start: "top 60%",
          end: "bottom 80%",
          scrub: 0.5,
        },
      }
    );
    gsap.utils.toArray<HTMLElement>(".timeline-node").forEach((node) => {
      gsap.from(node, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: node, start: "top 85%" },
      });
    });
  }, []);

  return (
    <section ref={ref} className="relative bg-white py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Our journey"
          title="A decade of growing smiles"
          highlight="smiles"
          description="From a team of three to Imo State's leading multispecialty clinic — here's how Oaklands took root and flourished."
        />

        {/* Desktop horizontal timeline */}
        <div className="timeline-track relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-[68px] h-0.5 bg-navy/10">
            <div className="timeline-line-fill h-full w-full origin-left bg-gold" />
          </div>
          <div className="grid grid-cols-5 gap-6">
            {timeline.map((item) => (
              <div key={item.year} className="timeline-node relative">
                <div className="font-display text-3xl font-semibold text-gradient-gold">
                  {item.year}
                </div>
                <div className="relative my-6 h-4">
                  <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-gold bg-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-14 space-y-8 lg:hidden">
          {timeline.map((item) => (
            <div key={item.year} className="timeline-node relative pl-8">
              <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-white" />
              <div className="absolute left-[6px] top-5 h-full w-px bg-navy/10" />
              <div className="font-display text-2xl font-semibold text-gradient-gold">
                {item.year}
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
