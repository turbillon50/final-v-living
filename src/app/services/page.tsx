import type { Metadata } from "next";
import { ServicesView } from "@/components/pages/ServicesView";

export const metadata: Metadata = {
  title: "Servicios Premium",
  description: "Servicios aprobados y conserjería de lujo para propietarios V Living.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
