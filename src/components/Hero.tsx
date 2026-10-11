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
    detail: 'Scaling through day-to-day team leadership, managing multi-platform advertising, inventory controls, and operating 3 independent brands with sustained profitability.',
    icon: TrendingUp,
  },
];

export const Hero: React.FC = () => {
  const { personal } = portfolioData;
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeStage = blueprintStages[activeStageIndex];

  const keyFacts = [
    { 
      title: 'Academic Standing', 
      desc: 'Magna Cum Laude',
      icon: Award,
      color: 'text-[#B94C29] dark:text-[#E0734F] bg-[#FDF2EB] dark:bg-[#301B14] border-[#F5D3C1] dark:border-[#5C2D1F]'
    },
    { 
      title: 'Commercial Ventures', 
      desc: '3 Commercial Brands',
      icon: Building2,
      color: 'text-[#174A3B] dark:text-[#3D9E82] bg-[#EAF3EE] dark:bg-[#132D24] border-[#BCD4C6] dark:border-[#245544]'
    },
    { 
      title: 'Core Competency', 
      desc: 'Business Dev & Digital Mktg',
      icon: Layers,
      color: 'text-[#174A3B] dark:text-[#3D9E82] bg-[#EAF3EE] dark:bg-[#132D24] border-[#BCD4C6] dark:border-[#245544]'
    },
    { 
      title: 'Operating Focus', 
      desc: 'Strategy Into Growth',
      icon: TrendingUp,
      color: 'text-[#B94C29] dark:text-[#E0734F] bg-[#FDF2EB] dark:bg-[#301B14] border-[#F5D3C1] dark:border-[#5C2D1F]'
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 sm:pt-36 pb-20 bg-[#FAF8F5] dark:bg-[#11100E] text-stone-900 dark:text-stone-100 flex flex-col justify-between border-b border-stone-200/80 dark:border-stone-800/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Literary Editorial Typography & Blueprint */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Academic distinction mark with warm terracotta badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDF2EB] dark:bg-[#301B14] border border-[#F5D3C1] dark:border-[#5C2D1F] text-[#B94C29] dark:text-[#E0734F] text-xs font-semibold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>{personal.academicDistinction}</span>
            </div>

            {/* Main Headline in refined Newsreader serif */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-stone-950 dark:text-stone-50 leading-[1.06]">
                Charls Andrada
              </h1>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-700 dark:text-stone-300 leading-snug">
                {personal.heroHeadline}
              </p>
            </div>

            {/* Prose description */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-xl font-normal leading-relaxed">
              {personal.heroSubheadline}
            </p>

            {/* INTERACTIVE BUSINESS BLUEPRINT: IDEA -> STRATEGY -> LAUNCH -> GROWTH */}
            <div className="bg-white dark:bg-[#181714] border border-stone-200/90 dark:border-stone-800 p-5 shadow-xs relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800/80 mb-4">
                <span className="text-[11px] font-semibold tracking-widest text-stone-500 dark:text-stone-400 uppercase flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#174A3B] dark:text-[#3D9E82]" />
                  <span>Strategic Venture Blueprint</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#B94C29] dark:text-[#E0734F] uppercase font-mono font-medium">
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
                          ? 'bg-[#EAF3EE] dark:bg-[#132D24] border-[#174A3B] dark:border-[#2D7A64] text-[#174A3B] dark:text-[#3D9E82] shadow-2xs'
                          : 'bg-[#FAF8F5] dark:bg-[#1F1E1B] border-stone-200/80 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-stone-600 hover:bg-stone-50 dark:hover:bg-[#252420]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#174A3B] dark:text-[#3D9E82]' : 'text-stone-400 dark:text-stone-500'}`}>
                          {stage.step}
                        </span>
                        <StageIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#174A3B] dark:text-[#3D9E82]' : 'text-stone-400 dark:text-stone-500'}`} />
                      </div>
                      <div className="font-serif text-sm font-semibold tracking-wide">
                        {stage.name}
                      </div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-tight line-clamp-1">
                        {stage.subtitle}
                      </div>

                      {/* Small Active Indicator Pip */}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#174A3B] dark:bg-[#3D9E82]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Blueprint Detail */}
              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-start gap-3">
                <div className="p-1.5 rounded-sm bg-[#EAF3EE] dark:bg-[#132D24] border border-[#BCD4C6] dark:border-[#245544] text-[#174A3B] dark:text-[#3D9E82] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#174A3B] dark:text-[#3D9E82]" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-serif text-sm font-semibold text-stone-900 dark:text-stone-100">
                      {activeStage.name}: {activeStage.subtitle}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 bg-[#FAF8F5] dark:bg-[#1F1E1B] border border-stone-200 dark:border-stone-700 text-[#174A3B] dark:text-[#3D9E82] font-medium rounded-2xs">
                      Applied in: {activeStage.ventureExample}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
                    {activeStage.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <a
                href="#businesses"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#174A3B] bg-[#174A3B] dark:bg-[#1D5344] dark:border-[#1D5344] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#12382D] dark:hover:bg-[#164236] transition-colors shadow-xs"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#BCD4C6]" />
                <span>Explore Founded Ventures</span>
                <ArrowDown className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <a
                href={personal.resumePdfPath}
                download="Charls_Andrada_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1C1B18] text-stone-800 dark:text-stone-200 text-xs font-semibold tracking-widest uppercase hover:border-[#174A3B] dark:hover:border-[#3D9E82] hover:text-[#174A3B] dark:hover:text-[#3D9E82] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-stone-800 dark:text-stone-200 text-xs font-semibold tracking-widest uppercase hover:text-[#174A3B] dark:hover:text-[#3D9E82] transition-colors ml-1"
              >
                <Mail className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                <span>Inquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quiet location & availability line with icons */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-stone-500 dark:text-stone-400 tracking-wide">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B94C29] dark:text-[#E0734F]" />
                <span>{personal.location}</span>
              </span>
              <span className="text-stone-300 dark:text-stone-700">•</span>
              <span className="inline-flex items-center gap-1.5 text-stone-700 dark:text-stone-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Sparkles className="w-3.5 h-3.5 text-[#174A3B] dark:text-[#3D9E82]" />
                <span>{personal.availability}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Clean Editorial Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[390px] bg-white dark:bg-[#181714] border border-stone-200/90 dark:border-stone-800 p-4 shadow-sm relative group">
              
              {/* Architectural corner coordinate marks */}
              <div className="absolute top-2 left-2 text-[9px] font-mono text-stone-400 dark:text-stone-600 select-none">┌</div>
              <div className="absolute top-2 right-2 text-[9px] font-mono text-stone-400 dark:text-stone-600 select-none">┐</div>
              <div className="absolute bottom-2 left-2 text-[9px] font-mono text-stone-400 dark:text-stone-600 select-none">└</div>
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-stone-400 dark:text-stone-600 select-none">┘</div>

              {/* Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 dark:bg-stone-900">
                <img
                  src={personal.portraitImage}
                  alt={personal.fullName}
                  className="w-full h-full object-cover object-top contrast-[1.02] group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Terracotta distinction badge on portrait */}
                <div className="absolute bottom-3 left-3 bg-[#FDF2EB]/95 dark:bg-[#301B14]/95 backdrop-blur-xs border border-[#F5D3C1] dark:border-[#5C2D1F] text-[#B94C29] dark:text-[#E0734F] px-2.5 py-1 text-[11px] font-semibold flex items-center gap-1.5 shadow-xs">
                  <Award className="w-3.5 h-3.5" />
                  <span>Magna Cum Laude • BS Entrepreneurship</span>
                </div>
              </div>

              {/* Caption - structured to prevent overlap and text cropping */}
              <div className="pt-3.5 pb-1 space-y-1">
                <div className="font-serif italic text-base font-medium text-stone-900 dark:text-stone-100 leading-snug">
                  {personal.fullName}
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#174A3B] dark:text-[#3D9E82] font-semibold leading-relaxed">
                  {personal.professionalTitle}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Facts Strip with Icons */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-stone-200/80 dark:border-stone-800/80">
          {keyFacts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <div key={i} className="flex items-start gap-3">
                <div className={`p-2 rounded-sm border shrink-0 ${fact.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="block text-[11px] tracking-wider text-stone-500 dark:text-stone-400 uppercase font-medium">
                    {fact.title}
                  </span>
                  <span className="font-serif text-base sm:text-lg font-normal text-stone-900 dark:text-stone-100 block leading-tight">
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
