import { motion } from 'framer-motion';
import { personalInfo } from '@/data/profile';

const highlights = [
  { label: '经验', value: '5+ 年', icon: '⚡' },
  { label: '项目', value: '50+', icon: '🚀' },
  { label: '开源贡献', value: '200+', icon: '⭐' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/3 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />

      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-3">About</p>
          <h2 className="section-heading">关于我</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-noto-sc text-slate-300 text-base md:text-lg leading-relaxed mb-8">
              你好！我是{' '}
              <span className="text-neon-cyan font-semibold">{personalInfo.name}</span>，
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass-card p-4 text-center group hover:bg-glass-hover transition-all duration-500 hover:border-neon-cyan/20"
                >
                  <span className="text-2xl mb-2 block">{h.icon}</span>
                  <div className="font-orbitron text-lg md:text-xl font-bold text-neon-cyan">
                    {h.value}
                  </div>
                  <div className="font-rajdhani text-xs text-slate-500 tracking-wider mt-1">
                    {h.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
              <motion.div
                animate={{ rotateY: 360, rotateX: 15 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 preserve-3d"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-3xl border border-glass-border backdrop-blur-sm" />
                <div
                  className="absolute inset-4 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-2xl border border-neon-cyan/10"
                  style={{ transform: 'translateZ(20px)' }}
                />
              </motion.div>

              <motion.div
                animate={{ rotateY: -360, rotateX: -10 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 preserve-3d"
              >
                <div
                  className="absolute inset-0 bg-cyber-bg-tertiary/80 rounded-xl border border-neon-purple/20 flex items-center justify-center"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <span className="font-jetbrains-mono text-neon-cyan text-6xl md:text-7xl font-bold">
                    {'{ }'}
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-cyan/10 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-neon-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-4s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}