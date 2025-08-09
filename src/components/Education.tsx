import React from "react";

const Education: React.FC = () => {
  return (
    <section
      id="education"
      data-section
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-6">Education</h2>
        <div className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10">
          <h3 className="text-xl font-semibold text-white">
            Bachelor of Computer Applications
          </h3>
          <p className="text-purple-400">XYZ University, 2020 - 2023</p>
          <p className="text-gray-300 mt-2">
            Specialized in web development, software engineering, and data structures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
