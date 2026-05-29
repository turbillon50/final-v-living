"use client";

import { Icon } from "./Icon";
import { useT } from "@/lib/i18n";
import { SITE, waLink } from "@/lib/site";

/**
 * Solid cyan CTA bar: bold uppercase label + a WhatsApp line under it.
 * e.g. "DESCUBRE EL PROYECTO / WhatsApp · 984 292 7481"
 */
export function WhatsAppCta({
  label,
  message,
  className = "",
  variant = "solid",
}: {
  label: string;
  message?: string;
  className?: string;
  variant?: "solid" | "outline";
}) {
  const { t } = useT();
  const base =
    "inline-flex flex-col items-center justify-center text-center px-8 py-3.5 rounded-2xl transition-all active:scale-[0.98] hover:brightness-110";
  const styles =
    variant === "solid"
      ? "bg-accent text-on-primary shadow-[0_8px_30px_rgb(var(--accent)/0.25)]"
      : "border border-accent text-accent hover:bg-accent/10";

  return (
    <a
      href={waLink(message ?? t("wa.general"))}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.08em] leading-none">
        {label}
      </span>
      <span className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold opacity-90">
        <Icon name="chat" className="text-[14px]" filled />
        WhatsApp · {SITE.whatsappShort}
      </span>
    </a>
  );
}
