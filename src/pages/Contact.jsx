import React from 'react';
import './Contact.css';
import { Navigation} from '../components/Navigation'
import { Footer} from '../components/Footer'
export const Contact = () => {
  return (
    <>
    <Navigation />
    <section className="contact-page">
      <div className="contact-content">
        
        <h1 className="contact-title">
          Let's build something <br />
          <span className="gradient-text">extraordinary together.</span>
        </h1>
        
        <p className="contact-sub">
          Whether you have a question about GeoAI, a project proposal, or just want 
          to say hi, my inbox is always open.
        </p>

        <div className="contact-methods">
          <div className="contact-card">
            <h3>Email Me</h3>
            <a href="mailto:yourname@email.com" className="contact-link">
              Keerthikv018@email.com
            </a>
          </div>

          <div className="contact-card">
            <h3>Professional Network</h3>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="contact-link">
              Connect on LinkedIn ↗
            </a>
          </div>

          <div className="contact-card">
            <h3>Code & Collaboration</h3>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="contact-link">
              GitHub Profile ↗
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};