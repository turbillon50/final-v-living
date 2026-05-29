import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";
import { ServiceWorker } from "@/components/ServiceWorker";

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

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://v-living.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "V Living — Fractional Ownership • Stays • Experiences",
    template: "%s · V Living",
  },
  description:
    "V Living es la plataforma premium para propiedad fraccional, estancias, experiencias y servicios aprobados. Diseño obsidiana, lujo y precisión.",
  applicationName: "V Living",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "V Living",
  },
  keywords: [
    "propiedad fraccional",
    "fractional ownership",
    "estancias de lujo",
    "experiencias premium",
    "V Living",
  ],
  openGraph: {
    title: "V Living — Fractional Ownership • Stays • Experiences",
    description:
      "Plataforma premium para propiedad fraccional, estancias y experiencias de lujo.",
    url: APP_URL,
    siteName: "V Living",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "V Living",
    description: "Fractional Ownership • Stays • Experiences",
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
    <html lang="es" className={`dark ${hanken.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="font-body-md text-body-md overflow-x-hidden min-h-dvh">
        <TopNav />
        <div className="min-h-dvh">{children}</div>
        <BottomNav />
        <ServiceWorker />
      </body>
    </html>
  );
}
