import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { properties, formatMXN } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Resumen de tus fracciones, valor y rendimiento.",
};

// Demo: the owner holds the first two properties.
const owned = properties.slice(0, 2);

export default function PortfolioPage() {
  const totalValue = owned.reduce((sum, p) => sum + p.priceMXN, 0);
  const avgYield = owned.reduce((s, p) => s + p.yieldPct, 0) / owned.length;

  return (
    <>
      <h2 className="font-display-md text-display-md text-primary mb-2">Mi Portafolio</h2>
      <p className="font-body-lg text-body-lg text-secondary mb-stack-lg">
        Tus activos fraccionales, valor consolidado y rendimiento.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-stack-lg">
        <Metric label="Valor total" value={formatMXN(totalValue)} icon="account_balance" />
        <Metric label="Fracciones" value={String(owned.length)} icon="villa" />
        <Metric label="Rendimiento prom." value={`${avgYield.toFixed(1)}%`} icon="trending_up" accent />
        <Metric label="Semanas/año" value="11" icon="event_available" />
      </div>

      <h3 className="font-headline-lg text-headline-lg text-primary mb-stack-md">Mis fracciones</h3>
      <div className="space-y-gutter">
        {owned.map((p) => (
          <Link
            key={p.id}
            href={`/fractions/${p.id}`}
            className="glass-card rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 group"
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="w-full sm:w-40 h-40 sm:h-24 object-cover rounded-xl"
            />
            <div className="flex-1 min-w-0 w-full">
              <h4 className="font-headline-lg text-headline-lg text-white">{p.name}</h4>
              <p className="text-secondary text-label-md flex items-center gap-1">
                <Icon name="location_on" className="text-[16px]" /> {p.location}
              </p>
            </div>
            <div className="flex gap-8 w-full sm:w-auto justify-between">
              <div className="text-center">
                <p className="text-secondary text-[10px] uppercase">Fracción</p>
                <p className="font-bold text-white">{p.fraction}</p>
              </div>
              <div className="text-center">
                <p className="text-secondary text-[10px] uppercase">Rendimiento</p>
                <p className="font-bold cyan-accent">{p.yieldPct}%</p>
              </div>
              <div className="text-center">
                <p className="text-secondary text-[10px] uppercase">Valor</p>
                <p className="font-bold text-primary-fixed">{formatMXN(p.priceMXN)}</p>
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
