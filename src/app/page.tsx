"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { HeroSearch } from "@/components/HeroSearch";
import { SectionHeader } from "@/components/SectionHeader";
import { PropertyCard } from "@/components/PropertyCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SmartImage } from "@/components/SmartImage";
import { Carousel } from "@/components/Carousel";
import { CountUp } from "@/components/CountUp";
import {
  destinations,
  properties,
  experiences,
  services,
  featuredProperties,
  stats,
} from "@/lib/data";
import { useT } from "@/lib/i18n";

const heroSlides = [
  {
    img: "photo-1505691938895-1758d7feb511",
    property: featuredProperties[0],
    titleKey: "home.hero.slide1.title",
    subKey: "home.hero.slide1.sub",
  },
  {
    img: "photo-1613490493576-7fde63acd811",
    property: featuredProperties[1] ?? featuredProperties[0],
    titleKey: "home.hero.slide2.title",
    subKey: "home.hero.slide2.sub",
  },
  {
    img: "photo-1545324418-cc1a3fa10c00",
    property: featuredProperties[2] ?? featuredProperties[0],
    titleKey: "home.hero.slide3.title",
    subKey: "home.hero.slide3.sub",
  },
];

const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export default function HomePage() {
  const { t } = useT();

  return (
    <main className="max-w-7xl mx-auto pb-24">
      {/* ---------- HERO carousel ---------- */}
      <section className="px-margin-mobile pt-4">
        <Carousel
          itemClassName="min-w-full"
          gapClassName="gap-4"
          autoplay
          autoplayMs={6000}
          showDots
          showArrows
          ariaLabel="Villas destacadas"
        >
          {heroSlides.map((s, i) => (
            <div
              key={i}
              className="relative h-[600px] md:h-[560px] w-full rounded-3xl overflow-hidden flex flex-col justify-end"
            >
              <SmartImage src={img(s.img)} alt={t(s.titleKey)} loading={i === 0 ? "eager" : "lazy"} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="relative z-10 p-margin-mobile md:p-10 space-y-4 max-w-2xl">
                <p className="text-accent uppercase tracking-widest font-label-sm">
                  {t("home.hero.eyebrow")}
                </p>
                <h2 className="font-display-lg text-display-lg leading-tight text-white">
                  {t(s.titleKey)}
                </h2>
                <p className="text-white/80 font-body-lg max-w-lg">{t(s.subKey)}</p>
                {s.property && (
                  <Link
                    href={`/fractions/${s.property.id}`}
                    className="inline-flex items-center gap-2 bg-accent text-on-primary px-7 py-3 rounded-full font-label-md hover:scale-105 transition-transform"
                  >
                    {t("home.hero.viewFraction")} — {s.property.name}
                    <Icon name="arrow_forward" className="text-[18px]" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* ---------- Search ---------- */}
      <section className="px-margin-mobile mt-stack-md flex justify-center">
        <HeroSearch />
      </section>

      {/* ---------- What is V Living strip ---------- */}
      <section className="px-margin-mobile mt-stack-lg">
        <div className="glass-card rounded-2xl p-stack-lg flex flex-col md:flex-row md:items-center gap-4">
          <span className="font-label-sm uppercase tracking-widest text-accent whitespace-nowrap">
            {t("home.what.label")}
          </span>
          <p className="font-body-lg text-body-lg text-on-surface md:border-l border-border md:pl-6">
            {t("home.what.body")}
          </p>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="px-margin-mobile mt-stack-xl">
        <SectionHeader title={t("home.how.title")} subtitle={t("home.how.subtitle")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { icon: "explore", t: "home.how.s1.title", b: "home.how.s1.body" },
            { icon: "real_estate_agent", t: "home.how.s2.title", b: "home.how.s2.body" },
            { icon: "calendar_today", t: "home.how.s3.title", b: "home.how.s3.body" },
            { icon: "trending_up", t: "home.how.s4.title", b: "home.how.s4.body" },
          ].map((step, i) => (
            <div key={i} className="obsidian-card rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon name={step.icon} className="text-accent" />
                </span>
                <span className="font-display-md text-display-md text-border/40 leading-none">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-ink">{t(step.t)}</h3>
              <p className="text-on-surface-variant font-body-md">{t(step.b)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Stats band ---------- */}
      <section className="px-margin-mobile mt-stack-xl">
        <div className="glass-card rounded-3xl p-stack-lg grid grid-cols-2 md:grid-cols-4 gap-stack-md">
          <StatItem value={stats.properties} label={t("home.stats.properties")} />
          <StatItem value={stats.cities} label={t("home.stats.cities")} />
          <StatItem value={stats.avgYield} decimals={1} suffix="%" label={t("home.stats.yield")} accent />
          <StatItem value={stats.members} suffix="+" label={t("home.stats.members")} />
        </div>
      </section>

      {/* ---------- Destinations carousel ---------- */}
      <section className="mt-stack-xl px-margin-mobile">
        <SectionHeader
          title={t("home.destinations.title")}
          subtitle={t("home.destinations.subtitle")}
          action={
            <Link
              href="/fractions"
              className="text-accent font-label-md flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
            >
              {t("home.seeAll")} <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          }
        />
        <Carousel itemClassName="min-w-[160px] md:min-w-[240px]" ariaLabel={t("home.destinations.title")}>
          {destinations.map((d) => (
            <Link key={d.name} href="/fractions" className="block group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden obsidian-card relative">
                <SmartImage
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <h4 className="text-white font-headline-lg">{d.name}</h4>
                  <p className="text-white/70 text-label-sm">
                    {d.properties} {t("home.properties")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </section>

      {/* ---------- Featured properties carousel ---------- */}
      <section className="mt-stack-xl px-margin-mobile">
        <SectionHeader
          title={t("home.featured.title")}
          subtitle={t("home.featured.subtitle")}
          action={
            <Link
              href="/fractions"
              className="text-accent font-label-md flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
            >
              {t("home.seeAll")} <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          }
        />
        <Carousel itemClassName="min-w-[280px] sm:min-w-[340px]" ariaLabel={t("home.featured.title")}>
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </Carousel>
      </section>

      {/* ---------- Experiences carousel ---------- */}
      <section className="mt-stack-xl px-margin-mobile">
        <SectionHeader
          title={t("home.experiences.title")}
          subtitle={t("home.experiences.subtitle")}
          action={
            <Link
              href="/experiences"
              className="text-accent font-label-md flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
            >
              {t("home.seeAll")} <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          }
        />
        <Carousel itemClassName="min-w-[280px] sm:min-w-[340px]" ariaLabel={t("home.experiences.title")}>
          {experiences.map((e) => (
            <ExperienceCard key={e.id} experience={e} />
          ))}
        </Carousel>
      </section>

      {/* ---------- Premium services teaser ---------- */}
      <section className="mt-stack-xl px-margin-mobile">
        <SectionHeader
          title={t("home.services.title")}
          subtitle={t("home.services.subtitle")}
          action={
            <Link
              href="/services"
              className="text-accent font-label-md flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
            >
              {t("home.seeAll")} <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          }
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
          {services.slice(0, 6).map((s) => (
            <Link
              key={s.id}
              href="/services"
              className="obsidian-card rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform"
            >
              <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Icon name={s.icon} className="text-accent" />
              </span>
              <span className="font-label-md text-label-md text-ink truncate">{s.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Benefits ---------- */}
      <section className="mt-stack-xl px-margin-mobile">
        <SectionHeader title={t("home.benefits.title")} subtitle={t("home.benefits.subtitle")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { icon: "verified_user", t: "home.benefits.b1.title", b: "home.benefits.b1.body" },
            { icon: "concierge", t: "home.benefits.b2.title", b: "home.benefits.b2.body" },
            { icon: "gavel", t: "home.benefits.b3.title", b: "home.benefits.b3.body" },
            { icon: "trending_up", t: "home.benefits.b4.title", b: "home.benefits.b4.body" },
          ].map((b, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform">
              <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center cyan-glow">
                <Icon name={b.icon} className="text-accent" />
              </span>
              <h3 className="font-headline-lg text-headline-lg text-ink">{t(b.t)}</h3>
              <p className="text-on-surface-variant font-body-md">{t(b.b)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="mt-stack-xl px-margin-mobile">
        <div className="obsidian-card rounded-3xl overflow-hidden relative flex flex-col items-center text-center p-stack-xl">
          <div className="absolute inset-0 opacity-30">
            <SmartImage src={img("photo-1512917774080-9991f1c4c750")} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
          </div>
          <div className="relative z-10 max-w-2xl space-y-5">
            <h3 className="font-display-lg text-display-lg text-white">{t("home.cta.title")}</h3>
            <p className="text-white/80 font-body-lg">{t("home.cta.body")}</p>
            <Link
              href="/fractions"
              className="inline-flex items-center gap-2 bg-accent text-on-primary px-8 py-3.5 rounded-full font-label-md hover:scale-105 transition-transform"
            >
              {t("home.cta.button")}
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatItem({
  value,
  label,
  decimals = 0,
  suffix = "",
  accent,
}: {
  value: number;
  label: string;
  decimals?: number;
  suffix?: string;
  accent?: boolean;
}) {
  return (
    <div className="text-center">
      <div className={`font-display-lg text-display-md ${accent ? "cyan-accent" : "text-ink"}`}>
        <CountUp to={value} decimals={decimals} />
        {suffix}
      </div>
      <p className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest mt-1">
        {label}
      </p>
    </div>
  );
}
