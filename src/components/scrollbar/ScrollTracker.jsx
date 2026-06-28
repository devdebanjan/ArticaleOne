import React, { useState, useEffect } from 'react';

export default function ScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight === 0) return;
      
      const scroll = totalScroll / windowHeight;
      setScrollProgress(Math.round(scroll * 100));
    };
    
    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG Circle Math for the progress ring
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px', /* Moved to the right for better reading UX */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 9999,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        onClick={scrollToTop}
        style={{
          position: 'relative',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'var(--glass-bg, rgba(243, 244, 246, 0.8))', 
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: 'none',
          boxShadow: isHovered 
            ? '0 10px 25px rgba(234, 88, 12, 0.25)' 
            : '0 4px 12px rgba(0,0,0,0.08)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          padding: 0,
        }}
        title="Back to Top"
      >
        {/* The SVG Progress Ring Container */}
        <svg 
          width="64" 
          height="64" 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            transform: 'rotate(-90deg)' /* Starts the ring at the top (12 o'clock) */
          }}
        >
          {/* Faint Background Track */}
          <circle 
            cx="32" 
            cy="32" 
            r={radius} 
            fill="transparent" 
            stroke="rgba(128, 128, 128, 0.2)" 
            strokeWidth="3" 
          />
          {/* Active Saffron Orange Progress Ring */}
          <circle 
            cx="32" 
            cy="32" 
            r={radius} 
            fill="transparent" 
            stroke="#ea580c" 
            strokeWidth="3" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
          />
        </svg>

        {/* Up Arrow Icon */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke={isHovered ? '#ea580c' : 'var(--text-main, #111827)'} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            transition: 'stroke 0.3s ease',
            zIndex: 1 
          }}
        >
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>

      {/* Fade-in Percentage Text */}
      <div 
        style={{
          marginTop: '12px',
          fontSize: '14px',
          fontWeight: '800',
          color: '#ea580c',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        {scrollProgress}%
      </div>
    </div>
  );
}