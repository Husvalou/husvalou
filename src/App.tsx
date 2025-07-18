import React from 'react';
import { useEffect } from 'react';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import Navbar from './components/Navbar';
import { LanguageProvider } from './context/LanguageContext';
import Background from './components/Background';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import LanguagesSection from './components/LanguagesSection';

const App: React.FC = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <Navbar />
      <div className="container">
        <HomeSection />
        <LanguagesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Background />
    </LanguageProvider>
  );
};

export default App; 