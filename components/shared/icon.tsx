import {
  Sparkles,
  AlignHorizontalDistributeCenter,
  Smile,
  ShieldPlus,
  Stethoscope,
  Gem,
  Crown,
  HeartPulse,
  HeartHandshake,
  Award,
  ShieldCheck,
  Baby,
  Bone,
  Syringe,
  Infinity as InfinityIcon,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Sparkles,
  AlignHorizontalDistributeCenter,
  Smile,
  ShieldPlus,
  Stethoscope,
  Gem,
  Crown,
  HeartPulse,
  HeartHandshake,
  Award,
  ShieldCheck,
  Baby,
  Bone,
  Syringe,
  Infinity: InfinityIcon,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} />;
}
