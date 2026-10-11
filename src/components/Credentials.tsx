import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  Eye, 
  FileCheck, 
  GraduationCap, 
  Rocket 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { CertificateRecord } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';

export const Credentials: React.FC = () => {
  const { credentials, personal } = portfolioData;
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateRecord | null>(null);

  const getCredentialIcon = (type: string) => {
    switch (type) {
      case 'Degree':
        return { icon: GraduationCap, color: 'text-[#174A3B] dark:text-[#3D9E82] bg-[#EAF3EE] dark:bg-[#132D24] border-[#BCD4C6] dark:border-[#245544]' };
      case 'Honor':
        return { icon: Award, color: 'text-[#B94C29] dark:text-[#E0734F] bg-[#FDF2EB] dark:bg-[#301B14] border-[#F5D3C1] dark:border-[#5C2D1F]' };
      case 'Certification':
        return { icon: CheckCircle2, color: 'text-[#174A3B] dark:text-[#3D9E82] bg-[#EAF3EE] dark:bg-[#132D24] border-[#BCD4C6] dark:border-[#245544]' };
      case 'Program':
        return { icon: Rocket, color: 'text-[#174A3B] dark:text-[#3D9E82] bg-[#EAF3EE] dark:bg-[#132D24] border-[#BCD4C6] dark:border-[#245544]' };
      default:
        return { icon: Award, color: 'text-[#174A3B] dark:text-[#3D9E82] bg-[#EAF3EE] dark:bg-[#132D24] border-[#BCD4C6] dark:border-[#245544]' };
    }
  };

  return (
    <section
      id="credentials"
      className="py-24 bg-[#FAF8F5] dark:bg-[#11100E] text-stone-900 dark:text-stone-100 border-b border-stone-200/80 dark:border-stone-800/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="pb-8 border-b border-stone-200/80 dark:border-stone-800/80 flex items-center justify-between text-xs tracking-widest text-stone-500 dark:text-stone-400 uppercase font-medium">
          <span className="inline-flex items-center gap-2 text-[#174A3B] dark:text-[#3D9E82]">
            <Award className="w-3.5 h-3.5" />
            <span>05 / Credentials & Accreditations</span>
          </span>
          <span className="text-stone-400 dark:text-stone-500 font-mono text-[11px]">EDUCATION & HONORS</span>
        </div>

        {/* Section Headline & Actions */}
        <div className="mt-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-950 dark:text-stone-50">
              {credentials.headline}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
              {credentials.subheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personal.resumePdfPath}
              download="Charls_Andrada_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#174A3B] dark:bg-[#1D5344] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#12382D] dark:hover:bg-[#164236] transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#BCD4C6]" />
              <span>Download CV (PDF)</span>
            </a>

            <a
              href="https://www.linkedin.com/in/charls-marion-a-andrada-2ba6b3428/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1C1B18] border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs uppercase tracking-widest font-semibold hover:border-[#174A3B] dark:hover:border-[#3D9E82] hover:text-[#174A3B] dark:hover:text-[#3D9E82] transition-colors"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
            </a>
          </div>
        </div>

        {/* Structured Editorial Rows */}
        <div className="mt-16 divide-y divide-stone-200/80 dark:divide-stone-800/80 border-y border-stone-200/80 dark:border-stone-800/80">
          {credentials.items.map((cred) => {
            const { icon: Icon, color } = getCredentialIcon(cred.type);

            return (
              <div
                key={cred.id}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-[#F3EFE7]/50 dark:hover:bg-[#181714]/60 transition-colors px-3 group"
              >
                {/* Col 1: Type & Year with Icon */}
                <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between text-xs text-stone-500 dark:text-stone-400">
                  <div className="inline-flex items-center gap-2">
                    <span className={`p-1.5 rounded-sm border shrink-0 ${color}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-stone-900 dark:text-stone-100 font-semibold uppercase tracking-wider text-[11px]">
                      {cred.type}
                    </span>
                  </div>
                  <span className="md:mt-2 text-stone-500 dark:text-stone-400 font-medium text-xs">{cred.year}</span>
                </div>

                {/* Col 2: Title & Institution */}
                <div className="md:col-span-5 space-y-1">
                  <div className="flex items-center gap-3">
                    {cred.logo && (
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-[#201F1B] p-1 border border-stone-200/90 dark:border-stone-700 shadow-2xs shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={cred.logo}
                          alt={`${cred.institution} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-serif text-xl font-normal text-stone-950 dark:text-stone-100 group-hover:text-[#174A3B] dark:group-hover:text-[#3D9E82] transition-colors">
                        {cred.title}
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-normal">
                        {cred.institution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Col 3: Distinction, Description, and Interactive Certificates */}
                <div className="md:col-span-4 space-y-3">
                  {cred.distinction && (
                    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 bg-[#FDF2EB] dark:bg-[#301B14] text-[#B94C29] dark:text-[#E0734F] border border-[#F5D3C1] dark:border-[#5C2D1F] font-medium font-serif italic">
                      <Award className="w-3 h-3" />
                      <span>{cred.distinction}</span>
                    </span>
                  )}
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
                    {cred.description}
                  </p>

                  {/* Clickable Certificate Badges (Opens Pop-up Modal) */}
                  {cred.certificates && cred.certificates.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider block flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5 text-[#174A3B] dark:text-[#3D9E82]" />
                        <span>Click to view certificate ({cred.certificates.length}):</span>
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cred.certificates.map((cert, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedCertificate(cert)}
                            className="group/btn flex items-center justify-between gap-2 p-2 rounded-xs bg-white dark:bg-[#181714] border border-stone-200/90 dark:border-stone-800 hover:border-[#174A3B] dark:hover:border-[#3D9E82] hover:bg-[#EAF3EE]/40 dark:hover:bg-[#132D24]/40 text-left transition-all shadow-2xs cursor-pointer"
                            aria-label={`View Certificate for ${cert.title}`}
                          >
                            <div className="flex items-center gap-2 overflow-hidden">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#174A3B] dark:bg-[#3D9E82] shrink-0" />
                              <span className="text-xs font-medium text-stone-800 dark:text-stone-200 group-hover/btn:text-[#174A3B] dark:group-hover/btn:text-[#3D9E82] truncate">
                                {cert.title}
                              </span>
                            </div>
                            <Eye className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 group-hover/btn:text-[#174A3B] dark:group-hover/btn:text-[#3D9E82] shrink-0 transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Viewer Popup Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};
