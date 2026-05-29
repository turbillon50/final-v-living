"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const links = [
  { href: "/", label: "Explorar" },
  { href: "/fractions", label: "Fracciones" },
  { href: "/stays", label: "Estancias" },
  { href: "/experiences", label: "Experiencias" },
  { href: "/services", label: "Servicios" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="bg-background/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 w-full">
      <div className="h-16 w-full max-w-7xl mx-auto flex justify-between items-center px-margin-mobile">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display-md text-display-md tracking-tighter v-gradient-text leading-none">
              V Living
            </span>
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
                  active ? "text-primary-fixed cyan-text-glow" : "text-secondary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-5">
          <Link
            href="/owner"
            className="hidden sm:flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label-md"
          >
            <Icon name="dashboard" className="text-[20px]" />
            <span className="hidden lg:inline">Portal</span>
          </Link>
          <button aria-label="Notificaciones" className="text-primary hover:opacity-80 transition-opacity active:scale-90">
            <Icon name="notifications" />
          </button>
          <Link
            href="/profile"
            aria-label="Perfil"
            className="h-9 w-9 rounded-full ring-2 ring-primary-container/30 overflow-hidden bg-surface-container-high flex items-center justify-center"
          >
            <Icon name="person" className="text-primary-fixed text-[20px]" filled />
          </Link>
        </div>
      </div>
    </header>
  );
}
