import { Briefcase, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import headerImg from "../header.jpg";

interface HeroProps {
  isVisible: Record<string, boolean>;
}

const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  return (
    <section
      id="hero"
      data-section
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible.hero ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
              2 years of experience building responsive and scalable web applications.
              Passionate about delivering seamless user experiences with modern technologies.
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
  );
};

export default Hero;
