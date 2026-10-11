import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { About } from './components/About';
import { Businesses } from './components/Businesses';
import { Timeline } from './components/Timeline';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import type { BusinessItem, ProjectItem } from './data/portfolioData';

export function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<BusinessItem | ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#174A3B] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="w-full">
        {/* 01: Hero / Introduction with Interactive Blueprint */}
        <Hero />

        {/* 02: Core Operating Philosophy */}
        <Philosophy />

        {/* 03: Background & Operating Philosophy */}
        <About />

        {/* 04: Founded Businesses & Ventures (with Integrated Initiatives) */}
        <Businesses onSelectBusiness={(item) => setSelectedCaseStudy(item)} />

        {/* 05: Chronological Trajectory Timeline */}
        <Timeline />

        {/* 07: Academic & Professional Credentials */}
        <Credentials />

        {/* 08: Contact & Direct Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Modal */}
      <CaseStudyModal
        item={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}

export default App;
