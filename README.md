# V Living

**Fractional Ownership • Stays • Experiences**

PWA premium para propiedad fraccional, estancias, experiencias, servicios aprobados y gestión documental. Diseño _Obsidian Luxury_ (negro obsidiana, acento cyan/Caribbean blue, glassmorphism, microinteracciones) inspirado en Apple, Aman, Four Seasons, Pacaso y Tesla.

Construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, con tema día/noche (`next-themes`) e i18n Español/Inglés.

---

## 🩺 Diagnóstico del 404 en Vercel (resuelto)

El repositorio **no contenía una aplicación**: solo exports estáticos de Google Stitch (`code.html` + `screen.png`) anidados **dos carpetas abajo** (`final-v-living/stitch_v_living_luxury_os/`). No existía `package.json`, framework, build ni un `index.html` en la raíz, por lo que **Vercel no encontraba nada que servir → 404 en producción**.

**Solución:** se construyó una app Next.js real en la **raíz del repo** (detectable automáticamente por Vercel), preservando íntegramente la dirección visual. Los mockups originales se conservaron como referencia en [`docs/stitch-reference/`](docs/stitch-reference/).

---

## 🚀 Empezar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm start          # servir el build
```

> El MVP funciona **100% con datos mock** — no requiere ninguna variable de entorno para arrancar.

---

## 🧱 Arquitectura

```
src/
├─ app/
│  ├─ layout.tsx              # Shell global: fuentes, metadata/SEO, PWA, nav
│  ├─ page.tsx                # Home / Explore (hero, búsqueda, bento, destinos)
│  ├─ fractions/              # Marketplace fraccional (búsqueda + filtros)
│  │  └─ [id]/                # Detalle de propiedad (calendario, docs, experiencias)
│  ├─ experiences/            # Experiencias premium
│  ├─ stays/                  # Estancias / reservas
│  ├─ services/               # Servicios aprobados
│  ├─ profile/                # Perfil de usuario
│  ├─ (portal)/               # Route group con sidebar (no afecta la URL)
│  │  ├─ owner/               # Dashboard de propietario (bento)
│  │  ├─ portfolio/           # Portafolio
│  │  ├─ contracts/           # Contratos / documentos
│  │  ├─ payments/            # Pagos
│  │  └─ admin/               # Panel admin básico
│  ├─ not-found.tsx           # 404 de marca
│  ├─ error.tsx               # Estado de error
│  └─ loading.tsx             # Estado de carga
├─ components/                # TopNav, BottomNav, tarjetas, calendario, etc.
└─ lib/                       # data.ts (mock) + types.ts (API layer futuro)
```

### Módulos del MVP
Home/Explore · Marketplace fraccional · Detalle de propiedad · Estancias · Experiencias · Servicios premium · Owner Portal · Contratos/Documentos · Portafolio · Pagos · Admin.

### Diseño y UX
- Mobile-first, responsive, experiencia tipo app nativa.
- **Bottom navigation** móvil con botón central "V".
- **Sidebar** en el portal (desktop).
- Glassmorphism, tarjetas flotantes, reflejos sutiles, glow cyan.
- Estados de **loading**, **empty** y **error** incluidos.
- Tokens de color/tipografía portados desde `docs/stitch-reference/.../DESIGN.md`.

### 🌗 Tema Día/Noche (light + dark)
- Implementado con **[`next-themes`](https://github.com/pacocoursey/next-themes)** (`attribute="class"`, `defaultTheme="dark"`, sin transición al cambiar).
- Sistema de color basado en **variables CSS semánticas** (`--background`, `--surface`, `--ink`, `--accent`, `--border`, etc.) definidas en `src/app/globals.css` bajo `:root` (día "Platinum") y `.dark` (noche "Obsidian"), mapeadas a tokens de Tailwind en `tailwind.config.ts`.
- Ambos temas cumplen contraste AA. El acento cyan se ajusta (`#06b6b6` en claro, `#00fbfb` en oscuro).
- Toggle de tema (sol/luna) en la **TopNav**, el **footer** y el **perfil**.

