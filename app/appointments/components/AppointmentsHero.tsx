import React from "react";
import AppImage from "../../../components/ui/AppImage";

export default function AppointmentsHero() {
  return (
    <section
      className="relative min-h-[340px] h-[48svh] flex items-end overflow-hidden"
      aria-label="Appointments hero"
    >
      <AppImage
        src="/assets/clinic/services-prescription.jpeg"
        alt="Dr. Manoj's Skin and Hair Clinic treatment services"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />

      {/* Strong dark overlay for white text */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/55 to-foreground/30" />

      <div className="relative z-10 px-5 md:px-12 lg:px-16 pb-12 max-w-7xl mx-auto w-full pt-28">
        <span className="text-xs font-bold text-accent uppercase tracking-[0.18em] mb-4 block">
          Schedule a Visit
        </span>
        <h1 className="text-display font-serif font-light text-white">
          Book your
          <br />
          <span className="italic text-accent/90">consultation</span>
        </h1>
      </div>
    </section>
  );
}
