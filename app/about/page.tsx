import type { Metadata } from "next";
import { SmartImage as Image } from "@/components/shared/smart-image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { site, team } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { StoryTimeline } from "@/components/about/story-timeline";
import { MissionVision } from "@/components/about/mission-vision";
import { ValuesSection } from "@/components/home/values-section";
import { StatsBand } from "@/components/home/stats-band";
import { TeamCard } from "@/components/team/team-card";
import { CtaBand } from "@/components/shared/cta-band";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TextReveal } from "@/components/shared/text-reveal";
import { Button } from "@/components/ui/button";
import { Parallax } from "@/components/shared/parallax";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story of Oaklands Multispecialty Dental Care Clinic, founded in 2015 in Owerri, Imo State, and now the region's most trusted dental brand.",
};

const proofPoints = [
  "Multispecialty team under one roof",
  "Over 20,000 patients cared for",
  "State-of-the-art dental technology",
  "Transparent, affordable pricing",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Oaklands"
        title="Owerri's trusted multispecialty dental clinic"
        highlight="trusted"
        description="Since 2015, Oaklands has delivered top-rated, affordable dental care in Owerri, combining ultramodern equipment with a team that treats every patient like family."
        crumbs={[{ label: "About" }]}
      />

      {/* Intro */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="grid grid-cols-5 grid-rows-6 gap-4">
              <div className="col-span-3 row-span-6">
                <Parallax offset={30}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
                    <Image
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                      alt="Confident patient at Oaklands Dental Clinic"
                      fill
                      sizes="(max-width: 1024px) 60vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                </Parallax>
              </div>
              <div className="col-span-2 row-span-6 flex items-center">
                <Parallax offset={-30}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
                    <Image
                      src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
                      alt="Modern dental treatment at Oaklands"
                      fill
                      sizes="(max-width: 1024px) 40vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                </Parallax>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold/60" /> Who we are
            </span>
            <TextReveal
              as="h2"
              text="A passion for dentistry, a heart for people."
              highlight="people."
              className="mt-5 text-fluid-h2 font-semibold leading-[1.08]"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {site.legalName} began in 2015 with a single, passionate dentist
                Dr. David Wilfred, and an uncompromising belief that world-class
                dentistry belongs right here in Owerri. What started as a modest
                practice of three has grown into a multispecialty team of 16+
                clinicians serving over 20,000 patients.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Today, Oaklands is recognised as Imo State&apos;s leading dental
                clinic, but our mission has never changed: to improve smiles,
                restore confidence and relieve pain, with care that always feels
                personal.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {proofPoints.map((point, i) => (
                <Reveal key={point} delay={0.2 + i * 0.06}>
                  <li className="flex items-center gap-3 text-sm font-medium text-navy">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-teal-500" />
                    {point}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <StoryTimeline />
      <MissionVision />
      <StatsBand />
      <ValuesSection />

      {/* Team preview */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="container">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <SectionHeading
              align="left"
              eyebrow="The people"
              title="Meet the experts behind your smile"
              highlight="experts"
              description="A team of dedicated specialists, united by a shared commitment to excellence and genuine patient care."
            />
            <Reveal>
              <Button asChild variant="outline" className="shrink-0">
                <Link href="/team">
                  Meet the full team <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
