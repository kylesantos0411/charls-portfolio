import React, { useState, useEffect } from 'react';
import { ArrowDown, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'About', href: '#about' },
    { name: 'Ventures', href: '#businesses' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'philosophy', 'about', 'businesses', 'timeline', 'credentials', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/92 backdrop-blur-md border-b border-stone-200/80 py-3.5 shadow-xs'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Monogram & Name */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-hidden focus:ring-2 focus:ring-[#174A3B] rounded-sm shrink-0"
          aria-label="Charls Andrada Homepage"
        >
          <span className="w-8 h-8 rounded-full bg-[#EAF3EE] border border-[#BCD4C6] text-[#174A3B] flex items-center justify-center text-xs font-serif font-semibold tracking-normal group-hover:bg-[#174A3B] group-hover:text-white transition-all duration-300 shrink-0">
            {portfolioData.personal.monogram}
          </span>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
            <span className="font-serif text-lg sm:text-xl font-normal tracking-tight text-stone-900 group-hover:text-[#174A3B] transition-colors whitespace-nowrap">
              {portfolioData.personal.fullName}
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-widest text-[#B94C29] uppercase font-medium">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Active State */}
        <div className="flex items-center gap-5 sm:gap-7">
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs tracking-wider uppercase py-1 transition-colors relative font-medium ${
                    isActive
                      ? 'text-[#174A3B] font-semibold'
                      : 'text-stone-600 hover:text-[#174A3B]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#174A3B]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Understated Resume Button with Spruce Accent */}
          <a
            href={portfolioData.personal.resumePdfPath}
            download="Charls_Andrada_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 border border-[#BCD4C6] bg-[#EAF3EE] text-[#174A3B] hover:bg-[#174A3B] hover:text-white hover:border-[#174A3B] transition-all duration-200 shadow-2xs"
          >
            <span>Resume</span>
            <ArrowDown className="w-3 h-3" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-800 hover:bg-[#EAF3EE] hover:text-[#174A3B] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm tracking-wider py-2.5 border-b border-stone-200/60 uppercase font-medium flex items-center justify-between ${
                    isActive ? 'text-[#174A3B] font-bold bg-[#EAF3EE]/50 px-2' : 'text-stone-700'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#174A3B]" />}
                </a>
              );
            })}
            <a
              href={portfolioData.personal.resumePdfPath}
              download="Charls_Andrada_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 mt-4 px-4 py-3 bg-[#174A3B] text-white text-xs font-semibold uppercase tracking-widest shadow-xs"
            >
              <span>Download Resume (PDF)</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#BCD4C6]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
