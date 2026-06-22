import Link from "next/link";
import { MessageCircleQuestion, ArrowRight } from "lucide-react";

import { FaqAccordion } from "@/components/shared/faq-accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function FaqSection() {
  return (
    <section className="relative bg-ivory py-24 lg:py-32">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Good to know"
            title="Questions? We have answers."
            highlight="answers."
            description="Everything you need to feel confident about your visit. Still curious? Our team is always happy to help."
          />
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl border border-border/70 bg-white p-6 shadow-soft">
              <MessageCircleQuestion className="h-8 w-8 text-gold-500" />
              <p className="mt-3 font-display text-lg font-semibold text-navy">
                Can&apos;t find your answer?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Reach out and we&apos;ll get back to you within one business day.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link href="/contact">
                  Contact us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <div>
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
