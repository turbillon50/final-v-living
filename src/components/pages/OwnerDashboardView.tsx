"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SmartImage } from "@/components/SmartImage";
import { AreaChart } from "@/components/charts/AreaChart";
import { DonutChart } from "@/components/charts/DonutChart";
import { BarChart } from "@/components/charts/BarChart";
import { Sparkline } from "@/components/charts/Sparkline";
import { CountUp } from "@/components/CountUp";
import { stays, payments, properties, formatMXN } from "@/lib/data";
import { useT } from "@/lib/i18n";

const owned = properties.filter((p) => p.status === "Disponible");
const portfolioSeries = [2_100_000, 2_240_000, 2_180_000, 2_420_000, 2_560_000, 2_710_000, 2_980_000];

export function OwnerDashboardView() {
  const { t } = useT();
  const nextStay = stays[0];
  const portfolioValue = owned.reduce((s, p) => s + p.priceMXN, 0);

  const activity = [
    { icon: "trending_up", textKey: "owner.act.yield", timeKey: "owner.time.2h" },
    { icon: "calendar_today", textKey: "owner.act.booking", timeKey: "owner.time.1d" },
    { icon: "description", textKey: "owner.act.doc", timeKey: "owner.time.3d" },
    { icon: "payments", textKey: "owner.act.payment", timeKey: "owner.time.1w" },
  ];

  const donutColors = ["rgb(var(--accent))", "rgb(var(--accent) / 0.45)"];
  const segments = owned.map((p, i) => ({
    label: p.name,
    value: p.priceMXN,
    color: donutColors[i % donutColors.length],
  }));
  const yieldBars = owned.map((p) => ({ label: p.name, value: p.yieldPct }));

  const quickActions = [
    { icon: "calendar_today", labelKey: "owner.qa.book", href: "/stays" },
    { icon: "sailing", labelKey: "owner.qa.experiences", href: "/experiences" },
    { icon: "description", labelKey: "owner.qa.documents", href: "/contracts" },
    { icon: "payments", labelKey: "owner.qa.pay", href: "/payments" },
  ];

  return (
    <>
      <div className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-display-md text-display-md text-ink mb-2">{t("owner.title")}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t("owner.subtitle")}</p>
        </div>
        <Link
          href="/fractions"
          className="bg-accent text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2 cyan-glow transition-transform active:scale-95 w-fit"
        >
          <Icon name="add_circle" />
          {t("owner.explore")}
        </Link>
      </div>

      {/* KPI / bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-stack-lg">
        <div className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              {t("owner.portfolioValue")}
            </span>
            <Icon name="trending_up" className="text-accent" />
          </div>
          <div>
            <div className="font-display-md text-display-md text-ink mb-2">
              <CountUp to={portfolioValue} format={formatMXN} />{" "}
              <span className="text-headline-lg text-on-surface-variant">MXN</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Icon name="arrow_upward" className="text-[16px]" />
              <span className="font-label-sm text-label-sm">+12.4% {t("owner.thisYear")}</span>
            </div>
          </div>
          <div className="mt-6">
            <AreaChart data={portfolioSeries} height={120} />
          </div>
        </div>

        <KpiCard icon="villa" label={t("owner.myFractions")} value={owned.length} spark={[1, 1, 2, 2, 2]} cta={t("owner.viewPortfolio")} href="/portfolio" />
        <KpiCard icon="event_available" label={t("owner.weeksAvailable")} value={18} spark={[22, 20, 19, 18, 18]} cta={t("owner.bookNow")} href="/stays" />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-stack-lg">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-headline-lg text-headline-lg text-ink mb-4">{t("owner.allocation")}</h3>
          <DonutChart
            segments={segments}
            centerLabel={formatMXN(portfolioValue).replace(/\s?MXN/, "")}
            centerSub={t("owner.portfolioValue")}
          />
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-headline-lg text-headline-lg text-ink mb-4">{t("owner.yieldByProperty")}</h3>
          <BarChart bars={yieldBars} suffix="%" />
        </div>
        <div className="glass-card rounded-2xl p-6 flex flex-col">
          <h3 className="font-headline-lg text-headline-lg text-ink mb-4">{t("owner.portfolioGrowth")}</h3>
          <AreaChart data={portfolioSeries} height={160} className="mt-auto" />
        </div>
      </div>

      {/* Quick actions */}
      <div className="mb-stack-lg">
        <h3 className="font-headline-lg text-headline-lg text-ink mb-stack-md">{t("owner.quickActions")}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {quickActions.map((qa) => (
            <Link
              key={qa.labelKey}
              href={qa.href}
              className="obsidian-card rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-1 transition-transform"
            >
              <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon name={qa.icon} className="text-accent" />
              </span>
              <span className="font-label-md text-label-md text-ink">{t(qa.labelKey)}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Secondary grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Next stay */}
        <div className="flex flex-col gap-gutter">
          <h3 className="font-headline-lg text-headline-lg text-ink flex items-center gap-2">
            <Icon name="location_on" /> {t("owner.nextStay")}
          </h3>
          <div className="glass-card rounded-2xl overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <SmartImage
                src={nextStay.image}
                alt={nextStay.propertyName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-10 bg-accent/90 text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm">
                {t(`stays.status.${nextStay.status === "Confirmada" ? "confirmed" : "pending"}`)}
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-headline-lg text-headline-lg text-ink mb-1">{nextStay.propertyName}</h4>
              <p className="font-label-md text-label-md text-on-surface-variant mb-4">{nextStay.location}</p>
              <div className="flex items-center justify-between border-t border-border pt-4 text-on-surface-variant">
                <div>
                  <p className="font-label-sm text-label-sm uppercase opacity-70">{t("owner.checkIn")}</p>
                  <p className="font-label-md text-label-md text-ink">{nextStay.checkIn}</p>
                </div>
                <Icon name="arrow_forward" className="opacity-40" />
                <div className="text-right">
                  <p className="font-label-sm text-label-sm uppercase opacity-70">{t("owner.checkOut")}</p>
                  <p className="font-label-md text-label-md text-ink">{nextStay.checkOut}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div className="flex flex-col gap-gutter">
          <h3 className="font-headline-lg text-headline-lg text-ink">{t("owner.recentActivity")}</h3>
          <div className="glass-card rounded-2xl p-2 divide-y divide-border">
            {activity.map((a, i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded-lg fill-subtle flex items-center justify-center shrink-0">
                  <Icon name={a.icon} className="text-accent text-[20px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-label-md text-label-md text-ink truncate">{t(a.textKey)}</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">{t(a.timeKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming payments */}
        <div className="flex flex-col gap-gutter">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-lg text-headline-lg text-ink">{t("owner.upcomingPayments")}</h3>
            <Link href="/payments" className="font-label-sm text-label-sm text-accent">
              {t("owner.seeAll")}
            </Link>
          </div>
          <div className="glass-card rounded-2xl p-2 divide-y divide-border">
            {payments.slice(0, 4).map((p) => (
              <div key={p.id} className="flex items-center justify-between gap-3 p-4">
                <div className="min-w-0">
                  <p className="font-label-md text-label-md text-ink truncate">{p.concept}</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">{p.date}</p>
                </div>
                <span className="font-label-md text-label-md text-accent whitespace-nowrap">
                  {formatMXN(p.amountMXN)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function KpiCard({
  icon,
  label,
  value,
  spark,
  cta,
  href,
}: {
  icon: string;
  label: string;
  value: number;
  spark: number[];
  cta: string;
  href: string;
}) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 fill-subtle rounded-lg">
            <Icon name={icon} className="text-accent" />
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{label}</span>
        </div>
        <Sparkline data={spark} className="w-16 h-6" />
      </div>
      <div>
        <div className="font-display-md text-display-md text-ink">
          <CountUp to={value} />
        </div>
        <Link href={href} className="font-label-sm text-label-sm text-accent hover:underline mt-2 inline-block">
          {cta}
        </Link>
      </div>
    </div>
  );
}
