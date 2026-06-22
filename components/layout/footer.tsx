import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

import { mainNav, services, site } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      {/* CTA band */}
      <div className="container relative -mb-px pt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-70" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <span className="eyebrow text-gold-300">
                  <span className="h-px w-6 bg-gold/60" /> Your smile, our craft
                </span>
                <h2 className="mt-4 text-fluid-h2 font-semibold leading-tight text-white">
                  Ready to fall in love with your smile?
                </h2>
                <p className="mt-4 text-white/70">
                  Book a consultation with Imo State&apos;s most trusted dental team.
                  Same-week appointments and emergency care available.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="gold" size="lg">
                  <Link href="/appointments">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline-light" size="lg">
                  <a href={`tel:${formatPhoneHref(site.phoneHref)}`}>
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Main footer */}
      <div className="container relative grid gap-12 pb-12 pt-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            {site.legalName}. Premium, patient-centred dentistry in the heart of
            Owerri — restoring smiles and confidence since {site.founded}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Facebook, href: site.socials.facebook, label: "Facebook" },
              { icon: Instagram, href: site.socials.instagram, label: "Instagram" },
              { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-navy-950"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
            Treatments
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white"
                >
                  {service.title}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
            Visit us
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/60">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              <span>{site.address.full}</span>
            </li>
            <li>
              <a
                href={`tel:${formatPhoneHref(site.phoneHref)}`}
                className="flex gap-3 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex gap-3 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              <span>
                Mon–Fri 8AM–8PM
                <br />
                Sat 9AM–7PM · Sun emergencies
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Crafted for confident smiles
            <span className="h-1 w-1 rounded-full bg-gold" />
            Owerri · Imo State · Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
