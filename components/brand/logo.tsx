import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
};

/**
 * Oaklands brand emblem — an oak leaf nested within a protective tooth/shield
 * silhouette, echoing the clinic's name and its restorative promise.
 */
export function LogoMark({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const primary = variant === "light" ? "#FFFFFF" : "#0B2447";
  const accent = "#C9A24B";

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Oaklands Dental Clinic emblem"
    >
      {/* Tooth / shield silhouette */}
      <path
        d="M24 3.5c5.4 0 9.2 2.2 11.7 4 1.9 1.4 3 3.6 3 6 0 4.2-.8 7.4-1.7 11.2-.9 3.6-1.6 8.2-2.6 12.6-.7 3-1.4 6.2-3.9 6.9-2.4.7-3.4-2-4-4.6-.7-3-1.3-6.3-2.5-6.3s-1.8 3.3-2.5 6.3c-.6 2.6-1.6 5.3-4 4.6-2.5-.7-3.2-3.9-3.9-6.9-1-4.4-1.7-9-2.6-12.6C9.6 20.9 8.8 17.7 8.8 13.5c0-2.4 1.1-4.6 3-6 2.5-1.8 6.8-4 12.2-4Z"
        fill={variant === "light" ? "rgba(255,255,255,0.10)" : "rgba(11,36,71,0.06)"}
        stroke={primary}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Oak leaf */}
      <path
        d="M24 11.5c2.4 1.6 3.6 4.2 3.6 6.9 0 .9-.1 1.7-.4 2.5 1.1-.3 2.2-.2 3.1.4-1 1.5-2.6 2.4-4.3 2.6-.5 1.4-1.2 2.6-2 3.6-.8-1-1.5-2.2-2-3.6-1.7-.2-3.3-1.1-4.3-2.6.9-.6 2-.7 3.1-.4-.3-.8-.4-1.6-.4-2.5 0-2.7 1.2-5.3 3.6-6.9Z"
        fill={accent}
      />
      <path
        d="M24 11.5v16.6"
        stroke={variant === "light" ? "#0B2447" : "#FFFFFF"}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Logo({
  className,
  variant = "dark",
  showWordmark = true,
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy";

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark variant={variant} className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-semibold tracking-tight",
              textColor
            )}
          >
            Oaklands
          </span>
          <span
            className={cn(
              "text-[0.58rem] font-semibold uppercase tracking-[0.28em]",
              variant === "light" ? "text-gold-300" : "text-gold-600"
            )}
          >
            Dental Clinic
          </span>
        </span>
      )}
    </span>
  );
}
