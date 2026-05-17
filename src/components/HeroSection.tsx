import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '@/data/profile';

const roles = ['React 开发者', 'UI/UX 热爱者', '开源贡献者', '创意工程师'];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: '-3s' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          variants={itemVariants}
          className="font-jetbrains-mono text-neon-cyan/70 text-sm md:text-base tracking-[0.4em] mb-6"
        >
          {'> Hello, World!_'}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
        >
          <span className="text-white">{personalInfo.name.split(' ')[0]}</span>
          <span className="text-neon-cyan neon-text-cyan"> {personalInfo.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-6 h-10 md:h-12 flex items-center justify-center"
        >
          <span className="font-rajdhani text-xl md:text-3xl font-medium text-slate-300">
            {personalInfo.title}
          </span>
          <span className="mx-3 text-neon-purple text-2xl">·</span>
          <span className="font-jetbrains-mono text-lg md:text-xl text-neon-cyan">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-0.5 h-5 md:h-6 bg-neon-cyan ml-0.5 align-middle"
            />
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-noto-sc text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative px-8 py-3 rounded-full font-rajdhani text-lg font-bold tracking-wider text-cyber-bg bg-neon-cyan overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
          >
            <span className="relative z-10">查看作品</span>
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-rajdhani text-lg font-bold tracking-wider text-neon-cyan border border-neon-cyan/40 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
          >
            联系我
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-jetbrains-mono text-xs text-slate-600 tracking-widest">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} className="text-neon-cyan/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}