import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-[#F4EFEB] px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <p className="text-sm uppercase tracking-[0.25em] text-[#8F6B4C] font-semibold mb-4">
          Get In Touch
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#4E4036] mb-6">
          Let's Connect
        </h2>

        <p className="text-[#6D5C50] text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          I'm always excited to discuss new opportunities, collaborate on
          interesting projects, or simply connect with fellow developers.
          Feel free to reach out through any of the platforms below.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href={"mailto:neha2sharma15@gmail.com"}
            className="flex flex-col items-center justify-center
            bg-[#E9DDD1]
            border border-[#D8C1AA]
            rounded-2xl
            p-8
            shadow-sm
            hover:bg-[#DCC7B3]
            hover:-translate-y-2
            hover:shadow-lg
            transition-all duration-300"
          >
            <FaEnvelope className="text-4xl text-[#8F6B4C] mb-4" />

            <h3 className="text-lg font-semibold text-[#4E4036] mb-2">
              Email
            </h3>

            <p className="text-[#6D5C50] text-sm">
              neha2sharma15@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/NehaSharma2602"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center
            bg-[#E9DDD1]
            border border-[#D8C1AA]
            rounded-2xl
            p-8
            shadow-sm
            hover:bg-[#DCC7B3]
            hover:-translate-y-2
            hover:shadow-lg
            transition-all duration-300"
          >
            <FaGithub className="text-4xl text-[#8F6B4C] mb-4" />

            <h3 className="text-lg font-semibold text-[#4E4036] mb-2">
              GitHub
            </h3>

            <p className="text-[#6D5C50] text-sm">
              github.com/NehaSharma2602
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/neha-sharma-2066ab326/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center
            bg-[#E9DDD1]
            border border-[#D8C1AA]
            rounded-2xl
            p-8
            shadow-sm
            hover:bg-[#DCC7B3]
            hover:-translate-y-2
            hover:shadow-lg
            transition-all duration-300"
          >
            <FaLinkedin className="text-4xl text-[#8F6B4C] mb-4" />

            <h3 className="text-lg font-semibold text-[#4E4036] mb-2">
              LinkedIn
            </h3>

            <p className="text-[#6D5C50] text-sm">
              Connect with me
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;