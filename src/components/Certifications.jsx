import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function Certifications() {
  const certifications = [
    "Web Development Intern at Unified Mentor",
    "Developing Front-End Apps with React by IBM",
    "C/C++, DSA and Internet of Things by iNeuron",
    "React and Redux Course by KG Coding",
    "Foundation of Cybersecurity by Google"
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 8, px: 2, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
            Certifications
          </Typography>

          <List>
            {certifications.map((cert, index) => (
              <ListItem key={index}>
                <ListItemText primary={cert} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </motion.section>
  );
}

export default Certifications;
