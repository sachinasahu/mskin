"use client";

import React, { useState, useEffect, useRef } from "react";

const treatments = [
  "Acne Treatment",
  "Anti-Aging / Botox",
  "Pigmentation Fade",
  "Hair Loss / PRP",
  "Skin Rejuvenation",
  "Cosmetic Procedures",
  "Eczema / Psoriasis",
  "General Dermatology",
  "Other",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  newPatient: string;
}

export default function AppointmentFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    treatment: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    newPatient: "yes",
  });

  useEffect(() => {
    const section = sectionRef.current;
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
      { threshold: 0.05 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock submit handler — connect to backend here
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactItems = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      label: "Address",
      value: "12, Shastri Nagar, Mumbai — 400 053",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
          />
        </svg>
      ),
      label: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      label: "Email",
      value: "hello@mskinclinic.in",
    },
  ];

  const hours = [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-pad-lg bg-background px-5 md:px-8 lg:px-12"
      aria-labelledby="appointment-form-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ── Left Info Panel ── */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div className="scroll-reveal">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-3 block">
                Clinic Information
              </span>
              <h2
                id="appointment-form-heading"
                className="text-section-title font-serif font-light text-foreground mb-8"
              >
                We&apos;re here to
                <br />
                <span className="italic text-accent">help you</span>
              </h2>

              {/* Contact items */}
              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-secondary border border-border hover:border-primary/30 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="scroll-reveal stagger-1">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
                Clinic Hours
              </h3>
              <div className="divide-y divide-border">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between py-4"
                  >
                    <span className="text-sm text-muted-foreground">
                      {h.day}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        h.time === "Closed"
                          ? "text-muted-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reassurance panel */}
            <div className="scroll-reveal stagger-2 bg-primary/5 border border-primary/20 rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-bold text-primary">
                  Your visit is safe
                </span>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Board-certified dermatologist",
                  "Clinically proven treatments only",
                  "Personalized care — no generic plans",
                  "Transparent pricing, no hidden fees",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-xs text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right Form Panel ── */}
          <div className="lg:col-span-3 scroll-reveal stagger-1">
            <div className="bg-card border border-border rounded-[2rem] p-8 md:p-10 shadow-teal-sm">
              {submitted ? (
                /* Success State */
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-foreground mb-3">
                    Appointment Requested!
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
                    Thank you, <strong>{formData.firstName}</strong>. We&apos;ve
                    received your request and will confirm your appointment
                    within 2 hours via phone or email.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        phone: "",
                        email: "",
                        treatment: "",
                        preferredDate: "",
                        preferredTime: "",
                        message: "",
                        newPatient: "yes",
                      });
                    }}
                    className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/70 transition-colors"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Request an Appointment
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Fill in your details and we&apos;ll confirm within 2
                      hours.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="First Name" required>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Priya"
                          required
                          className="form-input"
                        />
                      </FormField>
                      <FormField label="Last Name" required>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Sharma"
                          required
                          className="form-input"
                        />
                      </FormField>
                    </div>

                    {/* Contact row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Phone Number" required>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          required
                          className="form-input"
                        />
                      </FormField>
                      <FormField label="Email Address">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="priya@email.com"
                          className="form-input"
                        />
                      </FormField>
                    </div>

                    {/* Treatment */}
                    <FormField label="Treatment / Concern" required>
                      <select
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select a treatment…</option>
                        {treatments.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    {/* Date + Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Preferred Date" required>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          className="form-input"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </FormField>
                      <FormField label="Preferred Time">
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Any time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </FormField>
                    </div>

                    {/* New patient */}
                    <FormField label="Are you a new patient?">
                      <div className="flex gap-6 pt-1">
                        {["yes", "no"].map((val) => (
                          <label
                            key={val}
                            className="flex items-center gap-2.5 cursor-pointer group"
                          >
                            <div className="relative">
                              <input
                                type="radio"
                                name="newPatient"
                                value={val}
                                checked={formData.newPatient === val}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                                  formData.newPatient === val
                                    ? "border-primary bg-primary"
                                    : "border-border bg-background"
                                }`}
                              >
                                {formData.newPatient === val && (
                                  <div className="w-2 h-2 rounded-full bg-white" />
                                )}
                              </div>
                            </div>
                            <span className="text-sm font-medium text-foreground capitalize">
                              {val === "yes"
                                ? "Yes, new patient"
                                : "No, returning patient"}
                            </span>
                          </label>
                        ))}
                      </div>
                    </FormField>

                    {/* Message */}
                    <FormField label="Additional Notes">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your skin concern or any questions for Dr. Manoj…"
                        rows={4}
                        className="form-input resize-none"
                      />
                    </FormField>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-teal-md hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending Request…
                        </>
                      ) : (
                        <>
                          Request Appointment
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
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      By submitting, you agree to our{" "}
                      <a
                        href="#"
                        className="underline underline-offset-2 hover:text-foreground transition-colors"
                      >
                        Privacy Policy
                      </a>
                      . We&apos;ll confirm your appointment within 2 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-foreground uppercase tracking-widest">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
