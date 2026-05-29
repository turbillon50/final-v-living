import type { Metadata } from "next";
import { PortfolioView } from "@/components/pages/PortfolioView";

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Resumen de tus fracciones, valor y rendimiento.",
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
