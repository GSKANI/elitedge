import React from 'react';

const Footer = () => (
  <footer style={{ background: '#2D0A4A', borderTop: '1px solid rgba(201,168,76,0.12)', padding: '32px 48px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/logo.png" alt="Elitedge" style={{ height: '36px', width: '36px', objectFit: 'contain' }} />
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>
          <span style={{ color: '#C9A84C' }}>Elitedge</span> Consulting
        </span>
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        {['services', 'about', 'vision', 'contact'].map(item => (
          <a key={item} href={`#${item}`} style={{ fontSize: '0.72rem', color: '#BBA8D0', textDecoration: 'none', textTransform: 'capitalize', cursor: 'none', transition: 'color 0.25s' }}
            onMouseEnter={e => e.target.style.color = '#C9A84C'}
            onMouseLeave={e => e.target.style.color = '#BBA8D0'}
          >{item}</a>
        ))}
      </div>
      <div style={{ fontSize: '0.63rem', color: '#BBA8D0' }}>© 2026 Elitedge Consulting · Chennai, India</div>
    </div>
  </footer>
);

export default Footer;
