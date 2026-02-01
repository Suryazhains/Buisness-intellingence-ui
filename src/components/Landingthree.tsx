import React from "react";
import { LANDING_THREE, FOOTER_DATA } from "./constants";

// Assets
import FacebookIcon from "../assets/1.svg";
import InstagramIcon from "../assets/2.svg";
import TwitterIcon from "../assets/3.svg";
import glowShadow from "../assets/shadwo 2.svg";

const LandingPageThree = () => {
  return (
    <>
      <section className="relative min-h-[60vh] md:min-h-[90vh] bg-[#08090A] overflow-hidden flex items-center justify-center border-b border-white/5">
        
        {/* 1. Global Grid */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px", // Smaller grid for mobile
            backgroundPosition: "center",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
          }}
        />

        {/* 2. Central Blue Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[300px] h-[300px] md:w-[1200px] md:h-[900px] bg-[#4F7CFF]/35 blur-[80px] md:blur-[160px] rounded-[100%] translate-y-32 md:translate-y-64" />
        </div>

        {/* 3. Image-Based Shadow + Rays */}
        <div
          className="absolute inset-0 pointer-events-none z-[25]"
          style={{
            backgroundImage: `
              linear-gradient(105deg, transparent 46%, rgba(255,255,255,0.08) 50%, transparent 54%),
              linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.04) 33%, transparent 36%),
              linear-gradient(75deg, transparent 46%, rgba(255,255,255,0.08) 50%, transparent 54%),
              url(${glowShadow})
            `,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "100% 100%, 100% 100%, 100% 100%, 800px auto", // Adjusted size for mobile
            mixBlendMode: "lighten",
            filter: "blur(15px) md:blur(25px)",
            opacity: 0.8,
          }}
        />

        {/* 4. Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090A] via-transparent to-[#08090A]/90 z-30 pointer-events-none" />

        {/* 5. Content Section */}
        <div className="relative z-40 max-w-5xl mx-auto text-center px-6 py-20">
          <h1 className="text-3xl md:text-7xl font-semibold mb-8 md:mb-12 text-[#E5E7EB] leading-[1.1] tracking-tighter">
            {LANDING_THREE.ctaSection.titleMain} <br />
            <span className="text-white">{LANDING_THREE.ctaSection.titleSub}</span>
          </h1>

          <div className="flex justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-xs md:text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95">
              {LANDING_THREE.ctaSection.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-[#161A22] px-6 md:px-20 pt-16 md:pt-24 pb-8 md:pb-12 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">

          {/* Logo & Description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-600" />
              <span className="text-lg md:text-xl font-semibold tracking-tight">LOGO</span>
            </div>
            <p className="text-gray-400 text-[12px] md:text-sm leading-relaxed max-w-xs mb-6">
              {FOOTER_DATA.description}
            </p>
            <div className="flex items-center gap-4">
              <img src={TwitterIcon} alt="Twitter" className="w-[22px] h-[22px] md:w-[27px] md:h-[27px] cursor-pointer" />
              <img src={FacebookIcon} alt="Facebook" className="w-[22px] h-[22px] md:w-[27px] md:h-[27px] cursor-pointer" />
              <img src={InstagramIcon} alt="Instagram" className="w-[22px] h-[22px] md:w-[27px] md:h-[27px] cursor-pointer" />
            </div>
          </div>

          {/* Dynamic Sections (Company, Help) */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4 md:grid-cols-2">
            {FOOTER_DATA.sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-[12px] md:text-sm font-semibold mb-4 md:mb-6 uppercase tracking-wider">{section.title}</h4>
                <ul className="space-y-3 md:space-y-4 text-[12px] md:text-sm text-gray-400">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx} className="hover:text-white cursor-pointer transition-colors">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-[12px] md:text-sm font-semibold mb-4 md:mb-6 uppercase tracking-wider">{FOOTER_DATA.newsletter.title}</h4>
            <div className="flex w-full">
              <input
                type="email"
                placeholder={FOOTER_DATA.newsletter.placeholder}
                className="flex-1 bg-[#16181D] border border-white/10 rounded-l-lg px-4 py-2.5 text-[12px] md:text-sm text-white outline-none focus:border-blue-500 min-w-0"
              />
              <button className="bg-blue-600 px-4 md:px-6 py-2.5 text-[12px] md:text-sm font-semibold rounded-r-lg hover:bg-blue-500 transition-colors whitespace-nowrap">
                {FOOTER_DATA.newsletter.buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-7xl mx-auto mt-12 md:mt-20 pt-8 border-t border-white/5 text-center text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] text-gray-500 uppercase">
          {FOOTER_DATA.copyright}
        </div>
      </footer>
    </>
  );
};

export default LandingPageThree;