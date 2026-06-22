import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";
import { ServicesExplorer } from "@/components/services/services-explorer";
import { ProcessSection } from "@/components/home/process-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore Oaklands' full range of premium dental services, teeth whitening, braces, veneers, root canals, crowns, smile makeovers and preventive care in Owerri.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our treatments"
        title="Premium dental services, tailored to you"
        highlight="Premium"
        description="From radiant cosmetic transformations to gentle preventive care, explore the complete spectrum of treatments we offer under one roof."
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-ivory py-24 lg:py-28">
        <div className="container">
          <ServicesExplorer />
        </div>
      </section>

      <ProcessSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
