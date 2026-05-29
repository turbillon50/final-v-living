"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SmartImage } from "@/components/SmartImage";
import { stays, properties } from "@/lib/data";
import { useT } from "@/lib/i18n";

const statusStyles: Record<string, string> = {
  Confirmada: "bg-accent/90 text-on-primary",
  Pendiente: "bg-warning/20 text-warning",
  Completada: "fill-subtle-2 text-on-surface-variant",
};

const statusKey: Record<string, string> = {
  Confirmada: "stays.status.confirmed",
  Pendiente: "stays.status.pending",
  Completada: "stays.status.completed",
};

export function StaysView() {
  const { t } = useT();

  return (
    <main className="max-w-7xl mx-auto px-margin-mobile pb-32">
      <section className="py-stack-lg">
        <h2 className="font-display-md text-display-md text-ink mb-stack-sm">{t("stays.title")}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
          {t("stays.subtitle")}
        </p>
      </section>

      <h3 className="font-headline-lg text-headline-lg text-ink mb-stack-md">
        {t("stays.myBookings")}
      </h3>
      {stays.length === 0 ? (
        <div className="glass-panel rounded-2xl p-stack-lg text-center text-on-surface-variant">
          {t("stays.empty")}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-xl">
          {stays.map((s) => (
            <div key={s.id} className="glass-card rounded-2xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <SmartImage
                  src={s.image}
                  alt={s.propertyName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span
                  className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full font-label-sm text-label-sm ${statusStyles[s.status]}`}
                >
                  {t(statusKey[s.status])}
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-headline-lg text-headline-lg text-ink mb-1">{s.propertyName}</h4>
                <p className="font-label-md text-label-md text-on-surface-variant mb-4">{s.location}</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="text-on-surface-variant">
                    <p className="font-label-sm text-label-sm uppercase opacity-70">{t("stays.checkIn")}</p>
                    <p className="font-label-md text-label-md text-ink">{s.checkIn}</p>
                  </div>
                  <Icon name="arrow_forward" className="text-on-surface-variant opacity-40" />
                  <div className="text-right text-on-surface-variant">
                    <p className="font-label-sm text-label-sm uppercase opacity-70">{t("stays.checkOut")}</p>
                    <p className="font-label-md text-label-md text-ink">{s.checkOut}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3 className="font-headline-lg text-headline-lg text-ink mb-stack-md">{t("stays.bookNew")}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {properties.slice(0, 3).map((p) => (
          <Link
            key={p.id}
            href={`/fractions/${p.id}`}
            className="obsidian-card rounded-2xl overflow-hidden group h-56 relative flex items-end"
          >
            <SmartImage
              src={p.image}
              alt={p.name}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="relative z-10 p-5">
              <h4 className="font-headline-lg text-headline-lg text-white">{p.name}</h4>
              <p className="text-white/70 text-label-sm">{p.city}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
