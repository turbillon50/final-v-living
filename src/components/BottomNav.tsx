"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { useT } from "@/lib/i18n";

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useT();

  const items = [
    { href: "/", icon: "home", label: t("nav.home") },
    { href: "/fractions", icon: "search", label: t("nav.explore") },
    { href: "/experiences", icon: "travel_explore", label: t("nav.live") },
    { href: "/owner", icon: "person", label: t("nav.portal") },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 h-20 rounded-t-xl glass border-t border-border shadow-[0_-4px_24px_rgba(0,251,251,0.06)] pb-safe">
      <div className="flex justify-around items-center px-4 h-full relative">
        <NavBtn {...items[0]} active={isActive(items[0].href)} />
        <NavBtn {...items[1]} active={isActive(items[1].href)} />

        {/* Center floating V */}
        <Link
          href="/fractions"
          aria-label="V Living Marketplace"
          className="flex items-center justify-center -mt-10"
        >
          <span className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,251,251,0.6)] border-4 border-background active:scale-90 transition-transform">
            <span className="font-display-md font-extrabold text-on-primary text-2xl leading-none">
              V
            </span>
          </span>
        </Link>

        <NavBtn {...items[2]} active={isActive(items[2].href)} />
        <NavBtn {...items[3]} active={isActive(items[3].href)} />
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
      className={`flex flex-col items-center justify-center gap-1 min-w-[44px] transition-colors ${
        active
          ? "text-accent drop-shadow-[0_0_8px_rgba(0,251,251,0.5)]"
          : "text-on-surface-variant hover:text-ink"
      }`}
    >
      <Icon name={icon} filled={active} className="text-[24px]" />
      <span className="font-label-sm text-label-sm">{label}</span>
    </Link>
  );
}
