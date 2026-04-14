export default function SkinCareGuide() {
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
      tips: [
        "Fragrance-free, minimal ingredients",
        "Patch test new products",
        "Gentle, soothing formulas",
        "Avoid harsh actives initially",
      ],
    },
  ];

  return (
    <>
      {/* Daily Routines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Daily Skincare Routines
            </h2>
            <p className="text-lg text-gray-600">
              Follow these essential steps for optimal skin health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skinCareRoutines.map((routine, idx) => (
              <div key={idx} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{routine.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {routine.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {routine.steps.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item.step}
                        </h4>
                        <p className="text-sm text-gray-600">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Care by Skin Type
            </h2>
            <p className="text-lg text-gray-600">
              Customized tips for your unique skin needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skinTypes.map((skin, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{skin.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {skin.type}
                </h3>
                <ul className="space-y-2">
                  {skin.tips.map((tip, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <span className="text-teal-600 mr-2 flex-shrink-0">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
