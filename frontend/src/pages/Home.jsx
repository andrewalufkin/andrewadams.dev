// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Terminal from '../components/Terminal';

const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Hello, I'm <span className="highlight">Andrew Adams</span></h1>
            <h2>Software Engineer & Full-Stack Developer</h2>
            <p className="hero-description">
              I build robust web applications and automated pipelines.
              Currently focused on scaling deployment infrastructure and AI applications.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
          
          <div className="hero-terminal">
            <Terminal />
          </div>
        </div>
        
        <div className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="featured-grid">
            {/* This would show your top 2 projects */}
            {/* You could extract this to a component that uses the first 2 projects from your projects.js file */}
          </div>
          <div className="view-all">
            <Link to="/projects" className="text-link">View all projects →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;