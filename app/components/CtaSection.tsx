"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AppImage from "../../components/ui/AppImage";

export default function CtaSection() {
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
      { threshold: 0.15 },
    );

    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pad bg-background px-5 md:px-8 lg:px-12"
      aria-label="Call to action"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[420px] flex items-center">
          {/* Background image */}
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1e65e0b4a-1772074799553.png"
            alt="Modern dermatology clinic interior with warm ambient lighting, professional consultation room, clean and inviting atmosphere"
            fill
            className="object-cover"
            sizes="100vw"
          />

          {/* Overlay — dark enough for white text */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          <div className="absolute inset-0 noise-overlay opacity-[0.05] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-14 max-w-2xl scroll-reveal">
            <span className="text-xs font-bold text-white/90 uppercase tracking-[0.18em] mb-4 block">
              Start Your Skin Journey
            </span>
            <h2 className="text-display font-serif font-light text-white mb-6">
              Your best skin
              <br />
              <span className="italic">starts here.</span>
            </h2>
            <p className="text-white/75 text-lg font-light leading-relaxed mb-10 max-w-lg">
              Book a consultation with Dr. Manoj and get a personalized
              treatment plan crafted for your unique skin needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-warm"
              >
                Book Appointment
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
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-medium text-sm hover:bg-white/20 transition-all duration-300"
              >
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
                  />
                </svg>
                Call Clinic
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
