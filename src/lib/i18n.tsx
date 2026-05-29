"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale = "es" | "en";

type Dict = Record<string, string>;

const es: Dict = {
  // ---- Nav ----
  "nav.explore": "Explorar",
  "nav.fractions": "Desarrollos",
  "nav.developments": "Desarrollos",
  "nav.included": "Tu fracción incluye",
  "nav.stays": "Estancias",
  "nav.experiences": "Experiencias",
  "nav.services": "Servicios",
  "nav.portal": "Portal",
  "nav.profile": "Perfil",
  "nav.notifications": "Notificaciones",
  "nav.home": "Inicio",
  "nav.live": "Vivir",
  "nav.theme": "Tema",
  "nav.language": "Idioma",
  "nav.lightMode": "Modo claro",
  "nav.darkMode": "Modo oscuro",

  // ---- Brand ----
  "brand.tagline": "Fractional Ownership",
  "brand.taglineEs": "Fractional Ownership",

  // ---- WhatsApp messages ----
  "wa.general": "Hola, quiero entender V·Living (fractional ownership en la Riviera Maya).",
  "wa.attik": "Hola, me interesa ATTIK en Tulum. ¿Me comparten precios y disponibilidad de fracciones?",
  "wa.soon": "Hola, quiero información de los próximos desarrollos V·Living. Déjenme en la lista.",
  "wa.expPrefix": "Hola, quiero reservar la experiencia:",

  // ---- CTAs ----
  "cta.discoverProject": "Descubre el proyecto",
  "cta.understand": "Quiero entender V·Living",
  "cta.lead": "Quiero información",

  // ---- Statuses ----
  "status.available": "Disponible",
  "status.soon": "Próximamente",

  // ---- Home hero (ATTIK) ----
  "home.hero.badge": "Entrega Agosto 2026",
  "home.hero.eyebrow": "Tulum · Quintana Roo",
  "home.hero.value": "Compras tu fracción. La disfrutas, la rentas o la revendes.",
  "home.trust.years": "+10 años operando fideicomisos · transparencia total",

  // ---- ¿Qué es V·Living? ----
  "home.what.badge": "Qué es V·Living",
  "home.what.body": "Más que fractional. Tu vivienda gestionada de punta a punta. V·Billing.",

  // ---- Cómo funciona (V·Billing) ----
  "home.how.eyebrow": "Cómo funciona",
  "home.how.title": "El modelo V·Billing",
  "home.how.subtitle": "Tres pasos. Nosotros nos encargamos de todo.",
  "home.how.s1.title": "Adquirir",
  "home.how.s1.body": "Te ayudamos a comprar tu fracción.",
  "home.how.s2.title": "Transformar",
  "home.how.s2.body": "La protegemos en fideicomiso.",
  "home.how.s3.title": "Administrar",
  "home.how.s3.body": "La operamos por ti, llave en mano.",

  // ---- El modelo ----
  "home.model.eyebrow": "El modelo",
  "home.model.title": "14 fracciones. 3 semanas tuyas.",
  "home.model.body": "Cada año eliges 1 semana premium, 1 intermedia y 1 flexible. Compras tu fracción y la disfrutas, la rentas o la revendes.",
  "home.model.fractions": "Fracciones",
  "home.model.weeks": "Semanas / año",
  "home.model.split": "Premium · Inter · Flex",

  // ---- Tu fracción incluye ----
  "home.included.eyebrow": "Tu fracción incluye",
  "home.included.title": "Servicios premium.",
  "home.included.subtitle": "Cada visita, todo resuelto.",
  "home.included.more": "Y mucho más. Pregunta por el listado completo de beneficios.",

  // ---- Desarrollos ----
  "home.devs.eyebrow": "Desarrollos",
  "home.devs.title": "Riviera Maya.",

  // ---- Experiences section ----
  "home.exp.eyebrow": "V·Experiences",
  "home.experiences.title": "Experiencias.",
  "home.seeAll": "Ver todos",

  // ---- Final CTA ----
  "home.cta.eyebrow": "Empieza hoy",
  "home.cta.title": "Quiero entender V·Living",
  "home.cta.body": "Te explicamos el modelo, los servicios incluidos y el fideicomiso. Sin compromiso.",

  // ---- Developments (marketplace) ----
  "dev.eyebrow": "Riviera Maya · Quintana Roo",
  "dev.title": "Desarrollos",
  "dev.subtitle": "Edificios boutique de autor en Cancún, Tulum y Playa del Carmen. 14 fracciones · 3 semanas/año, bajo Fideicomiso Bancario.",
  "dev.searchPlaceholder": "Buscar desarrollos, ciudades…",
  "dev.filter.all": "Todas las ciudades",
  "dev.filter.tulum": "Tulum",
  "dev.filter.cancun": "Cancún",
  "dev.filter.playa": "Playa del Carmen",
  "dev.status.all": "Todos",
  "dev.status.available": "Disponible",
  "dev.status.soon": "Próximamente",
  "dev.empty.title": "Sin resultados",
  "dev.empty.body": "No encontramos desarrollos con esos filtros. Ajusta la ciudad o el estatus e inténtalo de nuevo.",

  // ---- Development card ----
  "card.delivery": "Entrega",
  "card.kind": "Edificio boutique de autor",
  "card.model": "Modelo",
  "card.fractions": "fracciones",
  "card.weeks": "semanas",
  "card.from": "Desde",

  // ---- Development detail ----
  "detail.from": "Desde",
  "detail.fractions": "Fracciones",
  "detail.weeks": "Semanas / año",
  "detail.weeksSplit": "semanas/año (premium · intermedia · flexible)",
  "detail.kindShort": "Tipo",
  "detail.boutique": "Boutique",
  "detail.soonLead": "Sé de los primeros en conocer precios y disponibilidad. Escríbenos por WhatsApp.",
  "detail.about.eyebrow": "El proyecto",
  "detail.gallery": "Galería",
  "detail.localExperiences": "Experiencias locales",
  "detail.docs": "Fideicomiso & documentos",
  "detail.seeAll": "Ver todo",

  // ---- Calendar ----
  "cal.checkIn": "Check-in",
  "cal.checkOut": "Check-out",
  "cal.guests": "Huéspedes",
  "cal.guestsValue": "6 Personas",
  "cal.reset": "Reiniciar",

  // ---- Experiences ----
  "exp.title": "V·Experiences",
  "exp.subtitle": "Yates, tours, gastronomía y vida nocturna en la Riviera Maya. Reserva por WhatsApp.",
  "exp.searchPlaceholder": "Buscar experiencias",
  "exp.filter.all": "Todas",
  "exp.filter.sailing": "Navegación",
  "exp.filter.wellness": "Bienestar",
  "exp.filter.adventure": "Aventura",
  "exp.filter.gastronomy": "Gastro & nocturna",
  "exp.book": "Reservar",
  "exp.from": "Desde",
  "exp.exclusive": "Exclusivo",
  "exp.save": "Guardar",

  // ---- Stays ----
  "stays.title": "Estancias",
  "stays.subtitle": "Tus 3 semanas del año (premium · intermedia · flexible) en V·Living.",
  "stays.myBookings": "Mis reservas",
  "stays.empty": "Aún no tienes reservas. Explora propiedades y reserva tu primera estancia.",
  "stays.bookNew": "Reserva una nueva estancia",
  "stays.checkIn": "Check-in",
  "stays.checkOut": "Check-out",
  "stays.status.confirmed": "Confirmada",
  "stays.status.pending": "Pendiente",
  "stays.status.completed": "Completada",

  // ---- Services ----
  "services.title": "Tu fracción incluye",
  "services.subtitle": "Servicios premium incluidos en cada fracción. Cada visita, todo resuelto.",
  "services.approved": "Incluido",
  "services.soon": "Próximamente",
  "services.request": "Pregunta por WhatsApp",
  "services.unavailable": "No disponible",

  // ---- Owner dashboard ----
  "owner.title": "Dashboard",
  "owner.subtitle": "Gestiona tu fracción, tus 3 semanas y tu operación V·Billing.",
  "owner.explore": "Ver Desarrollos",
  "owner.portfolioValue": "Valor de tu fracción",
  "owner.thisYear": "este año",
  "owner.myFractions": "Mis Fracciones",
  "owner.viewPortfolio": "Ver portafolio",
  "owner.weeksAvailable": "Semanas / año",
  "owner.bookNow": "Reservar ahora",
  "owner.nextStay": "Próxima semana",
  "owner.recentActivity": "Actividad reciente",
  "owner.upcomingPayments": "Próximos pagos",
  "owner.seeAll": "Ver todo",
  "owner.checkIn": "Check-in",
  "owner.checkOut": "Check-out",
  "owner.allocation": "Asignación por desarrollo",
  "owner.yieldByProperty": "Valor estimado por desarrollo",
  "owner.portfolioGrowth": "Crecimiento del portafolio",
  "owner.quickActions": "Acciones rápidas",
  "owner.qa.book": "Reservar estancia",
  "owner.qa.experiences": "Experiencias",
  "owner.qa.documents": "Documentos",
  "owner.qa.pay": "Pagos",
  "owner.act.yield": "Valor estimado ATTIK +1.2%",
  "owner.act.booking": "Semana confirmada — Tulum",
  "owner.act.doc": "Documento firmado — Fideicomiso",
  "owner.act.payment": "Pago recibido — V·Billing Q1",
  "owner.time.2h": "Hace 2 h",
  "owner.time.1d": "Hace 1 día",
  "owner.time.3d": "Hace 3 días",
  "owner.time.1w": "Hace 1 semana",

  // ---- Portfolio ----
  "portfolio.title": "Mi Portafolio",
  "portfolio.subtitle": "Tu fracción en la Riviera Maya, valor consolidado y semanas.",
  "portfolio.totalValue": "Valor total",
  "portfolio.fractions": "Fracciones",
  "portfolio.avgYield": "Valor est. anual",
  "portfolio.weeksYear": "Semanas/año",
  "portfolio.myFractions": "Mis fracciones",
  "portfolio.fraction": "Fracción",
  "portfolio.yield": "Rendimiento",
  "portfolio.value": "Valor",

  // ---- Contracts ----
  "contracts.title": "Contratos y Documentos",
  "contracts.subtitle": "Bóveda segura con todos los documentos asociados a tu propiedad fraccional.",
  "contracts.encrypted.title": "Almacenamiento cifrado",
  "contracts.encrypted.body": "Tus documentos están protegidos y disponibles 24/7. Firma electrónica integrada próximamente.",
  "contracts.status.signed": "Firmado",
  "contracts.status.pending": "Pendiente",
  "contracts.status.review": "En revisión",

  // ---- Payments ----
  "payments.title": "Pagos",
  "payments.subtitle": "Historial de transacciones y métodos de pago. Integraciones preparadas para Mercado Pago y Stripe.",
  "payments.paid2026": "Pagado en 2026",
  "payments.pendingProcessing": "Pendiente / procesando",
  "payments.history": "Historial",
  "payments.newPayment": "Nuevo pago",
  "payments.status.paid": "Pagado",
  "payments.status.pending": "Pendiente",
  "payments.status.processing": "Procesando",

  // ---- Admin ----
  "admin.title": "Admin",
  "admin.subtitle": "Panel de control operativo. Métricas clave de V·Living (V·Billing).",
  "admin.properties": "Propiedades",
  "admin.experiences": "Experiencias",
  "admin.gmv": "GMV (demo)",
  "admin.members": "Miembros",
  "admin.new": "Nueva",
  "admin.recentTx": "Transacciones recientes",
  "admin.active": "Activa",

  // ---- Profile ----
  "profile.member": "Propietario · V·Living",
  "profile.editProfile": "Editar perfil",
  "profile.logout": "Cerrar sesión",
  "profile.portfolio": "Mi Portafolio",
  "profile.stays": "Mis Estancias",
  "profile.contracts": "Contratos",
  "profile.payments": "Pagos",
  "profile.services": "Servicios",
  "profile.admin": "Admin",

  // ---- Sidebar ----
  "sidebar.dashboard": "Dashboard",
  "sidebar.portfolio": "Mi Portafolio",
  "sidebar.stays": "Mis Estancias",
  "sidebar.marketplace": "Desarrollos",
  "sidebar.experiences": "Experiencias",
  "sidebar.services": "Servicios",
  "sidebar.contracts": "Contratos",
  "sidebar.payments": "Pagos",
  "sidebar.admin": "Admin",
  "sidebar.settings": "Ajustes",
  "sidebar.status": "Status",
  "sidebar.owner": "Owner",
  "sidebar.member": "Propietario V·Living",

  // ---- not-found / error / loading ----
  "notfound.title": "Esta página no existe",
  "notfound.body": "La ruta que buscas no está disponible. Vuelve al inicio para seguir explorando V·Living.",
  "notfound.home": "Ir al inicio",
  "notfound.fractions": "Ver desarrollos",
  "error.title": "Algo salió mal",
  "error.body": "Ocurrió un error inesperado. Puedes intentar de nuevo o volver más tarde.",
  "error.retry": "Reintentar",

  // ---- Footer ----
  "footer.tagline": "Fractional ownership en la Riviera Maya. Tu vivienda gestionada de punta a punta. V·Billing.",
  "footer.explore": "Explorar",
  "footer.company": "Compañía",
  "footer.legal": "Legal",
  "footer.about": "Acerca de",
  "footer.careers": "Carreras",
  "footer.press": "Prensa",
  "footer.contact": "Contacto",
  "footer.terms": "Términos y condiciones",
  "footer.privacy": "Aviso de privacidad",
  "footer.cookies": "Cookies",
  "footer.compliance": "Cumplimiento",
  "footer.rights": "Todos los derechos reservados.",
};

