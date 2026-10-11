import React, { useState } from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Award, 
  Briefcase, 
  Building2, 
  CheckCircle2,
  Compass, 
  FileText, 
  GraduationCap, 
  Layers,
  Lightbulb,
  Mail, 
  MapPin, 
  Rocket,
  Sparkles, 
  TrendingUp 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface BlueprintStage {
  step: string;
  name: string;
  subtitle: string;
  ventureExample: string;
  detail: string;
  icon: React.ElementType;
}

const blueprintStages: BlueprintStage[] = [
  {
    step: '01',
    name: 'IDEA',
    subtitle: 'Market Research',
    ventureExample: 'LOSTDAWG & JUNKYARD PH',
    detail: 'Identifying real consumer appetite before spending capital — from tracking global streetwear trends for LOSTDAWG to testing authentic matcha demand in local communities.',
    icon: Lightbulb,
  },
  {
    step: '02',
    name: 'STRATEGY',
    subtitle: 'Business Modeling',
    ventureExample: 'AIGHT CAFE Sealed Pop Cans',
    detail: 'Formulating distinct products and viable unit economics — like innovating sealed pop-can packaging for AIGHT CAFE to ensure grab-and-go freshness and stand out on social media.',
    icon: Compass,
  },
  {
    step: '03',
    name: 'LAUNCH',
    subtitle: 'E-Commerce & Pop-Ups',
    ventureExample: 'Storefront Launch & Mobile Bars',
    detail: 'Building custom storefronts (LOSTDAWG launched Oct 2024) and setting up mobile pop-up booths (JUNKYARD PH) to test recipes and achieve sales targets within 5 months.',
    icon: Rocket,
  },
  {
    step: '04',
    name: 'GROWTH',
    subtitle: 'Hands-On Operations',
    ventureExample: 'Zugusho Leadership & Expansion',
    detail: 'Applying rigorous supervisory discipline — honed by managing field crews and operations at Zugusho Aircon — to keep customer satisfaction high, quality consistent, and ventures scaling.',
    icon: TrendingUp,
  },
];

