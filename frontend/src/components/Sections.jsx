import React from 'react';
import { useInView } from 'react-intersection-observer';

const whyItems = [
  'One-stop strategic solution',
  'Transparent & professional process',
  'Verified network & partners',
  'Structured execution model',
  'Multi-domain expertise under one roof',
  'Founder-led, hands-on advisory',
  'Chennai-based, globally aligned',
];

export const WhyElitedge = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="why">
      <div ref={ref} className={`sec-center reveal ${inView ? 'visible' : ''}`} style={{ marginBottom: '48px' }}>
        <div className="pill pill-gold">OUR ADVANTAGE</div>
        <h2>Why <span>ElitEdge?</span></h2>
      </div>
      <div className={`reveal ${inView ? 'visible' : ''}`} style={{
        background: '#4A1565', borderRadius: '20px', padding: '56px 52px',
        border: '1px solid rgba(201,168,76,0.12)', maxWidth: '860px', margin: '0 auto',
        transitionDelay: '0.15s',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {whyItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, color: '#C9A84C', fontSize: '0.9rem',
              }}>✓</div>
              <span style={{ fontSize: '0.9rem', color: '#EDE8F5' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Vision = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const vcards = [
    { icon: '⚡', title: 'Simplified', desc: 'Clear pathways to growth' },
    { icon: '⚡', title: 'Integrated', desc: 'All solutions under one roof' },
    { icon: '⚡', title: 'Scalable', desc: 'Built for global expansion' },
  ];

  return (
    <section className="section section-dark" id="vision">
      <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`} style={{
        maxWidth: '1100px', margin: '0 auto',
        background: '#4A1565', borderRadius: '20px', padding: '72px 60px',
        border: '1px solid rgba(201,168,76,0.12)', position: 'relative',
        overflow: 'hidden', textAlign: 'center',
      }}>
        {/* Right accent line */}
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '3px', background: 'linear-gradient(180deg,transparent,#C9A84C,transparent)' }} />

        <div style={{
          width: '60px', height: '60px', background: 'rgba(201,168,76,0.12)',
          border: '1px solid rgba(201,168,76,0.2)', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem', margin: '0 auto 24px',
        }}>🎯</div>

        <div className="pill pill-gold">OUR VISION</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem,3.2vw,3rem)', fontWeight: 700, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
          Building a <span style={{ color: '#C9A84C' }}>Global Consulting<br />Ecosystem</span>
        </h2>
        <p style={{ fontSize: '0.88rem', lineHeight: 1.9, color: '#BBA8D0', maxWidth: '640px', margin: '0 auto 52px' }}>
          To build a global consulting ecosystem that simplifies business growth across industries — making world-class strategic advisory accessible to every ambitious entrepreneur and enterprise.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {vcards.map((v, i) => (
            <div key={i} style={{
              background: '#3A0E52', borderRadius: '14px', padding: '32px 24px',
              border: '1px solid rgba(201,168,76,0.1)', transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'}
            >
              <span style={{ fontSize: '1.4rem', color: '#C9A84C', display: 'block', marginBottom: '16px' }}>{v.icon}</span>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>{v.title}</h4>
              <p style={{ fontSize: '0.74rem', color: '#BBA8D0', lineHeight: 1.65 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Founder = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="founder">
      <div className={`sec-center reveal ${inView ? 'visible' : ''}`} style={{ marginBottom: '52px' }} ref={ref}>
        <div className="pill pill-gold">LEADERSHIP</div>
        <h2>Meet the <span>Founder</span></h2>
      </div>
      <div className={`reveal ${inView ? 'visible' : ''}`} style={{
        maxWidth: '1000px', margin: '0 auto',
        background: '#4A1565', borderRadius: '20px', overflow: 'hidden',
        border: '1px solid rgba(201,168,76,0.15)',
        display: 'grid', gridTemplateColumns: '380px 1fr',
        transitionDelay: '0.15s',
      }}>
        {/* Photo */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
          <img
            src="/rithik.png"
            alt="Rithik Natarajan"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', minHeight: '400px' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,#4A1565 100%)' }} />
        </div>

        {/* Info */}
        <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            width: '36px', height: '36px', background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.2)', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            float: 'right', color: '#C9A84C', fontSize: '0.72rem', fontWeight: 700, cursor: 'none',
          }}>in</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem', fontWeight: 700, color: '#fff', marginBottom: '4px', clear: 'both' }}>
            Rithik Natarajan
          </div>
          <div style={{ color: '#C9A84C', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.04em', marginBottom: '12px' }}>
            Founder & Consultant
          </div>
          <div style={{ width: '40px', height: '2px', background: '#C9A84C', marginBottom: '24px' }} />
          <p style={{ fontSize: '0.8rem', lineHeight: 1.9, color: '#BBA8D0' }}>
            Driven by structured thinking and growth systems, <strong style={{ color: '#C9A84C' }}>Rithik</strong> founded ElitEdge to create an integrated consulting platform where businesses find strategic clarity, capital access, and execution support — all under one roof.
            <br /><br />
            With experience spanning digital strategy, financial advisory, and business development, Rithik brings a rare combination of analytical rigour and entrepreneurial instinct to every client engagement.
          </p>
        </div>
      </div>
    </section>
  );
};
