import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import { site } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Oaklands Dental Clinic in Owerri, Imo State. Call, email or visit us, plus emergency dental contact and opening hours.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phone,
    href: `tel:${formatPhoneHref(site.phoneHref)}`,
  },
  {
    icon: Mail,
    label: "Email us",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: `${site.address.city}, ${site.address.state}`,
    href: `https://www.google.com/maps/search/?api=1&query=${site.address.mapsQuery}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="We're here to help you smile"
        highlight="smile"
        description="Questions, bookings or emergencies, reach out however suits you best. Our friendly team responds quickly."
        crumbs={[{ label: "Contact" }]}
      />

      {/* Quick contact cards */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-3">
            {contactCards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <a
                  href={c.href}
                  target={c.icon === MapPin ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-white transition-colors group-hover:bg-gold group-hover:text-navy-950">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="block font-display text-lg font-semibold text-navy">
                      {c.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-6">
            {/* Hours */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border/70 bg-white p-7 shadow-soft">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold-600" />
                  <h3 className="font-display text-xl font-semibold text-navy">
                    Opening hours
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-border/50 pb-3 text-sm last:border-0 last:pb-0"
                    >
                      <span className="font-medium text-navy">{h.day}</span>
                      <span
                        className={
                          h.open ? "text-muted-foreground" : "text-gold-700"
                        }
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Emergency */}
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-gold/5 p-7">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-gold-700" />
                  <h3 className="font-display text-xl font-semibold text-navy">
                    Dental emergency?
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  Severe pain, swelling or a knocked-out tooth? Don&apos;t wait,
                  call us immediately and we&apos;ll prioritise your care, even
                  on Sundays.
                </p>
                <a
                  href={`tel:${formatPhoneHref(site.phoneHref)}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  <Phone className="h-4 w-4" /> Emergency line
                </a>
              </div>
            </Reveal>

            {/* Socials */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-border/70 bg-white p-7 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-navy">
                  Follow our smiles
                </h3>
                <div className="mt-4 flex gap-3">
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
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-all hover:border-gold hover:bg-gold hover:text-navy-950"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative">
        <div className="h-[420px] w-full overflow-hidden bg-navy-100">
          <iframe
            title="Oaklands Dental Clinic location"
            src={`https://www.google.com/maps?q=${site.address.mapsQuery}&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.3] contrast-[1.05]"
            style={{ border: 0 }}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ivory to-transparent" />
      </section>
    </>
  );
}