const en: Dict = {
  // ---- Nav ----
  "nav.explore": "Explore",
  "nav.fractions": "Developments",
  "nav.developments": "Developments",
  "nav.included": "What's included",
  "nav.stays": "Stays",
  "nav.experiences": "Experiences",
  "nav.services": "Services",
  "nav.portal": "Portal",
  "nav.profile": "Profile",
  "nav.notifications": "Notifications",
  "nav.home": "Home",
  "nav.live": "Live",
  "nav.theme": "Theme",
  "nav.language": "Language",
  "nav.lightMode": "Light mode",
  "nav.darkMode": "Dark mode",

  // ---- Brand ----
  "brand.tagline": "Fractional Ownership",
  "brand.taglineEs": "Fractional Ownership",

  // ---- WhatsApp messages ----
  "wa.general": "Hi, I'd like to understand V·Living (fractional ownership in the Riviera Maya).",
  "wa.attik": "Hi, I'm interested in ATTIK in Tulum. Can you share fraction prices and availability?",
  "wa.soon": "Hi, I'd like info on the upcoming V·Living developments. Please add me to the list.",
  "wa.expPrefix": "Hi, I'd like to book the experience:",

  // ---- CTAs ----
  "cta.discoverProject": "Discover the project",
  "cta.understand": "I want to understand V·Living",
  "cta.lead": "Request information",

  // ---- Statuses ----
  "status.available": "Available",
  "status.soon": "Coming soon",

  // ---- Home hero (ATTIK) ----
  "home.hero.badge": "Delivery August 2026",
  "home.hero.eyebrow": "Tulum · Quintana Roo",
  "home.hero.value": "Buy your fraction. Enjoy it, rent it, or resell it.",
  "home.trust.years": "+10 years operating trusts · full transparency",

  // ---- What is V·Living? ----
  "home.what.badge": "What is V·Living",
  "home.what.body": "More than fractional. Your home managed end to end. V·Billing.",

  // ---- How it works (V·Billing) ----
  "home.how.eyebrow": "How it works",
  "home.how.title": "The V·Billing model",
  "home.how.subtitle": "Three steps. We handle everything.",
  "home.how.s1.title": "Acquire",
  "home.how.s1.body": "We help you buy your fraction.",
  "home.how.s2.title": "Transform",
  "home.how.s2.body": "We protect it in a bank trust.",
  "home.how.s3.title": "Manage",
  "home.how.s3.body": "We operate it for you, turnkey.",

  // ---- The model ----
  "home.model.eyebrow": "The model",
  "home.model.title": "14 fractions. 3 weeks for you.",
  "home.model.body": "Each year you choose 1 premium week, 1 intermediate and 1 flexible. Buy your fraction and enjoy it, rent it, or resell it.",
  "home.model.fractions": "Fractions",
  "home.model.weeks": "Weeks / year",
  "home.model.split": "Premium · Inter · Flex",

  // ---- What your fraction includes ----
  "home.included.eyebrow": "Your fraction includes",
  "home.included.title": "Premium services.",
  "home.included.subtitle": "Every visit, all taken care of.",
  "home.included.more": "And much more. Ask for the full list of benefits.",

  // ---- Developments ----
  "home.devs.eyebrow": "Developments",
  "home.devs.title": "Riviera Maya.",

  // ---- Experiences section ----
  "home.exp.eyebrow": "V·Experiences",
  "home.experiences.title": "Experiences.",
  "home.seeAll": "See all",

  // ---- Final CTA ----
  "home.cta.eyebrow": "Start today",
  "home.cta.title": "I want to understand V·Living",
  "home.cta.body": "We'll walk you through the model, the included services and the bank trust. No commitment.",

  // ---- Developments (marketplace) ----
  "dev.eyebrow": "Riviera Maya · Quintana Roo",
  "dev.title": "Developments",
  "dev.subtitle": "Signature boutique buildings in Cancún, Tulum and Playa del Carmen. 14 fractions · 3 weeks/year, under a bank trust.",
  "dev.searchPlaceholder": "Search developments, cities…",
  "dev.filter.all": "All cities",
  "dev.filter.tulum": "Tulum",
  "dev.filter.cancun": "Cancún",
  "dev.filter.playa": "Playa del Carmen",
  "dev.status.all": "All",
  "dev.status.available": "Available",
  "dev.status.soon": "Coming soon",
  "dev.empty.title": "No results",
  "dev.empty.body": "We couldn't find developments with those filters. Adjust the city or status and try again.",

  // ---- Development card ----
  "card.delivery": "Delivery",
  "card.kind": "Signature boutique building",
  "card.model": "Model",
  "card.fractions": "fractions",
  "card.weeks": "weeks",
  "card.from": "From",

  // ---- Development detail ----
  "detail.from": "From",
  "detail.fractions": "Fractions",
  "detail.weeks": "Weeks / year",
  "detail.weeksSplit": "weeks/year (premium · intermediate · flexible)",
  "detail.kindShort": "Type",
  "detail.boutique": "Boutique",
  "detail.soonLead": "Be among the first to know prices and availability. Message us on WhatsApp.",
  "detail.about.eyebrow": "The project",
  "detail.gallery": "Gallery",
  "detail.localExperiences": "Local experiences",
  "detail.docs": "Bank trust & documents",
  "detail.seeAll": "See all",

  // ---- Calendar ----
  "cal.checkIn": "Check-in",
  "cal.checkOut": "Check-out",
  "cal.guests": "Guests",
  "cal.guestsValue": "6 Guests",
  "cal.reset": "Reset",

  // ---- Experiences ----
  "exp.title": "V·Experiences",
  "exp.subtitle": "Yachts, tours, dining and nightlife across the Riviera Maya. Book on WhatsApp.",
  "exp.searchPlaceholder": "Search experiences",
  "exp.filter.all": "All",
  "exp.filter.sailing": "Sailing",
  "exp.filter.wellness": "Wellness",
  "exp.filter.adventure": "Adventure",
  "exp.filter.gastronomy": "Dining & nightlife",
  "exp.book": "Book",
  "exp.from": "From",
  "exp.exclusive": "Exclusive",
  "exp.save": "Save",

  // ---- Stays ----
  "stays.title": "Stays",
  "stays.subtitle": "Your 3 weeks of the year (premium · intermediate · flexible) at V·Living.",
  "stays.myBookings": "My bookings",
  "stays.empty": "You don't have bookings yet. Explore properties and book your first stay.",
  "stays.bookNew": "Book a new stay",
  "stays.checkIn": "Check-in",
  "stays.checkOut": "Check-out",
  "stays.status.confirmed": "Confirmed",
  "stays.status.pending": "Pending",
  "stays.status.completed": "Completed",

  // ---- Services ----
  "services.title": "Your fraction includes",
  "services.subtitle": "Premium services included in every fraction. Every visit, all taken care of.",
  "services.approved": "Included",
  "services.soon": "Coming soon",
  "services.request": "Ask on WhatsApp",
  "services.unavailable": "Unavailable",

  // ---- Owner dashboard ----
  "owner.title": "Dashboard",
  "owner.subtitle": "Manage your fraction, your 3 weeks and your V·Billing operation.",
  "owner.explore": "View Developments",
  "owner.portfolioValue": "Your fraction value",
  "owner.thisYear": "this year",
  "owner.myFractions": "My Fractions",
  "owner.viewPortfolio": "View portfolio",
  "owner.weeksAvailable": "Weeks / year",
  "owner.bookNow": "Book now",
  "owner.nextStay": "Next week",
  "owner.recentActivity": "Recent activity",
  "owner.upcomingPayments": "Upcoming payments",
  "owner.seeAll": "See all",
  "owner.checkIn": "Check-in",
  "owner.checkOut": "Check-out",
  "owner.allocation": "Allocation by development",
  "owner.yieldByProperty": "Estimated value by development",
  "owner.portfolioGrowth": "Portfolio growth",
  "owner.quickActions": "Quick actions",
  "owner.qa.book": "Book a stay",
  "owner.qa.experiences": "Experiences",
  "owner.qa.documents": "Documents",
  "owner.qa.pay": "Payments",
  "owner.act.yield": "ATTIK estimated value +1.2%",
  "owner.act.booking": "Week confirmed — Tulum",
  "owner.act.doc": "Document signed — Bank trust",
  "owner.act.payment": "Payment received — V·Billing Q1",
  "owner.time.2h": "2 h ago",
  "owner.time.1d": "1 day ago",
  "owner.time.3d": "3 days ago",
  "owner.time.1w": "1 week ago",

  // ---- Portfolio ----
  "portfolio.title": "My Portfolio",
  "portfolio.subtitle": "Your fraction in the Riviera Maya, consolidated value and weeks.",
  "portfolio.totalValue": "Total value",
  "portfolio.fractions": "Fractions",
  "portfolio.avgYield": "Est. annual value",
  "portfolio.weeksYear": "Weeks/year",
  "portfolio.myFractions": "My fractions",
  "portfolio.fraction": "Fraction",
  "portfolio.yield": "Yield",
  "portfolio.value": "Value",

  // ---- Contracts ----
  "contracts.title": "Contracts & Documents",
  "contracts.subtitle": "Secure vault with all documents associated with your fractional property.",
  "contracts.encrypted.title": "Encrypted storage",
  "contracts.encrypted.body": "Your documents are protected and available 24/7. Integrated e-signature coming soon.",
  "contracts.status.signed": "Signed",
  "contracts.status.pending": "Pending",
  "contracts.status.review": "Under review",

  // ---- Payments ----
  "payments.title": "Payments",
  "payments.subtitle": "Transaction history and payment methods. Integrations ready for Mercado Pago and Stripe.",
  "payments.paid2026": "Paid in 2026",
  "payments.pendingProcessing": "Pending / processing",
  "payments.history": "History",
  "payments.newPayment": "New payment",
  "payments.status.paid": "Paid",
  "payments.status.pending": "Pending",
  "payments.status.processing": "Processing",

  // ---- Admin ----
  "admin.title": "Admin",
  "admin.subtitle": "Operational control panel. Key V·Living (V·Billing) metrics.",
  "admin.properties": "Properties",
  "admin.experiences": "Experiences",
  "admin.gmv": "GMV (demo)",
  "admin.members": "Members",
  "admin.new": "New",
  "admin.recentTx": "Recent transactions",
  "admin.active": "Active",

  // ---- Profile ----
  "profile.member": "Propietario · V·Living",
  "profile.editProfile": "Edit profile",
  "profile.logout": "Log out",
  "profile.portfolio": "My Portfolio",
  "profile.stays": "My Stays",
  "profile.contracts": "Contracts",
  "profile.payments": "Payments",
  "profile.services": "Services",
  "profile.admin": "Admin",

  // ---- Sidebar ----
  "sidebar.dashboard": "Dashboard",
  "sidebar.portfolio": "My Portfolio",
  "sidebar.stays": "My Stays",
  "sidebar.marketplace": "Developments",
  "sidebar.experiences": "Experiences",
  "sidebar.services": "Services",
  "sidebar.contracts": "Contracts",
  "sidebar.payments": "Payments",
  "sidebar.admin": "Admin",
  "sidebar.settings": "Settings",
  "sidebar.status": "Status",
  "sidebar.owner": "Owner",
  "sidebar.member": "Propietario V·Living",

  // ---- not-found / error / loading ----
  "notfound.title": "This page doesn't exist",
  "notfound.body": "The route you're looking for is unavailable. Return home to keep exploring V·Living.",
  "notfound.home": "Go home",
  "notfound.fractions": "View developments",
  "error.title": "Something went wrong",
  "error.body": "An unexpected error occurred. You can try again or come back later.",
  "error.retry": "Retry",

  // ---- Footer ----
  "footer.tagline": "Fractional ownership in the Riviera Maya. Your home managed end to end. V·Billing.",
  "footer.explore": "Explore",
  "footer.company": "Company",
  "footer.legal": "Legal",
  "footer.about": "About",
  "footer.careers": "Careers",
  "footer.press": "Press",
  "footer.contact": "Contact",
  "footer.terms": "Terms & conditions",
  "footer.privacy": "Privacy policy",
  "footer.cookies": "Cookies",
  "footer.compliance": "Compliance",
  "footer.rights": "All rights reserved.",
};

export const dict: Record<Locale, Dict> = { es, en };

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "v-living-locale";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Default to "es" on first render (no FOUC / hydration mismatch); read stored
  // preference after mount.
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "es" || stored === "en") setLocaleState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (key: string) => dict[locale][key] ?? dict.es[key] ?? key,
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useT must be used within I18nProvider");
  }
  return ctx;
}
