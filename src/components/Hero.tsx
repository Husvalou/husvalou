import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={item}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="text-primary-500 block">{t('hero.greeting')}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
                {t('hero.title')}
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            variants={item} 
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-md bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl hover:shadow-primary-500/20"
            >
              {t('hero.cta.work')}
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-md bg-white dark:bg-gray-800 text-primary-500 border border-primary-500 font-medium hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
            >
              {t('hero.cta.contact')}
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-primary-500 transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-sm mb-2">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;