import { Sparkles } from "lucide-react";
import { trustBadges } from "@/lib/site";
import { Marquee } from "@/components/shared/marquee";

export function TrustMarquee() {
  return (
    <section className="border-y border-border/60 bg-white py-6">
      <Marquee duration={32}>
        {trustBadges.map((badge, i) => (
          <div key={`${badge}-${i}`} className="flex items-center">
            <span className="px-8 font-display text-xl font-medium text-navy/80 md:text-2xl">
              {badge}
            </span>
            <Sparkles className="h-4 w-4 text-gold-400" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
