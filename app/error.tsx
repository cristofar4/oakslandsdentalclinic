"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/brand/logo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for debugging without crashing the experience.
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ivory px-6 text-center">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-teal/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative max-w-md">
        <LogoMark className="mx-auto h-16 w-16" />
        <h1 className="mt-8 font-display text-3xl font-semibold text-navy">
          Something went wrong
        </h1>
        <p className="mx-auto mt-4 text-muted-foreground">
          We hit an unexpected snag while loading this page. Please try again,
          or head back home, your smile journey is still on track.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={reset} variant="gold" size="lg">
            <RotateCw className="h-4 w-4" /> Try again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <Home className="h-4 w-4" /> Back home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
