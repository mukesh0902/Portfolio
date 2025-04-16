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
     {/* <h1>Mukesh Kumar</h1>  */}
      {/* <p>Full-Stack Developer</p> */}
      <h1 align="center">Hi there 👋, I'm Mukesh Kumar</h1>
<h3 align="center">MERN Stack Developer | Tech Enthusiast</h3>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&pause=1000&color=00BFFF&center=true&vCenter=true&width=435&lines=Full-Stack+Web+Developer" alt="Typing SVG" /></p>
  
---
      <div>
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-secondary">Contact Me</a>
      </div>
    </motion.section></div>
  );
}

export default Home;