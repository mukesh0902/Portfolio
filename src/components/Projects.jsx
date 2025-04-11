import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Full-Stack Employee Management System',
    description: 'Designed and implemented a Full-Stack Employee Management System using the MERN stack, enabling secure role-based authentication with JWT and managing over 10 employee tasks per user with dynamic statuses.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/mukesh0902/employee-management',
  },
  {
    title: 'DailyPulseX – AI-Powered News Aggregator',
    description: 'Built a scalable web app integrating Newsdata.io API for real-time news and Google Gemini Pro LLM for summarization, reducing reading time by ~40%.',
    technologies: ['Flask', 'HTML/CSS', 'JavaScript'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/mukesh0902/dailypulsex',
  },
  {
    title: 'Paradise Nursery: Full-Stack Plant E-commerce',
    description: 'Developed a responsive e-commerce platform with product browsing, filtering, and cart management using React.js and Redux Toolkit.',
    technologies: ['React.js', 'Redux Toolkit', 'Bootstrap'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/mukesh0902/paradise-nursery',
  },
  {
    title: 'Social Media App',
    description: 'Created a social media app with real-time updates using React hooks and Context API for state management.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/mukesh0902/social-media-app',
  },
];

function Projects() {
  return (
    <div className="container">
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.liveDemo} target="_blank" className="btn btn-primary">Live Demo</a>
            <a href={project.github} target="_blank" className="btn btn-secondary">GitHub</a>
          </motion.div>
        ))}
      </div>
    </motion.section></div>
  );
}

export default Projects;