export const Hero: React.FC = () => {
  const { personal } = portfolioData;
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = blueprintStages[activeStageIndex];

  const keyFacts = [
    { 
      title: 'Academic Distinction', 
      desc: 'Magna Cum Laude',
      icon: GraduationCap,
      color: 'text-[#B94C29] bg-[#FDF2EB] border-[#F5D3C1]'
    },
    { 
      title: 'Founded Ventures', 
      desc: '3 Commercial Brands',
      icon: Building2,
      color: 'text-[#174A3B] bg-[#EAF3EE] border-[#BCD4C6]'
    },
    { 
      title: 'Core Competency', 
      desc: 'Business Dev & Digital Mktg',
      icon: Layers,
      color: 'text-[#174A3B] bg-[#EAF3EE] border-[#BCD4C6]'
    },
    { 
      title: 'Operating Focus', 
      desc: 'Strategy Into Growth',
      icon: TrendingUp,
      color: 'text-[#B94C29] bg-[#FDF2EB] border-[#F5D3C1]'
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 sm:pt-36 pb-20 bg-[#FAF8F5] text-stone-900 flex flex-col justify-between border-b border-stone-200/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Literary Editorial Typography & Blueprint */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Academic distinction mark with warm terracotta badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDF2EB] border border-[#F5D3C1] text-[#B94C29] text-xs font-semibold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>{personal.academicDistinction}</span>
            </div>

            {/* Main Headline in refined Newsreader serif */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-stone-950 leading-[1.06]">
                Charls Andrada
              </h1>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-700 leading-snug">
                {personal.heroHeadline}
              </p>
            </div>

            {/* Prose description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl font-normal leading-relaxed">
              {personal.heroSubheadline}
            </p>

            {/* INTERACTIVE BUSINESS BLUEPRINT: IDEA -> STRATEGY -> LAUNCH -> GROWTH */}
            <div className="bg-white border border-stone-200/90 p-5 shadow-xs relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                <span className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#174A3B]" />
                  <span>Strategic Venture Blueprint</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#B94C29] uppercase font-mono font-medium">
                  STAGE {activeStage.step} / 04
                </span>
              </div>

              {/* 4-Stage Roadmap Track */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 relative">
                {blueprintStages.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  const StageIcon = stage.icon;

                  return (
                    <button
                      key={stage.step}
                      type="button"
                      onClick={() => setActiveStageIndex(idx)}
                      onMouseEnter={() => setActiveStageIndex(idx)}
                      className={`text-left p-2.5 rounded-sm border transition-all cursor-pointer relative ${
                        isActive
                          ? 'bg-[#EAF3EE] border-[#174A3B] text-[#174A3B] shadow-2xs'
                          : 'bg-[#FAF8F5] border-stone-200/80 text-stone-600 hover:border-stone-400 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#174A3B]' : 'text-stone-400'}`}>
                          {stage.step}
                        </span>
                        <StageIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#174A3B]' : 'text-stone-400'}`} />
                      </div>
                      <div className="font-serif text-sm font-semibold tracking-wide">
                        {stage.name}
                      </div>
                      <div className="text-[10px] text-stone-500 uppercase tracking-tight line-clamp-1">
                        {stage.subtitle}
                      </div>

                      {/* Small Active Indicator Pip */}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#174A3B]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Blueprint Detail */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-start gap-3">
                <div className="p-1.5 rounded-sm bg-[#EAF3EE] border border-[#BCD4C6] text-[#174A3B] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#174A3B]" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-serif text-sm font-semibold text-stone-900">
                      {activeStage.name}: {activeStage.subtitle}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 bg-[#FAF8F5] border border-stone-200 text-[#174A3B] font-medium rounded-2xs">
                      Applied in: {activeStage.ventureExample}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {activeStage.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <a
                href="#businesses"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#174A3B] bg-[#174A3B] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#12382D] transition-colors shadow-xs"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#BCD4C6]" />
                <span>Explore Founded Ventures</span>
                <ArrowDown className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <a
                href={personal.resumePdfPath}
                download="Charls_Andrada_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 bg-white text-stone-800 text-xs font-semibold tracking-widest uppercase hover:border-[#174A3B] hover:text-[#174A3B] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-stone-500" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-stone-800 text-xs font-semibold tracking-widest uppercase hover:text-[#174A3B] transition-colors ml-1"
              >
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <span>Inquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quiet location & availability line with icons */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-stone-500 tracking-wide">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B94C29]" />
                <span>{personal.location}</span>
              </span>
              <span className="text-stone-300">•</span>
              <span className="inline-flex items-center gap-1.5 text-stone-700">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <Sparkles className="w-3 h-3 text-[#174A3B]" />
                <span>{personal.availability}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Clean Editorial Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[390px] bg-white border border-stone-200/90 p-4 shadow-sm relative group">
              
              {/* Architectural corner coordinate marks */}
              <div className="absolute top-2 left-2 text-[9px] font-mono text-stone-400 select-none">┌</div>
              <div className="absolute top-2 right-2 text-[9px] font-mono text-stone-400 select-none">┐</div>
              <div className="absolute bottom-2 left-2 text-[9px] font-mono text-stone-400 select-none">└</div>
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-stone-400 select-none">┘</div>

              {/* Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={personal.portraitImage}
                  alt={personal.fullName}
                  className="w-full h-full object-cover object-top contrast-[1.02] group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Terracotta distinction badge on portrait */}
                <div className="absolute bottom-3 left-3 bg-[#FDF2EB]/95 backdrop-blur-xs border border-[#F5D3C1] text-[#B94C29] px-2.5 py-1 text-[11px] font-semibold flex items-center gap-1.5 shadow-xs">
                  <Award className="w-3.5 h-3.5" />
                  <span>Magna Cum Laude • BS Entrepreneurship</span>
                </div>
              </div>

              {/* Caption - structured to prevent overlap and text cropping */}
              <div className="pt-3.5 pb-1 space-y-1">
                <div className="font-serif italic text-base font-medium text-stone-900 leading-snug">
                  {personal.fullName}
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#174A3B] font-semibold leading-relaxed">
                  {personal.professionalTitle}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Facts Strip with Icons */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-stone-200/80">
          {keyFacts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <div key={i} className="flex items-start gap-3">
                <div className={`p-2 rounded-sm border shrink-0 ${fact.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="block text-[11px] tracking-wider text-stone-500 uppercase font-medium">
                    {fact.title}
                  </span>
                  <span className="font-serif text-base sm:text-lg font-normal text-stone-900 block leading-tight">
                    {fact.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
