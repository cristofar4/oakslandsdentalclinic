import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/services/service-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function ServicesPreview() {
  return (
    <section className="relative bg-ivory py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title="A full spectrum of premium dental care"
            highlight="premium"
            description="From everyday prevention to transformative cosmetic dentistry, every treatment is delivered with precision, artistry and genuine warmth."
          />
          <Reveal>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/services">
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
