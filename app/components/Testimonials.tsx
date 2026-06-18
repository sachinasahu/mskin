"use client";

import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "A. Sharma",
      role: "Acne Treatment Patient",
      quote:
        "Professional, attentive, and results-driven. My acne cleared within weeks and my confidence is back.",
      rating: 5,
      initials: "AS",
    },
    {
      name: "S. Patel",
      role: "Sensitive Skin Care",
      quote:
        "The personalized routine and gentle treatments transformed my sensitive skin. Highly recommend!",
      rating: 5,
      initials: "SP",
    },
    {
      name: "R. Gupta",
      role: "Hair Loss Treatment",
      quote:
        "Clear guidance, modern techniques, and a caring approach. I felt supported at every step.",
      rating: 5,
      initials: "RG",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-white dark:from-zinc-900 dark:via-emerald-900/10 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
            <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
              Testimonials
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Patients
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Real experiences from people who have transformed their skin and
            regained their confidence
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-100/0 dark:from-emerald-900/0 dark:to-emerald-800/0 group-hover:from-emerald-50 group-hover:to-emerald-100 dark:group-hover:from-emerald-900/20 dark:group-hover:to-emerald-800/20 rounded-2xl transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Avatar */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="text-3xl text-emerald-600/20 dark:text-emerald-400/20 mb-2">
                  "
                </div>

                {/* Quote Text */}
                <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed italic">
                  {t.quote}
                </p>

                {/* Patient Info */}
                <div className="border-t border-gray-200 dark:border-zinc-700 pt-4">
                  <p className="font-semibold text-zinc-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Thousands of Happy Patients
          </h3>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Start your transformation journey today. Experience the difference
            professional dermatology care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book Consultation
            </a>
            <a
              href="https://wa.me/917657015719"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
