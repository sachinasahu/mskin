"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our website appointment form, call us directly at 7657015719, or message us on WhatsApp. We typically confirm appointments within 2 hours during business hours.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "During your first consultation, Dr. Manoj will assess your skin condition, discuss your concerns and goals, perform a thorough skin examination, and recommend a personalized treatment plan. The consultation usually takes 30-45 minutes.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results vary depending on the treatment. Skin treatments typically show visible improvement within 4-8 weeks with proper aftercare. Hair treatments may take 3-6 months. We'll provide realistic timelines during your consultation.",
    },
    {
      question: "Are your treatments safe?",
      answer:
        "Yes, all our treatments are performed using FDA-approved equipment and follow international safety standards. Dr. Manoj customizes each treatment based on your skin type to minimize any risks.",
    },
    {
      question: "Do you offer virtual consultations?",
      answer:
        "Yes, we offer initial virtual consultations for new patients who prefer online consultation. However, we recommend an in-person visit for proper skin assessment and treatment.",
    },
    {
      question: "What aftercare is needed post-treatment?",
      answer:
        "Aftercare varies by treatment. We provide detailed instructions for each procedure including sun protection, skincare routine, and activity restrictions. Our team is available to answer questions during recovery.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We accept direct payments and can provide invoices for insurance reimbursement. Please contact us for specific insurance plan details and coverage information.",
    },
    {
      question: "Can I combine multiple treatments?",
      answer:
        "Yes, many treatments complement each other. During your consultation, Dr. Manoj will recommend a combination approach if beneficial for your specific concerns.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Find answers to common questions about our treatments and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white text-left">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-zinc-200 dark:border-zinc-700">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Can't find the answer you're looking for? Our expert team is here to
            help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917657015719"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors"
            >
              Call Us: 7657015719
            </a>
            <a
              href="https://wa.me/917657015719"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white dark:bg-zinc-800 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg font-semibold transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
