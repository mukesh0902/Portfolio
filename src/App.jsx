import React, { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { Element } from 'react-scroll';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
  // Light/dark mode state
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  // Theme setup
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary: {
          main: mode === 'light' ? '#1976d2' : '#90caf9',
        },
        background: {
          default: mode === 'light' ? '#f5f5f5' : '#121212',
        },
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
      },
    }), [mode]
  );

  // Toggle function
  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="app"
        sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}
      >
        <Header theme={mode} toggleTheme={toggleTheme} />

        {/* Sections */}
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="experience"><Experience /></Element>
        <Element name="education"><Education /></Element>
        <Element name="certifications"><Certifications /></Element>
        <Element name="contact"><Contact /></Element>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
