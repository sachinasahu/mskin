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
    <section className="w-full py-20 bg-gradient-to-br from-gray-50 via-teal-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Testimonials */}
          <div className="w-full space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Patient Testimonials
              </h2>
              <p className="text-lg text-gray-600">
                Hear from our satisfied patients
              </p>
            </div>

            <div className="w-full max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-center line-clamp-5 text-lg">
                "{currentTestimonial.text}"
              </p>
              <p className="text-gray-900 font-semibold text-center mb-8 text-lg">- {currentTestimonial.name}</p>
              
              {/* Testimonial Navigation */}
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-colors"
                >
                  ← Previous
                </button>
                <div className="flex gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setTestimonialIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === testimonialIndex ? "bg-teal-600 w-8" : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                  className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="w-full mt-16">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Visit Our Clinic
              </h3>
              <div className="w-full max-w-4xl mx-auto h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Clinic Location"
                  src="https://maps.google.com/maps?q=20.28376074462255,85.83487535145416&hl=en&z=17&output=embed"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
