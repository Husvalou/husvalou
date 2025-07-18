import React from 'react';
import { Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { lang } = useLanguage();
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{lang === 'fr' ? project.descriptionFr : project.descriptionEn}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {project.demo && (
          <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
            Voir le projet
            <i className="fas fa-arrow-up-right-from-square" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 