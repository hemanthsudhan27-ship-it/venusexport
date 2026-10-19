import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import AboutPreview from "@/components/home/AboutPreview";
import WhyVenus from "@/components/home/WhyVenus";
import WorldwideReachPreview from "@/components/home/WorldwideReachPreview";
import HowWeWork from "@/components/home/HowWeWork";
import QualitySection from "@/components/home/QualitySection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Venus Export — Premium Food Export from India",
  description:
    "Venus Export is India's trusted food export partner. We connect premium rice, coconut, vegetables, fruits, and spices with international markets.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsPreview />
      <AboutPreview />
      <WhyVenus />
      <WorldwideReachPreview />
      <HowWeWork />
      <QualitySection />
      <ContactCTA />
    </>
  );
}
