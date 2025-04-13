import React from 'react';
import { PROJECT_TYPES } from '../../utils/constants';
import './ProjectsPage.css';

function ProjectsPage() {
  return (
    <main className="page projects-page">
      <section className="hero-section">
        <div className="hero-image">
          <img src="/api/placeholder/1440/400" alt="Our Projects" />
        </div>
        <div className="hero-content">
          <h1>Our Sustainable Projects</h1>
          <p>Discover how we're redefining development with nature at the core</p>
        </div>
      </section>

      <section className="projects-section container">
        <div className="projects-filter">
          <div className="filter-group">
            <label htmlFor="project-type">Filter by Type:</label>
            <select id="project-type">
              <option value="all">All Project Types</option>
              {PROJECT_TYPES.map(type => (
                <option key={type.link} value={type.link}>{type.name}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="location">Filter by Location:</label>
            <select id="location">
              <option value="all">All Locations</option>
              <option value="north-america">North America</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
            </select>
          </div>
        </div>

        <div className="projects-grid">
          {PROJECT_TYPES.flatMap(type => 
            Array(3).fill().map((_, i) => (
              <div key={`${type.link}-${i}`} className="project-card">
                <div className="project-image">
                  <img src="/api/placeholder/500/350" alt={`${type.name} project`} />
                  <span className="project-type">{type.name}</span>
                </div>
                <div className="project-info">
                  <h3>{type.name} Project {i + 1}</h3>
                  <p className="location">Location: {['North America', 'Europe', 'Asia'][i]}</p>
                  <p className="description">A sustainable {type.name.toLowerCase()} project showcasing innovative environmental solutions.</p>
                  <a href={`/projects/${type.link}-${i}`} className="view-project">View Project Details</a>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;