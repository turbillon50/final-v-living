import type { Metadata } from "next";
import { AdminView } from "@/components/pages/AdminView";

export const metadata: Metadata = {
  title: "Admin",
  description: "Panel administrativo de V·Living.",
};

export default function AdminPage() {
  return <AdminView />;
}
