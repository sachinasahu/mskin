"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/clinic-logo.jpeg",
    alt: "Clinic logo",
    headline: "Get Flawless Skin",
    sub: "Advanced treatments tailored for you",
  },
  {
    src: "/images/hero2.svg",
    alt: "Dermatology care visual 2",
    headline: "Discover Your Glow",
    sub: "Personalized skincare solutions",
  },
  {
    src: "/images/hero3.svg",
    alt: "Dermatology care visual 3",
    headline: "Expert Dermatology",
    sub: "Modern techniques, caring approach",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    // Dropped the dark: classes here — nothing else in the app supports
    // dark mode anymore, so this was the one component that could silently
    // diverge if the visitor's OS is set to dark appearance.
    <div className="relative w-full h-[480px] md:h-[560px] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--forest-deep)]">
      <Image
        src={current.src}
        alt={current.alt}
        fill
        className="object-cover"
        priority
      />
      {/* Stronger, full-height veil instead of fading to fully transparent
          at the top. White text now has guaranteed contrast against any
          image — or against the bg-[var(--forest-deep)] fallback above if
          an image ever fails to load — rather than relying on the photo
          underneath happening to be dark enough on its own. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/15" />
      <div className="absolute bottom-8 left-8 right-8 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
          {current.headline}
        </h2>
        <p className="text-lg md:text-2xl text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
          {current.sub}
        </p>
      </div>
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
        role="tablist"
        aria-label="Hero slides"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            role="tab"
            aria-selected={i === index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/50"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
