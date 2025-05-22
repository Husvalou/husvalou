import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                  <User className="text-primary-500" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">{t('about.whoami.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {t('about.whoami.desc')}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-900 flex items-center justify-center">
                  <GraduationCap className="text-secondary-500" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">{t('about.education.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {t('about.education.desc')}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center">
                  <Briefcase className="text-accent-500" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">{t('about.experience.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {t('about.experience.desc')}
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">{t('about.story.title')}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {t('about.story.p1')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.story.p2')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;