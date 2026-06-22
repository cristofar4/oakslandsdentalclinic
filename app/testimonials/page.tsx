import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";

import { testimonials } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { StatsBand } from "@/components/home/stats-band";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/shared/reveal";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "Patient Stories",
  description:
    "Read real reviews and testimonials from Oaklands Dental Clinic patients across Owerri and Imo State, rated 4.9 from over 320 reviews.",
};

export default function TestimonialsPage() {
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <>
      <PageHeader
        eyebrow="Patient stories"
        title="Loved by thousands of smiles"
        highlight="Loved"
        description="Our greatest pride is the trust our patients place in us. Here's what they have to say about their Oaklands experience."
        crumbs={[{ label: "Stories" }]}
      />

      {/* Featured quote */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <Reveal>
            <figure className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border/70 bg-ivory/60 p-10 text-center shadow-soft md:p-16">
              <Quote className="mx-auto h-12 w-12 text-gold-300" />
              <div className="mt-6 flex justify-center text-gold-500">
                {[...Array(featured.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed text-navy md:text-3xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-semibold text-navy">{featured.name}</p>
                <p className="text-sm text-muted-foreground">
                  {featured.treatment} · {featured.location}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <StatsBand />

      {/* All testimonials */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="In their words"
            title="Genuine reviews from real patients"
            highlight="Genuine"
            description="Honest experiences from the people who trust us with their smiles every day."
          />

          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((t) => (
              <StaggerItem key={t.name}>
                <figure className="flex h-full flex-col rounded-2xl border border-border/70 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-center justify-between">
                    <div className="flex text-gold-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-gold-200" />
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy/80">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-700 font-display text-sm font-semibold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.treatment} · {t.location}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBand title="Become our next success story" />
    </>
  );
}
