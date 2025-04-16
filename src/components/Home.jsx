import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack
} from '@mui/material';
import { Link, scroller } from 'react-scroll'; // Ensure scroller is imported

function Home() {
  // Manual scroll handlers for debugging
  const handleScrollToProjects = () => {
    console.log('Scrolling to projects'); // Debug log
    scroller.scrollTo('projects', {
      smooth: true,
      duration: 500,
      offset: -80, // Adjust for fixed header height
    });
  };

  const handleScrollToContact = () => {
    console.log('Scrolling to contact'); // Debug log
    scroller.scrollTo('contact', {
      smooth: true,
      duration: 500,
      offset: -80, // Adjust for fixed header height
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundColor: 'background.default',
          px: 2
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Hi there 👋, I'm Mukesh Kumar
          </Typography>

          <Typography variant="h4" color="text.secondary" gutterBottom>
            MERN Stack Developer | Tech Enthusiast
          </Typography>

          <Box my={4}>
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=36&pause=1000&color=00BFFF¢er=true&vCenter=true&width=550&lines=Full-Stack+Web+Developer"
              alt="Typing SVG"
              style={{ maxWidth: '100%' }}
            />
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={Link}
              to="projects"
              smooth
              duration={500}
              offset={-80} // Adjust for fixed header
              variant="contained"
              size="large"
              color="primary"
              onClick={handleScrollToProjects} // Manual scroll handler
            >
              View Projects
            </Button>

            <Button
              component={Link}
              to="contact"
              smooth
              duration={500}
              offset={-80} // Adjust for fixed header
              variant="outlined"
              size="large"
              color="secondary"
              onClick={handleScrollToContact} // Manual scroll handler
            >
              Contact Me
            </Button>
          </Stack>
        </Container>
      </Box>
    </motion.div>
  );
}

export default Home;