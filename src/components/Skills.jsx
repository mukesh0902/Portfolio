import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Chip, Grid } from '@mui/material';

function Skills() {
  const skills = {
    'Programming Languages': ['C', 'C++', 'JavaScript', 'Python', 'SQL'],
    'Web Development': ['HTML', 'CSS', 'Bootstrap', 'React', 'Redux', 'Node.js', 'Express.js', 'WordPress'],
    'Databases': ['MongoDB', 'Firebase'],
    'Libraries/Frameworks': ['React (Hooks, Context API)', 'Redux', 'Bootstrap'],
    'Other Skills': ['RESTful APIs', 'Responsive Design', 'State Management', 'Unit Testing'],
    'Tools': ['GitHub', 'ChatGPT', 'Gemini', 'VS Code', 'Microsoft Office', 'Photoshop'],
    'Soft Skills': ['Leadership', 'Communication', 'Analytical Skills', 'Problem Solving', 'Team Collaboration', 'Critical Thinking'],
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 8, px: 2, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
            Skills
          </Typography>

          <Grid container spacing={4}>
            {Object.entries(skills).map(([category, items]) => (
              <Grid item xs={12} sm={6} md={4} key={category}>
                <Box sx={{ p: 2, border: '1px solid', borderRadius: 2, height: '100%' }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {items.map((skill, index) => (
                      <Chip
                        label={skill}
                        key={index}
                        sx={{ margin: '4px' }}
                        color="primary"
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.section>
  );
}

export default Skills;
