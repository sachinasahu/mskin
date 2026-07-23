"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AppImage from "../../components/ui/AppImage";

const results = [
  {
    id: 1,
    treatment: "Acne Clearance",
    duration: "8 weeks",
    beforeImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1b84db0e9-1772071173648.png",
    afterImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1b84db0e9-1772071173648.png",
    beforeAlt:
      "Skin with visible acne, redness, and uneven texture in neutral lighting, close-up face",
    afterAlt:
      "Clear smooth skin after acne treatment, even tone, healthy glow in bright neutral lighting",
    quote: "Completely cleared after 2 months of treatment",
  },
  {
    id: 2,
    treatment: "Pigmentation Fade",
    duration: "12 weeks",
    beforeImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_15bcb5e04-1776528394429.png",
    afterImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_15bcb5e04-1776528394429.png",
    beforeAlt:
      "Dark spots and uneven pigmentation visible on skin in natural lighting, neutral background",
    afterAlt:
      "Even-toned radiant skin after pigmentation treatment, bright warm lighting, glowing complexion",
    quote: "Dark spots reduced by over 80%",
  },
  {
    id: 3,
    treatment: "Skin Rejuvenation",
    duration: "6 weeks",
    beforeImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1ebb125f4-1764832140209.png",
    afterImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1ebb125f4-1764832140209.png",
    beforeAlt:
      "Dull tired skin with visible fine lines and texture irregularities in flat lighting",
    afterAlt:
      "Rejuvenated glowing skin with smooth texture after laser treatment, warm studio lighting",
    quote: "Skin looks 10 years younger",
  },
];

export default function ResultsSection() {
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
      ref={sectionRef}
      className="section-pad-lg bg-secondary px-5 md:px-8 lg:px-12"
      aria-labelledby="results-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 scroll-reveal">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-3 block">
            Real Transformations
          </span>
          <h2
            id="results-heading"
            className="text-section-title font-serif font-light text-foreground mb-4"
          >
            Results that speak
            <br />
            <span className="italic text-accent">for themselves</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Hover over each card to reveal the after result. All cases treated
            by Dr. Manoj.
          </p>
        </div>

        {/* Before/After Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((result, i) => (
            <div key={result.id} className={`scroll-reveal stagger-${i + 1}`}>
              <BeforeAfterCard result={result} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center scroll-reveal">
          <p className="text-sm text-muted-foreground mb-5">
            Want to see results like these?
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Book Your Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterCard({ result }: { result: (typeof results)[0] }) {
  return (
    <div className="before-after-card group relative rounded-3xl overflow-hidden h-80 cursor-pointer border border-border shadow-teal-sm">
      {/* Before Layer */}
      <div className="absolute inset-0">
        <AppImage
          src={result.beforeImage}
          alt={result.beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        <div className="absolute top-4 left-4 bg-foreground/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          Before
        </div>
      </div>

      {/* After Layer (reveals on hover) */}
      <div className="after-layer absolute inset-0">
        <AppImage
          src={result.afterImage}
          alt={result.afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
        <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          After
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">
            {result.treatment}
          </h3>
          <span className="text-xs text-white/70 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {result.duration}
          </span>
        </div>
        <p className="text-sm text-white/80 italic">
          &ldquo;{result.quote}&rdquo;
        </p>
      </div>

      {/* Hover instruction */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-xs font-medium">
          Hover to reveal
        </div>
      </div>
    </div>
  );
}
