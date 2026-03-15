export default function Services() {
  const services = [
    {
      icon: "�",
      title: "Skin Treatments",
      items: [
        "Pimples & Acne Scar",
        "Skin Pigment Removal",
        "Vitiligo & Psoriasis",
        "Eczema & Allergy",
        "Nail Surgery",
      ],
    },
    {
      icon: "💇‍♂️",
      title: "Hair Treatments",
      items: [
        "Hair Loss & Hair Fall",
        "Dandruff",
        "GFC & PRP for Hair Regrowth",
        "Mesotherapy",
        "Hair Transplant",
        "Microneedling",
      ],
    },
    {
      icon: "✨",
      title: "Laser & Cosmetic",
      items: [
        "Unwanted Hair Removal",
        "Tattoo Removal",
        "Mole / Wart / Tag Removal",
        "Skin Rejuvenation & Glow",
        "Acne Scar Treatment",
        "Glutathione Injection",
        "Whole Body Brightness",
        "Chemical Peeling",
        "Hydra Facial",
        "Hyaluronic Acid Fillers",
      ],
    },
    {
      icon: "🧑‍⚕️",
      title: "Sexual Health",
      items: ["Advice & Treatment of Sexually Transmitted Diseases"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Treatments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive dermatology, hair care, and cosmetic laser services tailored for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-linear-to-br from-teal-50 to-blue-50 rounded-2xl border border-teal-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <ul className="text-gray-600 list-disc list-inside space-y-2 text-sm">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
