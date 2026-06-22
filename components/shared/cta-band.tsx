import Link from "next/link";
import { Phone, CalendarDays } from "lucide-react";

import { site } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { Magnetic } from "@/components/shared/magnetic";

export function CtaBand({
  title = "Your best smile is closer than you think",
  description = "Book a consultation today and experience dentistry designed entirely around you.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-navy-800 to-navy-950 px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-[0.08] [background-size:36px_36px]" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-teal/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow justify-center text-gold-300">
                <span className="h-px w-6 bg-gold/60" /> Begin your journey
              </span>
              <h2 className="mt-5 text-fluid-h2 font-semibold leading-tight text-white">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-white/70">{description}</p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Magnetic>
                  <Button asChild variant="gold" size="lg">
                    <Link href="/appointments">
                      <CalendarDays className="h-4 w-4" /> Book Appointment
                    </Link>
                  </Button>
                </Magnetic>
                <Button asChild variant="outline-light" size="lg">
                  <a href={`tel:${formatPhoneHref(site.phoneHref)}`}>
                    <Phone className="h-4 w-4" /> {site.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
