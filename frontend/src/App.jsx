import React, { useEffect, useRef } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import { WhyElitedge, Vision, Founder } from './components/Sections';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  let rx = 0, ry = 0;

  useEffect(() => {
    let mx = 0, my = 0;
    let animId;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px';
        cursorRef.current.style.top = my + 'px';
      }
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    animate();
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyElitedge />
        <Vision />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
