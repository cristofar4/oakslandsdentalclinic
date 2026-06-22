"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Clock, CalendarDays } from "lucide-react";

import { cn, formatPhoneHref } from "@/lib/utils";
import { mainNav, site } from "@/lib/site";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={cn(
          "hidden border-b border-white/10 bg-navy-950 text-white/80 transition-all duration-500 lg:block",
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100",
        )}
      >
        <div className="container flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${formatPhoneHref(site.phoneHref)}`}
              className="flex items-center gap-2 transition-colors hover:text-gold-300"
            >
              <Phone className="h-3.5 w-3.5" /> {site.phone}
            </a>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" /> Mon to Fri 8AM to 8PM · Sat 9AM
              to 7PM
            </span>
          </div>
          <span className="text-gold-300/90">
            {site.address.city}, {site.address.state}, Nigeria&apos;s premier
            dental care
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "glass border-b border-white/40 shadow-soft"
            : "bg-transparent",
        )}
      >
        <nav className="container flex h-[72px] items-center justify-between">
          <Link href="/" aria-label="Oaklands Dental Clinic home">
            <Logo variant={scrolled ? "dark" : "light"} />
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "link-underline rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    scrolled
                      ? active
                        ? "text-navy"
                        : "text-navy/60 hover:text-navy"
                      : active
                        ? "text-white"
                        : "text-white/70 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Magnetic className="hidden sm:block">
              <Button asChild variant="gold" size="sm" className="h-11 px-6">
                <Link href="/appointments">
                  <CalendarDays className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition-colors xl:hidden",
                scrolled
                  ? "border-navy/15 text-navy hover:bg-navy hover:text-white"
                  : "border-white/30 text-white hover:bg-white hover:text-navy",
              )}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-navy-950/40 backdrop-blur-sm xl:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                ease: [0.22, 1, 0.36, 1],
                duration: 0.5,
              }}
              className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-white p-6 shadow-glow xl:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-1">
                {mainNav.map((item, i) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between border-b border-border/60 py-4 font-display text-2xl transition-colors",
                          active
                            ? "text-gold-600"
                            : "text-navy hover:text-gold-600",
                        )}
                      >
                        {item.label}
                        <span className="text-xs text-muted-foreground">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button asChild variant="gold" size="lg">
                  <Link href="/appointments">
                    <CalendarDays className="h-4 w-4" /> Book Appointment
                  </Link>
                </Button>
                <a
                  href={`tel:${formatPhoneHref(site.phoneHref)}`}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-navy/70"
                >
                  <Phone className="h-4 w-4" /> {site.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
