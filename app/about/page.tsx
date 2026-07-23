import React from "react";
import AboutHeroSection from "@/app/about/components/AboutHeroSection";
import DoctorProfileSection from "@/app/about/components/DoctorProfileSection";
import PhilosophySection from "@/app/about/components/PhilosophySection";
import ClinicGallerySection from "@/app/about/components/ClinicGallerySection";
import AwardsSection from "@/app/about/components/AwardsSection";
import Header from "@/components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Dr. Manoj — MSkinClinic Dermatologist",
  description:
    "Meet Dr. Manoj, board-certified dermatologist with 15+ years of expertise in medical and aesthetic dermatology at MSkinClinic.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHeroSection />
        <DoctorProfileSection />
        <PhilosophySection />
        <ClinicGallerySection />
        <AwardsSection />
      </main>
      <Footer />
    </>
  );
}
