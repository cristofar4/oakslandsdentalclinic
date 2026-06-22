"use client";

import { SmartImage as Image } from "@/components/shared/smart-image";
import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";

import type { TeamMember } from "@/lib/site";
import { Badge } from "@/components/ui/badge";

export function TeamCard({
  member,
  index = 0,
}: {
  member: TeamMember;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />

        {/* Specialty chip */}
        <div className="absolute left-4 top-4">
          <Badge variant="gold" className="bg-white/90 backdrop-blur">
            {member.specialty}
          </Badge>
        </div>

        {/* Bio reveal */}
        <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm leading-relaxed text-white/90 line-clamp-4">
            {member.bio}
          </p>
        </div>

        {/* Default name block */}
        <div className="absolute inset-x-0 bottom-0 p-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-0">
          <h3 className="font-display text-xl font-semibold text-white">
            {member.name}
          </h3>
          <p className="text-sm text-gold-300">{member.role}</p>
        </div>
      </div>

      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="font-display text-lg font-semibold text-navy">
            {member.name}
          </h3>
          <p className="text-xs text-muted-foreground">{member.role}</p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 text-navy transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-navy-950">
          <Linkedin className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 px-5 pb-5">
        {member.credentials.map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-1 rounded-full bg-navy/5 px-2.5 py-1 text-[0.7rem] font-medium text-navy/70"
          >
            <ArrowUpRight className="h-2.5 w-2.5 text-gold-500" />
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
