import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle, BookOpen } from 'lucide-react';
import { educationData, experienceData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090b10]">
      
      {/* Background accents in soft pastels */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-pastel-lavender/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pastel-sage/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        
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
              <span className="font-mono text-xs uppercase tracking-widest text-pastel-peach">
                04 // Trajectory
              </span>
              <div className="h-px w-12 bg-pastel-peach/30" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight"
            >
              Education &amp; experience. <br />
              <span className="text-gradient-pastel">A timeline of verified milestones.</span>
            </motion.h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center p-1 rounded-2xl bg-white/[0.03] border border-white/10 self-start">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-pastel-sage to-pastel-lavender text-[#0b0c11] font-bold shadow-md shadow-pastel-sage/15'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education ({educationData.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-pastel-sage to-pastel-lavender text-[#0b0c11] font-bold shadow-md shadow-pastel-sage/15'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience ({experienceData.length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        {activeTab === 'education' ? (
          <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {educationData.map((item, index) => (
              <motion.div
                key={item.degree + item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#090b10] border-2 border-pastel-sage group-hover:border-pastel-lavender transition-colors shadow-sm shadow-pastel-sage/50" />

                {/* Content Box */}
                <div className="p-6 sm:p-7 rounded-2xl glass-card border border-white/5 group-hover:border-pastel-sage/30 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-pastel-sage bg-pastel-sage/10 border border-pastel-sage/20 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pastel-cream transition-colors mb-1">
                    {item.degree}
                  </h3>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-pastel-lavender font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {item.institution}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400 font-mono text-xs">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.role + exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#090b10] border-2 border-pastel-lavender group-hover:border-pastel-peach transition-colors shadow-sm shadow-pastel-lavender/50" />

                {/* Content Box */}
                <div className="p-6 sm:p-7 rounded-2xl glass-card border border-white/5 group-hover:border-pastel-lavender/30 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-pastel-lavender bg-pastel-lavender/10 border border-pastel-lavender/20 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-pastel-lavender/10 border border-pastel-lavender/20 text-pastel-lavender">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pastel-cream transition-colors mb-1">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-pastel-sage font-medium mb-4">
                    <span>{exp.organization}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400 font-mono text-xs">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-pastel-sage shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
