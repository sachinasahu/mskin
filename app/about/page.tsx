import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-zinc-950 dark:to-emerald-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              About <span className="text-emerald-600 dark:text-emerald-500">Our Clinic</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Dedicated to providing world-class dermatological care with compassion and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Doctor Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <img src="/images/doctor.svg" alt="Doctor portrait" className="w-full h-full object-cover" />
            </div>

            {/* Doctor Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                  Dr. Manoj Kumar Nayak
                </h2>
                <p className="text-xl text-emerald-600 dark:text-emerald-500 font-semibold">
                  Asst. Prof. IMS & Sum Hospital | MBBS, MD Dermatology (AIIMS)
                </p>
              </div>

              <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <p className="text-lg">
                  Dr. Manoj Kumar Nayak is an experienced dermatologist focused on evidence-based treatments and personalized care to help patients achieve healthy, beautiful skin.
                </p>
                <p>
                  Ex-Senior Resident at AIIMS Bhubaneswar and trained at AIIMS, Dr. Nayak specializes in medical, surgical, and cosmetic dermatology.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  Credentials & Education
                </h3>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Assistant Professor, IMS & Sum Hospital
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    MBBS, MD Dermatology (AIIMS)
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Ex-Senior Resident, AIIMS Bhubaneswar
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Registered Medical Practitioner (Regn. No. 28352)
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Acne Treatment", "Anti-Aging", "Laser Therapy", "Skin Cancer", "Cosmetic Dermatology", "Pediatric Dermatology"].map((spec, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Our Mission & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                Excellence
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Committed to providing the highest standard of dermatological care using the latest research and technology.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl text-center">
              <div className="text-5xl mb-4">💚</div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                Compassion
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Every patient deserves personalized attention and care in a welcoming, comfortable environment.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Embracing cutting-edge treatments and AI-powered diagnostics for better patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
