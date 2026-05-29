"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "./Icon";
import { useT } from "@/lib/i18n";

export function HeroSearch() {
  const router = useRouter();
  const { t } = useT();
  const [q, setQ] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(q ? `/fractions?q=${encodeURIComponent(q)}` : "/fractions");
  };

  return (
    <form
      onSubmit={submit}
      className="glass mt-stack-lg p-2 rounded-full flex items-center shadow-2xl w-full max-w-xl group focus-within:border-accent/40 focus-within:cyan-glow transition-all duration-300"
    >
      <Icon name="search" className="ml-4 text-on-surface-variant" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="bg-transparent border-none focus:ring-0 focus:outline-none text-ink placeholder:text-on-surface-variant w-full font-body-md px-3"
        placeholder={t("home.hero.searchPlaceholder")}
        type="text"
      />
      <button
        type="submit"
        className="bg-accent text-on-primary px-6 py-2 min-h-[44px] rounded-full font-label-md hover:scale-105 transition-transform whitespace-nowrap"
      >
        {t("home.hero.cta")}
      </button>
    </form>
  );
}
