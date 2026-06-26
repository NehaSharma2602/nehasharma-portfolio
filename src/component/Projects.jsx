import React, { useState } from "react";
import projectsData from "../projects.json";

const categories = ["all", "clone", "react", "java"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="projects" className="py-24 bg-[#0f0f1b] px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Work
          </h2>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition duration-300
                ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-[#151528] text-gray-300 border border-white/10 hover:border-purple-500"
                }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#151528] border border-white/10 
              rounded-xl p-6 hover:border-purple-500 
              hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#0f0f1b] border border-white/10 px-3 py-1 rounded-md text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="text-purple-400 text-sm font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
