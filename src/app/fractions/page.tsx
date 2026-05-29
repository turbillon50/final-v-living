import type { Metadata } from "next";
import { FractionsExplorer } from "@/components/FractionsExplorer";
import { properties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Marketplace de Fracciones",
  description:
    "Adquiere fracciones de propiedades premium con rendimiento y estancias garantizadas.",
};

export default function FractionsPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <main className="min-h-dvh max-w-7xl mx-auto pb-32">
      <FractionsExplorer properties={properties} initialQuery={searchParams.q ?? ""} />
    </main>
  );
}
