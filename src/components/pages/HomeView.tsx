"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SmartImage } from "@/components/SmartImage";
import { Carousel } from "@/components/Carousel";
import { PropertyCard } from "@/components/PropertyCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { properties, experiences, services } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const attik = properties.find((p) => p.id === "attik") ?? properties[0];

// On-brand Riviera-Maya imagery for the included-services grid.
const serviceImg: Record<string, string> = {
  movilidad: "photo-1502877338535-766e1452684a",
  hoteleria: "photo-1611892440504-42a792e24d32",
  gastronomia: "photo-1414235077428-338989a2e8c0",
  experiencias: "photo-1599582909646-d7c0a9e2a4f7",
  "atencion-premium": "photo-1551632436-cbf8dd35adfa",
  "descuentos-vexperiences": "photo-1514525253161-7a46d19cd819",
};
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export function HomeView() {
  const { t } = useT();

  const steps = [
    { n: "01", titleKey: "home.how.s1.title", bodyKey: "home.how.s1.body", icon: "shopping_bag" },
    { n: "02", titleKey: "home.how.s2.title", bodyKey: "home.how.s2.body", icon: "account_balance" },
    { n: "03", titleKey: "home.how.s3.title", bodyKey: "home.how.s3.body", icon: "key" },
  ];

  return (
    <main className="max-w-7xl mx-auto pb-24">
      {/* ===================== ATTIK HERO ===================== */}
      <section className="px-margin-mobile pt-4">
        <div className="relative min-h-[640px] md:min-h-[620px] w-full rounded-3xl overflow-hidden flex flex-col justify-end">
          <SmartImage
            src={attik.image}
            alt="ATTIK — Tulum"
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" />
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
            <span className="pill-badge">{t("home.hero.badge")}</span>
            <span className="slide-no text-white/70 text-[11px] font-semibold">01 / 06</span>
          </div>

          <div className="relative z-10 p-margin-mobile md:p-12 space-y-5 max-w-2xl">
            <span className="eyebrow text-accent">{t("home.hero.eyebrow")}</span>
            <h1 className="editorial-title text-white text-[88px] md:text-[140px]">ATTIK</h1>
            <p className="text-white/85 font-label-md tracking-[0.18em] uppercase -mt-3">
              {attik.tagline}
            </p>
            <p className="text-white text-body-lg font-body-lg max-w-lg">
              {t("home.hero.value")}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="trust-chip">{SITE.trust.fideicomiso}</span>
              <span className="trust-chip">{SITE.trust.vbilling}</span>
              <span className="trust-chip">{t("home.trust.years")}</span>
            </div>

            <div className="pt-2">
              <WhatsAppCta
                label={t("cta.discoverProject")}
                message={t("wa.attik")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ¿QUÉ ES V·LIVING? ===================== */}
      <section className="px-margin-mobile mt-stack-xl">
        <div className="glass-card rounded-2xl p-stack-lg flex flex-col md:flex-row md:items-center gap-5">
          <span className="pill-badge shrink-0">{t("home.what.badge")}</span>
          <p className="font-display text-[22px] md:text-[28px] font-extrabold tracking-tight text-ink leading-snug md:border-l border-border md:pl-6">
            {t("home.what.body")}
          </p>
        </div>
      </section>

      {/* ===================== CÓMO FUNCIONA (V·Billing) ===================== */}
      <section className="px-margin-mobile mt-stack-xl">
        <div className="mb-stack-lg">
          <span className="eyebrow">{t("home.how.eyebrow")}</span>
          <h2 className="editorial-title text-ink text-[40px] md:text-[56px] mt-4">
            {t("home.how.title")}
          </h2>
          <p className="text-on-surface-variant font-body-lg mt-2 max-w-xl">
            {t("home.how.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {steps.map((s) => (
            <div
              key={s.n}
              className="obsidian-card rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon name={s.icon} className="text-accent" />
                </span>
                <span className="font-display text-[44px] font-extrabold text-border/30 leading-none">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-[22px] font-extrabold tracking-tight text-ink uppercase">
                {t(s.titleKey)}
              </h3>
              <p className="text-on-surface-variant font-body-md">{t(s.bodyKey)}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
          <Icon name="verified" className="gold-accent text-[20px]" filled />
          <span className="gold-accent font-semibold">{t("home.trust.years")}</span>
        </p>
      </section>

      {/* ===================== EL MODELO ===================== */}
      <section className="px-margin-mobile mt-stack-xl">
        <div className="obsidian-card rounded-3xl p-stack-lg md:p-12 relative overflow-hidden">
          <span className="slide-no absolute top-6 right-8 text-[11px] font-semibold hidden md:block">
            04 / 06
          </span>
          <span className="eyebrow">{t("home.model.eyebrow")}</span>
          <h2 className="editorial-title text-ink text-[44px] md:text-[68px] mt-4 max-w-3xl">
            {t("home.model.title")}
          </h2>
          <p className="text-on-surface-variant font-body-lg mt-4 max-w-2xl">
            {t("home.model.body")}
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-xl">
            {[
              { v: "14", l: t("home.model.fractions") },
              { v: "3", l: t("home.model.weeks") },
              { v: "1+1+1", l: t("home.model.split") },
            ].map((m) => (
              <div key={m.l} className="text-center">
                <div className="font-display text-[40px] md:text-[56px] font-extrabold text-accent leading-none">
                  {m.v}
                </div>
                <p className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest mt-2">
                  {m.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TU FRACCIÓN INCLUYE ===================== */}
      <section className="px-margin-mobile mt-stack-xl">
        <div className="mb-stack-lg">
          <span className="eyebrow">{t("home.included.eyebrow")}</span>
          <h2 className="editorial-title text-ink text-[40px] md:text-[56px] mt-4">
            {t("home.included.title")}
          </h2>
          <p className="text-on-surface-variant font-body-lg mt-2 max-w-xl">
            {t("home.included.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {services.map((s) => (
            <article
              key={s.id}
              className="obsidian-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className="relative h-44 overflow-hidden">
                <SmartImage
                  src={unsplash(serviceImg[s.id] ?? "photo-1551632436-cbf8dd35adfa")}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center text-accent">
                  <Icon name={s.icon} />
                </span>
                <h3 className="absolute bottom-3 left-4 right-4 font-display text-[20px] font-extrabold uppercase tracking-tight text-white">
                  {s.name}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-on-surface-variant font-body-md">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-on-surface-variant font-body-md">{t("home.included.more")}</p>
      </section>

      {/* ===================== DESARROLLOS ===================== */}
      <section className="mt-stack-xl px-margin-mobile">
        <div className="flex items-end justify-between gap-4 mb-stack-lg">
          <div>
            <span className="eyebrow">{t("home.devs.eyebrow")}</span>
            <h2 className="editorial-title text-ink text-[40px] md:text-[56px] mt-4">
              {t("home.devs.title")}
            </h2>
          </div>
          <Link
            href="/fractions"
            className="text-accent font-label-md flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
          >
            {t("home.seeAll")} <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
        <Carousel itemClassName="min-w-[280px] sm:min-w-[360px]" ariaLabel={t("home.devs.title")}>
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </Carousel>
      </section>

      {/* ===================== EXPERIENCIAS ===================== */}
      <section className="mt-stack-xl px-margin-mobile">
        <div className="flex items-end justify-between gap-4 mb-stack-lg">
          <div>
            <span className="eyebrow">{t("home.exp.eyebrow")}</span>
            <h2 className="editorial-title text-ink text-[40px] md:text-[56px] mt-4">
              {t("home.experiences.title")}
            </h2>
          </div>
          <Link
            href="/experiences"
            className="text-accent font-label-md flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
          >
            {t("home.seeAll")} <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
        <Carousel itemClassName="min-w-[280px] sm:min-w-[340px]" ariaLabel={t("home.experiences.title")}>
          {experiences.map((e) => (
            <ExperienceCard key={e.id} experience={e} />
          ))}
        </Carousel>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="mt-stack-xl px-margin-mobile">
        <div className="obsidian-card rounded-3xl overflow-hidden relative flex flex-col items-center text-center p-stack-xl">
          <div className="absolute inset-0 opacity-30">
            <SmartImage
              src={unsplash("photo-1505691938895-1758d7feb511", 2000)}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
          </div>
          <div className="relative z-10 max-w-2xl space-y-5">
            <span className="eyebrow text-accent mx-auto">{t("home.cta.eyebrow")}</span>
            <h2 className="editorial-title text-white text-[40px] md:text-[60px]">
              {t("home.cta.title")}
            </h2>
            <p className="text-white/85 font-body-lg">{t("home.cta.body")}</p>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              <span className="trust-chip">{SITE.trust.fideicomiso}</span>
              <span className="trust-chip">{SITE.trust.vbilling}</span>
            </div>
            <div className="pt-3 flex justify-center">
              <WhatsAppCta label={t("cta.understand")} message={t("wa.general")} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
