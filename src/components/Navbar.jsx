import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Monogram */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="group flex items-center gap-2.5 bg-[#12141c]/80 backdrop-blur-xl border border-white/10 px-3.5 py-1.5 rounded-full hover:border-pastel-sage/50 transition-colors"
        >
          <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-pastel-sage to-pastel-lavender flex items-center justify-center text-xs font-bold font-mono text-[#0b0c11] shadow-sm group-hover:scale-105 transition-transform">
            AV
          </span>
          <span className="font-display font-semibold tracking-tight text-sm text-slate-200 group-hover:text-white transition-colors">
            Abhijith V
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-pastel-sage animate-pulse" title="Available for work" />
        </motion.a>

        {/* Desktop Navigation Pill */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#12141c]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80'
              : 'bg-white/[0.03] backdrop-blur-md border border-white/5'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-pastel-sage/20 to-pastel-lavender/20 border border-pastel-sage/30 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </motion.nav>

        {/* Right CTA Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-3"
        >
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 hover:border-pastel-sage/40"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-pastel-sage" />
          </a>
          <a
            href="#contact"
            className="relative group overflow-hidden text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-pastel-sage via-pastel-lavender to-pastel-peach text-[#0b0c11] shadow-lg shadow-pastel-sage/15 hover:shadow-pastel-sage/25 transition-all"
          >
            <span className="relative z-10 flex items-center gap-1.5 font-bold">
              <span>Let's Talk</span>
              <Sparkles className="w-3 h-3 text-[#0b0c11]" />
            </span>
          </a>
        </motion.div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-pastel-sage to-pastel-lavender text-[#0b0c11]"
          >
            Talk
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-lg mx-auto bg-[#12141c]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/90"
          >
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pastel-sage flex items-center gap-1"
              >
                GitHub Profile ↗
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pastel-lavender flex items-center gap-1"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
