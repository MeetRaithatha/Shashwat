import React from 'react';
import { SUSTAINABILITY_METRICS } from '../../utils/constants';
import './SustainabilityPage.css';

function SustainabilityPage() {
  return (
    <main className="page sustainability-page">
      <section className="hero-section">
        <div className="hero-image">
          <img src="/api/placeholder/1440/400" alt="Sustainability" />
        </div>
        <div className="hero-content">
          <h1>Our Sustainability Commitment</h1>
          <p>Building a greener future through responsible development practices</p>
        </div>
      </section>

      <section className="approach-section container">
        <div className="section-title">
          <h2>Our Approach</h2>
          <p>Integrating sustainability at every stage of development</p>
        </div>
        
        <div className="approach-steps">
          <div className="approach-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Site Selection</h3>
              <p>Prioritizing locations that minimize environmental impact and maximize community benefits</p>
            </div>
          </div>
          
          <div className="approach-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Eco-Friendly Materials</h3>
              <p>Using sustainable, recycled, and locally-sourced materials whenever possible</p>
            </div>
          </div>
          
          <div className="approach-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Energy Efficiency</h3>
              <p>Implementing cutting-edge technologies to reduce energy consumption</p>
            </div>
          </div>
          
          <div className="approach-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Water Conservation</h3>
              <p>Incorporating systems that reduce water usage and promote recycling</p>
            </div>
          </div>
          
          <div className="approach-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Biodiversity Protection</h3>
              <p>Preserving and enhancing natural habitats in all our projects</p>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-section">
        <div className="section-title">
          <h2>Our Impact</h2>
          <p>Quantifying our sustainability achievements</p>
        </div>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value">{SUSTAINABILITY_METRICS.totalProjects}</div>
            <div className="metric-label">Sustainable Projects</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">{SUSTAINABILITY_METRICS.co2Reduced}</div>
            <div className="metric-label">CO₂ Emissions Reduced</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">{SUSTAINABILITY_METRICS.energySaved}</div>
            <div className="metric-label">Energy Saved</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">{SUSTAINABILITY_METRICS.waterSaved}</div>
            <div className="metric-label">Water Conserved</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">{SUSTAINABILITY_METRICS.materialsRecycled}</div>
            <div className="metric-label">Materials Recycled</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">{SUSTAINABILITY_METRICS.greenSpacesCreated}</div>
            <div className="metric-label">Green Spaces Created</div>
          </div>
        </div>
      </section>

      <section className="certifications-section">
        <div className="section-title">
          <h2>Certifications & Standards</h2>
          <p>Meeting and exceeding industry benchmarks for sustainability</p>
        </div>
        <div className="certifications-grid">
          <div className="certification">
            <img src="/api/placeholder/150/150" alt="LEED Certified" />
            <h3>LEED Certified</h3>
            <p>Leadership in Energy and Environmental Design</p>
          </div>
          <div className="certification">
            <img src="/api/placeholder/150/150" alt="WELL Certified" />
            <h3>WELL Certified</h3>
            <p>Focus on human health and wellness</p>
          </div>
          <div className="certification">
            <img src="/api/placeholder/150/150" alt="Living Building Challenge" />
            <h3>Living Building Challenge</h3>
            <p>The most rigorous sustainability standard</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SustainabilityPage;