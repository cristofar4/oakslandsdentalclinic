"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

import type { Service } from "@/lib/site";
import { Icon } from "@/components/shared/icon";
import { Badge } from "@/components/ui/badge";

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white p-1.5 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-glow"
      >
        {/* Image */}
        <div className="relative aspect-[16/11] overflow-hidden rounded-[1.1rem]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/5 to-transparent" />
          <Badge
            variant="gold"
            className="absolute left-4 top-4 bg-white/90 backdrop-blur"
          >
            {service.category}
          </Badge>
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-navy shadow-soft backdrop-blur transition-colors group-hover:bg-gold group-hover:text-navy-950">
            <Icon name={service.icon} className="h-6 w-6" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-semibold text-navy">
              {service.title}
            </h3>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/10 text-navy transition-all duration-300 group-hover:rotate-0 group-hover:border-gold group-hover:bg-gold group-hover:text-navy-950">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {service.short}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-navy/50">
            <Clock className="h-3.5 w-3.5" />
            {service.duration}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
