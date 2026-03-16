import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="about" ref={ref}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Logo visual */}
        <div className={`reveal ${inView ? 'visible' : ''}`} style={{
          borderRadius: '16px', overflow: 'hidden', height: '400px',
          background: 'linear-gradient(135deg, #5B1A7A, #4A1565, #3B0D5E)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: '24px', position: 'relative',
        }}>
          <img
            src="/logo.png"
            alt="Elitedge Consulting"
            style={{
              width: '220px', height: '220px', objectFit: 'contain',
              filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.5)) drop-shadow(0 0 80px rgba(201,168,76,0.2))',
              animation: 'floatLogo 4s ease-in-out infinite',
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>
              Elitedge <span style={{ color: '#C9A84C' }}>Consulting</span>
            </div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#BBA8D0', marginTop: '6px' }}>
              Chennai · India
            </div>
          </div>
        </div>

        {/* Text */}
        <div className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className="pill">WHO WE ARE</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.2, color: '#fff', marginBottom: '6px' }}>
            Building Business Excellence Through{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Strategic Clarity</span>
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '20px 0 24px' }} />
          <p style={{ fontSize: '0.84rem', lineHeight: 1.9, color: '#BBA8D0', marginBottom: '12px' }}>
            <strong style={{ color: '#C9A84C' }}>ElitEdge Consulting</strong> is a multi-domain business consulting firm headquartered in Chennai. We help entrepreneurs and enterprises solve operational, financial, and strategic challenges through structured execution and professional advisory.
          </p>
          <p style={{ fontSize: '0.84rem', lineHeight: 1.9, color: '#BBA8D0' }}>
            Our team brings deep domain expertise across eight verticals — enabling businesses at every stage to find clarity, access capital, and scale with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
