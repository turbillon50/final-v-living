import type { Metadata } from "next";
import { StaysView } from "@/components/pages/StaysView";

export const metadata: Metadata = {
  title: "Estancias",
  description: "Gestiona tus 3 semanas del año (premium · intermedia · flexible) en V·Living.",
};

export default function StaysPage() {
  return <StaysView />;
}
