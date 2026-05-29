"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "./Icon";
import { PropertyCard } from "./PropertyCard";
import { SmartImage } from "./SmartImage";
import { formatMXN } from "@/lib/data";
import { useT } from "@/lib/i18n";
import type { Property } from "@/lib/types";

// Maps a data category value to its i18n key.
const CATEGORY_KEYS: Record<string, string> = {
  Todos: "fractions.cat.all",
  Playa: "fractions.cat.beach",
  Montaña: "fractions.cat.mountain",
  Ciudad: "fractions.cat.city",
  Wellness: "fractions.cat.wellness",
};
const CATEGORIES = ["Todos", "Playa", "Montaña", "Ciudad", "Wellness"];

export function FractionsExplorer({
  properties,
  initialQuery = "",
}: {
  properties: Property[];
  initialQuery?: string;
}) {
  const { t } = useT();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("Todos");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesCat = category === "Todos" || p.category === category;
      const matchesQuery =
        !query ||
        `${p.name} ${p.location} ${p.city}`.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [properties, query, category]);

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <>
      <section className="px-margin-mobile pt-stack-md pb-stack-lg">
        <h1 className="font-display-md text-display-md mb-4 text-ink">{t("fractions.title")}</h1>
        <div className="relative group">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-surface-container-high border border-border rounded-xl py-4 pl-12 pr-4 text-body-md focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all placeholder:text-on-surface-variant text-ink"
            placeholder={t("fractions.searchPlaceholder")}
            type="text"
          />
          <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
        </div>
      </section>

      <section className="px-margin-mobile mb-stack-lg flex gap-3 overflow-x-auto hide-scrollbar whitespace-nowrap">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-6 py-2 min-h-[44px] rounded-full font-label-md text-label-md transition-all ${
              category === c
                ? "bg-accent text-on-primary cyan-glow"
                : "border border-border text-on-surface-variant hover:border-accent"
            }`}
          >
            {t(CATEGORY_KEYS[c])}
          </button>
        ))}
      </section>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <section className="px-margin-mobile grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
          {featured && <FeaturedCard property={featured} />}
          {rest.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </section>
      )}
    </>
  );
}

function FeaturedCard({ property }: { property: Property }) {
  const { t } = useT();
  return (
    <Link
      href={`/fractions/${property.id}`}
      className="glass-card rounded-2xl overflow-hidden group lg:col-span-2 block animate-fade-up"
    >
      <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <SmartImage
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 bg-accent/20 backdrop-blur-md border border-accent/30 px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase text-accent">
          {t("fractions.featured")}
        </span>
      </div>
      <div className="p-stack-md">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-ink">{property.name}</h2>
            <p className="text-on-surface-variant text-label-md flex items-center gap-1">
              <Icon name="location_on" className="text-[16px]" /> {property.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">
              {t("fractions.from")}
            </p>
            <p className="text-ink font-headline-lg text-headline-lg">
              {formatMXN(property.priceMXN)}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border my-4">
          <Stat label={t("fractions.stat.fraction")} value={`${property.fraction} ${t("fractions.available")}`} />
          <Stat label={t("fractions.stat.stays")} value={`${property.weeksPerYear} ${t("fractions.weeksPerYear")}`} />
          <Stat label={t("fractions.stat.yield")} value={`${property.yieldPct}%`} accent />
        </div>
        <div className="flex gap-3">
          <span className="flex-1 bg-ink text-background py-3 rounded-xl font-label-md text-label-md text-center">
            {t("fractions.viewFractions")}
          </span>
          <span className="flex-1 border border-accent text-accent py-3 rounded-xl font-label-md text-label-md text-center">
            {t("fractions.acquire")}
          </span>
        </div>
      </div>
    </Link>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="text-center">
      <p className="text-on-surface-variant text-[10px] uppercase">{label}</p>
      <p className={`font-bold ${accent ? "cyan-accent" : "text-ink"}`}>{value}</p>
    </div>
  );
}

function EmptyState() {
  const { t } = useT();
  return (
    <div className="px-margin-mobile py-stack-xl flex flex-col items-center text-center gap-4">
      <span className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center">
        <Icon name="travel_explore" className="text-accent text-[32px]" />
      </span>
      <h3 className="font-headline-lg text-headline-lg text-ink">{t("fractions.empty.title")}</h3>
      <p className="text-on-surface-variant font-body-md max-w-sm">{t("fractions.empty.body")}</p>
    </div>
  );
}
