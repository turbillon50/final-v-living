"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SmartImage } from "@/components/SmartImage";
import { properties, formatMXN } from "@/lib/data";
import { useT } from "@/lib/i18n";

const owned = properties.slice(0, 2);

export function PortfolioView() {
  const { t } = useT();
  const totalValue = owned.reduce((sum, p) => sum + p.priceMXN, 0);
  const avgYield = owned.reduce((s, p) => s + p.yieldPct, 0) / owned.length;

  return (
    <>
      <h2 className="font-display-md text-display-md text-ink mb-2">{t("portfolio.title")}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
        {t("portfolio.subtitle")}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-stack-lg">
        <Metric label={t("portfolio.totalValue")} value={formatMXN(totalValue)} icon="account_balance" />
        <Metric label={t("portfolio.fractions")} value={String(owned.length)} icon="villa" />
        <Metric label={t("portfolio.avgYield")} value={`${avgYield.toFixed(1)}%`} icon="trending_up" accent />
        <Metric label={t("portfolio.weeksYear")} value="11" icon="event_available" />
      </div>

      <h3 className="font-headline-lg text-headline-lg text-ink mb-stack-md">{t("portfolio.myFractions")}</h3>
      <div className="space-y-gutter">
        {owned.map((p) => (
          <Link
            key={p.id}
            href={`/fractions/${p.id}`}
            className="glass-card rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 group"
          >
            <div className="relative w-full sm:w-40 h-40 sm:h-24 rounded-xl overflow-hidden shrink-0">
              <SmartImage src={p.image} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0 w-full">
              <h4 className="font-headline-lg text-headline-lg text-ink">{p.name}</h4>
              <p className="text-on-surface-variant text-label-md flex items-center gap-1">
                <Icon name="location_on" className="text-[16px]" /> {p.location}
              </p>
            </div>
            <div className="flex gap-8 w-full sm:w-auto justify-between">
              <div className="text-center">
                <p className="text-on-surface-variant text-[10px] uppercase">{t("portfolio.fraction")}</p>
                <p className="font-bold text-ink">{p.fraction}</p>
              </div>
              <div className="text-center">
                <p className="text-on-surface-variant text-[10px] uppercase">{t("portfolio.yield")}</p>
                <p className="font-bold cyan-accent">{p.yieldPct}%</p>
              </div>
              <div className="text-center">
                <p className="text-on-surface-variant text-[10px] uppercase">{t("portfolio.value")}</p>
                <p className="font-bold text-accent">{formatMXN(p.priceMXN)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function Metric({
  label,
  value,
  icon,
  accent,
}: {
  label: string;
  value: string;
  icon: string;
  accent?: boolean;
}) {
  return (
    <div className="glass-card rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3 text-on-surface-variant">
        <Icon name={icon} className="text-[20px] text-accent" />
        <span className="font-label-sm text-label-sm">{label}</span>
      </div>
      <p className={`font-display-md text-headline-lg ${accent ? "cyan-accent" : "text-ink"}`}>
        {value}
      </p>
    </div>
  );
}
