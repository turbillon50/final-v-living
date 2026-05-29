import type { Metadata } from "next";
import { ExperienceCard } from "@/components/ExperienceCard";
import { FilterChips } from "@/components/FilterChips";
import { Icon } from "@/components/Icon";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experiencias",
  description: "Momentos extraordinarios diseñados para la comunidad V Living.",
};

export default function ExperiencesPage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-mobile pb-32">
      <section className="py-stack-lg">
        <h2 className="font-display-md text-display-md text-primary mb-stack-sm">Experiencias</h2>
        <p className="font-body-md text-body-md text-secondary max-w-lg">
          Momentos extraordinarios diseñados exclusivamente para nuestra comunidad de
          propietarios.
        </p>
      </section>

      <section className="mb-stack-lg sticky top-16 z-40 bg-background/50 backdrop-blur-md py-4 -mx-margin-mobile px-margin-mobile">
        <div className="relative mb-stack-md">
          <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
          <input
            className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 text-on-surface focus:ring-1 focus:ring-primary-fixed focus:outline-none placeholder:text-outline font-body-md text-body-md transition-all"
            placeholder="Buscar experiencias"
            type="text"
          />
        </div>
        <FilterChips options={["Todas", "Navegación", "Bienestar", "Aventura", "Gastronomía"]} />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((e) => (
          <ExperienceCard key={e.id} experience={e} />
        ))}
      </div>
    </main>
  );
}
