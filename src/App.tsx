import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Entrepreneurship } from './components/Entrepreneurship';
import { Journey } from './components/Journey';
import { CareerReadiness } from './components/CareerReadiness';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  const [contactReason, setContactReason] = useState<string>('Startup Mentorship');

  const handleSelectContactReason = (reason: string) => {
    setContactReason(reason);
  };

  return (
    <div className="app-container">
      {/* Top Sticky Navigation */}
      <Navbar onSelectContactReason={handleSelectContactReason} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Section 0: Hero & Personal Identity */}
        <Hero />

        {/* Section 1: About Me & Direction */}
        <About />

        {/* Section 2: Projects & Engineering Builds */}
        <Projects />

        {/* Section 3: Technical Skills & Competencies */}
        <Skills />

        {/* Section 4: Entrepreneurship & Guidance */}
        <Entrepreneurship onSelectAction={handleSelectContactReason} />

        {/* Section 5: Learning Journey & Roadmap */}
        <Journey />

        {/* Section 6: Career & Recruiter Readiness */}
        <CareerReadiness />

        {/* Section 7: Contact & Startup Idea Submission */}
        <Contact initialReason={contactReason} />
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
