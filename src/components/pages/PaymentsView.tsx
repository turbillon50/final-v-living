"use client";

import { Icon } from "@/components/Icon";
import { payments, formatMXN } from "@/lib/data";
import { useT } from "@/lib/i18n";

const statusStyles: Record<string, string> = {
  Pagado: "bg-accent/15 text-accent",
  Pendiente: "bg-warning/15 text-warning",
  Procesando: "fill-subtle-2 text-on-surface-variant",
};
const statusKey: Record<string, string> = {
  Pagado: "payments.status.paid",
  Pendiente: "payments.status.pending",
  Procesando: "payments.status.processing",
};

export function PaymentsView() {
  const { t } = useT();
  const paid = payments.filter((p) => p.status === "Pagado").reduce((s, p) => s + p.amountMXN, 0);
  const pending = payments.filter((p) => p.status !== "Pagado").reduce((s, p) => s + p.amountMXN, 0);

  return (
    <>
      <h2 className="font-display-md text-display-md text-ink mb-2">{t("payments.title")}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
        {t("payments.subtitle")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter mb-stack-lg">
        <div className="glass-card rounded-2xl p-6">
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
            {t("payments.paid2026")}
          </p>
          <p className="font-display-md text-display-md text-ink">{formatMXN(paid)}</p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
            {t("payments.pendingProcessing")}
          </p>
          <p className="font-display-md text-display-md text-warning">{formatMXN(pending)}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-stack-md">
        <h3 className="font-headline-lg text-headline-lg text-ink">{t("payments.history")}</h3>
        <button className="flex items-center gap-2 bg-accent text-on-primary px-5 py-2.5 min-h-[44px] rounded-lg font-label-md text-label-md active:scale-95 transition-transform">
          <Icon name="add" className="text-[20px]" /> {t("payments.newPayment")}
        </button>
      </div>

      <div className="glass-card rounded-2xl divide-y divide-border overflow-hidden">
        {payments.map((p) => (
          <div key={p.id} className="flex items-center gap-4 p-5">
            <div className="w-11 h-11 rounded-xl fill-subtle flex items-center justify-center shrink-0">
              <Icon name="receipt_long" className="text-accent text-[22px]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-label-md text-label-md text-ink truncate">{p.concept}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                {p.date} • {p.method}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-headline-lg text-label-md text-accent">{formatMXN(p.amountMXN)}</p>
              <span
                className={`inline-block mt-1 px-2.5 py-0.5 rounded-full font-label-sm text-[10px] ${statusStyles[p.status]}`}
              >
                {t(statusKey[p.status])}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
