import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SplashScreen from "@/components/layout/SplashScreen";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.venusexportindia.com"),
  title: {
    default: "Venus Export — Premium Food Export from India",
    template: "%s | Venus Export",
  },
  description:
    "Venus Export is India's trusted food export partner. We export premium rice, coconut, vegetables, fruits, and spices to international markets.",
  keywords: [
    "food export India",
    "rice export",
    "coconut export",
    "spices export",
    "fruit export India",
    "vegetable export",
    "agricultural export",
    "Venus Export",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.venusexportindia.com",
    siteName: "Venus Export",
    title: "Venus Export — Premium Food Export from India",
    description:
      "Connecting quality Indian food products with international markets. Export partner for rice, coconut, vegetables, fruits, and spices.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Venus Export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus Export — Premium Food Export from India",
    description:
      "Connecting quality Indian food products with international markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Venus Export",
    url: "https://www.venusexportindia.com",
    logo: "https://www.venusexportindia.com/images/logo.svg",
    description: "Premium food export from India, specializing in rice, coconut, vegetables, fruits, and spices.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8888888888",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: "en",
    },
  };

  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SplashScreen />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
