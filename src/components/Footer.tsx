import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] py-14">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Top Footer Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-stone-800 gap-6">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-2xl font-normal text-white">
              {portfolioData.personal.fullName}
            </span>
            <span className="text-xs text-stone-400 uppercase tracking-widest">
              • {portfolioData.personal.professionalTitle}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Metadata & Links */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {currentYear} {portfolioData.personal.fullName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a href="#philosophy" className="hover:text-white transition-colors">
              Philosophy
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#businesses" className="hover:text-white transition-colors">
              Ventures
            </a>
            <a href="#timeline" className="hover:text-white transition-colors">
              Timeline
            </a>
            <a href="#credentials" className="hover:text-white transition-colors">
              Credentials
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div>
            {portfolioData.personal.location} • {portfolioData.personal.academicDistinction}
          </div>
        </div>

        {/* Subtle Developer Colophon */}
        <div className="mt-8 pt-6 border-t border-stone-800/80 flex items-center justify-end text-[11px] text-stone-500">
          <div className="flex items-center gap-1.5 text-stone-400">
            <span className="text-stone-500 text-[11px]">Designed & Engineered by</span>
            <span className="font-medium text-stone-300 hover:text-white transition-colors tracking-wide">
              Kyle Nero A. Santos
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
