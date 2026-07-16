"use client";

import { FaAward, FaShieldAlt, FaStar, FaUserMd } from "react-icons/fa";

export default function TrustIndicators() {
  const indicators = [
    {
      icon: FaAward,
      number: "10+",
      label: "Years of Excellence",
      color: "emerald",
    },
    {
      icon: FaUserMd,
      number: "5000+",
      label: "Happy Patients",
      color: "blue",
    },
    {
      icon: FaStar,
      number: "4.8★",
      label: "Patient Ratings",
      color: "amber",
    },
    {
      icon: FaShieldAlt,
      number: "100%",
      label: "Safety Certified",
      color: "red",
    },
  ];

  const colorClasses = {
    emerald:
      "from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700",
    blue: "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
    amber: "from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700",
    red: "from-red-500 to-red-600 dark:from-red-600 dark:to-red-700",
  };

  return (
    <section className="py-16 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            const colors =
              colorClasses[item.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`bg-gradient-to-br ${colors} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                  {item.number}
                </div>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
