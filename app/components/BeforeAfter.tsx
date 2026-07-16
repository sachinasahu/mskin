export default function BeforeAfter() {
  const transformations = [
    {
      title: "Acne Management",
      description:
        "Reduced inflammation and improved skin clarity with targeted treatment",
      category: "Acne",
      result: "Clear, smooth skin achieved",
    },
    {
      title: "Pigmentation Treatment",
      description:
        "More even skin tone and restored radiance with specialized therapy",
      category: "Pigmentation",
      result: "Radiant, even-toned complexion",
    },
    {
      title: "Anti-Aging Solution",
      description:
        "Reduced fine lines and improved skin elasticity with advanced care",
      category: "Anti-Aging",
      result: "Youthful, rejuvenated appearance",
    },
    {
      title: "Hair Restoration",
      description:
        "Improved hair density and reduced hair loss with proven treatments",
      category: "Hair",
      result: "Fuller, healthier hair growth",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-emerald-50/30 dark:from-zinc-900 dark:to-emerald-900/10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
            <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
              Results
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
            Real{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Illustrative examples of typical treatment outcomes from our clinic
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {transformations.map((item, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Before/After Container */}
              <div className="grid grid-cols-2 h-80 overflow-hidden relative">
                {/* Before */}
                <div className="bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900/30 dark:to-rose-900/10 flex flex-col items-center justify-center p-6 relative">
                  <div className="text-6xl mb-4 opacity-50">📷</div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      Before
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                      Initial condition
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-30"></div>

                {/* After */}
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-900/10 flex flex-col items-center justify-center p-6 relative">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    ✨
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      After
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                      Post-treatment result
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 bg-white dark:bg-zinc-800/50 border-t border-gray-200 dark:border-zinc-700">
                {/* Category Badge */}
                <div className="inline-block mb-3 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {item.category}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  {item.description}
                </p>

                {/* Result */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-zinc-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    {item.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Results may vary based on individual skin type, condition, and
            treatment protocol
          </p>
          <a
            href="/appointments"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
