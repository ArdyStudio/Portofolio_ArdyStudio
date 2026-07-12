import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Ai-Chi Studio',
    desc: 'Premium AI-powered clothing & fashion brand storefront with dynamic product catalog, curated collections, and an immersive shopping experience.',
    tech: 'React · Vercel · AI Design',
    link: 'https://ai-chi-clothing.vercel.app/',
  },
  {
    title: 'Eternal Atelier',
    desc: 'Eternal Atelier is an immersive digital gallery blending old money aesthetics with refined typography to showcase timeless art masterpieces.',
    tech: 'React · Vite · Typescript · Vercel · Tailwind CSS · Motion',
    link: 'https://eternal-atelier.vercel.app/',
  },
  {
    title: 'Ai-Chi Photobox',
    desc: 'Interactive AI-powered digital photobox experience featuring live filters, instant capture processing, and shareable photo strip outputs.',
    tech: 'React · AI Filters · Vercel',
    link: 'https://ai-chi-photobox.vercel.app/',
  },
  {
    title: 'ArdyStudio Web Dev',
    desc: 'ArdyStudio is a professional service platform for Fullstack Web Development. We specialize in delivering AI-Native solutions, ranging from high-converting landing pages to scalable SaaS products.',
    tech: 'AI Prompting · AI-Native Developer · Next.js & React · Tailwind CSS · Three.js · Vercel',
    link: 'https://web-ardy-studio.vercel.app/',
  },
  {
    title: 'NFS BMW M3 GTR',
    desc: 'A high-performance, interactive tribute website for the iconic BMW M3 GTR from Need for Speed: Most Wanted (2005). It features a cinematic experience with smooth scroll navigation and a clean, modern aesthetic.',
    tech: 'React.js · Vite · Tailwind CSS · React Router · Lucid React · Vercel',
    link: 'https://bmw-m3-gtr-nfs.vercel.app/',
  },
  {
    title: 'PGN MCS Bitung',
    desc: 'Enterprise-grade web application for PGN MCS Bitung — managing operational data, reporting dashboards, and internal management workflows.',
    tech: 'Enterprise Web · Laravel · Vercel',
    link: 'https://web-pgn.vercel.app/',
  },
];

export default function LiveWorksSection() {
  return (
    <section id="live-works" className="relative bg-black text-white px-5 sm:px-8 md:px-14 py-24 sm:py-32">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#e8702a]/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4">
          <span className="text-[#e8702a] text-sm font-semibold uppercase tracking-widest">Live Application Deployments</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Click to instantly launch{' '}
            <span className="font-playfair italic text-[#e8702a]">live projects</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            A premium showcase of 6 functional web experiences built and deployed to production servers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-[#e8702a]/60 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 flex flex-col"
            >
              {/* ExternalLink Icon — animated upward on hover */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                <ExternalLink size={16} className="text-[#e8702a]" />
              </div>

              {/* Project number */}
              <span className="text-[#e8702a]/40 text-xs font-mono mb-4">
                0{index + 1}
              </span>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-3 leading-snug group-hover:text-[#e8702a] transition-colors">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <span className="text-white/30 text-xs font-mono">{project.tech}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
