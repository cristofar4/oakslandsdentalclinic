import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCarousel } from "@/components/shared/testimonial-carousel";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function TestimonialsPreview() {
  return (
    <section className="relative bg-ivory py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <div className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
              <div className="flex text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gold-700">
                4.9 average from 320+ reviews
              </span>
            </div>
          </Reveal>
          <SectionHeading
            eyebrow="Patient stories"
            title="Smiles worth talking about"
            highlight="Smiles"
            description="Real words from the people who matter most, our patients across Owerri and beyond."
          />
        </div>

        <div className="mt-14">
          <TestimonialCarousel />
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/testimonials">
                Read more stories <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
