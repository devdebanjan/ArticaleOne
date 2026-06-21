import React from 'react';
import './StrategicReviewArticle.css';

// Using your original football image imports!
import vozinha from '../Fifa Recap/vozinha.png';
import messi from '../Fifa Recap/Messi.png';
import haland from '../Fifa Recap/haland.png';
import mbappe from '../Fifa Recap/mbpaee.png';
import ronaldo from '../Fifa Recap/Ronaldo.png';


import LikeButton from '../components/LikeButton.jsx';
import CommentButton from '../components/CommentButton.jsx'

export default function StrategicReviewArticle() {
  return (
    <div className="sr-article-root">
      <article className="editorial-container">
        
        {/* HERO HEADER SECTION WITH GLOW EFFECT */}
        <header className="hero-header">
          <div className="hero-glow"></div>
          <div className="issue-badge">
            <span className="live-dot"></span> DIGITAL SPORTS JOURNAL • MATCHWEEK 1
          </div>
          <h1 className="main-title">
            PITCH DRAMA <br/>
            <span className="highlight-gold">&</span> UNDERDOGS RISE
          </h1>
          <h2 className="subtitle">A deep dive into the chaotic opening fixtures, tactical standstills, and individual brilliance defining the current tournament cycle.</h2>
        </header>
        

        {/* EDITOR'S NOTE */}
        <div className="editor-glass-panel">
          <strong className="editor-label">EDITOR'S DESK</strong>
          <p>
            The first round of tournament play has concluded, bringing an onslaught of <strong className="text-bold-accent">chaotic situations, late-game tension, and dramatic shifts in momentum.</strong> From established football powerhouses struggling to maintain their rhythm to fearless underdogs executing masterclasses in resilience, the opening matches have set a fierce tone for the remainder of the competition.
          </p>
        </div>
        <div className="news-byline-block">
        <div className="news-author-pic">DA</div>
        <div className="news-author-info">
          <span className="news-author-name">Debanjan Acharjee</span>
          <span className="news-author-title">SPORTS ENTHUSIAST</span>
        </div>
      </div>

        {/* SECTION 1: THE TACTICAL NOTEBOOK */}
        <section className="content-section">
          <div className="section-header">
            <h3 className="section-title">ARE THE KINGS GETTING OLD?</h3>
            <p className="section-subtitle">Heavyweights Struggle to Assert Dominance</p>
          </div>

          <div className="match-grid">
            {/* BRAZIL CARD */}
            <div className="match-card">
              <h4 className="match-headline">🇧🇷 Brazil vs. Morocco & Haiti</h4>
              <h5 className="match-subheadline">Brazil's Tactical Variance</h5>
              <p className="match-text">
                The tournament giants looked surprisingly off the pace in their opening match. Morocco struck early, capitalizing on a defensive gap. While <strong className="text-bold-accent">Vinícius Júnior</strong> answered under the 10-minute mark with an absolute banger, the second half devolved into a dull, stagnant affair with a clumsy midfield.
              </p>
              <div className="tactical-box">
                <strong className="text-bold-accent">The Redemption:</strong> The team found redemption in their subsequent Saturday fixture against Haiti, securing a commanding 3-0 victory. Vinícius Júnior was once again the focal point with a goal and two assists.
              </div>
            </div>

            {/* GERMANY CARD */}
            <div className="match-card">
              <h4 className="match-headline">🇩🇪 Germany vs. Curaçao</h4>
              <h5 className="match-subheadline">The German Onslaught</h5>
              <p className="match-text">
                In a true test of resolve, Curaçao responded immediately to Germany's early advantage, netting a brilliant equalizer on their very first attacking attempt. However, Germany's "dark horse" offense rapidly shifted into an elite gear, playing with the rigorous, relentless efficiency of a video game to secure a dominant victory.
              </p>
              <div className="score-display">
                <div className="score-row"><span>Halftime</span> <span>GER 2 - 1 CUW</span></div>
                <div className="score-row final-score"><span>Fulltime</span> <span className="accent-red">GER 7 - 1 CUW 🔥</span></div>
              </div>
            </div>
          </div>

          <div className="section-header" style={{ marginTop: '80px' }}>
            <h3 className="section-title">TWO MEMORATING STORIES</h3>
            <p className="section-subtitle">The Underdog Masterclasses</p>
          </div>

          {/* CAPE VERDE FEATURE WITH IMAGE */}
          <div className="feature-card cape-verde-feature">
            <div className="feature-content">
              <h4 className="match-headline">🇪🇸 Spain 0 - 0 Cape Verde 🇨🇻</h4>
              <h5 className="match-subheadline">The Great Wall of Cape Verde</h5>
              <p className="match-text">
                Spain’s scoreless 0-0 draw produced one of the most historic defensive displays of the tournament. <strong className="text-bold-accent">Vozinha</strong>, Cape Verde's 40-year-old veteran goalkeeper, put on an unbelievable performance to single-handedly rescue his team alongside a backline that fought like soldiers.
              </p>
              <ul className="feature-list">
                <li><strong className="text-bold-accent">Delayed Deployment:</strong> Spain boasted elite star power on the bench, including Lamine Yamal and Nico Williams, but tactical deployment came late after the 70th minute.</li>
                <li><strong className="text-bold-accent">The Lesson:</strong> By the time they subbed on, Cape Verde's defensive structure was completely unbreakable. The historic draw stands as a stark lesson: never underestimate your opponent.</li>
              </ul>
            </div>
            <div className="feature-image-container">
              <img src={vozinha} alt="Vozinha Goalkeeper" className="player-cutout float-img" />
              <div className="glow-circle blue-glow"></div>
            </div>
          </div>

          {/* PORTUGAL FEATURE WITH IMAGE */}
          <div className="feature-card portugal-feature reverse-layout">
            <div className="feature-image-container">
              <img src={ronaldo} alt="Cristiano Ronaldo" className="player-cutout" />
              <div className="glow-circle red-glow"></div>
            </div>
            <div className="feature-content">
              <h4 className="match-headline">🇵🇹 Portugal 1 - 1 DR Congo 🇨🇩</h4>
              <h5 className="match-subheadline">Portugal's Stagnation</h5>
              <p className="match-text">
                Portugal's clash proved to be a masterclass in frustration. After breaking through early, Portugal shifted into a safe, conservative tempo dominated by back-passing. DR Congo refused to back down, finding their moment in the 43rd minute to bury a powerful header from a corner.
              </p>
              <blockquote className="stylish-quote">
                "While captain Cristiano Ronaldo missed a critical late chance to convert, football remains an 11-man game where responsibility falls on the collective system. Portugal must return with a significantly stronger strategy for the Colombo match."
              </blockquote>
            </div>
          </div>

          {/* TALISMAN TRACKER WITH IMAGES */}
          <div className="talisman-section">
            <h3 className="section-title text-center">👑 FUTURE STARS & THE MAGICAL LEO</h3>
            <div className="talisman-grid">
              
              <div className="talisman-card">
                <div className="talisman-img-box">
                  <img src={messi} alt="Lionel Messi" className="talisman-img" />
                  <div className="talisman-bg gold-bg"></div>
                </div>
                <div className="talisman-info">
                  <h4>Lionel Messi (ARG)</h4>
                  <p>🏆 Breathtaking hat-trick in under 16 minutes to dismantle the opposition.</p>
                </div>
              </div>

              <div className="talisman-card">
                <div className="talisman-img-box">
                  <img src={mbappe} alt="Kylian Mbappé" className="talisman-img" />
                  <div className="talisman-bg blue-bg"></div>
                </div>
                <div className="talisman-info">
                  <h4>Kylian Mbappé (FRA)</h4>
                  <p>⚡ 2 Goals to ignite an explosive second-half resurgence.</p>
                </div>
              </div>

              <div className="talisman-card">
                <div className="talisman-img-box">
                  <img src={haland} alt="Erling Haaland" className="talisman-img" />
                  <div className="talisman-bg red-bg"></div>
                </div>
                <div className="talisman-info">
                  <h4>Erling Haaland (SCO)</h4>
                  <p>🎯 Phenomenal start, instantly entering the Golden Boot race.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NEW INTELLIGENT ADDITION: THE MATCHWEEK 2 RADAR */}
        <section className="content-section" style={{ marginTop: '60px' }}>
          <div className="section-header">
            <h3 className="section-title">🔭 MATCHWEEK 2 RADAR</h3>
            <p className="section-subtitle">Tactical Storylines & Fixtures to Watch Next</p>
          </div>
          
          <p className="naval-intro">
            As the dust settles on the opening round, managers must adapt or face early elimination. Here are the most critical tactical narratives we are monitoring heading into <strong className="text-bold-accent">Matchweek 2</strong>.
          </p>

          <div className="glass-table-wrapper">
            <table className="naval-table">
              <thead>
                <tr>
                  <th>Upcoming Blockbuster</th>
                  <th>The Tactical Context</th>
                  <th>Player in the Spotlight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="concept-col">Spain vs. Brazil</td>
                  <td>Can Spain’s young, explosive wingers break through Brazil’s newly reformed, but previously clumsy, midfield block?</td>
                  <td><strong className="text-bold-accent">Lamine Yamal (ESP):</strong> Expected to start after being benched against Cape Verde.</td>
                </tr>
                <tr>
                  <td className="concept-col">Portugal vs. Germany</td>
                  <td>The ultimate test of pace. Portugal's stagnant, back-passing system meets the relentless, high-pressing German blitzkrieg.</td>
                  <td><strong className="text-bold-accent">Cristiano Ronaldo (POR):</strong> Must capitalize on limited counter-attacking chances to relieve defensive pressure.</td>
                </tr>
                <tr>
                  <td className="concept-col">Argentina vs. Cape Verde</td>
                  <td>An unstoppable force meets an immovable object. The magical Messi against the greatest defensive wall of the tournament.</td>
                  <td><strong className="text-bold-accent">Vozinha (CPV):</strong> Tasked with stopping the tournament's most in-form attacker.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="article-footer">
             {/* This ID must be unique for each article so likes don't mix! */}
             <LikeButton articleId="t20-world-cup-2026" /> 
           </div>
           <div>
            <CommentButton articleId="t20-world-cup-comments"/>
           </div>
        
      </article>
    </div>
  );
}