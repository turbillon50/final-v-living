import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios Premium",
  description: "Servicios aprobados y conserjería de lujo para propietarios V Living.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-mobile pb-32">
      <section className="py-stack-lg">
        <h2 className="font-display-md text-display-md text-primary mb-stack-sm">
          Servicios Premium
        </h2>
        <p className="font-body-md text-body-md text-secondary max-w-lg">
          Catálogo de servicios aprobados y verificados, disponibles para complementar tu estancia.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {services.map((s) => (
          <div
            key={s.id}
            className="glass-card rounded-2xl p-6 flex flex-col gap-4 group hover:border-primary-container/30 transition-all animate-fade-up"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center">
                <Icon name={s.icon} className="text-primary-fixed" />
              </div>
              {s.approved ? (
                <span className="flex items-center gap-1 text-primary-fixed text-label-sm font-label-sm">
                  <Icon name="verified" className="text-[16px]" filled /> Aprobado
                </span>
              ) : (
                <span className="text-secondary-fixed-dim text-label-sm font-label-sm">
                  Próximamente
                </span>
              )}
            </div>
            <div>
              <p className="text-secondary text-[10px] uppercase tracking-widest mb-1">
                {s.category}
              </p>
              <h3 className="font-headline-lg text-headline-lg text-white">{s.name}</h3>
            </div>
            <p className="font-body-md text-secondary flex-1">{s.description}</p>
            <button
              disabled={!s.approved}
              className={`w-full py-3 rounded-xl font-label-md text-label-md transition-all ${
                s.approved
                  ? "bg-white text-black hover:bg-primary-fixed active:scale-[0.98]"
                  : "bg-white/5 text-secondary-fixed-dim cursor-not-allowed"
              }`}
            >
              {s.approved ? "Solicitar servicio" : "No disponible"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
