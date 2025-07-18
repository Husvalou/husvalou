import React from 'react';
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
      </div>
    </nav>
  );
};

export default Navbar; 