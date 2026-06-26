import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contacts", href: "#contacts", id: "contacts" },
  ];

  // Scroll effect
  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);

    const scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport
    links.forEach(link => {
      const section = document.getElementById(link.id);
      if (section) {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.id);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
<nav
  className={`fixed top-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-800 shadow-xl py-3"
      : "bg-[#0f172a]/60 backdrop-blur-md py-5 shadow-sm" // subtle background at top
  }`}
>
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
    {/* Left: Logo */}
    <h1 className="text-2xl font-bold text-white">
      <span className="text-violet-400">Neha</span>Dev
    </h1>

    {/* Center: Nav Links */}
    <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-m font-semibold">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          className={`relative transition duration-300 ${
            active === link.id
              ? "text-violet-400"
              : "text-gray-300 hover:text-violet-400"
          }`}
        >
          {link.label}
          <span
            className={`absolute left-0 -bottom-1 h-0.5 bg-violet-400 transition-all duration-300 ${
              active === link.id ? "w-full" : "w-0"
            }`}
          ></span>
        </a>
      ))}
    </div>

    {/* Right: Social Icons + Download CV */}
    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center gap-6 text-xl text-gray-300">
        <a
          href="https://www.linkedin.com/in/neha-sharma-2066ab326/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-400 transition"
        >
          <FaLinkedin className="text-[34px]"/>
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-400 transition"
        >
          <FaGithub className="text-[34px]" />
        </a>
      </div>

      <a
        href="/Neha_Sharma_Resume.pdf"
        download="Neha_Sharma_Resume.pdf"
        className="bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-900 transition duration-300 shadow-md hover:shadow-lg"
      >
        Download CV
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </div>
  </div>

  {/* Mobile Dropdown */}
  <div
    className={`md:hidden bg-[#0f172a]/95 backdrop-blur-md overflow-hidden transition-all duration-500 ${
      menuOpen ? "max-h-96 py-6" : "max-h-0"
    }`}
  >
    <div className="flex flex-col items-center gap-6">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`text-gray-300 hover:text-violet-400 transition text-lg ${
            active === link.id ? "text-violet-400" : ""
          }`}
        >
          {link.label}
        </a>
      ))}

      <div className="flex gap-6 text-xl text-gray-300">
        <a
          href="https://www.linkedin.com/in/neha-sharma-2066ab326/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-400 transition"
        >
          <FaGithub />
        </a>
      </div>

      <a
        href="/Neha_Sharma_Resume.pdf"
        download="Neha_Sharma_Resume.pdf"
        className="bg-violet-500 text-white px-6 py-2 rounded-lg hover:bg-violet-600 transition duration-300"
      >
        Download CV
      </a>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
