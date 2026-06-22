import Link from "next/link";
import { Home, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/brand/logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-ivory px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-[0.04] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-teal/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative">
        <LogoMark className="mx-auto h-16 w-16" />
        <p className="mt-8 font-display text-[7rem] font-semibold leading-none text-gradient-gold">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-navy">
          This page took a different path
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you&apos;re looking for can&apos;t be found, but your perfect
          smile is still right here with us.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="gold" size="lg">
            <Link href="/">
              <Home className="h-4 w-4" /> Back home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/appointments">
              <CalendarDays className="h-4 w-4" /> Book appointment
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
