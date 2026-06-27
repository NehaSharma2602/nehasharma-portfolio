import React from "react";
import profilePic from "../assets/neha-sharma.jpeg"

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 md:pt-24 flex items-center bg-[#F4EFEB] text-[#5B4B40]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Hello!
            <br />
            I'm <span className="text-[#CDB093]">Neha Sharma</span>
          </h1>

          <p className="text-[#7B6B5F] max-w-xl leading-relaxed text-lg">
            A passionate software developer with a strong interest in building
            scalable applications and solving real-world problems through
            technology. I enjoy learning new concepts, improving my technical
            skills, and turning ideas into practical solutions.
          </p>

          <p className="text-[#7B6B5F] max-w-xl leading-relaxed text-lg">
            I value continuous growth, clean code, and thoughtful
            problem-solving. My goal is to create software that is reliable,
            efficient, and impactful while continuously evolving as an engineer.
          </p>

          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9A7859] via-[#8F6B4C] to-[#76563C] text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
>
  <a href="#contact">Let's Connect</a>

  <span className="group-hover:translate-x-1 transition-transform duration-300">
    →
  </span>
</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center animate-float">
          {/* Glow */}
          <div
            className="absolute w-72 h-72 md:w-96 md:h-96
            bg-gradient-to-r
            from-[#F4EFEB]
            via-[#E9DDD1]
            to-[#DCC7B3]
            rounded-full blur-3xl opacity-80"
          ></div>

          <img
            src={profilePic}
            alt="Neha Sharma"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="relative w-60 h-60 md:w-90 md:h-90 object-cover
            rounded-full
            border-4 border-[#DCC7B3]
            shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;