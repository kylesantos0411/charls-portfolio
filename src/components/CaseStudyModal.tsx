import React, { useEffect } from 'react';
import { 
  AlertCircle, 
  BookOpen, 
  CheckCircle2, 
  Lightbulb, 
  UserCheck, 
  X 
} from 'lucide-react';
import type { BusinessItem, ProjectItem } from '../data/portfolioData';

interface CaseStudyModalProps {
  item: BusinessItem | ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const isBusiness = 'tagline' in item;
  const caseStudy = item.caseStudy;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF8F5] dark:bg-[#141311] border border-stone-300 dark:border-stone-700 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 bg-[#FAF8F5]/95 dark:bg-[#141311]/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest font-medium">
            <span className="inline-flex items-center gap-1.5 text-[#174A3B] dark:text-[#3D9E82]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isBusiness ? 'Venture Dossier' : 'Project Dossier'}</span>
            </span>
            <span>•</span>
            <span>{item.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 border border-stone-300 dark:border-stone-700 hover:border-[#174A3B] dark:hover:border-[#3D9E82] text-stone-700 dark:text-stone-300 hover:text-[#174A3B] dark:hover:text-[#3D9E82] transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Main Title & Role */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#174A3B] dark:text-[#3D9E82] uppercase tracking-widest">
                {item.year} • {item.role}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 dark:text-stone-50">
                {'name' in item ? item.name : item.title}
              </h2>
              {'tagline' in item && (
                <p className="font-serif italic text-base text-stone-600 dark:text-stone-400">
                  "{item.tagline}"
                </p>
              )}
            </div>

            {'logo' in item && item.logo && (
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-[#201F1B] p-1.5 border border-stone-200 dark:border-stone-700 shadow-sm shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={item.logo}
                  alt="Brand Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Visual Presentation (Logo or Image) */}
          <div className="relative aspect-[16/9] bg-[#FAF8F5] dark:bg-[#191815] border border-stone-200 dark:border-stone-800 overflow-hidden shadow-xs flex items-center justify-center p-8">
            <img
              src={'logo' in item && item.logo ? item.logo : item.image}
              alt={'name' in item ? item.name : item.title}
              className="max-h-full max-w-[80%] object-contain"
            />
          </div>

          {/* Case Study Details */}
          {caseStudy ? (
            <div className="space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-2">
                  Executive Overview
                </h3>
                <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                  {caseStudy.overview}
                </p>
              </div>

              {/* Problem & Solution Grid with Icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white dark:bg-[#181714] border border-stone-200/90 dark:border-stone-800 space-y-3">
                  <div className="flex items-center gap-2 text-[#B94C29] dark:text-[#E0734F]">
                    <div className="p-1.5 rounded-sm bg-[#FDF2EB] dark:bg-[#301B14] border border-[#F5D3C1] dark:border-[#5C2D1F]">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase">
                      The Problem
                    </span>
                  </div>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-[#181714] border border-stone-200/90 dark:border-stone-800 space-y-3">
                  <div className="flex items-center gap-2 text-[#174A3B] dark:text-[#3D9E82]">
                    <div className="p-1.5 rounded-sm bg-[#EAF3EE] dark:bg-[#132D24] border border-[#BCD4C6] dark:border-[#245544]">
                      <Lightbulb className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase">
                      What We Did
                    </span>
                  </div>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Role */}
              <div className="p-6 bg-white dark:bg-[#181714] border border-stone-200/90 dark:border-stone-800 space-y-3">
                <div className="flex items-center gap-2 text-[#174A3B] dark:text-[#3D9E82]">
                  <div className="p-1.5 rounded-sm bg-[#EAF3EE] dark:bg-[#132D24] border border-[#BCD4C6] dark:border-[#245544]">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase">
                    Charls' Direct Role
                  </span>
                </div>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                  {caseStudy.myRole}
                </p>
              </div>

              {/* Verified Outcomes */}
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase mb-3">
                  Key Outcomes & Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {caseStudy.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white dark:bg-[#181714] border border-stone-200/90 dark:border-stone-800 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#174A3B] dark:text-[#3D9E82] shrink-0 mt-0.5" />
                      <span className="text-xs text-stone-800 dark:text-stone-200 font-medium leading-snug">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase">
                Executive Summary
              </h3>
              <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                {item.shortDescription}
              </p>
              {'technologiesOrMethods' in item && item.technologiesOrMethods && (
                <div className="pt-2">
                  <span className="text-xs font-semibold tracking-wider block mb-2 uppercase text-stone-500 dark:text-stone-400">
                    Methods & Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.technologiesOrMethods.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white dark:bg-[#1F1E1B] text-xs border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Close Action */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#174A3B] dark:bg-[#1D5344] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#12382D] dark:hover:bg-[#164236] transition-colors cursor-pointer"
            >
              Close Dossier
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
