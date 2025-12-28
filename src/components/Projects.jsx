import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Projects.css';

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section className="our-work" id="work">
      <h2 className="section-title">Our Projects</h2>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div className="work-card" key={index} onClick={() => openPopup(project)}>
            <div className="work-img">
              <LazyLoadImage
                alt={project.title}
                src={project.images[0]}
                effect="blur"
                className="static-img"
                wrapperClassName="lazy-load-image-background"
              />
              <LazyLoadImage
                alt={`${project.title} Hover`}
                src={project.images[1]}
                effect="blur"
                className="hover-img"
                wrapperClassName="lazy-load-image-background"
              />
            </div>
            <div className="work-info">
              <span className="work-tag">{project.tag}</span>
              <h3 className="work-title">{project.title}</h3>
              <p className="work-desc">{project.description.substring(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="work-popup-overlay active" onClick={closePopup}>
          <div className="work-popup active" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <div className="popup-title-section">
                <h2>{selectedProject.title}</h2>
                <span className="popup-tag">{selectedProject.tag}</span>
              </div>
              <button className="popup-close" onClick={closePopup}>×</button>
            </div>
            <div className="popup-content">
              <div className="popup-images">
                {selectedProject.images.map((image, index) => (
                  <div className="popup-image" key={index}>
                    <LazyLoadImage
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      src={image}
                      effect="blur"
                    />
                  </div>
                ))}
              </div>
              <div className="popup-details">
                <h3 className="details-title">Project Details</h3>
                <p className="details-description">{selectedProject.description}</p>
                <div className="project-cta">
                  <span className="project-badge">Ready for Your Project</span>
                  <h3>Let’s build something great.</h3>
                  <button className="cta-button">
                    <img src="/connect.svg" alt="" />
                    Let's Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;