# Oaklands Dental Clinic — Premium Website

A complete, world-class redesign of [Oaklands Multispecialty Dental Care
Clinic](https://www.oaklandsdentalclinic.com/) — Owerri, Imo State, Nigeria.
Built as a premium private-healthcare digital experience: modern, trustworthy,
luxurious and patient-focused.

## ✨ Highlights

- **Full-screen animated hero** with GSAP intro timeline, floating glass cards
  and premium typography.
- **Smooth scrolling** powered by Lenis, synced with GSAP ScrollTrigger.
- **Scroll-driven storytelling** — text reveals, parallax, animated counters,
  staggered entrances, a scrubbed process timeline and a horizontal journey.
- **Interactive before/after smile slider** + a lightbox smile gallery.
- **Multi-step appointment booking** flow with a celebratory confirmation.
- **Framer Motion** page transitions, micro-interactions, magnetic buttons and
  hover choreography throughout.
- Fully **responsive, accessible** (reduced-motion aware, keyboard support) and
  **SEO-optimised** (metadata, Open Graph, JSON-LD `Dentist` + `FAQPage`,
  sitemap, robots).

## 🧰 Tech Stack

| Area              | Choice                                      |
| ----------------- | ------------------------------------------- |
| Framework         | Next.js 15 (App Router) + React 19          |
| Language          | TypeScript                                  |
| Styling           | Tailwind CSS + custom design system         |
| UI primitives     | shadcn/ui (Radix UI)                         |
| Scroll animation  | GSAP + ScrollTrigger                        |
| UI animation      | Framer Motion                               |
| Smooth scroll     | Lenis                                       |
| Icons             | lucide-react                                |
| Carousel          | Embla                                       |

## 🎨 Design language

- **White / ivory** backgrounds with **deep navy** (`#0B2447`) structure.
- **Champagne gold** (`#C9A24B`) for luxury accents and a fresh **teal** for
  medical highlights.
- Display serif (**Fraunces**) paired with **Inter** for body text.
- Glass-morphism, elegant gradients, soft shadows and generous spacing.

## 📄 Pages

`/` Home · `/about` · `/services` (+ dynamic detail) · `/smile-gallery` ·
`/team` · `/testimonials` · `/blog` (+ dynamic article) · `/appointments` ·
`/contact`

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## 🗂 Project structure

```
app/                 Routes (App Router), layout, sitemap, robots, 404
components/
  ├─ home/           Home page sections
  ├─ about/          Story timeline, mission & vision
  ├─ services/       Service cards & explorer
  ├─ team/           Team profile cards
  ├─ gallery/        Lightbox gallery
  ├─ appointments/   Multi-step booking flow
  ├─ contact/        Contact form
  ├─ shared/         Reveal, counter, parallax, sliders, headings…
  ├─ layout/         Navbar, footer, floating CTA
  ├─ ui/             shadcn/ui primitives
  └─ brand/          Logo / emblem
lib/site.ts          Single source of truth for all clinic content
hooks/               GSAP context hook
```

## 📝 Content & assets

All business facts — clinic name, address, phone, email, opening hours and the
eight core services — are retained from the existing brand and live in
[`lib/site.ts`](./lib/site.ts).

> **Brand note:** the original logo image could not be downloaded
> programmatically during the build, so a faithful SVG emblem + wordmark was
> crafted in its place (an oak leaf nested within a tooth/shield silhouette,
> echoing the "Oaklands" name). Drop the official logo into `public/` and swap
> it into `components/brand/logo.tsx` to use the exact asset. Photography uses
> royalty-free Unsplash imagery as production placeholders.
