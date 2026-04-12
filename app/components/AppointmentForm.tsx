"use client";

import { useState, useEffect } from "react";

export default function AppointmentForm() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Jena",
      rating: 5,
      text: "I knew before the clinic Dr. Manoj Nayak to be professional and attentive during the consultation. He took the time to understand my skin issues and explained the possible causes and treatment options clearly. The overall experience was positive, and the treatment recommended seemed appropriate for the condition. Many patients also mention that he provides good treatment outcomes and practical advice for common skin problems. Overall, his clinic has a rating of about 5 stars based on multiple reviews, which suggests a generally satisfactory experience among patients."
    },
    {
      name: "Biswajit Pattanaik",
      rating: 5,
      text: "I had a fantastic experience at Dr Manoj Nayak. The staff was incredibly friendly and welcoming from the moment I walked in. Dr. Manoj Nayak took the time to listen to my concerns and explained everything clearly, making me feel very comfortable. I highly recommend this clinic for their professionalism and care."
    },
    {
      name: "Aswini Mohanty",
      rating: 5,
      text: "Excellent skin clinic with experienced doctors. Very polite staff and clean environment. Treatment was effective and affordable. Highly satisfied with the results."
    },
    {
      name: "Manoroma Mohanty",
      rating: 5,
      text: "I had a wonderful experience with the skin brightening treatment here. The staff explained the process clearly and made me feel very comfortable. After a few sessions, I can already notice visible improvement in my skin tone—it looks fresher, healthier, and more radiant. The clinic is clean, hygienic, and well-maintained. Highly recommended for anyone looking for safe and effective skin care solutions!"
    },
    {
      name: "Chittaranjan Sethy",
      rating: 5,
      text: "Best skin treatment in Bhubaneswar City. Clinic staff behavior is very polite."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[testimonialIndex];

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
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed line-clamp-4">
                {currentTestimonial.text}
              </p>
              <p className="text-gray-900 font-semibold mb-6">- {currentTestimonial.name}</p>
              
              {/* Testimonial Navigation */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-semibold transition-colors"
                >
                  ← Previous
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setTestimonialIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === testimonialIndex ? "bg-teal-600" : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-semibold transition-colors"
                >
                  Next →
                </button>
              </div>
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
