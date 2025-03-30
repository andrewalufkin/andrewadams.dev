// SkillBadge.jsx
import React from 'react';

const SkillBadge = ({ name, level }) => {
  // Convert level (1-5) to a progress percentage
  const progressPercentage = (level / 5) * 100;
  
  return (
    <div className="skill-badge">
      <div className="skill-name">{name}</div>
      <div className="skill-level">
        <div className="skill-progress-bar">
          <div 
            className="skill-progress" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBadge;