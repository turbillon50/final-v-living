"use client";

import { useMemo, useState } from "react";
import { Icon } from "./Icon";
import { PropertyCard } from "./PropertyCard";
import { useT } from "@/lib/i18n";
import type { Property } from "@/lib/types";

// City filters — ONLY Riviera Maya.
const CITY_KEYS: Record<string, string> = {
  Todos: "dev.filter.all",
  Tulum: "dev.filter.tulum",
  Cancún: "dev.filter.cancun",
  "Playa del Carmen": "dev.filter.playa",
};
const CITIES = ["Todos", "Tulum", "Cancún", "Playa del Carmen"];

const STATUS_KEYS: Record<string, string> = {
  Todos: "dev.status.all",
  Disponible: "dev.status.available",
  Próximamente: "dev.status.soon",
};
const STATUSES = ["Todos", "Disponible", "Próximamente"];

export function FractionsExplorer({
  properties,
  initialQuery = "",
}: {
  properties: Property[];
  initialQuery?: string;
}) {
  const { t } = useT();
  const [query, setQuery] = useState(initialQuery);
  const [city, setCity] = useState("Todos");
  const [status, setStatus] = useState("Todos");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesCity = city === "Todos" || p.city === city;
      const matchesStatus = status === "Todos" || p.status === status;
      const matchesQuery =
        !query ||
        `${p.name} ${p.location} ${p.city} ${p.kind}`
          .toLowerCase()
          .includes(query.toLowerCase());
      return matchesCity && matchesStatus && matchesQuery;
    });
  }, [properties, query, city, status]);

  return (
    <>
      <section className="px-margin-mobile pt-stack-md pb-stack-md">
        <span className="eyebrow">{t("dev.eyebrow")}</span>
        <h1 className="editorial-title text-ink text-[44px] md:text-[60px] mt-4 mb-2">
          {t("dev.title")}
        </h1>
        <p className="text-on-surface-variant font-body-lg mb-5 max-w-xl">
          {t("dev.subtitle")}
        </p>
        <span className="trust-chip">{t("home.trust.years")}</span>

        <div className="relative group mt-5">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-surface-container-high border border-border rounded-xl py-4 pl-12 pr-4 text-body-md focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all placeholder:text-on-surface-variant text-ink"
            placeholder={t("dev.searchPlaceholder")}
            type="text"
          />
          <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
        </div>
      </section>

      <section className="px-margin-mobile mb-stack-md flex gap-3 overflow-x-auto hide-scrollbar whitespace-nowrap">
        {CITIES.map((c) => (
          <FilterPill key={c} active={city === c} onClick={() => setCity(c)} label={t(CITY_KEYS[c])} />
        ))}
      </section>
      <section className="px-margin-mobile mb-stack-lg flex gap-3 overflow-x-auto hide-scrollbar whitespace-nowrap">
        {STATUSES.map((s) => (
          <FilterPill key={s} active={status === s} onClick={() => setStatus(s)} label={t(STATUS_KEYS[s])} subtle />
        ))}
      </section>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <section className="px-margin-mobile grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </section>
      )}
    </>
  );
}

function FilterPill({
  active,
  onClick,
  label,
  subtle,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  subtle?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 min-h-[40px] rounded-full font-label-md text-label-md transition-all ${
        active
          ? subtle
            ? "bg-ink text-background"
            : "bg-accent text-on-primary cyan-glow"
          : "border border-border text-on-surface-variant hover:border-accent"
      }`}
    >
      {label}
    </button>
  );
}

function EmptyState() {
  const { t } = useT();
  return (
    <div className="px-margin-mobile py-stack-xl flex flex-col items-center text-center gap-4">
      <span className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center">
        <Icon name="apartment" className="text-accent text-[32px]" />
      </span>
      <h3 className="font-headline-lg text-headline-lg text-ink">{t("dev.empty.title")}</h3>
      <p className="text-on-surface-variant font-body-md max-w-sm">{t("dev.empty.body")}</p>
    </div>
  );
}
