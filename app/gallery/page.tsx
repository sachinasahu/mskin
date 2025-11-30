"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Acne", "Eczema", "Psoriasis", "Rosacea", "Skin Cancer", "Other"];

  const conditions = [
    {
      name: "Acne Vulgaris",
      category: "Acne",
      severity: "Moderate",
      description: "Common inflammatory skin condition affecting hair follicles and sebaceous glands, characterized by comedones, papules, pustules, and sometimes nodules.",
      symptoms: ["Blackheads", "Whiteheads", "Inflamed bumps", "Scarring"],
      treatment: ["Topical retinoids", "Benzoyl peroxide", "Antibiotics", "Isotretinoin for severe cases"],
    },
    {
      name: "Atopic Dermatitis (Eczema)",
      category: "Eczema",
      severity: "Mild to Severe",
      description: "Chronic inflammatory skin condition causing red, itchy, and dry patches, often appearing in flexural areas.",
      symptoms: ["Intense itching", "Red patches", "Dry, scaly skin", "Thickened skin"],
      treatment: ["Moisturizers", "Topical corticosteroids", "Immunomodulators", "Avoiding triggers"],
    },
    {
      name: "Plaque Psoriasis",
      category: "Psoriasis",
      severity: "Chronic",
      description: "Autoimmune condition causing rapid skin cell buildup, resulting in thick, scaly plaques with silvery-white scales.",
      symptoms: ["Red patches with scales", "Dry, cracked skin", "Itching or burning", "Nail changes"],
      treatment: ["Topical treatments", "Phototherapy", "Systemic medications", "Biologics"],
    },
    {
      name: "Rosacea",
      category: "Rosacea",
      severity: "Chronic",
      description: "Chronic inflammatory condition primarily affecting facial skin, causing redness, visible blood vessels, and sometimes acne-like bumps.",
      symptoms: ["Facial redness", "Visible blood vessels", "Bumps and pimples", "Eye irritation"],
      treatment: ["Topical metronidazole", "Oral antibiotics", "Laser therapy", "Trigger avoidance"],
    },
    {
      name: "Basal Cell Carcinoma",
      category: "Skin Cancer",
      severity: "Serious",
      description: "Most common type of skin cancer, typically appearing as a pearly or waxy bump, often on sun-exposed areas.",
      symptoms: ["Pearly bump", "Flat, flesh-colored lesion", "Bleeding or scabbing", "Slow growth"],
      treatment: ["Surgical excision", "Mohs surgery", "Radiation", "Topical treatments"],
    },
    {
      name: "Melanoma",
      category: "Skin Cancer",
      severity: "Critical",
      description: "Most dangerous form of skin cancer developing in melanocytes. Early detection is crucial for successful treatment.",
      symptoms: ["Asymmetrical mole", "Irregular borders", "Multiple colors", "Diameter > 6mm", "Evolving appearance"],
      treatment: ["Surgical removal", "Immunotherapy", "Targeted therapy", "Chemotherapy"],
    },
    {
      name: "Vitiligo",
      category: "Other",
      severity: "Chronic",
      description: "Autoimmune condition causing loss of skin pigmentation in patches due to destruction of melanocytes.",
      symptoms: ["White patches", "Premature graying", "Loss of color in mouth", "Symmetrical patterns"],
      treatment: ["Topical corticosteroids", "Phototherapy", "Skin grafting", "Depigmentation"],
    },
    {
      name: "Seborrheic Dermatitis",
      category: "Other",
      severity: "Mild",
      description: "Common inflammatory condition affecting oily areas of the body, causing scaly, flaky, itchy red skin.",
      symptoms: ["Scaly patches", "Red skin", "Dandruff", "Itching"],
      treatment: ["Medicated shampoos", "Antifungal creams", "Corticosteroids", "Light therapy"],
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-zinc-950 dark:to-emerald-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              Skin Conditions <span className="text-emerald-600 dark:text-emerald-500">Gallery</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Educational reference for common dermatological conditions, symptoms, and treatments
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-amber-50 dark:bg-amber-900/20 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-semibold text-amber-900 dark:text-amber-300 mb-1">
                Medical Disclaimer
              </h3>
              <p className="text-sm text-amber-800 dark:text-amber-400">
                This gallery is for educational purposes only. If you notice any unusual changes in your skin, 
                please consult a board-certified dermatologist for proper diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredConditions.map((condition, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={imageMap[condition.category] || "/images/gallery/other.svg"}
                    alt={`${condition.name} illustrative image`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {condition.name}
                      </h3>
                      <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium">
                        {condition.category}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">
                      Severity: {condition.severity}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      {condition.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-2 text-sm">
                      Common Symptoms:
                    </h4>
                    <ul className="space-y-1">
                      {condition.symptoms.map((symptom, i) => (
                        <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-2 text-sm">
                      Treatment Options:
                    </h4>
                    <ul className="space-y-1">
                      {condition.treatment.map((treat, i) => (
                        <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
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
      <section className="py-16 bg-emerald-600 dark:bg-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Concerned About Your Skin?
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Schedule a consultation with our expert dermatologist for personalized care
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold hover:bg-zinc-100 transition-all"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  );
}
