import React from 'react';
import './Skills.css'; // Ensure you create a CSS file for styling

const skillsData = [
  { name: 'React.js', icon: 'fab fa-react', level: '90%' },
  { name: 'Flutter', icon: 'fas fa-mobile-alt', level: '85%' },
  { name: 'Node.js', icon: 'fab fa-node-js', level: '80%' },
  { name: 'Database Management', icon: 'fas fa-database', level: '75%' },
  { name: 'JavaScript', icon: 'fab fa-js', level: '85%' },
  { name: 'Python', icon: 'fab fa-python', level: '80%' },
];

function Skills() {
  return (
    <div className="skills-section">
      <h1>My Skills Included</h1>

      <div className="skills-scroll">
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <i className={`${skill.icon} skill-icon`}></i>
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
