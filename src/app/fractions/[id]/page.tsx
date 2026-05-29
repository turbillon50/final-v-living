import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyDetailView } from "@/components/pages/PropertyDetailView";
import { properties, experiences, documents, getProperty } from "@/lib/data";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const property = getProperty(params.id);
  if (!property) return { title: "Propiedad no encontrada" };
  return {
    title: property.name,
    description: property.description.slice(0, 150),
    openGraph: { images: [property.image] },
  };
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = getProperty(params.id);
  if (!property) notFound();

  return (
    <PropertyDetailView
      property={property}
      experiences={experiences.slice(0, 4)}
      documents={documents}
    />
  );
}
