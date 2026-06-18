"use client";

import Link from "next/link";
import { FaSpa, FaViruses, FaLightbulb, FaHeartbeat } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: FaSpa,
      color: "emerald",
      title: "Skin Treatments",
      description: "Expert care for all skin conditions",
      items: [
        "Pimples & Acne Scar",
        "Skin Pigment Removal",
        "Vitiligo & Psoriasis",
        "Eczema & Allergy",
        "Nail Surgery",
      ],
    },
    {
      icon: FaViruses,
      color: "blue",
      title: "Hair Treatments",
      description: "Restore and rejuvenate your hair",
      items: [
        "Hair Loss & Hair Fall",
        "Dandruff",
        "GFC & PRP for Hair Regrowth",
        "Mesotherapy",
        "Hair Transplant",
        "Microneedling",
      ],
    },
    {
      icon: FaLightbulb,
      color: "pink",
      title: "Laser & Cosmetic",
      description: "Advanced cosmetic treatments",
      items: [
        "Unwanted Hair Removal",
        "Tattoo Removal",
        "Mole / Wart / Tag Removal",
        "Skin Rejuvenation & Glow",
        "Acne Scar Treatment",
        "Glutathione Injection",
        "Whole Body Brightness",
      ],
    },
    {
      icon: FaHeartbeat,
      color: "red",
      title: "Sexual Health",
      description: "Confidential health consultation",
      items: ["Advice & Treatment of Sexually Transmitted Diseases"],
    },
  ];

  const colorClasses = {
    emerald: {
      bg: "bg-emerald-100 dark:bg-emerald-900/20",
      icon: "text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-200 dark:border-emerald-700/50",
      hover: "hover:shadow-lg hover:shadow-emerald-500/20",
    },
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/20",
      icon: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-700/50",
      hover: "hover:shadow-lg hover:shadow-blue-500/20",
    },
    pink: {
      bg: "bg-pink-100 dark:bg-pink-900/20",
      icon: "text-pink-600 dark:text-pink-400",
      border: "border-pink-200 dark:border-pink-700/50",
      hover: "hover:shadow-lg hover:shadow-pink-500/20",
    },
    red: {
      bg: "bg-red-100 dark:bg-red-900/20",
      icon: "text-red-600 dark:text-red-400",
      border: "border-red-200 dark:border-red-700/50",
      hover: "hover:shadow-lg hover:shadow-red-500/20",
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-white dark:from-zinc-900 dark:via-emerald-900/10 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
            <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
              Comprehensive Care
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
            Our Specialized{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Comprehensive dermatology, hair care, and cosmetic laser services
            tailored for your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const colorClass =
              colorClasses[service.color as keyof typeof colorClasses];
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className={`group relative p-8 bg-white dark:bg-zinc-800/50 rounded-2xl border border-gray-200 dark:border-zinc-700 ${colorClass.hover} transition-all duration-300 overflow-hidden`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 ${colorClass.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${colorClass.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${colorClass.icon}`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    {service.description}
                  </p>

                  {/* Service List */}
                  <ul className="space-y-2 mb-6">
                    {service.items.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <span
                          className={`w-1.5 h-1.5 ${colorClass.icon} rounded-full mt-1.5 flex-shrink-0`}
                        ></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${colorClass.icon} hover:gap-3 transition-all`}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Skin?
          </h3>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Manoj to discuss the best treatment
            plan for your needs.
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
            Book Your Appointment Now
          </Link>
        </div>
      </div>
    </section>
  );
}
