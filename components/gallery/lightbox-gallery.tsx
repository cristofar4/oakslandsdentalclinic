"use client";

import { SmartImage as Image } from "@/components/shared/smart-image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import { galleryImages } from "@/lib/site";

export function LightboxGallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length,
      ),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, prev, next]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {galleryImages.map((img, i) => (
          <motion.button
            key={img.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            onClick={() => setIndex(i)}
            className="group relative block w-full overflow-hidden rounded-2xl shadow-soft"
          >
            <div
              className={`relative w-full ${
                i % 3 === 0
                  ? "aspect-[3/4]"
                  : i % 3 === 1
                    ? "aspect-square"
                    : "aspect-[4/5]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                    {img.category}
                  </p>
                  <p className="font-display text-lg font-semibold text-white">
                    {img.caption}
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors group-hover:bg-gold group-hover:text-navy-950">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-md"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy md:left-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] w-full max-w-3xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={galleryImages[index].src}
                  alt={galleryImages[index].caption}
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-gold-300">
                  {galleryImages[index].category}
                </p>
                <p className="font-display text-xl text-white">
                  {galleryImages[index].caption}
                </p>
              </div>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy md:right-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
