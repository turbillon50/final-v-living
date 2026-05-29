"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { useT } from "@/lib/i18n";

export function PortalSidebar() {
  const pathname = usePathname();
  const { t } = useT();

  const navItems = [
    { href: "/owner", icon: "dashboard", label: t("sidebar.dashboard") },
    { href: "/portfolio", icon: "account_balance_wallet", label: t("sidebar.portfolio") },
    { href: "/stays", icon: "calendar_today", label: t("sidebar.stays") },
    { href: "/fractions", icon: "storefront", label: t("sidebar.marketplace") },
    { href: "/experiences", icon: "sailing", label: t("sidebar.experiences") },
    { href: "/services", icon: "concierge", label: t("sidebar.services") },
    { href: "/contracts", icon: "description", label: t("sidebar.contracts") },
    { href: "/payments", icon: "payments", label: t("sidebar.payments") },
  ];

  return (
    <aside className="hidden md:flex flex-col h-[calc(100dvh-64px)] w-72 sticky top-16 z-30 bg-surface/60 backdrop-blur-xl border-r border-border py-8">
      <div className="px-6 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-full ring-2 ring-accent/30 overflow-hidden bg-surface-container-high flex items-center justify-center">
            <Icon name="person" className="text-accent" filled />
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-ink">Alexander</h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              {t("sidebar.member")}
            </p>
          </div>
        </div>
        <div className="fill-subtle rounded-lg p-3 border border-border">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {t("sidebar.status")}:{" "}
          </span>
          <span className="font-label-sm text-label-sm text-accent">{t("sidebar.owner")}</span>
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
                  ? "bg-accent/10 text-accent border-l-4 border-accent"
                  : "text-on-surface-variant border-l-4 border-transparent hover:fill-subtle"
              }`}
            >
              <Icon name={item.icon} filled={active} />
              <span className="font-body-md text-body-md">{item.label}</span>
            </Link>
          );
        })}
        <div className="pt-6 mt-6 border-t border-border">
          <Link
            href="/admin"
            className="flex items-center gap-4 px-6 py-3.5 text-on-surface-variant hover:fill-subtle transition-all"
          >
            <Icon name="admin_panel_settings" />
            <span className="font-body-md text-body-md">{t("sidebar.admin")}</span>
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-4 px-6 py-3.5 text-on-surface-variant hover:fill-subtle transition-all"
          >
            <Icon name="settings" />
            <span className="font-body-md text-body-md">{t("sidebar.settings")}</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
