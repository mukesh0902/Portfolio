import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Button, Grid, Paper, Chip } from '@mui/material';

const projects = [
  {
    title: 'Full-Stack Employee Management System',
    description:
      'Designed and implemented a Full-Stack Employee Management System using the MERN stack, enabling secure role-based authentication with JWT and managing over 10 employee tasks per user with dynamic statuses.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/mukesh0902/employee-management',
  },
  {
    title: 'DailyPulseX – AI-Powered News Aggregator',
    description:
      'Built a scalable web app integrating Newsdata.io API for real-time news and Google Gemini Pro LLM for summarization, reducing reading time by ~40%.',
    technologies: ['Flask', 'HTML/CSS', 'JavaScript'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/mukesh0902/dailypulsex',
  },
  {
    title: 'Paradise Nursery: Full-Stack Plant E-commerce',
    description:
      'Developed a responsive e-commerce platform with product browsing, filtering, and cart management using React.js and Redux Toolkit.',
    technologies: ['React.js', 'Redux Toolkit', 'Bootstrap'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/mukesh0902/paradise-nursery',
  },
  {
    title: 'Social Media App',
    description:
      'Created a social media app with real-time updates using React hooks and Context API for state management.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/mukesh0902/social-media-app',
  },
];

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 8, px: 2, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <strong>Technologies:</strong>
                      {project.technologies.map((tech, index) => (
                        <Chip label={tech} key={index} sx={{ margin: '2px' }} />
                      ))}
                    </Box>

                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        href={project.liveDemo}
                        target="_blank"
                        sx={{ mb: 1 }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        href={project.github}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.section>
  );
}

export default Projects;
