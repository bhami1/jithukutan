import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, BookOpen, Compass, CheckCircle2, Feather, Globe, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090a0f]">
      
      {/* Soft pastel ambient background blooms */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pastel-sage/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-pastel-lavender/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-pastel-sage">
              01 // Background & Philosophy
            </span>
            <div className="h-px w-12 bg-pastel-sage/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight"
          >
            Crafting software with <br />
            <span className="text-gradient-pastel">thoughtful intent &amp; natural balance.</span>
          </motion.h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed"
          >
            <p className="text-lg text-slate-200 font-medium">
              Hello! I am <span className="text-pastel-cream font-semibold">Abhijith V</span>, a developer based in Kerala, India. I approach software engineering as both an exact science and a craft of digital harmony.
            </p>

            <p>
              I build cross-platform mobile utilities, modern web architectures with React, and applied machine learning tools. Rather than chasing unnecessary complexity, I value clean modularity, honest performance, and respecting user privacy at every layer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-2xl glass-card border border-white/5 space-y-2 hover:border-pastel-sage/30 transition-all">
                <div className="flex items-center gap-2 text-pastel-sage font-semibold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Privacy-First Philosophy</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Prioritizing on-device data processing, zero unnecessary tracking, and local device APIs as shown in TimeWarp.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/5 space-y-2 hover:border-pastel-lavender/30 transition-all">
                <div className="flex items-center gap-2 text-pastel-lavender font-semibold text-sm">
                  <Feather className="w-4 h-4" />
                  <span>Clean Engineering</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Writing maintainable, readable code with robust types, clean abstractions, and purposeful architecture.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/5 space-y-2 hover:border-pastel-peach/30 transition-all">
                <div className="flex items-center gap-2 text-pastel-peach font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Applied AI & Vision</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Developing focused convolutional neural networks and natural language interfaces that solve tangible problems.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/5 space-y-2 hover:border-pastel-sky/30 transition-all">
                <div className="flex items-center gap-2 text-pastel-sky font-semibold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Continuous Learning</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Grounding practical engineering in rigorous computer science theory through B.Sc and ongoing MCA postgraduate work.
                </p>
              </div>
            </div>

            <p>
              Outside of development, I enjoy mentoring new programmers, experimenting with open-source systems, and taking quiet walks along the scenic coastline of Varkala.
            </p>
          </motion.div>

          {/* Right Column: Natural Pastel Profile & Disciplines Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl glass-card border border-white/10 p-7 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#141620] to-[#0e1017]">
              
              {/* Soft decorative ambient glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-pastel-sage/10 blur-3xl pointer-events-none rounded-full" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-pastel-lavender/10 blur-3xl pointer-events-none rounded-full" />

              <div className="relative z-10 space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-pastel-sage animate-pulse" />
                    <span className="font-display font-semibold text-white text-sm">Abhijith V</span>
                  </div>
                  <span className="text-[11px] font-mono text-pastel-sage bg-pastel-sage/10 px-2.5 py-0.5 rounded-full border border-pastel-sage/20">
                    Kerala, India
                  </span>
                </div>

                {/* Key Disciplines List */}
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider block mb-1">
                      Current Specialization
                    </span>
                    <p className="text-sm font-semibold text-slate-100">
                      Master of Computer Applications (MCA)
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Distributed computing, software engineering &amp; intelligent systems.
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider block mb-1">
                      Academic Degree
                    </span>
                    <p className="text-sm font-semibold text-slate-100">
                      Bachelor of Computer Science
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Kerala University (2022 — 2025)
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider block mb-1">
                      Certification
                    </span>
                    <p className="text-sm font-semibold text-slate-100">
                      Career Essentials in Cybersecurity
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Microsoft &amp; LinkedIn Learning
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider block mb-1">
                      Core Stacks
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {['React', 'Python / Django', 'Kotlin / Android', 'Flutter', 'PyTorch CNN', 'MySQL'].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 border border-white/5 text-pastel-cream"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-pastel-sage">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Open to Opportunities
                  </span>
                  <span>IST / UTC+5:30</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
