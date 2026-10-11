import React from 'react';
import { Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  const { philosophy } = portfolioData;

  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 bg-[#FAF8F5] text-stone-900 border-b border-stone-200/80 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header & Numbering */}
        <div className="pb-8 border-b border-stone-200/80 flex items-center justify-between text-xs tracking-widest text-stone-500 uppercase font-medium">
          <span className="inline-flex items-center gap-2 text-[#174A3B]">
            <Compass className="w-3.5 h-3.5" />
            <span>01 / Core Operating Philosophy</span>
          </span>
          <span className="text-stone-400 font-mono text-[11px]">ETHOS & DISCIPLINE</span>
        </div>

        {/* Oversized Editorial Centerpiece */}
        <div className="mt-16 sm:mt-20 max-w-4xl space-y-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B94C29] block">
            Entrepreneurial Conviction
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 leading-[1.15] tracking-tight">
            {philosophy.statementPrefix}{' '}
            <span className="italic text-[#174A3B] underline decoration-[#BCD4C6] decoration-1 underline-offset-8">
              {philosophy.statementHighlight}
            </span>
            {philosophy.statementSuffix}
          </h2>

          <p className="text-base sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl pt-2">
            {philosophy.subheadline}
          </p>
        </div>

        {/* 4 Distinctive Operating Principles Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 border-t border-stone-200/80">
          {philosophy.principles.map((principle) => (
            <div
              key={principle.number}
              className="bg-white p-6 sm:p-7 border border-stone-200/90 flex flex-col justify-between space-y-6 shadow-2xs hover:border-[#174A3B] transition-colors duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-stone-400 group-hover:text-[#174A3B] transition-colors">
                    [{principle.number}]
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 group-hover:bg-[#174A3B] transition-colors" />
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-950 leading-snug group-hover:text-[#174A3B] transition-colors">
                  {principle.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal pt-2 border-t border-stone-100">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
