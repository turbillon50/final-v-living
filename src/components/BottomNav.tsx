"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const items = [
  { href: "/", icon: "home", label: "Inicio" },
  { href: "/fractions", icon: "search", label: "Explorar" },
  { href: "/experiences", icon: "travel_explore", label: "Vivir" },
  { href: "/owner", icon: "person", label: "Portal" },
];

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 h-20 rounded-t-xl glass border-t border-white/5 shadow-[0_-4px_24px_rgba(0,255,255,0.05)] pb-safe">
      <div className="flex justify-around items-center px-4 h-full relative">
        <NavBtn href={items[0].href} icon={items[0].icon} label={items[0].label} active={isActive(items[0].href)} />
        <NavBtn href={items[1].href} icon={items[1].icon} label={items[1].label} active={isActive(items[1].href)} />

        {/* Center floating V */}
        <Link
          href="/fractions"
          aria-label="V Living Marketplace"
          className="flex items-center justify-center -mt-10"
        >
          <span className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,251,251,0.6)] border-4 border-black active:scale-90 transition-transform">
            <span className="font-display-md font-extrabold text-black text-2xl leading-none">V</span>
          </span>
        </Link>

        <NavBtn href={items[2].href} icon={items[2].icon} label={items[2].label} active={isActive(items[2].href)} />
        <NavBtn href={items[3].href} icon={items[3].icon} label={items[3].label} active={isActive(items[3].href)} />
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
      className={`flex flex-col items-center justify-center gap-1 transition-colors ${
        active ? "text-primary-fixed drop-shadow-[0_0_8px_rgba(0,251,251,0.5)]" : "text-secondary-fixed-dim hover:text-primary"
      }`}
    >
      <Icon name={icon} filled={active} className="text-[24px]" />
      <span className="font-label-sm text-label-sm">{label}</span>
    </Link>
  );
}
