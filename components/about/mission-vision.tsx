import { Target, Eye, Heart } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { Parallax } from "@/components/shared/parallax";
import { SmartImage } from "@/components/shared/smart-image";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To improve smiles, restore confidence, and alleviate dental pain and related oral diseases, delivering world-class care that every patient can access and afford.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be Nigeria's most trusted and admired dental brand, setting the standard for clinical excellence, innovation and patient comfort across the nation.",
  },
  {
    icon: Heart,
    title: "Our Promise",
    text: "Every patient is treated like family. We listen first, explain clearly, and never compromise on the gentleness, honesty and quality you deserve.",
  },
];

export function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-teal/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/60" /> Purpose &amp; principles
          </span>
          <h2 className="mt-5 text-fluid-h2 font-semibold leading-tight text-navy">
            Driven by purpose, defined by care
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Behind every treatment is a deeper commitment, to the people of
            Owerri and beyond who trust us with their smiles.
          </p>

          <StaggerGroup className="mt-10 space-y-5">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="flex gap-5 rounded-2xl border border-border/70 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal>
          <div className="relative">
            <Parallax offset={40}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-glow">
                <SmartImage
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80"
                  alt="Oaklands dental professional caring for a patient"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
              </div>
            </Parallax>
            <div className="glass-dark absolute bottom-6 left-6 right-6 rounded-2xl p-5">
              <p className="font-display text-lg italic text-white">
                &ldquo;We don&apos;t just treat teeth, we restore confidence,
                one smile at a time.&rdquo;
              </p>
              <p className="mt-2 text-sm text-gold-300">
                Dr. David Wilfred, Founder
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
