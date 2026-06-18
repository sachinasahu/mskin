import {
  FaCloudSun,
  FaMoon,
  FaTint,
  FaLeaf,
  FaBalanceScale,
  FaFeather,
} from "react-icons/fa";

export default function SkinCareGuide() {
  const skinCareRoutines = [
    {
      title: "Morning Routine",
      icon: FaCloudSun,
      color: "from-yellow-500 to-orange-500",
      steps: [
        {
          step: "Gentle Cleanser",
          desc: "Remove overnight oils and impurities",
        },
        { step: "Toner", desc: "Balance skin pH and prep for treatment" },
        {
          step: "Vitamin C Serum",
          desc: "Brighten and protect from free radicals",
        },
        { step: "Moisturizer", desc: "Hydrate and lock in active ingredients" },
        { step: "Sunscreen SPF 30+", desc: "Essential UV protection" },
      ],
    },
    {
      title: "Evening Routine",
      icon: FaMoon,
      color: "from-indigo-500 to-purple-500",
      steps: [
        { step: "Oil Cleanser", desc: "Remove makeup and sunscreen" },
        { step: "Water-Based Cleanser", desc: "Deep clean pores" },
        { step: "Exfoliant (2-3x/week)", desc: "Remove dead skin cells" },
        { step: "Treatment Serum", desc: "Retinol or targeted treatment" },
        { step: "Night Cream", desc: "Rich moisture for overnight repair" },
      ],
    },
  ];

  const skinTypes = [
    {
      type: "Oily Skin",
      icon: FaTint,
      color: "blue",
      tips: [
        "Use gel-based, oil-free products",
        "Salicylic acid for pore control",
        "Lightweight, non-comedogenic moisturizer",
        "Clay masks 1-2x per week",
      ],
    },
    {
      type: "Dry Skin",
      icon: FaLeaf,
      color: "amber",
      tips: [
        "Cream-based, hydrating cleansers",
        "Hyaluronic acid for moisture retention",
        "Rich, emollient moisturizers",
        "Avoid harsh exfoliants",
      ],
    },
    {
      type: "Combination Skin",
      icon: FaBalanceScale,
      color: "emerald",
      tips: [
        "Gentle, balanced cleansers",
        "Multi-masking for different zones",
        "Lightweight moisturizer overall",
        "Spot-treat oily and dry areas separately",
      ],
    },
    {
      type: "Sensitive Skin",
      icon: FaFeather,
      color: "pink",
      tips: [
        "Fragrance-free, minimal ingredients",
        "Patch test new products",
        "Gentle, soothing formulas",
        "Avoid harsh actives initially",
      ],
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
    amber:
      "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
    emerald:
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
    pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400",
  };

  return (
    <>
      {/* Daily Routines */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
              <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                Daily Care
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
              Essential Skincare{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Routines
              </span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Follow these science-backed steps for optimal skin health and
              radiance
            </p>
          </div>

          {/* Routines Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skinCareRoutines.map((routine, idx) => {
              const IconComponent = routine.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl p-8 border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${routine.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className={`p-4 bg-gradient-to-br ${routine.color} rounded-xl text-white`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                        {routine.title}
                      </h3>
                    </div>

                    {/* Steps */}
                    <div className="space-y-5">
                      {routine.steps.map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-zinc-900 dark:text-white">
                              {item.step}
                            </h4>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skin Type Guides */}
      <section className="py-20 bg-gradient-to-br from-white via-emerald-50/20 to-white dark:from-zinc-900 dark:via-emerald-900/10 dark:to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
              <p className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                Personalized
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
              Care by Skin{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Type
              </span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Customized skincare recommendations for your unique skin profile
            </p>
          </div>

          {/* Skin Type Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skinTypes.map((skin, idx) => {
              const IconComponent = skin.icon;
              const bgColor = colorMap[skin.color];
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl p-6 bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon Background */}
                  <div
                    className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                    {skin.type}
                  </h3>

                  {/* Tips */}
                  <ul className="space-y-3">
                    {skin.tips.map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Not sure about your skin type? Get personalized recommendations
              from our dermatologists.
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
              Get Personalized Skincare Plan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
