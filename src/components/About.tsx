import React from 'react';
import { ArrowDown, Award, Coins, Compass, GraduationCap, ShieldCheck, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about } = portfolioData;

  const principleIcons = [
    { icon: Coins, color: 'text-[#B94C29] bg-[#FDF2EB] border-[#F5D3C1]' },
    { icon: Compass, color: 'text-[#174A3B] bg-[#EAF3EE] border-[#BCD4C6]' },
    { icon: ShieldCheck, color: 'text-[#174A3B] bg-[#EAF3EE] border-[#BCD4C6]' },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#F5F2EB] text-stone-900 border-b border-stone-200/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="pb-8 border-b border-stone-300/60 flex items-center justify-between text-xs tracking-widest text-stone-500 uppercase font-medium">
          <span className="inline-flex items-center gap-2 text-[#174A3B]">
            <User className="w-3.5 h-3.5" />
            <span>02 / Entrepreneurial Background</span>
          </span>
          <span className="text-stone-400 font-mono text-[11px]">FOUNDER PROFILE</span>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Story & Vision */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 leading-snug">
              {about.headline}
            </h2>

            <div className="space-y-4 text-stone-700 text-base leading-relaxed font-normal">
              {about.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#businesses"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#174A3B] hover:text-[#12382D] transition-colors"
              >
                <span>Explore Founded Ventures</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Academic Honors & Principles */}
          <div className="lg:col-span-4 bg-white p-7 border border-stone-200/90 shadow-xs space-y-7">
            
            {/* Degree Card with Terracotta Honor Tag */}
            <div className="space-y-3 pb-6 border-b border-stone-200/70">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase">
                  Academic Degree
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase px-2 py-0.5 bg-[#FDF2EB] text-[#B94C29] border border-[#F5D3C1]">
                  <Award className="w-3 h-3" />
                  <span>{about.graduationHonor}</span>
                </span>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <div className="p-2 rounded-sm bg-[#EAF3EE] text-[#174A3B] border border-[#BCD4C6] shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif text-lg font-normal text-stone-950 leading-snug">
                    {about.degree}
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    {about.institution}
                  </p>
                </div>
              </div>
            </div>

            {/* Principles with Distinct Icons */}
            <div className="space-y-4">
              <span className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase block">
                Operating Principles
              </span>
              <div className="space-y-5">
                {about.corePrinciples.map((principle, idx) => {
                  const itemConfig = principleIcons[idx] || principleIcons[0];
                  const Icon = itemConfig.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`p-2 rounded-sm border shrink-0 mt-0.5 ${itemConfig.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-sm font-serif font-medium text-stone-950">
                          {principle.title}
                        </h3>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {principle.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Column 3: Secondary Editorial Photo */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative aspect-[4/5] bg-stone-200 border border-stone-300/80 overflow-hidden shadow-xs">
              <img
                src={portfolioData.personal.aboutImage}
                alt="Charls Andrada Portrait"
                className="w-full h-full object-cover object-top contrast-[1.02]"
              />
            </div>

            <div className="p-4 bg-white border border-stone-200 text-xs text-stone-600 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#B94C29] font-medium text-[11px] tracking-wide uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>Academic Distinction</span>
              </div>
              <p className="text-[12px] text-stone-600 leading-relaxed font-serif italic">
                Graduated Magna Cum Laude with a BS in Entrepreneurship from Marikina Polytechnic College.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
