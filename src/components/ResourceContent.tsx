import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import LandingPageThree from "../components/Landingthree";
import { BLOG_DETAILS, BLOG_LABELS, RESOURCES_CONTENT } from './constants';

const ResourceContactPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find content based on ID or fallback
  const content = BLOG_DETAILS[id || "1"] || BLOG_DETAILS["1"];
  const relatedBlogs = RESOURCES_CONTENT.blogs.list.filter(b => b.id.toString() !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-[#08090A] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Ensure DM Sans is applied globally or via this style tag */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
          body { font-family: 'DM Sans', sans-serif; }`}
      </style>

      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="pt-12 md:pt-20 pb-16 md:pb-24 text-center px-6">
          <div className="max-w-[1200px] mx-auto">
            <span className="relative inline-flex items-center justify-center p-[1px] rounded-full group">
              <span className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, #4F7CFF 0%, rgba(79, 124, 255, 0.5) 40%, rgba(255, 255, 255, 0) 100%)" }} />
              <span className="relative inline-flex items-center justify-center px-6 md:px-10 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm font-medium text-white bg-[#161C2F] whitespace-nowrap uppercase tracking-wider">
                {BLOG_LABELS.badge}
              </span>
            </span>

            {/* Mobile Title: text-3xl, Desktop: text-[48px] */}
            <h1 className="mt-6 md:mt-[33px] text-3xl md:text-[48px] font-semibold tracking-tight leading-[1.2] text-white max-w-3xl mx-auto">
              {content.heroTitle}
            </h1>
          </div>
        </section>

        {/* --- ARTICLE CONTENT AREA --- */}
        {/* Sharp corner: rounded-t-[2px] */}
        <section className="bg-white text-slate-900 rounded-t-[2px] min-h-screen">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-8 md:py-12">
            
            {/* BACK BUTTON */}
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 mb-8 md:mb-12 text-black hover:opacity-60 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{BLOG_LABELS.backButton}</span>
            </button>

            <div className="grid grid-cols-12 gap-8 lg:gap-16">
              
              {/* LEFT: Table of Contents (Desktop Only) */}
              <aside className="hidden lg:block col-span-2">
                <nav className="sticky top-32">
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6">{BLOG_LABELS.tocTitle}</h4>
                  <ul className="space-y-4">
                    {content.sections.map((s: any) => (
                      <li key={s.id}>
                        <a href={`#section-${s.id}`} className="text-[12px] text-gray-400 hover:text-black transition block leading-relaxed">
                          {s.id} — {s.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              {/* CENTER: Article Body */}
              <article className="col-span-12 lg:col-span-7 md:px-4">
                <div className="mb-12 md:mb-16">
                  {/* Category & Date: Clean/Sharp Typography */}
                  <div className="flex items-center gap-4 mb-4">
                
                  </div>

                
                </div>

                <div className="space-y-12 md:space-y-20">
                  {content.sections.map((section: any) => (
                    <section key={section.id} id={`section-${section.id}`} className="scroll-mt-32">
                      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-black">
                        {section.id} — {section.heading}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base md:text-[17px] font-normal">
                        {section.text}
                      </p>
                    </section>
                  ))}
                </div>
              </article>

              {/* RIGHT: Related Sidebar */}
              <aside className="col-span-12 lg:col-span-3 mt-12 lg:mt-0 border-t lg:border-t-0 border-gray-100 pt-10 lg:pt-0">
                <div className="sticky top-32">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 md:mb-8">{BLOG_LABELS.relatedTitle}</h4>
                  <div className="space-y-8 md:space-y-12">
                    {relatedBlogs.map((blog) => (
                      <div 
                        key={blog.id} 
                        onClick={() => navigate(`/resources/${blog.id}`)}
                        className="group cursor-pointer block"
                      >
                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">{blog.category}</p>
                        <h5 className="text-[14px] font-bold leading-snug text-black group-hover:text-blue-600 transition">
                          {blog.title}
                        </h5>
                        <p className="text-[10px] text-gray-400 mt-2 font-medium">{blog.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

            </div>
          </div>

          <div className="bg-[#08090A] mt-20">
            <LandingPageThree />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResourceContactPage;