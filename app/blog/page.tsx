import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

import { blogPosts } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/shared/reveal";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Dental health tips, cosmetic guidance and patient-comfort advice from the experts at Oaklands Dental Clinic, Owerri.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHeader
        eyebrow="The Oaklands journal"
        title="Insights for healthier, brighter smiles"
        highlight="brighter"
        description="Expert guidance, dental wellness tips and the latest from our clinic — written by the people who care for your smile."
        crumbs={[{ label: "Journal" }]}
      />

      {/* Featured */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-soft transition-all duration-500 hover:shadow-glow lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <Badge variant="gold" className="absolute left-5 top-5 bg-white/90 backdrop-blur">
                  Featured
                </Badge>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-semibold uppercase tracking-wider text-gold-600">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {featured.readingTime}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {featured.author} · {formatDate(featured.date)}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 text-navy transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-navy-950">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container">
          <StaggerGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <Badge
                      variant="gold"
                      className="absolute left-4 top-4 bg-white/90 backdrop-blur"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readingTime}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-navy transition-colors group-hover:text-gold-700">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700">
                      Read article
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
