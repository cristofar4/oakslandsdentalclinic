"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Star, ShieldCheck, CalendarDays, ArrowRight, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { useGsapContext } from "@/hooks/use-gsap-context";

export function Hero() {
  const containerRef = useGsapContext(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(".hero-line > span", {
      yPercent: 120,
      duration: 1.1,
      stagger: 0.12,
    })
      .from(
        ".hero-fade",
        { y: 24, opacity: 0, duration: 0.9, stagger: 0.12 },
        "-=0.6"
      )
      .from(
        ".hero-visual",
        { scale: 0.92, opacity: 0, duration: 1.2, ease: "power3.out" },
        "-=1"
      )
      .from(
        ".hero-float",
        { y: 30, opacity: 0, duration: 0.8, stagger: 0.15 },
        "-=0.7"
      );
  }, []);

  const visualRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-ivory pt-28 lg:pt-36"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:42px_42px] opacity-[0.5]" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-teal/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[120px]" />

      <div className="container relative grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        {/* Copy */}
        <div className="relative z-10">
          <div className="hero-fade mb-6 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 py-2 pl-2 pr-4 text-sm shadow-soft backdrop-blur">
            <span className="flex h-7 items-center gap-1 rounded-full bg-gold/15 px-2.5 text-gold-700">
              <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
              <span className="font-semibold">4.9</span>
            </span>
            <span className="text-navy/70">
              Rated #1 dental clinic in Imo State
            </span>
          </div>

          <h1 className="text-fluid-display font-semibold leading-[0.98] text-navy">
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">Dentistry that</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="inline-block text-gradient-gold">feels luxurious</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">looks effortless.</span>
            </span>
          </h1>

          <p className="hero-fade mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
            At {site.name}, world-class care meets genuine comfort. From radiant
            smile makeovers to gentle, pain-free treatment — your best smile
            begins in Owerri.
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
            <Button asChild size="lg" variant="outline">
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
                <span className="font-display text-2xl font-semibold text-navy">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div ref={visualRef} className="hero-visual relative z-0">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/60 shadow-glow lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=80"
              alt="A patient smiling confidently after dental treatment at Oaklands"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
          </div>

          {/* Floating rating card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hero-float absolute -left-4 top-10 hidden sm:block"
          >
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-soft">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-teal-300 to-navy-400"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-medium text-navy">
                  Loved by 20,000+ patients
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating booking card */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="hero-float absolute -bottom-6 -right-2 hidden w-64 sm:block"
          >
            <div className="glass rounded-2xl p-5 shadow-glow">
              <div className="flex items-center gap-2 text-teal-600">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Same-week availability
                </span>
              </div>
              <p className="mt-2 font-display text-lg font-semibold text-navy">
                Your consultation awaits
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Gentle, expert care tailored to you.
              </p>
              <Link
                href="/appointments"
                className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700"
              >
                Reserve a time
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
