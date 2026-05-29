import { Icon } from "./Icon";
import { formatMXN } from "@/lib/data";
import type { Experience } from "@/lib/types";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="glass-card rounded-xl group transition-transform duration-500 hover:-translate-y-1 overflow-hidden animate-fade-up">
      <div className="relative h-64 overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <button
          aria-label="Guardar"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white active:scale-90 transition-transform"
        >
          <Icon name="favorite" className="text-[20px]" />
        </button>
        {experience.exclusive && (
          <span className="absolute bottom-4 left-4 bg-primary-fixed/20 backdrop-blur-md text-primary-fixed text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-primary-fixed/30">
            Exclusivo
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3 className="font-headline-lg text-headline-lg text-primary group-hover:text-primary-fixed transition-colors">
            {experience.title}
          </h3>
          <div className="flex items-center gap-2 text-secondary mt-1">
            <Icon name={experience.icon} className="text-[16px]" />
            <p className="font-label-sm text-label-sm">{experience.duration}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-tighter">
              Desde
            </span>
            <span className="text-primary font-headline-lg text-headline-lg">
              {formatMXN(experience.priceMXN)}
            </span>
          </div>
          <button className="bg-primary-fixed text-on-primary-fixed px-6 py-3 rounded-lg font-label-md text-label-md active:scale-95 transition-transform cyan-glow">
            Reservar
          </button>
        </div>
      </div>
    </article>
  );
}
