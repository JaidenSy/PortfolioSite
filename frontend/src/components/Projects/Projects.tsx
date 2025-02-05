import React from 'react';
import ProjectCard from './ProjectCard.tsx';
import './Projects.css';
import { ProjectsProps } from '../../constants/types';

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;