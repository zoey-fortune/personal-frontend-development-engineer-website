import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, User, Sparkles, Cpu, AlertTriangle, Trophy } from 'lucide-react';
import type { Project } from '@/data/profile';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = 'hidden';

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative glass-card w-full max-w-3xl max-h-[85vh] overflow-y-auto z-10 p-8 md:p-10 border-glass-border"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-white hover:bg-white/10 transition-all duration-200 z-20"
              aria-label="关闭"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {project.role && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan font-jetbrains-mono text-xs">
                    <User size={12} />
                    {project.role}
                  </span>
                )}
                {project.timeline && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple font-jetbrains-mono text-xs">
                    <Calendar size={12} />
                    {project.timeline}
                  </span>
                )}
              </div>

              <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white tracking-tight neon-text-cyan">
                {project.title}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full font-jetbrains-mono text-[10px] tracking-wide border border-glass-border text-neon-cyan/70 bg-neon-cyan/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.overview && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 font-rajdhani text-lg font-bold text-white tracking-wider mb-2">
                  <Sparkles size={16} className="text-neon-cyan" />
                  项目概述
                </h3>
                <p className="font-noto-sc text-sm text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 font-rajdhani text-lg font-bold text-white tracking-wider mb-3">
                  <Cpu size={16} className="text-neon-cyan" />
                  核心功能
                </h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feat, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-2 font-noto-sc text-sm text-slate-400"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-cyan/60 shrink-0" />
                      {feat}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {project.techArchitecture && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 font-rajdhani text-lg font-bold text-white tracking-wider mb-2">
                  <Cpu size={16} className="text-neon-purple" />
                  技术架构
                </h3>
                <div className="glass-card p-4 bg-white/[0.02]">
                  <p className="font-noto-sc text-sm text-slate-400 leading-relaxed">
                    {project.techArchitecture}
                  </p>
                </div>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 font-rajdhani text-lg font-bold text-white tracking-wider mb-3">
                  <AlertTriangle size={16} className="text-neon-pink" />
                  技术挑战
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex items-start gap-2 font-noto-sc text-sm text-slate-400"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-pink/60 shrink-0" />
                      {challenge}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {project.results && project.results.length > 0 && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 font-rajdhani text-lg font-bold text-white tracking-wider mb-3">
                  <Trophy size={16} className="text-neon-cyan" />
                  项目成果
                </h3>
                <ul className="space-y-2">
                  {project.results.map((result, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="flex items-start gap-2 font-noto-sc text-sm text-slate-400"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-cyan/60 shrink-0" />
                      {result}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center gap-3 pt-4 border-t border-glass-border">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-rajdhani text-sm font-bold tracking-wider bg-neon-cyan text-cyber-bg hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-300"
                >
                  <ExternalLink size={15} />
                  访问项目
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-rajdhani text-sm font-bold tracking-wider border border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple/50 transition-all duration-300"
                >
                  <Github size={15} />
                  查看源码
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}