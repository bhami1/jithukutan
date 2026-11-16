import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, FileCode, Palette, Layout, Sparkles, Terminal, Layers, 
  Cpu, Server, Smartphone, PhoneCall, FolderKanban, Activity, 
  Bot, Brain, Eye, Database, HardDrive, GitBranch, TerminalSquare, Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon mapping helper
const iconMap = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  FileCode: <FileCode className="w-5 h-5 text-amber-400" />,
  Palette: <Palette className="w-5 h-5 text-teal-400" />,
  Layout: <Layout className="w-5 h-5 text-orange-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />,
  Figma: <Sparkles className="w-5 h-5 text-violet-400" />,
  Terminal: <Terminal className="w-5 h-5 text-yellow-400" />,
  Layers: <Layers className="w-5 h-5 text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  Server: <Server className="w-5 h-5 text-lime-400" />,
  Network: <Activity className="w-5 h-5 text-sky-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-violet-400" />,
  PhoneCall: <PhoneCall className="w-5 h-5 text-blue-400" />,
  FolderKanban: <FolderKanban className="w-5 h-5 text-emerald-400" />,
  Activity: <Activity className="w-5 h-5 text-purple-400" />,
  Bot: <Bot className="w-5 h-5 text-cyan-400" />,
  Brain: <Brain className="w-5 h-5 text-pink-400" />,
  Eye: <Eye className="w-5 h-5 text-rose-400" />,
  Database: <Database className="w-5 h-5 text-blue-400" />,
  HardDrive: <HardDrive className="w-5 h-5 text-emerald-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-400" />,
  Github: <GitBranch className="w-5 h-5 text-violet-400" />,
  TerminalSquare: <TerminalSquare className="w-5 h-5 text-slate-300" />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.items
    : skillsData.items.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080a10]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

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
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              02 // Technical Capabilities
            </span>
            <div className="h-px w-12 bg-cyan-500/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight"
          >
            Technologies &amp; stacks <br />
            <span className="text-gradient">proven across real codebases.</span>
          </motion.h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Proficiencies backed by verifiable GitHub projects, academic coursework, and production applications.
          </p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5"
        >
          {skillsData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-violet-600/30 to-indigo-600/30 border border-violet-500/50 shadow-lg shadow-violet-600/15'
                    : 'text-slate-400 hover:text-slate-200 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="group relative p-4 rounded-2xl glass-card border border-white/5 hover:border-violet-500/40 hover:bg-[#111422]/70 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-violet-400" />}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    skill.level === 'Expert' 
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' 
                      : skill.level === 'Advanced' 
                      ? 'bg-violet-500/10 text-violet-300 border-violet-500/30' 
                      : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-mono text-slate-400 capitalize">
                  {skill.category}
                </span>

                {/* Subtle corner light */}
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-white/0 group-hover:bg-violet-400 transition-all" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Engineering Principles Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 bg-gradient-to-r from-violet-950/20 via-[#0e111a] to-cyan-950/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm">
                <Check className="w-4 h-4" />
                <span>Clean Architecture</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Emphasis on modular code, single responsibility, clean folder structures, and separation of UI from logic.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                <Check className="w-4 h-4" />
                <span>REST &amp; Microservices</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Robust endpoints designed with Django REST Framework, Flask, and Node.js with secure token flows.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Check className="w-4 h-4" />
                <span>Zero Telemetry &amp; Privacy</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building privacy-respecting client apps that handle data locally on user hardware whenever feasible.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
