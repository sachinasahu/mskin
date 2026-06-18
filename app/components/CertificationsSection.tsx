"use client";

import {
  FaBriefcaseMedical,
  FaUserMd,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

export default function CertificationsSection() {
  const certifications = [
    {
      icon: FaUserMd,
      title: "MBBS",
      subtitle: "Medical Degree",
      description: "Bachelor of Medicine & Surgery",
    },
    {
      icon: FaBriefcaseMedical,
      title: "MD Dermatology",
      subtitle: "Board Certification",
      description: "Dermatology & Venereology specialization",
    },
    {
      icon: FaAward,
      title: "Advanced Cosmetic",
      subtitle: "Professional Training",
      description: "Advanced cosmetic dermatology procedures",
    },
    {
      icon: FaCertificate,
      title: "Laser & Hair",
      subtitle: "Expert Training",
      description: "Laser treatments & hair restoration",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
            Qualifications & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Dr. Manoj's Credentials
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Board-certified dermatologist with extensive training in advanced
            skin treatments and laser technology
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-zinc-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                  {cert.subtitle}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Professional Memberships
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-zinc-700 dark:text-zinc-300">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              Indian Association of Dermatologists
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              Dermatology Council India
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              Medical Council of Odisha
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              International Laser Association
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
