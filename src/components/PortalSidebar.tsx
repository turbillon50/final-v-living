"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const navItems = [
  { href: "/owner", icon: "dashboard", label: "Dashboard" },
  { href: "/portfolio", icon: "account_balance_wallet", label: "Mi Portafolio" },
  { href: "/stays", icon: "calendar_today", label: "Mis Estancias" },
  { href: "/fractions", icon: "storefront", label: "Marketplace" },
  { href: "/experiences", icon: "sailing", label: "Experiencias" },
  { href: "/services", icon: "concierge", label: "Servicios" },
  { href: "/contracts", icon: "description", label: "Contratos" },
  { href: "/payments", icon: "payments", label: "Pagos" },
];

export function PortalSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col h-[calc(100dvh-64px)] w-72 sticky top-16 z-30 bg-surface/60 backdrop-blur-xl border-r border-white/10 py-8">
      <div className="px-6 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-full ring-2 ring-primary-container/30 overflow-hidden bg-surface-container-high flex items-center justify-center">
            <Icon name="person" className="text-primary-fixed" filled />
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary-fixed">Alexander</h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Platinum Member
            </p>
          </div>
        </div>
        <div className="bg-primary-container/5 rounded-lg p-3 border border-primary-container/10">
          <span className="font-label-sm text-label-sm text-primary-fixed-dim">Status: </span>
          <span className="font-label-sm text-label-sm text-primary-fixed">Owner</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto hide-scrollbar">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-6 py-3.5 transition-all ${
                active
                  ? "bg-primary-container/10 text-primary-fixed border-l-4 border-primary-container"
                  : "text-on-surface-variant border-l-4 border-transparent hover:bg-white/5"
              }`}
            >
              <Icon name={item.icon} filled={active} />
              <span className="font-body-md text-body-md">{item.label}</span>
            </Link>
          );
        })}
        <div className="pt-6 mt-6 border-t border-white/5">
          <Link
            href="/admin"
            className="flex items-center gap-4 px-6 py-3.5 text-on-surface-variant hover:bg-white/5 transition-all"
          >
            <Icon name="admin_panel_settings" />
            <span className="font-body-md text-body-md">Admin</span>
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-4 px-6 py-3.5 text-on-surface-variant hover:bg-white/5 transition-all"
          >
            <Icon name="settings" />
            <span className="font-body-md text-body-md">Ajustes</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
