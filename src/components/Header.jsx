import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem,
  ListItemButton, ListItemText, useTheme, useMediaQuery, Divider, Button
} from '@mui/material';
import { Menu as MenuIcon, GitHub, LinkedIn, Code, LightMode, DarkMode } from '@mui/icons-material';
import { Link } from 'react-scroll';
import './Header.css'; // CSS file

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
];

function Header({ theme, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
      <List>
        {navLinks.map(({ label, to }) => (
          <ListItem key={to} disablePadding>
            <ListItemButton component={Link} to={to} smooth duration={500}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
        <IconButton component="a" href="https://github.com/mukesh0902" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton component="a" href="https://linkedin.com/in/mukesh-kumar" target="_blank">
          <LinkedIn />
        </IconButton>
        <IconButton component="a" href="https://leetcode.com/mukesh0902" target="_blank">
          <Code />
        </IconButton>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          variant="outlined"
          startIcon={theme === 'light' ? <DarkMode /> : <LightMode />}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar position="fixed" className={`navbar ${theme === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>

        {isMobile ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              classes={{
                paper: theme === 'light' ? 'drawer-light' : 'drawer-dark'
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navLinks.map(({ label, to }) => (
              <Button
                key={to}
                component={Link}
                to={to}
                smooth
                duration={500}
                className="nav-link"
              >
                {label}
              </Button>
            ))}
            <IconButton component="a" href="https://linkedin.com/in/mukesh-kumar" target="_blank">
              <LinkedIn />
            </IconButton>
            <IconButton component="a" href="https://github.com/mukesh0902" target="_blank">
              <GitHub />
            </IconButton>
            <IconButton component="a" href="https://leetcode.com/mukesh0902" target="_blank">
              <Code />
            </IconButton>
            <Button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              startIcon={theme === 'light' ? <DarkMode /> : <LightMode />}
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
