import React from 'react';
import { Award, Calendar, Milestone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const { timeline } = portfolioData;

  const getBadgeStyle = (badgeType?: string) => {
    switch (badgeType) {
      case 'terracotta':
        return 'bg-[#FDF2EB] dark:bg-[#301B14] text-[#B94C29] dark:text-[#E0734F] border-[#F5D3C1] dark:border-[#5C2D1F]';
      case 'spruce':
        return 'bg-[#EAF3EE] dark:bg-[#132D24] text-[#174A3B] dark:text-[#3D9E82] border-[#BCD4C6] dark:border-[#245544]';
      case 'stone':
      default:
        return 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700';
    }
  };

  return (
    <section
      id="timeline"
      className="py-24 bg-[#FAF8F5] dark:bg-[#11100E] text-stone-900 dark:text-stone-100 border-b border-stone-200/80 dark:border-stone-800/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="pb-8 border-b border-stone-200/80 dark:border-stone-800/80 flex items-center justify-between text-xs tracking-widest text-stone-500 dark:text-stone-400 uppercase font-medium">
          <span className="inline-flex items-center gap-2 text-[#174A3B] dark:text-[#3D9E82]">
            <Milestone className="w-3.5 h-3.5" />
            <span>04 / Chronological Trajectory</span>
          </span>
          <span className="text-stone-400 dark:text-stone-500 font-mono text-[11px]">2022 — 2026</span>
        </div>

        {/* Section Headline */}
        <div className="mt-14 max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-950 dark:text-stone-50">
            {timeline.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
            {timeline.subheadline}
          </p>
        </div>

        {/* Chronological Timeline Track */}
        <div className="mt-16 relative">
          
          {/* Vertical Connecting Line (Desktop centered, Mobile left) */}
          <div className="absolute top-2 bottom-6 left-4 md:left-1/2 w-px bg-stone-300 dark:bg-stone-800 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Pin */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#FAF8F5] dark:bg-[#11100E] border-2 border-[#174A3B] dark:border-[#3D9E82] flex items-center justify-center z-10 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#174A3B] dark:bg-[#3D9E82]" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-[#181714] border border-stone-200/90 dark:border-stone-800 p-6 shadow-2xs hover:border-[#174A3B] dark:hover:border-[#3D9E82] transition-colors duration-300 group">
                      
                      {/* Year & Badge Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-100 dark:border-stone-800">
                        <span className="font-serif text-2xl font-normal text-stone-950 dark:text-stone-100 flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-stone-400 dark:text-stone-500" />
                          <span>{milestone.year}</span>
                        </span>

                        {milestone.badge && (
                          <span
                            className={`inline-flex items-center gap-1 text-[11px] font-semibold uppercase px-2.5 py-0.5 border ${getBadgeStyle(
                              milestone.badgeType
                            )}`}
                          >
                            <Award className="w-3 h-3" />
                            <span>{milestone.badge}</span>
                          </span>
                        )}
                      </div>

                      {/* Title & Organization */}
                      <div className="pt-3 space-y-1">
                        <h3 className="font-serif text-xl font-normal text-stone-950 dark:text-stone-100 group-hover:text-[#174A3B] dark:group-hover:text-[#3D9E82] transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-xs text-stone-500 dark:text-stone-400 font-medium uppercase tracking-wider">
                          {milestone.organization}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
                        {milestone.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
