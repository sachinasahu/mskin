'use client';

import Link from 'next/link';

export default function ServicesPage() {
  const clinicServices = [
    {
      id: 1,
      name: "Acne Treatment",
      description: "Comprehensive acne treatment solutions including laser therapy, chemical peels, and advanced dermatological procedures.",
      icon: "🔬",
      treatments: ["Laser Treatment", "Chemical Peels", "Extraction", "Medication"],
      image: "/images/Acne_Treatment.png"
    },
    {
      id: 2,
      name: "Anti-Aging Treatments",
      description: "Advanced anti-aging procedures to reduce wrinkles, fine lines, and restore youthful skin appearance.",
      icon: "💆",
      treatments: ["Botox", "Dermal Fillers", "Microdermabrasion", "Laser Resurfacing"],
      image: "/images/Anti_Aging_Treatments.png"
    },
    {
      id: 3,
      name: "Hair Loss Treatment",
      description: "Specialized hair restoration and loss prevention treatments tailored to your hair type and condition.",
      icon: "💇",
      treatments: ["PRP Therapy", "Minoxidil", "Hair Transplant", "Laser Therapy"],
      image: "/images/hair_treatment.png"
    },
    {
      id: 4,
      name: "Pigmentation & Brightening",
      description: "Treat dark spots, melasma, and uneven skin tone with our advanced pigmentation correction services.",
      icon: "✨",
      treatments: ["Laser Therapy", "Chemical Peels", "Microdermabrasion", "Topical Treatments"],
      image: "/images/Pigmentation.png"
    },
    {
      id: 5,
      name: "Skin Rejuvenation",
      description: "Non-invasive and minimally invasive procedures to rejuvenate and refresh your skin's natural radiance.",
      icon: "🌟",
      treatments: ["Facial", "HydraFacial", "Microneedling", "Chemical Peel"],
      image: "/images/Skin_Rejuvenation.png"
    },
    {
      id: 6,
      name: "Dermatological Surgery",
      description: "Specialized surgical procedures for moles, warts, cysts, and other skin conditions with minimal scarring.",
      icon: "⚕️",
      treatments: ["Mole Removal", "Wart Removal", "Cyst Extraction", "Scar Revision"],
      image: "/images/Dermatological.png"
    },
  ];

  return (
    <div style={{ background: "var(--pearl)", minHeight: "100vh", paddingTop: "120px" }}>
      {/* Hero Section */}
      <section style={{ padding: "0 72px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }} className="reveal is-visible">
            <span className="eyebrow" style={{ justifyContent: "center" }}>What We Do</span>
            <h1 className="display-heading philosophy-heading">
              Our <em style={{ color: "var(--copper)" }}>Services</em>
            </h1>
            <p className="philosophy-desc" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Comprehensive dermatological and aesthetic treatments tailored to meet your unique skin and hair needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: "var(--white)", padding: "100px 72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
            {clinicServices.map((service) => (
              <div key={service.id} className="reveal is-visible" style={{ border: "1px solid var(--border)", borderRadius: "4px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                {/* Image Container */}
                <div style={{ width: "100%", height: "240px", overflow: "hidden", background: "var(--sage-tint)" }}>
                  <img 
                    src={service.image} 
                    alt={service.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "28px" }}>{service.icon}</span>
                    <h3 className="pillar-title" style={{ marginBottom: "0", fontSize: "22px" }}>
                      {service.name}
                    </h3>
                  </div>

                  <p className="philosophy-desc" style={{ marginBottom: "24px" }}>
                    {service.description}
                  </p>

                  {/* Treatments List */}
                  <div style={{ marginBottom: "32px", flexGrow: 1 }}>
                    <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--mist)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Available Treatments:</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {service.treatments.map((treatment, idx) => (
                        <span 
                          key={idx}
                          style={{ padding: "6px 12px", background: "var(--sage-tint)", color: "var(--forest)", borderRadius: "3px", fontSize: "12px", fontWeight: 500 }}
                        >
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href="/appointments"
                    className="btn-copper"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: "100px 72px", background: "var(--sage-tint)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }} className="reveal is-visible">
            <h2 className="display-heading philosophy-heading">
              Why Choose <em>Our Services?</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            <div className="reveal is-visible" style={{ padding: "36px", background: "var(--white)", borderRadius: "4px", border: "1px solid var(--border)" }}>
              <h3 className="pillar-title" style={{ fontSize: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span>👨‍⚕️</span> Expert Consultation
              </h3>
              <p className="philosophy-desc">
                Personalized treatment plans designed by experienced dermatologists based on your specific skin condition and goals.
              </p>
            </div>

            <div className="reveal is-visible" style={{ padding: "36px", background: "var(--white)", borderRadius: "4px", border: "1px solid var(--border)" }}>
              <h3 className="pillar-title" style={{ fontSize: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span>🏥</span> Advanced Technology
              </h3>
              <p className="philosophy-desc">
                State-of-the-art equipment and cutting-edge techniques for safe, effective and quick results.
              </p>
            </div>

            <div className="reveal is-visible" style={{ padding: "36px", background: "var(--white)", borderRadius: "4px", border: "1px solid var(--border)" }}>
              <h3 className="pillar-title" style={{ fontSize: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span>✨</span> Quality Results
              </h3>
              <p className="philosophy-desc">
                Proven track record of delivering visible improvements and transformations with natural-looking results.
              </p>
            </div>

            <div className="reveal is-visible" style={{ padding: "36px", background: "var(--white)", borderRadius: "4px", border: "1px solid var(--border)" }}>
              <h3 className="pillar-title" style={{ fontSize: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span>❤️</span> Patient Care
              </h3>
              <p className="philosophy-desc">
                Compassionate care with attention to your comfort, concerns, and complete satisfaction throughout your treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "100px 72px", background: "var(--forest)", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }} className="reveal is-visible">
          <h2 className="display-heading cta-heading" style={{ justifyContent: "center" }}>
            Ready to Transform Your Skin?
          </h2>
          <p className="cta-sub" style={{ marginBottom: "32px", fontSize: "18px" }}>
            Schedule your consultation today and take the first step toward healthier, radiant skin.
          </p>
          <Link 
            href="/appointments"
            className="btn-copper"
            style={{ fontSize: "16px", padding: "18px 36px" }}
          >
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
