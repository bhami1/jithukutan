import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import GitHubStats from './components/GitHubStats';
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
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 selection:bg-violet-600/30 selection:text-violet-200">
      
      {/* Dynamic Cursor Ambient Spotlight */}
      {isPointerDevice && (
        <div
          className="fixed pointer-events-none rounded-full blur-[100px] -z-1 transition-opacity duration-300 w-[450px] h-[450px] bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-cyan-500/10"
          style={{
            transform: `translate3d(${mousePosition.x - 225}px, ${mousePosition.y - 225}px, 0)`,
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
        <GitHubStats />
        <Contact />
      </main>

      {/* Dynamic Footer */}
      <Footer />

    </div>
  );
}
