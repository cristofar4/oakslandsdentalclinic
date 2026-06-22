import { stats } from "@/lib/site";
import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-[0.06] [background-size:38px_38px]" />
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-teal/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold/20 blur-[100px]" />

      <div className="container relative">
        <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center lg:border-r lg:border-white/10 lg:last:border-r-0">
                <div className="font-display text-5xl font-semibold text-white md:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-base font-medium text-white">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-white/50">{stat.hint}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
