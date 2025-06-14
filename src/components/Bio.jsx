import React from "react";
import { FaUserTie, FaTools, FaLightbulb } from "react-icons/fa";

const bioCards = [
  {
    icon: <FaUserTie className="text-green-700 text-3xl" />,
    title: "Cloud Engineering Enthusiast",
    description:
      "Focused on secure, scalable infrastructure and real-time systems innovation.",
  },
  {
    icon: <FaTools className="text-green-700 text-3xl" />,
    title: "Technical Stack",
    description:
      "Hands-on experience with AWS, Docker, CI/CD pipelines, and deployment automation.",
  },
  {
    icon: <FaLightbulb className="text-green-700 text-3xl" />,
    title: "Creative Problem Solver",
    description:
      "Combining technical expertise with a drive to innovate across sports tech and beyond.",
  },
];

const Bio = () => {
  return (
    <section id="bio" className="px-6 py-16 bg-white border-t border-green-100">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center text-green-800">
          Professional Bio
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {bioCards.map((card, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-3"
            >
              {card.icon}
              <h3 className="text-lg font-semibold text-green-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
