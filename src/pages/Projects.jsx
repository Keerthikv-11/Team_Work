import React from 'react';
import './Projects.css';
import { Navigation} from '../components/Navigation'
import { Footer} from '../components/Footer'
export const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "Real- Time Smart Waste Littering and Fine Enforcement",
      problem: "Illegal waste littering and plastic dumping cause serious environmental and public health issues. Existing systems rely on manual monitoring, which is inefficient and slow. This project proposes a real-time AI-based smart waste littering detection system that automatically detects littering activities through live video, identifies offenders, records evidence, and enables digital fine enforcement to promote cleaner and smarter cities",
      github: "https://github.com/yourusername/geo-health",
      tech: ["Next.js", "YOLOv8", "Python",]
    },
    {
      id: 2,
      title: "On Demand Services",
      problem: "People often need urgent services such as repairs, chefs, or delivery, but finding a reliable service provider quickly is difficult. This project provides a web-based on-demand service platform where users can request services and get the service provider’s contact details, while an admin panel manages requests, providers, and service records to ensure faster response and better coordination",
      github: "https://github.com/yourusername/route-opt",
      tech: ["HTMl", "CSS", "JavaScript"]
    },
    
    
  ];

  return (
    <>
    <Navigation />
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">Project Showcase</h2>
        <p className="section-subtitle">A collection of academic and hackathon projects solving real-world challenges.</p>
      </div>

      <div className="projects-grid">
        { myProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-problem">
                {project.problem}
              </p>

              <div className="project-tech-tags">
                {project.tech.map((tag) => <span key={tag}>#{tag}</span>)}
              </div>
              
              <a 
                href={project.github} 
                className="github-link" 
                target="blank" 
                
              >
                View Repository <span>↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};