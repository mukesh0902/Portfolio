import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import  Contact  from './components/Contact';
import Certifications from './components/Certifications';

import './index.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} />
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="experience"><Experience /></Element>
      <Element name="education"><Education /></Element>
      <Element name="certifications"><Certifications /></Element>
     
      <Element name="contact"><Contact /></Element>
      <Footer />
    </div>
  );
}

export default App;