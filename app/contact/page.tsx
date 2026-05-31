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
    // In a real app, send data to backend
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-zinc-950 dark:to-emerald-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              Get in{" "}
              <span className="text-emerald-600 dark:text-emerald-500">
                Touch
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Ready to start your journey to healthier skin? Contact us today
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                  Visit Our Clinic
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  We are here to help you achieve your skin health goals. Reach
                  out to schedule a consultation or ask any questions you may
                  have.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Clinic Locations
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      <strong>Clinic No-1</strong>
                      <br />
                      Unit-4, Madhusudhan Nagar
                      <br />
                      Next to Truptee Restaurant
                      <br />
                      Bhubaneswar, Odisha 751001
                      <br />
                      <strong>Call:</strong> 7657015719
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-4">
                      <strong>Clinic No-2</strong>
                      <br />
                      Near Barracks High School
                      <br />
                      Berhampur, Ganjam, Odisha 760001
                      <br />
                      <strong>Call:</strong> 8093990134
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Primary: 7657015719
                      <br />
                      Secondary: 8093990134
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      drmanojsskinclinic@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <div className="text-3xl">🕐</div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Hours
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 3:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/917657015719"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/drmanojskinclinic?igsh=ODBhOGR5M3RuMWVx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Dr-Manojs-Skin-Clinic/61586769355453/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 dark:bg-black p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-lg">
                  ✓ Message sent successfully! We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-zinc-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-zinc-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-zinc-900 dark:text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-none text-zinc-900 dark:text-white"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-96 rounded-3xl overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="Dr Manoj's Skin Clinic Location"
          src="https://maps.google.com/maps?q=20.28376074462255,85.83487535145416&hl=en&z=17&output=embed"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
