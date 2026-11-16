import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    // Construct mailto link
    const mailtoUri = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUri;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0a0c12]">
      
      {/* Ambient background glows in soft pastels */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-pastel-sage/10 via-pastel-lavender/10 to-pastel-peach/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-pastel-sage">
              05 // Initiate Contact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight"
          >
            Let's build something <br />
            <span className="text-gradient-pastel">remarkable together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Whether you have an engineering role in mind, need a full-stack developer for a high-impact product, or wish to collaborate on AI and mobile systems, my inbox is open.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Primary Email Card with Copy Tool */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 hover:border-pastel-sage/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-pastel-sage/15 text-pastel-sage border border-pastel-sage/25">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-pastel-sage" />
                      <span className="text-pastel-sage">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-pastel-cream" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Verified Email
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold font-mono text-white hover:text-pastel-sage transition-colors break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Usually responds within 24 hours.
              </p>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-5 rounded-2xl glass-card border border-white/5 hover:border-pastel-peach/30 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-pastel-peach/15 text-pastel-peach border border-pastel-peach/25">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Direct Telephone</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold font-mono text-white hover:text-pastel-peach transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Call / SMS</span>
            </div>

            {/* Location & Timezone */}
            <div className="p-5 rounded-2xl glass-card border border-white/5 flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-pastel-lavender/15 text-pastel-lavender border border-pastel-lavender/25">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400">Location Base</div>
                <div className="text-sm font-semibold text-white">
                  {personalInfo.location}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-0.5">
                  India Standard Time (UTC+5:30)
                </div>
              </div>
            </div>

            {/* Social Network Tiles */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-white/5 hover:border-pastel-lavender/40 hover:bg-pastel-lavender/5 transition-all flex flex-col items-center text-center group"
              >
                <LinkedinIcon className="w-5 h-5 text-slate-400 group-hover:text-pastel-lavender transition-colors mb-1.5" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white">LinkedIn</span>
                <span className="text-[10px] font-mono text-slate-400">Connect ↗</span>
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-white/5 hover:border-pastel-sage/40 hover:bg-pastel-sage/5 transition-all flex flex-col items-center text-center group"
              >
                <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-pastel-sage transition-colors mb-1.5" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white">GitHub</span>
                <span className="text-[10px] font-mono text-slate-400">Follow ↗</span>
              </a>

              <a
                href={personalInfo.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-white/5 hover:border-pastel-peach/40 hover:bg-pastel-peach/5 transition-all flex flex-col items-center text-center group"
              >
                <TelegramIcon className="w-5 h-5 text-slate-400 group-hover:text-pastel-peach transition-colors mb-1.5" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white">Telegram</span>
                <span className="text-[10px] font-mono text-slate-400">Chat Bot ↗</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Interactive Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-3xl glass-card border border-white/10 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Send a Direct Dispatch
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fires a pre-populated message directly to me.abhijith18@gmail.com
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-pastel-sage/15 border border-pastel-sage/30 flex items-center justify-center text-pastel-sage">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-pastel-sage focus:ring-1 focus:ring-pastel-sage transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-pastel-sage focus:ring-1 focus:ring-pastel-sage transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer Role / Project Inquiry"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-pastel-sage focus:ring-1 focus:ring-pastel-sage transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Describe your requirements, team context, or how we might collaborate..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-pastel-sage focus:ring-1 focus:ring-pastel-sage transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-pastel-sage via-pastel-lavender to-pastel-peach text-[#0b0c11] shadow-xl shadow-pastel-sage/15 hover:shadow-pastel-sage/30 hover:opacity-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-4 h-4 text-[#0b0c11] group-hover:translate-x-1 transition-transform" />
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-pastel-sage/15 border border-pastel-sage/30 text-pastel-sage text-xs font-mono text-center flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Inquiry email triggered! Opening your email client.</span>
                  </motion.div>
                )}
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
