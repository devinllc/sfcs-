import React from "react";

const features = [
  {
    icon: "🌾",
    title: "Empower Rural Communities",
    desc: "Support self-help groups (SHGs), track livelihood schemes, and access tools designed to enhance rural development.",
    color: "from-green-100 to-green-50 border-green-400",
  },
  {
    icon: "💰",
    title: "Earn Rewards on Every Effort",
    desc: "Get 3% cashback on eligible community-focused purchases and 2% on other transactions, helping you save more while contributing to change.",
    color: "from-yellow-100 to-yellow-50 border-yellow-400",
  },
  {
    icon: "🚀",
    title: "Enhanced Financial Access",
    desc: "Unlock extra spending power and resources when connected with our Rewards Checking feature, tailored for financial growth.",
    color: "from-cyan-100 to-cyan-50 border-cyan-400",
  },
  {
    icon: "📊",
    title: "Simplify Livelihood Management",
    desc: "Manage loans, schemes, and wallets in one place, designed for the needs of SHG members, agents, and administrators.",
    color: "from-gray-100 to-gray-50 border-blue-400",
  },
];

const Featured = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] flex justify-center items-center">
      <div className="max-w-5xl w-full px-4 flex flex-col items-center">
        <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 px-4 py-1 rounded-full text-xs font-bold flex items-center shadow mb-6">
          <span className="text-yellow-600 text-lg mr-1 animate-bounce">🔥</span> FEATURED
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center leading-tight mb-8 drop-shadow-lg">
          ALL THE FEATURES IN ONE APP
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${f.color} border-l-8 rounded-2xl p-4 md:p-6 flex items-start gap-4 shadow hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-3xl md:text-4xl">{f.icon}</div>
              <div>
                <div className="font-bold text-lg md:text-xl mb-1">{f.title}</div>
                <div className="text-gray-700 text-sm md:text-base">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
