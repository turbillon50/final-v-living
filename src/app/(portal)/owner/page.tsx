import type { Metadata } from "next";
import { OwnerDashboardView } from "@/components/pages/OwnerDashboardView";

export const metadata: Metadata = {
  title: "Portal del Propietario",
  description: "Gestiona tu fracción, tus 3 semanas y tu operación V·Billing.",
};

export default function OwnerDashboard() {
  return <OwnerDashboardView />;
}
