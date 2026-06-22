"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  CalendarDays,
  ArrowRight,
  Phone,
} from "lucide-react";

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
    })
      .from(
        ".hero-fade",
        { y: 24, opacity: 0, duration: 0.9, stagger: 0.12 },
        "-=0.6",
      )
      .from(
        ".hero-float",
        { y: 30, opacity: 0, duration: 0.8, stagger: 0.15 },
        "-=0.7",
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

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <div>
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
              <span className="inline-block">Dentistry that</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="inline-block text-gradient-gold">
                feels luxurious
              </span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">looks effortless.</span>
            </span>
          </h1>

          <p className="hero-fade mt-7 max-w-md text-lg leading-relaxed text-white/75">
            At {site.name}, world-class care meets genuine comfort. From radiant
            smile makeovers to gentle, pain-free treatment, your best smile
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

        {/* Floating glass cards */}
        <div className="relative hidden h-full min-h-[420px] lg:block">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hero-float absolute right-6 top-6"
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

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="hero-float absolute bottom-10 right-2 w-64"
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

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hero-float absolute left-2 top-1/3"
          >
            <div className="glass rounded-2xl px-5 py-4 shadow-soft">
              <p className="font-display text-3xl font-semibold text-gradient-gold">
                98%
              </p>
              <p className="text-xs font-medium text-navy">
                Would recommend us
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 lg:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </span>
      </div>
    </section>
  );
}
