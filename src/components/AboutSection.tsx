import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { lang } = useLanguage();

  const description =
    lang === 'fr'
      ? `Développeur full-stack passionné par l'UX moderne, les performances front et les outils open-source. J'aime transformer des idées en expériences web élégantes et rapides.`
      : `Full-stack developer passionate about modern UX, front-end performance and open-source tooling. I enjoy turning ideas into sleek, fast web experiences.`;

  const stack = ['React', 'TypeScript', 'Node.js', 'Tailwind', 'Vite'];

  return (
    <section id="about" className="about-section reveal">
      <h1>{lang === 'fr' ? 'À propos' : 'About'}</h1>
      <p className="about-text">{description}</p>

      <div className="tech-stack">
        {stack.map((item) => (
          <span key={item} className="stack-pill">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AboutSection; 