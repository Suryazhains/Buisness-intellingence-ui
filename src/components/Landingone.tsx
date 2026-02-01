import React, { Suspense, lazy } from 'react';
import Header from './Header';
import { FINANCE_CONTENT, THEME } from './constants';

// Performance: Pre-importing critical assets
import bgImage from '../assets/bg.png'; 
import blueShadowAsset from '../assets/shadow.png';

const LandingTwo = lazy(() => import("./Landingtwo"));

const FinanceHero: React.FC = () => {
  return (
    <div className="bg-[#030405] text-white overflow-x-hidden selection:bg-blue-500/30" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '45px 45px' 
          }} 
        />
        
        <div 
          className="absolute inset-0 z-1 bg-cover bg-no-repeat bg-right-top opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 90%)',
            willChange: 'transform'
          }}
        />
        
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none z-2 will-change-[filter]" />

        <Header />

        <main className="relative z-10 flex flex-col items-center text-center mt-24 px-4">
<span className="relative inline-flex items-center justify-center p-[1px] rounded-full group">
  {/* The Gradient Border */}
  <span className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, #4F7CFF 0%, rgba(79, 124, 255, 0.5) 40%, rgba(255, 255, 255, 0) 100%)" }} />
  
  {/* The Content: Kept px-4 py-1, but reduced text size to fit better */}
  <span className="relative inline-flex items-center justify-center px-4 py-1 rounded-full text-[11px] font-medium text-white bg-[#161C2F] whitespace-nowrap">
    {FINANCE_CONTENT.hero.badge}
  </span>
</span>
          <h1 className="mt-8 text-5xl md:text-[84px] font-bold tracking-tight max-w-5xl leading-[1.05]" style={{ color: THEME.colors.alabaster }}>
            {FINANCE_CONTENT.hero.titleMain} <br />
            <span >{FINANCE_CONTENT.hero.titleSub}</span>
          </h1>

          <p className="mt-8 text-gray-500 text-lg md:text-xl max-w-2xl font-normal leading-relaxed">
            {FINANCE_CONTENT.hero.description}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
        <button
  style={{ ...THEME.styles.innerShadow, backgroundColor: THEME.colors.primaryBlue }}
  className="px-6 py-2.5 rounded-[6px] font-500 text-[13px] leading-none active:scale-95 transition-all shadow-xl shadow-blue-500/20"
>
  {FINANCE_CONTENT.hero.ctaPrimary}
</button>

<button className="flex items-center gap-1.5 border border-[#4F7CFF] text-[#4F7CFF] bg-transparent hover:bg-[#4F7CFF]/10 px-5 py-2.5 rounded-[6px] font-bold text-[13px] leading-none group transition-all active:scale-95">
  {FINANCE_CONTENT.hero.ctaSecondary}
  <svg
    className="transform group-hover:translate-x-1 transition-transform"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
