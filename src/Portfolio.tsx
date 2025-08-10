import {
  Award,
  Briefcase,
  Calendar,
  ChevronDown,
  Code,
  Database,
  ExternalLink,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import headerImg from "./header.jpg";
import "./index.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const skills = {
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Material-UI"],
    stateManagement: ["Redux", "Context API"],
    backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    database: ["MongoDB", "SQL"],
    tools: ["Axios", "Postman", "Git", "GitHub", "GitLab", "VS Code", "npm"],
  };

  const projects = [
    {
      title: "American Sign Language Recognition Web App",
      description:
        "Led development of an innovative ASL recognition system, recognized as the best project in department",
      tech: ["React.js", "Machine Learning", "Computer Vision"],
      achievement: "Top Performer - Final Year Project",
    },
    {
      title: "Application to Facilitate Offs Partners",
      description:
        "Developed responsive interfaces with 20% improved page load time through optimization",
      tech: ["React.js", "Material-UI", "Node.js"],
      achievement: "Production Application",
    },
  ];

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Syed Sufiyan
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "hero",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === section
                      ? "text-purple-400 border-b-2 border-purple-400"
                      : "text-gray-300"
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        data-section
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-8 flex flex-col items-center">
              <img
              src={headerImg}
              alt="Syed Sufiyan Ameen"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-6 shadow-lg border-4 border-white/10"
              />

              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Syed Sufiyan Ameen
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Front-End React Developer | MERN Stack Specialist
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              2 years of experience building responsive and scalable web
              applications. Passionate about delivering seamless user
              experiences with modern technologies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:syedsufyan787@gmail.com"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a
                href="tel:+917057711197"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105"
              >
                <Phone size={20} />
                <span>Call Me</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1Nl2k6XZP684sSSVOMTIPMX8DgI2rWwzU/view?usp=sharing"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Briefcase size={20} />
                <span>View CV</span>
              </a>
            </div>

            <div className="flex justify-center items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.about
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Front-End Developer with expertise in the
                  MERN stack and 2 years of hands-on experience. I specialize in
                  creating responsive, scalable web applications that deliver
                  exceptional user experiences.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey in web development has been driven by a love for
                  clean code, innovative solutions, and continuous learning. I
                  thrive in collaborative environments and enjoy working closely
                  with backend teams to bring ideas to life.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <Trophy className="text-purple-400 mb-2" size={24} />
                    <h3 className="font-semibold mb-1">Experience</h3>
                    <p className="text-sm text-gray-400">2+ Years</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <GraduationCap className="text-blue-400 mb-2" size={24} />
                    <h3 className="font-semibold mb-1">Education</h3>
                    <p className="text-sm text-gray-400">B.E. IT (8.71 CGPA)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">
                  Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">
                        Top Performer - Final Year Project
                      </p>
                      <p className="text-sm text-gray-400">
                        ASL Recognition Web App - Best project in department
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="text-gold-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">1st Place - Vidyotan 2020</p>
                      <p className="text-sm text-gray-400">
                        Coding contest winner among 100+ participants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="text-green-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Web Development Mentor</p>
                      <p className="text-sm text-gray-400">
                        Conducted workshop for 100+ students
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" data-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.skills
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                <Code className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/20 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                <Layers className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">State Management</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.stateManagement.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/20 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                <Database className="text-green-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Backend & Database</h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills.backend, ...skills.database].map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="bg-green-500/20 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                <Star className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-yellow-500/20 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" data-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.experience
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 ml-16 border border-white/10">
                <div className="absolute -left-20 top-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">
                      Front-End React Developer
                    </h3>
                    <p className="text-xl text-blue-400">
                      Urbanfox Turnkey Solutions Pvt Ltd
                    </p>
                    <p className="text-gray-400">Pune</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-gray-400">Jul 2023 – Present</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-300">
                    Application to Facilitate Offs Partners
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      Created comprehensive documentation and participated in
                      client discussions for requirement gathering
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      Developed and maintained responsive user interfaces
                      ensuring seamless experience across devices
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      Utilized Material-UI for modern and consistent design
                      across the application
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <strong>Improved page load time by 20%</strong> through
                      efficient state management and code optimization
                    </li>
                  </ul>

                  <div className="mt-6">
                    <h5 className="font-semibold mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "JavaScript",
                        "React.js",
                        "HTML",
                        "CSS",
                        "Node.js",
                        "Material-UI",
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-3 py-1 rounded-full text-sm border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.projects
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-purple-400">
                        {project.title}
                      </h3>
                      <ExternalLink
                        size={20}
                        className="text-gray-400 group-hover:text-purple-400 transition-colors"
                      />
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <Award size={16} className="text-yellow-400" />
                      <span className="text-sm text-yellow-400 font-semibold">
                        {project.achievement}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 rounded-full text-sm border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <GraduationCap className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">
                Bachelor of Engineering
              </h3>
              <p className="text-blue-400 mb-2">Information Technology</p>
              <p className="text-gray-400 mb-4">
                Sipna College of Engineering & Technology, Amravati
              </p>
              <div className="flex items-center gap-4">
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm">
                  CGPA: 8.71/10
                </span>
                <span className="text-gray-400">2022</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <GraduationCap className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">
                Higher Secondary Certificate
              </h3>
              <p className="text-blue-400 mb-2">HSC</p>
              <p className="text-gray-400 mb-4">2017</p>
              <div className="flex items-center gap-4">
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm">
                  70%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.contact
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>

            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Ready to bring your ideas to life? Let's discuss how we can work
                together!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="mailto:syedsufyan787@gmail.com"
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 text-center group"
              >
                <Mail
                  className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-400 text-sm">syedsufyan787@gmail.com</p>
              </a>

              <a
                href="tel:+917057711197"
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 text-center group"
              >
                <Phone
                  className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-400 text-sm">+91 7057711197</p>
              </a>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <MapPin className="text-green-400 mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-gray-400 text-sm">Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <button
            onClick={ScrollToTop}
            className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105"
          >
            Back to Top
          </button>

          <p className="text-gray-400">
            © 2024 Syed Sufiyan Ameen. Built with React & Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Designed with passion for great user experiences
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
import {
  Award,
  Briefcase,
  Calendar,
  ChevronDown,
  Code,
  Database,
  ExternalLink,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import headerImg from "./header.jpg";
import "./index.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const skills = {
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Material-UI"],
    stateManagement: ["Redux", "Context API"],
    backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    database: ["MongoDB", "SQL"],
    tools: ["Axios", "Postman", "Git", "GitHub", "GitLab", "VS Code", "npm"],
  };

  const projects = [
    {
      title: "American Sign Language Recognition Web App",
      description:
        "Led development of an innovative ASL recognition system, recognized as the best project in department",
      tech: ["React.js", "Machine Learning", "Computer Vision"],
      achievement: "Top Performer - Final Year Project",
    },
    {
      title: "Application to Facilitate Offs Partners",
      description:
        "Developed responsive interfaces with 20% improved page load time through optimization",
      tech: ["React.js", "Material-UI", "Node.js"],
      achievement: "Production Application",
    },
  ];

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Syed Sufiyan
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "hero",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === section
                      ? "text-purple-400 border-b-2 border-purple-400"
                      : "text-gray-300"
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        data-section
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-8 flex flex-col items-center">
              <img
              src={headerImg}
              alt="Syed Sufiyan Ameen"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-6 shadow-lg border-4 border-white/10"
              />

              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Syed Sufiyan Ameen
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Front-End React Developer | MERN Stack Specialist
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              2 years of experience building responsive and scalable web
              applications. Passionate about delivering seamless user
              experiences with modern technologies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:syedsufyan787@gmail.com"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a
                href="tel:+917057711197"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105"
              >
                <Phone size={20} />
                <span>Call Me</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1onEXgIhcd7OVYj-n5Q9EsyuJhd16t2wf/view"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Briefcase size={20} />
                <span>View CV</span>
              </a>
            </div>

            <div className="flex justify-center items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.about
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Front-End Developer with expertise in the
                  MERN stack and 2 years of hands-on experience. I specialize in
                  creating responsive, scalable web applications that deliver
                  exceptional user experiences.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey in web development has been driven by a love for
                  clean code, innovative solutions, and continuous learning. I
                  thrive in collaborative environments and enjoy working closely
                  with backend teams to bring ideas to life.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <Trophy className="text-purple-400 mb-2" size={24} />
                    <h3 className="font-semibold mb-1">Experience</h3>
                    <p className="text-sm text-gray-400">2+ Years</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <GraduationCap className="text-blue-400 mb-2" size={24} />
                    <h3 className="font-semibold mb-1">Education</h3>
                    <p className="text-sm text-gray-400">B.E. IT (8.71 CGPA)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">
                  Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">
                        Top Performer - Final Year Project
                      </p>
                      <p className="text-sm text-gray-400">
                        ASL Recognition Web App - Best project in department
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="text-gold-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">1st Place - Vidyotan 2020</p>
                      <p className="text-sm text-gray-400">
                        Coding contest winner among 100+ participants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="text-green-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Web Development Mentor</p>
                      <p className="text-sm text-gray-400">
                        Conducted workshop for 100+ students
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" data-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.skills
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                <Code className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/20 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                <Layers className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">State Management</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.stateManagement.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/20 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                <Database className="text-green-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Backend & Database</h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills.backend, ...skills.database].map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="bg-green-500/20 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                <Star className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-yellow-500/20 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" data-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.experience
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 ml-16 border border-white/10">
                <div className="absolute -left-20 top-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">
                      Front-End React Developer
                    </h3>
                    <p className="text-xl text-blue-400">
                      Urbanfox Turnkey Solutions Pvt Ltd
                    </p>
                    <p className="text-gray-400">Pune</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-gray-400">Jul 2023 – Present</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-300">
                    Application to Facilitate Offs Partners
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      Created comprehensive documentation and participated in
                      client discussions for requirement gathering
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      Developed and maintained responsive user interfaces
                      ensuring seamless experience across devices
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      Utilized Material-UI for modern and consistent design
                      across the application
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <strong>Improved page load time by 20%</strong> through
                      efficient state management and code optimization
                    </li>
                  </ul>

                  <div className="mt-6">
                    <h5 className="font-semibold mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "JavaScript",
                        "React.js",
                        "HTML",
                        "CSS",
                        "Node.js",
                        "Material-UI",
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-3 py-1 rounded-full text-sm border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.projects
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-purple-400">
                        {project.title}
                      </h3>
                      <ExternalLink
                        size={20}
                        className="text-gray-400 group-hover:text-purple-400 transition-colors"
                      />
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <Award size={16} className="text-yellow-400" />
                      <span className="text-sm text-yellow-400 font-semibold">
                        {project.achievement}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 rounded-full text-sm border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <GraduationCap className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">
                Bachelor of Engineering
              </h3>
              <p className="text-blue-400 mb-2">Information Technology</p>
              <p className="text-gray-400 mb-4">
                Sipna College of Engineering & Technology, Amravati
              </p>
              <div className="flex items-center gap-4">
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm">
                  CGPA: 8.71/10
                </span>
                <span className="text-gray-400">2022</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <GraduationCap className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">
                Higher Secondary Certificate
              </h3>
              <p className="text-blue-400 mb-2">HSC</p>
              <p className="text-gray-400 mb-4">2017</p>
              <div className="flex items-center gap-4">
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm">
                  70%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.contact
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>

            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Ready to bring your ideas to life? Let's discuss how we can work
                together!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="mailto:syedsufyan787@gmail.com"
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 text-center group"
              >
                <Mail
                  className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-400 text-sm">syedsufyan787@gmail.com</p>
              </a>

              <a
                href="tel:+917057711197"
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 text-center group"
              >
                <Phone
                  className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-400 text-sm">+91 7057711197</p>
              </a>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <MapPin className="text-green-400 mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-gray-400 text-sm">Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <button
            onClick={ScrollToTop}
            className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105"
          >
            Back to Top
          </button>

          <p className="text-gray-400">
            © 2024 Syed Sufiyan Ameen. Built with React & Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Designed with passion for great user experiences
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
