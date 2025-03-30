// SkillBadge.jsx
import React from 'react';

const SkillBadge = ({ name }) => {
  
  return (
    <div className="skill-badge">
      <div className="skill-name">{name}</div>
    </div>
  );
};

export default SkillBadge;