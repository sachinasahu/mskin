"use client";

import React, { useEffect, useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Evidence-Based",
    description:
      "Every treatment at MSkinClinic is backed by clinical research. No trends, no gimmicks — only what the science supports.",
  },
  {
    number: "02",
    title: "Personalized",
    description:
      "No two skins are the same. Each patient receives a protocol designed specifically for their skin type, concerns, and goals.",
  },
  {
    number: "03",
    title: "Transparent",
    description:
      "Clear diagnosis, honest prognosis, realistic outcomes. We tell you exactly what to expect before, during, and after treatment.",
  },
  {
    number: "04",
    title: "Long-Term",
    description:
      "We focus on lasting skin health, not quick fixes. Maintenance protocols and follow-up care are built into every treatment plan.",
  },
];

export default function PhilosophySection() {
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
      className="section-pad-lg bg-secondary px-5 md:px-8 lg:px-12"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Pull Quote */}
        <div className="max-w-3xl mx-auto text-center mb-20 scroll-reveal">
          <svg
            className="w-12 h-12 text-border mx-auto mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          <blockquote className="text-display font-serif font-light text-foreground italic leading-tight mb-8">
            &ldquo;Healthy skin is not a luxury — it is a reflection of overall
            wellness and self-respect.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-12 h-px bg-border mb-4" />
            <span className="text-sm font-semibold text-foreground">
              Dr. Manoj
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              Founder, MSkinClinic
            </span>
          </div>
        </div>

        {/* Philosophy pillars — asymmetric grid, NOT uniform 4-col */}
        <div className="scroll-reveal">
          <h2
            id="philosophy-heading"
            className="text-sm font-bold text-primary uppercase tracking-[0.18em] mb-10 text-center"
          >
            Our Clinical Philosophy
          </h2>
          {/* 2x2 grid with gap dividers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {pillars?.map((pillar, i) => (
              <div
                key={i}
                className={`bg-background p-10 md:p-12 flex flex-col justify-between group hover:bg-secondary transition-colors duration-300 ${
                  i === 0
                    ? "md:rounded-tl-3xl"
                    : i === 1
                      ? "md:rounded-tr-3xl"
                      : i === 2
                        ? "md:rounded-bl-3xl"
                        : "md:rounded-br-3xl"
                }`}
              >
                <div>
                  <span className="text-5xl font-light text-primary/20 group-hover:text-primary/40 transition-colors duration-300 font-serif">
                    {pillar?.number}
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {pillar?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
