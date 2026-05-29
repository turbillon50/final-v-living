import type { Metadata } from "next";
import { ServicesView } from "@/components/pages/ServicesView";

export const metadata: Metadata = {
  title: "Tu fracción incluye",
  description: "Servicios premium incluidos en cada fracción V·Living: movilidad, hotelería, gastronomía, experiencias y atención premium.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
