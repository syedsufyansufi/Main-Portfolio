import React from "react";

interface ExperienceProps {
  isVisible: Record<string, boolean>;
}

const experiences = [
  {
    role: "Front-End Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description:
      "Developed and maintained responsive React applications, optimized for performance and accessibility.",
  },
  {
    role: "Web Developer Intern",
    company: "Startup Hub",
    period: "2022 - 2023",
    description:
      "Built scalable MERN stack applications and collaborated with designers to create engaging UI.",
  },
];

const Experience: React.FC<ExperienceProps> = ({ isVisible }) => {
  return (
    <section
      id="experience"
      data-section
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <div
        className={`max-w-4xl transition-all duration-1000 ${
          isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-6 text-center">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-purple-400">{exp.company}</p>
              <span className="text-gray-400 text-sm">{exp.period}</span>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
