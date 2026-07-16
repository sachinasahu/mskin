export default function AboutPage() {
  return (
    <div className="about-page min-h-screen bg-[var(--pearl)]">
      {/* Hero Section */}
      <section className="px-4 pb-9 pt-9 sm:px-6 sm:pb-9 sm:pt-9 lg:px-8 lg:pb-20 lg:pt-0">
        <div className="container">
          <div className="reveal is-visible mb-9 text-center sm:mb-16">
            <span className="eyebrow justify-center">Our Clinic</span>
            <h1 className="display-heading philosophy-heading">
              About{" "}
              <em className="text-[var(--copper)]">Dr. Manoj&apos;s Clinic</em>
            </h1>
            <p className="philosophy-desc mx-auto max-w-[600px]">
              Dedicated to providing world-class dermatological care with
              compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="bg-[var(--white)] px-4 py-[52px] sm:px-6 sm:py-[52px] lg:px-8 lg:py-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Doctor Image */}
            <div className="reveal is-visible relative min-h-[320px] overflow-hidden rounded-[4px] bg-[#C4B8B0] sm:min-h-[420px] md:min-h-[500px]">
              <img
                src="/images/doPic.jpg"
                alt="Dr. Manoj Kumar Nayak"
                className="h-full w-full object-cover"
                style={{ filter: "contrast(1.05) brightness(0.95)" }}
              />
            </div>

            {/* Doctor Info */}
            <div className="reveal is-visible flex flex-col">
              <h2 className="display-heading doctor-name mb-1.5">
                Dr. Manoj Kumar Nayak
              </h2>
              <p className="doctor-credential-tag">
                Asst. Prof. IMS & Sum Hospital | MBBS, MD Dermatology (AIIMS)
              </p>

              <div className="mb-9 flex flex-col gap-4">
                <p className="doctor-bio mb-0 max-w-full">
                  Dr. Manoj Kumar Nayak is an experienced dermatologist focused
                  on evidence-based treatments and personalized care to help
                  patients achieve healthy, beautiful skin.
                </p>
                <p className="doctor-bio mb-0 max-w-full">
                  Ex-Senior Resident at AIIMS Bhubaneswar and trained at AIIMS,
                  Dr. Nayak specializes in medical, surgical, and cosmetic
                  dermatology.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="pillar-title text-xl">
                  Credentials & Education
                </h3>
                <ul className="credential-list mb-0">
                  <li>
                    <span className="cred-dot"></span>Assistant Professor, IMS &
                    Sum Hospital
                  </li>
                  <li>
                    <span className="cred-dot"></span>MBBS, MD Dermatology
                    (AIIMS)
                  </li>
                  <li>
                    <span className="cred-dot"></span>Ex-Senior Resident, AIIMS
                    Bhubaneswar
                  </li>
                  <li>
                    <span className="cred-dot"></span>Registered Medical
                    Practitioner (Regn. No. 28352)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="pillar-title mb-4 text-xl">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Acne Treatment",
                    "Anti-Aging",
                    "Laser Therapy",
                    "Skin Cancer",
                    "Cosmetic Dermatology",
                    "Pediatric Dermatology",
                  ].map((spec, index) => (
                    <span
                      key={index}
                      className="rounded-[3px] bg-[var(--sage-tint)] px-4 py-2 text-[13px] font-medium text-[var(--forest)]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-[var(--sage-tint)] px-4 py-[52px] sm:px-6 sm:py-[52px] lg:px-8 lg:py-[100px]">
        <div className="container">
          <div className="reveal is-visible mb-9 text-center sm:mb-16">
            <h2 className="display-heading philosophy-heading">
              Our Mission & <em>Values</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                desc: "Committed to providing the highest standard of dermatological care using the latest research and technology.",
              },
              {
                icon: "💚",
                title: "Compassion",
                desc: "Every patient deserves personalized attention and care in a welcoming, comfortable environment.",
              },
              {
                icon: "🔬",
                title: "Innovation",
                desc: "Embracing cutting-edge treatments and AI-powered diagnostics for better patient outcomes.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="reveal is-visible rounded-[4px] border border-[var(--border)] bg-[var(--white)] p-6 text-center sm:p-10"
              >
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="pillar-title mb-3 text-center text-2xl">
                  {value.title}
                </h3>
                <p className="philosophy-desc text-center">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
