import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowUpRight, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

// Map project accent backgrounds to soft natural pastels
const pastelAccents = {
  timewarp: 'from-pastel-sage/15 to-pastel-lavender/10',
  'govt-job-notifier': 'from-pastel-sky/15 to-pastel-sage/10',
  'real-vs-fake-face': 'from-pastel-lavender/15 to-pastel-peach/10',
  'axez-chatbot': 'from-pastel-peach/15 to-pastel-sky/10',
  'community-issue-reporter': 'from-pastel-sage/15 to-pastel-peach/10',
  'wa-organizer': 'from-pastel-lavender/15 to-pastel-sage/10',
  'imfn-network': 'from-pastel-peach/15 to-pastel-lavender/10',
  hms: 'from-pastel-sky/15 to-pastel-sage/10',
};

export default function Projects() {
  const [filter, setFilter] = useState('featured');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'featured') return p.isFeatured;
    if (filter === 'mobile') return p.category === 'mobile';
    if (filter === 'ai') return p.category === 'ai';
    if (filter === 'backend') return p.category === 'backend';
    return true; // all
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0a0c12]">
      
      {/* Ambient background glows with natural pastels */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-pastel-sage/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pastel-lavender/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-pastel-lavender">
                03 // Selected Projects
              </span>
              <div className="h-px w-12 bg-pastel-lavender/30" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight"
            >
              Engineered solutions. <br />
              <span className="text-gradient-pastel">From deep learning to mobile systems.</span>
            </motion.h2>
          </div>

          {/* Filter Pills in Natural Pastels */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {[
              { id: 'featured', label: 'Featured 5' },
              { id: 'mobile', label: 'Mobile & Android' },
              { id: 'ai', label: 'AI & Vision' },
              { id: 'backend', label: 'Backend & Web' },
              { id: 'all', label: 'All Projects (8)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-pastel-sage to-pastel-lavender text-[#0b0c11] font-bold shadow-md shadow-pastel-sage/15'
                    : 'text-slate-400 hover:text-slate-200 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const bgGlow = pastelAccents[project.id] || 'from-pastel-sage/10 to-pastel-lavender/10';
              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-3xl glass-card border border-white/10 hover:border-pastel-sage/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 overflow-hidden"
                >
                  
                  {/* Subtle top glow highlight */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${bgGlow} blur-3xl opacity-35 group-hover:opacity-75 transition-opacity pointer-events-none rounded-full`} />

                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-pastel-sage bg-pastel-sage/10 border border-pastel-sage/20 px-2.5 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-pastel-lavender flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-pastel-lavender" />
                        {project.stars}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-pastel-cream transition-colors mb-1">
                      {project.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-slate-400 mb-4">
                      {project.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlight Metrics */}
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-5 flex items-center gap-2 text-xs font-mono text-pastel-cream">
                      <Cpu className="w-3.5 h-3.5 text-pastel-sage shrink-0" />
                      <span>{project.metrics}</span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-300 group-hover:border-pastel-sage/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors hover:border-pastel-sage/40"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code Repository</span>
                      </a>

                      {project.demoUrl && project.demoUrl !== project.githubUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-pastel-sage hover:text-white bg-pastel-sage/10 hover:bg-pastel-sage/20 px-3 py-1.5 rounded-lg border border-pastel-sage/30 transition-colors"
                          title="View Live Integration"
                        >
                          <span>Live Access</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      aria-label="View Project"
                    >
                      <ArrowUpRight className="w-5 h-5 text-pastel-sage" />
                    </a>
                  </div>

                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All on GitHub Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/Me-Abhijith-V?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-mono text-xs transition-all shadow-lg hover:border-pastel-sage/40"
          >
            <GithubIcon className="w-4 h-4 text-pastel-sage" />
            <span>View All 14 Repositories on GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
