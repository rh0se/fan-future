const Hero = () => {
  return (
    <section className="pt-32 min-h-screen flex flex-col items-center justify-center px-6 py-16 space-y-10">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full grid md:grid-cols-2 fade-up overflow-hidden">
        {/* Left Side: Intro */}
        <div className="bg-green-700 text-white p-10 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight">
            Rhoda Ojetola
          </h1>
          <h2 className="text-lg font-medium tracking-wide">Cloud Engineer</h2>
          <div className="h-1 w-16 bg-white rounded"></div>
          <p className="text-sm opacity-90">
            Building resilient, scalable infrastructure with a passion for
            innovation and clean architecture. B.Eng in Marine Engineering,
            advancing cloud excellence with hands-on deployments.
          </p>
        </div>

        {/* Right Side: Project Summary */}
        <div className="p-10 space-y-6">
          <h2 className="text-3xl font-bold text-green-800 leading-snug">
            The Future of Digital Fan Engagement in Sports
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            We're revolutionizing fan interaction in sports with immersive
            digital experiences, starting with the Nigerian Professional
            Football League (NPFL). Our prototype integrates real-time match
            data, social interaction, and gamified loyalty systems to bring
            supporters closer to their clubs.
          </p>
          <a
            href="#features"
            className="inline-block mt-4 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition shadow-lg"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
