import Hero from "./components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Why Choose MS Clinic?
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Combining medical expertise with cutting-edge technology for exceptional care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                Advanced Technology
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                AI-powered diagnostics and state-of-the-art treatment methods for accurate, effective care.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                Expert Care
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Board-certified dermatologists with years of experience in treating diverse skin conditions.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                Personalized Approach
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Customized treatment plans tailored to your unique skin type and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Comprehensive dermatological solutions for all your skin needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✨", title: "Acne Treatment", desc: "Clear skin solutions" },
              { icon: "🌟", title: "Anti-Aging", desc: "Youthful radiance" },
              { icon: "💉", title: "Cosmetic Procedures", desc: "Enhanced beauty" },
              { icon: "🛡️", title: "Skin Cancer Screening", desc: "Early detection" },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <BeforeAfter />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 dark:bg-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Schedule a consultation with our expert dermatologists today
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-all"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

