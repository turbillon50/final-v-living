import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Tu cuenta, membresía y preferencias V Living.",
};

const menu = [
  { icon: "account_balance_wallet", label: "Mi Portafolio", href: "/portfolio" },
  { icon: "calendar_today", label: "Mis Estancias", href: "/stays" },
  { icon: "description", label: "Contratos", href: "/contracts" },
  { icon: "payments", label: "Pagos", href: "/payments" },
  { icon: "concierge", label: "Servicios", href: "/services" },
  { icon: "admin_panel_settings", label: "Admin", href: "/admin" },
];

export default function ProfilePage() {
  return (
    <main className="max-w-3xl mx-auto px-margin-mobile pb-32 pt-stack-lg">
      <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center mb-stack-lg">
        <div className="h-24 w-24 rounded-full ring-2 ring-primary-container/40 bg-surface-container-high flex items-center justify-center mb-4 cyan-glow">
          <Icon name="person" className="text-primary-fixed text-[48px]" filled />
        </div>
        <h2 className="font-display-md text-display-md text-primary">Alexander</h2>
        <p className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest mt-1">
          Platinum Member · Owner
        </p>
        <p className="font-body-md text-secondary mt-2">alexander@vliving.com</p>
        <button className="mt-6 px-8 py-3 rounded-full border border-white/20 text-primary font-label-md text-label-md hover:bg-white/5 transition-colors">
          Editar perfil
        </button>
      </div>

      <div className="glass-card rounded-2xl divide-y divide-white/5 overflow-hidden">
        {menu.map((m) => (
          <Link
            key={m.label}
            href={m.href}
            className="flex items-center gap-4 p-5 hover:bg-white/5 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
              <Icon name={m.icon} className="text-primary-fixed text-[20px]" />
            </div>
            <span className="flex-1 font-body-md text-primary">{m.label}</span>
            <Icon name="chevron_right" className="text-secondary-fixed-dim group-hover:text-primary-fixed" />
          </Link>
        ))}
      </div>

      <button className="w-full mt-stack-lg py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-secondary font-label-md text-label-md transition-colors flex items-center justify-center gap-2">
        <Icon name="logout" className="text-[20px]" /> Cerrar sesión
      </button>
    </main>
  );
}
