import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center text-center px-margin-mobile pb-32">
      <div className="relative mb-6">
        <span className="font-display-lg text-[120px] leading-none v-gradient-text">404</span>
        <div className="absolute inset-0 blur-3xl bg-primary-container/10 -z-10" />
      </div>
      <h1 className="font-headline-lg text-headline-lg text-white mb-3">
        Esta página no existe
      </h1>
      <p className="font-body-md text-secondary max-w-md mb-8">
        La ruta que buscas no está disponible. Vuelve al inicio para seguir explorando el universo
        V Living.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-label-md text-label-md hover:scale-105 transition-transform flex items-center justify-center gap-2"
        >
          <Icon name="home" className="text-[20px]" /> Ir al inicio
        </Link>
        <Link
          href="/fractions"
          className="border border-white/20 text-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-white/5 transition-colors"
        >
          Ver fracciones
        </Link>
      </div>
    </main>
  );
}
