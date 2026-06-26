import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-[#0f0f1b] px-6 text-center">
      <div className="max-w-3xl mx-auto">

        {/* Small Heading */}
        <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">
          Get In Touch
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Let’s Connect
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-12 leading-relaxed">
          I'm always open to discussing new projects, opportunities, 
          or collaborations. Feel free to connect with me through 
          any of the platforms below.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* Email */}
          <a
            href="mailto:youremail@gmail.com"
            className="flex items-center gap-2 px-6 py-3 
            bg-[#151528] border border-white/10 
            text-gray-300 rounded-lg 
            hover:border-purple-500 hover:text-white 
            transition duration-300"
          >
            <FaEnvelope />
            Email
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 
            bg-[#151528] border border-white/10 
            text-gray-300 rounded-lg 
            hover:border-purple-500 hover:text-white 
            transition duration-300"
          >
            <FaGithub />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 
            bg-[#151528] border border-white/10 
            text-gray-300 rounded-lg 
            hover:border-purple-500 hover:text-white 
            transition duration-300"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contacts;
