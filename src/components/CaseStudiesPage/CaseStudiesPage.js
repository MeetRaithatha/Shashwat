import React from 'react';
import { CASE_STUDIES } from '../../utils/constants';
import './CaseStudiesPage.css';

function CaseStudiesPage() {
  return (
    <main className="page case-studies-page">
      <section className="hero-section">
        <div className="hero-image">
          <img src="/casestudy.png" alt="Case Studies" />
        </div>
        <div className="hero-content">
          <h1>Project Case Studies</h1>
          <p>Explore our successful sustainable development projects and their impacts</p>
        </div>
      </section>

      <section className="case-studies-section container">
        <div className="case-studies-grid">
          {CASE_STUDIES.map(study => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-image">
                <img src='/cs.jpeg' alt={study.title} />
              </div>
              <div className="case-study-content">
                <h3>{study.title}</h3>
                <div className="case-study-meta">
                  <span>{study.location}</span>
                  <span>{study.type}</span>
                  <span>Completed {study.completion}</span>
                </div>
                <div className="case-study-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {study.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="case-study-impact">
                  <h4>Environmental Impact:</h4>
                  <div className="impact-metrics">
                    <div className="metric">
                      <span className="value">{study.impact.energySaved}</span>
                      <span className="label">Energy Saved</span>
                    </div>
                    <div className="metric">
                      <span className="value">{study.impact.co2Reduction}</span>
                      <span className="label">CO₂ Reduction</span>
                    </div>
                    <div className="metric">
                      <span className="value">{study.impact.waterSaved}</span>
                      <span className="label">Water Saved</span>
                    </div>
                  </div>
                </div>
                <a href='#' className="view-details">View Full Case Study</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CaseStudiesPage;
