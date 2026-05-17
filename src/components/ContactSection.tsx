import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Github, Linkedin, Twitter } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { personalInfo } from '@/data/profile';

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Twitter,
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-neon-cyan/[0.03] via-neon-purple/[0.02] to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-3">Contact</p>
          <h2 className="section-heading">联系我</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 text-center glow-border">
            <p className="font-noto-sc text-slate-300 text-lg mb-8">
              对项目感兴趣或者想聊聊天？随时联系我。
            </p>

            <div
              onClick={handleCopy}
              className="inline-flex items-center gap-3 px-6 py-3 mb-10 rounded-full border border-glass-border bg-white/[0.02] cursor-pointer hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300 group"
            >
              <span className="font-jetbrains-mono text-sm text-slate-300 group-hover:text-neon-cyan transition-colors">
                {personalInfo.email}
              </span>
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="text-slate-500 group-hover:text-neon-cyan transition-colors"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </motion.div>
            </div>

            {copied && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-jetbrains-mono text-xs text-neon-cyan -mt-6 mb-4"
              >
                已复制到剪贴板 ✓
              </motion.p>
            )}

            <div className="flex items-center justify-center gap-4">
              {personalInfo.socialLinks.map((link, i) => {
                const Icon = iconMap[link.icon] || Github;
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative p-3 rounded-xl border border-glass-border bg-white/[0.02] text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300 group"
                    aria-label={link.platform}
                  >
                    <Icon size={20} />
                    <motion.span
                      className="absolute inset-0 rounded-xl bg-neon-cyan/10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.3, opacity: 0.5 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}