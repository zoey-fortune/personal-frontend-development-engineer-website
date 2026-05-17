/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        "cyber-bg": {
          DEFAULT: "#050510",
          secondary: "#0a0a1f",
          tertiary: "#0f0f28",
        },
        neon: {
          cyan: "#00e5ff",
          purple: "#b44dff",
          pink: "#ff2d95",
        },
        glass: {
          bg: "rgba(255, 255, 255, 0.03)",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.06)",
        },
      },
      fontFamily: {
        orbitron: ['"Orbitron"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        rajdhani: ['"Rajdhani"', '"Arial Narrow"', '"Segoe UI"', 'sans-serif'],
        "noto-sc": ['"Noto Sans SC"', '"Microsoft YaHei"', '"PingFang SC"', '"Hiragino Sans GB"', 'sans-serif'],
        "jetbrains-mono": ['"JetBrains Mono"', '"Cascadia Code"', '"Fira Code"', '"Consolas"', 'monospace'],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "border-glow": "borderGlow 3s ease-in-out infinite alternate",
        "particle-drift": "particleDrift 20s linear infinite",
        "text-shimmer": "textShimmer 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 229, 255, 0.5)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-60px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(60px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.8)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        borderGlow: {
          from: { borderColor: "rgba(0, 229, 255, 0.3)" },
          to: { borderColor: "rgba(180, 77, 255, 0.6)" },
        },
        particleDrift: {
          from: { transform: "translate(0, 0)" },
          to: { transform: "translate(-50px, -50px)" },
        },
        textShimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 229, 255, 0.06), transparent)",
        "card-glow-cyan": "radial-gradient(ellipse at top left, rgba(0, 229, 255, 0.08), transparent 70%)",
        "card-glow-purple": "radial-gradient(ellipse at bottom right, rgba(180, 77, 255, 0.08), transparent 70%)",
      },
    },
  },
  plugins: [],
};