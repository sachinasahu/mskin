import Link from "next/link";

import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium">
            ✨ Expert Dermatological Care
          </div>

          {/* Slider */}
          <HeroSlider />

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Welcome to MS Clinic, where advanced dermatology meets personalized care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-full font-semibold text-lg transition-all border-2 border-zinc-200 dark:border-zinc-700"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-500">15+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-500">5000+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Happy Patients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-500">98%</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-zinc-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
