import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, liveLink, repoLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">Repository</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;