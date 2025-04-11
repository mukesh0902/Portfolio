import React from 'react';
import { motion } from 'framer-motion';

function Certifications() {
  return (
    <div className="container"> 
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="certifications"
    >
      <h2>Certifications</h2>
      <ul>
        <li>Web Development Intern at Unified Mentor</li>
        <li>Developing Front-End Apps with React by IBM</li>
        <li>C/C++, DSA and Internet of Things by iNeuron</li>
        <li>React and Redux Course by KG Coding</li>
        <li>Foundation of Cybersecurity by Google</li>
      </ul>
    </motion.section></div>
  );
}

export default Certifications;