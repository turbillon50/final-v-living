import type { Metadata } from "next";
import { ContractsView } from "@/components/pages/ContractsView";

export const metadata: Metadata = {
  title: "Contratos y Documentos",
  description: "Bóveda documental: contratos, certificados y acuerdos.",
};

export default function ContractsPage() {
  return <ContractsView />;
}
