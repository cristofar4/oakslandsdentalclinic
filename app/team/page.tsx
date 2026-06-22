import type { Metadata } from "next";
import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";

import { team } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { TeamCard } from "@/components/team/team-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "Meet The Team",
  description:
    "Meet the specialists behind Oaklands Dental Clinic — led by founder Dr. David Wilfred, our multispecialty team brings expertise, artistry and genuine care.",
};

export default function TeamPage() {
  const [lead, ...rest] = team;

  return (
    <>
      <PageHeader
        eyebrow="Meet the team"
        title="The specialists behind every smile"
        highlight="specialists"
        description="Expertise you can trust, delivered with warmth you can feel. Get to know the people who make Oaklands extraordinary."
        crumbs={[{ label: "Our Team" }]}
      />

      {/* Leadership showcase */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-glow">
                  <Image
                    src={lead.image}
                    alt={lead.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="font-display text-2xl font-semibold text-white">
                      {lead.name}
                    </p>
                    <p className="text-gold-300">{lead.role}</p>
                  </div>
                </div>
                <div className="glass absolute -right-4 top-8 hidden rounded-2xl px-5 py-4 shadow-glow sm:block">
                  <div className="flex items-center gap-2 text-gold-600">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Founder
                    </span>
                  </div>
                  <p className="mt-1 font-display text-lg font-semibold text-navy">
                    Since 2015
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold/60" /> Leadership
              </span>
              <h2 className="mt-5 text-fluid-h2 font-semibold leading-tight text-navy">
                A vision for world-class dentistry
              </h2>
              <Reveal delay={0.1}>
                <div className="mt-6 rounded-2xl border-l-2 border-gold bg-ivory/60 p-6">
                  <Quote className="h-6 w-6 text-gold-400" />
                  <p className="mt-3 font-display text-lg italic leading-relaxed text-navy/90">
                    &ldquo;{lead.bio}&rdquo;
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {lead.credentials.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-navy/5 px-4 py-2 text-sm font-medium text-navy/70"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Full team grid */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Our specialists"
            title="Talented, dedicated, and here for you"
            highlight="dedicated"
            description="Hover over each profile to discover the story and expertise behind every member of our team."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Care from people who genuinely care"
        description="Experience the Oaklands difference for yourself — book a visit with our team today."
      />
    </>
  );
}
