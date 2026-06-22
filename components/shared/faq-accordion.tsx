"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";

export function FaqAccordion({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((faq, i) => (
        <Reveal key={faq.question} delay={i * 0.05}>
          <AccordionItem value={`faq-${i}`} className="group">
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        </Reveal>
      ))}
    </Accordion>
  );
}
