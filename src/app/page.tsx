import Link from "next/link";
import { Icon } from "@/components/Icon";
import { HeroSearch } from "@/components/HeroSearch";
import { SectionHeader } from "@/components/SectionHeader";
import { destinations } from "@/lib/data";

const quickAccess = [
  { label: "Fracciones", tag: "Explorar", icon: "account_balance_wallet", href: "/fractions", img: "photo-1613490493576-7fde63acd811" },
  { label: "Estancias", tag: "Reservar", icon: "calendar_today", href: "/stays", img: "photo-1582268611958-ebfd161ef9cf" },
  { label: "Experiencias", tag: "Vivir", icon: "sailing", href: "/experiences", img: "photo-1599582909646-d7c0a9e2a4f7" },
  { label: "Premium", tag: "Servicios", icon: "concierge", href: "/services", img: "photo-1551918120-9739cb430c6d" },
];

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto pb-32">
      {/* Hero */}
      <section className="relative h-[680px] md:h-[618px] w-full flex flex-col justify-center px-margin-mobile overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={img("photo-1505691938895-1758d7feb511", 2000)}
            alt="Villa de lujo frente al Caribe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 to-transparent" />
        </div>
        <div className="relative z-10 space-y-stack-md max-w-2xl">
          <p className="text-primary-fixed uppercase tracking-widest font-label-sm">
            Fractional Ownership • Stays • Experiences
          </p>
          <h2 className="font-display-lg text-display-lg leading-tight text-white">
            ¿Qué quieres vivir hoy?
          </h2>
          <p className="text-secondary font-body-lg max-w-lg">
            La plataforma premium para propiedad fraccional, estancias y experiencias
            extraordinarias.
          </p>
          <HeroSearch />
        </div>
      </section>

      {/* Quick access bento */}
      <section className="px-margin-mobile -mt-28 relative z-20 grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {quickAccess.map((q) => (
          <Link
            key={q.label}
            href={q.href}
            className="obsidian-card p-stack-md rounded-xl group h-48 flex flex-col justify-between"
          >
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
              <img src={img(q.img)} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <span className="bg-surface-container-highest/60 p-2 rounded-lg self-start">
                <Icon name={q.icon} className="text-primary-fixed" />
              </span>
              <div>
                <p className="text-secondary text-label-sm uppercase tracking-tighter">{q.tag}</p>
                <h3 className="text-white font-headline-lg">{q.label}</h3>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Popular destinations */}
      <section className="mt-stack-xl px-margin-mobile">
        <SectionHeader
          title="Destinos populares"
          subtitle="Explora las ubicaciones más exclusivas."
          action={
            <Link
              href="/fractions"
              className="text-primary-fixed font-label-md flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
            >
              Ver todos <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          }
        />
        <div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-4 snap-x">
          {destinations.map((d) => (
            <Link
              key={d.name}
              href="/fractions"
              className="min-w-[160px] md:min-w-[240px] snap-start group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden obsidian-card relative">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-headline-lg">{d.name}</h4>
                  <p className="text-secondary-fixed-dim text-label-sm">
                    {d.properties} Propiedades
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Promo banner */}
      <section className="mt-stack-xl px-margin-mobile">
        <div className="obsidian-card rounded-3xl overflow-hidden flex flex-col md:flex-row md:h-64">
          <div className="flex-1 p-stack-lg flex flex-col justify-center gap-4">
            <h3 className="text-white font-display-md text-display-md">
              Tu próxima experiencia te espera
            </h3>
            <p className="text-secondary font-body-md max-w-lg">
              Descubre propiedades únicas con beneficios exclusivos para miembros de V Living.
            </p>
            <Link
              href="/fractions"
              className="bg-white text-black px-8 py-3 rounded-full font-label-md w-fit hover:bg-primary-fixed transition-colors"
            >
              Explorar ahora
            </Link>
          </div>
          <div className="flex-1 relative min-h-[200px]">
            <img
              src={img("photo-1512917774080-9991f1c4c750")}
              alt="Villa contemporánea al atardecer"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
