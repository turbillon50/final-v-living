"use client";

import Link from "next/link";
import { Icon } from "./Icon";
import { SmartImage } from "./SmartImage";
import { formatMXN } from "@/lib/data";
import { useT } from "@/lib/i18n";
import type { Property } from "@/lib/types";

export function PropertyCard({ property }: { property: Property }) {
  const { t } = useT();
  const soon = property.status === "Próximamente";

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        {soon ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="pill-badge bg-black/50 backdrop-blur-md">
              {t("status.soon")}
            </span>
          </span>
        ) : (
          <span className="absolute top-4 left-4 pill-badge bg-black/40 backdrop-blur-md">
            {property.delivery && property.delivery !== "Por anunciar"
              ? `${t("card.delivery")} ${property.delivery}`
              : t("status.available")}
          </span>
        )}

        <span className="absolute bottom-4 left-4 z-10">
          <span className="font-display text-[28px] font-extrabold uppercase tracking-tight text-white leading-none">
            {property.name}
          </span>
          <span className="block text-white/75 text-label-sm flex items-center gap-1 mt-1">
            <Icon name="location_on" className="text-[14px]" /> {property.location}
          </span>
        </span>
      </div>

      <div className="p-stack-md">
        <span className="trust-chip mb-3">{property.kind}</span>
        <div className="flex justify-between items-end mt-3">
          <div>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-wider">
              {t("card.model")}
            </p>
            <p className="font-bold text-ink">
              {property.totalFractions} {t("card.fractions")} · {property.weeksPerFraction}{" "}
              {t("card.weeks")}
            </p>
          </div>
          <div className="text-right">
            {soon ? (
              <p className="font-headline-lg text-headline-lg text-accent">
                {t("status.soon")}
              </p>
            ) : (
              <>
                <p className="text-on-surface-variant text-[10px] uppercase tracking-wider">
                  {t("card.from")}
                </p>
                <p className="text-ink font-headline-lg text-headline-lg">
                  {formatMXN(property.priceFromMXN)}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
