import React from 'react';
import ProjectCard from './ProjectCard.tsx';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    image: '/images/project1.png',
    liveLink: 'https://example.com/project1',
    repoLink: 'https://github.com/username/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    image: '/images/project2.png',
    liveLink: 'https://example.com/project2',
    repoLink: 'https://github.com/username/project2',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;