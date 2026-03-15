export default function AppointmentForm() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Testimonials */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Patient Testimonials
            </h2>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We have had completely fresh effects, Dr. XYZ, with my hair year and great physiology that costs from abroad to add to perfect therapy!
              </p>
              <p className="text-gray-900 font-semibold">- Raushan Shukh</p>
            </div>

            {/* Map */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="Clinic Location"
                src="https://maps.google.com/maps?q=Unit+4+Madhusudan+Nagar+Old+Ag+Colony+Bhubaneswar+Odisha+751001&hl=en&z=17&output=embed"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg h-fit md:sticky md:top-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Appointment Booking
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Mobile number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email (optional)
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Select Service
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600">
                  <option>Choose a service</option>
                  <option>Acne Treatment</option>
                  <option>Hair Loss Therapy</option>
                  <option>Skin Rejuvenation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Message (optional)
                </label>
                <textarea
                  placeholder="Tell us about your concern"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold transition-colors text-lg"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
