import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ExperienceCard } from "@/components/ExperienceCard";
import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";
import { properties, experiences, documents, getProperty, formatMXN } from "@/lib/data";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const property = getProperty(params.id);
  if (!property) return { title: "Propiedad no encontrada" };
  return {
    title: property.name,
    description: property.description.slice(0, 150),
    openGraph: { images: [property.image] },
  };
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = getProperty(params.id);
  if (!property) notFound();

  return (
    <main className="min-h-dvh max-w-7xl mx-auto pb-40">
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />
      </section>

      <div className="px-margin-mobile md:px-margin-desktop -mt-16 relative z-10 space-y-stack-lg">
        {/* Header + price */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="font-display-md text-display-md text-primary drop-shadow-lg">
              {property.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-secondary">
              <span className="flex items-center gap-1.5 font-label-md text-label-md">
                <Icon name="location_on" className="text-primary-fixed-dim text-lg" />
                {property.location}
              </span>
              <span className="flex items-center gap-1.5 font-label-md text-label-md">
                <Icon name="star" className="text-primary-fixed-dim text-lg" filled />
                {property.rating} ({property.reviews} reviews)
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-4">
              <StatTile label="Fracción" value={property.fraction} />
              <StatTile label="Semanas" value={String(property.weeksPerYear)} />
              <StatTile label="Rendimiento" value={`${property.yieldPct}%`} />
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-primary-container/20 shadow-[0_0_30px_rgba(0,251,251,0.05)]">
            <p className="font-label-md text-label-md text-secondary-fixed-dim mb-1 uppercase tracking-widest">
              Inversión desde
            </p>
            <h2 className="font-display-md text-display-md text-primary-fixed mb-4">
              {formatMXN(property.priceMXN)} <span className="text-headline-lg font-normal">MXN</span>
            </h2>
            <button className="w-full h-14 bg-primary-container text-on-primary-fixed font-label-md text-label-md rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Ver fracciones disponibles
              <Icon name="chevron_right" />
            </button>
          </div>
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <h3 className="font-headline-lg text-headline-lg text-primary">Sobre la propiedad</h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
            {property.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {property.amenities.map((a) => (
              <span
                key={a.label}
                className="px-4 py-2 bg-surface-variant/30 rounded-full border border-white/5 text-label-md text-secondary flex items-center gap-2"
              >
                <Icon name={a.icon} className="text-primary-fixed-dim text-[18px]" /> {a.label}
              </span>
            ))}
          </div>
        </section>

        {/* Availability */}
        <section className="space-y-stack-md">
          <div className="flex justify-between items-end">
            <h3 className="font-headline-lg text-headline-lg text-primary">Disponibilidad</h3>
            <span className="font-label-md text-label-md text-primary-fixed">Mayo 2026</span>
          </div>
          <AvailabilityCalendar />
        </section>

        {/* Nearby experiences */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-lg text-headline-lg text-primary">Experiencias locales</h3>
            <Link href="/experiences" className="text-primary-fixed font-label-md text-label-md">
              Ver todo
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.slice(0, 3).map((e) => (
              <ExperienceCard key={e.id} experience={e} />
            ))}
          </div>
        </section>

        {/* Document vault */}
        <section className="space-y-4">
          <h3 className="font-headline-lg text-headline-lg text-primary">Bóveda de documentos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {documents.slice(0, 2).map((d) => (
              <div
                key={d.id}
                className="glass-panel p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-primary-container/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center">
                    <Icon name={d.icon} className="text-primary-fixed" />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-primary">{d.name}</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      {d.type} • {d.size}
                    </p>
                  </div>
                </div>
                <Icon name="download" className="text-secondary-fixed-dim group-hover:text-primary-fixed" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky action footer */}
      <div className="fixed bottom-20 md:bottom-0 left-0 right-0 z-40 p-margin-mobile md:p-8 pointer-events-none">
        <div className="max-w-4xl mx-auto glass-panel p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-4 pointer-events-auto">
          <Link
            href="/stays"
            className="flex-1 h-14 flex items-center justify-center border border-white/20 hover:bg-white/5 text-primary rounded-2xl font-label-md text-label-md transition-all active:scale-[0.98]"
          >
            Reservar estancia
          </Link>
          <Link
            href="/payments"
            className="flex-1 h-14 flex items-center justify-center bg-primary-container text-on-primary-fixed rounded-2xl font-label-md text-label-md shadow-[0_4px_20px_rgba(0,251,251,0.2)] hover:brightness-110 transition-all active:scale-[0.98]"
          >
            Adquirir fracción
          </Link>
        </div>
      </div>
    </main>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-panel rounded-xl p-4 flex flex-col items-center justify-center text-center">
      <span className="font-label-sm text-label-sm text-secondary-fixed-dim mb-1">{label}</span>
      <span className="font-headline-lg text-headline-lg text-primary-fixed">{value}</span>
    </div>
  );
}
