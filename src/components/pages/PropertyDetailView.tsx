"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SmartImage } from "@/components/SmartImage";
import { Carousel } from "@/components/Carousel";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { formatMXN, services } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { SITE } from "@/lib/site";
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
  const soon = property.status === "Próximamente";
  const waMsg = soon ? t("wa.soon") : t("wa.attik");

  return (
    <main className="min-h-dvh max-w-7xl mx-auto pb-40">
      {/* Hero */}
      <section className="relative h-[460px] md:h-[560px] w-full overflow-hidden">
        <SmartImage src={property.image} alt={property.name} loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-black/40" />
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
          <span className="pill-badge bg-black/40 backdrop-blur-md">
            {soon
              ? t("status.soon")
              : `${t("card.delivery")} ${property.delivery}`}
          </span>
        </div>
        <div className="absolute bottom-6 left-margin-mobile md:left-margin-desktop right-margin-mobile">
          <span className="eyebrow text-accent">
            {property.city.toUpperCase()} · {property.state.toUpperCase()}
          </span>
          <h1 className="editorial-title text-white text-[64px] md:text-[100px] mt-3">{property.name}</h1>
          <p className="text-white/85 font-label-md tracking-[0.18em] uppercase -mt-1">
            {property.tagline}
          </p>
        </div>
      </section>

      <div className="px-margin-mobile md:px-margin-desktop mt-stack-lg relative z-10 space-y-stack-lg">
        {/* Header + price / lead */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="trust-chip">{SITE.trust.fideicomiso}</span>
              <span className="trust-chip">{SITE.trust.vbilling}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2">
              <StatTile label={t("detail.fractions")} value={String(property.totalFractions)} />
              <StatTile label={t("detail.weeks")} value={String(property.weeksPerFraction)} />
              <StatTile label={t("detail.kindShort")} value={t("detail.boutique")} />
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-accent/20 shadow-[0_0_30px_rgb(var(--accent)/0.05)]">
            {soon ? (
              <>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-widest">
                  {t("status.soon")}
                </p>
                <h2 className="font-display text-[26px] font-extrabold text-ink mb-4">
                  {property.city}, {property.state}
                </h2>
                <p className="text-on-surface-variant font-body-md mb-5">{t("detail.soonLead")}</p>
              </>
            ) : (
              <>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-widest">
                  {t("detail.from")}
                </p>
                <h2 className="font-display text-[34px] font-extrabold text-accent mb-1">
                  {formatMXN(property.priceFromMXN)}{" "}
                  <span className="text-headline-lg font-normal text-on-surface-variant">MXN</span>
                </h2>
                <p className="text-on-surface-variant font-body-md mb-5">
                  {property.totalFractions} {t("card.fractions")} · {property.weeksPerFraction}{" "}
                  {t("detail.weeksSplit")}
                </p>
              </>
            )}
            <WhatsAppCta
              className="w-full"
              label={soon ? t("cta.lead") : t("cta.discoverProject")}
              message={waMsg}
            />
          </div>
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <span className="eyebrow">{t("detail.about.eyebrow")}</span>
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

        {/* El modelo */}
        <section className="obsidian-card rounded-3xl p-stack-lg md:p-10">
          <span className="eyebrow">{t("home.model.eyebrow")}</span>
          <h3 className="editorial-title text-ink text-[32px] md:text-[44px] mt-4">
            {t("home.model.title")}
          </h3>
          <p className="text-on-surface-variant font-body-lg mt-3 max-w-2xl">
            {t("home.model.body")}
          </p>
        </section>

        {/* Gallery */}
        <section className="space-y-4">
          <span className="eyebrow">{t("detail.gallery")}</span>
          <Carousel itemClassName="min-w-[80%] sm:min-w-[460px]" ariaLabel={t("detail.gallery")}>
            {property.gallery.map((g, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden obsidian-card">
                <SmartImage src={g} alt={`${property.name} ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </Carousel>
        </section>

        {/* Tu fracción incluye */}
        <section className="space-y-4">
          <span className="eyebrow">{t("home.included.eyebrow")}</span>
          <h3 className="editorial-title text-ink text-[28px] md:text-[40px]">
            {t("home.included.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {services.map((s) => (
              <div key={s.id} className="obsidian-card rounded-2xl p-5 flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon name={s.icon} className="text-accent" />
                </span>
                <div>
                  <h4 className="font-display text-[16px] font-extrabold uppercase tracking-tight text-ink">
                    {s.name}
                  </h4>
                  <p className="text-on-surface-variant font-label-sm text-label-sm mt-1">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local experiences */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="eyebrow">{t("detail.localExperiences")}</span>
            <Link href="/experiences" className="text-accent font-label-md text-label-md">
              {t("detail.seeAll")}
            </Link>
          </div>
          <Carousel itemClassName="min-w-[280px] sm:min-w-[340px]" ariaLabel={t("detail.localExperiences")}>
            {experiences.map((e) => (
              <ExperienceCard key={e.id} experience={e} />
            ))}
          </Carousel>
        </section>

        {/* Fideicomiso / documents */}
        <section className="space-y-4">
          <span className="eyebrow">{t("detail.docs")}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {documents.slice(0, 2).map((d) => (
              <div
                key={d.id}
                className="glass-panel p-5 rounded-2xl flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Icon name={d.icon} className="gold-accent" />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-ink">{d.name}</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{d.type} • {d.size}</p>
                  </div>
                </div>
                <Icon name="lock" className="gold-accent" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky WhatsApp action footer */}
      <div className="fixed bottom-[72px] md:bottom-0 left-0 right-0 z-40 p-margin-mobile md:p-8 pointer-events-none">
        <div className="max-w-3xl mx-auto glass-panel p-3 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.45)] flex items-center justify-center pointer-events-auto">
          <WhatsAppCta
            className="w-full max-w-md"
            label={soon ? t("cta.lead") : t("cta.discoverProject")}
            message={waMsg}
          />
        </div>
      </div>
    </main>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-panel rounded-xl p-4 flex flex-col items-center justify-center text-center">
      <span className="font-display text-[26px] font-extrabold text-accent leading-none">{value}</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-1.5">{label}</span>
    </div>
  );
}
