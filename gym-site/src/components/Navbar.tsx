import React from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="logo">Gym<strong>Fit</strong></div>
    <ul className="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#classes">Classes</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);
