"use client";

import { useEffect } from "react";
import { Icon } from "@/components/Icon";
import { useT } from "@/lib/i18n";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useT();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center text-center px-margin-mobile pb-32">
      <span className="w-16 h-16 rounded-full bg-error/15 flex items-center justify-center mb-6">
        <Icon name="error" className="text-error text-[32px]" />
      </span>
      <h1 className="font-headline-lg text-headline-lg text-ink mb-3">{t("error.title")}</h1>
      <p className="font-body-md text-on-surface-variant max-w-md mb-8">{t("error.body")}</p>
      <button
        onClick={reset}
        className="bg-accent text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:scale-105 transition-transform"
      >
        {t("error.retry")}
      </button>
    </main>
  );
}
