"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AppImage from "../../components/ui/AppImage";

interface Service {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  imageAlt: string;
  colSpan?: string;
  rowSpan?: string;
}

const services: Service[] = [
  {
    id: "acne",
    title: "Acne Treatment",
    description:
      "Targeted medical therapy for persistent acne, scarring, and breakouts — from topical to advanced laser.",
    tag: "Most Popular",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1e64cbd43-1772070496981.png",
    imageAlt:
      "Close-up of clear, healthy skin after acne treatment, smooth texture with even tone in bright clinical lighting",
    colSpan: "md:col-span-1",
    rowSpan: "",
  },
  {
    id: "anti-aging",
    title: "Anti-Aging",
    description:
      "Restore youthful skin with botox, fillers, chemical peels, and collagen-stimulating treatments.",
    tag: "Advanced",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1d8a88067-1775087964420.png",
    imageAlt:
      "Woman with smooth, radiant skin receiving facial treatment in a bright, clean dermatology clinic setting",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
  {
    id: "pigmentation",
    title: "Pigmentation",
    description:
      "Fade dark spots, melasma, and uneven skin tone with targeted depigmentation protocols.",
    tag: "Clinical",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_122e52523-1772073697899.png",
    imageAlt:
      "Even-toned, glowing skin after pigmentation treatment, warm well-lit studio environment",
    colSpan: "md:col-span-1",
    rowSpan: "",
  },
  {
    id: "hair-loss",
    title: "Hair Loss",
    description:
      "PRP therapy, mesotherapy, and scalp treatments to reverse thinning and stimulate regrowth.",
    tag: "Proven",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_11fab4315-1772071632527.png",
    imageAlt:
      "Healthy thick hair after PRP hair restoration treatment, close-up of scalp in clinic lighting",
    colSpan: "md:col-span-1",
    rowSpan: "",
  },
  {
    id: "rejuvenation",
    title: "Skin Rejuvenation",
    description:
      "Laser resurfacing, microneedling, and HydraFacial for glowing, renewed skin texture.",
    tag: "Glow",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_18e8f0c0c-1772070016221.png",
    imageAlt:
      "Radiant healthy skin after laser rejuvenation treatment, soft warm lighting, clinic background",
    colSpan: "md:col-span-1",
    rowSpan: "",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Procedures",
    description:
      "Full range of aesthetic treatments including thread lifts, lip fillers, and skin tightening.",
    tag: "Aesthetic",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_121bd56d5-1766755126600.png",
    imageAlt:
      "Professional dermatologist performing cosmetic procedure with precision equipment in modern clinic",
    colSpan: "md:col-span-3",
    rowSpan: "",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".scroll-reveal").forEach((el) => {
              el.classList.add("revealed");
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-pad-lg bg-background px-5 md:px-8 lg:px-12"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="scroll-reveal">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-3 block">
              What We Treat
            </span>
            <h2
              id="services-heading"
              className="text-section-title font-serif font-light text-foreground"
            >
              Treatments for
              <br />
              <span className="italic text-accent">every skin concern</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground font-light max-w-sm leading-relaxed scroll-reveal stagger-1">
            From medical dermatology to aesthetic enhancement — all under one
            expert roof.
          </p>
        </div>

        {/* Bento Grid */}
        {/* BENTO MAP:
           Row 1: [col-1: Acne cs-1 rs-1] [col-2: Anti-Aging cs-1 rs-2] [col-3: Pigmentation cs-1 rs-1]
           Row 2: [col-1: Hair Loss cs-1 rs-1] [col-2: OCCUPIED by Anti-Aging] [col-3: Rejuvenation cs-1 rs-1]
           Row 3: [col-1-3: Cosmetic cs-3 col-span-full]
           Placed 6/6 ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card: Acne - col-1 row-1 */}
          <div className="scroll-reveal stagger-1">
            <ServiceCard service={services[0]} />
          </div>

          {/* Card: Anti-Aging - col-2 row-1+2 (row-span-2) */}
          <div className="scroll-reveal stagger-2 md:row-span-2 flex flex-col h-full">
            <ServiceCard service={services[1]} tall />
          </div>

          {/* Card: Pigmentation - col-3 row-1 */}
          <div className="scroll-reveal stagger-3">
            <ServiceCard service={services[2]} />
          </div>

          {/* Card: Hair Loss - col-1 row-2 */}
          <div className="scroll-reveal stagger-4">
            <ServiceCard service={services[3]} />
          </div>

          {/* Card: Rejuvenation - col-3 row-2 */}
          <div className="scroll-reveal stagger-5">
            <ServiceCard service={services[4]} />
          </div>

          {/* Card: Cosmetic - col-span-3 row-3 */}
          <div className="scroll-reveal stagger-6 md:col-span-3">
            <ServiceCardWide service={services[5]} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center scroll-reveal">
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-teal-md hover:-translate-y-0.5"
          >
            Consult About Your Skin
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, tall }: { service: Service; tall?: boolean }) {
  return (
    <div
      className={`group relative rounded-3xl overflow-hidden bg-muted border border-border card-hover-lift ${
        tall ? "h-full min-h-[420px]" : "h-64"
      }`}
    >
      <AppImage
        src={service.image}
        alt={service.imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-300" />

      {/* Tag */}
      <div className="absolute top-4 left-4">
        <span className="bg-accent/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          {service.tag}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {service.description}
        </p>
      </div>
    </div>
  );
}

function ServiceCardWide({ service }: { service: Service }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-muted border border-border h-48 card-hover-lift">
      <AppImage
        src={service.image}
        alt={service.imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

      <div className="absolute inset-0 flex items-center px-8 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
          <div>
            <span className="bg-accent/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">
              {service.tag}
            </span>
            <h3 className="text-2xl font-semibold text-white">
              {service.title}
            </h3>
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-md md:border-l md:border-white/20 md:pl-12">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
