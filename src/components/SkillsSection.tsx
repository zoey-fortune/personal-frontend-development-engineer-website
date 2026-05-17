import { motion } from 'framer-motion';
import { skillCategories } from '@/data/profile';

const skillIcons: Record<string, string> = {
  react: '⚛️',
  vue: '💚',
  next: '▲',
  typescript: '🔷',
  tailwind: '🌊',
  css: '🎨',
  framer: '🌀',
  figma: '🖌️',
  vite: '⚡',
  webpack: '📦',
  git: '🔀',
  docker: '🐳',
  node: '💚',
  jest: '🧪',
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-cyan/2 rounded-full blur-[150px] -translate-x-1/2" />

      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-3">Skills</p>
          <h2 className="section-heading">技术栈</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glass-card p-6 group hover:bg-glass-hover transition-all duration-500"
            >
              <h3 className="font-rajdhani text-xl font-bold text-white tracking-wider mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-glow-pulse" />
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2 font-jetbrains-mono text-sm text-slate-400">
                        <motion.span
                          whileHover={{ scale: 1.3, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className="inline-block text-base"
                        >
                          {skillIcons[skill.icon] || '◆'}
                        </motion.span>
                        {skill.name}
                      </span>
                      <span className="font-jetbrains-mono text-xs text-neon-cyan/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + skillIndex * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            'linear-gradient(90deg, #00e5ff 0%, #b44dff 100%)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}