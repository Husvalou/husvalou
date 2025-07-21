import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useLanguage } from '../context/LanguageContext';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const labels = {
  home: { fr: 'Accueil', en: 'Home' },
  projects: { fr: 'Projets', en: 'Projects' },
  langs: { fr: 'Langages', en: 'Languages' },
  contact: { fr: 'Contact', en: 'Contact' },
};

const Navbar: React.FC = () => {
  const { lang, toggleLang } = useLanguage();

  // theme toggle state
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>husvalou</a>
      </div>
      <div className="nav-links">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>{labels.home[lang]}</a>
        <a href="#langs" onClick={(e) => { e.preventDefault(); scrollToSection('langs'); }}>{labels.langs[lang]}</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>{labels.projects[lang]}</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{labels.contact[lang]}</a>
        <button className="lang-btn" onClick={toggleLang}>{lang.toUpperCase()}</button>
        <button className="lang-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 