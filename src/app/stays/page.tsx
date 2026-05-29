import type { Metadata } from "next";
import { StaysView } from "@/components/pages/StaysView";

export const metadata: Metadata = {
  title: "Estancias",
  description: "Gestiona tus reservas y descubre disponibilidad en propiedades V Living.",
};

export default function StaysPage() {
  return <StaysView />;
}
