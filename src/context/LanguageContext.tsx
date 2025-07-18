import React, { createContext, useState, useContext } from 'react';

type Lang = 'en' | 'fr';

interface LangContextProps {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LangContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('fr');
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'fr' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}; 