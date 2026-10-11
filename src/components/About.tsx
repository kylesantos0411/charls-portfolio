import React from 'react';
import { ArrowDown, Award, Coins, Compass, GraduationCap, ShieldCheck, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about } = portfolioData;

  const principleIcons = [
    { icon: Coins, color: 'text-[#B94C29] dark:text-[#E0734F] bg-[#FDF2EB] dark:bg-[#301B14] border-[#F5D3C1] dark:border-[#5C2D1F]' },
    { icon: Compass, color: 'text-[#174A3B] dark:text-[#3D9E82] bg-[#EAF3EE] dark:bg-[#132D24] border-[#BCD4C6] dark:border-[#245544]' },
    { icon: ShieldCheck, color: 'text-[#174A3B] dark:text-[#3D9E82] bg-[#EAF3EE] dark:bg-[#132D24] border-[#BCD4C6] dark:border-[#245544]' },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#F5F2EB] dark:bg-[#141311] text-stone-900 dark:text-stone-100 border-b border-stone-200/80 dark:border-stone-800/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="pb-8 border-b border-stone-300/60 dark:border-stone-800/80 flex items-center justify-between text-xs tracking-widest text-stone-500 dark:text-stone-400 uppercase font-medium">
          <span className="inline-flex items-center gap-2 text-[#174A3B] dark:text-[#3D9E82]">
            <User className="w-3.5 h-3.5" />
            <span>02 / Entrepreneurial Background</span>
          </span>
          <span className="text-stone-400 dark:text-stone-500 font-mono text-[11px]">FOUNDER PROFILE</span>
        </div>

        {/* 2-Column Editorial Grid: Story & Vision + Academic Honors & Principles */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Story & Vision */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 dark:text-stone-50 leading-snug">
              {about.headline}
            </h2>

            <div className="space-y-4 text-stone-700 dark:text-stone-300 text-base leading-relaxed font-normal">
              {about.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#businesses"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#174A3B] dark:text-[#3D9E82] hover:text-[#12382D] dark:hover:text-[#4EB899] transition-colors"
              >
                <span>Explore Founded Ventures</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Academic Honors & Principles */}
          <div className="lg:col-span-6 bg-white dark:bg-[#181714] p-7 sm:p-9 border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-7">
            
            {/* Degree Card with Terracotta Honor Tag */}
            <div className="space-y-3 pb-6 border-b border-stone-200/70 dark:border-stone-800">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase">
                  Academic Degree
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase px-2.5 py-1 bg-[#FDF2EB] dark:bg-[#301B14] text-[#B94C29] dark:text-[#E0734F] border border-[#F5D3C1] dark:border-[#5C2D1F]">
                  <Award className="w-3 h-3" />
                  <span>{about.graduationHonor}</span>
                </span>
              </div>

              <div className="flex items-start gap-3.5 pt-1">
                <div className="p-2.5 rounded-sm bg-[#EAF3EE] dark:bg-[#132D24] text-[#174A3B] dark:text-[#3D9E82] border border-[#BCD4C6] dark:border-[#245544] shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-xl sm:text-2xl font-normal text-stone-950 dark:text-stone-100 leading-snug">
                    {about.degree}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
                    {about.institution}
                  </p>
                </div>
              </div>
            </div>

            {/* Principles with Distinct Icons */}
            <div className="space-y-4">
              <span className="text-[11px] font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase block">
                Operating Principles
              </span>
              <div className="space-y-5">
                {about.corePrinciples.map((principle, idx) => {
                  const itemConfig = principleIcons[idx] || principleIcons[0];
                  const Icon = itemConfig.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className={`p-2 rounded-sm border shrink-0 mt-0.5 ${itemConfig.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-sm font-serif font-medium text-stone-950 dark:text-stone-100">
                          {principle.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                          {principle.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
