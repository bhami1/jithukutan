import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ArrowUpRight, Code, Terminal, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { githubProfileData, personalInfo } from '../data/portfolioData';

export default function GitHubStats() {
  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#07080d]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-violet-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-violet-400">
              05 // Open Source & Repositories
            </span>
            <div className="h-px w-12 bg-violet-500/30" />
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight"
            >
              Public code. <br />
              <span className="text-gradient">Exploration in the open.</span>
            </motion.h2>

            <motion.a
              href={githubProfileData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs hover:border-violet-500/40 transition-all self-start md:self-auto"
            >
              <GithubIcon className="w-4 h-4 text-violet-400" />
              <span>github.com/Me-Abhijith-V</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </motion.a>
          </div>
        </div>

        {/* GitHub Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl glass-card border border-white/5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-1">14</div>
            <div className="text-xs font-mono text-slate-400">Public Repos</div>
          </div>
          <div className="p-5 rounded-2xl glass-card border border-white/5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-cyan-400 mb-1">6+</div>
            <div className="text-xs font-mono text-slate-400">Languages Used</div>
          </div>
          <div className="p-5 rounded-2xl glass-card border border-white/5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-violet-400 mb-1">100%</div>
            <div className="text-xs font-mono text-slate-400">Open Source</div>
          </div>
          <div className="p-5 rounded-2xl glass-card border border-white/5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-400 mb-1">Active</div>
            <div className="text-xs font-mono text-slate-400">Continuous Shipping</div>
          </div>
        </div>

        {/* Repositories Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {githubProfileData.highlights.map((repo, idx) => (
            <motion.a
              key={repo.title}
              href={`https://github.com/Me-Abhijith-V/${repo.title}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group p-5 rounded-2xl glass-card border border-white/5 hover:border-violet-500/40 hover:bg-[#101422] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-violet-400" />
                    <span className="text-xs font-mono text-cyan-400 font-medium">{repo.lang}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-base font-semibold font-mono text-white group-hover:text-violet-300 transition-colors mb-2 break-all">
                  {repo.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
                <span>Branch: main</span>
                <span className="group-hover:text-slate-300 transition-colors">View Repo →</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
