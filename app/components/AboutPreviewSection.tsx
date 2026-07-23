"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AppImage from "../../components/ui/AppImage";

const credentials = [
  { icon: "🎓", label: "MBBS, MD Dermatology", detail: "Board Certified" },
  {
    icon: "🏥",
    label: "15+ Years Clinical Practice",
    detail: "Senior Dermatologist",
  },
  {
    icon: "🔬",
    label: "Advanced Laser Specialist",
    detail: "Certified Practitioner",
  },
  {
    icon: "📋",
    label: "5,000+ Patients Treated",
    detail: "Proven Track Record",
  },
];

export default function AboutPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
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

    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pad-lg bg-background px-5 md:px-8 lg:px-12"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image with arch */}
          <div className="relative scroll-reveal order-2 lg:order-1">
            {/* Decorative ring */}
            <div className="absolute -top-8 -left-8 w-full h-full border border-border rounded-arch -rotate-3 z-0 pointer-events-none" />

            {/* Main image */}
            <div className="relative arch-shape overflow-hidden z-10 shadow-teal-lg">
              <div className="aspect-[4/5]">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1ce6ab47d-1780432844894.png"
                  alt="Dr. Manoj, board-certified dermatologist in white coat in a bright modern clinic, professional and approachable"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Light overlay for text readability on any skin tone */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating credential card */}
            <div className="absolute -bottom-4 -right-4 md:-right-8 z-20 bg-card border border-border rounded-2xl p-5 shadow-teal-md max-w-[180px]">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-xs font-semibold text-foreground">
                Years of
              </div>
              <div className="text-xs text-muted-foreground">
                Clinical Excellence
              </div>
            </div>

            {/* Floating reviews card */}
            <div className="absolute top-8 -left-4 md:-left-8 z-20 bg-card border border-border rounded-2xl p-4 shadow-warm">
              <div className="flex items-center gap-1 mb-1.5">
                {[1, 2, 3, 4, 5]?.map((s) => (
                  <svg
                    key={s}
                    className="w-3.5 h-3.5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs font-semibold text-foreground">
                500+ Reviews
              </div>
              <div className="text-xs text-muted-foreground">
                Avg. 4.9 / 5.0
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="scroll-reveal">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-3 block">
                Meet Your Doctor
              </span>
              <h2
                id="about-heading"
                className="text-section-title font-serif font-light text-foreground mb-6"
              >
                Dr. Manoj — <br />
                <span className="italic text-accent">Skin that heals,</span>
                <br />
                confidence that follows
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground font-light leading-relaxed pl-6 border-l-2 border-primary/30 scroll-reveal stagger-1">
              <p>
                With over 15 years of dedicated practice in medical and
                aesthetic dermatology, Dr. Manoj has helped thousands of
                patients achieve clear, healthy skin through evidence-based
                treatments.
              </p>
              <p>
                Board-certified and trained in the latest laser and cosmetic
                technologies, Dr. Manoj combines clinical precision with a
                patient-first approach — ensuring every treatment plan is as
                unique as your skin.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 scroll-reveal stagger-2">
              {credentials?.map((cred, i) => (
                <div
                  key={i}
                  className="bg-secondary rounded-2xl p-4 border border-border hover:border-primary/30 hover:shadow-teal-sm transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{cred?.icon}</div>
                  <div className="text-sm font-semibold text-foreground leading-tight mb-0.5">
                    {cred?.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {cred?.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 scroll-reveal stagger-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-sm font-bold text-primary uppercase tracking-widest hover:gap-5 transition-all duration-300 group"
              >
                Full Profile & Credentials
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
        </div>
      </div>
    </section>
  );
}
