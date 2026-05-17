import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  opacity: number;
  char: string;
  size: number;
  hue: number;
}

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>{}[]()/\\|&^%$#@!~`';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const particleCount = Math.min(100, Math.floor(window.innerWidth / 15));

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedY: 0.3 + Math.random() * 0.8,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: 0.1 + Math.random() * 0.25,
        char: chars[Math.floor(Math.random() * chars.length)],
        size: 10 + Math.random() * 14,
        hue: Math.random() < 0.5 ? 185 + Math.random() * 20 : 270 + Math.random() * 30,
      });
    }

    const scrollY = { current: 0 };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const parallaxFactor = scrollY.current * 0.03;

      for (const p of particlesRef.current) {
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.005) * 0.2;

        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        const drawY = p.y - parallaxFactor * p.speedY;
        const drawX = p.x - parallaxFactor * p.speedX * 0.5;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.font = `${p.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `hsl(${p.hue}, 90%, 70%)`;
        ctx.fillText(p.char, drawX, drawY);
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}