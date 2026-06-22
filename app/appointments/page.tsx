import type { Metadata } from "next";
import {
  Clock,
  Phone,
  MapPin,
  ShieldCheck,
  HeartHandshake,
  Zap,
} from "lucide-react";

import { site } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";
import { PageHeader } from "@/components/shared/page-header";
import { BookingFlow } from "@/components/appointments/booking-flow";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your dental appointment at Oaklands Dental Clinic, Owerri in minutes. Same-week availability, emergency care and a gentle, patient-first experience.",
};

const reassurances = [
  {
    icon: Zap,
    title: "Same-week slots",
    text: "Flexible times that fit your schedule.",
  },
  {
    icon: ShieldCheck,
    title: "No obligation",
    text: "A relaxed consultation, no pressure.",
  },
  {
    icon: HeartHandshake,
    title: "Gentle care",
    text: "Comfort-first from the moment you arrive.",
  },
];

export default function AppointmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book your visit"
        title="Reserve your appointment in minutes"
        highlight="minutes"
        description="A simple, four-step booking experience. Tell us what you need and we'll take care of the rest."
        crumbs={[{ label: "Appointments" }]}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="container grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal>
            <BookingFlow />
          </Reveal>

          <aside className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border/70 bg-white p-7 shadow-soft">
                <h3 className="font-display text-xl font-semibold text-navy">
                  Why patients choose us
                </h3>
                <ul className="mt-5 space-y-5">
                  {reassurances.map((r) => (
                    <li key={r.title} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal-600">
                        <r.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-medium text-navy">{r.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {r.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-ivory to-gold/10 shadow-soft">
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    Prefer to talk?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our friendly team is ready to help you book over the phone.
                  </p>
                  <a
                    href={`tel:${formatPhoneHref(site.phoneHref)}`}
                    className="mt-5 flex items-center gap-3 rounded-xl border border-border/70 bg-white p-4 shadow-soft transition-colors hover:border-gold/50"
                  >
                    <Phone className="h-5 w-5 text-gold-600" />
                    <span className="font-semibold text-navy">
                      {site.phone}
                    </span>
                  </a>
                </div>
                <div className="space-y-3 border-t border-gold/20 p-7 text-sm">
                  <div className="flex gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-gold-600" />
                    <span className="text-muted-foreground">
                      Mon to Fri 8AM to 8PM · Sat 9AM to 7PM
                      <br />
                      Sunday, emergencies only
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-gold-600" />
                    <span className="text-muted-foreground">
                      {site.address.full}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
