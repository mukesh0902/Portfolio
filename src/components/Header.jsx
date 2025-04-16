import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem,
  ListItemButton, ListItemText, useTheme, useMediaQuery, Divider, Button
} from '@mui/material';
import {
  Menu as MenuIcon,
  GitHub,
  LinkedIn,
  Code,
  LightMode,
  DarkMode
} from '@mui/icons-material';
import { Link } from 'react-scroll';
import './Header.css';

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
    <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }} role="presentation" onClick={() => setDrawerOpen(false)}>
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
        <IconButton component="a" href ="https://www.linkedin.com/in/mukesh-kumar-b44595239" target="_blank">
          <LinkedIn />
        </IconButton>
        <IconButton component="a" href="https://leetcode.com/mukesh0902" target="_blank">
          <Code />
        </IconButton>
      </Box>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <IconButton
          onClick={toggleTheme}
          color="inherit"
          aria-label="toggle theme"
          sx={{ width: '100%', justifyContent: 'center' }}
        >
          {theme === 'light' ? <DarkMode /> : <LightMode />}
          <Typography variant="body2" sx={{ ml: 1 }}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <AppBar position="fixed" className={`navbar ${theme === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          PORTFOLIO
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
            <IconButton component="a" href="https://www.linkedin.com/in/mukesh-kumar-b44595239" target="_blank">
              <LinkedIn />
            </IconButton>
            <IconButton component="a" href="https://github.com/mukesh0902" target="_blank">
              <GitHub />
            </IconButton>
            <IconButton component="a" href="https://leetcode.com/mukesh0902" target="_blank">
              <Code />
            </IconButton>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{ ml: 2 }}
              aria-label="toggle theme"
            >
              {theme === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
