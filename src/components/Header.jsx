import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ theme, setTheme }) {
  return (
    <Navbar bg={theme === 'light' ? 'light' : 'dark'} expand="lg" fixed="top" variant={theme}>
      <Navbar.Brand className='logo'>Mukesh Kumar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
          <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
          <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
          <Link to="experience" smooth={true} duration={500} className="nav-link">Experience</Link>
          <Link to="education" smooth={true} duration={500} className="nav-link">Education</Link>
          <Link to="certifications" smooth={true} duration={500} className="nav-link">Certifications</Link>
          <Link to="extra-curricular" smooth={true} duration={500} className="nav-link">Extra Curricular</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://linkedin.com/in/mukesh-kumar" target="_blank">LinkedIn</Nav.Link>
          <Nav.Link href="https://github.com/mukesh0902" target="_blank">GitHub</Nav.Link>
          <Nav.Link href="https://leetcode.com/mukesh0902" target="_blank">LeetCode</Nav.Link>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
  {theme === 'light' ? 'Dark' : 'Light'} Mode
</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;