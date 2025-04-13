import React from 'react';
import { BLOG_POSTS } from '../../utils/constants';
import './BlogPage.css';

function BlogPage() {
  return (
    <main className="page blog-page">
      <section className="hero-section">
        <div className="hero-image">
          <img src="/api/placeholder/1440/400" alt="Sustainability Blog" />
        </div>
        <div className="hero-content">
          <h1>Sustainability Insights</h1>
          <p>Latest news, research, and perspectives on sustainable development</p>
        </div>
      </section>

      <section className="blog-section container">
        <div className="blog-grid">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="blog-post">
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
                <div className="post-footer">
                  <span className="author">By {post.author}</span>
                  <a href={post.link} className="read-more">Read More</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;