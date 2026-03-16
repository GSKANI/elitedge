import React from 'react';
import { useInView } from 'react-intersection-observer';

const services = [
  { icon: '📈', title: 'Digital Marketing', desc: 'Data-driven campaigns across SEO, social media, paid ads, and content — engineered to grow your brand and generate qualified leads.' },
  { icon: '💹', title: 'Investment Advisory', desc: 'Strategic investment counsel — portfolio structuring, risk assessment, and identifying high-growth opportunities aligned with your goals.' },
  { icon: '👥', title: 'HR Services', desc: 'End-to-end HR solutions including talent acquisition, performance management, and cultures that attract and retain top talent.' },
  { icon: '🎯', title: 'Brand Positioning', desc: 'A compelling brand identity and market positioning strategy that differentiates you and resonates with your target audience.' },
  { icon: '💻', title: 'Technology Solutions', desc: 'Technology strategy and implementation — from digital infrastructure and automation to enterprise software that drives efficiency.' },
  { icon: '🚀', title: 'Product Development', desc: 'From ideation to launch — product strategy, roadmap planning, MVP design, and go-to-market execution for successful launches.' },
  { icon: '🏠', title: 'Real Estate Structuring', desc: 'Expert advisory on real estate portfolio structuring, property investment strategy, and regulatory compliance.' },
  { icon: '💰', title: 'Business Finance Solutions', desc: 'Comprehensive financial solutions including working capital management, funding access, and financial modelling.' },
  { icon: '⚖️', title: 'Legal & Compliance', desc: 'Regulatory advisory, compliance frameworks, and risk management solutions for compliance-driven sectors.' },
];

const ServiceCard = ({ icon, title, desc, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div style={{
        background: '#4A1565', borderRadius: '16px', padding: '36px 28px',
        border: '1px solid rgba(201,168,76,0.1)',
        transition: 'border-color 0.35s, transform 0.35s',
        cursor: 'none', height: '100%',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        <div style={{
          width: '52px', height: '52px', background: 'rgba(201,168,76,0.12)',
          borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '24px', fontSize: '1.3rem', border: '1px solid rgba(201,168,76,0.2)',
        }}>
          {icon}
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{title}</h3>
        <p style={{ fontSize: '0.75rem', lineHeight: 1.82, color: '#BBA8D0' }}>{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section section-dark" id="services">
      <div ref={ref} className={`sec-center reveal ${inView ? 'visible' : ''}`}>
        <div className="pill pill-gold">WHAT WE OFFER</div>
        <h2>Our <span>Services</span></h2>
        <p className="sub">Comprehensive solutions designed to accelerate your business growth across multiple domains</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} delay={(i % 3) * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Services;
