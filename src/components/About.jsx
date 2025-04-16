import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Button,
  Container
} from '@mui/material';

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        id="about"
        sx={{
          py: 8,
          px: 2,
          backgroundColor: 'background.default'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
            About Me
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            I'm a final-year B.Tech (IT) student with a strong foundation in Data Structures & Algorithms and hands-on experience in developing and deploying full-stack web applications.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            I’ve built impactful projects like a role-based Employee Management System (MERN), an AI-powered News Aggregator using Gemini Pro, and a React-Redux based E-commerce Platform, focusing on performance, clean code, and real-world functionality.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            My skillset includes C++, Python, JavaScript, SQL, and I'm proficient in MERN stack, Redux, Firebase, REST APIs, responsive design, and version control (Git).
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Currently, I'm preparing for SDE roles by deepening my knowledge in DSA, system design, and backend architecture. I'm actively looking for opportunities where I can contribute to impactful products, learn from experienced teams, and grow as a developer.
          </Typography>

          <Box textAlign="center" mt={4}>
  
<Button
  variant="contained"
  color="primary"
  href="/resume.pdf"
  download="Mukesh_Kumar_Resume.pdf"
>
  Download Resume
</Button>

          </Box>
        </Container>
      </Box>
    </motion.section>
  );
}

export default About;
