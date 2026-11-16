import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Send, Mail, Sparkles, Terminal, Code2, ShieldCheck, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-cyan-500/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Eyebrow Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 hover:border-violet-500/40 transition-colors"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-wide text-slate-300">
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Main Title & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.08] mb-4">
              Designing systems. <br />
              <span className="text-gradient-purple-cyan">
                Engineering reality.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed mb-6">
              I'm <span className="text-white font-semibold underline decoration-violet-500/60 decoration-2 underline-offset-4">Abhijith V</span>, 
              a software engineer crafting high-performance web ecosystems, privacy-first Android architectures, and applied machine learning tools.
            </p>
          </motion.div>

          {/* Technical Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {['React', 'Python', 'Kotlin', 'Flutter', 'PyTorch CNN', 'Django', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300 hover:border-violet-500/30 hover:text-white transition-all"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-violet-600/25 hover:shadow-violet-600/40 transition-all w-full sm:w-auto"
            >
              <span>Explore Projects</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all w-full sm:w-auto"
            >
              <span>Get in Touch</span>
              <Mail className="w-4 h-4 text-violet-400" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-400 hover:text-slate-100 bg-black/40 border border-white/5 hover:border-white/20 transition-all w-full sm:w-auto"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>@Me-Abhijith-V</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </motion.div>

          {/* Social Quick-Access Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 pt-4 border-t border-white/5 w-full"
          >
            <span className="text-xs font-mono text-slate-500">Profiles:</span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-violet-600/20 text-slate-400 hover:text-violet-400 border border-white/5 hover:border-violet-500/30 transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-white/5 hover:border-blue-500/30 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-600/20 text-slate-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all"
                title="Telegram Bot"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-violet-600/20 text-slate-400 hover:text-violet-400 border border-white/5 hover:border-violet-500/30 transition-all"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-slate-500 ml-auto">
              📍 Varkala, Kerala, India
            </span>
          </motion.div>
        </div>

        {/* Right Column: Authentic Profile Photograph Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-[420px]">
            
            {/* Outer Decorative Glow Gradient Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 rounded-3xl opacity-40 blur-xl group-hover:opacity-75 transition duration-1000 animate-glow-pulse" />

            {/* Main Image Framing Card */}
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 sm:p-2.5 border border-white/10 shadow-2xl shadow-black/80">
              
              {/* Profile Image Viewport */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src="/portfolio_image.png"
                  alt="Abhijith V — Software Engineer & Full-Stack Developer"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.01] hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  width="800"
                  height="1000"
                />

                {/* Ambient photo overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent opacity-70" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

                {/* Floating Corner Accent Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0e111a]/85 backdrop-blur-xl border border-white/10 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Abhijith V</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      Full-Stack · Mobile · AI
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Dots */}
              <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-violet-400 shadow-sm shadow-violet-400/50" />
            </div>

            {/* Quick Stat Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#0a0d16]/90 backdrop-blur-xl border border-white/15 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-bold font-display text-white">14+ Repos</div>
                <div className="text-[11px] font-mono text-slate-400">Active GitHub Projects</div>
              </div>
            </motion.div>

            {/* Academic Spec Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="hidden sm:flex absolute -top-5 -right-6 bg-[#0a0d16]/90 backdrop-blur-xl border border-white/15 p-3 rounded-2xl shadow-2xl items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">MCA + B.Sc</div>
                <div className="text-[10px] font-mono text-slate-400">Computer Science</div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Subtle Scroll Cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </motion.div>

    </section>
  );
}
