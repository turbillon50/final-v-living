"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { useT } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useT();
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center text-center px-margin-mobile pb-32">
      <div className="relative mb-6">
        <span className="font-display-lg text-[120px] leading-none v-gradient-text">404</span>
        <div className="absolute inset-0 blur-3xl bg-accent/10 -z-10" />
      </div>
      <h1 className="font-headline-lg text-headline-lg text-ink mb-3">{t("notfound.title")}</h1>
      <p className="font-body-md text-on-surface-variant max-w-md mb-8">{t("notfound.body")}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-accent text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:scale-105 transition-transform flex items-center justify-center gap-2"
        >
          <Icon name="home" className="text-[20px]" /> {t("notfound.home")}
        </Link>
        <Link
          href="/fractions"
          className="border border-border text-ink px-8 py-3 rounded-full font-label-md text-label-md hover:fill-subtle transition-colors"
        >
          {t("notfound.fractions")}
        </Link>
      </div>
    </main>
  );
}
