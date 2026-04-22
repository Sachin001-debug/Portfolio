import React from "react";
import HeroImg from "../assets/WhatsApp Image 2026-03-29 at 6.11.53 PM.jpeg";
const Hero = () => {
  return (
    <section className="min-h-[85dvh] flex items-start pt-9  hero-bg">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="fade-in space-y-4 md:space-y-7 lg:space-y-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-3xl border border-white/10 text-xs md:text-sm font-medium">
            <div className="w-2 h-2 bg-[#00f5d4] rounded-full animate-pulse"></div>
            OPEN TO OPPORTUNITIES
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight leading-tight">
            Hi, I'm <span className="text-[#00f5d4]">Sachin</span>
          </h1>

          {/* Title */}
          <p className="text-lg md:text-2xl lg:text-2l xl:text-4xl 2xl:text-2xl font-medium text-white/90 leading-snug">
            Full Stack Developer <span className="text-[#00f5d4]">||</span>{" "}
            UI/UX Designer
          </p>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg text-white/70 max-w-md md:max-w-lg leading-relaxed">
            I am a passionate Full Stack Developer with a strong eye for UI/UX
            design, dedicated to building seamless and visually engaging digital
            experiences. I enjoy turning complex ideas into scalable web
            applications while ensuring intuitive and user-centered interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="#projects"
              className="px-4 py-2 md:px-8 md:py-4 xl:px-1 xl:py-1 bg-[#00f5d4] text-black font-semibold rounded-3xl flex items-center gap-3 transition-all  text-sm md:text-base"
            >
              View My Work
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3 md:px-8 md:py-4 border border-white/40 hover:border-white font-semibold rounded-3xl transition-all text-sm md:text-base hover:bg-white/5"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="fade-in flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#00f5d4]/20 blur-3xl rounded-[3rem]"></div>

            {/* Image */}
            <div
              className="relative w-72 h-72 md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] 
                            rounded-[2.5rem] overflow-hidden border-3 border-[#00f5d4]/30 shadow-2xl"
              style={{
                borderRadius: "77% 23% 87% 13% / 30% 71% 29% 70% ",
              }}
            >
              <img
                src={HeroImg}
                alt="Sachin"
                className="w-full h-full object-cover"
                style={{
                  borderRadius: "77% 23% 87% 13% / 30% 71% 29% 70% ",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
