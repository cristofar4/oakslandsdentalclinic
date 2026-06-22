import { Hero } from "@/components/home/hero";
import { TrustMarquee } from "@/components/home/trust-marquee";
import { AboutPreview } from "@/components/home/about-preview";
import { ServicesPreview } from "@/components/home/services-preview";
import { StatsBand } from "@/components/home/stats-band";
import { ValuesSection } from "@/components/home/values-section";
import { ProcessSection } from "@/components/home/process-section";
import { SmileShowcase } from "@/components/home/smile-showcase";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { FaqSection } from "@/components/home/faq-section";
import { CtaBand } from "@/components/shared/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <AboutPreview />
      <ServicesPreview />
      <StatsBand />
      <ValuesSection />
      <ProcessSection />
      <SmileShowcase />
      <TestimonialsPreview />
      <FaqSection />
      <CtaBand />
    </>
  );
}
