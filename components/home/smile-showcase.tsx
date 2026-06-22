import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { smileCases } from "@/lib/site";
import { BeforeAfterSlider } from "@/components/shared/before-after-slider";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { TextReveal } from "@/components/shared/text-reveal";
import { Badge } from "@/components/ui/badge";

export function SmileShowcase() {
  const featured = smileCases[0];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-teal/5 blur-[100px]" />
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <BeforeAfterSlider image={featured.image} />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              <Sparkles className="mr-1 inline h-3.5 w-3.5 text-gold-400" />
              Drag the slider to reveal a real Oaklands transformation
            </p>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/60" /> Smile gallery
          </span>
          <TextReveal
            as="h2"
            text="See the transformation for yourself."
            highlight="transformation"
            className="mt-5 text-fluid-h2 font-semibold leading-[1.08]"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Every smile tells a story. Explore real before-and-after results
              from our cosmetic, restorative and orthodontic patients, and
              imagine what we could do for yours.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Veneers", "Whitening", "Aligners", "Crowns", "Makeovers"].map(
              (tag) => (
                <Badge key={tag} variant="muted" className="px-4 py-1.5">
                  {tag}
                </Badge>
              ),
            )}
          </div>

          <Reveal delay={0.2}>
            <Button asChild variant="gold" className="mt-9">
              <Link href="/smile-gallery">
                Explore the gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
