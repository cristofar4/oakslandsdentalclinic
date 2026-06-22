import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

import { blogPosts } from "@/lib/site";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { CtaBand } from "@/components/shared/cta-band";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image], type: "article" },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: "Journal", href: "/blog" }, { label: post.category }]}
      />

      <article className="bg-white py-16 lg:py-24">
        <div className="container max-w-3xl">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-gold-500" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gold-500" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold-500" /> {post.readingTime}
            </span>
          </div>

          {/* Hero image */}
          <Reveal>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Body */}
          <div className="mt-12 space-y-6">
            {post.content.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-xl leading-relaxed text-navy first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-gold-600"
                    : "text-lg leading-relaxed text-muted-foreground"
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* Author card */}
          <div className="mt-14 flex items-center gap-4 rounded-2xl border border-border/70 bg-ivory/60 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-700 font-display text-lg font-semibold text-white">
              {post.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Written by
              </p>
              <p className="font-display text-lg font-semibold text-navy">
                {post.author}
              </p>
            </div>
          </div>

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-700"
          >
            <ArrowLeft className="h-4 w-4" /> Back to journal
          </Link>
        </div>
      </article>

      {/* Related */}
      <section className="bg-ivory py-20 lg:py-24">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Continue reading
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex gap-5 overflow-hidden rounded-2xl border border-border/70 bg-white p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Badge variant="muted" className="w-fit">
                    {p.category}
                  </Badge>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-gold-700">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
