export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-linear-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Checkmarks */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-teal-600 text-2xl shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Experienced Dermatologist
                </h3>
                <p className="text-gray-600 mt-1">
                  Board-certified specialists with years of proven experience
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-teal-600 text-2xl shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Advanced Treatments
                </h3>
                <p className="text-gray-600 mt-1">
                  Latest technology and proven treatment methods
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-teal-600 text-2xl shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Personalized Care
                </h3>
                <p className="text-gray-600 mt-1">
                  Customized treatment plans for your unique needs
                </p>
              </div>
            </div>
          </div>

          {/* Right: Service Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-md text-center">
              <div className="text-4xl mb-3">🩹</div>
              <h4 className="font-bold text-gray-900">Acne Treatment</h4>
              <p className="text-sm text-gray-600 mt-2">
                Safe patient-focused acne solutions
              </p>
              <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
                Learn More
              </button>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md text-center">
              <div className="text-4xl mb-3">💇</div>
              <h4 className="font-bold text-gray-900">Hair Loss Therapy</h4>
              <p className="text-sm text-gray-600 mt-2">
                Proven hair restoration therapy
              </p>
              <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
                Learn More
              </button>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md text-center">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-bold text-gray-900">Anti-Aging Solutions</h4>
              <p className="text-sm text-gray-600 mt-2">
                Advanced anti-aging therapy & solutions
              </p>
              <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
                Learn More
              </button>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md text-center">
              <div className="text-4xl mb-3">💪</div>
              <h4 className="font-bold text-gray-900">Skin Health</h4>
              <p className="text-sm text-gray-600 mt-2">
                Complete skin health treatment program
              </p>
              <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
