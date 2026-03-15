export default function DoctorProfile() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-teal-400 to-blue-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-linear-to-br from-teal-100 to-blue-100 rounded-3xl p-8 flex items-center justify-center h-72 md:h-96">
              <div className="text-center">
                <div className="text-7xl mb-4">👨‍⚕️</div>
                <p className="text-gray-700 font-semibold text-lg">Dr. XYZ, MD</p>
                <p className="text-gray-600">Dermatology</p>
              </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Dr. XYZ, MD Dermatology
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experienced dermatologist with extensive knowledge in treating various skin conditions with personalized care and advanced techniques.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-teal-600 text-xl shrink-0">✓</div>
                <p className="text-gray-700 font-medium">10+ Years of Experience</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-teal-600 text-xl shrink-0">✓</div>
                <p className="text-gray-700 font-medium">Ex-Consultant, XYZ Hospital</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-teal-600 text-xl shrink-0">✓</div>
                <p className="text-gray-700 font-medium">Specialist in Acne & Hair Disorders</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
