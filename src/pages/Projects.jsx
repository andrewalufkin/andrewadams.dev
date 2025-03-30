// Projects.jsx
import React from 'react';
import ProjectCard from '../components/projectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <p className="section-description">
          Here are some of my recent projects. Each demonstrates different skills and technologies.
        </p>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;