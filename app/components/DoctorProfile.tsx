import Link from "next/link";
import {
  FaAward,
  FaBriefcaseMedical,
  FaUserMd,
  FaHeartbeat,
} from "react-icons/fa";

export default function DoctorProfile() {
  const credentials = [
    {
      icon: FaBriefcaseMedical,
      title: "Assistant Professor",
      description: "IMS & Sum Hospital",
    },
    {
      icon: FaUserMd,
      title: "MD Dermatology",
      description: "AIIMS & Specializations",
    },
    {
      icon: FaAward,
      title: "10+ Years",
      description: "Clinical Experience",
    },
    {
      icon: FaHeartbeat,
      title: "5000+ Patients",
      description: "Successfully Treated",
    },
  ];

  const specializations = [
    "Acne & Acne Scars",
    "Hair Loss Treatment",
    "Anti-Aging Treatments",
    "Laser Procedures",
    "Skin Infections",
    "Cosmetic Dermatology",
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <div className="relative group order-2 lg:order-1">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden h-96 lg:h-[500px] border-4 border-emerald-100 dark:border-emerald-900/50 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
              <img
                src="/images/doPic.jpg"
                alt="Dr. Manoj Kumar Nayak"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                MD Dermatology
              </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="order-1 lg:order-2">
            {/* Section Label */}
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
              <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                Meet Your Doctor
              </p>
            </div>

            {/* Name & Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
              Dr. Manoj Kumar{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Nayak
              </span>
            </h2>

            {/* Tagline */}
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              Experienced dermatologist with expertise in treating complex skin
              conditions and delivering exceptional results through personalized
              care and advanced techniques.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700/50"
                  >
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-2" />
                    <p className="font-bold text-zinc-900 dark:text-white text-sm">
                      {cred.title}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs">
                      {cred.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Specializations */}
            <div>
              <h4 className="font-bold text-zinc-900 dark:text-white mb-4">
                Areas of Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {specializations.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
                    <span className="text-sm font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 rounded-xl font-bold text-lg transition-all duration-300 border border-emerald-200 dark:border-emerald-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
