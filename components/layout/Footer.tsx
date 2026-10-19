import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from "@/lib/config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/worldwide-reach", label: "Worldwide Reach" },
  { href: "/quality", label: "Quality Assurance" },
  { href: "/contact", label: "Contact & RFQ" },
];

const PRODUCT_LINKS = [
  { label: "Basmati & Non-Basmati Rice", href: "/products/rice" },
  { label: "Premium Coconut Products", href: "/products/coconut" },
  { label: "Farm Fresh Vegetables", href: "/products/vegetables" },
  { label: "Exotic Tropical Fruits", href: "/products/fruits" },
  { label: "Authentic Indian Spices", href: "/products/spices" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050A0E] text-white overflow-hidden border-t border-white/10" role="contentinfo">
      {/* Background World Map Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Image
          src="/images/footer-bg.png"
          alt="World map trade network"
          fill
          quality={80}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A0E] via-[#050A0E]/95 to-[#050A0E]/80" />
      </div>

      {/* Main Footer Container */}
      <div className="relative z-10 container-site pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

          {/* Brand Column (2 cols on desktop) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A03F] rounded-lg">
              <Image
                src="/logo/logo.png"
                alt="Venus Export Logo"
                width={220}
                height={60}
                className="h-12 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
              Venus Export is India&apos;s trusted international agro-commodity merchant exporter. Connecting premium Indian agricultural harvest with international distributors, supermarket chains, and food processors.
            </p>

            {/* Certifications Badge in Footer */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-[#D7A03F]">
                APEDA Registered
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-[#D7A03F]">
                FSSAI Certified
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-[#D7A03F]">
                ISO 22000
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              {[
                { label: "LinkedIn", href: SITE_CONFIG.social.linkedin, icon: "in" },
                { label: "Twitter / X", href: SITE_CONFIG.social.twitter, icon: "X" },
                { label: "Instagram", href: SITE_CONFIG.social.instagram, icon: "IG" },
                { label: "Facebook", href: SITE_CONFIG.social.facebook, icon: "f" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-400 hover:bg-[#D7A03F] hover:text-[#050A0E] hover:border-[#D7A03F] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#D7A03F] mb-6">Explore</h3>
            <ul className="space-y-3.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7A03F] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#D7A03F] mb-6">Commodities</h3>
            <ul className="space-y-3.5" role="list">
              {PRODUCT_LINKS.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7A03F] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Trade Desk Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#D7A03F] mb-6">Trade Desk</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D7A03F]" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z"/>
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp Inquiry</p>
                  <a
                    href={getWhatsAppUrl("Hello Venus Export")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:text-[#D7A03F] transition-colors"
                  >
                    Start Direct Chat
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D7A03F]" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741z"/>
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-slate-400">Official RFQ Email</p>
                  <a
                    href={getMailtoUrl("Export Inquiry — Venus Export")}
                    className="font-medium text-white hover:text-[#D7A03F] transition-colors"
                  >
                    Inquire via Email
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D7A03F]" aria-hidden="true">
                  <svg width="10" height="12" viewBox="0 0 12 16" fill="currentColor">
                    <path d="M6 0C3.243 0 1 2.243 1 5c0 4.17 4.42 10.492 4.61 10.76a.5.5 0 0 0 .78 0C6.58 15.492 11 9.17 11 5c0-2.757-2.243-5-5-5m0 7.5A2.5 2.5 0 0 1 6 2.5a2.5 2.5 0 0 1 0 5"/>
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-slate-400">Origin Location</p>
                  <p className="font-medium text-white">India (Sea & Air Port Hubs)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {year} Venus Export. All rights reserved. International agro-commodity trade partner.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#D7A03F] transition-colors">Export Terms</Link>
            <Link href="/quality" className="hover:text-[#D7A03F] transition-colors">Quality Assurance</Link>
            <Link href="/contact" className="hover:text-[#D7A03F] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
