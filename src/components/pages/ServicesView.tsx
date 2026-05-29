"use client";

import { Icon } from "@/components/Icon";
import { services } from "@/lib/data";
import { useT } from "@/lib/i18n";

export function ServicesView() {
  const { t } = useT();
  return (
    <main className="max-w-7xl mx-auto px-margin-mobile pb-32">
      <section className="py-stack-lg">
        <h2 className="font-display-md text-display-md text-ink mb-stack-sm">{t("services.title")}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
          {t("services.subtitle")}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {services.map((s) => (
          <div
            key={s.id}
            className="glass-card rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-all animate-fade-up"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon name={s.icon} className="text-accent" />
              </div>
              {s.approved ? (
                <span className="flex items-center gap-1 text-accent text-label-sm font-label-sm">
                  <Icon name="verified" className="text-[16px]" filled /> {t("services.approved")}
                </span>
              ) : (
                <span className="text-on-surface-variant text-label-sm font-label-sm">
                  {t("services.soon")}
                </span>
              )}
            </div>
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">
                {s.category}
              </p>
              <h3 className="font-headline-lg text-headline-lg text-ink">{s.name}</h3>
            </div>
            <p className="font-body-md text-on-surface-variant flex-1">{s.description}</p>
            <button
              disabled={!s.approved}
              className={`w-full py-3 min-h-[44px] rounded-xl font-label-md text-label-md transition-all ${
                s.approved
                  ? "bg-ink text-background hover:bg-accent hover:text-on-primary active:scale-[0.98]"
                  : "fill-subtle text-on-surface-variant cursor-not-allowed"
              }`}
            >
              {s.approved ? t("services.request") : t("services.unavailable")}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
