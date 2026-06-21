import { useState, useEffect } from 'react';

export default function ScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHoveredTop, setIsHoveredTop] = useState(false);
  const [isHoveredBottom, setIsHoveredBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight === 0) return;
      
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Math.round(scroll * 100));
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '40px',
        left: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'var(--glass-bg)', 
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '50px',
        boxShadow: '0 25px 50px var(--glass-shadow)',
        zIndex: 9999,
        fontFamily: "'Outfit', sans-serif",
        overflow: 'hidden', /* Keeps the hover effects inside the pill bounds */
        width: '56px',
        transition: 'all 0.4s ease'
      }}
    >
      {/* ── STYLISH TOP BUTTON ── */}
      <button 
        onClick={scrollToTop}
        onMouseEnter={() => setIsHoveredTop(true)}
        onMouseLeave={() => setIsHoveredTop(false)}
        style={{
           background: isHoveredTop ? '#ea580c' : 'transparent',
           color: isHoveredTop ? '#ffffff' : 'var(--text-main)',
           border: 'none',
           width: '100%',
           height: '60px',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           cursor: 'pointer',
           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        title="Jump to Top"
      >
        <svg 
          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{
            transform: isHoveredTop ? 'translateY(-4px)' : 'translateY(0)',
            transition: 'transform 0.3s ease'
          }}
        >
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>

      {/* ── BOLD PERCENTAGE HUD ── */}
      <div 
        style={{ 
          width: '100%',
          padding: '12px 0', 
          fontSize: '14px', 
          fontWeight: '900',
          letterSpacing: '1px',
          textAlign: 'center',
          color: '#ea580c', // Saffron orange to match your current theme
          borderTop: '1px solid rgba(128, 128, 128, 0.2)',
          borderBottom: '1px solid rgba(128, 128, 128, 0.2)',
          background: 'rgba(0,0,0,0.02)'
        }}
      >
        {scrollProgress}%
      </div>

      {/* ── STYLISH BOTTOM BUTTON ── */}
      <button 
        onClick={scrollToBottom}
        onMouseEnter={() => setIsHoveredBottom(true)}
        onMouseLeave={() => setIsHoveredBottom(false)}
        style={{
           background: isHoveredBottom ? '#ea580c' : 'transparent',
           color: isHoveredBottom ? '#ffffff' : 'var(--text-main)',
           border: 'none',
           width: '100%',
           height: '60px',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           cursor: 'pointer',
           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        title="Jump to Bottom"
      >
        <svg 
          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{
            transform: isHoveredBottom ? 'translateY(4px)' : 'translateY(0)',
            transition: 'transform 0.3s ease'
          }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </button>
    </div>
  );
}