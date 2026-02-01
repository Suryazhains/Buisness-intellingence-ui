import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; 
import LandingPageThree from "../components/Landingthree";
import { RESOURCES_CONTENT, THEME } from './constants';

const ResourcesPage: React.FC = () => {
  const { header, blogs } = RESOURCES_CONTENT;
  
  // Quick access to specific IDs for the featured layout
  const mainFeatured = blogs.list.find(b => b.id === 1);
  const sideFeatured = blogs.list.filter(b => b.id === 2 || b.id === 3);

  return (
    <div className="min-h-screen bg-[#08090A] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Header />

      {/* Reduced padding-top for mobile (pt-10) and desktop (pt-16) */}
      <main className="pt-10 md:pt-16">
        
        {/* --- HEADER SECTION --- */}
        <section className="relative mb-10 md:mb-16 text-center px-6">
          <div className="max-w-[1200px] mx-auto">
            <span className="relative inline-flex items-center justify-center p-[1px] rounded-full group">
              {/* The Gradient Border */}
              <span className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, #4F7CFF 0%, rgba(79, 124, 255, 0.5) 40%, rgba(255, 255, 255, 0) 100%)" }} />
              
              {/* The Inner Box */}
              <span className="relative inline-flex items-center justify-center px-4 py-1 rounded-full text-[10px] md:text-sm font-medium text-white bg-[#161C2F] whitespace-nowrap uppercase tracking-wider">
                {header.badge}
              </span>
            </span>

            {/* Title: Scaling to text-3xl on mobile to keep it to 2 lines */}
            <h1 className="pt-5 md:pt-6 text-3xl md:text-[56px] font-medium tracking-tight leading-[1.2] md:leading-[1.1] text-white max-w-4xl mx-auto">
              {header.title}
            </h1>
          </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        {/* Changed rounded-t to 4px for sharper look */}
        <section className="bg-white pt-12 md:pt-16 pb-20 md:pb-32 px-5 md:px-16 rounded-t-[4px]">
          <div className="max-w-[1200px] mx-auto">

            {/* FEATURED GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 md:mb-28">

              {/* Main Featured - Sharp Corners */}
              {mainFeatured && (
                <Link to={`/resources/${mainFeatured.id}`} className="lg:col-span-2 bg-[#F8F9FA] border border-gray-200 rounded-[2px] overflow-hidden hover:shadow-lg transition-shadow block">
                  <div className="aspect-[16/9] bg-gray-200" />
                  <div className="p-6 md:p-8">
                    <p className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-slate-500">{mainFeatured.category}</p>
                    <h3 className="mt-2 md:mt-3 text-xl md:text-[22px] font-medium leading-snug text-slate-900 max-w-xl">
                      {mainFeatured.title}
                    </h3>
                    <p className="mt-4 text-xs md:text-sm font-medium text-gray-400">{mainFeatured.date}</p>
                  </div>
                </Link>
              )}

              {/* Side Cards - Corners set to rounded-[4px] for sharp feel */}
              <div className="flex flex-col gap-6">
                {sideFeatured.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/resources/${blog.id}`}
                    className="flex flex-col justify-end bg-[#F8F9FA] border border-gray-200 rounded-[4px] p-6 md:p-8 min-h-[200px] md:min-h-[240px] hover:shadow-md transition-shadow"
                  >
                    <p className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-slate-500">{blog.category}</p>
                    <h3 className="mt-2 md:mt-3 text-lg md:text-[18px] font-medium leading-snug text-slate-900">
                      {blog.title}
                    </h3>
                    <p className="mt-4 text-xs md:text-sm font-medium text-gray-400">{blog.date}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* ALL BLOGS LIST */}
            <div>
              <h2 className="mb-6 md:mb-10 text-[10px] md:text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-400">
                {blogs.sectionTitle}
              </h2>

              <div className="divide-y divide-gray-200 border-t border-gray-200">
                {blogs.list.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/resources/${blog.id}`}
                    className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-7 hover:bg-gray-50 transition px-2"
                  >
                    <p className="text-base md:text-[17px] font-semibold text-slate-900 group-hover:text-blue-600 transition">
                      {blog.title}
                    </p>

                    <div className="mt-3 md:mt-0 flex items-center justify-between md:justify-end md:gap-24">
                      <div className="flex gap-8 md:gap-24">
                        <span className="text-xs md:text-sm font-medium text-gray-400 min-w-[70px] md:min-w-[90px]">{blog.category}</span>
                        <span className="text-xs md:text-sm font-medium text-gray-400 min-w-[70px] md:min-w-[90px]">{blog.date}</span>
                      </div>

                      <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border border-gray-300 rounded-full group-hover:border-blue-600 group-hover:text-blue-600 transition">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="md:w-[14px] md:h-[14px]">
                          <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LandingPageThree />
      </main>
    </div>
  );
};

export default ResourcesPage;