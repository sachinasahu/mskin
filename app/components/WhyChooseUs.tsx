"use client";

import Link from "next/link";
import { FaAward, FaRobot, FaHandsHelping, FaHeart } from "react-icons/fa";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: FaAward,
      title: "Expert Dermatologist",
      description:
        "Board-certified specialists with 10+ years of proven experience in advanced dermatology",
      color: "emerald",
    },
    {
      icon: FaRobot,
      title: "Advanced Technology",
      description:
        "State-of-the-art equipment and latest treatment methods for optimal results",
      color: "blue",
    },
    {
      icon: FaHandsHelping,
      title: "Personalized Care",
      description:
        "Customized treatment plans tailored to your unique skin and hair needs",
      color: "pink",
    },
    {
      icon: FaHeart,
      title: "Patient Focused",
      description:
        "Compassionate care with emphasis on patient satisfaction and long-term results",
      color: "red",
    },
  ];

  const services = [
    {
      icon: "🩹",
      title: "Acne Treatment",
      description: "Safe and effective solutions for clear skin",
    },
    {
      icon: "💇",
      title: "Hair Loss Therapy",
      description: "Proven hair restoration treatments",
    },
    {
      icon: "✨",
      title: "Anti-Aging",
      description: "Advanced rejuvenation solutions",
    },
    {
      icon: "💪",
      title: "Skin Health",
      description: "Complete skincare programs",
    },
  ];

  const colorClasses = {
    emerald:
      "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    blue: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    pink: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
    red: "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400",
  };

  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
            <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
              Why Us
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Clinic?
            </span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            We combine expert care, advanced technology, and personalized
            attention to deliver exceptional results
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colorClass =
              colorClasses[benefit.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className="group p-8 bg-white dark:bg-zinc-800/50 rounded-2xl border border-gray-200 dark:border-zinc-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${colorClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-700 to-transparent mb-16"></div>

        {/* Services Showcase */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Popular Treatments
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-center mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="block text-center px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg text-sm font-semibold transition-all duration-300"
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-emerald-600/5 to-teal-600/5 dark:from-emerald-600/10 dark:to-teal-600/10 rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-700/50">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
                <span className="text-xl">✓</span>
              </div>
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2">
                Government Approved
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Licensed and certified clinic
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
                <span className="text-xl">✓</span>
              </div>
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2">
                ISO Certified
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Meets international standards
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
                <span className="text-xl">✓</span>
              </div>
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2">
                5000+ Patients
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Trusted by satisfied clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
