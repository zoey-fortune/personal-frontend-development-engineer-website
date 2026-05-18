import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  char: string;
  font: string;
  color: string;
}

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ<>{}[]()/|&^%$#@';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const resizeRef = useRef<() => void>(() => {});
  const scrollRef = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    let scrollY = 0;
    let ticking = false;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeRef.current = resize;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    scrollRef.current = handleScroll;

    const particleCount = Math.min(50, Math.floor(window.innerWidth / 25));

    for (let i = 0; i < particleCount; i++) {
      const hue = Math.random() < 0.5 ? 185 + Math.random() * 20 : 270 + Math.random() * 30;
      const size = 10 + Math.random() * 14;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedY: 0.2 + Math.random() * 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        char: chars[Math.floor(Math.random() * chars.length)],
        font: `${size}px "JetBrains Mono", monospace`,
        color: `hsl(${hue}, 90%, 65%)`,
      });
    }

    let lastTime = 0;
    const animate = (timestamp: number) => {
      if (timestamp - lastTime < 32) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const parallaxFactor = scrollY * 0.015;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.005) * 0.15;

        if (p.y < -30) {
          p.y = canvas.height + 30;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -30) p.x = canvas.width + 30;
        if (p.x > canvas.width + 30) p.x = -30;

        ctx.globalAlpha = 0.08 + Math.random() * 0.04;
        ctx.font = p.font;
        ctx.fillStyle = p.color;
        ctx.fillText(p.char, p.x - parallaxFactor * p.speedX, p.y - parallaxFactor * p.speedY);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resizeRef.current);
    window.addEventListener('scroll', scrollRef.current, { passive: true });
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeRef.current);
      window.removeEventListener('scroll', scrollRef.current);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
}