"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Acne",
    "Eczema",
    "Psoriasis",
    "Rosacea",
    "Skin Cancer",
    "Other",
  ];

  const conditions = [
    {
      name: "Acne Vulgaris",
      category: "Acne",
      severity: "Moderate",
      description:
        "Common inflammatory skin condition affecting hair follicles and sebaceous glands, characterized by comedones, papules, pustules, and sometimes nodules.",
      symptoms: ["Blackheads", "Whiteheads", "Inflamed bumps", "Scarring"],
      treatment: [
        "Topical retinoids",
        "Benzoyl peroxide",
        "Antibiotics",
        "Isotretinoin for severe cases",
      ],
    },
    {
      name: "Atopic Dermatitis (Eczema)",
      category: "Eczema",
      severity: "Mild to Severe",
      description:
        "Chronic inflammatory skin condition causing red, itchy, and dry patches, often appearing in flexural areas.",
      symptoms: [
        "Intense itching",
        "Red patches",
        "Dry, scaly skin",
        "Thickened skin",
      ],
      treatment: [
        "Moisturizers",
        "Topical corticosteroids",
        "Immunomodulators",
        "Avoiding triggers",
      ],
    },
    {
      name: "Plaque Psoriasis",
      category: "Psoriasis",
      severity: "Chronic",
      description:
        "Autoimmune condition causing rapid skin cell buildup, resulting in thick, scaly plaques with silvery-white scales.",
      symptoms: [
        "Red patches with scales",
        "Dry, cracked skin",
        "Itching or burning",
        "Nail changes",
      ],
      treatment: [
        "Topical treatments",
        "Phototherapy",
        "Systemic medications",
        "Biologics",
      ],
    },
    {
      name: "Rosacea",
      category: "Rosacea",
      severity: "Chronic",
      description:
        "Chronic inflammatory condition primarily affecting facial skin, causing redness, visible blood vessels, and sometimes acne-like bumps.",
      symptoms: [
        "Facial redness",
        "Visible blood vessels",
        "Bumps and pimples",
        "Eye irritation",
      ],
      treatment: [
        "Topical metronidazole",
        "Oral antibiotics",
        "Laser therapy",
        "Trigger avoidance",
      ],
    },
    {
      name: "Basal Cell Carcinoma",
      category: "Skin Cancer",
      severity: "Serious",
      description:
        "Most common type of skin cancer, typically appearing as a pearly or waxy bump, often on sun-exposed areas.",
      symptoms: [
        "Pearly bump",
        "Flat, flesh-colored lesion",
        "Bleeding or scabbing",
        "Slow growth",
      ],
      treatment: [
        "Surgical excision",
        "Mohs surgery",
        "Radiation",
        "Topical treatments",
      ],
    },
    {
      name: "Melanoma",
      category: "Skin Cancer",
      severity: "Critical",
      description:
        "Most dangerous form of skin cancer developing in melanocytes. Early detection is crucial for successful treatment.",
      symptoms: [
        "Asymmetrical mole",
        "Irregular borders",
        "Multiple colors",
        "Diameter > 6mm",
        "Evolving appearance",
      ],
      treatment: [
        "Surgical removal",
        "Immunotherapy",
        "Targeted therapy",
        "Chemotherapy",
      ],
    },
    {
      name: "Vitiligo",
      category: "Other",
      severity: "Chronic",
      description:
        "Autoimmune condition causing loss of skin pigmentation in patches due to destruction of melanocytes.",
      symptoms: [
        "White patches",
        "Premature graying",
        "Loss of color in mouth",
        "Symmetrical patterns",
      ],
      treatment: [
        "Topical corticosteroids",
        "Phototherapy",
        "Skin grafting",
        "Depigmentation",
      ],
    },
    {
      name: "Seborrheic Dermatitis",
      category: "Other",
      severity: "Mild",
      description:
        "Common inflammatory condition affecting oily areas of the body, causing scaly, flaky, itchy red skin.",
      symptoms: ["Scaly patches", "Red skin", "Dandruff", "Itching"],
      treatment: [
        "Medicated shampoos",
        "Antifungal creams",
        "Corticosteroids",
        "Light therapy",
      ],
    },
  ];

  const imageMap: Record<string, string> = {
    Acne: "/images/gallery/acne.svg",
    Eczema: "/images/gallery/eczema.svg",
    Psoriasis: "/images/gallery/psoriasis.svg",
    Rosacea: "/images/gallery/rosacea.svg",
    "Skin Cancer": "/images/gallery/skin-cancer.svg",
    Other: "/images/gallery/other.svg",
  };

  const filteredConditions =
    selectedCategory === "All"
      ? conditions
      : conditions.filter((c) => c.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="gallery-page min-h-screen bg-[var(--pearl)] pt-[72px]">
      {/* Hero Section */}
      <section className="px-4 pb-9 pt-9 sm:px-6 sm:pb-9 sm:pt-9 lg:px-8 lg:pb-10 lg:pt-0">
        <div className="container">
          <div className="reveal is-visible mb-9 text-center sm:mb-10">
            <span className="eyebrow justify-center">
              Educational Reference
            </span>
            <h1 className="display-heading philosophy-heading">
              Skin Conditions <em className="text-[var(--copper)]">Gallery</em>
            </h1>
            <p className="philosophy-desc mx-auto max-w-[600px]">
              Educational reference for common dermatological conditions,
              symptoms, and treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="border-y border-[var(--border)] bg-[var(--sage-tint)] px-4 py-[52px] sm:px-6 sm:py-[52px] lg:px-8 lg:py-8">
        <div className="container flex items-start gap-4">
          <span className="text-2xl">⚠️</span>
          <div>
            <h3 className="pillar-title mb-2 text-lg text-[var(--forest-mid)]">
              Medical Disclaimer
            </h3>
            <p className="philosophy-desc m-0 text-sm text-[var(--smoke)]">
              This gallery is for educational purposes only. If you notice any
              unusual changes in your skin, please consult a board-certified
              dermatologist for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-[var(--border)] bg-[var(--white)] px-4 py-[52px] sm:px-6 sm:py-[52px] lg:px-8 lg:py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-[4px] border-none px-6 py-2.5 font-[var(--font-dm-sans)] text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--forest)] text-[var(--white)]"
                      : "bg-[var(--sage-tint)] text-[var(--forest-mid)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[var(--pearl)] px-4 py-[52px] sm:px-6 sm:py-[52px] lg:px-8 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
            {filteredConditions.map((condition, idx) => (
              <div
                key={idx}
                className="reveal is-visible flex flex-col overflow-hidden rounded-[4px] border border-[var(--border)] bg-[var(--white)]"
              >
                {/* Image */}
                <div className="relative h-[220px] overflow-hidden bg-[var(--sage-tint)] sm:h-60">
                  <Image
                    src={
                      imageMap[condition.category] ||
                      "/images/gallery/other.svg"
                    }
                    alt={`${condition.name} illustrative image`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-grow flex-col p-6 sm:p-8">
                  <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="pillar-title mb-0 text-xl">
                        {condition.name}
                      </h3>
                      <span className="whitespace-nowrap rounded-[3px] bg-[var(--sage-tint)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--forest)]">
                        {condition.category}
                      </span>
                    </div>
                    <p className="mb-3 font-[var(--font-space)] text-[13px] uppercase tracking-wider text-[var(--mist)]">
                      Severity: {condition.severity}
                    </p>
                    <p className="philosophy-desc text-sm leading-[1.6]">
                      {condition.description}
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="mb-2 text-sm font-semibold text-[var(--ink)]">
                      Common Symptoms:
                    </h4>
                    <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                      {condition.symptoms.map((symptom, i) => (
                        <li
                          key={i}
                          className="flex items-start text-[13.5px] text-[var(--smoke)]"
                        >
                          <span className="mr-2 text-[var(--copper)]">•</span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-grow">
                    <h4 className="mb-2 text-sm font-semibold text-[var(--ink)]">
                      Treatment Options:
                    </h4>
                    <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                      {condition.treatment.map((treat, i) => (
                        <li
                          key={i}
                          className="flex items-start text-[13.5px] text-[var(--smoke)]"
                        >
                          <span className="mr-2 font-bold text-[var(--forest)]">
                            ✓
                          </span>
                          {treat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--forest)] px-4 py-[52px] text-center sm:px-6 sm:py-[52px] lg:px-8 lg:py-[100px]">
        <div className="reveal is-visible mx-auto max-w-[800px]">
          <h2 className="display-heading cta-heading justify-center">
            Concerned About Your Skin?
          </h2>
          <p className="cta-sub mb-8 text-lg">
            Schedule a consultation with our expert dermatologist for
            personalized care.
          </p>
          <Link
            href="/appointments"
            className="btn-copper px-9 py-[18px] text-base"
          >
            Book Appointment
          </Link>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
