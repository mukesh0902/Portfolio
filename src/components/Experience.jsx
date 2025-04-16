import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <div className="container">
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="experience"
    >
      <h2>Experience</h2>
      <div className="experience-item">
        <h5>Web Development Intern, Unified Mentor</h5>
        <p>July 2024 - September 2024</p>
        <ul>
          <li>Engineered responsive web applications using React, increasing platform retention by 40% through optimized interactive designs.</li>
          <li>Leveraged Firebase’s real-time database and authentication tools, reducing backend processing time by 30%.</li>
        </ul>
      </div>
    </motion.section></div>
  );
}

export default Experience;