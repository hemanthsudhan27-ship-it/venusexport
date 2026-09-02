import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import AboutPreview from "@/components/home/AboutPreview";
import WhyVenus from "@/components/home/WhyVenus";
import GlobalReachPreview from "@/components/home/GlobalReachPreview";
import HowWeWork from "@/components/home/HowWeWork";
import QualitySection from "@/components/home/QualitySection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Venus Global Exports — Premium Food Export from India",
  description:
    "Venus Global Exports is India's trusted food export partner. We connect premium rice, coconut, vegetables, fruits, and spices with global markets.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsPreview />
      <AboutPreview />
      <WhyVenus />
      <GlobalReachPreview />
      <HowWeWork />
      <QualitySection />
      <ContactCTA />
    </>
  );
}
