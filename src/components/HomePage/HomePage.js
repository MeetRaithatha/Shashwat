import React from 'react';
import { PROJECT_TYPES, CASE_STUDIES, BLOG_POSTS, SUSTAINABILITY_METRICS } from '../../utils/constants';
import './HomePage.css';

function HomePage() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img src="/api/placeholder/1440/600" alt="Sustainable building in nature" />
        </div>
        <div className="hero-content">
          <h1>Building in Harmony with Nature</h1>
          <p>Creating sustainable developments that benefit both people and the planet</p>
          <div className="hero-search">
            <h2>Explore Our Projects</h2>
            <div className="search-form">
              <div className="search-row">
                <select>
                  <option value="">Project Type</option>
                  <option value="green-buildings">Green Buildings</option>
                  <option value="communities">Sustainable Communities</option>
                  <option value="urban-renewal">Urban Renewal</option>
                </select>
                <select>
                  <option value="">Location</option>
                  <option value="north-america">North America</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                </select>
              </div>
              <button className="search-button">View Projects</button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="project-types-section">
        <div className="section-title">
          <h2>Our Sustainable Solutions</h2>
          <p>Innovative approaches to development that prioritize environmental stewardship</p>
        </div>
        <div className="project-types-grid">
          {PROJECT_TYPES.map((type, index) => (
            <div key={index} className="project-type-card">
              <div className="project-type-icon">
                <i className={`icon-${type.icon}`}></i>
              </div>
              <div className="project-type-info">
                <h3>{type.name}</h3>
                <p>{type.description}</p>
                <a href={type.link} className="learn-more">Explore Projects</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Metrics */}
      <section className="metrics-section">
        <div className="section-title">
          <h2>Our Environmental Impact</h2>
          <p>Quantifying our commitment to sustainability</p>
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
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="featured-case-studies">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>Discover our most impactful sustainable developments</p>
        </div>
        <div className="case-studies-slider">
          {CASE_STUDIES.slice(0, 3).map(study => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
              </div>
              <div className="case-study-info">
                <h3>{study.title}</h3>
                <p className="location">{study.location}</p>
                <div className="case-study-highlights">
                  {study.features.slice(0, 2).map((feature, index) => (
                    <span key={index}>{feature}</span>
                  ))}
                </div>
                <a href={study.link} className="view-details">View Case Study</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="blog-highlights">
        <div className="section-title">
          <h2>Latest Insights</h2>
          <p>From our sustainability blog</p>
        </div>
        <div className="blog-posts-grid">
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="blog-post-card">
              <div className="blog-post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-post-content">
                <div className="post-meta">
                  <span className="category">{post.category}</span>
                  <span className="date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <a href={post.link} className="read-more">Read Article</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Carbon Calculator CTA */}
      <section className="calculator-cta">
        <div className="cta-content">
          <h2>Calculate Your Environmental Impact</h2>
          <p>Use our interactive tool to estimate your carbon footprint and learn how to reduce it</p>
          <a href="/carbon-calculator" className="cta-button">Try Our Carbon Calculator</a>
        </div>
      </section>
    </main>
  );
}

export default HomePage;