"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarCheck,
  CircleCheck,
  Gem,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type ClinicService = {
  id: number;
  name: string;
  description: string;
  focus: string;
  result: string;
  icon: ComponentType<LucideProps>;
  treatments: string[];
  image: string;
};

const clinicServices: ClinicService[] = [
  {
    id: 1,
    name: "Acne Treatment",
    focus: "Clear skin protocols",
    result: "Calmer, smoother skin with visible texture refinement.",
    description:
      "Comprehensive acne treatment solutions including laser therapy, chemical peels, and advanced dermatological procedures.",
    icon: Microscope,
    treatments: [
      "Laser Treatment",
      "Chemical Peels",
      "Extraction",
      "Medication",
    ],
    image: "/images/Acne_Treatment.png",
  },
  {
    id: 2,
    name: "Anti-Aging Treatments",
    focus: "Age-defying aesthetics",
    result: "A refreshed appearance that still looks naturally yours.",
    description:
      "Advanced anti-aging procedures to reduce wrinkles, fine lines, and restore youthful skin appearance.",
    icon: Syringe,
    treatments: [
      "Botox",
      "Dermal Fillers",
      "Microdermabrasion",
      "Laser Resurfacing",
    ],
    image: "/images/Anti_Aging_Treatments.png",
  },
  {
    id: 3,
    name: "Hair Loss Treatment",
    focus: "Scalp and hair revival",
    result: "Healthier follicles, reduced fall, and improved density plans.",
    description:
      "Specialized hair restoration and loss prevention treatments tailored to your hair type and condition.",
    icon: HeartPulse,
    treatments: [
      "PRP Therapy",
      "Minoxidil",
      "Hair Transplant",
      "Laser Therapy",
    ],
    image: "/images/hair_treatment.png",
  },
  {
    id: 4,
    name: "Pigmentation & Brightening",
    focus: "Tone correction",
    result: "More even luminosity with dermatologist-guided maintenance.",
    description:
      "Treat dark spots, melasma, and uneven skin tone with our advanced pigmentation correction services.",
    icon: Sparkles,
    treatments: [
      "Laser Therapy",
      "Chemical Peels",
      "Microdermabrasion",
      "Topical Treatments",
    ],
    image: "/images/Pigmentation.png",
  },
  {
    id: 5,
    name: "Skin Rejuvenation",
    focus: "Radiance restoration",
    result: "A polished glow with improved hydration and surface texture.",
    description:
      "Non-invasive and minimally invasive procedures to rejuvenate and refresh your skin's natural radiance.",
    icon: Gem,
    treatments: ["Facial", "HydraFacial", "Microneedling", "Chemical Peel"],
    image: "/images/Skin_Rejuvenation.png",
  },
  {
    id: 6,
    name: "Dermatological Surgery",
    focus: "Precision procedures",
    result: "Safe removals and revisions with minimal scarring in mind.",
    description:
      "Specialized surgical procedures for moles, warts, cysts, and other skin conditions with minimal scarring.",
    icon: Stethoscope,
    treatments: [
      "Mole Removal",
      "Wart Removal",
      "Cyst Extraction",
      "Scar Revision",
    ],
    image: "/images/Dermatological.png",
  },
];

const trustStats = [
  { value: "6", label: "Signature service suites" },
  { value: "20+", label: "Advanced treatment options" },
  { value: "1:1", label: "Personalized consultation first" },
];

const servicePrinciples = [
  {
    icon: Award,
    title: "Expert Consultation",
    desc: "Personalized treatment plans designed by experienced dermatologists based on your specific skin condition and goals.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    desc: "State-of-the-art equipment and cutting-edge techniques for safe, effective and quick results.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Results",
    desc: "Proven track record of delivering visible improvements and transformations with natural-looking results.",
  },
  {
    icon: ShieldCheck,
    title: "Patient Care",
    desc: "Compassionate care with attention to your comfort, concerns, and complete satisfaction throughout your treatment.",
  },
];

