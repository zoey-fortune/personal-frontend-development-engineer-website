import { useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
} from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { type Project, projects } from '@/data/profile';
import ProjectModal from '@/components/ProjectModal';

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className="relative group cursor-pointer"
        style={{ perspective: 1000 }}
      >
        <motion.div
          style={
            {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            } as MotionStyle
          }
        >
          <div className="glass-card p-6 h-full flex flex-col transition-all duration-500 group-hover:border-neon-cyan/30 group-hover:bg-glass-hover">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(0, 229, 255, 0.04), transparent 70%)',
              }}
            />

            <div className="flex items-center justify-between mb-4 relative z-10">
              <h3 className="font-rajdhani text-xl font-bold text-white tracking-wide group-hover:text-neon-cyan transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                    aria-label="External link"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="font-noto-sc text-sm text-slate-400 leading-relaxed mb-5 flex-1 relative z-10">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 relative z-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full font-jetbrains-mono text-[10px] tracking-wide border border-glass-border text-slate-400 bg-white/[0.02] transition-all duration-300 group-hover:border-neon-cyan/20 group-hover:text-neon-cyan/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-cyan/2 rounded-full blur-[180px] translate-x-1/4 translate-y-1/4" />

      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-3">Projects</p>
          <h2 className="section-heading">精选项目</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}