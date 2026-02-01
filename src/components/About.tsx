import React from 'react';
import Header from './Header'; 
import LandingThree from './Landingthree';
import { ABOUT_US_CONTENT } from './constants'; // Import the content

const LandingPage: React.FC = () => {
  const { badge, title, statsSection } = ABOUT_US_CONTENT;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Import DM Sans Font */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap');
      `}} />

      <Header />

      <main className="max-w-7xl mx-auto px-5 pt-8 md:pt-12 pb-20 text-center">
        
        {/* About Us Badge */}
        <span className="relative inline-flex items-center justify-center p-[1px] rounded-full group mb-6 md:mb-8">
          <span 
            className="absolute inset-0 rounded-full" 
            style={{ background: "linear-gradient(135deg, #4F7CFF 0%, rgba(79, 124, 255, 0.5) 40%, rgba(255, 255, 255, 0) 100%)" }} 
          />
          <span className="relative inline-flex items-center justify-center px-4 py-1 rounded-full text-[10px] md:text-[11px] font-medium text-white bg-[#161C2F] whitespace-nowrap uppercase tracking-wider">
            {badge}
          </span>
        </span>

        {/* Hero Title */}
        <h1 
          className="text-[28px] leading-[1.15] md:text-6xl tracking-tight mb-12 md:mb-20 max-w-[18ch] md:max-w-3xl mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          {title.line1} <br className="hidden md:block" /> {title.line2}
        </h1>

        {/* Content Section */}
        <div className="text-left max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
            {statsSection.heading}
          </h2>
          <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed mb-8 md:mb-12">
            {statsSection.description}
          </p>

          {/* Video / Image Placeholder */}
          <div className="w-full aspect-video bg-[#1e1e20] rounded-xl md:rounded-2xl border border-white/5 mb-10 md:mb-16 shadow-2xl transition-all hover:border-white/10">
            {/* Visual content goes here */}
          </div>

          {/* Stats / Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 py-8 border-t border-white/5">
            {statsSection.stats.map((stat) => (
              <div key={stat.id} className="space-y-1 md:space-y-2">
                <div className="text-xl md:text-2xl font-semibold">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-[#9CA3AF] uppercase tracking-widest leading-none">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <LandingThree />
    </div>
  );
};

export default LandingPage;