import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from "@/lib/config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/global-reach", label: "Global Reach" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A1628] text-white overflow-hidden" role="contentinfo">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/footer-bg.png"
          alt="World map network connections"
          fill
          quality={90}
          className="object-cover object-center opacity-60"
        />
        {/* Overlay to ensure text remains highly readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/70" />
      </div>

      {/* Main Footer */}
      <div className="relative z-10 container-site pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg">
              <Image
                src="/images/logo.svg"
                alt="Venus Global Exports Logo"
                width={200}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Connecting quality Indian food products with global markets. Your trusted partner for premium agricultural exports.
            </p>
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
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-slate-400 hover:bg-[#0B65B2] hover:text-white hover:border-[#0B65B2] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-5">Navigation</h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0B65B2] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-5">Products</h3>
            <ul className="space-y-3" role="list">
              {[
                { label: "Rice", href: "/products/rice" },
                { label: "Coconut", href: "/products/coconut" },
                { label: "Vegetables", href: "/products/vegetables" },
                { label: "Fruits", href: "/products/fruits" },
                { label: "Spices", href: "/products/spices" },
              ].map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#3D9148] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-5">Contact</h3>
            <address className="not-italic space-y-3">
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-white/5 flex items-center justify-center" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
                  </svg>
                </span>
                <span>{SITE_CONFIG.contact.phone}</span>
              </a>

              <a
                href={getMailtoUrl()}
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-white/5 flex items-center justify-center" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741z"/>
                  </svg>
                </span>
                <span className="break-all">{SITE_CONFIG.contact.email}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                aria-label="Chat on WhatsApp"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-white/5 flex items-center justify-center" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                  </svg>
                </span>
                <span>WhatsApp</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-white/5 flex items-center justify-center" aria-hidden="true">
                  <svg width="9" height="11" viewBox="0 0 12 16" fill="currentColor">
                    <path d="M6 0C3.243 0 1 2.243 1 5c0 4.17 4.42 10.492 4.61 10.76a.5.5 0 0 0 .78 0C6.58 15.492 11 9.17 11 5c0-2.757-2.243-5-5-5m0 7.5A2.5 2.5 0 0 1 6 2.5a2.5 2.5 0 0 1 0 5"/>
                  </svg>
                </span>
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {year} Venus Global Exports. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
