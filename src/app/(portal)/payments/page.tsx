import type { Metadata } from "next";
import { PaymentsView } from "@/components/pages/PaymentsView";

export const metadata: Metadata = {
  title: "Pagos",
  description: "Historial de pagos y métodos integrados (Mercado Pago, Stripe).",
};

export default function PaymentsPage() {
  return <PaymentsView />;
}
