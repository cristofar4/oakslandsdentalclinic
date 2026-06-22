import { cn } from "@/lib/utils";
import { media } from "@/lib/site";
import { TextReveal } from "@/components/shared/text-reveal";
import { Reveal } from "@/components/shared/reveal";
import { VideoBackdrop } from "@/components/shared/video-backdrop";

// `crumbs` is accepted for backwards compatibility but intentionally not
// rendered (breadcrumbs were removed from the design).
type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  highlight,
  poster,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  highlight?: string;
  poster?: string;
  align?: "center" | "left";
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative flex min-h-[58vh] items-center overflow-hidden pb-20 pt-40 text-white lg:min-h-[64vh] lg:pt-48">
      <VideoBackdrop
        poster={poster ?? media.heroPoster}
        sources={[...media.heroVideos]}
        overlay={66}
      />

      <div
        className={cn(
          "container relative z-10 flex flex-col",
          align === "center"
            ? "items-center text-center"
            : "items-start text-left",
        )}
      >
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
                "mt-6 max-w-2xl text-lg leading-relaxed text-white/75",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          </Reveal>
        )}
      </div>

      {/* Soft fade into the light page body */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
