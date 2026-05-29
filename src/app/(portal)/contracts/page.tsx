import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { documents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contratos y Documentos",
  description: "Bóveda documental: contratos, certificados y acuerdos.",
};

const statusStyles: Record<string, string> = {
  Firmado: "text-primary-fixed",
  Pendiente: "text-yellow-300",
  "En revisión": "text-secondary",
};

export default function ContractsPage() {
  return (
    <>
      <h2 className="font-display-md text-display-md text-primary mb-2">Contratos y Documentos</h2>
      <p className="font-body-lg text-body-lg text-secondary mb-stack-lg">
        Bóveda segura con todos los documentos asociados a tu propiedad fraccional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {documents.map((d) => (
          <div
            key={d.id}
            className="glass-panel p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-primary-container/40 transition-all"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center shrink-0">
                <Icon name={d.icon} className="text-primary-fixed" />
              </div>
              <div className="min-w-0">
                <p className="font-label-md text-label-md text-primary truncate">{d.name}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  {d.type} • {d.size} •{" "}
                  <span className={statusStyles[d.status]}>{d.status}</span>
                </p>
              </div>
            </div>
            <button
              aria-label="Descargar"
              className="shrink-0 text-secondary-fixed-dim group-hover:text-primary-fixed transition-colors"
            >
              <Icon name="download" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-stack-lg glass-card rounded-2xl p-6 flex items-center gap-4">
        <Icon name="lock" className="text-primary-fixed text-[28px]" />
        <div>
          <p className="font-label-md text-label-md text-primary">Almacenamiento cifrado</p>
          <p className="font-label-sm text-label-sm text-secondary">
            Tus documentos están protegidos y disponibles 24/7. Firma electrónica integrada
            próximamente.
          </p>
        </div>
      </div>
    </>
  );
}
