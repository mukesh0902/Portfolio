import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ py: 4, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 Mukesh Kumar
        </Typography>
        <Link 
          href="https://github.com/mukesh0902" 
          target="_blank" 
          rel="noopener noreferrer" 
          sx={{ mt: 1, color: 'primary.main', '&:hover': { color: 'primary.dark' } }}
        >
          GitHub
        </Link>
      </Container>
    </Box>
  );
}

export default Footer;
