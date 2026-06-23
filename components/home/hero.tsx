"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { Star, CalendarDays, Phone } from "lucide-react";

import { site, media } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { VideoBackdrop } from "@/components/shared/video-backdrop";
import { useGsapContext } from "@/hooks/use-gsap-context";

export function Hero() {
  const containerRef = useGsapContext(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(".hero-line > span", {
      yPercent: 120,
      duration: 1.1,
      stagger: 0.12,
    }).from(
      ".hero-fade",
      { y: 24, opacity: 0, duration: 0.9, stagger: 0.12 },
      "-=0.6",
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32 text-white lg:pt-36"
    >
      <VideoBackdrop
        poster={media.heroPoster}
        sources={[...media.heroVideos]}
        overlay={58}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="hero-fade mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 py-2 pl-2 pr-4 text-sm backdrop-blur">
            <span className="flex h-7 items-center gap-1 rounded-full bg-gold/20 px-2.5 text-gold-200">
              <Star className="h-3.5 w-3.5 fill-gold-300 text-gold-300" />
              <span className="font-semibold">4.9</span>
            </span>
            <span className="text-white/80">
              Rated #1 dental clinic in Imo State
            </span>
          </div>

          <h1 className="text-fluid-display font-semibold leading-[0.98] text-white">
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">Expert dental care,</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="inline-block text-gradient-gold">
                made affordable
              </span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">in Owerri.</span>
            </span>
          </h1>

          <p className="hero-fade mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            Oaklands is Imo State&apos;s top-rated multispecialty dental clinic,
            combining ultramodern equipment with gentle, personalized care. From
            routine checkups, fillings and teeth whitening to braces, veneers
            and implants, every treatment is tailored to you.
          </p>

          <div className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic>
              <Button asChild size="lg" variant="gold">
                <Link href="/appointments">
                  <CalendarDays className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="outline-light">
              <a href={`tel:${formatPhoneHref(site.phoneHref)}`}>
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="hero-fade mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            {[
              { value: "20,000+", label: "Smiles transformed" },
              { value: "16+", label: "Specialists" },
              { value: "10 yrs", label: "Of trusted care" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-white">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-white/55">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
