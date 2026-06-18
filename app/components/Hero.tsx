import Link from "next/link";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -ml-40 -mb-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                  Welcome to Expert Dermatology Care
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight mb-6 tracking-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Skin
                </span>
                , Transform Your{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed max-w-xl">
                Experience professional dermatology care with Dr. Manoj's
                state-of-the-art clinic. Specializing in advanced skin
                treatments, hair restoration, and rejuvenation services.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/appointments"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
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
                Book Appointment
              </Link>
              <a
                href="https://wa.me/917657015719"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white dark:bg-zinc-800 border-2 border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span className="hidden sm:inline">Chat on WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-zinc-200 dark:border-zinc-700">
              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    10+
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                  Years of Excellence
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    5000+
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                  Happy Patients
                </p>
              </div>
              <div className="group flex items-center gap-3">
                <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 text-2xl" />
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                  Govt. Approved
                </p>
              </div>
              <div className="group flex items-center gap-3">
                <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 text-2xl" />
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                  ISO Certified
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-400 dark:from-emerald-600 dark:to-blue-600 rounded-3xl blur-2xl opacity-30 transform -rotate-6"></div>
            <div className="relative rounded-3xl overflow-hidden h-full min-h-96 shadow-2xl border-2 border-white/20 dark:border-zinc-700/50">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
              <img
                src="/images/doPic.jpg"
                alt="Dr. Manoj Kumar Nayak - Professional Dermatologist at Dr Manoj's Skin Clinic"
                className="w-full h-full object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-zinc-900 dark:text-white font-bold text-sm">
                      Certified Expert
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs">
                      Dermatology & Hair Care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
