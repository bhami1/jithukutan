import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080d] border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-pastel-sage to-pastel-lavender flex items-center justify-center text-[10px] font-bold font-mono text-[#0b0c11]">
              AV
            </span>
            <span className="font-display font-bold text-white text-sm tracking-tight">
              Abhijith V
            </span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-xs font-mono text-slate-400">
            © {currentYear} Abhijith V. All rights reserved.
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pastel-sage transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pastel-lavender transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalInfo.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pastel-peach transition-colors flex items-center gap-1.5"
          >
            <TelegramIcon className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-pastel-sage transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top of page"
          className="group p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer hover:border-pastel-sage/40"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 text-pastel-sage transition-transform" />
        </button>

      </div>
    </footer>
  );
}
