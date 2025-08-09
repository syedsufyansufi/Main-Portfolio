import React from "react";

interface AboutProps {
  isVisible: Record<string, boolean>;
}

const About: React.FC<AboutProps> = ({ isVisible }) => {
  return (
    <section
      id="about"
      data-section
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div
        className={`max-w-4xl text-center transition-all duration-1000 ${
          isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-6">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a passionate Front-End Developer with expertise in React, TypeScript, and
          the MERN stack. My mission is to create scalable, high-performance, and visually
          engaging web applications. I thrive on solving complex problems and delivering
          seamless user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
