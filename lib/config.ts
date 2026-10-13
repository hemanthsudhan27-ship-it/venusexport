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
      "A premier Indian food export company connecting quality agricultural products with global markets.",
    country: "India",
  },

  contact: {
    // ⚠️ Replace with actual phone number
    phone: "+91 XXXXX XXXXX",
    // ⚠️ Replace with actual WhatsApp number (digits only, with country code)
    whatsapp: "91XXXXXXXXXX",
    // ⚠️ Replace with actual email address
    email: "info@venusexport.com",
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
  const params = new URLSearchParams();
  params.set("subject", subject || "Export Enquiry — Venus Global Exports");
  params.set("body", body || "Hello, I am interested in your export products. Please provide more information.");
  const query = params.toString();
  return `mailto:${SITE_CONFIG.contact.email}${query ? `?${query}` : ""}`;
}
