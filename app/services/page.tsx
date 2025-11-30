export default function ServicesPage() {
  const skinCareRoutines = [
    {
      title: "Morning Routine",
      icon: "🌅",
      steps: [
        { step: "Gentle Cleanser", desc: "Remove overnight oils and impurities" },
        { step: "Toner", desc: "Balance skin pH and prep for treatment" },
        { step: "Vitamin C Serum", desc: "Brighten and protect from free radicals" },
        { step: "Moisturizer", desc: "Hydrate and lock in active ingredients" },
        { step: "Sunscreen SPF 30+", desc: "Essential UV protection" },
      ],
    },
    {
      title: "Evening Routine",
      icon: "🌙",
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
      icon: "💧",
      color: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      tips: [
        "Use gel-based, oil-free products",
        "Salicylic acid for pore control",
        "Lightweight, non-comedogenic moisturizer",
        "Clay masks 1-2x per week",
      ],
    },
    {
      type: "Dry Skin",
      icon: "🏜️",
      color: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      tips: [
        "Cream-based, hydrating cleansers",
        "Hyaluronic acid for moisture retention",
        "Rich, emollient moisturizers",
        "Avoid harsh exfoliants",
      ],
    },
    {
      type: "Combination Skin",
      icon: "⚖️",
      color: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      tips: [
        "Gentle, balanced cleansers",
        "Multi-masking for different zones",
        "Lightweight moisturizer overall",
        "Spot-treat oily and dry areas separately",
      ],
    },
    {
      type: "Sensitive Skin",
      icon: "🌸",
      color: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
      tips: [
        "Fragrance-free, minimal ingredients",
        "Patch test new products",
        "Gentle, soothing formulas",
        "Avoid harsh actives initially",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-zinc-950 dark:to-emerald-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              Skin Care <span className="text-emerald-600 dark:text-emerald-500">Guide</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Expert tips and routines for maintaining healthy, radiant skin every day
            </p>
          </div>
        </div>
      </section>

      {/* Daily Routines */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Daily Skincare Routines
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Follow these essential steps for optimal skin health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skinCareRoutines.map((routine, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{routine.icon}</span>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {routine.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {routine.steps.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-white">
                          {item.step}
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Type Guides */}
      <section className="py-20 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Care by Skin Type
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Customized tips for your unique skin needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skinTypes.map((skin, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${skin.color} rounded-2xl p-6`}
              >
                <div className="text-4xl mb-3">{skin.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                  {skin.type}
                </h3>
                <ul className="space-y-2">
                  {skin.tips.map((tip, index) => (
                    <li key={index} className="flex items-start text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-emerald-600 mr-2 flex-shrink-0">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Why Skincare Matters
            </h2>
          </div>

          <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
            <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🛡️</span> Protection from Environmental Damage
              </h3>
              <p>
                Daily skincare creates a barrier against pollution, UV rays, and free radicals that 
                accelerate aging and damage skin cells. Consistent protection is your first line of defense.
              </p>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                <span>💧</span> Moisture Balance & Hydration
              </h3>
              <p>
                Proper hydration maintains skin elasticity, prevents premature wrinkles, and keeps 
                your complexion glowing. Well-moisturized skin is healthier and more resilient.
              </p>
            </div>

            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🔬</span> Prevention & Early Detection
              </h3>
              <p>
                Regular skincare routines help you notice changes in your skin early, enabling timely 
                treatment of concerns like acne, discoloration, or unusual growths.
              </p>
            </div>

            <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                <span>✨</span> Confidence & Well-being
              </h3>
              <p>
                Healthy skin boosts self-confidence and overall well-being. A consistent routine is 
                an act of self-care that benefits both your appearance and mental health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
