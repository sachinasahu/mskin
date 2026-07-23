import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/ServicesSection";
import ResultsSection from "@/app/components/ResultsSection";
import AboutPreviewSection from "@/app/components/AboutPreviewSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import CtaSection from "@/app/components/CtaSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ResultsSection />
        <AboutPreviewSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
