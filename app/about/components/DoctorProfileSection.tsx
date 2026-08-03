"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";

const qualifications = [
  {
    year: "MBBS",
    title: "Bachelor of Medicine & Surgery",
    detail: "Medical qualification",
  },
  {
    year: "MD",
    title: "MD Dermatology — AIIMS",
    detail: "Dermatology specialist training",
  },
  {
    year: "AIIMS",
    title: "Ex-Senior Resident, AIIMS Bhubaneswar",
    detail: "Advanced clinical dermatology experience",
  },
  {
    year: "IMS",
    title: "Assistant Professor, IMS & SUM Hospital",
    detail: "Clinical and academic practice",
  },
  {
    year: "28352",
    title: "Medical Registration Number",
    detail: "Registered dermatologist",
  },
];

const specializations = [
  "Medical Dermatology",
  "Acne & Scar Treatment",
  "Vitiligo, Psoriasis & Eczema",
  "Laser Skin Treatments",
  "Pigmentation & Acne Scar Care",
  "Hair Loss, GFC & PRP Therapy",
  "Microneedling & Mesotherapy",
  "Mole, Wart & Tag Removal",
];

export default function DoctorProfileSection() {
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
      aria-labelledby="doctor-profile-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="lg:col-span-5 scroll-reveal">
            <div className="relative">
              <div className="arch-shape overflow-hidden shadow-teal-lg">
                <div className="aspect-[3/4]">
                  <AppImage
                    src="/assets/clinic/dr-manoj.jpeg"
                    alt="Dr. Manoj Kumar Nayak, dermatologist, in a white coat"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-card border border-border rounded-2xl p-5 shadow-teal-md z-20">
                <div className="text-4xl font-bold text-primary mb-1">5K+</div>
                <div className="text-xs font-semibold text-foreground">
                  Patients
                </div>
                <div className="text-xs text-muted-foreground">
                  Successfully Treated
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="mt-12 scroll-reveal stagger-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {specializations?.map((spec) => (
                  <span
                    key={spec}
                    className="bg-secondary text-foreground border border-border text-xs font-medium px-3.5 py-1.5 rounded-full hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Profile Content */}
          <div className="lg:col-span-7">
            <div className="scroll-reveal">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-3 block">
                Doctor Profile
              </span>
              <h2
                id="doctor-profile-heading"
                className="text-section-title font-serif font-light text-foreground mb-6"
              >
                A dermatologist who listens
                <br />
                <span className="italic text-accent">before prescribing</span>
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground font-light leading-relaxed border-l-2 border-primary/30 pl-6 mb-10 scroll-reveal stagger-1">
              <p>
                Dr. Manoj completed his MBBS from Government Medical College and
                pursued his MD in Dermatology from AIIMS — one of India&apos;s
                most prestigious medical institutions. His training gave him a
                deep foundation in both the science and the art of skin health.
              </p>
              <p>
                After completing a fellowship in advanced laser therapy, Dr.
                Manoj returned to establish MSkinClinic — a practice built on
                the principle that every patient deserves a treatment plan as
                individual as their skin.
              </p>
              <p>
                In 15+ years of practice, Dr. Manoj has treated over 5,000
                patients across a wide spectrum of dermatological conditions,
                from complex medical cases to aesthetic enhancements.
              </p>
            </div>

            {/* Education & Credentials Timeline */}
            <div className="scroll-reveal stagger-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">
                Education & Credentials
              </h3>
              {/* Visual grid timeline — NOT a numbered vertical list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualifications?.map((q, i) => (
                  <div
                    key={i}
                    className="bg-secondary border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-teal-sm transition-all duration-300 group"
                  >
                    <div className="text-xs font-bold text-accent mb-2 uppercase tracking-widest">
                      {q?.year}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1 leading-snug">
                      {q?.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {q?.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 scroll-reveal stagger-3">
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-teal-md hover:-translate-y-0.5"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
