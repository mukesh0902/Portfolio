import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="container">
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home">
      <h1>Mukesh Kumar</h1>
      <p>Full-Stack Developer</p>
      <div>
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-secondary">Contact Me</a>
      </div>
    </motion.section></div>
  );
}

export default Home;