import React from "react";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
} from "react-icons/fa";

const bioSections = [
  {
    icon: <FaLaptopCode className="text-emerald-700 text-4xl" />,
    title: "Skills",
    content: (
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>AWS, Linux, Docker, CI/CD</li>
        <li>Bash scripting, Git, Python</li>
        <li>React, Tailwind CSS, REST APIs</li>
      </ul>
    ),
  },
  {
    icon: <FaProjectDiagram className="text-emerald-700 text-4xl" />,
    title: "Past Projects",
    content: (
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Inventory App with real-time updates (React + API)</li>
        <li>Cloud provisioning with NGINX and SSL (AWS EC2)</li>
      </ul>
    ),
  },
  {
    icon: <FaGraduationCap className="text-emerald-700 text-4xl" />,
    title: "Education",
    content: (
      <div className="text-sm text-gray-700 space-y-1">
        <p>
          <strong>B.Eng – Marine Engineering</strong>
          <br />
          Federal University of Petroleum Resources
        </p>
        <p>AltSchool Africa (Cloud Track)</p>
      </div>
    ),
  },
];

const Bio = () => {
  return (
    <section
      id="bio"
      className="relative z-10 px-6 py-20 bg-gradient-to-br from-white via-emerald-50 to-emerald-100"
    >
      {/* Abstract blurred background elements */}
      <div className="absolute top-0 left-0 w-52 h-52 bg-emerald-200 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-emerald-300 rounded-full opacity-20 blur-3xl z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-14">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-emerald-800">
            Professional Bio
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            A snapshot of my skills, academic background, and recent project
            work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bioSections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-emerald-100 shadow-md p-6 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center space-y-4"
            >
              {section.icon}
              <h3 className="text-xl font-semibold text-emerald-800">
                {section.title}
              </h3>
              <div className="text-left">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
