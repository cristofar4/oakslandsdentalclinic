"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";

export function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={`https://wa.me/${formatPhoneHref(site.whatsapp)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-teal px-5 py-4 text-white shadow-glow"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-teal opacity-20" />
          <MessageCircle className="h-5 w-5" />
          <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[140px] sm:inline">
            Chat with us
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
