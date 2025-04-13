import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <main className="page about-page">
      <section className="hero-section">
        <div className="hero-image">
          <img src="/api/placeholder/1440/400" alt="About Us" />
        </div>
        <div className="hero-content">
          <h1>About Our Organization</h1>
          <p>Pioneers in sustainable development since 2005</p>
        </div>
      </section>

      <section className="mission-section container">
        <div className="section-title">
          <h2>Our Mission</h2>
        </div>
        <div className="mission-content">
          <p className="mission-statement">
            To transform the built environment through innovative, nature-positive development that benefits both people and the planet.
          </p>
          <div className="mission-values">
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We prioritize environmental stewardship in every decision and design.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly explore new technologies and approaches to sustainable development.</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>We create spaces that foster connection, wellbeing, and quality of life.</p>
            </div>
            <div className="value-card">
              <h3>Transparency</h3>
              <p>We openly share our processes, impacts, and lessons learned.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="section-title">
          <h2>Leadership Team</h2>
          <p>The visionaries driving our sustainable future</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <img src="/api/placeholder/200/200" alt="Dr. Sarah Green" />
            <h3>Dr. Sarah Green</h3>
            <p className="position">CEO & Founder</p>
            <p className="bio">Environmental scientist with 20+ years in sustainable urban development</p>
          </div>
          <div className="team-member">
            <img src="/api/placeholder/200/200" alt="Michael Chen" />
            <h3>Michael Chen</h3>
            <p className="position">Chief Architect</p>
            <p className="bio">Pioneer in biophilic design and green building technologies</p>
          </div>
          <div className="team-member">
            <img src="/api/placeholder/200/200" alt="Elena Rodriguez" />
            <h3>Elena Rodriguez</h3>
            <p className="position">Director of Sustainability</p>
            <p className="bio">Expert in circular economy and regenerative design principles</p>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="section-title">
          <h2>Our Partners</h2>
          <p>Collaborating with leaders in sustainability</p>
        </div>
        <div className="partners-grid">
          <div className="partner-logo">
            <img src="/api/placeholder/150/80" alt="Green Building Council" />
          </div>
          <div className="partner-logo">
            <img src="/api/placeholder/150/80" alt="World Wildlife Fund" />
          </div>
          <div className="partner-logo">
            <img src="/api/placeholder/150/80" alt="Sustainable Cities Initiative" />
          </div>
          <div className="partner-logo">
            <img src="/api/placeholder/150/80" alt="Renewable Energy Alliance" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;