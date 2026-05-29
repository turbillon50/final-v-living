// V·Living — central brand & business constants.
// Single source of truth for name, contact, domain and WhatsApp helpers.

export const SITE = {
  name: "V·Living",
  lockup: "FRACTIONAL OWNERSHIP",
  legal: "All Global Holding",
  domain: "VLiving.life",
  url: "https://VLiving.life",
  email: "firstcontact@allglobalholding.com",
  // Display + dial versions of the WhatsApp number.
  whatsappDisplay: "+52 984 292 7481",
  whatsappShort: "984 292 7481",
  whatsappDigits: "5219842927481",
  delivery: "Agosto 2026",
  tagline: "Más que fractional. Tu vivienda gestionada de punta a punta. V·Billing.",
  trust: {
    fideicomiso: "Fideicomiso Bancario",
    vbilling: "V·Billing punta a punta",
    years: "+10 años operando fideicomisos · transparencia total",
  },
} as const;

/** Build a wa.me deep link, optionally with a prefilled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappDigits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const mailto = `mailto:${SITE.email}`;
