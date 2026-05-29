export interface Property {
  id: string;
  name: string;
  location: string;
  city: string;
  image: string;
  gallery: string[];
  priceMXN: number;
  fraction: string; // e.g. "1/8"
  weeksPerYear: number;
  yieldPct: number;
  rating: number;
  reviews: number;
  category: "Playa" | "Montaña" | "Ciudad" | "Wellness";
  featured?: boolean;
  description: string;
  amenities: { icon: string; label: string }[];
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  duration: string;
  priceMXN: number;
  image: string;
  icon: string;
  exclusive?: boolean;
}

export interface PremiumService {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  approved: boolean;
}

export interface Destination {
  name: string;
  properties: number;
  image: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: string;
  size: string;
  icon: string;
  status: "Firmado" | "Pendiente" | "En revisión";
}

export interface Stay {
  id: string;
  propertyName: string;
  location: string;
  image: string;
  checkIn: string;
  checkOut: string;
  status: "Confirmada" | "Pendiente" | "Completada";
}

export interface Payment {
  id: string;
  concept: string;
  date: string;
  amountMXN: number;
  method: string;
  status: "Pagado" | "Pendiente" | "Procesando";
}
