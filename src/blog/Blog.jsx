import React from "react";
import './blog.css'
import dayimage from '../../src/blog/final.png'

export default function Blog(){
    return(
        <div className="editorial-container fade-in">
            
            {/* --- HEADER SECTION --- */}
            <header className="article-header">
                <span className="category-tag">World Cup 2026 Special Feature</span>
                <h1 className="main-title">My Memories: A Journey That Never Ends</h1>
                <h2 className="sub-title">The Global Tapestry of the 2026 FIFA World Cup: Cultural Phenomenon, Tactical Evolution, and the 48-Team Era.</h2>
                <div className="author-byline">
                    <img src="https://ui-avatars.com/api/?name=Debanjan+Acharjee&background=D4AF37&color=fff" alt="Author" className="author-avatar" />
                    <div>
                        <p className="author-name">Debanjan Acharjee</p>
                        <p className="publish-date">Football Enthusiast &bull; 8 min read</p>
                    </div>
                </div>
            </header>

            {/* --- INTRO: THE CENTER TROPHY LAYOUT --- */}
            <section className="intro-wrapper">
                <img src={dayimage} alt="FIFA Trophy" className="center-overlay-trophy float-animation" />

                <div className="column text-column">
                    <div className="invisible-shape-left"></div>
                    <p className="drop-cap">
                        The agonizing wait is finally over. The 2026 FIFA World Cup has officially kicked off, marked by a historic opening match where co-hosts Mexico secured a thrilling 2-0 victory over South Africa at the iconic Estadio Azteca. Seeing the tournament commence and watching Julián Quiñones score the opening goal instantly shifts the focus from anticipatory nostalgia to the thrilling reality of the sport's largest-ever spectacle.
                    </p>
                    <p>
                        For a fan like me, witnessing this kickoff brings back a flood of emotion, reminding me exactly why this global tournament holds such a special place in my heart. 
                    </p>

                    {/* NEW: DRAMATIC PULL QUOTE */}
                    <blockquote className="pull-quote">
                        "The FIFA World Cup is far more than a mere sporting event; it is a month-long cultural festival that we celebrate with immense passion."
                    </blockquote>
                </div>

                <div className="column text-column right-pad">
                    <div className="invisible-shape-right"></div>
                    <p>
                        My deep-rooted connection to the sport stems from powerful childhood memories. I have a very sharp memory of being a student in the fourth or fifth grade, meticulously painting the light blue and white stripes of the Argentine national flag onto my cheeks alongside my supportive mom. While I can no longer remember the specific year, the scoreline, or even who won that match, that intimate, shared ritual acted as the catalyst for my lifelong devotion.
                    </p>
                    <p>
                        The tournament's history is inextricably linked with these idiosyncratic memories. I still fondly remember the octopus whose predictions were so solid, and who could forget Jennifer Lopez's "We Are One" during the 2014 World Cup? Her song was so culturally penetrating it became the subject of a 30-mark essay in my board exams! Today, my allegiance lies firmly with Portugal, fueled entirely by my admiration for Cristiano Ronaldo (CR7).
                    </p>
                </div>
            </section>

            <div className="ornate-divider"></div>

            {/* --- MILESTONES (STYLED NUMBER CARDS) --- */}
            <section className="milestones-section">
                <h3 className="section-heading">Historic Milestones</h3>
                <p className="section-intro">An edition that has completely revolutionized the scale and logistics of the tournament.</p>
                
                <div className="facts-grid">
                    <div className="fact-card" data-number="01">
                        <h4>The Largest Ever</h4>
                        <p>Expanded from 32 to 48 participating nations, featuring a record 104 matches.</p>
                    </div>
                    <div className="fact-card" data-number="02">
                        <h4>Tri-Nation Hosting</h4>
                        <p>For the first time, three nations—the US, Mexico, and Canada—are co-hosting.</p>
                    </div>
                    <div className="fact-card" data-number="03">
                        <h4>Extended Duration</h4>
                        <p>Spanning 39 days from June 11 to July 19, making it the longest World Cup ever.</p>
                    </div>
                    <div className="fact-card" data-number="04">
                        <h4>Unprecedented Pool</h4>
                        <p>Features a massive 1,248 players representing 71 distinct nations.</p>
                    </div>
                </div>
            </section>

            {/* --- MATCH SUMMARIES (SCOREBOARD STYLE) --- */}
            <section className="matches-section">
                <h3 className="section-heading">Opening Day Action</h3>

                <div className="match-blocks">
                    <article className="match-article">
                        <div className="digital-scoreboard">
                            <span className="team">MEX</span>
                            <span className="score-box">2 - 0</span>
                            <span className="team">RSA</span>
                        </div>
                        <p>Mexico secured a historic victory in the tournament opener. Julián Quiñones scored the first goal in the 9th minute after a synchronized high press. Veteran Raúl Jiménez sealed the victory with a 66th-minute header.</p>
                        <p className="highlight-text">Remarkably, the match produced more red cards than goals, concluding a highly fractious opener.</p>
                    </article>

                    <article className="match-article">
                        <div className="digital-scoreboard">
                            <span className="team">KOR</span>
                            <span className="score-box">2 - 1</span>
                            <span className="team">CZE</span>
                        </div>
                        <p>South Korea engineered a brilliant comeback. After Czech captain Ladislav Krejčí gave the European side the lead in the 58th minute, midfielder Hwang In-beom equalized with a superb individual effort.</p>
                        <p className="highlight-text">A bold tactical gamble paid off when substitute Oh Hyeon-gyu fired home the decisive strike in the 80th minute.</p>
                    </article>
                </div>
            </section>
            {/* --- MICRO NATIONS (DEBUT CARDS) --- */}
            <section className="micro-nations-section">
                <h3 className="section-heading">Defying the Odds: The Rise of Micro-Nations</h3>
                <p className="section-intro">The expansion to a 48-team format has democratized the qualification process, opening the door for smaller nations to make historic debuts.</p>
                
                <div className="nation-grid">
                    <div className="nation-card">
                        <div className="card-header">
                            <span className="flag-icon">🇨🇼</span>
                            <span className="debut-badge">Historic Debut</span>
                        </div>
                        <h4 className="nation-name">Curaçao</h4>
                        <p>With a population of roughly 156,000, the Caribbean island is the smallest nation to ever qualify. Managed by veteran Dutch coach Dick Advocaat, the "Blue Wave" secured their ticket following an unbeaten run. They face Germany, Ecuador, and Ivory Coast in Group E.</p>
                    </div>

                    <div className="nation-card">
                        <div className="card-header">
                            <span className="flag-icon">🇨🇻</span>
                            <span className="debut-badge">Historic Debut</span>
                        </div>
                        <h4 className="nation-name">Cape Verde</h4>
                        <p>The African archipelago, population 525,000, secured its maiden appearance. Guided by Pedro "Bubista" Brito, the "Blue Sharks" dominated their qualifying group, finishing ahead of powerhouses like Cameroon. They will challenge Spain, Uruguay, and Saudi Arabia in Group H.</p>
                    </div>
                </div>
            </section>

            {/* --- OPINION PIECE (SLEEK DARK MODE) --- */}
            <section className="opinion-highlight">
                <div className="opinion-content">
                    <span className="opinion-badge">Editor's Opinion</span>
                    <h3 className="opinion-title">A Serious Aspect for Indian Football Enthusiasts</h3>
                    <p>While nations like Curaçao and Cape Verde inspire the world, we must look at a serious aspect. It is 2026, and still, India did not qualify. It is deeply shameful that a nation of 1.4 billion people did not qualify for the global stage. How much time do they need?</p>
                    <p>The sting of our absence is worsened by how our qualification campaign ended. India's dream was shattered in June 2024 during a controversial 2-1 defeat to Qatar. We were leading 1-0, but the referee allowed a Qatari equalizer even though the ball had visibly rolled out of play beside Gurpreet Singh Sandhu. Because VAR was not used, the glaring error stood.</p>
                    <p className="opinion-conclusion">Until our fundamental quality improves and domestic support matches international fervor, our absence will remain a painful reality.</p>
                </div>
            </section>

        </div>
    )
}