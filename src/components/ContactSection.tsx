import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const DISCORD_TAG = 'husvalou';
const EMAIL_ADDR = 'husvalou@example.com';

const ContactSection: React.FC = () => {
  const { lang } = useLanguage();
  const title = lang === 'fr' ? 'Me contacter' : 'Contact me';
  return (
    <section id="contact" className="contact-section reveal">
      <h1>{title}</h1>
      <div className="contact-links static">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href={`mailto:${EMAIL_ADDR}`}>{EMAIL_ADDR}</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-discord"></i>
          <span>{DISCORD_TAG}</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 