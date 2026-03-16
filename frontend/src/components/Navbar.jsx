import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: '70px',
      background: scrolled ? 'rgba(42,8,68,0.98)' : 'rgba(42,8,68,0.95)',
      borderBottom: '1px solid rgba(201,168,76,0.12)',
      backdropFilter: 'blur(12px)',
      transition: 'background 0.3s',
    }}>
      {/* Logo */}
      <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'none' }}>
        <img src="/logo.png" alt="Elitedge" style={{ height: '46px', width: '46px', objectFit: 'contain' }} />
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
          <span style={{ color: '#C9A84C' }}>Elitedge</span> Consulting
        </span>
      </a>

      {/* Links */}
      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none' }}>
        {['services', 'about', 'vision', 'contact'].map((item) => (
          <li key={item}>
            <button onClick={() => scrollTo(item)} style={{
              background: 'none', border: 'none', cursor: 'none',
              fontSize: '0.8rem', color: '#BBA8D0',
              textTransform: 'capitalize', letterSpacing: '0.02em',
              transition: 'color 0.25s', padding: '0',
            }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#BBA8D0'}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button onClick={() => scrollTo('contact')} style={{
        background: '#C9A84C', color: '#1a0030', fontSize: '0.78rem',
        fontWeight: 700, letterSpacing: '0.04em', padding: '11px 26px',
        border: 'none', borderRadius: '6px', cursor: 'none',
        transition: 'background 0.25s',
      }}
        onMouseEnter={e => e.target.style.background = '#E2C47A'}
        onMouseLeave={e => e.target.style.background = '#C9A84C'}
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
