import type { Metadata } from "next";
import { OwnerDashboardView } from "@/components/pages/OwnerDashboardView";

export const metadata: Metadata = {
  title: "Owner Portal",
  description: "Gestiona tu portafolio fraccional y tus próximas experiencias de lujo.",
};

export default function OwnerDashboard() {
  return <OwnerDashboardView />;
}
