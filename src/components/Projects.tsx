import React from "react";

interface ProjectsProps {
  isVisible: Record<string, boolean>;
}

const projects = [
  {
    name: "Portfolio Website",
    description: "A modern responsive portfolio built with React, TypeScript, and Tailwind CSS.",
    link: "#",
  },
  {
    name: "E-Commerce Platform",
    description: "Full-stack MERN e-commerce app with payment integration and admin dashboard.",
    link: "#",
  },
];

const Projects: React.FC<ProjectsProps> = ({ isVisible }) => {
  return (
    <section
      id="projects"
      data-section
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <div
        className={`max-w-4xl transition-all duration-1000 ${
          isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-6 text-center">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white">{proj.name}</h3>
              <p className="text-gray-300">{proj.description}</p>
              <a
                href={proj.link}
                className="text-purple-400 hover:underline mt-2 inline-block"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
    