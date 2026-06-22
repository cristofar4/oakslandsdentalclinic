"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

import { services } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [subject, setSubject] = useState("");

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-border/70 bg-white p-12 text-center shadow-soft"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/10 text-teal-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
          Message sent!
        </h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSent(false)}
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-2xl border border-border/70 bg-white p-7 shadow-soft md:p-9"
    >
      <h3 className="font-display text-2xl font-semibold text-navy">
        Send us a message
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        We&apos;d love to hear from you. Fill in the form and we&apos;ll respond
        promptly.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-name">Full name</Label>
          <Input
            id="c-name"
            required
            placeholder="Your name"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="c-phone">Phone</Label>
          <Input
            id="c-phone"
            type="tel"
            required
            placeholder="+234 ..."
            className="mt-2"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="c-email">Email</Label>
          <Input
            id="c-email"
            type="email"
            required
            placeholder="you@email.com"
            className="mt-2"
          />
        </div>
        <div className="sm:col-span-2">
          <Label>Reason for contact</Label>
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General enquiry</SelectItem>
              <SelectItem value="appointment">Appointment request</SelectItem>
              <SelectItem value="emergency">Dental emergency</SelectItem>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="c-message">Message</Label>
          <Textarea
            id="c-message"
            required
            placeholder="How can we help you?"
            className="mt-2 min-h-[140px]"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="mt-7 w-full sm:w-auto"
      >
        <Send className="h-4 w-4" /> Send message
      </Button>
    </form>
  );
}
