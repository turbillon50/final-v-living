"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ExperienceCard } from "@/components/ExperienceCard";
import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";
import { SmartImage } from "@/components/SmartImage";
import { Carousel } from "@/components/Carousel";
import { formatMXN } from "@/lib/data";
import { useT } from "@/lib/i18n";
import type { DocumentItem, Experience, Property } from "@/lib/types";

export function PropertyDetailView({
  property,
  experiences,
  documents,
}: {
  property: Property;
  experiences: Experience[];
  documents: DocumentItem[];
}) {
  const { t } = useT();

  return (
    <main className="min-h-dvh max-w-7xl mx-auto pb-40">
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
        <SmartImage src={property.image} alt={property.name} loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </section>

      <div className="px-margin-mobile md:px-margin-desktop -mt-16 relative z-10 space-y-stack-lg">
        {/* Header + price */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="font-display-md text-display-md text-ink drop-shadow-lg">{property.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-on-surface-variant">
              <span className="flex items-center gap-1.5 font-label-md text-label-md">
                <Icon name="location_on" className="text-accent text-lg" />
                {property.location}
              </span>
              <span className="flex items-center gap-1.5 font-label-md text-label-md">
                <Icon name="star" className="text-accent text-lg" filled />
                {property.rating} ({property.reviews} {t("property.reviews")})
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-4">
              <StatTile label={t("property.stat.fraction")} value={property.fraction} />
              <StatTile label={t("property.stat.weeks")} value={String(property.weeksPerYear)} />
              <StatTile label={t("property.stat.yield")} value={`${property.yieldPct}%`} />
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-accent/20 shadow-[0_0_30px_rgba(0,251,251,0.05)]">
            <p className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-widest">
              {t("property.investFrom")}
            </p>
            <h2 className="font-display-md text-display-md text-accent mb-4">
              {formatMXN(property.priceMXN)} <span className="text-headline-lg font-normal">MXN</span>
            </h2>
            <button className="w-full h-14 bg-accent text-on-primary font-label-md text-label-md rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-2">
              {t("property.viewAvailable")}
              <Icon name="chevron_right" />
            </button>
          </div>
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <h3 className="font-headline-lg text-headline-lg text-ink">{t("property.about")}</h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
            {property.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {property.amenities.map((a) => (
              <span
                key={a.label}
                className="px-4 py-2 fill-subtle rounded-full border border-border text-label-md text-on-surface-variant flex items-center gap-2"
              >
                <Icon name={a.icon} className="text-accent text-[18px]" /> {a.label}
              </span>
            ))}
          </div>
        </section>

        {/* Availability */}
        <section className="space-y-stack-md">
          <div className="flex justify-between items-end">
            <h3 className="font-headline-lg text-headline-lg text-ink">{t("property.availability")}</h3>
            <span className="font-label-md text-label-md text-accent">Mayo 2026</span>
          </div>
          <AvailabilityCalendar />
        </section>

        {/* Nearby experiences */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-lg text-headline-lg text-ink">{t("property.localExperiences")}</h3>
            <Link href="/experiences" className="text-accent font-label-md text-label-md">
              {t("property.seeAll")}
            </Link>
          </div>
          <Carousel itemClassName="min-w-[280px] sm:min-w-[340px]" ariaLabel={t("property.localExperiences")}>
            {experiences.map((e) => (
              <ExperienceCard key={e.id} experience={e} />
            ))}
          </Carousel>
        </section>

        {/* Document vault */}
        <section className="space-y-4">
          <h3 className="font-headline-lg text-headline-lg text-ink">{t("property.documentVault")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {documents.slice(0, 2).map((d) => (
              <div
                key={d.id}
                className="glass-panel p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-accent/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon name={d.icon} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-ink">{d.name}</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      {d.type} • {d.size}
                    </p>
                  </div>
                </div>
                <Icon name="download" className="text-on-surface-variant group-hover:text-accent" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky action footer */}
      <div className="fixed bottom-20 md:bottom-0 left-0 right-0 z-40 p-margin-mobile md:p-8 pointer-events-none">
        <div className="max-w-4xl mx-auto glass-panel p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-4 pointer-events-auto">
          <Link
            href="/stays"
            className="flex-1 h-14 flex items-center justify-center border border-border hover:fill-subtle text-ink rounded-2xl font-label-md text-label-md transition-all active:scale-[0.98]"
          >
            {t("property.reserveStay")}
          </Link>
          <Link
            href="/payments"
            className="flex-1 h-14 flex items-center justify-center bg-accent text-on-primary rounded-2xl font-label-md text-label-md shadow-[0_4px_20px_rgba(0,251,251,0.2)] hover:brightness-110 transition-all active:scale-[0.98]"
          >
            {t("property.acquireFraction")}
          </Link>
        </div>
      </div>
    </main>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-panel rounded-xl p-4 flex flex-col items-center justify-center text-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">{label}</span>
      <span className="font-headline-lg text-headline-lg text-accent">{value}</span>
    </div>
  );
}
