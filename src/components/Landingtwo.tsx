import React, { useState } from "react";
import { motion } from "framer-motion";
import LandingPageThree from "../components/Landingthree";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { LANDING_TWO } from './constants';

export default function FullLandingPage() {
  const { benefits, howItWorks, customers } = LANDING_TWO;
  
  // Slider State
  const [sliderItems, setSliderItems] = useState(benefits.testimonials);
  
  // Tab State
  const [activeStep, setActiveStep] = useState(howItWorks.tabs[0]);
  const currentStepContent = howItWorks.steps[activeStep as keyof typeof howItWorks.steps];

  const moveRight = () => {
    setSliderItems((prev) => {
      const newArr = [...prev];
      const last = newArr.pop();
      if (last) newArr.unshift(last);
      return newArr;
    });
  };

  const moveLeft = () => {
    setSliderItems((prev) => {
      const newArr = [...prev];
      const first = newArr.shift();
      if (first) newArr.push(first);
      return newArr;
    });
  };

  return (
    <div className="bg-[#08090A] text-white min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* 1. DARK TESTIMONIAL SLIDER (Benefits) */}
      <section id="benefits" className="py-12 md:py-24 px-4 overflow-hidden flex flex-col items-center bg-[#08090A]">
        <div className="text-center mb-8 md:mb-16">
          <span className="relative inline-flex items-center justify-center p-[1px] rounded-full">
            <span className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, #4F7CFF 0%, rgba(79,124,255,0.5) 40%, rgba(255,255,255,0) 100%)" }} />
            <span className="relative px-6 py-2 md:px-8 md:py-3 rounded-full text-[10px] md:text-sm font-medium bg-[#0F1115]">
              {benefits.badge}
            </span>
          </span>
          <h2 className="mt-6 text-2xl md:text-5xl font-bold px-2">{benefits.heading}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[11px] md:text-sm mt-3 px-4">{benefits.subheading}</p>
        </div>

        <div className="relative w-full max-w-7xl flex justify-center gap-4 md:gap-6 px-4">
          {sliderItems.slice(0, 1).map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-white text-black rounded-[18px] shadow-2xl p-6 md:p-10 flex flex-col items-start w-full md:w-[700px] h-auto md:min-h-[510px]"
            >
              <h3 className="font-bold text-lg md:text-2xl mb-3 text-left">{item.title}</h3>
              <p className="text-[11px] md:text-sm text-gray-600 mb-8 text-left max-w-lg leading-relaxed">{item.text}</p>
              <div className="rounded-2xl md:rounded-3xl bg-[#08090A] w-full aspect-video flex-1" />
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <button onClick={moveLeft} className="p-3 md:p-4 rounded-full bg-[#16181D] border border-white/10 hover:bg-white/5 transition"><ChevronLeft size={18} /></button>
          <button onClick={moveRight} className="p-3 md:p-4 rounded-full bg-[#16181D] border border-white/10 hover:bg-white/5 transition"><ChevronRight size={18} /></button>
        </div>
      </section>

      {/* 2. HOW TO GET STARTED (Tabbed Section) */}
      <section id="get-started" className="bg-[#0B0C10] py-12 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="relative inline-flex items-center justify-center p-[1px] rounded-full">
              <span className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, #4F7CFF 0%, rgba(79,124,255,0.5) 40%, rgba(255,255,255,0) 100%)" }} />
              <span className="relative inline-flex px-4 py-1 rounded-full text-[10px] md:text-xs font-semibold bg-[#161C2F]">{howItWorks.badge}</span>
            </span>
            <h2 className="text-2xl md:text-5xl font-bold mt-6 mb-4">{howItWorks.heading}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-[11px] md:text-sm leading-relaxed">{howItWorks.subheading}</p>
          </div>

          <div className="flex border-b border-gray-900 mb-8 md:mb-16 overflow-x-auto no-scrollbar">
            {howItWorks.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveStep(tab)}
                className={`pb-3 px-6 text-[11px] md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeStep === tab ? 'border-b-2 border-blue-500 text-white' : 'text-gray-600 hover:text-gray-400'
                }`}
              >{tab}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="bg-[#12131A] rounded-[24px] md:rounded-[32px] aspect-square border border-white/5 shadow-2xl order-2 lg:order-1" />
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <h3 className="text-xl md:text-4xl font-bold leading-tight whitespace-pre-line">{currentStepContent.title}</h3>
              <p className="text-gray-500 text-[12px] md:text-base leading-relaxed max-w-md">{currentStepContent.description}</p>
              <button className="w-full md:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-3.5 rounded-xl font-semibold transition-all active:scale-95">
                {howItWorks.ctaText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CUSTOMERS SECTION (White Background) */}
      <section id="customers" className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center text-black">
          <span className="relative inline-flex items-center justify-center p-[1px] rounded-full">
            <span className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(105deg, #4F7CFF 0%, rgba(79,124,255,0.5) 10%, rgba(255,255,255,0) 100%)" }} />
            <span className="relative px-4 py-1 rounded-full text-[10px] md:text-sm font-medium bg-white">{customers.badge}</span>
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-4">{customers.heading}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[11px] md:text-sm mb-10 md:mb-16">{customers.subheading}</p>
          
          <div className="relative w-full max-w-3xl flex flex-col items-center">
            <div className="bg-gray-50 border border-gray-100 rounded-[24px] p-6 md:p-12 text-left w-full shadow-sm">
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-8 italic">"{customers.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300" />
                <span className="font-semibold text-[12px] md:text-sm">{customers.author}</span>
              </div>
            </div>
            {/* Nav Arrows */}
            <div className="flex gap-4 mt-6 md:absolute md:mt-0 md:inset-x-[-80px] md:top-1/2 md:-translate-y-1/2 md:justify-between w-full justify-center">
              <button className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 bg-white"><ChevronLeft size={20} /></button>
              <button className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 bg-white"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      <LandingPageThree />
    </div>
  );
}