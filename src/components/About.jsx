const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 px-6 py-24 bg-white text-gray-800"
    >
      <div className="absolute -top-10 left-10 w-36 h-36 bg-green-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-2">
          <h2 className="text-5xl font-extrabold tracking-tight text-green-800">
            Introducing <span className="text-emerald-600">FanFuture</span>
          </h2>
          <p className="text-lg font-medium text-gray-600 max-w-2xl mx-auto">
            A digital ecosystem reshaping fan engagement in African sports that
            is built for clubs, powered by communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-green-700">The Problem</h3>
            <p className="leading-relaxed">
              Sports clubs in Nigeria struggle with fragmented fan engagement,
              limited data monetization, and lack of modern digital touchpoints.
              Fans are disconnected from real-time match moments and feel left
              out of the club ecosystem.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-green-700">Our Solution</h3>
            <p className="leading-relaxed">
              <strong>FanFuture</strong> is a prototype platform that offers
              real-time match insights, interactive gamification, and community
              tools — helping clubs build stronger, data-driven relationships
              with their supporters.
            </p>
          </div>
        </div>
      </div>
      <div
        id="market"
        className="relative z-10 px-6 py-12 bg-gradient-to-br from-white via-green-50 to-emerald-100 text-gray-800"
      >
        <div className="absolute -top-10 left-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-green-300 rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-green-800">
              Market Opportunity
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A rapidly growing, underserved market ready for digital
              disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white border border-green-100 shadow-sm p-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-green-700">50M+</h3>
              <p className="mt-2 text-sm text-gray-700">
                Active football fans in Nigeria and West Africa — most of whom
                have no digital engagement with local clubs.
              </p>
            </div>
            <div className="bg-white border border-green-100 shadow-sm p-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-green-700">80%</h3>
              <p className="mt-2 text-sm text-gray-700">
                Smartphone penetration among Gen Z and Millennial sports fans,
                who crave real-time, interactive experiences.
              </p>
            </div>
            <div className="bg-white border border-green-100 shadow-sm p-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-green-700">$1B+</h3>
              <p className="mt-2 text-sm text-gray-700">
                Estimated untapped revenue in African fan engagement,
                merchandising, and digital content platforms.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-xl font-semibold text-green-900">
              FanFuture is positioned to become the go-to platform for clubs and
              fans across Africa’s emerging digital sports economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
