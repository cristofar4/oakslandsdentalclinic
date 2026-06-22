import type { Metadata } from "next";

import { smileCases } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { BeforeAfterSlider } from "@/components/shared/before-after-slider";
import { LightboxGallery } from "@/components/gallery/lightbox-gallery";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaBand } from "@/components/shared/cta-band";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description:
    "Explore real before-and-after smile transformations from Oaklands Dental Clinic — veneers, whitening, aligners, crowns and full smile makeovers in Owerri.",
};

export default function SmileGalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Smile gallery"
        title="Real transformations, real confidence"
        highlight="confidence"
        description="Drag, compare and explore the results our patients are proud to show off. Every smile here was crafted by the Oaklands team."
        crumbs={[{ label: "Smile Gallery" }]}
      />

      {/* Before / after cases */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Before &amp; after"
            title="See the difference for yourself"
            highlight="difference"
            description="Slide to reveal each transformation — the artistry is in the detail."
          />

          <div className="mt-16 space-y-20">
            {smileCases.map((c, i) => (
              <div
                key={c.title}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <BeforeAfterSlider before={c.before} after={c.after} />
                </Reveal>
                <div className={i % 2 === 1 ? "lg:pr-8" : "lg:pl-8"}>
                  <Reveal delay={0.1}>
                    <Badge variant="gold" className="mb-4">
                      {c.treatment}
                    </Badge>
                    <h3 className="font-display text-fluid-h3 font-semibold text-navy">
                      {c.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                    <div className="mt-6 flex items-center gap-6 border-t border-border/60 pt-6">
                      <div>
                        <p className="font-display text-2xl font-semibold text-gradient-gold">
                          100%
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Patient satisfaction
                        </p>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div>
                        <p className="font-display text-2xl font-semibold text-navy">
                          {c.treatment.split(" ")[0]}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Treatment type
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox gallery */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="The gallery"
            title="A collection of confident smiles"
            highlight="confident"
            description="Tap any image to explore our work up close."
          />
          <div className="mt-14">
            <LightboxGallery />
          </div>
        </div>
      </section>

      <TestimonialsPreview />
      <CtaBand title="Imagine your transformation" />
    </>
  );
}
