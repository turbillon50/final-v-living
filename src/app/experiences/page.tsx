import type { Metadata } from "next";
import { ExperiencesView } from "@/components/pages/ExperiencesView";

export const metadata: Metadata = {
  title: "Experiencias",
  description: "Momentos extraordinarios diseñados para la comunidad V Living.",
};

export default function ExperiencesPage() {
  return <ExperiencesView />;
}
