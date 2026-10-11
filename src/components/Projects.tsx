import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Calendar, 
  FolderKanban, 
  GraduationCap, 
  LayoutGrid, 
  Rocket, 
  Tag, 
  Target, 
  User 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (item: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { label: 'All', icon: LayoutGrid },
    { label: 'Strategy', icon: Target },
    { label: 'Venture Building', icon: Rocket },
    { label: 'Academic', icon: GraduationCap },
  ];

  const filteredItems = activeCategory === 'All'
    ? projects.items
    : projects.items.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Strategy':
        return Target;
      case 'Venture Building':
        return Rocket;
      case 'Academic':
        return GraduationCap;
      default:
        return FolderKanban;
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-[#F5F2EB] text-stone-900 border-b border-stone-200/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="pb-8 border-b border-stone-300/60 flex items-center justify-between text-xs tracking-widest text-stone-500 uppercase font-medium">
          <span className="inline-flex items-center gap-2 text-[#174A3B]">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>04 / Initiatives & Research</span>
          </span>
          <span className="text-stone-400 font-mono text-[11px]">APPLIED FEASIBILITY</span>
        </div>

        {/* Headline & Filter */}
        <div className="mt-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-950">
              {projects.headline}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              {projects.subheadline}
            </p>
          </div>

          {/* Understated Filter Tabs with Icons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 transition-all cursor-pointer uppercase tracking-wider font-medium border ${
                    isActive
                      ? 'bg-[#174A3B] text-white border-[#174A3B] shadow-xs'
                      : 'bg-white text-stone-600 border-stone-200 hover:border-[#174A3B] hover:text-[#174A3B]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#BCD4C6]' : 'text-stone-400'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const CategoryIcon = getCategoryIcon(item.category);

            return (
              <article
                key={item.id}
                onClick={() => onSelectProject(item)}
                className="group bg-white border border-stone-200/90 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-[#174A3B] transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover contrast-[1.02] group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#174A3B]/95 text-white text-[11px] px-2.5 py-1 tracking-wide uppercase font-medium flex items-center gap-1.5 shadow-xs">
                    <CategoryIcon className="w-3 h-3 text-[#BCD4C6]" />
                    <span>{item.category}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 text-stone-800 text-[11px] px-2.5 py-1 tracking-wide font-medium border border-stone-200/80 flex items-center gap-1 shadow-xs">
                    <Calendar className="w-3 h-3 text-stone-500" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-xs text-stone-500 tracking-wider uppercase font-medium">
                      <User className="w-3.5 h-3.5 text-[#174A3B]" />
                      <span>Role: {item.role}</span>
                    </span>

                    <h3 className="font-serif text-xl font-normal text-stone-950 group-hover:text-[#174A3B] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-stone-600 leading-relaxed font-normal pt-1">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Methods/Tech Tags with small Tag icon */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                      {item.technologiesOrMethods.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 bg-[#FAF8F5] border border-stone-200/80 text-stone-600 font-normal"
                        >
                          <Tag className="w-2.5 h-2.5 text-stone-400" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center justify-between text-xs font-semibold text-stone-900 group-hover:text-[#174A3B] transition-colors">
                      <span className="uppercase tracking-widest">Project Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
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
