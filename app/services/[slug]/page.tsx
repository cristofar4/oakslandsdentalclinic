import type { Metadata } from "next";
import { SmartImage as Image } from "@/components/shared/smart-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  CalendarDays,
  Phone,
} from "lucide-react";

import { services, site } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";
import { PageHeader } from "@/components/shared/page-header";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { CtaBand } from "@/components/shared/cta-band";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.description,
    openGraph: { images: [service.image] },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={service.category}
        title={service.title}
        description={service.description}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Main */}
          <div>
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 text-navy shadow-soft backdrop-blur">
                  <Icon name={service.icon} className="h-7 w-7" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-navy">
                  About this treatment
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {service.longDescription}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 rounded-2xl border border-border/70 bg-ivory/60 p-8">
                <h3 className="font-display text-xl font-semibold text-navy">
                  What&apos;s included
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-600">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm font-medium text-navy">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-soft">
              <div className="bg-navy-950 p-6 text-white">
                <p className="text-sm text-white/60">Treatment time</p>
                <p className="mt-1 flex items-center gap-2 font-display text-2xl font-semibold">
                  <Clock className="h-5 w-5 text-gold-300" /> {service.duration}
                </p>
              </div>
              <div className="space-y-5 p-6">
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <Badge variant="gold" className="mt-1.5">
                    {service.category}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ready to begin? Book a consultation and our specialists will
                  craft a plan tailored entirely to you.
                </p>
                <div className="flex flex-col gap-3">
                  <Button asChild variant="gold" className="w-full">
                    <Link href="/appointments">
                      <CalendarDays className="h-4 w-4" /> Book this treatment
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={`tel:${formatPhoneHref(site.phoneHref)}`}>
                      <Phone className="h-4 w-4" /> Ask a question
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <Button asChild variant="ghost" size="sm" className="mt-6">
              <Link href="/services">
                <ArrowLeft className="h-4 w-4" /> All services
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ivory py-20 lg:py-24">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Explore related treatments
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-gold group-hover:text-navy-950">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-lg font-semibold text-navy">
                    {s.title}
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-navy/40 transition-all group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Ready for your ${service.title.toLowerCase()}?`} />
    </>
  );
}
