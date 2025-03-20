// ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {project.images && project.images.length > 0 ? (
          <img src={project.images[0]} alt={project.title} />
        ) : (
          <div className="placeholder-image">No image available</div>
        )}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <Link to={`/projects/${project.id}`} className="btn btn-primary">View Details</Link>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;