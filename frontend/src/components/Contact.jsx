import React, { useState } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

const initialForm = { name: '', email: '', phone: '', service: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.service.trim()) e.service = 'Please specify a service';
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    try {
      await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contact`, form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = (field) => ({
    width: '100%', background: '#3A0E52',
    border: `1px solid ${errors[field] ? '#ff6b6b' : 'rgba(201,168,76,0.15)'}`,
    borderRadius: '8px', padding: '13px 16px',
    color: '#fff', fontSize: '0.82rem',
    fontFamily: "'Inter', sans-serif",
    outline: 'none', transition: 'border-color 0.25s',
  });

  const contacts = [
    { icon: '📞', label: 'Phone', value: '+91 7338807880\n+91 7338847880' },
    { icon: '📧', label: 'Email', value: 'info@elitedgeconsulting.com' },
    { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu, India' },
    { icon: '🕐', label: 'Working Hours', value: 'Mon – Sat, 9AM – 7PM IST' },
  ];

  return (
    <section className="section section-dark" id="contact">
      <div ref={ref} className={`sec-center reveal ${inView ? 'visible' : ''}`} style={{ marginBottom: '48px' }}>
        <h2>Let's Build Growth <span>Together</span></h2>
        <p className="sub">Ready to transform your business? Reach out to us for a consultation.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>

        {/* Contact Info */}
        <div className={`reveal ${inView ? 'visible' : ''}`} style={{
          background: '#4A1565', borderRadius: '16px', padding: '44px 36px',
          border: '1px solid rgba(201,168,76,0.12)',
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '32px' }}>Contact Information</h3>
          {contacts.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '28px' }}>
              <div style={{
                width: '42px', height: '42px', background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.2)', borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem',
              }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BBA8D0', marginBottom: '4px' }}>{c.label}</div>
                <div style={{ fontSize: '0.82rem', color: '#EDE8F5', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className={`reveal ${inView ? 'visible' : ''}`} style={{
          background: '#4A1565', borderRadius: '16px', padding: '44px 36px',
          border: '1px solid rgba(201,168,76,0.12)', transitionDelay: '0.1s',
        }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', color: '#fff', marginBottom: '12px' }}>Message Sent!</h3>
              <p style={{ color: '#BBA8D0', fontSize: '0.85rem', lineHeight: 1.7 }}>
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button onClick={() => setStatus(null)} style={{ marginTop: '24px', background: '#C9A84C', color: '#1a0030', border: 'none', borderRadius: '8px', padding: '12px 28px', fontSize: '0.82rem', fontWeight: 700, cursor: 'none' }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
                <div>
                  <label style={{ fontSize: '0.7rem', color: '#BBA8D0', display: 'block', marginBottom: '8px' }}>Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle('name')}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = errors.name ? '#ff6b6b' : 'rgba(201,168,76,0.15)'}
                  />
                  {errors.name && <span style={{ color: '#ff6b6b', fontSize: '0.65rem' }}>{errors.name}</span>}
                </div>
                <div>
                  <label style={{ fontSize: '0.7rem', color: '#BBA8D0', display: 'block', marginBottom: '8px' }}>Email</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle('email')}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = errors.email ? '#ff6b6b' : 'rgba(201,168,76,0.15)'}
                  />
                  {errors.email && <span style={{ color: '#ff6b6b', fontSize: '0.65rem' }}>{errors.email}</span>}
                </div>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '0.7rem', color: '#BBA8D0', display: 'block', marginBottom: '8px' }}>Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle('phone')}
                  onFocus={e => e.target.style.borderColor = '#C9A84C'}
                  onBlur={e => e.target.style.borderColor = errors.phone ? '#ff6b6b' : 'rgba(201,168,76,0.15)'}
                />
                {errors.phone && <span style={{ color: '#ff6b6b', fontSize: '0.65rem' }}>{errors.phone}</span>}
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '0.7rem', color: '#BBA8D0', display: 'block', marginBottom: '8px' }}>Service Interested In</label>
                <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle('service'), appearance: 'none' }}>
                  <option value="">Select a service...</option>
                  {['Digital Marketing', 'Investment Advisory', 'HR Services', 'Brand Positioning', 'Technology Solutions', 'Product Development', 'Real Estate Structuring', 'Business Finance Solutions', 'Legal & Compliance'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <span style={{ color: '#ff6b6b', fontSize: '0.65rem' }}>{errors.service}</span>}
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '0.7rem', color: '#BBA8D0', display: 'block', marginBottom: '8px' }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your business goals..." rows={4}
                  style={{ ...inputStyle('message'), resize: 'vertical', height: '110px' }}
                  onFocus={e => e.target.style.borderColor = '#C9A84C'}
                  onBlur={e => e.target.style.borderColor = errors.message ? '#ff6b6b' : 'rgba(201,168,76,0.15)'}
                />
                {errors.message && <span style={{ color: '#ff6b6b', fontSize: '0.65rem' }}>{errors.message}</span>}
              </div>

              {status === 'error' && (
                <div style={{ background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.3)', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', fontSize: '0.78rem', color: '#ff6b6b' }}>
                  Failed to send. Please call us directly at +91 7338807880.
                </div>
              )}

              <button type="submit" disabled={status === 'loading'} style={{
                width: '100%', background: '#C9A84C', color: '#1a0030',
                fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em',
                padding: '14px', border: 'none', borderRadius: '8px',
                cursor: 'none', transition: 'background 0.25s', marginTop: '6px',
                opacity: status === 'loading' ? 0.7 : 1,
              }}>
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
