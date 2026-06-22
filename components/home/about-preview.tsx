import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight, BadgeCheck } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { TextReveal } from "@/components/shared/text-reveal";
import { Parallax } from "@/components/shared/parallax";

const points = [
  "Founded in 2015 by Dr. David Wilfred",
  "A multispecialty team of 16+ clinicians",
  "Modern technology, gentle technique",
];

export function AboutPreview() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visuals */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <Parallax offset={40} className="mt-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80"
                  alt="Bright, healthy smile"
                  fill
                  sizes="(max-width: 1024px) 45vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
            <Parallax offset={-40}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80"
                  alt="Calm, modern dental treatment room"
                  fill
                  sizes="(max-width: 1024px) 45vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
          </div>

          {/* Experience badge */}
          <Reveal>
            <div className="glass absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-2xl px-6 py-4 shadow-glow">
              <div className="font-display text-4xl font-semibold text-gradient-gold">
                10+
              </div>
              <div className="text-sm leading-tight text-navy">
                <p className="font-semibold">Years of</p>
                <p className="text-muted-foreground">trusted dentistry</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div>
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/60" /> Our story
          </span>
          <TextReveal
            as="h2"
            text="Where world-class dentistry meets genuine care."
            highlight="care."
            className="mt-5 text-fluid-h2 font-semibold leading-[1.08]"
          />

          <Reveal delay={0.1}>
            <div className="mt-6 rounded-2xl border-l-2 border-gold bg-ivory/60 p-6">
              <Quote className="h-6 w-6 text-gold-400" />
              <p className="mt-3 font-display text-lg italic leading-relaxed text-navy/90">
                &ldquo;{site.legalName} began with a simple yet powerful mission:
                to improve smiles, restore confidence, and relieve dental pain.&rdquo;
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              What started as a modest practice of three has blossomed into Imo
              State&apos;s most trusted dental destination — serving over 20,000
              patients with care that feels personal, precise and reassuringly
              gentle.
            </p>
          </Reveal>

          <ul className="mt-7 space-y-3">
            {points.map((point, i) => (
              <Reveal key={point} delay={0.2 + i * 0.07}>
                <li className="flex items-center gap-3 text-navy">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-teal-500" />
                  <span className="font-medium">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.4}>
            <Button asChild className="mt-9">
              <Link href="/about">
                Discover our journey <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
