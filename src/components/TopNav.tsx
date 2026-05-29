"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { ThemeToggle, LangToggle } from "./ThemeLangToggle";
import { useT } from "@/lib/i18n";

export function TopNav() {
  const pathname = usePathname();
  const { t } = useT();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/fractions", label: t("nav.developments") },
    { href: "/experiences", label: t("nav.experiences") },
    { href: "/services", label: t("nav.included") },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-xl border-b border-border sticky top-0 z-50 w-full">
      <div className="h-16 w-full max-w-7xl mx-auto flex justify-between items-center px-margin-mobile">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2" aria-label="V·Living">
            <Logo imgClassName="h-9 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-label-md transition-opacity hover:opacity-80 ${
                  active ? "text-accent cyan-text-glow" : "text-on-surface-variant"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <LangToggle />
          <Link
            href="/owner"
            className="hidden sm:flex items-center gap-2 text-on-surface-variant hover:text-ink transition-colors font-label-md"
          >
            <Icon name="dashboard" className="text-[20px]" />
            <span className="hidden lg:inline">{t("nav.portal")}</span>
          </Link>
          <button
            aria-label={t("nav.notifications")}
            className="hidden sm:flex h-9 w-9 items-center justify-center text-ink hover:opacity-80 transition-opacity active:scale-90"
          >
            <Icon name="notifications" />
          </button>
          <Link
            href="/profile"
            aria-label={t("nav.profile")}
            className="h-9 w-9 rounded-full ring-2 ring-accent/30 overflow-hidden bg-surface-container-high flex items-center justify-center"
          >
            <Icon name="person" className="text-accent text-[20px]" filled />
          </Link>
        </div>
      </div>
    </header>
  );
}
