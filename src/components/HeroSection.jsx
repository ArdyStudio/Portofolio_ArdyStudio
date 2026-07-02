import { useEffect, useRef, useCallback } from 'react';
import { Download } from 'lucide-react';
import Gambar1 from '../assets/Gambar1.png';
import Gambar2 from '../assets/Gambar2.png';

const SPOTLIGHT_R = 260;

export default function HeroSection() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const revealRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    const canvas = document.createElement('canvas');
    canvasRef.current = canvas;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const ctx = canvas.getContext('2d');

    const animate = () => {
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.1;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.1;

      const { x, y } = smoothRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_R);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.4, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.6, 'rgba(255,255,255,0.75)');
      gradient.addColorStop(0.75, 'rgba(255,255,255,0.4)');
      gradient.addColorStop(0.88, 'rgba(255,255,255,0.12)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (revealRef.current) {
        const dataUrl = canvas.toDataURL();
        revealRef.current.style.maskImage = `url(${dataUrl})`;
        revealRef.current.style.WebkitMaskImage = `url(${dataUrl})`;
        revealRef.current.style.maskSize = 'cover';
        revealRef.current.style.WebkitMaskSize = 'cover';
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return (
    <section
      className="relative w-full overflow-hidden h-screen bg-black"
      style={{ height: '100dvh' }}
    >
      {/* Base Image Layer (z-10) */}
      <div
        className="absolute inset-0 z-10 bg-center bg-cover bg-no-repeat hero-zoom"
        style={{ backgroundImage: `url(${Gambar1})` }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

      {/* Reveal Layer (z-30) */}
      <div
        ref={revealRef}
        className="absolute inset-0 z-30 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${Gambar2})`,
          maskImage: 'none',
          WebkitMaskImage: 'none',
        }}
      />

      {/* Heading Text Overlay (z-50) - Left-aligned to not block center image */}
      <div className="absolute z-50 pointer-events-none top-1/2 -translate-y-1/2 left-6 sm:left-10 md:left-14 flex flex-col items-start text-left max-w-[85%] sm:max-w-[55%] md:max-w-[45%]">
        <h1
          className="font-playfair italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl hero-anim hero-reveal drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          style={{ animationDelay: '0.25s' }}
        >
          Designing Future
        </h1>
        <h1
          className="font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 hero-anim hero-reveal drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          style={{ animationDelay: '0.42s' }}
        >
          with <span className="text-[#e8702a]">AI</span> & Code
        </h1>
        <div className="mt-5 w-12 h-[2px] bg-[#e8702a] hero-anim hero-reveal" style={{ animationDelay: '0.55s' }} />
      </div>

      {/* Bottom-Left Introduction Block (z-50) */}
      <div
        className="hidden sm:block absolute z-50 bottom-14 left-10 md:left-14 max-w-[300px] hero-anim hero-fade"
        style={{ animationDelay: '0.7s' }}
      >
        <p className="text-white/70 text-xs leading-relaxed">
          <span className="text-white font-semibold">Ardy Andhika Haydar</span> — AI-Native Full-Stack Developer | Leveraging AI to Build Premium Web Experiences, Fast | Prompt Engineering.
        </p>
      </div>

      {/* Bottom-Right Interactivity Block (z-50) */}
      <div
        className="absolute z-50 bottom-8 sm:bottom-14 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-3 sm:gap-4 hero-anim hero-fade"
        style={{ animationDelay: '0.85s' }}
      >
        <p className="text-white/50 text-xs leading-relaxed">
          Explore technical competencies, prompt libraries, and interactive web tools engineered to bridge the gap between AI and production code.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#live-works"
            className="bg-[#e8702a] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d4631f] transition-all"
          >
            Live Web Works
          </a>
          <a
            href="/CV-Resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/20 bg-white/[0.04] backdrop-blur-md text-white hover:bg-white/10 transition-all"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
