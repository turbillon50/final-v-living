"use client";

import { useEffect } from "react";
import { Icon } from "@/components/Icon";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center text-center px-margin-mobile pb-32">
      <span className="w-16 h-16 rounded-full bg-error-container/20 flex items-center justify-center mb-6">
        <Icon name="error" className="text-error text-[32px]" />
      </span>
      <h1 className="font-headline-lg text-headline-lg text-white mb-3">Algo salió mal</h1>
      <p className="font-body-md text-secondary max-w-md mb-8">
        Ocurrió un error inesperado. Puedes intentar de nuevo o volver más tarde.
      </p>
      <button
        onClick={reset}
        className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-label-md text-label-md hover:scale-105 transition-transform"
      >
        Reintentar
      </button>
    </main>
  );
}
