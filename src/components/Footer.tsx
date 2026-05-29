"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { ThemeToggle, LangToggle } from "./ThemeLangToggle";
import { SITE, waLink, mailto } from "@/lib/site";

export function Footer() {
  const { t } = useT();

  const explore = [
    { href: "/", label: t("nav.home") },
    { href: "/fractions", label: t("nav.developments") },
    { href: "/experiences", label: t("nav.experiences") },
    { href: "/services", label: t("nav.included") },
    { href: "/owner", label: t("nav.portal") },
  ];
  const legal = [
    { href: "/", label: t("footer.terms") },
    { href: "/", label: t("footer.privacy") },
    { href: "/", label: t("footer.compliance") },
  ];

  return (
    <footer className="mt-stack-xl border-t border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-stack-lg">
          <div className="col-span-2">
            <Logo imgClassName="h-10 w-auto" />
            <p className="text-on-surface-variant font-body-md mt-4 max-w-xs">
              {t("footer.tagline")}
            </p>

            <div className="mt-5 space-y-2">
              <a
                href={`https://${SITE.domain}`}
                className="flex items-center gap-2 text-on-surface-variant hover:text-accent transition-colors font-label-md text-label-md"
              >
                <Icon name="language" className="text-[18px]" /> {SITE.domain}
              </a>
              <a
                href={mailto}
                className="flex items-center gap-2 text-on-surface-variant hover:text-accent transition-colors font-label-md text-label-md"
              >
                <Icon name="mail" className="text-[18px]" /> {SITE.email}
              </a>
              <span className="trust-chip mt-1">{SITE.trust.fideicomiso}</span>
            </div>

            <a
              href={waLink(t("wa.general"))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-accent text-on-primary px-5 py-2.5 rounded-full font-label-md text-label-md hover:brightness-110 transition-all"
            >
              <Icon name="chat" className="text-[18px]" filled />
              WhatsApp · {SITE.whatsappShort}
            </a>

            <div className="flex items-center gap-2 mt-6">
              <ThemeToggle />
              <LangToggle />
            </div>
          </div>

          <FooterCol title={t("footer.explore")} links={explore} />
          <FooterCol title={t("footer.legal")} links={legal} />
        </div>

        <div className="mt-stack-lg pt-stack-md border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-on-surface-variant font-label-sm text-label-sm">
            © {new Date().getFullYear()} {SITE.name} · {SITE.domain}. {t("footer.rights")}
          </p>
          <p className="text-on-surface-variant font-label-sm text-label-sm">
            {SITE.legal} · {SITE.lockup}
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
