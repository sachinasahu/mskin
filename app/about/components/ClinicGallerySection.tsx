"use client";

import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

/* BENTO MAP:
  Row 1: [col-1+2: MainClinic cs-2 rs-2] [col-3: Consultation cs-1 rs-1] [col-4: Equipment cs-1 rs-1]
  Row 2: [col-1+2: OCCUPIED] [col-3: Treatment cs-1 rs-1] [col-4: Reception cs-1 rs-1]
  Placed 5/5 ✓
*/
const galleryImages = [
  {
    id: "main",
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e65e0b4a-1772074799553.png",
    alt: "Modern dermatology clinic main treatment room with clean white surfaces, professional equipment, warm ambient lighting, spacious and welcoming",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    caption: "Main Treatment Room",
  },
  {
    id: "consultation",
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e65e0b4a-1772074799553.png",
    alt: "Dermatology consultation room with comfortable seating, medical charts on wall, soft lighting, professional and calming environment",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    caption: "Consultation Suite",
  },
  {
    id: "equipment",
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fd17d7e6-1772074816371.png",
    alt: "Advanced laser dermatology equipment in clean clinical setting, modern medical technology, bright professional lighting",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    caption: "Advanced Laser Suite",
  },
  {
    id: "treatment",
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1014813e4-1772072735557.png",
    alt: "Dermatology treatment room with reclined chair, clinical equipment arranged neatly, soft warm lighting, spotlessly clean",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    caption: "Treatment Room",
  },
  {
    id: "reception",
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1b1c608-1772033908134.png",
    alt: "Clinic reception area with modern minimalist design, welcoming desk, soft lighting, plants, calm and professional atmosphere",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    caption: "Reception Area",
  },
];

export default function ClinicGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".scroll-reveal")
              .forEach((el) => el.classList.add("revealed"));
          }
        });
      },
      { threshold: 0.1 },
    );
    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pad-lg bg-background px-5 md:px-8 lg:px-12"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-3 block">
            The Clinic
          </span>
          <h2
            id="gallery-heading"
            className="text-section-title font-serif font-light text-foreground"
          >
            A space designed for
            <br />
            <span className="italic text-accent">healing and comfort</span>
          </h2>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px] scroll-reveal stagger-1">
          {/* col-1+2, row-1+2: MainClinic */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group h-64 md:h-full">
            <AppImage
              src={galleryImages?.[0]?.src}
              alt={galleryImages?.[0]?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/90 text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                {galleryImages?.[0]?.caption}
              </span>
            </div>
          </div>

          {/* col-3, row-1: Consultation */}
          <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl group h-48 md:h-full">
            <AppImage
              src={galleryImages?.[1]?.src}
              alt={galleryImages?.[1]?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/90 text-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                {galleryImages?.[1]?.caption}
              </span>
            </div>
          </div>

          {/* col-4, row-1: Equipment */}
          <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl group h-48 md:h-full">
            <AppImage
              src={galleryImages?.[2]?.src}
              alt={galleryImages?.[2]?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/90 text-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                {galleryImages?.[2]?.caption}
              </span>
            </div>
          </div>

          {/* col-3, row-2: Treatment */}
          <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl group h-48 md:h-full">
            <AppImage
              src={galleryImages?.[3]?.src}
              alt={galleryImages?.[3]?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/90 text-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                {galleryImages?.[3]?.caption}
              </span>
            </div>
          </div>

          {/* col-4, row-2: Reception */}
          <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl group h-48 md:h-full">
            <AppImage
              src={galleryImages?.[4]?.src}
              alt={galleryImages?.[4]?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/90 text-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                {galleryImages?.[4]?.caption}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
