import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Hello, I\'m Husvalou',
    'hero.title': 'Creative Developer',
    'hero.subtitle': 'I craft beautiful digital experiences that combine design and technology',
    'hero.cta.work': 'View My Work',
    'hero.cta.contact': 'Contact Me',
    'hero.scroll': 'Scroll Down',

    // About
    'about.title': 'About Me',
    'about.whoami.title': 'Who I Am',
    'about.whoami.desc': 'A passionate developer and designer focused on creating intuitive user experiences that solve real problems.',
    'about.education.title': 'My Education',
    'about.education.desc': 'Bachelor\'s in Computer Science with specialization in UI/UX and continuous learning through professional courses.',
    'about.experience.title': 'My Experience',
    'about.experience.desc': '5+ years working with cutting-edge technologies to build responsive and accessible web applications.',
    'about.story.title': 'My Story',
    'about.story.p1': 'I began my journey in tech with a fascination for how digital products can transform lives. Starting with front-end development, I quickly expanded my skills to include UI/UX design, back-end technologies, and project management.',
    'about.story.p2': 'Today, I collaborate with clients and teams around the world to create intuitive, accessible, and visually stunning digital experiences. My approach combines technical expertise with a deep understanding of user needs and business goals.',

    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Here\'s a selection of my recent work. Each project represents unique challenges and innovative solutions.',
    'projects.more': 'See more on GitHub',
    'projects.category.all': 'All',
    'projects.category.web': 'Web',
    'projects.category.mobile': 'Mobile',
    'projects.category.design': 'Design',

    // Skills
    'skills.title': 'My Skills',
    'skills.subtitle': 'A range of technologies and tools I\'ve mastered to bring ideas to life.',
    'skills.other.title': 'Other Technologies & Tools',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Have a project in mind? Let\'s discuss how I can help bring your ideas to life.',
    'contact.info.title': 'Contact Information',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your message has been sent successfully!',
    'contact.social.title': 'Follow Me',

    // Footer
    'footer.description': 'Creating beautiful digital experiences through design and development.',
    'footer.nav.title': 'Navigation',
    'footer.connect.title': 'Connect',
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with',
    'footer.in': 'in Paris'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Bonjour, je suis Husvalou',
    'hero.title': 'Développeur Créatif',
    'hero.subtitle': 'Je crée des expériences numériques qui allient design et technologie',
    'hero.cta.work': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',
    'hero.scroll': 'Défiler vers le bas',

    // About
    'about.title': 'À propos de moi',
    'about.whoami.title': 'Qui suis-je',
    'about.whoami.desc': 'Un développeur et designer passionné, focalisé sur la création d\'expériences utilisateur intuitives qui résolvent des problèmes concrets.',
    'about.education.title': 'Ma formation',
    'about.education.desc': 'Diplômé en informatique, spécialisé en UI/UX avec une formation continue à travers des cours professionnels.',
    'about.experience.title': 'Mon expérience',
    'about.experience.desc': 'Plus de 5 ans d\'expérience avec les technologies de pointe pour créer des applications web responsives et accessibles.',
    'about.story.title': 'Mon parcours',
    'about.story.p1': 'J\'ai commencé mon parcours dans la tech avec une fascination pour la façon dont les produits numériques peuvent transformer des vies. Débutant par le développement front-end, j\'ai rapidement élargi mes compétences pour inclure le design UI/UX, les technologies back-end et la gestion de projet.',
    'about.story.p2': 'Aujourd\'hui, je collabore avec des clients et des équipes du monde entier pour créer des expériences numériques intuitives, accessibles et visuellement impressionnantes. Mon approche combine expertise technique et compréhension approfondie des besoins utilisateurs et des objectifs business.',

    // Projects
    'projects.title': 'Mes projets',
    'projects.subtitle': 'Voici une sélection de mes travaux récents. Chaque projet représente des défis uniques et des solutions innovantes.',
    'projects.more': 'Voir plus sur GitHub',
    'projects.category.all': 'Tous',
    'projects.category.web': 'Web',
    'projects.category.mobile': 'Mobile',
    'projects.category.design': 'Design',

    // Skills
    'skills.title': 'Mes compétences',
    'skills.subtitle': 'Une gamme de technologies et d\'outils que j\'ai maîtrisés pour donner vie aux idées.',
    'skills.other.title': 'Autres technologies et outils',

    // Contact
    'contact.title': 'Me contacter',
    'contact.subtitle': 'Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider à le concrétiser.',
    'contact.info.title': 'Informations de contact',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Votre message a été envoyé avec succès !',
    'contact.social.title': 'Suivez-moi',

    // Footer
    'footer.description': 'Création d\'expériences numériques à travers le design et le développement.',
    'footer.nav.title': 'Navigation',
    'footer.connect.title': 'Connexion',
    'footer.rights': 'Tous droits réservés.',
    'footer.made': 'Fait avec',
    'footer.in': 'à Paris'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};