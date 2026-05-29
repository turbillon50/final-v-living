export type RivieraCity = "Cancún" | "Tulum" | "Playa del Carmen";
export type DevelopmentStatus = "Disponible" | "Próximamente";

/**
 * A V·Living development (project). Sold in 14 fracciones; each fraction grants
 * 3 weeks/year (1 premium + 1 intermedia + 1 flexible). The legacy field names
 * (`fraction`, `weeksPerYear`, `yieldPct`, `category`) are kept so existing
 * components keep compiling, but they now describe the development model.
 */
export interface Property {
  id: string;
  name: string;
  /** e.g. "fractional living · by V·Living" */
  tagline: string;
  location: string;
  city: RivieraCity;
  state: "Quintana Roo";
  status: DevelopmentStatus;
  /** e.g. "Agosto 2026" */
  delivery: string;
  /** e.g. "Edificio boutique de autor" */
  kind: string;
  totalFractions: number; // 14
  weeksPerFraction: number; // 3
  image: string;
  gallery: string[];
  priceFromMXN: number;
  description: string;
  amenities: { icon: string; label: string }[];
  featured?: boolean;

  // ---- Legacy-compatible aliases (kept for existing components) ----
  /** Alias of priceFromMXN — "desde …" */
  priceMXN: number;
  /** Display fraction model, e.g. "1 / 14" */
  fraction: string;
  /** Weeks per fraction per year (3) */
  weeksPerYear: number;
  /** Indicative annual yield, informational only */
  yieldPct: number;
  rating: number;
  reviews: number;
  category: "Disponible" | "Próximamente";
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

/** A premium service included in every V·Living fraction. */
export interface PremiumService {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  /** true = included now; false = "pregunta por el listado completo". */
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
