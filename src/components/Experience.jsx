import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';

function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 8, px: 2, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
            Experience
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Box sx={{ backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 3, p: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Web Development Intern, Unified Mentor
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  July 2024 - September 2024
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Engineered responsive web applications using React, increasing platform retention by 40% through optimized interactive designs."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Leveraged Firebase’s real-time database and authentication tools, reducing backend processing time by 30%."
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.section>
  );
}

export default Experience;