### 🌐 Internacionalización (Español + Inglés)
- i18n ligero propio en `src/lib/i18n.tsx`: `I18nProvider` (Context + `localStorage`, default `es`, sin FOUC) y hook `useT()` → `{ t, locale, setLocale }`.
- Diccionario plano con claves punteadas (`home.hero.slide1.title`, …). Todas las cadenas visibles están traducidas.
- Toggle de idioma (ES/EN) junto al de tema.

### Componentes reutilizables
- **`SmartImage`** — imagen con skeleton degradado al cargar y placeholder de marca ante errores (nunca íconos rotos).
- **`Carousel`** — carrusel premium con scroll-snap, flechas, drag/touch, dots y autoplay opcional (usado en hero, destinos, propiedades y experiencias).
- **`charts/`** — `AreaChart`, `DonutChart`, `BarChart`, `Sparkline` en SVG puro (sin dependencias) para el dashboard del owner.
- **`CountUp`** — animación count-up de KPIs.

### PWA
- `public/manifest.webmanifest` (instalable, standalone, theme obsidiana).
- `public/sw.js` (service worker: network-first para páginas, stale-while-revalidate para assets; solo activo en producción).
- Ícono SVG de marca (`public/icon.svg`), metadata Open Graph/Twitter, `viewport` con `theme-color`.

---

## 🔐 Variables de entorno

Copia `.env.example` → `.env.local` y completa los valores reales. **Ninguna es obligatoria para el MVP con mock data.** Integraciones preparadas:

| Variable | Servicio | Uso |
|---|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` / `CLERK_SECRET_KEY` | **Clerk** | Autenticación |
| `DATABASE_URL` | **Neon PostgreSQL** | Base de datos |
| `RESEND_API_KEY` / `RESEND_FROM_EMAIL` | **Resend** | Correos |
| `MERCADOPAGO_ACCESS_TOKEN` / `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY` | **Mercado Pago** | Pagos |
| `STRIPE_SECRET_KEY` / `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` / `STRIPE_WEBHOOK_SECRET` | **Stripe** (opcional) | Pagos |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | **Google Maps** | Ubicaciones |
| `TWILIO_ACCOUNT_SID` / `TWILIO_AUTH_TOKEN` / `TWILIO_WHATSAPP_FROM` | **Twilio / WhatsApp** | Comunicación |
| `DUFFEL_ACCESS_TOKEN` | **Duffel** | Vuelos |

> ⚠️ **RateHawk NO está integrado** en este build, por decisión de producto.

---

## ▲ Redesplegar en Vercel

1. **Vercel → Project → Settings → Build & Development**
   - **Framework Preset:** `Next.js`
   - **Root Directory:** `./` (raíz del repo — antes apuntaba a una carpeta inexistente/anidada; este es el origen del 404).
   - **Build Command:** `next build` (default) · **Output:** `.next` (default) · **Install:** `npm install` (default).
2. **Settings → Environment Variables:** agrega las del cuadro anterior (opcionales para el demo).
3. Conecta la rama y **Redeploy**. Vercel detecta Next.js automáticamente; no se requiere `vercel.json`.
4. Verifica `/`, `/fractions`, `/fractions/casa-del-mar`, `/owner`, `/experiences` y una ruta inexistente (404 de marca).

---

## ✅ QA realizado
- `npm install` ✓ · `npm run build` ✓ (20 rutas generadas, sin errores TS/ESLint que rompan el build).
- Rutas principales y dinámicas prerenderizadas; sin 404 internos.
- Responsive mobile/desktop · estados loading/empty/error.

## 🔭 Pendiente para producción real
- Conectar **Clerk** (auth real + middleware de rutas protegidas para `(portal)` y `/admin`).
- Migrar `lib/data.ts` a **Neon PostgreSQL** (Prisma/Drizzle) y exponer un API layer (`/api` o server actions).
- Webhooks y checkout reales de **Mercado Pago / Stripe**; firma electrónica de contratos.
- **Resend** (confirmaciones), **Twilio/WhatsApp** (conserjería), **Google Maps** (mapas en detalle), **Duffel** (vuelos).
- Subir media propietaria (hoy se usan imágenes Unsplash de demostración).
- Roles/permilsos en Admin, analítica, pruebas e2e e íconos PNG maskable 192/512 para Lighthouse PWA.
