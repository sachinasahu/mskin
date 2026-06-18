import Image from "next/image";

export default function AboutPage() {
  return (
    <div style={{ background: "var(--pearl)", minHeight: "100vh", paddingTop: "120px" }}>
      {/* Hero Section */}
      <section style={{ padding: "0 72px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }} className="reveal is-visible">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Our Clinic</span>
            <h1 className="display-heading philosophy-heading">
              About <em style={{ color: "var(--copper)" }}>Dr. Manoj's Clinic</em>
            </h1>
            <p className="philosophy-desc" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Dedicated to providing world-class dermatological care with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section style={{ background: "var(--white)", padding: "100px 72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            {/* Doctor Image */}
            <div className="reveal is-visible" style={{ position: "relative", minHeight: "500px", overflow: "hidden", background: "#C4B8B0", borderRadius: "4px" }}>
              <img src="/images/doPic.jpg" alt="Dr. Manoj Kumar Nayak" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.05) brightness(0.95)" }} />
            </div>

            {/* Doctor Info */}
            <div className="reveal is-visible" style={{ display: "flex", flexDirection: "column" }}>
              <h2 className="display-heading doctor-name" style={{ marginBottom: "6px" }}>
                Dr. Manoj Kumar Nayak
              </h2>
              <p className="doctor-credential-tag">
                Asst. Prof. IMS & Sum Hospital | MBBS, MD Dermatology (AIIMS)
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                <p className="doctor-bio" style={{ marginBottom: "0", maxWidth: "100%" }}>
                  Dr. Manoj Kumar Nayak is an experienced dermatologist focused on evidence-based treatments and personalized care to help patients achieve healthy, beautiful skin.
                </p>
                <p className="doctor-bio" style={{ marginBottom: "0", maxWidth: "100%" }}>
                  Ex-Senior Resident at AIIMS Bhubaneswar and trained at AIIMS, Dr. Nayak specializes in medical, surgical, and cosmetic dermatology.
                </p>
              </div>

              <div style={{ marginBottom: "36px" }}>
                <h3 className="pillar-title" style={{ fontSize: "20px" }}>
                  Credentials & Education
                </h3>
                <ul className="credential-list" style={{ marginBottom: "0" }}>
                  <li><span className="cred-dot"></span>Assistant Professor, IMS & Sum Hospital</li>
                  <li><span className="cred-dot"></span>MBBS, MD Dermatology (AIIMS)</li>
                  <li><span className="cred-dot"></span>Ex-Senior Resident, AIIMS Bhubaneswar</li>
                  <li><span className="cred-dot"></span>Registered Medical Practitioner (Regn. No. 28352)</li>
                </ul>
              </div>

              <div>
                <h3 className="pillar-title" style={{ fontSize: "20px", marginBottom: "16px" }}>
                  Specializations
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["Acne Treatment", "Anti-Aging", "Laser Therapy", "Skin Cancer", "Cosmetic Dermatology", "Pediatric Dermatology"].map((spec, index) => (
                    <span
                      key={index}
                      style={{ padding: "8px 16px", background: "var(--sage-tint)", color: "var(--forest)", borderRadius: "3px", fontSize: "13px", fontWeight: 500 }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section style={{ padding: "100px 72px", background: "var(--sage-tint)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }} className="reveal is-visible">
            <h2 className="display-heading philosophy-heading">
              Our Mission & <em>Values</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
            <div className="reveal is-visible" style={{ background: "var(--white)", padding: "40px", borderRadius: "4px", textAlign: "center", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>🎯</div>
              <h3 className="pillar-title" style={{ fontSize: "24px", marginBottom: "12px", textAlign: "center" }}>
                Excellence
              </h3>
              <p className="philosophy-desc" style={{ textAlign: "center" }}>
                Committed to providing the highest standard of dermatological care using the latest research and technology.
              </p>
            </div>

            <div className="reveal is-visible" style={{ background: "var(--white)", padding: "40px", borderRadius: "4px", textAlign: "center", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>💚</div>
              <h3 className="pillar-title" style={{ fontSize: "24px", marginBottom: "12px", textAlign: "center" }}>
                Compassion
              </h3>
              <p className="philosophy-desc" style={{ textAlign: "center" }}>
                Every patient deserves personalized attention and care in a welcoming, comfortable environment.
              </p>
            </div>

            <div className="reveal is-visible" style={{ background: "var(--white)", padding: "40px", borderRadius: "4px", textAlign: "center", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>🔬</div>
              <h3 className="pillar-title" style={{ fontSize: "24px", marginBottom: "12px", textAlign: "center" }}>
                Innovation
              </h3>
              <p className="philosophy-desc" style={{ textAlign: "center" }}>
                Embracing cutting-edge treatments and AI-powered diagnostics for better patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
