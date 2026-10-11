import React from 'react';
import { 
  ArrowUpRight, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  Megaphone, 
  ShoppingBag, 
  UserCheck, 
  UtensilsCrossed 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { BusinessItem } from '../data/portfolioData';

interface BusinessesProps {
  onSelectBusiness: (item: BusinessItem) => void;
}

export const Businesses: React.FC<BusinessesProps> = ({ onSelectBusiness }) => {
  const { businesses } = portfolioData;

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('food')) return UtensilsCrossed;
    if (category.toLowerCase().includes('brand') || category.toLowerCase().includes('marketing')) return Megaphone;
    if (category.toLowerCase().includes('cloth') || category.toLowerCase().includes('apparel')) return ShoppingBag;
    return Building2;
  };

  const getVentureHighlight = (id: string) => {
    switch (id) {
      case 'venture-lostdawg':
        return { 
          text: 'Online dropship model', 
          color: 'bg-[#EAF3EE] dark:bg-[#132D24] text-[#174A3B] dark:text-[#3D9E82] border-[#BCD4C6] dark:border-[#245544]' 
        };
      case 'venture-aightcafe':
        return { 
          text: 'Sealed pop-can drinks', 
          color: 'bg-[#FDF2EB] dark:bg-[#301B14] text-[#B94C29] dark:text-[#E0734F] border-[#F5D3C1] dark:border-[#5C2D1F]' 
        };
      case 'venture-junkyardph':
        return { 
          text: 'Matcha pop-up events', 
          color: 'bg-[#EAF3EE] dark:bg-[#132D24] text-[#174A3B] dark:text-[#3D9E82] border-[#BCD4C6] dark:border-[#245544]' 
        };
      default:
        return { 
          text: 'Active Venture', 
          color: 'bg-[#EAF3EE] dark:bg-[#132D24] text-[#174A3B] dark:text-[#3D9E82] border-[#BCD4C6] dark:border-[#245544]' 
        };
    }
  };

  return (
    <section
      id="businesses"
      className="py-24 bg-[#FAF8F5] dark:bg-[#11100E] text-stone-900 dark:text-stone-100 border-b border-stone-200/80 dark:border-stone-800/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="pb-8 border-b border-stone-200/80 dark:border-stone-800/80 flex items-center justify-between text-xs tracking-widest text-stone-500 dark:text-stone-400 uppercase font-medium">
          <span className="inline-flex items-center gap-2 text-[#174A3B] dark:text-[#3D9E82]">
            <Building2 className="w-3.5 h-3.5" />
            <span>03 / Commercial Track Record</span>
          </span>
          <span className="text-stone-400 dark:text-stone-500 font-mono text-[11px]">FOUNDED ENTERPRISES</span>
        </div>

        {/* Section Headline */}
        <div className="mt-14 max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-950 dark:text-stone-50">
            {businesses.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
            {businesses.subheadline}
          </p>
        </div>

        {/* 3-Column Venture Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.items.map((item, idx) => {
            const CategoryIcon = getCategoryIcon(item.category);
            const highlight = getVentureHighlight(item.id);
            const editorialNumber = `0${idx + 1}`;

            return (
              <article
                key={item.id}
                tabIndex={0}
                role="button"
                aria-label={`View case study dossier for ${item.name}`}
                onClick={() => onSelectBusiness(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectBusiness(item);
                  }
                }}
                className="group bg-white dark:bg-[#181714] border border-stone-200/90 dark:border-stone-800 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-[#174A3B] dark:hover:border-[#3D9E82] transition-all duration-300 shadow-2xs hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-[#174A3B] focus:ring-offset-2"
              >
                {/* Brand Logo Presentation with Numbering & Category */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5] dark:bg-[#141311] border-b border-stone-200/80 dark:border-stone-800 flex items-center justify-center p-6">
                  {/* Main Logo Image */}
                  <img
                    src={item.logo || item.image}
                    alt={item.name}
                    className="max-h-full max-w-[75%] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category label with icon */}
                  <div className="absolute top-3 left-3 bg-[#174A3B]/95 dark:bg-[#1D5344]/95 text-white text-[11px] px-2.5 py-1 tracking-wide uppercase font-medium flex items-center gap-1.5 shadow-xs">
                    <CategoryIcon className="w-3 h-3 text-[#BCD4C6]" />
                    <span>{item.category}</span>
                  </div>

                  {/* Editorial Index Number Watermark */}
                  <div className="absolute bottom-2 right-3 font-mono text-3xl font-bold text-stone-300 dark:text-stone-700 select-none">
                    {editorialNumber}
                  </div>

                  {/* Year with calendar icon */}
                  <div className="absolute top-3 right-3 bg-white/95 dark:bg-[#1F1E1B]/95 text-stone-800 dark:text-stone-200 text-[11px] px-2.5 py-1 tracking-wide font-medium border border-stone-200/80 dark:border-stone-700 flex items-center gap-1 shadow-xs">
                    <Calendar className="w-3 h-3 text-stone-500 dark:text-stone-400" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 tracking-wider uppercase font-medium">
                        <UserCheck className="w-3.5 h-3.5 text-[#174A3B] dark:text-[#3D9E82]" />
                        <span>{item.role}</span>
                      </span>

                      {/* Verified milestone badge */}
                      <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 border ${highlight.color}`}>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{highlight.text}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-stone-950 dark:text-stone-100 group-hover:text-[#174A3B] dark:group-hover:text-[#3D9E82] transition-colors">
                      {item.name}
                    </h3>

                    <p className="font-serif italic text-sm text-stone-600 dark:text-stone-400">
                      "{item.tagline}"
                    </p>

                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
                      {item.shortDescription}
                    </p>

                    {/* Integrated Key Initiative & Applied Methods */}
                    {item.keyInitiative && (
                      <div className="pt-3 border-t border-stone-100 dark:border-stone-800 space-y-2">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#174A3B] dark:text-[#3D9E82]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#174A3B] dark:bg-[#3D9E82]" />
                          <span>Key Initiative: {item.keyInitiative.title}</span>
                        </div>
                        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
                          {item.keyInitiative.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.keyInitiative.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] px-2 py-0.5 bg-[#FAF8F5] dark:bg-[#1F1E1B] border border-stone-200/90 dark:border-stone-700 text-stone-600 dark:text-stone-300 rounded-2xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-[#174A3B] dark:group-hover:text-[#3D9E82] transition-colors">
                    <span className="uppercase tracking-widest flex items-center gap-1.5">
                      <span>Explore Case Study</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
