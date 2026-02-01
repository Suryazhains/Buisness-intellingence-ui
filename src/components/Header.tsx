import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
import glowImage from "../assets/shadow.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Home", path: "/", sectionId: "hero" },
    { 
      name: "Product", 
      path: "/", 
      sectionId: "product",
      dropdown: [
        { name: "Features", sectionId: "features" },
        { name: "Benefits", sectionId: "benefits" },
        { name: "How to Get Started", sectionId: "get-started" }
      ]
    },
    { name: "About us", path: "/about", sectionId: "about" },
    { name: "Customers", path: "/", sectionId: "customers" },
    { name: "Resources", path: "/resources", sectionId: "resources" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (sectionId: string, path: string = "/") => {
    setIsOpen(false);
    setShowProductDropdown(false);

    if (location.pathname === path) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`${path}#${sectionId}`);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      {!isHome && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[700px] pointer-events-none z-0 overflow-hidden">
          <div 
            className="absolute top-[-150px] left-0 w-full h-full opacity-70"
            style={{ 
              backgroundImage: `url(${glowImage})`, 
              backgroundSize: '100% auto', 
              backgroundPosition: 'top center', 
              backgroundRepeat: 'no-repeat', 
              mixBlendMode: 'screen' 
            }}
          />
        </div>
      )}

      <header className="relative z-50 flex justify-center pt-6 md:pt-10 px-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <nav 
          className="flex items-center justify-between w-full max-w-[1120px] rounded-full border border-white/10 backdrop-blur-[20px] shadow-2xl px-6 py-4 md:px-[42px] md:py-[23px]" 
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 outline-none">
            <div className="relative flex items-center">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-[2px] border-[#4f70f6] bg-transparent" />
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-[2px] border-[#6381f8] bg-transparent -ml-2.5" />
            </div>
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">Logo</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-gray-400">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative py-2"
                onMouseEnter={() => link.name === "Product" && setShowProductDropdown(true)}
                onMouseLeave={() => link.name === "Product" && setShowProductDropdown(false)}
              >
                <button
                  onClick={() => handleNavClick(link.sectionId, link.path)}
                  className="relative transition-colors duration-300 hover:text-white group/nav"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-white transition-all duration-300 group-hover/nav:w-full" />
                </button>

                {link.dropdown && showProductDropdown && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 rounded-2xl border border-white/10 backdrop-blur-[0px] p-2 shadow-2xl flex flex-col"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                  >
                    {link.dropdown.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.sectionId)}
                        className="w-full text-left px-4 py-3 text-[12px] font-medium text-gray-300 bg-transparent hover:bg-transparent"
                      >
                        <span className="text-gray-300 hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Button (Desktop Only) */}
          <Link to="/contact" className="hidden md:block">
            <button 
              style={{ 
                backgroundColor: '#4F7CFF', 
                boxShadow: 'inset -1.43px -1.91px 3.35px rgba(255, 255, 255, 0.15)' 
              }} 
              className="w-[117px] h-[34px] rounded-[6px] text-white text-xs font-bold hover:brightness-110 transition-all"
            >
              Book a Call
            </button>
          </Link>

          {/* Mobile Menu Toggle - Reduced opacity to 50% */}
          <button 
            className="md:hidden text-white/50 hover:text-white transition-colors duration-300" 
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </nav>

        {/* MOBILE SIDEBAR */}
        <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className={`absolute right-0 top-0 h-full w-[280px] bg-[#0a0a0c] border-l border-white/10 p-8 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            
            <div className="flex justify-end mb-8">
              {/* Close Button - Reduced opacity to 50% */}
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/50 hover:text-white transition-colors duration-300"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <button 
                    onClick={() => handleNavClick(link.sectionId, link.path)} 
                    className="text-left text-lg font-normal text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                  {link.dropdown && (
                    <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
                      {link.dropdown.map(item => (
                        <button 
                          key={item.name} 
                          onClick={() => handleNavClick(item.sectionId)} 
                          className="text-left text-sm font-normal text-gray-500 hover:text-[#4F7CFF] transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;