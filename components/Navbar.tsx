import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container" data-aos="zoom-out-left">
      <div className="navbar-wrapper" data-aos="zoom-out-right">
        
        <div data-aos="zoom-out-right" className="navbar-logo">
          <a href="#hero">
            <Image
              src="/shsh.png"
              width={300}
              height={300}
              alt="Logo"
              className="navbar-logo-img"
            />
          </a>
          <span className="navbar-logo-text">Maryam Abbas</span> 
        </div>
        
        <IoMenu 
          className="menu-icon md:hidden" 
          size={30} 
          onClick={toggleMenu} 
        />
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#hero" className="navbar-link">Home</a>
          </li>
          <li>
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li>
            <a href="#projects" className="navbar-link">Projects</a>
          </li>
          <li>
            <a href="#skills" className="navbar-link">Skills</a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
