import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/shared/text-reveal";
import { Reveal } from "@/components/shared/reveal";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  highlight,
  crumbs,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  highlight?: string;
  crumbs?: Crumb[];
  align?: "center" | "left";
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-36 text-white lg:pb-24 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-[0.07] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -left-32 -top-10 h-96 w-96 rounded-full bg-teal/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold/15 blur-[120px]" />

      <div
        className={cn(
          "container relative flex flex-col",
          align === "center" ? "items-center text-center" : "items-start text-left"
        )}
      >
        {crumbs && (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-1.5 text-xs text-white/50"
            >
              <Link href="/" className="transition-colors hover:text-gold-300">
                Home
              </Link>
              {crumbs.map((c) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" />
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-gold-300"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-gold-300">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        {eyebrow && (
          <Reveal>
            <span className="eyebrow mb-5 text-gold-300">
              <span className="h-px w-6 bg-gold/60" /> {eyebrow}
            </span>
          </Reveal>
        )}

        <TextReveal
          as="h1"
          text={title}
          highlight={highlight}
          className="max-w-4xl text-fluid-h1 font-semibold leading-[1.02] text-white"
        />

        {description && (
          <Reveal delay={0.15}>
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg leading-relaxed text-white/70",
                align === "center" && "mx-auto"
              )}
            >
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
