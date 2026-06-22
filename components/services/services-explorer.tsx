"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { services, type Service } from "@/lib/site";
import { ServiceCard } from "@/components/services/service-card";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Cosmetic",
  "Orthodontics",
  "Restorative",
  "Preventive",
  "Surgical",
] as const;

export function ServicesExplorer() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered: Service[] =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
              active === cat
                ? "bg-navy text-white shadow-soft"
                : "bg-white text-navy/60 hover:bg-navy/5 hover:text-navy",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((service, i) => (
            <motion.div
              key={service.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ServiceCard service={service} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
