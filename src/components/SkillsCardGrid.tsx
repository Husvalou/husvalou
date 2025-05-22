import React from 'react';
import { Briefcase, Code, Smartphone, Paintbrush } from 'lucide-react';

const skills = [
  {
    icon: <Code size={32} className="text-primary-400" />, // Frontend
    title: 'Frontend',
    desc: "Développement d'interfaces modernes et dynamiques avec React, Vue.js, TypeScript, etc.",
  },
  {
    icon: <Briefcase size={32} className="text-primary-400" />, // Backend
    title: 'Backend',
    desc: 'API robustes et performantes avec Node.js, Express, Python, Django, RESTful APIs.',
  },
  {
    icon: <Smartphone size={32} className="text-primary-400" />, // Mobile
    title: 'Mobile',
    desc: 'Apps mobiles multiplateformes avec React Native, Flutter, iOS et Android.',
  },
  {
    icon: <Paintbrush size={32} className="text-primary-400" />, // Design
    title: 'Design',
    desc: 'UI/UX Design, prototypage sur Figma, Adobe XD, et création de visuels attractifs.',
  }
];

const SkillsCardGrid: React.FC = () => (
  <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-2">Mes Compétences</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
        Une sélection des technologies que je maîtrise pour créer des applications modernes et performantes.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl duration-200"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-primary-500">{skill.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsCardGrid;
