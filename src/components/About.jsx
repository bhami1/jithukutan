import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Laptop, BookOpen, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#07080c]">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

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
            <span className="font-mono text-xs uppercase tracking-widest text-violet-400">
              01 // Background & Ethos
            </span>
            <div className="h-px w-12 bg-violet-500/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight"
          >
            Behind the code: <br />
            <span className="text-gradient">Logic, craft, and intentional design.</span>
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
              Hello! I am <span className="text-white font-semibold">Abhijith V</span>, a full-stack engineer and computer science researcher based in Kerala, India. My journey combines deep computational curiosity with hands-on application delivery.
            </p>

            <p>
              I specialize in architecting responsive web applications with React, constructing performant backends using Python (Django and Flask), building native Android utilities with Kotlin and Java, and implementing practical computer vision and AI classifiers.
            </p>

            <p>
              My engineering philosophy revolves around three foundational pillars:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-2xl glass-card border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Privacy-First Engineering</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Prioritizing on-device computation, local media indexing, and zero-telemetry architectures like in my Android project TimeWarp.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Laptop className="w-4 h-4" />
                  <span>Full-Stack Versatility</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Seamlessly bridging modern component-driven frontends with resilient APIs, relational schemas, and asynchronous job workers.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Applied AI & Deep Learning</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Building focused neural network classifiers (e.g. real vs synthetic face detection) and production OpenAI chatbot integrations.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <BookOpen className="w-4 h-4" />
                  <span>Continuous Academic Growth</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  From Bachelor of Computer Science to pursuing my MCA, rigorously expanding theoretical foundations and systems engineering mastery.
                </p>
              </div>
            </div>

            <p>
              When I step away from code, you will find me mentoring aspiring programmers, analyzing open-source codebases, and exploring the serene coastline of Varkala.
            </p>
          </motion.div>

          {/* Interactive Developer Terminal / Specs Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Terminal Window Header */}
              <div className="bg-[#0b0e17] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400">abhijith@archlinux ~ specs</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">v2.6.4</span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-3.5 bg-[#0a0d15]/95 text-slate-300">
                
                <div>
                  <span className="text-violet-400 font-semibold">$ whoami</span>
                  <p className="text-slate-200 mt-1 pl-3 border-l-2 border-violet-500/40">
                    Abhijith V — Software Engineer & Full-Stack Developer
                  </p>
                </div>

                <div>
                  <span className="text-cyan-400 font-semibold">$ cat education.json</span>
                  <div className="text-slate-300 mt-1 pl-3 border-l-2 border-cyan-500/40 space-y-1">
                    <div>• <strong className="text-white">Degree:</strong> Bachelor of Computer Science (Kerala University)</div>
                    <div>• <strong className="text-white">Current:</strong> Master of Computer Applications (MCA)</div>
                    <div>• <strong className="text-white">Credential:</strong> Microsoft Cybersecurity Essentials</div>
                  </div>
                </div>

                <div>
                  <span className="text-indigo-400 font-semibold">$ cat focus_areas.sys</span>
                  <div className="text-slate-300 mt-1 pl-3 border-l-2 border-indigo-500/40 space-y-1">
                    <div>• Frontend: React 19, Tailwind CSS, Modern ES6+</div>
                    <div>• Backend: Python, Django, Flask, Node.js, PHP</div>
                    <div>• Mobile: Android (Kotlin/Java), Flutter (Dart)</div>
                    <div>• AI / Vision: PyTorch CNNs, OpenAI APIs</div>
                  </div>
                </div>

                <div>
                  <span className="text-emerald-400 font-semibold">$ cat location.cfg</span>
                  <p className="text-slate-300 mt-1 pl-3 border-l-2 border-emerald-500/40">
                    Varkala, Thiruvananthapuram, Kerala, India (IST / UTC+5:30)
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Ready for hire
                  </span>
                  <span className="text-slate-500">Status: Active</span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