</button>

          </div>

          <div className="mt-32 w-full max-w-6xl mx-auto px-4">
            <div className="w-full h-[520px] rounded-t-[48px] bg-[#0C0D0E] border-x border-t border-white/10 relative overflow-hidden shadow-[0_-30px_100px_-20px_rgba(79,124,255,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#030405] via-[#030405]/80 to-transparent" />
            </div>
          </div>
        </main>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="relative py-32 px-6 bg-[#030405] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] opacity-60 pointer-events-none z-0">
          <img src={blueShadowAsset} alt="Shadow Glow" className="w-full h-auto blur-2xl" loading="lazy" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
      <span className="relative inline-flex items-center justify-center p-[1px] rounded-full">
                 <span
                   className="absolute inset-0 rounded-full"
                   style={{
                     background: "linear-gradient(135deg, #4F7CFF 0%, rgba(79,124,255,0.5) 40%, rgba(255,255,255,0) 100%)",
                   }}
                 />
                 <span className="relative px-6 py-2 md:px-8 md:py-3 rounded-full text-[10px] md:text-sm font-medium bg-[#0F1115]">
               Features
                 </span>
               </span>
            <h2 className="text-5xl mt-6 md:text-6xl font-bold mb-6 tracking-tighter" style={{ ...THEME.styles.textDepth, color: THEME.colors.alabaster }}>
              {FINANCE_CONTENT.features.heading}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              {FINANCE_CONTENT.features.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-3 p-8 rounded-[35px] bg-[#0C0D0E] border border-white/5 flex flex-col items-center text-center group hover:border-white/10 transition-colors">
              <h3 className="font-bold text-[18px] mb-2" style={{ color: THEME.colors.alabaster }}>Borem ipsum</h3>
              <p className="text-[11px] text-gray-600 mb-8 leading-relaxed">{FINANCE_CONTENT.cards.shortText}</p>
              <div style={THEME.styles.cardInnerShadow} className="w-full aspect-square bg-[#050607] rounded-[24px] border border-white/[0.03]" />
            </div>

            <div className="md:col-span-6 p-8 rounded-[35px] bg-[#0C0D0E] border border-white/5 flex flex-col items-center text-center group hover:border-white/10 transition-colors">
              <h3 className="font-bold text-[18px] mb-2" style={{ color: THEME.colors.alabaster }}>Borem ipsum Borem</h3>
              <p className="text-[11px] text-gray-600 mb-8 max-w-xs leading-relaxed">{FINANCE_CONTENT.cards.longText}</p>
              <div style={THEME.styles.cardInnerShadow} className="w-full flex-grow min-h-[220px] bg-[#050607] rounded-[24px] border border-white/[0.03]" />
            </div>

            <div className="md:col-span-3 p-8 rounded-[35px] bg-[#0C0D0E] border border-white/5 flex flex-col items-center text-center group hover:border-white/10 transition-colors">
              <h3 className="font-bold text-[18px] mb-2" style={{ color: THEME.colors.alabaster }}>Borem ipsum</h3>
              <p className="text-[11px] text-gray-600 mb-8 leading-relaxed">{FINANCE_CONTENT.cards.shortText}</p>
              <div style={THEME.styles.cardInnerShadow} className="w-full aspect-square bg-[#050607] rounded-[24px] border border-white/[0.03]" />
            </div>

            <div className="md:col-span-6 p-10 rounded-[35px] bg-[#0C0D0E] border border-white/5 flex flex-col group hover:border-white/10 transition-colors">
              <h3 className="font-bold text-[18px] mb-3" style={{ ...THEME.styles.textDepth, color: THEME.colors.alabaster }}>Borem ipsum Borem Borem ipsum Borem</h3>
              <p className="text-[11px] text-gray-600 mb-10 leading-relaxed max-w-md">{FINANCE_CONTENT.cards.longText}</p>
              <div style={THEME.styles.cardInnerShadow} className="w-full h-[260px] bg-[#050607] rounded-[24px] border border-white/[0.03]" />
            </div>

            <div className="md:col-span-6 p-12 rounded-[35px] bg-[#0C0D0E] border border-white/5 flex flex-col justify-center items-start group hover:border-white/10 transition-colors">
              <h2 className="text-3xl md:text-[42px] font-bold leading-[1.1] mb-6 max-w-sm tracking-tighter" style={{ ...THEME.styles.textDepth, color: THEME.colors.alabaster }}>
                {FINANCE_CONTENT.cards.managementTitle}
              </h2>
              <p className="text-gray-500 text-sm mb-10 max-w-md leading-relaxed">{FINANCE_CONTENT.cards.longText}</p>
       <button 
  style={{ ...THEME.styles.innerShadow, backgroundColor: THEME.colors.primaryBlue }} 
  className="px-6 py-2.5 rounded-lg text-[11px] leading-none font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-blue-500/20"
>
  {FINANCE_CONTENT.hero.ctaPrimary}
</button>

            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-20 w-full bg-[#030405]" />}>
          <LandingTwo />
      </Suspense>
    </div>
  );
};

export default FinanceHero;