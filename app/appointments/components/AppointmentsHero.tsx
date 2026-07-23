import React from "react";
import AppImage from "../../../components/ui/AppImage";

export default function AppointmentsHero() {
  return (
    <section
      className="relative h-[45vh] min-h-[360px] flex items-end overflow-hidden"
      aria-label="Appointments hero"
    >
      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_188858a11-1775583651330.png"
        alt="Clean modern dermatology clinic reception desk with soft ambient lighting, professional staff, warm welcoming atmosphere, dark interior"
        fill
        priority
        className="object-cover object-center"
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
