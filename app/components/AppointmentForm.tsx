"use client";

import { useState, useEffect } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function AppointmentForm() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Jena",
      rating: 5,
      text: "Dr. Manoj Nayak is professional and attentive. He took time to understand my skin issues and explained treatment options clearly. The clinic has 5-star ratings and provides excellent treatment outcomes with practical advice.",
    },
    {
      name: "Biswajit Pattanaik",
      rating: 5,
      text: "Fantastic experience at Dr Manoj Nayak's clinic. The staff was incredibly friendly and welcoming. Dr. Nayak listened to my concerns and explained everything clearly. I highly recommend this clinic for their professionalism and care.",
    },
    {
      name: "Aswini Mohanty",
      rating: 5,
      text: "Excellent skin clinic with experienced doctors. Very polite staff and clean environment. Treatment was effective and affordable. Highly satisfied with the results.",
    },
    {
      name: "Manoroma Mohanty",
      rating: 5,
      text: "Wonderful experience with skin brightening treatment. Staff explained the process clearly. After sessions, I noticed visible improvement in skin tone. Clean, hygienic clinic. Highly recommended!",
    },
    {
      name: "Chittaranjan Sethy",
      rating: 5,
      text: "Best skin treatment in Bhubaneswar City. Clinic staff behavior is very polite and professional.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[testimonialIndex];

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-white via-emerald-50/20 to-white dark:from-zinc-900 dark:via-emerald-900/10 dark:to-zinc-900">
      <div className="container">
        {/* Testimonials Section */}
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
              <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                Patient Reviews
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
              Real Stories from Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Patients
              </span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Discover how we've transformed the skin and confidence of
              thousands of happy patients
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative group">
              {/* Card */}
              <div className="bg-white dark:bg-zinc-800/50 rounded-3xl p-10 md:p-12 border border-gray-200 dark:border-zinc-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed text-center text-lg italic">
                  "{currentTestimonial.text}"
                </p>

                {/* Author */}
                <div className="text-center mb-8 border-t border-gray-200 dark:border-zinc-700 pt-6">
                  <p className="text-zinc-900 dark:text-white font-bold text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                    Verified Patient
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 rounded-xl font-semibold transition-all duration-300 border border-emerald-200 dark:border-emerald-700"
                  >
                    <FaChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {/* Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setTestimonialIndex(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === testimonialIndex
                            ? "bg-emerald-600 dark:bg-emerald-500 w-8 h-3"
                            : "bg-gray-300 dark:bg-zinc-600 w-3 h-3 hover:bg-gray-400 dark:hover:bg-zinc-500"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Next
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="mt-20 pt-16 border-t border-gray-200 dark:border-zinc-700">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                <FaMapMarkerAlt className="inline-block mr-3 text-emerald-600 dark:text-emerald-400" />
                Visit Our Clinic
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Located in the heart of Bhubaneswar with easy access and
                comfortable facilities
              </p>
            </div>

            {/* Map Container */}
            <div className="w-full max-w-4xl mx-auto h-96 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-zinc-700">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="MS Clinic Location"
                src="https://maps.google.com/maps?q=20.28376074462255,85.83487535145416&hl=en&z=17&output=embed"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/917657015719"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
