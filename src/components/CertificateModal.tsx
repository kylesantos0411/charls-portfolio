import React, { useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  X 
} from 'lucide-react';
import type { CertificateRecord } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificateRecord | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${certificate.title}`}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#FAF8F5] border border-stone-300 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="bg-[#FAF8F5] px-6 py-4 border-b border-stone-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-600 uppercase tracking-widest font-medium">
            <span className="inline-flex items-center gap-1.5 text-[#174A3B]">
              <ShieldCheck className="w-4 h-4" />
              <span>Official TESDA Certificate</span>
            </span>
            <span className="text-stone-300">•</span>
            <span className="font-mono text-[11px] text-stone-500">
              {certificate.verificationCode ? `ID: ${certificate.verificationCode}` : 'Verified'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-stone-300 hover:border-[#174A3B] text-stone-700 hover:text-[#174A3B] transition-colors cursor-pointer"
            aria-label="Close Certificate View"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Certificate Title & Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200/80">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B94C29] font-semibold">
                Course Completed
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-950 mt-0.5">
                {certificate.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-600 font-medium">
              <Calendar className="w-4 h-4 text-stone-400" />
              <span>Issued on {certificate.completionDate}</span>
            </div>
          </div>

          {/* Large Certificate Preview Display */}
          <div className="relative bg-white border border-stone-300 shadow-sm overflow-hidden flex items-center justify-center p-2 sm:p-4">
            <img
              src={certificate.image}
              alt={`Certificate of Completion for ${certificate.title} awarded to Charls Marion Antonio Andrada`}
              className="max-h-[65vh] w-auto max-w-full object-contain"
            />
          </div>

          {/* Verification Footnote & Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone-500 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#174A3B] shrink-0" />
              <span>
                Conferred to <strong>Charls Marion Antonio Andrada</strong> by the National Institute for Technical Education and Skills Development (NITESD).
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-stone-300 bg-white text-stone-800 text-xs uppercase tracking-wider font-semibold hover:border-[#174A3B] hover:text-[#174A3B] transition-colors"
              >
                <span>Open Full Image</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#174A3B] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#12382D] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
