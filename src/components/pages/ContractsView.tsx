"use client";

import { Icon } from "@/components/Icon";
import { documents } from "@/lib/data";
import { useT } from "@/lib/i18n";

const statusStyles: Record<string, string> = {
  Firmado: "text-accent",
  Pendiente: "text-warning",
  "En revisión": "text-on-surface-variant",
};
const statusKey: Record<string, string> = {
  Firmado: "contracts.status.signed",
  Pendiente: "contracts.status.pending",
  "En revisión": "contracts.status.review",
};

export function ContractsView() {
  const { t } = useT();
  return (
    <>
      <h2 className="font-display-md text-display-md text-ink mb-2">{t("contracts.title")}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
        {t("contracts.subtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {documents.map((d) => (
          <div
            key={d.id}
            className="glass-panel p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-accent/40 transition-all"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Icon name={d.icon} className="text-accent" />
              </div>
              <div className="min-w-0">
                <p className="font-label-md text-label-md text-ink truncate">{d.name}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  {d.type} • {d.size} •{" "}
                  <span className={statusStyles[d.status]}>{t(statusKey[d.status])}</span>
                </p>
              </div>
            </div>
            <button
              aria-label="Download"
              className="shrink-0 text-on-surface-variant group-hover:text-accent transition-colors"
            >
              <Icon name="download" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-stack-lg glass-card rounded-2xl p-6 flex items-center gap-4">
        <Icon name="lock" className="text-accent text-[28px]" />
        <div>
          <p className="font-label-md text-label-md text-ink">{t("contracts.encrypted.title")}</p>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            {t("contracts.encrypted.body")}
          </p>
        </div>
      </div>
    </>
  );
}
