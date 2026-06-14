import React from 'react';
import './newspaper.css';

// Make sure these images have TRANSPARENT backgrounds!
import squadImg from '../assets/squad.png';     
import jemmiImg from '../assets/jemmi.png';     
import fulmaliImg from '../assets/fulmali.png'; 

const T20Article = () => {
  return (
    <div className="newspaper-container fade-in">
      <header className="news-header">
        <h4 className="news-section">WOMEN'S CRICKET • SPECIAL REPORT</h4>
        <h1 className="news-headline">THE ICC WOMEN'S T20 WORLD CUP</h1>
        <h2 className="news-subhead">A Comprehensive Analysis of Athletic Evolution, Statistical Extremes, and Socio-Cultural Paradigms.</h2>
      </header>

      {/* --- PHASE 1: THE MASSIVE SQUAD HERO IMAGE --- */}
      <figure className="news-hero-figure">
        <img src={squadImg} alt="Indian National Squad" className="news-hero-image" />
        <figcaption className="news-image-caption">The Indian national women's team prepares for the ultimate rivalry clash. PHOTO: SPECIAL ARRANGEMENT</figcaption>
      </figure>

      <div className="news-byline-block">
        <div className="news-author-pic">DA</div>
        <div className="news-author-info">
          <span className="news-author-name">Debanjan Acharjee</span>
          <span className="news-author-title">SPORTS ENTHUSIAST</span>
        </div>
      </div>

      <article className="news-body">
        
        <h3 className="news-crosshead">I. The Greatest Rivalry & Global Scheduling</h3>
        
        <p className="news-drop-cap">
          The campaign launches on the grandest scale with the sport's greatest rivalry—India vs. Pakistan at Edgbaston in Birmingham on Sunday, June 14, 2026. This fixture sets a high-octane, fiercely competitive tone for the entire global showpiece, demanding peak athletic performance from the first delivery.
        </p>

        <p>
          This high-pressure matchup feeds directly into India's unending cricket fever. Even when the domestic franchise season ends in dramatic fashion—such as Royal Challengers Bengaluru (RCB) successfully lifting the trophy back-to-back—fans continue to deeply debate if domestic franchise celebrations are truly worthy when compared to the absolute pinnacle of lifting global international cups.
        </p>

        <p>
          <strong>Circadian Ruin:</strong> Modern viewers are forced to navigate grueling scheduling conflicts. With major global football events like FIFA tournaments broadcast during the dead of night, and high-stakes T20 World Cup cricket matches happening during the day, supporters' sleep cycles are severely disrupted. Yet, despite these biological inconveniences, subcontinental supporters hold an unyielding expectation: having tasted global victory, the national women's team must carry the T20 World Cup trophy home, cementing their international legacy forever.
        </p>

        <h3 className="news-crosshead">II. Squad Pillars & The Bengal Legacy</h3>

        {/* --- PHASE 2: JEMMI IMAGE (SILHOUETTE WRAP RIGHT) --- */}
        <figure 
          className="news-inline-figure float-right cutout"
          style={{
            shapeOutside: `url(${jemmiImg})`,
            shapeMargin: '20px',
            shapeImageThreshold: '0.1' 
          }}
        >
          <img src={jemmiImg} alt="Jemimah Rodrigues" className="news-inline-image cutout-img" />
          <figcaption className="news-image-caption">Jemimah Rodrigues, the batting fulcrum. PHOTO: ICC</figcaption>
        </figure>

        <p>
          <strong>The Batting Fulcrum:</strong> Jemimah Rodrigues ("Jemmi") is the ultimate key to the team. She consistently carries her stable batting performances to rotate the strike, manipulate aggressive fielding setups, and anchor the fragile top order. Her ability to find gaps with surgical precision rather than relying purely on brute force makes her indispensable during suffocating middle-over squeezes. She is the reliable engine that allows the rest of the batting card to operate freely.
        </p>
        <p>
          <strong>The Emotional Compass:</strong> Captain Harmanpreet Kaur floats and guides the squad through extreme high-pressure scenarios, acting as India's emotional and tactical leader despite past campaign heartbreaks. 
        </p>
        <p>
          <strong>Bengal's "Lady Queen":</strong> Richa Ghosh holds and perpetuates the iconic Bengal cricket legacy, inheriting the heavy mantle from the legendary Jhulan Goswami. Ghosh has forcefully redefined this legacy from an era of terrifying fast bowling to a modern era characterized by utterly ruthless, high-strike-rate power-hitting in the crucial death overs.
        </p>

        <h3 className="news-crosshead">III. The Gender Equality Paradox: Lookism</h3>

        {/* --- PHASE 3: FULMALI IMAGE (SILHOUETTE WRAP LEFT) --- */}
        <figure 
          className="news-inline-figure float-left cutout"
          style={{
            shapeOutside: `url(${fulmaliImg})`,
            shapeMargin: '25px',
            shapeImageThreshold: '0.1'
          }}
        >
          <img src={fulmaliImg} alt="Fulmali" className="news-inline-image cutout-img" />
          <figcaption className="news-image-caption">Bowler Fulmali addresses the media. PHOTO: GETTY</figcaption>
        </figure>

        <p>
          While the sports fraternity actively discusses gender equality and humanity, a shameful and disgusting focus on the physical appearance and "looks" of female athletes routinely arises, undermining their lifetime of athletic dedication. 
        </p>

        <p>
          This disturbing double standard was recently highlighted by a viral cricket media reel featuring Indian national team bowler Fulmali. Subjected to superficial questioning about her appearance rather than her athletic merit or bowling statistics, she bravely pointed a finger back at society. 
        </p>

        <blockquote className="news-pullquote">
          "It feels really bad when people question you based on your looks."
          <span className="pullquote-attribution">— Fulmali, Indian National Team Bowler</span>
        </blockquote>

        <p>
          This incident serves as a damning indictment of a sports media ecosystem that continues to struggle to respect female athletes solely for their hard-earned skills. As advocates conclude regarding her painful media experience: it is not a shame for her; it is entirely about us and our failure as an audience.
        </p>

        {/* --- PHASE 4: MATCH DETAILS & SQUAD --- */}
        <h3 className="news-crosshead">IV. Ultimate Showdown: Match Details & Squad</h3>

        <div style={{
          background: 'linear-gradient(to right, rgba(0, 82, 212, 0.08), transparent)',
          borderLeft: '5px solid #0052D4',
          padding: '25px',
          borderRadius: '0 16px 16px 0',
          marginBottom: '35px'
        }}>
          <h4 style={{ margin: '0 0 15px 0', color: '#0052D4', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1.1rem' }}>
            Live Match Coverage
          </h4>
          <ul className="news-list" style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
            <li><strong>🗓 Date & Time:</strong> Sunday, June 14, 2026 | 7:00 PM IST</li>
            <li><strong>🏟 Venue:</strong> Edgbaston Stadium, Birmingham, United Kingdom</li>
            <li><strong>📺 Where to Watch:</strong> Star Sports Network & JioHotstar</li>
          </ul>
        </div>

        <p>
          <strong>Official Team India Squad (2026):</strong><br />
          Harmanpreet Kaur (c), Smriti Mandhana (vc), Shafali Verma, Jemimah Rodrigues, Bharti Fulmali, Deepti Sharma, Richa Ghosh (wk), Shree Charani, Yastika Bhatia (wk), Nandani Sharma, Arundhati Reddy, Renuka Singh, Kranti Gaud, Shreyanka Patil, and Radha Yadav.
        </p>

      </article>
    </div>
  );
};

export default T20Article;