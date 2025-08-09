import React from "react";

interface SkillsProps {
  isVisible: Record<string, boolean>;
}

const skillsList = [
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Git/GitHub",
  "REST APIs",
];

const Skills: React.FC<SkillsProps> = ({ isVisible }) => {
  return (
    <section
      id="skills"
      data-section
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <div
        className={`max-w-4xl text-center transition-all duration-1000 ${
          isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsList.map((skill) => (
            <span
              key={skill}
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