export default function ServicesPage() {
  const heroService = clinicServices[4];

  return (
    <main className="services-luxury-page">
      <section className="services-hero">
        <div className="hero-bg" aria-hidden="true">
          <Image
            src={heroService.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg-image"
          />
        </div>

        <motion.div
          className="hero-shell"
          initial="initial"
          animate="whileInView"
          variants={staggerContainer}
        >
          <motion.div className="hero-copy" variants={fadeUp}>
            <span className="eyebrow hero-eyebrow">
              Dr. Manoj Skin Clinic Services
            </span>
            <h1 className="display-heading hero-title">
              Dermatology designed to feel precise, private, and beautifully
              personal.
            </h1>
            <p className="hero-description">
              Explore advanced skin, hair, laser, and procedural care curated
              around your concern, skin type, pace, and long-term confidence.
            </p>
            <div className="hero-actions">
              <Link href="/appointments" className="btn-copper hero-button">
                <CalendarCheck size={18} />
                Book Consultation
              </Link>
              <a href="#service-collection" className="hero-link">
                View treatments
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div className="hero-feature" variants={fadeUp}>
            <span className="feature-kicker">Featured Suite</span>
            <h2>{heroService.name}</h2>
            <p>{heroService.result}</p>
            <div className="feature-pills">
              {heroService.treatments.map((treatment) => (
                <span key={treatment}>{treatment}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="trust-strip"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {trustStats.map((stat) => (
            <motion.div
              key={stat.label}
              className="trust-item"
              variants={fadeUp}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="service-collection" className="service-collection">
        <div className="section-shell">
          <motion.div
            className="section-intro"
            initial="initial"
            whileInView="whileInView"
            variants={fadeUp}
          >
            <span className="eyebrow">Treatment Collection</span>
            <h2 className="display-heading section-title">
              Select care for the concern you want to change.
            </h2>
            <p>
              Each service suite combines diagnosis, procedure planning, and
              follow-up guidance so your treatment feels clear from the first
              conversation.
            </p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-80px" }}
          >
            {clinicServices.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.id}
                  className="service-card"
                  variants={fadeUp}
                >
                  <div className="service-image-wrap">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                      className="service-image"
                    />
                    <div className="service-number">
                      {String(service.id).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="service-body">
                    <div className="service-heading-row">
                      <span className="service-icon">
                        <Icon size={22} />
                      </span>
                      <div>
                        <span className="service-focus">{service.focus}</span>
                        <h3>{service.name}</h3>
                      </div>
                    </div>

                    <p className="service-description">{service.description}</p>
                    <p className="service-result">
                      <CircleCheck size={16} />
                      {service.result}
                    </p>

                    <div className="treatment-list">
                      {service.treatments.map((treatment) => (
                        <span key={treatment}>{treatment}</span>
                      ))}
                    </div>

                    <Link href="/appointments" className="service-cta">
                      Book Appointment
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="experience-section">
        <div className="section-shell experience-shell">
          <motion.div
            className="experience-copy"
            initial="initial"
            whileInView="whileInView"
            variants={fadeUp}
          >
            <span className="eyebrow">The Clinic Standard</span>
            <h2 className="display-heading section-title">
              Calm process. Clinical clarity. Results with restraint.
            </h2>
            <p>
              Luxury in dermatology is not excess. It is time, accuracy,
              privacy, and a treatment plan that feels considered at every step.
            </p>
            <Link href="/appointments" className="btn-copper">
              Start With a Consultation
            </Link>
          </motion.div>

          <motion.div
            className="principles-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {servicePrinciples.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  className="principle-card"
                  variants={fadeUp}
                >
                  <Icon size={24} />
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="final-cta">
        <motion.div
          className="final-cta-inner"
          initial="initial"
          whileInView="whileInView"
          variants={fadeUp}
        >
          <span className="eyebrow">Begin Your Plan</span>
          <h2 className="display-heading">Ready to transform your skin?</h2>
          <p>
            Schedule your consultation today and take the first step toward
            healthier, radiant skin.
          </p>
          <Link href="/appointments" className="btn-copper final-button">
            Book Your Appointment Now
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <style jsx>{`
        .services-luxury-page {
          background: var(--pearl);
          color: var(--ink);
          min-height: 100vh;
          overflow: hidden;
        }

        .services-hero {
          position: relative;
          min-height: 100vh;
          padding: 148px 0 0;
          background: var(--forest-deep);
          color: var(--white);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(9, 18, 16, 0.98) 0%, rgba(9, 18, 16, 0.78) 46%, rgba(9, 18, 16, 0.18) 100%),
            linear-gradient(0deg, rgba(9, 18, 16, 1) 0%, rgba(9, 18, 16, 0.18) 46%, rgba(9, 18, 16, 0.3) 100%);
        }

        .hero-bg-image {
          object-fit: cover;
          object-position: center;
          filter: saturate(0.78) contrast(1.06) brightness(0.82);
          transform: scale(1.04);
        }

        .hero-shell,
        .section-shell,
        .trust-strip,
        .final-cta-inner {
          width: 100%;
          max-width: 1200px;
          margin-inline: auto;
          padding-inline: 16px;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 640px) {
          .hero-shell,
          .section-shell,
          .trust-strip,
          .final-cta-inner {
            padding-inline: 24px;
          }
        }

        @media (min-width: 1024px) {
          .hero-shell,
          .section-shell,
          .trust-strip,
          .final-cta-inner {
            padding-inline: 32px;
          }
        }

        .hero-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) 420px;
          gap: 64px;
          align-items: end;
          padding-bottom: 78px;
        }

        .hero-eyebrow {
          color: var(--copper-dim);
        }

        .hero-title {
          font-size: clamp(48px, 6.4vw, 86px);
          max-width: 850px;
          color: var(--white);
          margin-bottom: 28px;
        }

        .hero-description {
          max-width: 610px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 42px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 22px;
        }

        .hero-button,
        .final-button {
          gap: 10px;
        }

        .hero-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.76);
          text-decoration: none;
          font-size: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.22);
          padding-bottom: 3px;
          transition: color 0.25s var(--transition-smooth), border-color 0.25s var(--transition-smooth);
        }

        .hero-link:hover {
          color: var(--white);
          border-color: var(--copper);
        }

        .hero-feature {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
          padding: 32px;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.26);
        }

        .feature-kicker,
        .service-focus {
          display: block;
          color: var(--copper-dim);
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .hero-feature h2 {
          font-family: var(--font-cormorant), serif;
          font-size: 32px;
          font-weight: 500;
          letter-spacing: -0.01em;
          margin-bottom: 14px;
        }

        .hero-feature p {
          color: rgba(255, 255, 255, 0.66);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .feature-pills,
        .treatment-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .feature-pills span {
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.74);
          padding: 8px 12px;
          font-size: 12px;
        }

        .trust-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(9, 18, 16, 0.68);
          backdrop-filter: blur(18px);
        }

        .trust-item {
          padding: 28px 32px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .trust-item:last-child {
          border-right: 0;
        }

        .trust-item strong {
          display: block;
          font-family: var(--font-cormorant), serif;
          font-size: 38px;
          font-weight: 500;
          line-height: 1;
          color: var(--copper-dim);
          margin-bottom: 8px;
        }

        .trust-item span {
          display: block;
          color: rgba(255, 255, 255, 0.52);
          font-size: 12px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .service-collection {
          padding: 120px 0;
          background: var(--pearl);
        }

        .section-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(280px, 460px);
          gap: 72px;
          align-items: end;
          margin-bottom: 58px;
        }

        .section-title {
          font-size: clamp(36px, 4vw, 58px);
          color: var(--ink);
        }

        .section-intro p,
        .experience-copy p {
          color: var(--smoke);
          font-size: 15.5px;
          line-height: 1.85;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .service-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s var(--transition-smooth), box-shadow 0.35s var(--transition-smooth), border-color 0.35s var(--transition-smooth);
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--copper-dim);
          box-shadow: 0 26px 60px rgba(14, 31, 21, 0.12);
        }

        .service-image-wrap {
          position: relative;
          aspect-ratio: 1.25;
          overflow: hidden;
          background: var(--sage-tint);
        }

        .service-image {
          object-fit: cover;
          transition: transform 0.7s var(--transition-smooth), filter 0.7s var(--transition-smooth);
        }

        .service-card:hover .service-image {
          transform: scale(1.06);
          filter: saturate(1.06) contrast(1.02);
        }

        .service-number {
          position: absolute;
          right: 18px;
          bottom: 16px;
          font-family: var(--font-cormorant), serif;
          font-size: 44px;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1;
          text-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
        }

        .service-body {
          padding: 28px;
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .service-heading-row {
          display: grid;
          grid-template-columns: 46px 1fr;
          gap: 14px;
          align-items: start;
          margin-bottom: 18px;
        }

        .service-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--sage-tint);
          color: var(--forest);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .service-focus {
          color: var(--copper);
          margin-bottom: 6px;
        }

        .service-body h3 {
          font-family: var(--font-cormorant), serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .service-description {
          color: var(--smoke);
          font-size: 14.5px;
          line-height: 1.75;
          margin-bottom: 18px;
        }

        .service-result {
          display: grid;
          grid-template-columns: 16px 1fr;
          gap: 9px;
          color: var(--forest);
          font-size: 13.5px;
          line-height: 1.55;
          margin-bottom: 22px;
        }

        .service-result svg {
          color: var(--copper);
          margin-top: 2px;
        }

        .treatment-list {
          margin-bottom: 28px;
        }

        .treatment-list span {
          border-radius: 999px;
          background: var(--sage-tint);
          color: var(--forest);
          font-size: 12px;
          font-weight: 500;
          padding: 8px 12px;
        }

        .service-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--forest);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          margin-top: auto;
          transition: color 0.25s var(--transition-smooth), gap 0.25s var(--transition-smooth);
        }

        .service-cta:hover {
          color: var(--copper);
          gap: 12px;
        }

        .experience-section {
          background: var(--sage-tint);
          padding: 120px 0;
        }

        .experience-shell {
          display: grid;
          grid-template-columns: minmax(300px, 0.9fr) minmax(0, 1.1fr);
          gap: 72px;
          align-items: start;
        }

        .experience-copy {
          position: sticky;
          top: 100px;
        }

        .experience-copy p {
          margin: 20px 0 34px;
          max-width: 480px;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .principle-card {
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(14, 31, 21, 0.08);
          border-radius: 8px;
          padding: 30px;
          transition: transform 0.3s var(--transition-smooth), box-shadow 0.3s var(--transition-smooth);
        }

        .principle-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 42px rgba(14, 31, 21, 0.1);
        }

        .principle-card svg {
          color: var(--copper);
          margin-bottom: 22px;
        }

        .principle-card h3 {
          font-family: var(--font-cormorant), serif;
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .principle-card p {
          color: var(--smoke);
          font-size: 14px;
          line-height: 1.75;
        }

        .final-cta {
          padding: 120px 0;
          background: var(--forest);
          color: var(--white);
          text-align: center;
        }

        .final-cta .eyebrow {
          color: var(--copper-dim);
        }

        .final-cta h2 {
          font-size: clamp(38px, 4.8vw, 68px);
          color: var(--white);
          margin-bottom: 20px;
        }

        .final-cta p {
          color: rgba(255, 255, 255, 0.64);
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto 34px;
        }

        @media (max-width: 1023px) {
          .hero-shell,
          .experience-shell,
          .section-intro {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .hero-feature,
          .experience-copy {
            position: static;
          }

          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .services-hero {
            min-height: auto;
            padding: 118px 0 0;
          }

          .service-collection,
          .experience-section,
          .final-cta {
            padding: 84px 0;
          }

          .hero-shell {
            padding-bottom: 42px;
          }

          .hero-title {
            font-size: clamp(42px, 13vw, 58px);
          }

          .hero-description {
            font-size: 15.5px;
          }

          .hero-feature,
          .service-body,
          .principle-card {
            padding: 24px;
          }

          .trust-strip {
            grid-template-columns: 1fr;
          }

          .trust-item {
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 22px 24px;
          }

          .trust-item:last-child {
            border-bottom: 0;
          }

          .section-intro {
            margin-bottom: 40px;
          }

          .services-grid,
          .principles-grid {
            grid-template-columns: 1fr;
          }

          .service-image-wrap {
            aspect-ratio: 1.38;
          }

          .service-body h3 {
            font-size: 22px;
          }
        }
      `}</style>
    </main>
  );
}
