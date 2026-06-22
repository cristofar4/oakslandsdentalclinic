import { SmartImage as Image } from "@/components/shared/smart-image";
import { values } from "@/lib/site";
import { Icon } from "@/components/shared/icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { Parallax } from "@/components/shared/parallax";

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div className="relative">
          <SectionHeading
            align="left"
            eyebrow="Why Oaklands"
            title="The difference is in the details"
            highlight="details"
            description="Patients don't just choose us for our clinical results, they stay for how we make them feel."
          />

          <div className="relative mt-10 hidden overflow-hidden rounded-2xl shadow-soft lg:block">
            <Parallax offset={30}>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80"
                  alt="Warm, welcoming dental reception"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>
            </Parallax>
          </div>
        </div>

        <StaggerGroup className="grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group h-full rounded-2xl border border-border/70 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white transition-colors duration-500 group-hover:bg-gold group-hover:text-navy-950">
                  <Icon name={value.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
