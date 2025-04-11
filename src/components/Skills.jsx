import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = {
    'Programming Languages': ['C', 'C++', 'JavaScript', 'Python', 'SQL'],
    'Web Development': ['HTML', 'CSS', 'Bootstrap', 'React', 'Redux', 'Node.js', 'Express.js', 'WordPress'],
    'Databases': ['MongoDB', 'Firebase'],
    'Libraries/Frameworks': ['React (Hooks, Context API)', 'Redux', 'Bootstrap'],
    'Other Skills': ['RESTful APIs', 'Responsive Design', 'State Management', 'Unit Testing'],
    'Tools': ['GitHub', 'ChatGPT', 'Gemini', 'VS Code', 'Microsoft Office', 'Photoshop'],
    'Soft Skills': ['Leadership', 'Communication', 'Analytical Skills', 'Problem Solving', 'Team Collaboration', 'Critical Thinking'],
  };

  return (
    <div className="container">
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="skills"
    >
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {items.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.section></div>
  );
}

export default Skills;