"use client";

import { Icon } from "@/components/Icon";
import { SmartImage } from "@/components/SmartImage";
import { properties, payments, experiences, formatMXN } from "@/lib/data";
import { useT } from "@/lib/i18n";

export function AdminView() {
  const { t } = useT();
  const gmv = payments.reduce((s, p) => s + p.amountMXN, 0);

  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <Icon name="admin_panel_settings" className="text-accent text-[28px]" filled />
        <h2 className="font-display-md text-display-md text-ink">{t("admin.title")}</h2>
      </div>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
        {t("admin.subtitle")}
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter mb-stack-lg">
        <KpiCard icon="villa" label={t("admin.properties")} value={String(properties.length)} />
        <KpiCard icon="sailing" label={t("admin.experiences")} value={String(experiences.length)} />
        <KpiCard icon="payments" label={t("admin.gmv")} value={formatMXN(gmv)} accent />
        <KpiCard icon="group" label={t("admin.members")} value="128" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div className="glass-card rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-headline-lg text-headline-lg text-ink">{t("admin.properties")}</h3>
            <button className="text-accent font-label-sm text-label-sm flex items-center gap-1">
              <Icon name="add" className="text-[18px]" /> {t("admin.new")}
            </button>
          </div>
          <div className="divide-y divide-border">
            {properties.map((p) => (
              <div key={p.id} className="flex items-center gap-3 py-3">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                  <SmartImage src={p.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-label-md text-label-md text-ink truncate">{p.name}</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">{p.city}</p>
                </div>
                <span className="font-label-sm text-label-sm cyan-accent">{p.yieldPct}%</span>
                <span className="px-2 py-0.5 rounded-full bg-accent/15 text-accent text-[10px] font-label-sm">
                  {t("admin.active")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-headline-lg text-headline-lg text-ink mb-4">{t("admin.recentTx")}</h3>
          <div className="divide-y divide-border">
            {payments.map((p) => (
              <div key={p.id} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="font-label-md text-label-md text-ink truncate">{p.concept}</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    {p.date} • {p.method}
                  </p>
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
  accent,
}: {
  icon: string;
  label: string;
  value: string;
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
