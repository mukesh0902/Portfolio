import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="container">
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <h2>About Me</h2>
      <p>
      I'm a final-year B.Tech (IT) student with a strong foundation in Data Structures & Algorithms and hands-on experience in developing and deploying full-stack web applications.

I’ve built impactful projects like a role-based Employee Management System (MERN), an AI-powered News Aggregator using Gemini Pro, and a React-Redux based E-commerce Platform, focusing on performance, clean code, and real-world functionality.

My skillset includes C++, Python, JavaScript, SQL, and I'm proficient in MERN stack, Redux, Firebase, REST APIs, responsive design, and version control (Git).

Currently, I'm preparing for SDE roles by deepening my knowledge in DSA, system design, and backend architecture. I'm actively looking for opportunities where I can contribute to impactful products, learn from experienced teams, and grow as a developer.

 
      </p>
      <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
    </motion.section></div>
  );
}

export default About;