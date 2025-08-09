import React from "react";

interface ContactProps {
  isVisible: Record<string, boolean>;
}

const Contact: React.FC<ContactProps> = ({ isVisible }) => {
  return (
    <section
      id="contact"
      data-section
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <div
        className={`max-w-4xl text-center transition-all duration-1000 ${
          isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-6">Contact</h2>
        <p className="text-gray-300 mb-6">
          Feel free to reach out via email or connect on LinkedIn.
        </p>
        <a
          href="mailto:syedsufyan787@gmail.com"
          className="bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-500 transition-all"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
