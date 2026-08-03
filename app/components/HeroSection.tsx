"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AppImage from "../../components/ui/AppImage";

const stats = [
  { value: "5,000+", label: "Patients Treated" },
  { value: "15+", label: "Years Experience" },
  { value: "20+", label: "Treatments Offered" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const mx = (clientX / innerWidth - 0.5) * 2;
      const my = (clientY / innerHeight - 0.5) * 2;

      const blob1 = hero.querySelector<HTMLElement>(".hero-blob-1");
      const blob2 = hero.querySelector<HTMLElement>(".hero-blob-2");
      if (blob1)
        blob1.style.transform = `translate(${mx * 20}px, ${my * 15}px)`;
      if (blob2)
        blob2.style.transform = `translate(${mx * -15}px, ${my * -10}px)`;
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_188858a11-1775583651330.png"
          alt="Modern dermatology clinic interior with clean white surfaces, professional medical equipment, and soft ambient lighting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Multi-layer overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/45 to-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent" />
      </div>

      {/* Atmospheric depth blobs */}
      <div className="hero-blob-1 absolute top-1/4 right-1/4 w-96 h-96 blob-teal opacity-40 pointer-events-none transition-transform duration-700 ease-out" />
      <div className="hero-blob-2 absolute bottom-1/3 left-1/3 w-80 h-80 blob-gold opacity-30 pointer-events-none transition-transform duration-700 ease-out" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none z-[1]" />

      {/* Rotating Badge */}
      <div className="absolute top-28 right-6 md:right-16 z-20 pointer-events-none hidden md:block">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg
            className="animate-spin-slow w-full h-full"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <path
              id="heroCirclePath"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="transparent"
            />

            <text
              fontSize="9.5"
              fontFamily="Plus Jakarta Sans"
              fontWeight="600"
              letterSpacing="2.5px"
              fill="white"
              opacity="0.8"
            >
              <textPath href="#heroCirclePath" startOffset="0%">
                EXPERT CARE • PROVEN RESULTS •
              </textPath>
            </text>
          </svg>
          <div className="absolute w-8 h-8 rounded-full bg-accent/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 md:px-12 lg:px-16 pt-28 pb-12 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-7 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-[0.15em]">
              MD Dermatology (AIIMS)
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-hero font-serif font-light text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            Your skin
            <br />
            <span className="italic text-accent/90">deserves</span>
            <br />
            expert care
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-white/75 font-light leading-relaxed mb-10 max-w-xl animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Medically proven treatments for acne, aging, pigmentation, and hair
            loss — with visible results in weeks, not months.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "280ms" }}
          >
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-teal-lg hover:shadow-teal-lg hover:-translate-y-0.5"
            >
              Book a Consultation
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
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-medium text-base hover:bg-white/20 transition-all duration-300"
            >
              Meet Dr. Manoj
            </Link>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div
          className="mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-8 sm:gap-0 animate-fade-in-up"
          style={{ animationDelay: "360ms" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`sm:px-10 ${i === 0 ? "sm:pl-0" : ""} ${i < stats.length - 1 ? "sm:border-r border-white/20" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
