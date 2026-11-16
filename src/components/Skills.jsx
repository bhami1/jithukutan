import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, FileCode, Palette, Layout, Sparkles, Terminal, Layers, 
  Cpu, Server, Smartphone, PhoneCall, FolderKanban, Activity, 
  Bot, Brain, Eye, Database, HardDrive, GitBranch, TerminalSquare, Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon mapping helper with natural pastel tones
const iconMap = {
  Code2: <Code2 className="w-5 h-5 text-pastel-lavender" />,
  FileCode: <FileCode className="w-5 h-5 text-pastel-peach" />,
  Palette: <Palette className="w-5 h-5 text-pastel-sage" />,
  Layout: <Layout className="w-5 h-5 text-pastel-cream" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pastel-lavender" />,
  Figma: <Sparkles className="w-5 h-5 text-pastel-lavender" />,
  Terminal: <Terminal className="w-5 h-5 text-pastel-sage" />,
  Layers: <Layers className="w-5 h-5 text-pastel-peach" />,
  Cpu: <Cpu className="w-5 h-5 text-pastel-lavender" />,
  Server: <Server className="w-5 h-5 text-pastel-sky" />,
  Network: <Activity className="w-5 h-5 text-pastel-sage" />,
  Smartphone: <Smartphone className="w-5 h-5 text-pastel-peach" />,
  PhoneCall: <PhoneCall className="w-5 h-5 text-pastel-sky" />,
  FolderKanban: <FolderKanban className="w-5 h-5 text-pastel-sage" />,
  Activity: <Activity className="w-5 h-5 text-pastel-lavender" />,
  Bot: <Bot className="w-5 h-5 text-pastel-sky" />,
  Brain: <Brain className="w-5 h-5 text-pastel-lavender" />,
  Eye: <Eye className="w-5 h-5 text-pastel-peach" />,
  Database: <Database className="w-5 h-5 text-pastel-sky" />,
  HardDrive: <HardDrive className="w-5 h-5 text-pastel-sage" />,
  GitBranch: <GitBranch className="w-5 h-5 text-pastel-peach" />,
  Github: <GitBranch className="w-5 h-5 text-pastel-lavender" />,
  TerminalSquare: <TerminalSquare className="w-5 h-5 text-pastel-cream" />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.items
    : skillsData.items.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090b10]">
      
      {/* Background radial pastel blooms */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pastel-sage/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pastel-lavender/5 blur-[140px] pointer-events-none rounded-full" />

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
            <span className="font-mono text-xs uppercase tracking-widest text-pastel-sage">
              02 // Technical Capabilities
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
            Technologies &amp; stacks <br />
            <span className="text-gradient-pastel">grounded in real production systems.</span>
          </motion.h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Verified skills across web platforms, mobile frameworks, machine learning, and resilient backend design.
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
                    ? 'text-[#0b0c11] font-bold bg-gradient-to-r from-pastel-sage to-pastel-lavender shadow-md shadow-pastel-sage/15'
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
                className="group relative p-4 rounded-2xl glass-card border border-white/5 hover:border-pastel-sage/40 hover:bg-[#141724]/70 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-pastel-lavender" />}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    skill.level === 'Expert' 
                      ? 'bg-pastel-sage/10 text-pastel-sage border-pastel-sage/30' 
                      : skill.level === 'Advanced' 
                      ? 'bg-pastel-lavender/10 text-pastel-lavender border-pastel-lavender/30' 
                      : 'bg-pastel-peach/10 text-pastel-peach border-pastel-peach/30'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-white group-hover:text-pastel-cream transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-mono text-slate-400 capitalize">
                  {skill.category}
                </span>

                {/* Subtle corner light */}
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-white/0 group-hover:bg-pastel-sage transition-all" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Engineering Principles Banner with Pastel Accents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 bg-gradient-to-r from-[#141622] via-[#0f111a] to-[#141822]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-pastel-sage font-semibold text-sm">
                <Check className="w-4 h-4" />
                <span>Clean Architecture</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Emphasis on modular code, single responsibility, clear domain boundaries, and separating UI from state logic.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-pastel-lavender font-semibold text-sm">
                <Check className="w-4 h-4" />
                <span>REST &amp; Microservices</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clean endpoints engineered in Django REST Framework, Flask, and Node.js with secure authentication flows.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-pastel-peach font-semibold text-sm">
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
