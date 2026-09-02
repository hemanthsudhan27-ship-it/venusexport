import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venusglobalexports.com"),
  title: {
    default: "Venus Global Exports — Premium Food Export from India",
    template: "%s | Venus Global Exports",
  },
  description:
    "Venus Global Exports is India's trusted food export partner. We export premium rice, coconut, vegetables, fruits, and spices to global markets.",
  keywords: [
    "food export India",
    "rice export",
    "coconut export",
    "spices export",
    "fruit export India",
    "vegetable export",
    "agricultural export",
    "Venus Global Exports",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://venusglobalexports.com",
    siteName: "Venus Global Exports",
    title: "Venus Global Exports — Premium Food Export from India",
    description:
      "Connecting quality Indian food products with global markets. Export partner for rice, coconut, vegetables, fruits, and spices.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Venus Global Exports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus Global Exports — Premium Food Export from India",
    description:
      "Connecting quality Indian food products with global markets.",
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
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
