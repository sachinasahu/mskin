import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-linear-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Dr Manoj&apos;s Skin & Hair Clinic
              </h1>
              <p className="text-2xl text-gray-700 font-medium">
                Advanced dermatology, hair restoration & skin rejuvenation in Bhubaneswar
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold text-lg transition-all">
                Book Appointment
              </button>
              <button className="px-8 py-4 bg-teal-100 hover:bg-teal-200 text-teal-700 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.017-5.555 6.6-5.555 11.54 0 3.74 1.568 5.23 2.588 5.23h.005c1.02 0 2.589-1.49 2.589-5.23 0-4.94 2.5-9.522 5.555-11.54 1.75-1.163 3.957-1.378 5.031-1.378z" />
                </svg>
                Contact us on WhatsApp
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-4xl font-bold text-teal-600">10+</div>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600">5000+</div>
                <p className="text-gray-600 font-medium">Happy Patients</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600">✓</div>
                <p className="text-gray-600 font-medium">Govt. Approved Clinic</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600">ISO</div>
                <p className="text-gray-600 font-medium">Certified</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-teal-400 to-blue-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-linear-to-br from-blue-100 to-teal-100 rounded-3xl p-8 flex items-center justify-center h-full min-h-96">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍⚕️</div>
                <p className="text-gray-700 font-semibold">Professional Dermatologist</p>
                <p className="text-gray-600 text-sm">Expert Care Provider</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
