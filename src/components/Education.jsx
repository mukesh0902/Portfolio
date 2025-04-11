import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <div className="container">
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="education"
    >
      <h2>Education</h2>
      <ul>
        <li><strong>B.Tech in Information Technology</strong> - AITD, 7.8 CGPA (2021-2025)</li>
        <li><strong>Senior Secondary (12th)</strong> - GVPS, 94% (2019-2020)</li>
        <li><strong>Secondary (10th)</strong> - GVPS, 94.2% (2017-2018)</li>
      </ul>
    </motion.section></div>
  );
}

export default Education;