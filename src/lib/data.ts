import type {
  Destination,
  DocumentItem,
  Experience,
  Payment,
  PremiumService,
  Property,
  Stay,
} from "./types";

// Stable, high-quality cinematic imagery (Unsplash). Used as mock content
// until real property media is wired through the CMS / database.
const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const destinations: Destination[] = [
  { name: "Cancún", properties: 4, image: img("photo-1510097467424-192d713fd8b2") },
  { name: "Los Cabos", properties: 7, image: img("photo-1597531072931-8fbe924f5b8e") },
  { name: "Tulum", properties: 12, image: img("photo-1518105779142-d975f22f1b0a") },
  { name: "Riviera Maya", properties: 8, image: img("photo-1571896349842-33c89424de2d") },
  { name: "Valle de Bravo", properties: 5, image: img("photo-1449158743715-0a90ebb6d2d8") },
];

export const properties: Property[] = [
  {
    id: "casa-del-mar",
    name: "Casa del Mar",
    location: "Los Cabos, Baja California Sur",
    city: "Los Cabos",
    image: img("photo-1613490493576-7fde63acd811"),
    gallery: [
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1600585154340-be6161a56a0c"),
    ],
    priceMXN: 1250000,
    fraction: "1/8",
    weeksPerYear: 6,
    yieldPct: 8.6,
    rating: 4.9,
    reviews: 32,
    category: "Playa",
    featured: true,
    description:
      "Exclusiva propiedad frente al mar con acceso directo a playa privada. Esta villa redefine el lujo en Los Cabos con acabados en mármol italiano, sistemas de automatización inteligentes y vistas panorámicas al Mar de Cortés. Incluye servicio de conserjería 24/7 y mantenimiento premium integral.",
    amenities: [
      { icon: "pool", label: "Piscina infinita" },
      { icon: "waves", label: "Acceso a playa" },
      { icon: "local_bar", label: "Cava privada" },
      { icon: "fitness_center", label: "Gym privado" },
    ],
  },
  {
    id: "villa-paraiso",
    name: "Villa Paraíso",
    location: "Tulum, Quintana Roo",
    city: "Tulum",
    image: img("photo-1582268611958-ebfd161ef9cf"),
    gallery: [img("photo-1582268611958-ebfd161ef9cf"), img("photo-1505691938895-1758d7feb511")],
    priceMXN: 980000,
    fraction: "1/10",
    weeksPerYear: 5,
    yieldPct: 9.2,
    rating: 4.8,
    reviews: 21,
    category: "Wellness",
    description:
      "Refugio frente al mar con arquitectura maya contemporánea y acabados en obsidiana. Privacidad absoluta a pasos del Caribe, ideal para bienestar y desconexión total.",
    amenities: [
      { icon: "spa", label: "Spa privado" },
      { icon: "waves", label: "Playa privada" },
      { icon: "self_improvement", label: "Yoga deck" },
    ],
  },
  {
    id: "oceanview-residence",
    name: "Oceanview Residence",
    location: "Puerto Vallarta, Jalisco",
    city: "Puerto Vallarta",
    image: img("photo-1564013799919-ab600027ffc6"),
    gallery: [img("photo-1564013799919-ab600027ffc6"), img("photo-1600596542815-ffad4c1539a9")],
    priceMXN: 1150000,
    fraction: "1/8",
    weeksPerYear: 6,
    yieldPct: 8.4,
    rating: 4.7,
    reviews: 28,
    category: "Playa",
    description:
      "Obra maestra arquitectónica sobre acantilado con piscina infinita que se funde con el horizonte. Piedra basáltica y maderas cálidas para una profundidad cinematográfica.",
    amenities: [
      { icon: "pool", label: "Piscina infinita" },
      { icon: "deck", label: "Terraza panorámica" },
      { icon: "local_bar", label: "Bar exterior" },
    ],
  },
  {
    id: "the-sanctuary",
    name: "The Sanctuary",
    location: "Valle de Bravo, Estado de México",
    city: "Valle de Bravo",
    image: img("photo-1518780664697-55e3ad937233"),
    gallery: [img("photo-1518780664697-55e3ad937233"), img("photo-1520250497591-112f2f40a3f4")],
    priceMXN: 850000,
    fraction: "1/12",
    weeksPerYear: 4,
    yieldPct: 7.9,
    rating: 4.9,
    reviews: 17,
    category: "Montaña",
    description:
      "Retiro minimalista de montaña con grandes paneles de cristal sobre un bosque de pinos. Texturas en carbón, iluminación ambiental suave y chimenea suspendida central.",
    amenities: [
      { icon: "fireplace", label: "Chimenea central" },
      { icon: "forest", label: "Bosque privado" },
      { icon: "hot_tub", label: "Jacuzzi exterior" },
    ],
  },
  {
    id: "skyline-penthouse",
    name: "Skyline Penthouse",
    location: "Polanco, Ciudad de México",
    city: "Ciudad de México",
    image: img("photo-1545324418-cc1a3fa10c00"),
    gallery: [img("photo-1545324418-cc1a3fa10c00")],
    priceMXN: 1450000,
    fraction: "1/6",
    weeksPerYear: 8,
    yieldPct: 8.1,
    rating: 4.8,
    reviews: 24,
    category: "Ciudad",
    featured: true,
    description:
      "Penthouse en el corazón de Polanco con vistas de 360°. Diseño de interiores premium, domótica integral y acceso a club privado en azotea.",
    amenities: [
      { icon: "apartment", label: "Vista 360°" },
      { icon: "elevator", label: "Elevador privado" },
      { icon: "wine_bar", label: "Sky lounge" },
    ],
  },
  {
    id: "jungle-lodge",
    name: "Jungle Lodge",
    location: "Riviera Maya, Quintana Roo",
    city: "Riviera Maya",
    image: img("photo-1571003123894-1f0594d2b5d9"),
    gallery: [img("photo-1571003123894-1f0594d2b5d9")],
    priceMXN: 920000,
    fraction: "1/10",
    weeksPerYear: 5,
    yieldPct: 8.8,
    rating: 4.7,
    reviews: 19,
    category: "Wellness",
    featured: true,
    description:
      "Arquitectura inmersa en selva con cenote privado y piscinas naturales. Lujo sostenible con materiales locales y luz cálida que invita al descanso.",
    amenities: [
      { icon: "water", label: "Cenote privado" },
      { icon: "spa", label: "Spa en selva" },
      { icon: "eco", label: "Eco-lujo" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "yate-los-cabos",
    title: "Yate privado en Los Cabos",
    category: "Navegación",
    duration: "4 horas de navegación",
    priceMXN: 18000,
    image: img("photo-1599582909646-d7c0a9e2a4f7"),
    icon: "sailing",
    exclusive: true,
  },
  {
    id: "chef-privado",
    title: "Chef privado en tu villa",
    category: "Gastronomía",
    duration: "Cena de 5 tiempos",
    priceMXN: 3500,
    image: img("photo-1556910103-1c02745aae4d"),
    icon: "restaurant",
  },
  {
    id: "helicoptero",
    title: "Tour en helicóptero",
    category: "Aventura",
    duration: "45 minutos de vuelo",
    priceMXN: 12500,
    image: img("photo-1473862170180-84427c485a02"),
    icon: "flight",
  },
  {
    id: "spa-villa",
    title: "Masajes en tu villa",
    category: "Bienestar",
    duration: "90 minutos",
    priceMXN: 4200,
    image: img("photo-1540555700478-4be289fbecef"),
    icon: "spa",
  },
  {
    id: "buceo-cenote",
    title: "Buceo en cenote privado",
    category: "Aventura",
    duration: "3 horas",
    priceMXN: 6800,
    image: img("photo-1544551763-46a013bb70d5"),
    icon: "scuba_diving",
    exclusive: true,
  },
  {
    id: "cata-vinos",
    title: "Cata de vinos premium",
    category: "Gastronomía",
    duration: "2 horas",
    priceMXN: 5500,
    image: img("photo-1510812431401-41d2bd2722f3"),
    icon: "wine_bar",
  },
];

export const services: PremiumService[] = [
  {
    id: "concierge",
    name: "Conserjería 24/7",
    category: "Lifestyle",
    description: "Asistencia personal ilimitada para reservaciones, traslados y solicitudes especiales.",
    icon: "concierge",
    approved: true,
  },
  {
    id: "transporte",
    name: "Traslados privados",
    category: "Movilidad",
    description: "Flota premium con chofer, transferencias aeropuerto y vehículos de lujo.",
    icon: "directions_car",
    approved: true,
  },
  {
    id: "jet-privado",
    name: "Jet privado",
    category: "Aviación",
    description: "Vuelos charter bajo demanda a cualquier destino con coordinación integral.",
    icon: "flight_takeoff",
    approved: true,
  },
  {
    id: "seguridad",
    name: "Seguridad personal",
    category: "Protección",
    description: "Escolta y protección ejecutiva discreta durante tu estancia.",
    icon: "security",
    approved: true,
  },
  {
    id: "limpieza",
    name: "Housekeeping premium",
    category: "Hogar",
    description: "Servicio de limpieza, lavandería y mantenimiento diario de la propiedad.",
    icon: "cleaning_services",
    approved: true,
  },
  {
    id: "eventos",
    name: "Organización de eventos",
    category: "Lifestyle",
    description: "Producción de eventos privados, cenas y celebraciones a medida.",
    icon: "celebration",
    approved: false,
  },
];

export const documents: DocumentItem[] = [
  { id: "d1", name: "Contrato de Fideicomiso", type: "PDF", size: "2.4 MB", icon: "description", status: "Firmado" },
  { id: "d2", name: "Certificado de Propiedad", type: "PDF", size: "1.1 MB", icon: "verified_user", status: "Firmado" },
  { id: "d3", name: "Reglamento de Uso", type: "PDF", size: "860 KB", icon: "gavel", status: "En revisión" },
  { id: "d4", name: "Acuerdo de Mantenimiento", type: "PDF", size: "1.4 MB", icon: "build", status: "Pendiente" },
];

export const stays: Stay[] = [
  {
    id: "s1",
    propertyName: "Casa del Mar",
    location: "Los Cabos, BCS",
    image: img("photo-1613490493576-7fde63acd811"),
    checkIn: "20 May 2026",
    checkOut: "27 May 2026",
    status: "Confirmada",
  },
  {
    id: "s2",
    propertyName: "Villa Paraíso",
    location: "Tulum, Quintana Roo",
    image: img("photo-1582268611958-ebfd161ef9cf"),
    checkIn: "14 Jul 2026",
    checkOut: "21 Jul 2026",
    status: "Pendiente",
  },
];

export const payments: Payment[] = [
  { id: "p1", concept: "Adquisición fracción 1/8 — Casa del Mar", date: "12 Mar 2026", amountMXN: 1250000, method: "Transferencia", status: "Pagado" },
  { id: "p2", concept: "Mantenimiento anual 2026", date: "01 Ene 2026", amountMXN: 48000, method: "Mercado Pago", status: "Pagado" },
  { id: "p3", concept: "Experiencia — Yate privado", date: "18 May 2026", amountMXN: 18000, method: "Stripe", status: "Procesando" },
  { id: "p4", concept: "Mantenimiento Q3 2026", date: "01 Jul 2026", amountMXN: 12000, method: "Mercado Pago", status: "Pendiente" },
];

export const formatMXN = (n: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);

export const getProperty = (id: string) => properties.find((p) => p.id === id);

// Computed marketplace stats (used on the landing social-proof band).
export const stats = {
  properties: properties.length,
  cities: new Set(properties.map((p) => p.city)).size,
  avgYield: Number(
    (properties.reduce((s, p) => s + p.yieldPct, 0) / properties.length).toFixed(1)
  ),
  members: 128,
};

// Featured selection for the hero carousel (fallback to first 3).
export const featuredProperties = (() => {
  const f = properties.filter((p) => p.featured);
  return f.length >= 3 ? f : properties.slice(0, 3);
})();
