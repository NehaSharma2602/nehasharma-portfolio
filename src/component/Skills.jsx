import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaJava, FaDatabase } from "react-icons/fa";
import { SiHibernate, SiJavascript, SiSpringboot, SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "text-orange-400" },
  { name: "Hibernate", icon: <SiHibernate />, color: "text-green-500" },
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500"  },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "SQL", icon: <FaDatabase />, color: "text-purple-400" },
  { name: "GitHub", icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#151528] px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE - TEXT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            Skills & Tools
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-md">
            I use modern frontend technologies and tools to build
            fast, scalable and visually appealing applications.
          </p>
        </div>

        {/* RIGHT SIDE - GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center 
              bg-[#0f0f1b] border border-white/10 
              rounded-xl p-6 hover:border-purple-500 
              hover:-translate-y-1 transition duration-300"
            >
              <div className="text-3xl text-purple-400 mb-3">
                {skill.icon}
              </div>
              <p className="text-gray-300 text-sm font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
