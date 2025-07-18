import React from 'react';
import { PROJECTS } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

const ProjectsSection: React.FC = () => {
  const { lang } = useLanguage();
  const title = lang === 'fr' ? 'Mes Projets' : 'My Projects';
  return (
    <section id="projects" className="projects-section reveal">
      <h1>{title}</h1>
      <div className="projects-grid">
        {PROJECTS.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 