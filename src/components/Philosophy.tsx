import React from 'react';
import { Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  const { philosophy } = portfolioData;

  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 bg-[#FAF8F5] dark:bg-[#11100E] text-stone-900 dark:text-stone-100 border-b border-stone-200/80 dark:border-stone-800/80 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header & Numbering */}
        <div className="pb-8 border-b border-stone-200/80 dark:border-stone-800/80 flex items-center justify-between text-xs tracking-widest text-stone-500 dark:text-stone-400 uppercase font-medium">
          <span className="inline-flex items-center gap-2 text-[#174A3B] dark:text-[#3D9E82]">
            <Compass className="w-3.5 h-3.5" />
            <span>01 / Core Operating Philosophy</span>
          </span>
          <span className="text-stone-400 dark:text-stone-500 font-mono text-[11px]">ETHOS & DISCIPLINE</span>
        </div>

        {/* Oversized Editorial Centerpiece */}
        <div className="mt-16 sm:mt-20 max-w-4xl space-y-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B94C29] dark:text-[#E0734F] block">
            Entrepreneurial Conviction
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 dark:text-stone-50 leading-[1.15] tracking-tight">
            {philosophy.statementPrefix}{' '}
            <span className="italic text-[#174A3B] dark:text-[#3D9E82] underline decoration-[#BCD4C6] dark:decoration-[#245544] decoration-1 underline-offset-8">
              {philosophy.statementHighlight}
            </span>
            {philosophy.statementSuffix}
          </h2>

          <p className="text-base sm:text-xl text-stone-600 dark:text-stone-300 font-normal leading-relaxed max-w-2xl pt-2">
            {philosophy.subheadline}
          </p>
        </div>

        {/* 4 Distinctive Operating Principles Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 border-t border-stone-200/80 dark:border-stone-800/80">
          {philosophy.principles.map((principle) => (
            <div
              key={principle.number}
              className="bg-white dark:bg-[#181714] p-6 sm:p-7 border border-stone-200/90 dark:border-stone-800 flex flex-col justify-between space-y-6 shadow-2xs hover:border-[#174A3B] dark:hover:border-[#3D9E82] transition-colors duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-stone-400 dark:text-stone-500 group-hover:text-[#174A3B] dark:group-hover:text-[#3D9E82] transition-colors">
                    [{principle.number}]
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-600 group-hover:bg-[#174A3B] dark:group-hover:bg-[#3D9E82] transition-colors" />
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-950 dark:text-stone-100 leading-snug group-hover:text-[#174A3B] dark:group-hover:text-[#3D9E82] transition-colors">
                  {principle.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-normal pt-2 border-t border-stone-100 dark:border-stone-800/80">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
