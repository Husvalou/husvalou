import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TAGLINES = ['frontend dev', 'backend dev', 'content creator', 'open source enthusiast'];

const HomeSection: React.FC = () => {
  const taglineRef = useRef<HTMLParagraphElement>(null);
  let indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (taglineRef.current) {
        taglineRef.current.textContent = TAGLINES[indexRef.current];
        indexRef.current = (indexRef.current + 1) % TAGLINES.length;
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero reveal">
      <div className="hero-inner">
        <div className="avatar">
          <img src="/images/city-night.png" alt="Profile" />
        </div>
        <div className="hero-text">
          <h1>husvalou</h1>
          <p className="tagline" ref={taglineRef}></p>

        </div>
      </div>
    </section>
  );
};

export default HomeSection; 