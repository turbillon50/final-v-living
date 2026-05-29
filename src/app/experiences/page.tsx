import type { Metadata } from "next";
import { ExperiencesView } from "@/components/pages/ExperiencesView";

export const metadata: Metadata = {
  title: "V·Experiences",
  description: "Yates, tours, gastronomía y vida nocturna en la Riviera Maya para propietarios V·Living.",
};

export default function ExperiencesPage() {
  return <ExperiencesView />;
}
