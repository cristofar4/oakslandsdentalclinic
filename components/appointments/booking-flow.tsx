"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  CalendarCheck,
  Sparkles,
  PartyPopper,
} from "lucide-react";

import { services } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const steps = ["Treatment", "Schedule", "Your details", "Confirm"] as const;

const times = [
  "08:00",
  "09:30",
  "11:00",
  "12:30",
  "14:00",
  "15:30",
  "17:00",
  "18:30",
];

type FormData = {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  // Computed on the client only to avoid a server/client hydration mismatch.
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);
  const [data, setData] = useState<FormData>({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const update = (patch: Partial<FormData>) => {
    setData((d) => ({ ...d, ...patch }));
    setError("");
  };

  const validateStep = () => {
    if (step === 0 && !data.service) return "Please choose a treatment.";
    if (step === 1 && (!data.date || !data.time))
      return "Please pick a date and time.";
    if (step === 2) {
      if (!data.name.trim()) return "Please enter your name.";
      if (!/^\S+@\S+\.\S+$/.test(data.email))
        return "Please enter a valid email.";
      if (data.phone.replace(/\D/g, "").length < 7)
        return "Please enter a valid phone number.";
    }
    return "";
  };

  const next = () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    if (step === steps.length - 1) {
      setSubmitted(true);
      return;
    }
    setStep((s) => s + 1);
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(0, s - 1));
  };

  const selectedService = services.find((s) => s.slug === data.service);

  if (submitted) {
    return <Confirmation data={data} serviceName={selectedService?.title} />;
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-glow">
      {/* Progress header */}
      <div className="border-b border-border/60 bg-ivory/50 p-6 md:p-8">
        <div className="flex items-center justify-between">
          {steps.map((label, i) => (
            <div
              key={label}
              className="flex flex-1 items-center last:flex-none"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
                    i < step
                      ? "border-teal bg-teal text-white"
                      : i === step
                        ? "border-gold bg-gold text-navy-950"
                        : "border-navy/15 bg-white text-navy/40",
                  )}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span
                  className={cn(
                    "hidden text-sm font-medium md:block",
                    i <= step ? "text-navy" : "text-navy/40",
                  )}
                >
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="mx-3 h-0.5 flex-1 overflow-hidden rounded-full bg-navy/10">
                  <div
                    className={cn(
                      "h-full rounded-full bg-teal transition-all duration-500",
                      i < step ? "w-full" : "w-0",
                    )}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step body */}
      <div className="p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <div>
                <StepTitle
                  icon={<Sparkles className="h-5 w-5" />}
                  title="Which treatment interests you?"
                  subtitle="Select the service you'd like to book, you can discuss details at your visit."
                />
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => update({ service: s.slug })}
                      className={cn(
                        "flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-300",
                        data.service === s.slug
                          ? "border-gold bg-gold/5 shadow-soft"
                          : "border-border hover:border-navy/30 hover:bg-navy/[0.02]",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                          data.service === s.slug
                            ? "bg-gold text-navy-950"
                            : "bg-navy/5 text-navy",
                        )}
                      >
                        <Icon name={s.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-medium text-navy">
                          {s.title}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {s.duration}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <StepTitle
                  icon={<CalendarCheck className="h-5 w-5" />}
                  title="When works best for you?"
                  subtitle="Choose a preferred date and time. We'll confirm availability with you."
                />
                <div className="mt-7 space-y-6">
                  <div className="max-w-xs">
                    <Label htmlFor="date">Preferred date</Label>
                    <Input
                      id="date"
                      type="date"
                      min={today}
                      value={data.date}
                      onChange={(e) => update({ date: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>Preferred time</Label>
                    <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {times.map((t) => (
                        <button
                          key={t}
                          onClick={() => update({ time: t })}
                          className={cn(
                            "rounded-xl border-2 py-3 text-sm font-medium transition-all duration-300",
                            data.time === t
                              ? "border-gold bg-gold/10 text-navy"
                              : "border-border text-navy/60 hover:border-navy/30",
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <StepTitle
                  icon={<Check className="h-5 w-5" />}
                  title="Tell us about you"
                  subtitle="A few details so we can confirm your appointment."
                />
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      value={data.name}
                      onChange={(e) => update({ name: e.target.value })}
                      placeholder="Jane Okafor"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={data.email}
                      onChange={(e) => update({ email: e.target.value })}
                      placeholder="jane@email.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={data.phone}
                      onChange={(e) => update({ phone: e.target.value })}
                      placeholder="+234 ..."
                      className="mt-2"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="notes">
                      Anything we should know? (optional)
                    </Label>
                    <Textarea
                      id="notes"
                      value={data.notes}
                      onChange={(e) => update({ notes: e.target.value })}
                      placeholder="Tell us about your goals or any concerns..."
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <StepTitle
                  icon={<CalendarCheck className="h-5 w-5" />}
                  title="Review your booking"
                  subtitle="Please confirm the details below are correct."
                />
                <dl className="mt-7 divide-y divide-border/60 rounded-2xl border border-border/70 bg-ivory/40">
                  {[
                    ["Treatment", selectedService?.title],
                    ["Date", data.date],
                    ["Time", data.time],
                    ["Name", data.name],
                    ["Email", data.email],
                    ["Phone", data.phone],
                    ["Notes", data.notes || ", "],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 px-5 py-3.5"
                    >
                      <dt className="text-sm text-muted-foreground">{label}</dt>
                      <dd className="text-right text-sm font-medium text-navy">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {error && (
          <p className="mt-5 rounded-lg bg-destructive/10 px-4 py-2.5 text-sm font-medium text-destructive">
            {error}
          </p>
        )}

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={back}
            className={cn(step === 0 && "pointer-events-none opacity-0")}
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </Button>
          <Button variant="gold" onClick={next} size="lg">
            {step === steps.length - 1 ? "Confirm booking" : "Continue"}
            {step !== steps.length - 1 && <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}

function StepTitle({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-2xl font-semibold text-navy">
        {title}
      </h3>
      <p className="mt-1.5 text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function Confirmation({
  data,
  serviceName,
}: {
  data: FormData;
  serviceName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[2rem] border border-border/70 bg-white text-center shadow-glow"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-ivory via-white to-gold/15 px-8 py-14 text-navy">
        <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-[0.04] [background-size:32px_32px]" />
        <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-teal/20 blur-[80px]" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-gold/25 blur-[80px]" />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold text-navy-950 shadow-gold"
        >
          <PartyPopper className="h-9 w-9" />
        </motion.div>
        <h3 className="relative mt-6 font-display text-3xl font-semibold text-navy">
          Your request is in!
        </h3>
        <p className="relative mx-auto mt-3 max-w-md text-muted-foreground">
          Thank you, {data.name.split(" ")[0]}. Our team will call you shortly
          to confirm your {serviceName?.toLowerCase()} appointment.
        </p>
      </div>

      <div className="p-8">
        <div className="mx-auto max-w-sm divide-y divide-border/60 rounded-2xl border border-border/70 bg-ivory/40 text-left">
          {[
            ["Treatment", serviceName],
            ["Date", data.date],
            ["Time", data.time],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between px-5 py-3"
            >
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="text-sm font-semibold text-navy">{value}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          A confirmation has been noted for{" "}
          <span className="font-medium text-navy">{data.email}</span>. Need to
          change something? Call us on{" "}
          <a href="tel:+2347036531860" className="font-medium text-gold-700">
            +234 703 653 1860
          </a>
          .
        </p>
      </div>
    </motion.div>
  );
}
