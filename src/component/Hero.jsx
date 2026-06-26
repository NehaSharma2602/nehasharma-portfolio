import React from "react";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-20 md:pt-24 flex items-center bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-fadeIn">
          <span className="relative inline-block px-6 py-2.5 rounded-full group">
            <span className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 blur badge-pulse"></span>

            <span className="relative flex items-center gap-3 px-5 py-2.5 text-sm font-semibold rounded-full bg-linear-to-r from-gray-900 to-gray-800 text-white">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full badge-bounce"></span>
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full badge-bounce badge-delay-1"></span>
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full badge-bounce badge-delay-2"></span>
              </span>
              Welcome to my Portfolio
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Hello!<br></br> I’m <span className="text-blue-500">Neha Sharma</span>
          </h1>

          <p className="text-slate-400 max-w-xl leading-relaxed">
            A passionate software developer with a strong interest in building scalable applications and solving real-world problems through technology. I enjoy learning new concepts, improving my technical skills, and turning ideas into practical solutions.
          </p>

          <p className="text-slate-400 max-w-xl leading-relaxed">
            I value continuous growth, clean code, and thoughtful problem-solving. My goal is to create software that is reliable, efficient, and impactful while continuously evolving as an engineer.
          </p>

          <button
            className="group inline-flex items-center gap-2 px-6 py-3 
            bg-linear-to-r from-blue-500 to-purple-600 
            rounded-lg font-medium hover:scale-105 transition-all"
          >
            <a href="#contact"> Let's Connect</a>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center animate-float">
          {/* Glow background */}
          <div
            className="absolute w-72 h-72 md:w-96 md:h-96 
            bg-linear-to-r from-purple-600 to-blue-500 
            rounded-full blur-3xl opacity-30"
          ></div>
          <img
            src="/profile2.jpeg" 
            alt="Prince"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
            className="relative w-60 h-60 md:w-90 md:h-90 object-cover 
            rounded-full border-4 border-slate-800 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
