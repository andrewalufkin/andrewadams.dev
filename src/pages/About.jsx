// About.jsx
import React from 'react';
import { skills } from '../data/skills';
import SkillBadge from '../components/skillBadge';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1>About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>I'm a software engineer with a CS degree from Rice University. I specialize in full-stack development with a passion for creating efficient, scalable, and maintainable solutions.</p>
            
            <p>My experience spans from frontend technologies like React and modern JavaScript to backend systems, databases, and DevOps. I enjoy tackling complex problems and building tools that make development workflows smoother.</p>
            
            <p>When I'm not coding, you might find me reading, having deep conversations, and learning about all kinds of things. I believe that advanced literacy matters more than ever in the age of AI. Since intelligence is so cheap, the most valuable quality someone can have is a passion for learning new information.</p>
          </div>
          
          <div className="profile-image">
            <img src="/images/profile.jpg" alt="Andrew Adams" />
          </div>
        </div>
        
        <div className="education-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>Rice University, Houston, TX</p>
            <p>Graduated: 2024</p>
            <p>Notable coursework:</p>
            <p>• Computational Thinking</p>
            <p>• Algorithmic Thinking</p>
            <p>• Computer Ethics</p>
            <p>• Advanced Object-Oriented Programming</p>
            <p>• Tools and Models for Data Science</p>
            <p>• Practical Problem Solving</p>
            <p>• Software Engineering Methodology</p>
          </div>
        </div>
        
        <div className="skills-section">
          <h2>Skills</h2>
          
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skills-grid">
              {skills.languages.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <div className="skills-grid">
              {skills.frameworks.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} />
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <div className="skills-grid">
              {skills.tools.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;