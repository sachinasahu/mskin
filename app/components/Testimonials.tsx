export default function Testimonials() {
  const testimonials = [
    {
      name: "A. Sharma",
      quote:
        "Professional, attentive, and results-driven. My acne cleared within weeks and my confidence is back.",
    },
    {
      name: "S. Patel",
      quote:
        "The personalized routine and gentle treatments transformed my sensitive skin. Highly recommend!",
    },
    {
      name: "R. Gupta",
      quote:
        "Clear guidance, modern techniques, and a caring approach. I felt supported at every step.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            What Patients Say
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Real experiences from people we’ve helped
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800"
            >
              <div className="text-3xl mb-4"></div>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">“{t.quote}”</p>
              <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
