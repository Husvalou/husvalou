import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { label: 'HTML5', iconClass: 'fab fa-html5' },
  { label: 'CSS3', iconClass: 'fab fa-css3-alt' },
  { label: 'JavaScript', iconClass: 'fab fa-js' },
  { label: 'TypeScript', iconClass: 'fas fa-code' },
  { label: 'Java', iconClass: 'fab fa-java' },
  { label: 'Kotlin', iconClass: 'fas fa-code' },
  { label: 'Node.js', iconClass: 'fab fa-node-js' },
  { label: 'Tailwind', iconClass: 'fas fa-wind' },
  { label: 'SQL', iconClass: 'fas fa-database' },
];

const LanguagesSection: React.FC = () => {
  const { lang } = useLanguage();
  const title = lang === 'fr' ? 'Langages' : 'Languages';
  return (
    <section id="langs" className="langs-section reveal">
      <h1>{title}</h1>
      <div className="tech-stack">
        {languages.map(({ label, iconClass }) => (
          <span key={label} className="stack-pill">
            <i className={iconClass}></i>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection; 