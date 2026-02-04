import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            Gesix Solution<span>.</span>
          </div>
          <p>© {currentYear} All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a 
            href="https://linkedin.com/in/Keerthi-k-v" 
            target="_blank" 
            className="footer-link"
          ><FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub 
          </a>
          <a 
            href="mailto:Keerthikv018@gmail.com" 
            className="footer-link email-link"
          >
           <FontAwesomeIcon icon={faEnvelope} /> Email Me 
          </a>
        </div>
      </div>
    </footer>
  );
};