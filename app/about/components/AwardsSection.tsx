"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

const awards = [
  {
    year: "2023",
    title: "Best Dermatologist",
    org: "Healthcare Excellence Awards",
    region: "Western India",
  },
  {
    year: "2022",
    title: "Top Skin Specialist",
    org: "Practo Patient Choice",
    region: "Mumbai",
  },
  {
    year: "2021",
    title: "Innovation in Aesthetics",
    org: "Indian Dermatology Society",
    region: "National",
  },
  {
    year: "2019",
    title: "Excellence in Patient Care",
    org: "Medical Council of India",
    region: "National",
  },
];

const memberships = [
  "Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)",
  "International Society of Dermatology (ISD)",
  "Association of Cutaneous Surgeons of India (ACSI)",
  "Indian Society for Dermatologic Surgery (ISDS)",
];

export default function AwardsSection() {
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
      className="section-pad-lg bg-foreground px-5 md:px-8 lg:px-12 relative overflow-hidden"
      aria-labelledby="awards-heading"
    >
      <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 blob-teal opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Awards */}
          <div className="scroll-reveal">
            <span className="text-xs font-bold text-accent uppercase tracking-[0.18em] mb-3 block">
              Recognition
            </span>
            <h2
              id="awards-heading"
              className="text-section-title font-serif font-light text-white mb-10"
            >
              Awards &
              <br />
              <span className="italic text-accent">Achievements</span>
            </h2>

            <div className="space-y-5">
              {awards?.map((award, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-6 p-6 rounded-2xl border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all duration-300 scroll-reveal stagger-${i + 1}`}
                >
                  <div className="flex-shrink-0 text-center">
                    <div className="text-2xl font-bold text-accent">
                      {award?.year}
                    </div>
                  </div>
                  <div className="flex-1 border-l border-white/10 pl-6">
                    <div className="text-sm font-semibold text-white mb-1">
                      {award?.title}
                    </div>
                    <div className="text-xs text-white/60">{award?.org}</div>
                    <div className="text-xs text-accent/70 mt-1 uppercase tracking-widest">
                      {award?.region}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships + CTA */}
          <div className="scroll-reveal stagger-2">
            <span className="text-xs font-bold text-accent uppercase tracking-[0.18em] mb-3 block">
              Professional Memberships
            </span>
            <h3 className="text-2xl font-serif font-light text-white mb-8">
              Member of leading
              <br />
              <span className="italic">dermatology bodies</span>
            </h3>

            <div className="space-y-4 mb-12">
              {memberships?.map((membership, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border border-accent/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <span className="text-sm text-white/70 leading-relaxed">
                    {membership}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="text-3xl font-bold text-white mb-2">
                Ready to start?
              </div>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                Book a consultation and experience the MSkinClinic difference
                firsthand.
              </p>
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-accent/90 transition-all duration-300 shadow-warm"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
