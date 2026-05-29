import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { payments, formatMXN } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pagos",
  description: "Historial de pagos y métodos integrados (Mercado Pago, Stripe).",
};

const statusStyles: Record<string, string> = {
  Pagado: "bg-primary-container/15 text-primary-fixed",
  Pendiente: "bg-yellow-500/15 text-yellow-300",
  Procesando: "bg-white/10 text-secondary",
};

export default function PaymentsPage() {
  const paid = payments.filter((p) => p.status === "Pagado").reduce((s, p) => s + p.amountMXN, 0);
  const pending = payments.filter((p) => p.status !== "Pagado").reduce((s, p) => s + p.amountMXN, 0);

  return (
    <>
      <h2 className="font-display-md text-display-md text-primary mb-2">Pagos</h2>
      <p className="font-body-lg text-body-lg text-secondary mb-stack-lg">
        Historial de transacciones y métodos de pago. Integraciones preparadas para Mercado Pago y
        Stripe.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter mb-stack-lg">
        <div className="glass-card rounded-2xl p-6">
          <p className="font-label-sm text-label-sm text-secondary-fixed-dim uppercase tracking-widest mb-2">
            Pagado en 2026
          </p>
          <p className="font-display-md text-display-md text-white">{formatMXN(paid)}</p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <p className="font-label-sm text-label-sm text-secondary-fixed-dim uppercase tracking-widest mb-2">
            Pendiente / procesando
          </p>
          <p className="font-display-md text-display-md text-yellow-300">{formatMXN(pending)}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-stack-md">
        <h3 className="font-headline-lg text-headline-lg text-primary">Historial</h3>
        <button className="flex items-center gap-2 bg-primary-container text-on-primary-fixed px-5 py-2.5 rounded-lg font-label-md text-label-md active:scale-95 transition-transform">
          <Icon name="add" className="text-[20px]" /> Nuevo pago
        </button>
      </div>

      <div className="glass-card rounded-2xl divide-y divide-white/5 overflow-hidden">
        {payments.map((p) => (
          <div key={p.id} className="flex items-center gap-4 p-5">
            <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
              <Icon name="receipt_long" className="text-primary-fixed text-[22px]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-label-md text-label-md text-primary truncate">{p.concept}</p>
              <p className="font-label-sm text-label-sm text-secondary-fixed-dim">
                {p.date} • {p.method}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-headline-lg text-label-md text-primary-fixed">
                {formatMXN(p.amountMXN)}
              </p>
              <span
                className={`inline-block mt-1 px-2.5 py-0.5 rounded-full font-label-sm text-[10px] ${statusStyles[p.status]}`}
              >
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
