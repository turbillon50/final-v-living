import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { stays, properties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Estancias",
  description: "Gestiona tus reservas y descubre disponibilidad en propiedades V Living.",
};

const statusStyles: Record<string, string> = {
  Confirmada: "bg-primary-container/90 text-on-primary-container",
  Pendiente: "bg-yellow-500/20 text-yellow-300",
  Completada: "bg-white/10 text-secondary",
};

export default function StaysPage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-mobile pb-32">
      <section className="py-stack-lg">
        <h2 className="font-display-md text-display-md text-primary mb-stack-sm">Estancias</h2>
        <p className="font-body-md text-body-md text-secondary max-w-lg">
          Tus reservas confirmadas y próximas escapadas en el portafolio V Living.
        </p>
      </section>

      <h3 className="font-headline-lg text-headline-lg text-primary mb-stack-md">Mis reservas</h3>
      {stays.length === 0 ? (
        <div className="glass-panel rounded-2xl p-stack-lg text-center text-secondary">
          Aún no tienes reservas. Explora propiedades y reserva tu primera estancia.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-xl">
          {stays.map((s) => (
            <div key={s.id} className="glass-card rounded-2xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.propertyName}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full font-label-sm text-label-sm ${statusStyles[s.status]}`}
                >
                  {s.status}
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-headline-lg text-headline-lg text-white mb-1">{s.propertyName}</h4>
                <p className="font-label-md text-label-md text-secondary mb-4">{s.location}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="text-on-surface-variant">
                    <p className="font-label-sm text-label-sm uppercase opacity-60">Check-in</p>
                    <p className="font-label-md text-label-md">{s.checkIn}</p>
                  </div>
                  <Icon name="arrow_forward" className="text-secondary opacity-30" />
                  <div className="text-right text-on-surface-variant">
                    <p className="font-label-sm text-label-sm uppercase opacity-60">Check-out</p>
                    <p className="font-label-md text-label-md">{s.checkOut}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3 className="font-headline-lg text-headline-lg text-primary mb-stack-md">Reserva una nueva estancia</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {properties.slice(0, 3).map((p) => (
          <Link
            key={p.id}
            href={`/fractions/${p.id}`}
            className="obsidian-card rounded-2xl overflow-hidden group h-56 relative flex items-end"
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="relative z-10 p-5">
              <h4 className="font-headline-lg text-headline-lg text-white">{p.name}</h4>
              <p className="text-secondary text-label-sm">{p.city}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
