import type {
  Destination,
  DocumentItem,
  Experience,
  Payment,
  PremiumService,
  Property,
  Stay,
} from "./types";

// Stable, on-brand Riviera-Maya imagery (Unsplash) used as demo content until
// real renders are uploaded to /public/projects/<id>/NN.jpg.
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Local render path helper (user uploads these later; SmartImage falls back to
// an elegant branded placeholder while they are absent).
const render = (id: string, n: string) => `/projects/${id}/${n}.jpg`;

// ---- Riviera Maya destinations (ONLY Cancún / Tulum / Playa del Carmen) ----
export const destinations: Destination[] = [
  { name: "Tulum", properties: 1, image: img("photo-1518105779142-d975f22f1b0a") },
  { name: "Cancún", properties: 1, image: img("photo-1510097467424-192d713fd8b2") },
  { name: "Playa del Carmen", properties: 1, image: img("photo-1571003123894-1f0594d2b5d9") },
];

// ---- Developments (projects) ----
export const properties: Property[] = [
  {
    id: "attik",
    name: "ATTIK",
    tagline: "fractional living · by V·Living",
    location: "Tulum, Quintana Roo",
    city: "Tulum",
    state: "Quintana Roo",
    status: "Disponible",
    delivery: "Agosto 2026",
    kind: "Edificio boutique de autor",
    totalFractions: 14,
    weeksPerFraction: 3,
    image: render("attik", "01"),
    gallery: [
      render("attik", "01"),
      render("attik", "02"),
      render("attik", "03"),
      render("attik", "04"),
    ],
    priceFromMXN: 2_450_000,
    description:
      "ATTIK es nuestro proyecto insignia: un edificio boutique de autor en el corazón de Tulum, Quintana Roo. Se vende en 14 fracciones; cada fracción te da 3 semanas al año (1 premium, 1 intermedia y 1 flexible). Compras tu fracción y la disfrutas, la rentas o la revendes — nosotros la operamos por ti, llave en mano, bajo Fideicomiso Bancario. Entrega Agosto 2026.",
    amenities: [
      { icon: "directions_car", label: "Traslado aeropuerto" },
      { icon: "cleaning_services", label: "Mucama · limpieza diaria" },
      { icon: "restaurant", label: "−30% en restaurantes" },
      { icon: "sailing", label: "Yates · tours · vida nocturna" },
      { icon: "concierge", label: "Concierge premium" },
      { icon: "account_balance", label: "Fideicomiso bancario" },
    ],
    featured: true,
    // legacy-compatible aliases
    priceMXN: 2_450_000,
    fraction: "1 / 14",
    weeksPerYear: 3,
    yieldPct: 9.4,
    rating: 5.0,
    reviews: 0,
    category: "Disponible",
  },
  {
    id: "proximamente-cancun",
    name: "Próximamente — Cancún",
    tagline: "fractional living · by V·Living",
    location: "Cancún, Quintana Roo",
    city: "Cancún",
    state: "Quintana Roo",
    status: "Próximamente",
    delivery: "Por anunciar",
    kind: "Edificio boutique de autor",
    totalFractions: 14,
    weeksPerFraction: 3,
    image: render("proximamente-cancun", "01"),
    gallery: [render("proximamente-cancun", "01")],
    priceFromMXN: 0,
    description:
      "Nuestro próximo desarrollo boutique en Cancún, Quintana Roo. Mismo modelo V·Living: 14 fracciones, 3 semanas al año por fracción, gestión de punta a punta (V·Billing) y respaldo de Fideicomiso Bancario. Déjanos tus datos por WhatsApp para ser de los primeros en conocer precios y disponibilidad.",
    amenities: [
      { icon: "directions_car", label: "Traslado aeropuerto" },
      { icon: "cleaning_services", label: "Mucama · limpieza diaria" },
      { icon: "concierge", label: "Concierge premium" },
    ],
    priceMXN: 0,
    fraction: "1 / 14",
    weeksPerYear: 3,
    yieldPct: 0,
    rating: 0,
    reviews: 0,
    category: "Próximamente",
  },
  {
    id: "proximamente-playa-del-carmen",
    name: "Próximamente — Playa del Carmen",
    tagline: "fractional living · by V·Living",
    location: "Playa del Carmen, Quintana Roo",
    city: "Playa del Carmen",
    state: "Quintana Roo",
    status: "Próximamente",
    delivery: "Por anunciar",
    kind: "Edificio boutique de autor",
    totalFractions: 14,
    weeksPerFraction: 3,
    image: render("proximamente-playa-del-carmen", "01"),
    gallery: [render("proximamente-playa-del-carmen", "01")],
    priceFromMXN: 0,
    description:
      "Un nuevo edificio boutique de autor en Playa del Carmen, Quintana Roo. Mismo modelo V·Living: 14 fracciones, 3 semanas al año por fracción, servicios premium incluidos y operación llave en mano bajo Fideicomiso Bancario. Escríbenos por WhatsApp para recibir el dossier en cuanto esté disponible.",
    amenities: [
      { icon: "restaurant", label: "−30% en restaurantes" },
      { icon: "sailing", label: "Yates · tours" },
      { icon: "concierge", label: "Concierge premium" },
    ],
    priceMXN: 0,
    fraction: "1 / 14",
    weeksPerYear: 3,
    yieldPct: 0,
    rating: 0,
    reviews: 0,
    category: "Próximamente",
  },
];

// ---- Experiences (V·Experiences — Riviera Maya context) ----
export const experiences: Experience[] = [
  {
    id: "yate-privado",
    title: "Yate privado en el Caribe",
    category: "Navegación",
    duration: "4 horas de navegación",
    priceMXN: 18000,
    image: img("photo-1599582909646-d7c0a9e2a4f7"),
    icon: "sailing",
    exclusive: true,
  },
  {
    id: "cenote-privado",
    title: "Cenote privado en la selva",
    category: "Aventura",
    duration: "3 horas",
    priceMXN: 6800,
    image: img("photo-1544551763-46a013bb70d5"),
    icon: "scuba_diving",
    exclusive: true,
  },
  {
    id: "chef-privado",
    title: "Chef privado en tu residencia",
    category: "Gastronomía",
    duration: "Cena de 5 tiempos",
    priceMXN: 3500,
    image: img("photo-1556910103-1c02745aae4d"),
    icon: "restaurant",
  },
  {
    id: "spa-en-residencia",
    title: "Spa & masajes en tu residencia",
    category: "Bienestar",
    duration: "90 minutos",
    priceMXN: 4200,
    image: img("photo-1540555700478-4be289fbecef"),
    icon: "spa",
  },
  {
    id: "tour-tulum",
    title: "Tour ruinas & beach club, Tulum",
    category: "Aventura",
    duration: "Día completo",
    priceMXN: 5200,
    image: img("photo-1518105779142-d975f22f1b0a"),
    icon: "tour",
  },
  {
    id: "vida-nocturna",
    title: "Vida nocturna VIP",
    category: "Gastronomía",
    duration: "Noche",
    priceMXN: 5500,
    image: img("photo-1514525253161-7a46d19cd819"),
    icon: "nightlife",
  },
];

// ---- Included services in every fraction (deck slide 4) ----
export const services: PremiumService[] = [
  {
    id: "movilidad",
    name: "Movilidad",
    category: "Incluido en tu fracción",
    description:
      "Traslado desde el aeropuerto y choferes a tu disposición (2 camionetas).",
    icon: "directions_car",
    approved: true,
  },
  {
    id: "hoteleria",
    name: "Hotelería",
    category: "Incluido en tu fracción",
    description: "Mucama y limpieza diaria durante toda tu estancia.",
    icon: "cleaning_services",
    approved: true,
  },
  {
    id: "gastronomia",
    name: "Gastronomía",
    category: "Incluido en tu fracción",
    description: "Hasta −30% en restaurantes seleccionados de la Riviera Maya.",
    icon: "restaurant",
    approved: true,
  },
  {
    id: "experiencias",
    name: "Experiencias",
    category: "Incluido en tu fracción",
    description: "Yates, tours y vida nocturna curados por V·Experiences.",
    icon: "sailing",
    approved: true,
  },
  {
    id: "atencion-premium",
    name: "Atención premium",
    category: "Incluido en tu fracción",
    description: "Mesero, mucama y concierge dedicados a tu visita.",
    icon: "concierge",
    approved: true,
  },
  {
    id: "descuentos-vexperiences",
    name: "Descuentos V·Experiences",
    category: "Incluido en tu fracción",
    description: "Yates · restaurantes · autos · vida nocturna a precio preferente.",
    icon: "local_offer",
    approved: true,
  },
];

export const documents: DocumentItem[] = [
  { id: "d1", name: "Contrato de Fideicomiso Bancario", type: "PDF", size: "2.4 MB", icon: "account_balance", status: "Firmado" },
  { id: "d2", name: "Certificado de Fracción (1 / 14)", type: "PDF", size: "1.1 MB", icon: "verified_user", status: "Firmado" },
  { id: "d3", name: "Reglamento de uso · 3 semanas/año", type: "PDF", size: "860 KB", icon: "gavel", status: "En revisión" },
  { id: "d4", name: "Acuerdo V·Billing (operación llave en mano)", type: "PDF", size: "1.4 MB", icon: "build", status: "Pendiente" },
];

export const stays: Stay[] = [
  {
    id: "s1",
    propertyName: "ATTIK — Semana premium",
    location: "Tulum, Quintana Roo",
    image: img("photo-1582268611958-ebfd161ef9cf"),
    checkIn: "20 May 2026",
    checkOut: "27 May 2026",
    status: "Confirmada",
  },
  {
    id: "s2",
    propertyName: "ATTIK — Semana intermedia",
    location: "Tulum, Quintana Roo",
    image: img("photo-1505691938895-1758d7feb511"),
    checkIn: "14 Jul 2026",
    checkOut: "21 Jul 2026",
    status: "Pendiente",
  },
];

export const payments: Payment[] = [
  { id: "p1", concept: "Adquisición fracción 1/14 — ATTIK, Tulum", date: "12 Mar 2026", amountMXN: 2450000, method: "Transferencia", status: "Pagado" },
  { id: "p2", concept: "Cuota V·Billing anual 2026", date: "01 Ene 2026", amountMXN: 48000, method: "Mercado Pago", status: "Pagado" },
  { id: "p3", concept: "Experiencia — Yate privado", date: "18 May 2026", amountMXN: 18000, method: "Stripe", status: "Procesando" },
  { id: "p4", concept: "Cuota de operación Q3 2026", date: "01 Jul 2026", amountMXN: 12000, method: "Mercado Pago", status: "Pendiente" },
];

export const formatMXN = (n: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);

export const getProperty = (id: string) => properties.find((p) => p.id === id);

// Computed marketplace stats for the social-proof band.
export const stats = {
  developments: properties.length,
  cities: new Set(properties.map((p) => p.city)).size,
  fractions: 14,
  weeks: 3,
  years: 10,
};

// Featured selection (ATTIK first).
export const featuredProperties = (() => {
  const f = properties.filter((p) => p.featured);
  return f.length ? f : properties.slice(0, 1);
})();
