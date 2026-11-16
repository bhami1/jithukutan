import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover pointer
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsPointerDevice(isFinePointer);

    if (!isFinePointer) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0c11] text-slate-100 selection:bg-pastel-sage/30 selection:text-pastel-cream">
      
      {/* Dynamic Cursor Ambient Soft Pastel Spotlight */}
      {isPointerDevice && (
        <div
          className="fixed pointer-events-none rounded-full blur-[110px] -z-1 transition-opacity duration-300 w-[420px] h-[420px] bg-gradient-to-r from-pastel-sage/10 via-pastel-lavender/10 to-pastel-peach/10"
          style={{
            transform: `translate3d(${mousePosition.x - 210}px, ${mousePosition.y - 210}px, 0)`,
            willChange: 'transform',
          }}
        />
      )}

      {/* Floating Top Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>

      {/* Dynamic Footer */}
      <Footer />

    </div>
  );
}
