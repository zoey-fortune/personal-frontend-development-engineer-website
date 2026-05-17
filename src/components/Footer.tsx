import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 border-t border-glass-border">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-jetbrains-mono text-xs text-slate-600 tracking-wider">
          &copy; {new Date().getFullYear()} DevFolio. Built with React & Tailwind CSS.
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-white/[0.02] text-slate-500 hover:text-neon-cyan hover:border-neon-cyan/20 hover:bg-neon-cyan/5 transition-all duration-300 font-rajdhani text-sm tracking-wider"
        >
          <ArrowUp size={14} />
          <span>回到顶部</span>
        </motion.button>
      </div>
    </footer>
  );
}