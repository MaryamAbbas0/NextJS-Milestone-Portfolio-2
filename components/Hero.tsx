import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import '../styles/Hero.css'; 

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <Navbar />
      <div className="hero-container">
        <div className="hero-left">
          <div data-aos="zoom-out-right" className="hero-heading">
            <h2 className="hero-subheading" data-aos="zoom-out-left">Software Developer</h2>
            <p className="hero-intro" data-aos="zoom-out-left">
              <span className="hello-text">Hello! I&apos;m</span>
            </p>
            <p className="hero-name" data-aos="zoom-out-right">Maryam Abbas</p>
            <p className="hero-description" data-aos="zoom-out-right">
              A passionate developer with a focus on creating innovative and efficient software solutions. I enjoy blending creativity and technical skills to solve real-world problems through code.
            </p>
            <a
              href="https://milestone-1-2-kappa.vercel.app" target="_blank" 
              download="Maryam_Abbas_CV.pdf" 
              className="download-btn"
            >
              Download CV
            </a> 
          </div>
        </div>

        <div className="hero-right">
          <Image src="/shsh.png" height={700} width={700} alt="Maryam Abbas" className="hero-image" />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
