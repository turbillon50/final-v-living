import type { Metadata } from "next";
import { FractionsExplorer } from "@/components/FractionsExplorer";
import { properties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Desarrollos",
  description:
    "Desarrollos boutique de V·Living en la Riviera Maya (Cancún · Tulum · Playa del Carmen). 14 fracciones · 3 semanas/año, bajo Fideicomiso Bancario.",
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
