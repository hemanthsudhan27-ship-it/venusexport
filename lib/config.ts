/**
 * Venus Export — Central Configuration
 * =============================================
 * All contact details and company-wide config lives here.
 * Replace placeholder values with real client data before launch.
 */

export const SITE_CONFIG = {
  company: {
    name: "Venus Export",
    tagline: "From Our Land. To The World.",
    description:
      "A premier Indian food export company connecting quality agricultural products with international markets.",
    country: "India",
  },

  contact: {
    phone: "+91 96336 18631",
    whatsapp: "919633618631",
    email: "vivekvadavathi007@gmail.com",
    // ⚠️ Replace with actual office address
    address: "Your Address Line 1\nCity, State\nPin: XXXXXX\nIndia",
  },

  social: {
    // ⚠️ Replace with actual social media URLs
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    facebook: "#",
  },

  seo: {
    siteUrl: "https://www.venusexportindia.com",
    defaultImage: "/images/og-default.jpg",
  },
} as const;

export function getTelUrl(): string {
  return `tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`;
}

export function getWhatsAppUrl(message?: string): string {
  const encoded = encodeURIComponent(
    message || "Hello, I am interested in your export products."
  );
  return `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encoded}`;
}

export function getMailtoUrl(
  subject?: string,
  body?: string
): string {
  const encodedSubject = encodeURIComponent(subject || "Export Enquiry — Venus Export");
  const encodedBody = encodeURIComponent(
    body || "Hello, I am interested in your export products. Please provide more information."
  );
  return `mailto:${SITE_CONFIG.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;
}
