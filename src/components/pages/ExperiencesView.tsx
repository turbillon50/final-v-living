"use client";

import { useState } from "react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { FilterChips } from "@/components/FilterChips";
import { Icon } from "@/components/Icon";
import { experiences } from "@/lib/data";
import { useT } from "@/lib/i18n";

// Display label -> data category
const CAT_MAP: Record<string, string | null> = {
  all: null,
  sailing: "Navegación",
  wellness: "Bienestar",
  adventure: "Aventura",
  gastronomy: "Gastronomía",
};

export function ExperiencesView() {
  const { t } = useT();
  const [query, setQuery] = useState("");
  const [filterKey, setFilterKey] = useState("all");

  const filterKeys = ["all", "sailing", "wellness", "adventure", "gastronomy"];
  const options = filterKeys.map((k) => t(`exp.filter.${k}`));

  const cat = CAT_MAP[filterKey];
  const filtered = experiences.filter((e) => {
    const matchCat = !cat || e.category === cat;
    const matchQuery =
      !query || `${e.title} ${e.category}`.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <main className="max-w-7xl mx-auto px-margin-mobile pb-32">
      <section className="py-stack-lg">
        <h2 className="font-display-md text-display-md text-ink mb-stack-sm">{t("exp.title")}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
          {t("exp.subtitle")}
        </p>
      </section>

      <section className="mb-stack-lg sticky top-16 z-40 bg-background/60 backdrop-blur-md py-4 -mx-margin-mobile px-margin-mobile">
        <div className="relative mb-stack-md">
          <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-surface-container-highest border border-border rounded-xl py-4 pl-12 pr-4 text-on-surface focus:ring-1 focus:ring-accent focus:outline-none placeholder:text-on-surface-variant font-body-md text-body-md transition-all"
            placeholder={t("exp.searchPlaceholder")}
            type="text"
          />
        </div>
        <FilterChips
          options={options}
          onChange={(label) => {
            const idx = options.indexOf(label);
            setFilterKey(filterKeys[idx] ?? "all");
          }}
        />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((e) => (
          <ExperienceCard key={e.id} experience={e} />
        ))}
      </div>
    </main>
  );
}
