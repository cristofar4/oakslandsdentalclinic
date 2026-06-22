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

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-ivory text-navy">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      {/* Main footer */}
      <div className="container relative grid gap-12 pb-12 pt-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo variant="dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.legalName}. Premium, patient-centred dentistry in the heart of
            Owerri, restoring smiles and confidence since {site.founded}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              {
                icon: Facebook,
                href: site.socials.facebook,
                label: "Facebook",
              },
              {
                icon: Instagram,
                href: site.socials.instagram,
                label: "Instagram",
              },
              {
                icon: Linkedin,
                href: site.socials.linkedin,
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy/70 transition-all hover:border-gold hover:bg-gold hover:text-navy-950"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-700">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-700">
            Treatments
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-navy"
                >
                  {service.title}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-700">
            Visit us
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
              <span>{site.address.full}</span>
            </li>
            <li>
              <a
                href={`tel:${formatPhoneHref(site.phoneHref)}`}
                className="flex gap-3 transition-colors hover:text-navy"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex gap-3 transition-colors hover:text-navy"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
              <span>
                Mon to Fri 8AM to 8PM
                <br />
                Sat 9AM to 7PM · Sun emergencies
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Designed &amp; built by
            <span className="font-semibold text-navy">Praise Chris</span>
          </p>
          <p className="flex items-center gap-2">
            Crafted for confident smiles
            <span className="h-1 w-1 rounded-full bg-gold" />
            Owerri · Imo State
          </p>
        </div>
      </div>
    </footer>
  );
}
