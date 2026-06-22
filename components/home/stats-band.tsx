import { stats } from "@/lib/site";
import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-teal/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />

      <div className="container relative">
        <div className="grid gap-6 rounded-[2rem] border border-border/70 bg-white/70 p-8 shadow-soft backdrop-blur sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center lg:border-r lg:border-border/70 lg:last:border-r-0">
                <div className="font-display text-5xl font-semibold text-gradient-gold md:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-base font-semibold text-navy">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.hint}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
