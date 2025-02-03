import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faProjectDiagram,
  faBlog,
  faFileDownload,
  faEnvelope,
  faCode, // Icon for Skills
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Optional: Brand icons

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar-content">
        <ul className="navbar-links">
          <li>
            <a href="#about" onClick={() => scrollToSection('about')}>
              <FontAwesomeIcon icon={faUser} /> About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => scrollToSection('skills')}>
              <FontAwesomeIcon icon={faCode} /> Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection('projects')}>
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;