import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Check, 
  Copy, 
  Mail, 
  Send 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Clean, accurate brand SVG icons
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const XTwitterIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const inquiryTypes = [
  {
    id: 'collaboration',
    label: 'Business Collaboration',
    helper: 'Joint venture, retail distribution, or strategic partnership.',
    prompt: 'Tell me about your product, audience, or collaboration concept.',
  },
  {
    id: 'consulting',
    label: 'Consulting & Advisory',
    helper: 'Unit economics, local supplier sourcing, or go-to-market setup.',
    prompt: 'What business challenge or operational bottleneck are you solving?',
  },
  {
    id: 'venture',
    label: 'New Venture Discussion',
    helper: 'Exploring a 0-to-1 startup concept or early commercial pilot.',
    prompt: 'What is the opportunity and what stage is the idea currently in?',
  },
  {
    id: 'general',
    label: 'General Inquiry',
    helper: 'Academic discussion, speaking, or professional networking.',
    prompt: 'How can I assist or connect with you?',
  },
];

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Form State
  const [selectedType, setSelectedType] = useState<string>('collaboration');
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [senderOrg, setSenderOrg] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const activeInquiry = inquiryTypes.find((t) => t.id === selectedType) || inquiryTypes[0];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!senderName.trim()) errors.name = 'Please enter your name.';
    if (!senderEmail.trim()) {
      errors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) errors.message = 'Please provide brief details on your inquiry.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const generateEmailDraft = () => {
    return `Hello Charls,

I am reaching out regarding a ${activeInquiry.label}.

Inquiry Category: ${activeInquiry.label}
Contact Person: ${senderName}
Email: ${senderEmail}
Organization / Brand: ${senderOrg || 'Independent'}

Inquiry Details:
${message}

Best regards,
${senderName}`;
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Web3Forms direct transmission
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'a0e39fde-4f9e-40fe-a17f-a92e8bf4e175';

    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `[${activeInquiry.label}] New Inquiry from ${senderName}`,
            from_name: senderName,
            email: senderEmail,
            organization: senderOrg || 'Not specified',
            inquiry_type: activeInquiry.label,
            message: message,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setSubmitStatus('success');
          setStatusMessage('Your inquiry has been delivered directly to Charls. Thank you!');
          setSenderName('');
          setSenderEmail('');
          setSenderOrg('');
          setMessage('');
          setFormErrors({});
          setIsSubmitting(false);
          return;
        } else {
          throw new Error(data.message || 'Submission error');
        }
      } catch (err) {
        console.warn('Direct submission error, falling back to mail client:', err);
      }
    }

    // Seamless fallback to mailto transmission
    setIsSubmitting(false);
    const subject = encodeURIComponent(`[${activeInquiry.label}] Inquiry from ${senderName}`);
    const body = encodeURIComponent(generateEmailDraft());
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitStatus('success');
    setStatusMessage('Opening your email client to send the inquiry...');
  };

  const handleCopyDraft = () => {
    if (!validateForm()) return;
    navigator.clipboard.writeText(generateEmailDraft());
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2200);
  };

  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <LinkedInIcon className="w-4 h-4" />;
      case 'instagram':
        return <InstagramIcon className="w-4 h-4" />;
      case 'x':
        return <XTwitterIcon className="w-4 h-4" />;
      case 'email':
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#F5F2EB] dark:bg-[#141311] text-stone-900 dark:text-stone-100 border-b border-stone-200/80 dark:border-stone-800/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="pb-8 border-b border-stone-300/60 dark:border-stone-800/80 flex items-center justify-between text-xs tracking-widest text-stone-500 dark:text-stone-400 uppercase font-medium">
          <span className="inline-flex items-center gap-2 text-[#174A3B] dark:text-[#3D9E82]">
            <Mail className="w-3.5 h-3.5" />
            <span>06 / Correspondence & Engagement</span>
          </span>
          <span className="text-stone-400 dark:text-stone-500 font-mono text-[11px]">DIRECT INQUIRIES</span>
        </div>

        {/* Section Headline */}
        <div className="mt-14 max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-950 dark:text-stone-50 leading-tight">
            {contact.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
            {contact.subheadline}
          </p>
        </div>

        {/* 2-Column Grid: Interactive Inquiry Composer + Channels */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#181714] p-6 sm:p-9 border border-stone-200/90 dark:border-stone-800 shadow-2xs space-y-7">
            
            <div className="space-y-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-stone-500 dark:text-stone-400 block">
                Step 1: Select Inquiry Purpose
              </span>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Choose the focus area that best matches your project.
              </p>
            </div>

            {/* Inquiry Type Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {inquiryTypes.map((t) => {
                const isSelected = selectedType === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setSelectedType(t.id);
                      setFormErrors({});
                    }}
                    className={`text-left p-3 border rounded-sm transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#EAF3EE] dark:bg-[#132D24] border-[#174A3B] dark:border-[#2D7A64] text-[#174A3B] dark:text-[#3D9E82] shadow-2xs'
                        : 'bg-[#FAF8F5] dark:bg-[#1F1E1B] border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-stone-600'
                    }`}
                  >
                    <div className="text-xs font-semibold tracking-wide">
                      {t.label}
                    </div>
                    <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">
                      {t.helper}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inquiry Form Fields */}
            <form onSubmit={handleSubmitInquiry} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider block">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Maria Santos"
                    className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#12110F] border text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 focus:outline-hidden focus:border-[#174A3B] dark:focus:border-[#3D9E82] ${
                      formErrors.name ? 'border-red-400 dark:border-red-500' : 'border-stone-300 dark:border-stone-700'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-[11px] text-red-600 dark:text-red-400 block">{formErrors.name}</span>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider block">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. maria@company.com"
                    className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#12110F] border text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 focus:outline-hidden focus:border-[#174A3B] dark:focus:border-[#3D9E82] ${
                      formErrors.email ? 'border-red-400 dark:border-red-500' : 'border-stone-300 dark:border-stone-700'
                    }`}
                  />
                  {formErrors.email && (
                    <span className="text-[11px] text-red-600 dark:text-red-400 block">{formErrors.email}</span>
                  )}
                </div>
              </div>

              {/* Organization (Optional) */}
              <div className="space-y-1">
                <label htmlFor="org" className="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider block">
                  Organization / Brand <span className="text-stone-400 dark:text-stone-500 font-normal">(Optional)</span>
                </label>
                <input
                  id="org"
                  type="text"
                  value={senderOrg}
                  onChange={(e) => setSenderOrg(e.target.value)}
                  placeholder="e.g. Santos Goods Co."
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#12110F] border border-stone-300 dark:border-stone-700 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 focus:outline-hidden focus:border-[#174A3B] dark:focus:border-[#3D9E82]"
                />
              </div>

              {/* Dynamic Context Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider block">
                  Inquiry Details *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={activeInquiry.prompt}
                  className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#12110F] border text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 focus:outline-hidden focus:border-[#174A3B] dark:focus:border-[#3D9E82] resize-y ${
                    formErrors.message ? 'border-red-400 dark:border-red-500' : 'border-stone-300 dark:border-stone-700'
                  }`}
                />
                {formErrors.message && (
                  <span className="text-[11px] text-red-600 dark:text-red-400 block">{formErrors.message}</span>
                )}
              </div>

              {/* Submission Status Alert */}
              {submitStatus === 'success' && (
                <div className="p-3.5 bg-[#EAF3EE] dark:bg-[#132D24] border border-[#BCD4C6] dark:border-[#245544] text-[#174A3B] dark:text-[#3D9E82] text-xs flex items-center gap-2.5 animate-in fade-in duration-200">
                  <Check className="w-4 h-4 text-[#174A3B] dark:text-[#3D9E82] shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submission Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#174A3B] dark:bg-[#1D5344] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#12382D] dark:hover:bg-[#164236] transition-colors shadow-xs cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5 text-[#BCD4C6]" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white dark:bg-[#1C1B18] border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold tracking-widest uppercase hover:border-[#174A3B] dark:hover:border-[#3D9E82] hover:text-[#174A3B] dark:hover:text-[#3D9E82] transition-colors cursor-pointer"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#174A3B] dark:text-[#3D9E82]" />
                      <span className="text-[#174A3B] dark:text-[#3D9E82]">Draft Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
                      <span>Copy Formatted Draft</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-stone-500 dark:text-stone-400 pt-1 leading-relaxed">
                Direct transmission to <span className="font-mono text-stone-800 dark:text-stone-200 font-semibold">{contact.email}</span> with automated confirmation.
              </p>
            </form>

          </div>

          {/* Column 2: Direct Email & Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick 1-Click Email Card */}
            <div className="bg-white dark:bg-[#181714] p-7 border border-stone-200/90 dark:border-stone-800 shadow-2xs space-y-4">
              <span className="text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 block font-semibold">
                Direct Inbox
              </span>

              <div className="p-4 bg-[#FAF8F5] dark:bg-[#1F1E1B] border border-stone-200/80 dark:border-stone-700 space-y-2">
                <div className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  Primary Address
                </div>
                <div className="font-mono text-sm text-stone-900 dark:text-stone-100 font-semibold break-all">
                  {contact.email}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#174A3B] dark:bg-[#1D5344] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#12382D] dark:hover:bg-[#164236] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#BCD4C6]" />
                  <span>Open Mail App</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white dark:bg-[#1C1B18] border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold tracking-wider uppercase hover:border-[#174A3B] dark:hover:border-[#3D9E82] hover:text-[#174A3B] dark:hover:text-[#3D9E82] transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#174A3B] dark:text-[#3D9E82]" />
                      <span className="text-[#174A3B] dark:text-[#3D9E82]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels List with Icons */}
            <div className="bg-white dark:bg-[#181714] p-7 border border-stone-200/90 dark:border-stone-800 shadow-2xs space-y-4">
              <span className="text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 block pb-3 border-b border-stone-100 dark:border-stone-800 font-semibold">
                Verified Social Channels
              </span>

              <div className="divide-y divide-stone-100 dark:divide-stone-800">
                {contact.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-3 flex items-center justify-between hover:text-[#174A3B] dark:hover:text-[#3D9E82] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-sm bg-[#FAF8F5] dark:bg-[#1F1E1B] border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 group-hover:bg-[#EAF3EE] dark:group-hover:bg-[#132D24] group-hover:text-[#174A3B] dark:group-hover:text-[#3D9E82] group-hover:border-[#BCD4C6] dark:group-hover:border-[#245544] transition-colors">
                        {renderSocialIcon(social.platform)}
                      </div>
                      <div>
                        <span className="block text-sm font-medium text-stone-900 dark:text-stone-100 group-hover:text-[#174A3B] dark:group-hover:text-[#3D9E82]">
                          {social.name}
                        </span>
                        <span className="block text-xs text-stone-500 dark:text-stone-400">
                          {social.handle}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-[#174A3B] dark:group-hover:text-[#3D9E82] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
