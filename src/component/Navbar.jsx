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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight / 2;

      links.forEach((link) => {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#CBB29A]/95 backdrop-blur-lg border-b border-[#B69779] shadow-lg py-3"
          : "bg-[#D8C1AA]/90 backdrop-blur-lg py-5 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-[#4E4036]">
          <span className="text-[#8F6B4C]">Neha</span>Dev
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-semibold">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative transition-all duration-300 ${
                active === link.id
                  ? "text-[#8F6B4C]"
                  : "text-[#5B4B40] hover:text-[#8F6B4C]"
              }`}
            >
              {link.label}

              <span
                className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-[#8F6B4C] transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-5 text-[#5B4B40]">
            <a
              href="https://www.linkedin.com/in/neha-sharma-2066ab326/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8F6B4C] transition-colors duration-300"
            >
              <FaLinkedin className="text-[30px]" />
            </a>

            <a
              href="https://github.com/NehaSharma2602"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8F6B4C] transition-colors duration-300"
            >
              <FaGithub className="text-[30px]" />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/NehaSharma_JavaDeveloper_Resume.pdf"
            download="NehaSharma_JavaDeveloper_Resume.pdf"
            className="px-5 py-2 rounded-lg
            bg-[#8F6B4C]
            text-white
            hover:bg-[#76563C]
            transition-all duration-300
            shadow-md hover:shadow-lg"
          >
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-[#4E4036]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-96 py-6 bg-[#D8C1AA]/95 backdrop-blur-lg"
            : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg transition-colors duration-300 ${
                active === link.id
                  ? "text-[#8F6B4C]"
                  : "text-[#5B4B40] hover:text-[#8F6B4C]"
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="flex gap-6 text-[#5B4B40] text-2xl">
            <a
              href="https://www.linkedin.com/in/neha-sharma-2066ab326/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8F6B4C] transition-colors duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/NehaSharma2602"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8F6B4C] transition-colors duration-300"
            >
              <FaGithub />
            </a>
          </div>

          <a
            href="/NehaSharma_JavaDeveloper_Resume.pdf"
            download="NehaSharma_JavaDeveloper_Resume.pdf"
            className="px-6 py-2 rounded-lg
            bg-[#8F6B4C]
            text-white
            hover:bg-[#76563C]
            transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;