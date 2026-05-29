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
  "nav.fractions": "Fracciones",
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
  "brand.tagline": "Fractional Ownership • Stays • Experiences",
  "brand.taglineEs": "Copropiedad • Estancias • Experiencias",

  // ---- Home hero ----
  "home.hero.eyebrow": "Fractional Ownership • Stays • Experiences",
  "home.hero.cta": "Explorar",
  "home.hero.searchPlaceholder": "Buscar destinos, propiedades o experiencias",
  "home.hero.slide1.title": "Posee una fracción del paraíso",
  "home.hero.slide1.sub": "Copropiedad de villas de lujo desde 1/8. Semanas de uso, rendimiento y un mundo de experiencias.",
  "home.hero.slide2.title": "Lujo sin la carga de poseerlo todo",
  "home.hero.slide2.sub": "Adquiere tu fracción, disfruta tus semanas y deja que nosotros gestionemos el resto.",
  "home.hero.slide3.title": "Tu portafolio de vida extraordinaria",
  "home.hero.slide3.sub": "Propiedades icónicas, estancias curadas y experiencias exclusivas en un solo lugar.",
  "home.hero.viewFraction": "Ver fracción",

  // ---- What is V Living ----
  "home.what.label": "¿Qué es V Living?",
  "home.what.body": "V Living es copropiedad premium de bienes raíces de lujo. Compras una fracción (p. ej. 1/8) de una villa, obtienes semanas de uso al año, rendimiento y acceso a estancias, experiencias y servicios aprobados.",

  // ---- How it works ----
  "home.how.title": "Cómo funciona",
  "home.how.subtitle": "Cuatro pasos hacia la copropiedad de lujo.",
  "home.how.s1.title": "Explora fracciones",
  "home.how.s1.body": "Descubre villas, penthouses y refugios icónicos disponibles en copropiedad.",
  "home.how.s2.title": "Adquiere tu fracción",
  "home.how.s2.body": "Compra desde 1/8 con fideicomiso, contrato y propiedad verificada.",
  "home.how.s3.title": "Disfruta tus semanas",
  "home.how.s3.body": "Reserva tus estancias, suma experiencias y servicios de conserjería.",
  "home.how.s4.title": "Genera rendimiento",
  "home.how.s4.body": "Tu activo trabaja para ti con rendimientos anuales transparentes.",

  // ---- Stats band ----
  "home.stats.properties": "Propiedades",
  "home.stats.cities": "Ciudades",
  "home.stats.yield": "Rendimiento prom.",
  "home.stats.members": "Miembros",

  // ---- Sections ----
  "home.destinations.title": "Destinos populares",
  "home.destinations.subtitle": "Explora las ubicaciones más exclusivas.",
  "home.featured.title": "Fracciones destacadas",
  "home.featured.subtitle": "Copropiedad seleccionada para inversionistas exigentes.",
  "home.experiences.title": "Experiencias",
  "home.experiences.subtitle": "Momentos extraordinarios para nuestra comunidad.",
  "home.services.title": "Servicios premium",
  "home.services.subtitle": "Conserjería y servicios aprobados a tu disposición.",
  "home.seeAll": "Ver todos",
  "home.properties": "Propiedades",

  // ---- Benefits ----
  "home.benefits.title": "Por qué V Living",
  "home.benefits.subtitle": "La copropiedad reinventada con estándar de lujo.",
  "home.benefits.b1.title": "Copropiedad sin complicaciones",
  "home.benefits.b1.body": "Gestión integral del activo: mantenimiento, impuestos y operación incluidos.",
  "home.benefits.b2.title": "Conserjería 24/7",
  "home.benefits.b2.body": "Un equipo dedicado para cada solicitud, traslado y reservación.",
  "home.benefits.b3.title": "Documentación y fideicomiso",
  "home.benefits.b3.body": "Contratos, certificados y fideicomiso con respaldo legal verificado.",
  "home.benefits.b4.title": "Rendimiento transparente",
  "home.benefits.b4.body": "Reportes claros de la rentabilidad anual de tu fracción.",

  // ---- Final CTA ----
  "home.cta.title": "Tu próxima propiedad te espera",
  "home.cta.body": "Únete a una comunidad exclusiva de copropietarios y vive el lujo a tu manera.",
  "home.cta.button": "Explorar fracciones",

  // ---- Fractions marketplace ----
  "fractions.title": "Marketplace de fracciones",
  "fractions.searchPlaceholder": "Buscar fracciones, ciudades…",
  "fractions.cat.all": "Todos",
  "fractions.cat.beach": "Playa",
  "fractions.cat.mountain": "Montaña",
  "fractions.cat.city": "Ciudad",
  "fractions.cat.wellness": "Wellness",
  "fractions.featured": "Destacado",
  "fractions.from": "Desde",
  "fractions.stat.fraction": "Fracción",
  "fractions.stat.stays": "Estancias",
  "fractions.stat.yield": "Rendimiento",
  "fractions.available": "disp.",
  "fractions.weeksPerYear": "sem/año",
  "fractions.viewFractions": "Ver fracciones",
  "fractions.acquire": "Adquirir fracción",
  "fractions.empty.title": "Sin resultados",
  "fractions.empty.body": "No encontramos fracciones que coincidan con tu búsqueda. Ajusta los filtros e inténtalo de nuevo.",
  "card.yield": "Rendimiento",
  "card.availableFraction": "disponible",

  // ---- Property detail ----
  "property.notFound": "Propiedad no encontrada",
  "property.investFrom": "Inversión desde",
  "property.viewAvailable": "Ver fracciones disponibles",
  "property.about": "Sobre la propiedad",
  "property.availability": "Disponibilidad",
  "property.localExperiences": "Experiencias locales",
  "property.documentVault": "Bóveda de documentos",
  "property.reserveStay": "Reservar estancia",
  "property.acquireFraction": "Adquirir fracción",
  "property.stat.fraction": "Fracción",
  "property.stat.weeks": "Semanas",
  "property.stat.yield": "Rendimiento",
  "property.reviews": "reseñas",
  "property.seeAll": "Ver todo",

  // ---- Calendar ----
  "cal.checkIn": "Check-in",
  "cal.checkOut": "Check-out",
  "cal.guests": "Huéspedes",
  "cal.guestsValue": "6 Personas",
  "cal.reset": "Reiniciar",

  // ---- Experiences ----
  "exp.title": "Experiencias",
  "exp.subtitle": "Momentos extraordinarios diseñados exclusivamente para nuestra comunidad de propietarios.",
  "exp.searchPlaceholder": "Buscar experiencias",
  "exp.filter.all": "Todas",
  "exp.filter.sailing": "Navegación",
  "exp.filter.wellness": "Bienestar",
  "exp.filter.adventure": "Aventura",
  "exp.filter.gastronomy": "Gastronomía",
  "exp.book": "Reservar",
  "exp.from": "Desde",
  "exp.exclusive": "Exclusivo",
  "exp.save": "Guardar",

  // ---- Stays ----
  "stays.title": "Estancias",
  "stays.subtitle": "Tus reservas confirmadas y próximas escapadas en el portafolio V Living.",
  "stays.myBookings": "Mis reservas",
  "stays.empty": "Aún no tienes reservas. Explora propiedades y reserva tu primera estancia.",
  "stays.bookNew": "Reserva una nueva estancia",
  "stays.checkIn": "Check-in",
  "stays.checkOut": "Check-out",
  "stays.status.confirmed": "Confirmada",
  "stays.status.pending": "Pendiente",
  "stays.status.completed": "Completada",

  // ---- Services ----
  "services.title": "Servicios Premium",
  "services.subtitle": "Catálogo de servicios aprobados y verificados, disponibles para complementar tu estancia.",
  "services.approved": "Aprobado",
  "services.soon": "Próximamente",
  "services.request": "Solicitar servicio",
  "services.unavailable": "No disponible",

  // ---- Owner dashboard ----
  "owner.title": "Dashboard",
  "owner.subtitle": "Gestiona tu portafolio y tus próximas experiencias de lujo.",
  "owner.explore": "Explorar Fracciones",
  "owner.portfolioValue": "Valor del Portafolio",
  "owner.thisYear": "este año",
  "owner.myFractions": "Mis Fracciones",
  "owner.viewPortfolio": "Ver portafolio",
  "owner.weeksAvailable": "Semanas disponibles",
  "owner.bookNow": "Reservar ahora",
  "owner.nextStay": "Próxima estancia",
  "owner.recentActivity": "Actividad reciente",
  "owner.upcomingPayments": "Próximos pagos",
  "owner.seeAll": "Ver todo",
  "owner.checkIn": "Check-in",
  "owner.checkOut": "Check-out",
  "owner.allocation": "Asignación por propiedad",
  "owner.yieldByProperty": "Rendimiento por propiedad",
  "owner.portfolioGrowth": "Crecimiento del portafolio",
  "owner.quickActions": "Acciones rápidas",
  "owner.qa.book": "Reservar estancia",
  "owner.qa.experiences": "Experiencias",
  "owner.qa.documents": "Documentos",
  "owner.qa.pay": "Pagos",
  "owner.act.yield": "Rendimiento Casa del Mar +1.2%",
  "owner.act.booking": "Reserva confirmada — Los Cabos",
  "owner.act.doc": "Documento firmado — Fideicomiso",
  "owner.act.payment": "Pago recibido — Mantenimiento Q1",
  "owner.time.2h": "Hace 2 h",
  "owner.time.1d": "Hace 1 día",
  "owner.time.3d": "Hace 3 días",
  "owner.time.1w": "Hace 1 semana",

  // ---- Portfolio ----
  "portfolio.title": "Mi Portafolio",
  "portfolio.subtitle": "Tus activos fraccionales, valor consolidado y rendimiento.",
  "portfolio.totalValue": "Valor total",
  "portfolio.fractions": "Fracciones",
  "portfolio.avgYield": "Rendimiento prom.",
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
  "admin.subtitle": "Panel de control operativo. Métricas clave del marketplace V Living.",
  "admin.properties": "Propiedades",
  "admin.experiences": "Experiencias",
  "admin.gmv": "GMV (demo)",
  "admin.members": "Miembros",
  "admin.new": "Nueva",
  "admin.recentTx": "Transacciones recientes",
  "admin.active": "Activa",

  // ---- Profile ----
  "profile.member": "Platinum Member · Owner",
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
  "sidebar.marketplace": "Marketplace",
  "sidebar.experiences": "Experiencias",
  "sidebar.services": "Servicios",
  "sidebar.contracts": "Contratos",
  "sidebar.payments": "Pagos",
  "sidebar.admin": "Admin",
  "sidebar.settings": "Ajustes",
  "sidebar.status": "Status",
  "sidebar.owner": "Owner",
  "sidebar.member": "Platinum Member",

  // ---- not-found / error / loading ----
  "notfound.title": "Esta página no existe",
  "notfound.body": "La ruta que buscas no está disponible. Vuelve al inicio para seguir explorando el universo V Living.",
  "notfound.home": "Ir al inicio",
  "notfound.fractions": "Ver fracciones",
  "error.title": "Algo salió mal",
  "error.body": "Ocurrió un error inesperado. Puedes intentar de nuevo o volver más tarde.",
  "error.retry": "Reintentar",

  // ---- Footer ----
  "footer.tagline": "Copropiedad premium de bienes raíces de lujo, estancias y experiencias extraordinarias.",
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
  "nav.fractions": "Fractions",
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
  "brand.tagline": "Fractional Ownership • Stays • Experiences",
  "brand.taglineEs": "Fractional Ownership • Stays • Experiences",

  // ---- Home hero ----
  "home.hero.eyebrow": "Fractional Ownership • Stays • Experiences",
  "home.hero.cta": "Explore",
  "home.hero.searchPlaceholder": "Search destinations, properties or experiences",
  "home.hero.slide1.title": "Own a fraction of paradise",
  "home.hero.slide1.sub": "Co-ownership of luxury villas from 1/8. Weeks of use, yield and a world of experiences.",
  "home.hero.slide2.title": "Luxury without owning it all",
  "home.hero.slide2.sub": "Acquire your fraction, enjoy your weeks, and let us manage the rest.",
  "home.hero.slide3.title": "Your portfolio of an extraordinary life",
  "home.hero.slide3.sub": "Iconic properties, curated stays and exclusive experiences in one place.",
  "home.hero.viewFraction": "View fraction",

  // ---- What is V Living ----
  "home.what.label": "What is V Living?",
  "home.what.body": "V Living is premium fractional ownership of luxury real estate. You buy a fraction (e.g. 1/8) of a villa, get weeks of use per year, yield, and access to stays, experiences and approved services.",

  // ---- How it works ----
  "home.how.title": "How it works",
  "home.how.subtitle": "Four steps to luxury co-ownership.",
  "home.how.s1.title": "Explore fractions",
  "home.how.s1.body": "Discover iconic villas, penthouses and retreats available for co-ownership.",
  "home.how.s2.title": "Acquire your fraction",
  "home.how.s2.body": "Buy from 1/8 with trust, contract and verified ownership.",
  "home.how.s3.title": "Enjoy your weeks",
  "home.how.s3.body": "Book your stays, add experiences and concierge services.",
  "home.how.s4.title": "Generate yield",
  "home.how.s4.body": "Your asset works for you with transparent annual returns.",

  // ---- Stats band ----
  "home.stats.properties": "Properties",
  "home.stats.cities": "Cities",
  "home.stats.yield": "Avg. yield",
  "home.stats.members": "Members",

  // ---- Sections ----
  "home.destinations.title": "Popular destinations",
  "home.destinations.subtitle": "Explore the most exclusive locations.",
  "home.featured.title": "Featured fractions",
  "home.featured.subtitle": "Co-ownership curated for discerning investors.",
  "home.experiences.title": "Experiences",
  "home.experiences.subtitle": "Extraordinary moments for our community.",
  "home.services.title": "Premium services",
  "home.services.subtitle": "Concierge and approved services at your disposal.",
  "home.seeAll": "See all",
  "home.properties": "Properties",

  // ---- Benefits ----
  "home.benefits.title": "Why V Living",
  "home.benefits.subtitle": "Co-ownership reinvented to a luxury standard.",
  "home.benefits.b1.title": "Hassle-free co-ownership",
  "home.benefits.b1.body": "Full asset management: maintenance, taxes and operations included.",
  "home.benefits.b2.title": "24/7 concierge",
  "home.benefits.b2.body": "A dedicated team for every request, transfer and reservation.",
  "home.benefits.b3.title": "Documents & trust",
  "home.benefits.b3.body": "Contracts, certificates and trust with verified legal backing.",
  "home.benefits.b4.title": "Transparent yield",
  "home.benefits.b4.body": "Clear reporting on the annual profitability of your fraction.",

  // ---- Final CTA ----
  "home.cta.title": "Your next property awaits",
  "home.cta.body": "Join an exclusive community of co-owners and live luxury your way.",
  "home.cta.button": "Explore fractions",

  // ---- Fractions marketplace ----
  "fractions.title": "Fractions marketplace",
  "fractions.searchPlaceholder": "Search fractions, cities…",
  "fractions.cat.all": "All",
  "fractions.cat.beach": "Beach",
  "fractions.cat.mountain": "Mountain",
  "fractions.cat.city": "City",
  "fractions.cat.wellness": "Wellness",
  "fractions.featured": "Featured",
  "fractions.from": "From",
  "fractions.stat.fraction": "Fraction",
  "fractions.stat.stays": "Stays",
  "fractions.stat.yield": "Yield",
  "fractions.available": "avail.",
  "fractions.weeksPerYear": "wks/yr",
  "fractions.viewFractions": "View fractions",
  "fractions.acquire": "Acquire fraction",
  "fractions.empty.title": "No results",
  "fractions.empty.body": "We couldn't find fractions matching your search. Adjust the filters and try again.",
  "card.yield": "Yield",
  "card.availableFraction": "available",

  // ---- Property detail ----
  "property.notFound": "Property not found",
  "property.investFrom": "Investment from",
  "property.viewAvailable": "View available fractions",
  "property.about": "About the property",
  "property.availability": "Availability",
  "property.localExperiences": "Local experiences",
  "property.documentVault": "Document vault",
  "property.reserveStay": "Reserve stay",
  "property.acquireFraction": "Acquire fraction",
  "property.stat.fraction": "Fraction",
  "property.stat.weeks": "Weeks",
  "property.stat.yield": "Yield",
  "property.reviews": "reviews",
  "property.seeAll": "See all",

  // ---- Calendar ----
  "cal.checkIn": "Check-in",
  "cal.checkOut": "Check-out",
  "cal.guests": "Guests",
  "cal.guestsValue": "6 Guests",
  "cal.reset": "Reset",

  // ---- Experiences ----
  "exp.title": "Experiences",
  "exp.subtitle": "Extraordinary moments designed exclusively for our community of owners.",
  "exp.searchPlaceholder": "Search experiences",
  "exp.filter.all": "All",
  "exp.filter.sailing": "Sailing",
  "exp.filter.wellness": "Wellness",
  "exp.filter.adventure": "Adventure",
  "exp.filter.gastronomy": "Gastronomy",
  "exp.book": "Book",
  "exp.from": "From",
  "exp.exclusive": "Exclusive",
  "exp.save": "Save",

  // ---- Stays ----
  "stays.title": "Stays",
  "stays.subtitle": "Your confirmed bookings and upcoming escapes in the V Living portfolio.",
  "stays.myBookings": "My bookings",
  "stays.empty": "You don't have bookings yet. Explore properties and book your first stay.",
  "stays.bookNew": "Book a new stay",
  "stays.checkIn": "Check-in",
  "stays.checkOut": "Check-out",
  "stays.status.confirmed": "Confirmed",
  "stays.status.pending": "Pending",
  "stays.status.completed": "Completed",

  // ---- Services ----
  "services.title": "Premium Services",
  "services.subtitle": "Catalog of approved and verified services available to complement your stay.",
  "services.approved": "Approved",
  "services.soon": "Coming soon",
  "services.request": "Request service",
  "services.unavailable": "Unavailable",

  // ---- Owner dashboard ----
  "owner.title": "Dashboard",
  "owner.subtitle": "Manage your portfolio and your upcoming luxury experiences.",
  "owner.explore": "Explore Fractions",
  "owner.portfolioValue": "Portfolio Value",
  "owner.thisYear": "this year",
  "owner.myFractions": "My Fractions",
  "owner.viewPortfolio": "View portfolio",
  "owner.weeksAvailable": "Weeks available",
  "owner.bookNow": "Book now",
  "owner.nextStay": "Next stay",
  "owner.recentActivity": "Recent activity",
  "owner.upcomingPayments": "Upcoming payments",
  "owner.seeAll": "See all",
  "owner.checkIn": "Check-in",
  "owner.checkOut": "Check-out",
  "owner.allocation": "Allocation by property",
  "owner.yieldByProperty": "Yield by property",
  "owner.portfolioGrowth": "Portfolio growth",
  "owner.quickActions": "Quick actions",
  "owner.qa.book": "Book a stay",
  "owner.qa.experiences": "Experiences",
  "owner.qa.documents": "Documents",
  "owner.qa.pay": "Payments",
  "owner.act.yield": "Casa del Mar yield +1.2%",
  "owner.act.booking": "Booking confirmed — Los Cabos",
  "owner.act.doc": "Document signed — Trust",
  "owner.act.payment": "Payment received — Q1 maintenance",
  "owner.time.2h": "2 h ago",
  "owner.time.1d": "1 day ago",
  "owner.time.3d": "3 days ago",
  "owner.time.1w": "1 week ago",

  // ---- Portfolio ----
  "portfolio.title": "My Portfolio",
  "portfolio.subtitle": "Your fractional assets, consolidated value and yield.",
  "portfolio.totalValue": "Total value",
  "portfolio.fractions": "Fractions",
  "portfolio.avgYield": "Avg. yield",
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
  "admin.subtitle": "Operational control panel. Key metrics of the V Living marketplace.",
  "admin.properties": "Properties",
  "admin.experiences": "Experiences",
  "admin.gmv": "GMV (demo)",
  "admin.members": "Members",
  "admin.new": "New",
  "admin.recentTx": "Recent transactions",
  "admin.active": "Active",

  // ---- Profile ----
  "profile.member": "Platinum Member · Owner",
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
  "sidebar.marketplace": "Marketplace",
  "sidebar.experiences": "Experiences",
  "sidebar.services": "Services",
  "sidebar.contracts": "Contracts",
  "sidebar.payments": "Payments",
  "sidebar.admin": "Admin",
  "sidebar.settings": "Settings",
  "sidebar.status": "Status",
  "sidebar.owner": "Owner",
  "sidebar.member": "Platinum Member",

  // ---- not-found / error / loading ----
  "notfound.title": "This page doesn't exist",
  "notfound.body": "The route you're looking for is unavailable. Return home to keep exploring the V Living universe.",
  "notfound.home": "Go home",
  "notfound.fractions": "View fractions",
  "error.title": "Something went wrong",
  "error.body": "An unexpected error occurred. You can try again or come back later.",
  "error.retry": "Retry",

  // ---- Footer ----
  "footer.tagline": "Premium co-ownership of luxury real estate, stays and extraordinary experiences.",
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
