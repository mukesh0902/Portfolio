import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        id="education"
        sx={{
          py: 8,
          px: 2,
          backgroundColor: 'background.default'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
            Education
          </Typography>

          <List>
            <ListItem>
              <ListItemText
                primary="B.Tech in Information Technology"
                secondary="AITD, 7.8 CGPA (2021-2025)"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Senior Secondary (12th)"
                secondary="GVPS, 94% (2019-2020)"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Secondary (10th)"
                secondary="GVPS, 94.2% (2017-2018)"
              />
            </ListItem>
          </List>
        </Container>
      </Box>
    </motion.section>
  );
}

export default Education;
