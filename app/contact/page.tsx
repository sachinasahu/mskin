"use client";

import { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ background: "var(--pearl)", minHeight: "100vh", paddingTop: "120px" }}>
      <section style={{ padding: "0 72px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }} className="reveal is-visible">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Get in Touch</span>
            <h1 className="display-heading philosophy-heading">
              Contact <em style={{ color: "var(--copper)" }}>Our Clinic</em>
            </h1>
            <p className="philosophy-desc" style={{ maxWidth: "600px", margin: "0 auto" }}>
              We are here to help you achieve your skin health goals. Reach out to schedule a consultation or ask any questions you may have.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>
            {/* Contact Info */}
            <div className="reveal is-visible" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ background: "var(--white)", padding: "36px", border: "1px solid var(--border)", borderRadius: "4px" }}>
                <h3 className="pillar-title" style={{ fontSize: "20px" }}>📍 Clinic Locations</h3>
                <p className="philosophy-desc" style={{ marginBottom: "16px" }}>
                  <strong>Bhubaneswar Clinic</strong><br/>
                  Unit-4, Madhusudhan Nagar<br/>
                  Next to Truptee Restaurant<br/>
                  Odisha 751001
                </p>
                <p className="philosophy-desc">
                  <strong>Berhampur Clinic</strong><br/>
                  Near Barracks High School<br/>
                  Ganjam, Odisha 760001
                </p>
              </div>

              <div style={{ background: "var(--white)", padding: "36px", border: "1px solid var(--border)", borderRadius: "4px" }}>
                <h3 className="pillar-title" style={{ fontSize: "20px" }}>📞 Contact</h3>
                <p className="philosophy-desc">
                  Primary: +91 76570 15719<br/>
                  Email: drmanojsskinclinic@gmail.com
                </p>
              </div>

              <div style={{ background: "var(--white)", padding: "36px", border: "1px solid var(--border)", borderRadius: "4px" }}>
                <h3 className="pillar-title" style={{ fontSize: "20px" }}>🕐 Hours</h3>
                <p className="philosophy-desc">
                  Mon - Fri: 9:00 AM - 6:00 PM<br/>
                  Sat: 10:00 AM - 3:00 PM<br/>
                  Sun: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal is-visible" style={{ background: "var(--forest)", padding: "48px 40px", borderRadius: "4px" }}>
              <h2 className="display-heading" style={{ color: "var(--white)", fontSize: "32px", marginBottom: "24px" }}>
                Send Us a Message
              </h2>

              {submitted && (
                <div style={{ marginBottom: "24px", padding: "16px", background: "var(--sage-tint)", color: "var(--forest)", borderRadius: "4px", fontSize: "14px" }}>
                  ✓ Message sent successfully! We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", color: "var(--white)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px" }}>FULL NAME *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "14px 16px", background: "var(--forest-mid)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--white)", borderRadius: "3px", fontSize: "15px", outline: "none" }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "var(--white)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px" }}>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "14px 16px", background: "var(--forest-mid)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--white)", borderRadius: "3px", fontSize: "15px", outline: "none" }}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "var(--white)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px" }}>PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "14px 16px", background: "var(--forest-mid)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--white)", borderRadius: "3px", fontSize: "15px", outline: "none" }}
                    placeholder="+91"
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "var(--white)", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px" }}>MESSAGE *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    style={{ width: "100%", padding: "14px 16px", background: "var(--forest-mid)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--white)", borderRadius: "3px", fontSize: "15px", outline: "none", resize: "none" }}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="btn-copper" style={{ width: "100%", justifyContent: "center", marginTop: "12px", border: "none", cursor: "pointer" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ width: "100%", height: "400px" }}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="Dr Manoj's Skin Clinic Location"
          src="https://maps.google.com/maps?q=20.28376074462255,85.83487535145416&hl=en&z=17&output=embed"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ filter: "contrast(1.05) brightness(0.95)" }}
        ></iframe>
      </section>
    </div>
  );
}
