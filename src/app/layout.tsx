import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { ServiceWorker } from "@/components/ServiceWorker";
import { Providers } from "@/components/Providers";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Condensed display face for big editorial headlines (ATTIK, 14 fracciones…).
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://v-living.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "V·Living — Fractional Ownership",
    template: "%s · V·Living",
  },
  description:
    "V·Living — Fractional Ownership en la Riviera Maya. Compras tu fracción de un desarrollo boutique (14 fracciones · 3 semanas/año) y la disfrutas, la rentas o la revendes. Gestión de punta a punta con V·Billing, bajo Fideicomiso Bancario.",
  applicationName: SITE.name,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE.name,
  },
  keywords: [
    "fractional ownership",
    "propiedad fraccional",
    "Riviera Maya",
    "Tulum",
    "Cancún",
    "Playa del Carmen",
    "fideicomiso",
    "V·Living",
    "ATTIK",
  ],
  openGraph: {
    title: "V·Living — Fractional Ownership",
    description:
      "Compras tu fracción. La disfrutas, la rentas o la revendes. Desarrollos boutique en la Riviera Maya, gestionados de punta a punta (V·Billing) bajo Fideicomiso Bancario.",
    url: APP_URL,
    siteName: SITE.name,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "V·Living — Fractional Ownership",
    description: "Tu fracción en la Riviera Maya. Gestión de punta a punta. V·Billing.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${hanken.variable} ${inter.variable} ${archivo.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="font-body-md text-body-md overflow-x-hidden min-h-dvh flex flex-col">
        <Providers>
          <TopNav />
          <div className="flex-1">{children}</div>
          <Footer />
          <div className="h-20 md:hidden" aria-hidden />
          <BottomNav />
          <ServiceWorker />
        </Providers>
      </body>
    </html>
  );
}
