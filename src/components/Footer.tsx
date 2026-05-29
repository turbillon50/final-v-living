"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { ThemeToggle, LangToggle } from "./ThemeLangToggle";

export function Footer() {
  const { t } = useT();

  const explore = [
    { href: "/", label: t("nav.explore") },
    { href: "/fractions", label: t("nav.fractions") },
    { href: "/stays", label: t("nav.stays") },
    { href: "/experiences", label: t("nav.experiences") },
    { href: "/services", label: t("nav.services") },
    { href: "/owner", label: t("nav.portal") },
  ];
  const company = [
    { href: "/", label: t("footer.about") },
    { href: "/", label: t("footer.careers") },
    { href: "/", label: t("footer.press") },
    { href: "/", label: t("footer.contact") },
  ];
  const legal = [
    { href: "/", label: t("footer.terms") },
    { href: "/", label: t("footer.privacy") },
    { href: "/", label: t("footer.cookies") },
    { href: "/", label: t("footer.compliance") },
  ];

  return (
    <footer className="mt-stack-xl border-t border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-stack-lg">
          <div className="col-span-2">
            <span className="font-display-md text-display-md tracking-tighter v-gradient-text leading-none">
              V Living
            </span>
            <p className="text-on-surface-variant font-body-md mt-4 max-w-xs">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-2 mt-6">
              <ThemeToggle />
              <LangToggle />
            </div>
          </div>

          <FooterCol title={t("footer.explore")} links={explore} />
          <FooterCol title={t("footer.company")} links={company} />
          <FooterCol title={t("footer.legal")} links={legal} />
        </div>

        <div className="mt-stack-lg pt-stack-md border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-on-surface-variant font-label-sm text-label-sm">
            © {new Date().getFullYear()} V Living. {t("footer.rights")}
          </p>
          <p className="text-on-surface-variant font-label-sm text-label-sm">
            {t("brand.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-label-md text-label-md text-ink uppercase tracking-widest mb-4">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l, i) => (
          <li key={`${l.label}-${i}`}>
            <Link
              href={l.href}
              className="text-on-surface-variant hover:text-accent font-body-md transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
