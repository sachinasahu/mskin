"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div style={{ background: "var(--pearl)", minHeight: "100vh", paddingTop: "120px" }}>
      {/* Hero Section */}
      <section style={{ padding: "0 72px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }} className="reveal is-visible">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Educational Reference</span>
            <h1 className="display-heading philosophy-heading">
              Skin Conditions <em style={{ color: "var(--copper)" }}>Gallery</em>
            </h1>
            <p className="philosophy-desc" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Educational reference for common dermatological conditions, symptoms, and treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section style={{ padding: "32px 72px", background: "var(--sage-tint)", borderBottom: "1px solid var(--border)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "24px" }}>⚠️</span>
          <div>
            <h3 className="pillar-title" style={{ fontSize: "18px", marginBottom: "8px", color: "var(--forest-mid)" }}>
              Medical Disclaimer
            </h3>
            <p className="philosophy-desc" style={{ fontSize: "14px", color: "var(--smoke)", margin: 0 }}>
              This gallery is for educational purposes only. If you notice any unusual changes in your skin, 
              please consult a board-certified dermatologist for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: "32px 72px", background: "var(--white)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "4px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  border: "none",
                  transition: "all 0.2s",
                  background: selectedCategory === cat ? "var(--forest)" : "var(--sage-tint)",
                  color: selectedCategory === cat ? "var(--white)" : "var(--forest-mid)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: "80px 72px", background: "var(--pearl)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
            {filteredConditions.map((condition, idx) => (
              <div
                key={idx}
                className="reveal is-visible"
                style={{ background: "var(--white)", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border)", display: "flex", flexDirection: "column" }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: "240px", background: "var(--sage-tint)", overflow: "hidden" }}>
                  <Image
                    src={imageMap[condition.category] || "/images/gallery/other.svg"}
                    alt={`${condition.name} illustrative image`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ marginBottom: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                      <h3 className="pillar-title" style={{ fontSize: "20px", marginBottom: 0 }}>
                        {condition.name}
                      </h3>
                      <span style={{ padding: "4px 12px", background: "var(--sage-tint)", color: "var(--forest)", borderRadius: "3px", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                        {condition.category}
                      </span>
                    </div>
                    <p style={{ fontSize: "13px", color: "var(--mist)", marginBottom: "12px", fontFamily: "var(--font-space), sans-serif", textTransform: "uppercase", letterSpacing: "1px" }}>
                      Severity: {condition.severity}
                    </p>
                    <p className="philosophy-desc" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                      {condition.description}
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ fontSize: "14px", fontWeight: 600, color: "var(--ink)", marginBottom: "8px" }}>
                      Common Symptoms:
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                      {condition.symptoms.map((symptom, i) => (
                        <li key={i} style={{ fontSize: "13.5px", color: "var(--smoke)", display: "flex", alignItems: "flex-start" }}>
                          <span style={{ color: "var(--copper)", marginRight: "8px" }}>•</span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ flexGrow: 1 }}>
                    <h4 style={{ fontSize: "14px", fontWeight: 600, color: "var(--ink)", marginBottom: "8px" }}>
                      Treatment Options:
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                      {condition.treatment.map((treat, i) => (
                        <li key={i} style={{ fontSize: "13.5px", color: "var(--smoke)", display: "flex", alignItems: "flex-start" }}>
                          <span style={{ color: "var(--forest)", marginRight: "8px", fontWeight: "bold" }}>✓</span>
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
      <section style={{ padding: "100px 72px", background: "var(--forest)", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }} className="reveal is-visible">
          <h2 className="display-heading cta-heading" style={{ justifyContent: "center" }}>
            Concerned About Your Skin?
          </h2>
          <p className="cta-sub" style={{ marginBottom: "32px", fontSize: "18px" }}>
            Schedule a consultation with our expert dermatologist for personalized care.
          </p>
          <Link 
            href="/appointments"
            className="btn-copper"
            style={{ fontSize: "16px", padding: "18px 36px" }}
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
