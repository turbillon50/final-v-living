"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { useT } from "@/lib/i18n";

/**
 * Clean, premium glass tab bar (mobile). Evenly weighted items — no oversized
 * floating center button.
 */
export function BottomNav() {
  const pathname = usePathname();
  const { t } = useT();

  const items = [
    { href: "/", icon: "home", label: t("nav.home") },
    { href: "/fractions", icon: "apartment", label: t("nav.developments") },
    { href: "/experiences", icon: "sailing", label: t("nav.experiences") },
    { href: "/owner", icon: "person", label: t("nav.portal") },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 h-[68px] glass border-t border-border pb-safe">
      <div className="flex justify-around items-stretch h-full max-w-md mx-auto px-2">
        {items.map((item) => (
          <NavBtn key={item.href} {...item} active={isActive(item.href)} />
        ))}
      </div>
    </nav>
  );
}

function NavBtn({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-1 flex-col items-center justify-center gap-1 min-w-[44px] transition-colors ${
        active ? "text-accent" : "text-on-surface-variant hover:text-ink"
      }`}
    >
      <span
        className={`flex items-center justify-center h-7 w-12 rounded-full transition-colors ${
          active ? "bg-accent/12" : ""
        }`}
      >
        <Icon name={icon} filled={active} className="text-[22px]" />
      </span>
      <span className="font-label-sm text-[10px] tracking-wide">{label}</span>
    </Link>
  );
}
