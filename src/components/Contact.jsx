import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Box, Container, TextField, Button, Typography, Grid } from '@mui/material';

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 8, px: 2, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
            Contact Me
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <form action="https://formspree.io/f/xeoawoqg" method="POST">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  variant="outlined"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" type="submit" fullWidth sx={{ mb: 2 }}>
                  Send Message
                </Button>
              </form>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FaEnvelope style={{ marginRight: '8px' }} />
                ku.mukesh8474@gmail.com
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FaPhone style={{ marginRight: '8px' }} />
                8115748474
              </Typography>
              <Typography variant="body1">
                Location: Chandauli, Uttar Pradesh, 232106
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.section>
  );
}

export default Contact;
