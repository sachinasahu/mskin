'use client';

import Link from 'next/link';

export default function ServicesPage() {
  const clinicServices = [
    {
      id: 1,
      name: "Acne Treatment",
      description: "Comprehensive acne treatment solutions including laser therapy, chemical peels, and advanced dermatological procedures.",
      icon: "🔬",
      treatments: ["Laser Treatment", "Chemical Peels", "Extraction", "Medication"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Anti-Aging Treatments",
      description: "Advanced anti-aging procedures to reduce wrinkles, fine lines, and restore youthful skin appearance.",
      icon: "💆",
      treatments: ["Botox", "Dermal Fillers", "Microdermabrasion", "Laser Resurfacing"],
      image: "https://images.unsplash.com/photo-1570172619644-dfd03cb5f913?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Hair Loss Treatment",
      description: "Specialized hair restoration and loss prevention treatments tailored to your hair type and condition.",
      icon: "💇",
      treatments: ["PRP Therapy", "Minoxidil", "Hair Transplant", "Laser Therapy"],
      image: "https://images.unsplash.com/photo-1570172619644-dfd03cb5f913?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Pigmentation & Brightening",
      description: "Treat dark spots, melasma, and uneven skin tone with our advanced pigmentation correction services.",
      icon: "✨",
      treatments: ["Laser Therapy", "Chemical Peels", "Microdermabrasion", "Topical Treatments"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Skin Rejuvenation",
      description: "Non-invasive and minimally invasive procedures to rejuvenate and refresh your skin's natural radiance.",
      icon: "🌟",
      treatments: ["Facial", "HydraFacial", "Microneedling", "Chemical Peel"],
      image: "https://images.unsplash.com/photo-1556745753-b2904692573f?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Dermatological Surgery",
      description: "Specialized surgical procedures for moles, warts, cysts, and other skin conditions with minimal scarring.",
      icon: "🔪",
      treatments: ["Mole Removal", "Wart Removal", "Cyst Extraction", "Scar Revision"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-teal-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-teal-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dermatological and aesthetic treatments tailored to meet your unique skin and hair needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="w-full h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  {/* Treatments List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Available Treatments:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.treatments.map((treatment, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full"
                        >
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href="/appointments"
                    className="block w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors text-center"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>👨‍⚕️</span> Expert Consultation
              </h3>
              <p className="text-gray-600">
                Personalized treatment plans designed by experienced dermatologists based on your specific skin condition and goals.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>🏥</span> Advanced Technology
              </h3>
              <p className="text-gray-600">
                State-of-the-art equipment and cutting-edge techniques for safe, effective and quick results.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>✨</span> Quality Results
              </h3>
              <p className="text-gray-600">
                Proven track record of delivering visible improvements and transformations with natural-looking results.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>❤️</span> Patient Care
              </h3>
              <p className="text-gray-600">
                Compassionate care with attention to your comfort, concerns, and complete satisfaction throughout your treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Schedule your consultation today and take the first step toward healthier, radiant skin.
          </p>
          <Link 
            href="/appointments"
            className="inline-block px-8 py-4 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
