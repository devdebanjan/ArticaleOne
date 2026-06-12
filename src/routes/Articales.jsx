import React from 'react';
import { Link } from 'react-router-dom';
import './articles.css'; 
import trophyImage from '../blog/final.png';
const Articales = () => {
  
  // Your actual main article data
  const featuredArticle = {
    tag: "World Cup 2026",
    title: "My Memories: A Journey That Never Ends",
    excerpt: "The global tapestry of the 2026 FIFA World Cup: Cultural phenomenon, tactical evolution, and the 48-team era.",
    image: trophyImage, 
    date: "June 12, 2026",
    readTime: "8 min read",
  };

  return (
    <div className="editorial-container fade-in">
      
      {/* --- PAGE HEADER --- */}
      <header className="archive-header">
        <h1 className="main-title">The Archives</h1>
        <p className="sub-title">Explore tactical breakdowns, cultural narratives, and personal memories from the beautiful game.</p>
      </header>

      {/* --- FEATURED ARTICLE --- */}
      <section className="featured-article-section">
        <div className="featured-card">
          <div className="featured-image-wrapper">
            <img src={featuredArticle.image} alt={featuredArticle.title} className="featured-image" />
          </div>
          <div className="featured-content">
            <span className="category-tag">{featuredArticle.tag}</span>
            <h2 className="featured-title">{featuredArticle.title}</h2>
            <p className="featured-excerpt">{featuredArticle.excerpt}</p>
            
            <div className="card-footer">
              <span className="article-meta">{featuredArticle.date} • {featuredArticle.readTime}</span>
              <Link to="/" className="read-more-btn">
                Read Story 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="ornate-divider"></div>

      {/* --- ANIMATED "COMING SOON" & CTA SECTION --- */}
      <section className="curation-section">
        
        {/* The Cinematic Loader */}
        <div className="loader-wrapper">
            <div className="premium-orbit-loader">
                <div className="inner-dot"></div>
            </div>
            <h3 className="loading-text">Curating New Stories...</h3>
            <p className="loading-subtext">We are currently drafting and editing our next set of deep dives, tactical analyses, and cultural essays.</p>
        </div>

        {/* The Contribution CTA Box */}
        <div className="contribute-cta-box">
            <div className="cta-content">
                <span className="category-tag cta-tag">Open Call</span>
                <h3 className="cta-title">Want to see your story here?</h3>
                <p>
                    The best stories often come from the stands, the streets, and the lifelong fans. Whether you want to share a deeply personal memory, an opinion on tactical shifts, or a review of a historic match, this platform is open to your voice.
                </p>
                <p className="cta-highlight">
                    Submit your drafts, ideas, or passion pieces. Let's build a tapestry of global football memories together.
                </p>
            </div>
            
            <div className="cta-action">
                {/* Again, no target="_blank" here! */}
<a href="workwithdebanjan07@gmail.com" className="publish-btn">
    <span>Submit an Article</span>
    <svg className="publish-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
</a>
            </div>
        </div>

      </section>

    </div>
  );
}

export default Articales;