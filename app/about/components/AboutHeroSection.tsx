import React from "react";
import AppImage from "@/components/ui/AppImage";

export default function AboutHeroSection() {
  return (
    <section
      className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden"
      aria-label="About hero"
    >
      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_188858a11-1775583651330.png"
        alt="Modern dermatology clinic corridor with clean white walls, professional medical environment, soft overhead lighting, calm and clinical atmosphere"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay — strong enough for white text */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/50 to-foreground/25" />

      <div className="relative z-10 px-5 md:px-12 lg:px-16 pb-14 max-w-7xl mx-auto w-full pt-28">
        <span className="text-xs font-bold text-accent uppercase tracking-[0.18em] mb-4 block">
          About the Doctor
        </span>
        <h1 className="text-display font-serif font-light text-white">
          Dr. Manoj —
          <br />
          <span className="italic text-accent/90">Board-Certified</span>
          <br />
          Dermatologist
        </h1>
      </div>
    </section>
  );
}
