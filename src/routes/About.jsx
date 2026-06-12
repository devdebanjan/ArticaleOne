import Avatar from '../../src/routes/Avatar.jpeg'
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="editorial-container fade-in">
      <div className="about-wrapper">
        
        {/* --- LEFT COLUMN: IMAGE & SOCIALS --- */}
        <div className="about-image-column">
          <img 
            src={Avatar} 
            alt="Debanjan Acharjee" 
            className="about-avatar" 
          />
         <div className="social-links">
              
              {/* --- FACEBOOK BUTTON --- */}
              <a href="https://www.facebook.com/debanjan.acharyya.9" target="_blank" rel="noreferrera" className="social-btn fb-btn">
                <span>Facebook</span>
                <svg className="social-icon fb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* --- INSTAGRAM BUTTON --- */}
              <a href="https://www.instagram.com/debanjanacharjee07/" target="_blank" rel="noreferrer" className="social-btn insta-btn">
                <span>Instagram</span>
                <svg className="social-icon insta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              {/* --- EMAIL BUTTON --- */}
              <a href="mailto:your.email@gmail.com" className="social-btn email-btn">
    <span>Send an Email</span>
    <svg className="social-icon mail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
</a>

            </div>
        </div>

        {/* --- RIGHT COLUMN: BIO & PASSIONS --- */}
        <div className="about-text-column">
          <span className="category-tag">Behind The Blog</span>
          <h1 className="main-title">Debanjan Acharjee</h1>
          <h2 className="sub-title">Engineer, Storyteller & Football Enthusiast</h2>

          <div className="about-bio">
            <p className="drop-cap">
              With an engineering degree as my foundation, I have always been fascinated by how complex systems are built. But beyond the logic and structure of my academic background, my true passion has always resided in the vibrant, unstructured beauty of arts, global cultures, and sports.
            </p>
            <p>
              Growing up in Bengal, India, football was never just a game—it was a month-long festival that painted the streets in team colors and brought people together. That early exposure to the sheer passion of the FIFA World Cup shaped my deep appreciation for how sports seamlessly intertwine with art and human emotion. Whether I am analyzing the tactical evolution of a match, exploring creative digital arts, or getting lost in immersive storytelling, I am always chasing the emotional core of an experience.
            </p>
          </div>

          {/* --- THE INVITATION CTA BOX --- */}
          <div className="memory-invitation-box">
            <h3 className="invitation-title">Share Your Story With Me</h3>
            <p>
              I built this space not just to document my own journey, but to listen to yours. Every fan, artist, and dreamer has a memory that shaped them. Was it a childhood ritual watching a game with your family? A breathtaking piece of art that moved you? A cultural festival you’ll never forget?
            </p>
            <p className="invitation-highlight">
              Don't keep those memories locked away. I am constantly looking to feature stories from fellow enthusiasts. Drop me an email or a message on Instagram—let's celebrate our passions together.
            </p>
          </div>

          {/* --- PASSIONS/TAGS SECTION --- */}
          <div className="skills-section">
            <h3 className="skills-title">Themes I Explore</h3>
            <div className="skills-grid">
              <span className="skill-tag">Sports Narratives</span>
              <span className="skill-tag">Cultural Impact</span>
              <span className="skill-tag">Digital Arts</span>
              <span className="skill-tag">Football History</span>
              <span className="skill-tag">Storytelling</span>
              <span className="skill-tag">Human Connection</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;