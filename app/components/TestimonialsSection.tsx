"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AppImage from "../../components/ui/AppImage";

interface Treatment {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  description: string;
  longDescription: string;
  benefits: string[];
  duration: string;
  sessions: string;
  startingPrice: string;
  priceNote: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  heroImage: string;
  heroAlt: string;
}

const treatments: Treatment[] = [
  {
    id: "acne",
    title: "Acne Treatment",
    subtitle: "Medical-grade therapy for all acne types",
    tag: "Most Popular",
    tagColor: "bg-primary",
    description:
      "Targeted medical therapy for persistent acne, scarring, and breakouts — from topical to advanced laser.",
    longDescription:
      "Our comprehensive acne program combines prescription-strength topicals, chemical peels, and laser therapy to address active breakouts and long-term scarring. Each protocol is customised to your skin type, hormonal profile, and acne severity — ensuring lasting results rather than temporary fixes.",
    benefits: [
      "Clears active breakouts within 4–6 weeks",
      "Reduces post-acne dark marks and scarring",
      "Prevents future breakout cycles",
      "Improves overall skin texture and tone",
      "Suitable for all skin types including sensitive",
    ],

    duration: "45–60 min per session",
    sessions: "4–8 sessions recommended",
    startingPrice: "₹2,500",
    priceNote: "per session",
    beforeImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_195bcbbbf-1772073602081.png",
    afterImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_195bcbbbf-1772073602081.png",
    beforeAlt: "Skin with active acne breakouts and redness before treatment",
    afterAlt: "Clear, smooth skin with even tone after acne treatment",
    heroImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1e64cbd43-1772070496981.png",
    heroAlt:
      "Close-up of clear, healthy skin after acne treatment, smooth texture with even tone",
  },
  {
    id: "anti-aging",
    title: "Anti-Aging",
    subtitle: "Restore youthful radiance and firmness",
    tag: "Advanced",
    tagColor: "bg-accent",
    description:
      "Restore youthful skin with botox, fillers, chemical peels, and collagen-stimulating treatments.",
    longDescription:
      "Our anti-aging suite uses the latest in aesthetic medicine — from neuromodulators and dermal fillers to radiofrequency skin tightening and collagen induction therapy. We take a holistic approach, addressing volume loss, fine lines, skin laxity, and texture simultaneously for natural-looking rejuvenation.",
    benefits: [
      "Visibly reduces fine lines and deep wrinkles",
      "Restores lost facial volume naturally",
      "Firms and tightens sagging skin",
      "Stimulates long-term collagen production",
      "Results last 12–18 months with maintenance",
    ],

    duration: "30–90 min per session",
    sessions: "2–4 sessions recommended",
    startingPrice: "₹8,000",
    priceNote: "per session",
    beforeImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_189baf0cc-1765368036052.png",
    afterImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_189baf0cc-1765368036052.png",
    beforeAlt:
      "Face showing visible fine lines and skin laxity before anti-aging treatment",
    afterAlt: "Smooth, firm, youthful-looking skin after anti-aging treatment",
    heroImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_14ec93394-1784620856641.png",
    heroAlt:
      "Woman with smooth, radiant skin receiving facial treatment in a bright, clean dermatology clinic",
  },
  {
    id: "pigmentation",
    title: "Pigmentation",
    subtitle: "Fade dark spots and achieve even skin tone",
    tag: "Clinical",
    tagColor: "bg-primary",
    description:
      "Fade dark spots, melasma, and uneven skin tone with targeted depigmentation protocols.",
    longDescription:
      "Pigmentation disorders — from sun damage and melasma to post-inflammatory hyperpigmentation — require precise, layered treatment. Our dermatologists combine Q-switched lasers, medical-grade chemical peels, and prescription brightening agents to safely and effectively restore an even, luminous complexion.",
    benefits: [
      "Fades stubborn dark spots and sun damage",
      "Treats melasma with minimal risk of rebound",
      "Evens out skin tone across the face and body",
      "Brightens dull, tired-looking complexion",
      "Safe for all Fitzpatrick skin types",
    ],

    duration: "30–45 min per session",
    sessions: "6–10 sessions recommended",
    startingPrice: "₹3,500",
    priceNote: "per session",
    beforeImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_176cc141e-1772070132896.png",
    afterImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_176cc141e-1772070132896.png",
    beforeAlt:
      "Skin with visible dark spots, melasma, and uneven pigmentation before treatment",
    afterAlt:
      "Even-toned, glowing skin with faded dark spots after pigmentation treatment",
    heroImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_122e52523-1772073697899.png",
    heroAlt:
      "Even-toned, glowing skin after pigmentation treatment, warm well-lit studio environment",
  },
  {
    id: "hair-loss",
    title: "Hair Loss",
    subtitle: "Reverse thinning and stimulate regrowth",
    tag: "Proven",
    tagColor: "bg-accent",
    description:
      "PRP therapy, mesotherapy, and scalp treatments to reverse thinning and stimulate regrowth.",
    longDescription:
      "Hair loss affects both men and women and can have multiple causes — hormonal, nutritional, or genetic. Our trichology team uses platelet-rich plasma (PRP) therapy, mesotherapy cocktails, low-level laser therapy, and prescription topicals to reactivate dormant follicles and significantly improve hair density.",
    benefits: [
      "Increases hair density by up to 40% in 3 months",
      "Reactivates dormant hair follicles",
      "Reduces hair fall within the first 4 weeks",
      "Non-surgical, minimal downtime procedure",
      "Effective for androgenetic alopecia and alopecia areata",
    ],

    duration: "60–90 min per session",
    sessions: "6–12 sessions recommended",
    startingPrice: "₹5,000",
    priceNote: "per session",
    beforeImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1b3ccbbce-1766990928341.png",
    afterImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1b3ccbbce-1766990928341.png",
    beforeAlt:
      "Thinning hair and visible scalp before PRP hair restoration treatment",
    afterAlt:
      "Healthy, thick hair with improved density after hair loss treatment",
    heroImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_11fab4315-1772071632527.png",
    heroAlt:
      "Healthy thick hair after PRP hair restoration treatment, close-up of scalp in clinic lighting",
  },
  {
    id: "rejuvenation",
    title: "Skin Rejuvenation",
    subtitle: "Glow-boosting resurfacing and renewal",
    tag: "Glow",
    tagColor: "bg-primary",
    description:
      "Laser resurfacing, microneedling, and HydraFacial for glowing, renewed skin texture.",
    longDescription:
      "Skin rejuvenation treatments target dullness, enlarged pores, rough texture, and early signs of ageing. We combine fractional CO₂ laser resurfacing, microneedling with growth factors, and HydraFacial to deeply cleanse, exfoliate, and infuse the skin with nourishing serums — leaving it visibly brighter and smoother.",
    benefits: [
      "Dramatically improves skin texture and radiance",
      "Minimises enlarged pores and fine lines",
      "Delivers instant glow with zero downtime (HydraFacial)",
      "Stimulates collagen for long-term skin health",
      "Customisable to your specific skin concerns",
    ],

    duration: "60–90 min per session",
    sessions: "3–6 sessions recommended",
    startingPrice: "₹4,500",
    priceNote: "per session",
    beforeImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1c271196e-1767951776201.png",
    afterImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1c271196e-1767951776201.png",
    beforeAlt:
      "Dull skin with visible pores and uneven texture before skin rejuvenation treatment",
    afterAlt:
      "Radiant, smooth skin with refined pores after laser rejuvenation treatment",
    heroImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_18e8f0c0c-1772070016221.png",
    heroAlt:
      "Radiant healthy skin after laser rejuvenation treatment, soft warm lighting, clinic background",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Procedures",
    subtitle: "Aesthetic enhancement with natural results",
    tag: "Aesthetic",
    tagColor: "bg-accent",
    description:
      "Full range of aesthetic treatments including thread lifts, lip fillers, and skin tightening.",
    longDescription:
      "Our cosmetic procedures menu covers the full spectrum of non-surgical aesthetic enhancement. From precision lip augmentation and cheek contouring with hyaluronic acid fillers to PDO thread lifts for facial lifting and HIFU for skin tightening — every procedure is performed by our board-certified dermatologist for safe, natural-looking results.",
    benefits: [
      "Immediate, visible enhancement with no surgery",
      "Natural-looking results tailored to your features",
      "Minimal downtime — return to daily activities same day",
      "Reversible options available (hyaluronic acid fillers)",
      "Long-lasting results of 12–24 months",
    ],

    duration: "30–120 min per session",
    sessions: "1–3 sessions recommended",
    startingPrice: "₹12,000",
    priceNote: "per session",
    beforeImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1b7311219-1772087575717.png",
    afterImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1b7311219-1772087575717.png",
    beforeAlt:
      "Face before cosmetic procedure showing areas for aesthetic enhancement",
    afterAlt:
      "Naturally enhanced facial features after cosmetic dermatology procedure",
    heroImage:
      "https://img.rocket.new/generatedImages/rocket_gen_img_121bd56d5-1766755126600.png",
    heroAlt:
      "Professional dermatologist performing cosmetic procedure with precision equipment in modern clinic",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".scroll-reveal")
              .forEach((node) => node.classList.add("revealed"));
          }
        });
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const pos = Math.min(
      Math.max(((clientX - rect.left) / rect.width) * 100, 5),
      95,
    );
    setSliderPos(pos);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-border"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      aria-label="Before and after comparison slider"
    >
      {/* Before image (full) */}
      <div className="absolute inset-0">
        <AppImage
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-3 left-3 bg-foreground/70 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          Before
        </div>
      </div>

      {/* After image (clipped) */}
      <div
        className="absolute inset-0 transition-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <AppImage
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-3 right-3 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          After
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-primary">
          <svg
            className="w-4 h-4 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l-3 3 3 3M16 9l3 3-3 3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TreatmentCard({
  treatment,
  index,
}: {
  treatment: Treatment;
  index: number;
}) {
  const ref = useScrollReveal();
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} id={treatment.id} className="scroll-anchor">
      <div
        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-start`}
      >
        {/* Image + Before/After Column */}
        <div className="w-full lg:w-[45%] flex-shrink-0 scroll-reveal">
          {/* Hero image */}
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden mb-5 border border-border">
            <AppImage
              src={treatment.heroImage}
              alt={treatment.heroAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute top-5 left-5">
              <span
                className={`${treatment.tagColor} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full`}
              >
                {treatment.tag}
              </span>
            </div>
          </div>

          {/* Before/After Slider */}
          <div className="scroll-reveal stagger-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
              Drag to compare results
            </p>
            <BeforeAfterSlider
              beforeImage={treatment.beforeImage}
              afterImage={treatment.afterImage}
              beforeAlt={treatment.beforeAlt}
              afterAlt={treatment.afterAlt}
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-1 scroll-reveal stagger-1">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-3 block">
            {treatment.subtitle}
          </span>
          <h2 className="text-section-title font-serif font-light text-foreground mb-4">
            {treatment.title}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            {treatment.longDescription}
          </p>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              Key Benefits
            </h3>
            <ul className="space-y-3">
              {treatment.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing + Details */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-secondary rounded-2xl p-4 border border-border">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                Starting From
              </p>
              <p className="text-xl font-bold text-primary">
                {treatment.startingPrice}
              </p>
              <p className="text-xs text-muted-foreground">
                {treatment.priceNote}
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-4 border border-border">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                Duration
              </p>
              <p className="text-sm font-semibold text-foreground leading-snug">
                {treatment.duration}
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-4 border border-border">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                Protocol
              </p>
              <p className="text-sm font-semibold text-foreground leading-snug">
                {treatment.sessions}
              </p>
            </div>
          </div>

          <Link
            href={`/appointments?treatment=${treatment.id}`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-teal-sm hover:-translate-y-0.5"
          >
            Book This Treatment
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
  );
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".scroll-reveal")
              .forEach((node) => node.classList.add("revealed"));
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToTreatment = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 px-5 md:px-8 lg:px-12 overflow-hidden"
        aria-labelledby="services-page-heading"
      >
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-teal opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-gold opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl scroll-reveal">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-4 block">
              Our Treatments
            </span>
            <h1
              id="services-page-heading"
              className="text-display font-serif font-light text-foreground mb-6"
            >
              Expert care for{" "}
              <span className="italic text-accent">every skin concern</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              From medical dermatology to aesthetic enhancement — each treatment
              is designed and delivered by our board-certified dermatologist
              using evidence-based protocols.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14 scroll-reveal stagger-2">
            {[
              { value: "6+", label: "Specialised Treatments" },
              { value: "5,000+", label: "Patients Treated" },
              { value: "15+", label: "Years of Expertise" },
              { value: "98%", label: "Patient Satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-2xl p-5"
              >
                <p className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Treatment Nav */}
      <div className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {treatments.map((t) => (
              <button
                key={t.id}
                onClick={() => scrollToTreatment(t.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeTab === t.id
                    ? "bg-primary text-white"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Treatments List */}
      <section className="section-pad-lg px-5 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {treatments.map((treatment, index) => (
            <React.Fragment key={treatment.id}>
              <TreatmentCard treatment={treatment} index={index} />
              {index < treatments.length - 1 && (
                <div className="section-rule" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-pad bg-primary px-5 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-section-title font-serif font-light text-white mb-4">
            Not sure which treatment is right for you?
          </h2>
          <p className="text-base text-white/70 leading-relaxed mb-8">
            Book a free skin consultation with Dr. Meghna Sharma. We&apos;ll assess
            your skin, understand your goals, and recommend the most effective
            treatment plan.
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-teal-md hover:-translate-y-0.5"
          >
            Book a Free Consultation
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
      </section>
    </main>
  );
}
