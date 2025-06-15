const features = [
  {
    title: "Real-Time Match Data",
    description:
      "Delivering live statistics and game moments straight to fans’ dashboards for a deeper connection to every match.",
  },
  {
    title: "Fan Rewards & Gamification",
    description:
      "Engaging fans through loyalty points, prediction games, and interactive challenges that reward active participation.",
  },
  {
    title: "Social Community Features",
    description:
      "Enabling vibrant interaction via fan forums, live chat, and integrated social media moments during matches.",
  },
];

const Features = () => {
  return (
    <section id="features" className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-extrabold text-green-800">
          Why Our Platform Stands Out
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-green-100 shadow-md hover:shadow-xl transition bg-green-50"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Vision Statement */}
      <div className="mt-10 bg-gradient-to-r from-green-100 to-emerald-50 p-6 rounded-2xl shadow-md">
        <p className="text-xl font-semibold text-center italic text-green-900">
          “FanFuture is not just an app, it's the future of club-fan
          connectivity across Africa’s growing sports industry.”
        </p>
      </div>
    </section>
  );
};

export default Features;
