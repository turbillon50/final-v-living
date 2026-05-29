"use client";

import Link from "next/link";
import { Icon } from "./Icon";
import { SmartImage } from "./SmartImage";
import { formatMXN } from "@/lib/data";
import { useT } from "@/lib/i18n";
import type { Property } from "@/lib/types";

export function PropertyCard({ property }: { property: Property }) {
  const { t } = useT();
  return (
    <Link
      href={`/fractions/${property.id}`}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer block animate-fade-up hover:-translate-y-1 transition-transform duration-500 h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase text-white">
          {property.category}
        </span>
        <span className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full p-2 text-white">
          <Icon name="favorite" className="text-[18px]" />
        </span>
      </div>
      <div className="p-stack-md">
        <h2 className="font-headline-lg text-headline-lg text-ink">{property.name}</h2>
        <p className="text-on-surface-variant text-label-md flex items-center gap-1 mb-4">
          <Icon name="location_on" className="text-[16px]" /> {property.location}
        </p>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-wider">
              {t("card.yield")}
            </p>
            <p className="font-bold cyan-accent">{property.yieldPct}%</p>
          </div>
          <div className="text-right">
            <p className="text-ink font-headline-lg text-headline-lg">
              {formatMXN(property.priceMXN)}
            </p>
            <p className="text-on-surface-variant text-[10px] uppercase">
              {property.fraction} {t("card.availableFraction")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
