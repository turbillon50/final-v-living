"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ThemeToggle, LangToggle } from "@/components/ThemeLangToggle";
import { useT } from "@/lib/i18n";

export function ProfileView() {
  const { t } = useT();
  const menu = [
    { icon: "account_balance_wallet", label: t("profile.portfolio"), href: "/portfolio" },
    { icon: "calendar_today", label: t("profile.stays"), href: "/stays" },
    { icon: "description", label: t("profile.contracts"), href: "/contracts" },
    { icon: "payments", label: t("profile.payments"), href: "/payments" },
    { icon: "concierge", label: t("profile.services"), href: "/services" },
    { icon: "admin_panel_settings", label: t("profile.admin"), href: "/admin" },
  ];

  return (
    <main className="max-w-3xl mx-auto px-margin-mobile pb-32 pt-stack-lg">
      <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center mb-stack-lg">
        <div className="h-24 w-24 rounded-full ring-2 ring-accent/40 bg-surface-container-high flex items-center justify-center mb-4 cyan-glow">
          <Icon name="person" className="text-accent text-[48px]" filled />
        </div>
        <h2 className="font-display-md text-display-md text-ink">Alexander</h2>
        <p className="font-label-sm text-label-sm text-accent uppercase tracking-widest mt-1">
          {t("profile.member")}
        </p>
        <p className="font-body-md text-on-surface-variant mt-2">alexander@vliving.com</p>
        <div className="flex items-center gap-3 mt-6">
          <button className="px-8 py-3 min-h-[44px] rounded-full border border-border text-ink font-label-md text-label-md hover:fill-subtle transition-colors">
            {t("profile.editProfile")}
          </button>
          <ThemeToggle />
          <LangToggle />
        </div>
      </div>

      <div className="glass-card rounded-2xl divide-y divide-border overflow-hidden">
        {menu.map((m) => (
          <Link
            key={m.label}
            href={m.href}
            className="flex items-center gap-4 p-5 hover:fill-subtle transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl fill-subtle flex items-center justify-center">
              <Icon name={m.icon} className="text-accent text-[20px]" />
            </div>
            <span className="flex-1 font-body-md text-ink">{m.label}</span>
            <Icon name="chevron_right" className="text-on-surface-variant group-hover:text-accent" />
          </Link>
        ))}
      </div>

      <button className="w-full mt-stack-lg py-4 rounded-2xl fill-subtle hover:fill-subtle-2 text-on-surface-variant font-label-md text-label-md transition-colors flex items-center justify-center gap-2">
        <Icon name="logout" className="text-[20px]" /> {t("profile.logout")}
      </button>
    </main>
  );
}
