import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { properties, payments, experiences, formatMXN } from "@/lib/data";

export const metadata: Metadata = {
  title: "Admin",
  description: "Panel administrativo de V Living.",
};

export default function AdminPage() {
  const gmv = payments.reduce((s, p) => s + p.amountMXN, 0);

  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <Icon name="admin_panel_settings" className="text-primary-fixed text-[28px]" filled />
        <h2 className="font-display-md text-display-md text-primary">Admin</h2>
      </div>
      <p className="font-body-lg text-body-lg text-secondary mb-stack-lg">
        Panel de control operativo. Métricas clave del marketplace V Living.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter mb-stack-lg">
        <KpiCard icon="villa" label="Propiedades" value={String(properties.length)} />
        <KpiCard icon="sailing" label="Experiencias" value={String(experiences.length)} />
        <KpiCard icon="payments" label="GMV (demo)" value={formatMXN(gmv)} accent />
        <KpiCard icon="group" label="Miembros" value="128" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        {/* Properties table */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-headline-lg text-headline-lg text-primary">Propiedades</h3>
            <button className="text-primary-fixed font-label-sm text-label-sm flex items-center gap-1">
              <Icon name="add" className="text-[18px]" /> Nueva
            </button>
          </div>
          <div className="divide-y divide-white/5">
            {properties.map((p) => (
              <div key={p.id} className="flex items-center gap-3 py-3">
                <img src={p.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-label-md text-label-md text-primary truncate">{p.name}</p>
                  <p className="font-label-sm text-label-sm text-secondary-fixed-dim">{p.city}</p>
                </div>
                <span className="font-label-sm text-label-sm cyan-accent">{p.yieldPct}%</span>
                <span className="px-2 py-0.5 rounded-full bg-primary-container/15 text-primary-fixed text-[10px] font-label-sm">
                  Activa
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent transactions */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
            Transacciones recientes
          </h3>
          <div className="divide-y divide-white/5">
            {payments.map((p) => (
              <div key={p.id} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="font-label-md text-label-md text-primary truncate">{p.concept}</p>
                  <p className="font-label-sm text-label-sm text-secondary-fixed-dim">
                    {p.date} • {p.method}
                  </p>
                </div>
                <span className="font-label-md text-label-md text-primary-fixed whitespace-nowrap">
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
      <div className="flex items-center gap-2 mb-3 text-secondary-fixed-dim">
        <Icon name={icon} className="text-[20px] text-primary-fixed" />
        <span className="font-label-sm text-label-sm">{label}</span>
      </div>
      <p className={`font-display-md text-headline-lg ${accent ? "cyan-accent" : "text-white"}`}>
        {value}
      </p>
    </div>
  );
}
