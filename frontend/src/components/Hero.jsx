import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * 3000, y: Math.random() * 2000,
        vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
        r: Math.random() * 1.2 + .3, a: Math.random() * .5 + .1,
      });
    }

    let t = 0;
    const draw = () => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);
      t += .003;

      // Grid
      const gs = 90, ox = (t * 10) % gs, oy = (t * 5) % gs;
      ctx.strokeStyle = 'rgba(201,168,76,0.05)'; ctx.lineWidth = 1;
      for (let x = -gs + ox; x < W + gs; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = -gs + oy; y < H + gs; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // Orbs
      [
        { x: W * .65 + Math.sin(t * .4) * 100, y: H * .4 + Math.cos(t * .3) * 60, r: 280, c: 'rgba(100,20,160,0.18)' },
        { x: W * .2 + Math.cos(t * .3) * 60, y: H * .6 + Math.sin(t * .4) * 50, r: 200, c: 'rgba(201,168,76,0.05)' },
      ].forEach(o => {
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, o.c); g.addColorStop(1, 'transparent');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2); ctx.fill();
      });

      // Particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.a * .3})`; ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '100px 48px 80px',
      background: 'var(--purple)',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%,rgba(59,13,94,0.2) 0%,rgba(45,10,74,0.82) 100%)' }} />

      <div style={{
        position: 'relative', zIndex: 2,
        background: 'rgba(58,14,82,0.93)', border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '20px', padding: '80px 60px', maxWidth: '900px', width: '100%',
        textAlign: 'center', backdropFilter: 'blur(8px)',
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
          fontWeight: 800, lineHeight: 1.1, color: '#fff', marginBottom: '8px',
        }}>
          Structured Growth.<br />
          <span style={{ color: '#C9A84C' }}>Strategic Execution.</span>
        </h1>

        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#BBA8D0', maxWidth: '580px', margin: '28px auto 44px' }}>
          We help businesses scale through consulting, investment advisory, HR solutions, technology, and real estate structuring.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => scrollTo('contact')} className="btn-gold">Book Consultation →</button>
          <button onClick={() => scrollTo('services')} className="btn-outline">View Services</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
