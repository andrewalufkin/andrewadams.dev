// ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return <div className="container">Project not found</div>;
  }
  
  return (
    <section className="project-detail">
      <div className="container">
        <div className="project-header">
          <Link to="/projects" className="back-link">← Back to Projects</Link>
          <h1>{project.title}</h1>
        </div>
        
        <div className="project-showcase">
          <div className="project-images">
            {project.images.map((image, index) => (
              <img key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} />
            ))}
          </div>
          
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fab fa-github"></i> View Code
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            )}
          </div>
        </div>
        
        <div className="project-content">
          <div className="project-description">
            <h2>Overview</h2>
            <p>{project.longDescription}</p>
          </div>
          
          <div className="project-technologies">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="project-features">
            <h2>Key Features</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          {project.codeSnippet && (
            <div className="code-highlight">
              <h2>Featured Code</h2>
              <pre>
                <code className={`language-${project.codeSnippetLanguage || 'javascript'}`}>
                  {project.codeSnippet}
                </code>
              </pre>
              <p>{project.codeSnippetDescription}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;