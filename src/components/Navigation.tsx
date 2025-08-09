import React from "react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50">
      <ul className="flex justify-center gap-6 py-4 text-white">
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() =>
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
              }
              className={`capitalize ${
                activeSection === section ? "text-purple-400" : "text-gray-300"
              }`}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
