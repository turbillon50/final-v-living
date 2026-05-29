"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useT } from "@/lib/i18n";
import { Icon } from "./Icon";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const { t } = useT();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      aria-label={t("nav.theme")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`h-9 w-9 min-w-[36px] flex items-center justify-center rounded-full fill-subtle hover:fill-subtle-2 text-ink transition-colors active:scale-90 ${className}`}
    >
      {/* Avoid hydration mismatch: render a neutral icon until mounted */}
      <Icon name={mounted && !isDark ? "light_mode" : "dark_mode"} className="text-[20px]" />
    </button>
  );
}

export function LangToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useT();
  return (
    <button
      type="button"
      aria-label="Language / Idioma"
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className={`h-9 px-3 min-w-[44px] flex items-center justify-center rounded-full fill-subtle hover:fill-subtle-2 text-ink font-label-md text-label-md transition-colors active:scale-90 ${className}`}
    >
      {locale === "es" ? "ES" : "EN"}
    </button>
  );
}
