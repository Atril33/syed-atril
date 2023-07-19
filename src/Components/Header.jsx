import React, { useState } from 'react';
import menuBar from './Images/menu-bars.png';
import backImage from './Images/code_image.jpg';
import closeMenu from './Images/close_menu.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <nav id="nav-bar">
          <h1 className="logo">Atril</h1>
          <ul className="nav-list">
            <li className="nav-item"><a href="#portfolio" className="a-link">portfolio</a></li>
            <li className="nav-item"><a href="#about" className="a-link">about</a></li>
            <li className="nav-item"><a href="#contact" className="a-link">contact</a></li>
            <li className="nav-item resume-button"><a href="https://docs.google.com/document/d/1fZZCECSqm6X3dd4_IPmgsvxgArtmKxxtvHjQ2kIWi28/edit?usp=sharing" className="resume-link">my resume</a></li>
          </ul>
          { isOpen && (
          <ul className="nav-list-mobile">
            <img src={closeMenu} alt="Close Icon" className="close-menu" onClick={toggleMenu} />
            <li className="nav-item-mobile"><a href="#portfolio" className="a-link">portfolio</a></li>
            <li className="nav-item-mobile"><a href="#about" className="a-link">about</a></li>
            <li className="nav-item-mobile"><a href="#contact" className="a-link">contact</a></li>
            <li className="nav-item-mobile resume-button"><a href="https://docs.google.com/document/d/1fZZCECSqm6X3dd4_IPmgsvxgArtmKxxtvHjQ2kIWi28/edit?usp=sharing" className="resume-link">my resume</a></li>
          </ul>
          )}
          <img src={menuBar} alt="Menu Icon" className="menu-icons" onClick={toggleMenu} />
        </nav>
        <div className="header-container">
          <div className="header-info">
            <h2 className="info-title">
              Hi👋I’m Syed
            </h2>
            <p className="info-des">
              I’m a Front-End Web Developer!🚀 I can help you build a product,
              feature or website Look through some of my work and experience!
              If you like what you see and have a project you need coded,
              don’t hestiate to contact me.
            </p>
            <div className="resume-button mobile-resume"><a href="https://docs.google.com/document/d/1fZZCECSqm6X3dd4_IPmgsvxgArtmKxxtvHjQ2kIWi28/edit?usp=sharing" className="resume-link">my resume</a></div>
          </div>
          <div className="illustration">
            <img src={backImage} alt="Illustration" className="illut-image" />
            <div className="image-cover" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
