"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Award, Users, BadgeCheck, Microscope } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: {},
  whileInView: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const stats = [
  {
    icon: <Award className="size-8 text-white/80" />,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: <Users className="size-8 text-white/80" />,
    value: "5,000+",
    label: "Happy Patients",
  },
  {
    icon: <BadgeCheck className="size-8 text-white/80" />,
    value: "98%",
    label: "Success Rate",
  },
  {
    icon: <Microscope className="size-8 text-white/80" />,
    value: "20+",
    label: "Advanced Treatments",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("skin");

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative flex min-h-[80vh] w-full flex-col justify-center overflow-hidden rounded-b-3xl bg-gray-900 text-white"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero3.svg"
            alt="A serene and modern clinic interior"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial="initial"
            animate="whileInView"
            variants={staggerContainer(0.2, 0.1)}
            className="mx-auto max-w-3xl"
          >
            <motion.h1
              variants={fadeUp}
              className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Your Journey to Radiant Confidence Starts Here
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mb-8 max-w-2xl text-lg text-white/90"
            >
              Discover a sanctuary of beauty and wellness, where advanced
              cosmetic dermatology meets personalized care.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/appointments" className="btn-copper">
                Book Your Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────────────── */}
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer(0.3, 0.2)}
        className="container grid grid-cols-2 gap-8 rounded-xl bg-gradient-to-br from-[#1A6B6B] to-[#134e4e] p-8 text-white md:grid-cols-4 lg:-mt-20 lg:shadow-xl"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold">{stat.value}</div>
            <p className="text-sm text-white/80">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ─── PHILOSOPHY ────────────────────────────────────────── */}
      <section className="philosophy">
        <div className="philosophy-inner">
          <motion.div
            className="philosophy-header"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <span className="eyebrow">Our Philosophy</span>
            <h2 className="display-heading philosophy-heading">
              Dermatology rooted in science
              <br />
              <em>and genuine care.</em>
            </h2>
            <p className="philosophy-desc">
              We treat more than symptoms. Every visit to Dr. Manoj's clinic
              begins with listening — because lasting skin health comes from
              understanding the whole person, not just the condition.
            </p>
          </motion.div>

          <motion.div
            className="philosophy-pillars"
            variants={staggerContainer(0.3, 0.2)}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.div variants={fadeUp} className="pillar">
              <span className="pillar-num">—</span>
              <div>
                <h3 className="pillar-title">Clinical Precision</h3>
                <p className="pillar-desc">
                  Evidence-based protocols powered by AIIMS-standard diagnostics
                  and FDA-approved technologies. Every treatment decision is
                  grounded in dermatological science.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="pillar">
              <span className="pillar-num">—</span>
              <div>
                <h3 className="pillar-title">Personalized Plans</h3>
                <p className="pillar-desc">
                  No two skin types are alike. Your treatment plan is crafted
                  around your specific conditions, lifestyle, and goals — never
                  a copy-paste prescription.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="pillar">
              <span className="pillar-num">—</span>
              <div>
                <h3 className="pillar-title">Enduring Confidence</h3>
                <p className="pillar-desc">
                  We measure success not by the end of treatment, but by the
                  lasting confidence you carry out the door. Ongoing care and
                  guidance is part of every plan.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────── */}
      <section className="services-section" id="services">
        <div className="services-inner">
          <motion.div
            className="services-top"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <div>
              <span
                className="eyebrow"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                What We Treat
              </span>
              <h2 className="display-heading services-heading">
                Comprehensive care
                <br />
                <em style={{ color: "rgba(255,255,255,0.5)" }}>
                  for every concern.
                </em>
              </h2>
            </div>
            <Link href="/appointments" className="services-link">
              Book a consultation →
            </Link>
          </motion.div>

          <motion.div
            className="tab-strip"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <button
              className={`tab-btn ${activeTab === "skin" ? "is-active" : ""}`}
              onClick={() => setActiveTab("skin")}
            >
              Skin Care
            </button>
            <button
              className={`tab-btn ${activeTab === "hair" ? "is-active" : ""}`}
              onClick={() => setActiveTab("hair")}
            >
              Hair Treatments
            </button>
            <button
              className={`tab-btn ${activeTab === "laser" ? "is-active" : ""}`}
              onClick={() => setActiveTab("laser")}
            >
              Laser & Cosmetic
            </button>
            <button
              className={`tab-btn ${activeTab === "health" ? "is-active" : ""}`}
              onClick={() => setActiveTab("health")}
            >
              Sexual Health
            </button>
          </motion.div>

          {/* Skin Care */}
          <div
            className={`tab-panel ${activeTab === "skin" ? "is-active" : ""}`}
          >
            <div className="treatment-card">
              <span className="treatment-label">Skin Care</span>
              <h3 className="treatment-name">Acne & Pimple Care</h3>
              <p className="treatment-desc">
                Advanced protocols targeting active acne and residual scarring
                for clear, smooth skin that stays that way.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Skin Care</span>
              <h3 className="treatment-name">Skin Pigmentation</h3>
              <p className="treatment-desc">
                Targeted therapies for dark spots, melasma, and uneven tone —
                safely restoring a balanced, even complexion.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Skin Care</span>
              <h3 className="treatment-name">Vitiligo & Psoriasis</h3>
              <p className="treatment-desc">
                Specialist management of autoimmune skin conditions using modern
                phototherapy and targeted biologics.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Skin Care</span>
              <h3 className="treatment-name">Eczema & Allergies</h3>
              <p className="treatment-desc">
                Comprehensive diagnosis and long-term management of eczema,
                contact dermatitis, and skin allergies.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Skin Care</span>
              <h3 className="treatment-name">Nail Surgery</h3>
              <p className="treatment-desc">
                Expert care for ingrown nails, onychomycosis, nail dystrophies,
                and related nail disorders.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
          </div>

          {/* Hair */}
          <div
            className={`tab-panel ${activeTab === "hair" ? "is-active" : ""}`}
          >
            <div className="treatment-card">
              <span className="treatment-label">Hair</span>
              <h3 className="treatment-name">Hair Loss Treatment</h3>
              <p className="treatment-desc">
                Medical and procedural solutions for androgenetic alopecia,
                alopecia areata, and diffuse hair fall.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Hair</span>
              <h3 className="treatment-name">GFC & PRP Therapy</h3>
              <p className="treatment-desc">
                Growth Factor Concentrate and Platelet-Rich Plasma for
                stimulating natural, lasting hair regeneration.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Hair</span>
              <h3 className="treatment-name">Mesotherapy</h3>
              <p className="treatment-desc">
                Micro-injection of targeted nutrients directly into the scalp to
                nourish follicles and revive hair health.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Hair</span>
              <h3 className="treatment-name">Hair Transplant</h3>
              <p className="treatment-desc">
                Permanent, natural-looking hair restoration using advanced FUE
                and follicular techniques.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Hair</span>
              <h3 className="treatment-name">Dandruff & Scalp</h3>
              <p className="treatment-desc">
                Targeted scalp treatments for persistent dandruff, seborrheic
                dermatitis, and scalp inflammation.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Hair</span>
              <h3 className="treatment-name">Microneedling</h3>
              <p className="treatment-desc">
                Collagen induction therapy to improve scalp circulation,
                follicle health, and active hair regrowth.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
          </div>

          {/* Laser & Cosmetic */}
          <div
            className={`tab-panel ${activeTab === "laser" ? "is-active" : ""}`}
          >
            <div className="treatment-card">
              <span className="treatment-label">Laser & Cosmetic</span>
              <h3 className="treatment-name">Laser Hair Removal</h3>
              <p className="treatment-desc">
                Safe, long-lasting removal of unwanted body and facial hair with
                advanced multi-wavelength laser.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Laser & Cosmetic</span>
              <h3 className="treatment-name">Hydra Facial</h3>
              <p className="treatment-desc">
                Multi-step facial combining deep cleansing, exfoliation, and
                intense hydration for instant radiance.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Laser & Cosmetic</span>
              <h3 className="treatment-name">Chemical Peeling</h3>
              <p className="treatment-desc">
                Professional exfoliation for skin renewal, glow enhancement, and
                texture refinement.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Laser & Cosmetic</span>
              <h3 className="treatment-name">Hyaluronic Fillers</h3>
              <p className="treatment-desc">
                Precision dermal filler treatments for volume restoration, lip
                enhancement, and anti-aging contouring.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Laser & Cosmetic</span>
              <h3 className="treatment-name">Tattoo & Mole Removal</h3>
              <p className="treatment-desc">
                Laser-based removal of tattoos, moles, warts, and skin tags with
                precision and minimal downtime.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
            <div className="treatment-card">
              <span className="treatment-label">Laser & Cosmetic</span>
              <h3 className="treatment-name">Skin Brightening</h3>
              <p className="treatment-desc">
                Glutathione injections, whole-body brightening, and skin
                rejuvenation for a luminous, even glow.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
          </div>

          {/* Sexual Health */}
          <div
            className={`tab-panel ${activeTab === "health" ? "is-active" : ""}`}
          >
            <div className="treatment-card">
              <span className="treatment-label">Sexual Health</span>
              <h3 className="treatment-name">STD Consultation & Treatment</h3>
              <p className="treatment-desc">
                Confidential diagnosis and evidence-based treatment for sexually
                transmitted diseases, in a private, judgment-free environment
                with complete discretion.
              </p>
              <span className="treatment-arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOCTOR ────────────────────────────────────────────── */}
      <div className="doctor-section" id="doctor">
        <div className="doctor-image-panel">
          <img
            src="/images/doPic.jpg"
            alt="Dr. Manoj Kumar Nayak — Dermatologist in Bhubaneswar"
            loading="lazy"
          />
        </div>

        <div className="doctor-content-panel">
          <span className="eyebrow" style={{ color: "var(--copper)" }}>
            Meet Your Doctor
          </span>
          <h2 className="display-heading doctor-name">Dr. Manoj Kumar Nayak</h2>
          <p className="doctor-credential-tag">
            MD Dermatology · AIIMS Bhubaneswar
          </p>

          <p className="doctor-bio">
            Shaped by AIIMS training and refined by over a decade of practice,
            Dr. Manoj brings academic excellence and personal warmth to every
            consultation. He believes every skin tells a story — and every
            patient deserves a specialist who truly listens.
          </p>

          <ul className="credential-list">
            <li>
              <span className="cred-dot"></span>M.B.B.S., MD Dermatology — AIIMS
              Bhubaneswar
            </li>
            <li>
              <span className="cred-dot"></span>Asst. Professor, IMS & SUM
              Hospital, Bhubaneswar
            </li>
            <li>
              <span className="cred-dot"></span>Ex-Senior Resident, AIIMS
              Bhubaneswar
            </li>
            <li>
              <span className="cred-dot"></span>10+ Years of Specialist Clinical
              Experience
            </li>
            <li>
              <span className="cred-dot"></span>Expert in Acne, Hair Loss &
              Laser Dermatology
            </li>
          </ul>

          <Link
            href="/appointments"
            className="btn-copper"
            style={{ width: "fit-content" }}
          >
            Book with Dr. Manoj →
          </Link>
        </div>
      </div>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="testimonials-section" id="testimonials">
        <div className="testimonials-inner">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <span className="eyebrow">Patient Stories</span>
            <h2 className="display-heading testimonials-heading">
              What our patients
              <br />
              <em>say about us.</em>
            </h2>
          </motion.div>

          <motion.div
            className="testimonials-grid"
            variants={staggerContainer(0.3, 0.2)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} className="testimonial-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">
                "Dr. Manoj took time to actually understand my skin. Within
                three sessions my acne scars were visibly lighter — something
                I'd struggled with for years."
              </p>
              <div className="t-author">
                <div className="t-avatar">R</div>
                <div>
                  <div className="t-name">Rajesh Jena</div>
                  <div className="t-treatment">Acne Scar Treatment</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="testimonial-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">
                "The GFC hair therapy changed everything. Hair fall reduced
                significantly in just 6 weeks. The clinic is professional,
                clean, and the doctor is very knowledgeable."
              </p>
              <div className="t-author">
                <div className="t-avatar">P</div>
                <div>
                  <div className="t-name">Priya Mohanty</div>
                  <div className="t-treatment">GFC Hair Therapy</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="testimonial-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">
                "Best dermatologist in Bhubaneswar. The laser session was
                comfortable and the results are exactly what I'd hoped for. Will
                definitely recommend to friends and family."
              </p>
              <div className="t-author">
                <div className="t-avatar">S</div>
                <div>
                  <div className="t-name">Suresh Das</div>
                  <div className="t-treatment">Laser Skin Rejuvenation</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SKINCARE TIPS ─────────────────────────────────────── */}
      <section className="tips-section">
        <div className="tips-inner">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <span className="eyebrow">Skin Wisdom</span>
            <h2 className="display-heading tips-heading">
              Daily care for
              <br />
              <em>every skin type.</em>
            </h2>
          </motion.div>

          <motion.div
            className="tips-grid"
            variants={staggerContainer(0.3, 0.2)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} className="tip-card">
              <span className="tip-icon">💧</span>
              <h3 className="tip-title">Oily Skin</h3>
              <ul className="tip-list">
                <li>Gel-based, oil-free cleanser twice daily</li>
                <li>Salicylic acid for pore control</li>
                <li>Lightweight, non-comedogenic moisturizer</li>
                <li>Clay mask 1–2× per week</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="tip-card">
              <span className="tip-icon">🌾</span>
              <h3 className="tip-title">Dry Skin</h3>
              <ul className="tip-list">
                <li>Cream-based, hydrating cleanser</li>
                <li>Hyaluronic acid for moisture retention</li>
                <li>Rich, emollient moisturizer morning & night</li>
                <li>Avoid harsh or alcohol-based products</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="tip-card">
              <span className="tip-icon">⚖️</span>
              <h3 className="tip-title">Combination Skin</h3>
              <ul className="tip-list">
                <li>Gentle, balanced cleanser</li>
                <li>Lightweight moisturizer all over</li>
                <li>Multi-masking for T-zone vs cheeks</li>
                <li>Spot-treat oily and dry areas separately</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="tip-card">
              <span className="tip-icon">🌸</span>
              <h3 className="tip-title">Sensitive Skin</h3>
              <ul className="tip-list">
                <li>Fragrance-free, minimal-ingredient formulas</li>
                <li>Always patch-test new products</li>
                <li>Gentle, soothing actives (ceramides, aloe)</li>
                <li>Avoid harsh exfoliants or high-acid peels</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <motion.div
            className="cta-content"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <span
              className="eyebrow"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Get Started
            </span>
            <h2 className="display-heading cta-heading">
              Ready to start your
              <br />
              <em style={{ color: "rgba(255,255,255,0.55)" }}>
                skin transformation?
              </em>
            </h2>
            <p className="cta-sub">
              Book a consultation with Dr. Manoj Kumar Nayak at our Bhubaneswar
              or Berhampur clinic. Your first step toward lasting skin
              confidence is just one call away.
            </p>
          </motion.div>

          <motion.div
            className="cta-actions"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <Link href="/appointments" className="btn-book">
              Book an Appointment →
            </Link>
            <a
              href="https://wa.me/917657015719"
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <p className="cta-locations">
              📍 Unit-4, Madhusudhan Nagar, Bhubaneswar · Near Barracks High
              School, Berhampur
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
