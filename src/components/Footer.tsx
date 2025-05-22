import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold text-white">
              Husvalou
            </a>
            <p className="mt-2 text-sm text-gray-400 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase mb-3">{t('footer.nav.title')}</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm hover:text-primary-400 transition-colors">{t('nav.home')}</a></li>
                <li><a href="#about" className="text-sm hover:text-primary-400 transition-colors">{t('nav.about')}</a></li>
                <li><a href="#projects" className="text-sm hover:text-primary-400 transition-colors">{t('nav.projects')}</a></li>
                <li><a href="#skills" className="text-sm hover:text-primary-400 transition-colors">{t('nav.skills')}</a></li>
                <li><a href="#contact" className="text-sm hover:text-primary-400 transition-colors">{t('nav.contact')}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase mb-3">{t('footer.connect.title')}</h3>
              <ul className="space-y-2">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-400 transition-colors">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-400 transition-colors">GitHub</a></li>
                <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-400 transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {year} Husvalou. {t('footer.rights')}
          </p>
          <p className="text-sm text-gray-500 mt-4 md:mt-0 flex items-center">
            {t('footer.made')} <Heart size={14} className="text-red-500 mx-1" /> {t('footer.in')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;