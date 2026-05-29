import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { stays, payments, formatMXN } from "@/lib/data";

export const metadata: Metadata = {
  title: "Owner Portal",
  description: "Gestiona tu portafolio fraccional y tus próximas experiencias de lujo.",
};

const activity = [
  { icon: "trending_up", text: "Rendimiento Casa del Mar +1.2%", time: "Hace 2 h" },
  { icon: "calendar_today", text: "Reserva confirmada — Los Cabos", time: "Hace 1 día" },
  { icon: "description", text: "Documento firmado — Fideicomiso", time: "Hace 3 días" },
  { icon: "payments", text: "Pago recibido — Mantenimiento Q1", time: "Hace 1 semana" },
];

export default function OwnerDashboard() {
  const nextStay = stays[0];

  return (
    <>
      <div className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-display-md text-display-md text-primary mb-2">Dashboard</h2>
          <p className="font-body-lg text-body-lg text-secondary">
            Gestiona tu portafolio y tus próximas experiencias de lujo.
          </p>
        </div>
        <Link
          href="/fractions"
          className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2 cyan-glow transition-transform active:scale-95 w-fit"
        >
          <Icon name="add_circle" />
          Explorar Fracciones
        </Link>
      </div>

      {/* Bento overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-stack-lg">
        <div className="md:col-span-2 glass-card rounded-xl p-8 flex flex-col justify-between group">
          <div className="flex justify-between items-start mb-6">
            <span className="font-label-sm text-label-sm text-secondary-fixed-dim uppercase tracking-widest">
              Valor del Portafolio
            </span>
            <Icon name="trending_up" className="text-primary-fixed animate-pulse" />
          </div>
          <div>
            <div className="font-display-md text-display-md text-white mb-2">
              {formatMXN(2980000)} <span className="text-headline-lg text-secondary">MXN</span>
            </div>
            <div className="flex items-center gap-2 text-primary-fixed">
              <span className="font-label-sm text-label-sm">+12.4% este año</span>
            </div>
          </div>
          <div className="mt-6 h-12 w-full flex items-end gap-1">
            {[30, 45, 35, 60, 55, 85, 100].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm transition-all ${
                  h === 100 ? "bg-primary-fixed" : "bg-primary-container/30 group-hover:bg-primary-container/50"
                }`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <StatCard icon="villa" label="Mis Fracciones" value="2" cta="Ver portafolio" href="/portfolio" />
        <StatCard icon="event_available" label="Semanas disponibles" value="18" cta="Reservar ahora" href="/stays" />
      </div>

      {/* Secondary grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Next stay */}
        <div className="flex flex-col gap-gutter">
          <h3 className="font-headline-lg text-headline-lg text-primary flex items-center gap-2">
            <Icon name="location_on" /> Próxima estancia
          </h3>
          <div className="glass-card rounded-xl overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={nextStay.image}
                alt={nextStay.propertyName}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-primary-container/90 text-on-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm">
                {nextStay.status}
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-headline-lg text-headline-lg text-white mb-1">
                {nextStay.propertyName}
              </h4>
              <p className="font-label-md text-label-md text-secondary mb-4">{nextStay.location}</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-on-surface-variant">
                <div>
                  <p className="font-label-sm text-label-sm uppercase opacity-60">Check-in</p>
                  <p className="font-label-md text-label-md">{nextStay.checkIn}</p>
                </div>
                <Icon name="arrow_forward" className="opacity-30" />
                <div className="text-right">
                  <p className="font-label-sm text-label-sm uppercase opacity-60">Check-out</p>
                  <p className="font-label-md text-label-md">{nextStay.checkOut}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div className="flex flex-col gap-gutter">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-lg text-headline-lg text-primary">Actividad reciente</h3>
          </div>
          <div className="glass-card rounded-xl p-2 divide-y divide-white/5">
            {activity.map((a, i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Icon name={a.icon} className="text-primary-fixed text-[20px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-label-md text-label-md text-primary truncate">{a.text}</p>
                  <p className="font-label-sm text-label-sm text-secondary-fixed-dim">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payments summary */}
        <div className="flex flex-col gap-gutter">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-lg text-headline-lg text-primary">Próximos pagos</h3>
            <Link href="/payments" className="font-label-sm text-label-sm text-primary-fixed">
              Ver todo
            </Link>
          </div>
          <div className="glass-card rounded-xl p-2 divide-y divide-white/5">
            {payments.slice(0, 4).map((p) => (
              <div key={p.id} className="flex items-center justify-between gap-3 p-4">
                <div className="min-w-0">
                  <p className="font-label-md text-label-md text-primary truncate">{p.concept}</p>
                  <p className="font-label-sm text-label-sm text-secondary-fixed-dim">{p.date}</p>
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

function StatCard({
  icon,
  label,
  value,
  cta,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white/5 rounded-lg">
          <Icon name={icon} className="text-primary-fixed" />
        </div>
        <span className="font-label-sm text-label-sm text-secondary-fixed-dim">{label}</span>
      </div>
      <div>
        <div className="font-display-md text-display-md text-white">{value}</div>
        <Link href={href} className="font-label-sm text-label-sm text-primary-fixed hover:underline mt-2 inline-block">
          {cta}
        </Link>
      </div>
    </div>
  );
}
