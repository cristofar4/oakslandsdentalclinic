import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingCta } from "@/components/layout/floating-cta";
import { JsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

export const viewport: Viewport = {
  themeColor: "#0B2447",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Premium Dentistry in Owerri, Imo State`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "dentist Owerri",
    "dental clinic Imo State",
    "teeth whitening Owerri",
    "braces Nigeria",
    "veneers Owerri",
    "root canal Owerri",
    "best dental clinic Nigeria",
    "Oaklands Dental Clinic",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Premium Dentistry in Owerri`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Premium Dentistry in Owerri`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <JsonLd />
        <SmoothScroll>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <FloatingCta />
        </SmoothScroll>
      </body>
    </html>
  );
}
