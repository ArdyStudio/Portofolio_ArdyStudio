import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Research',
    desc: 'Deep-dive into requirements, user personas, and technical constraints. Map the problem space before writing a single line of code.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Architecture & Design',
    desc: 'Define system architecture, component hierarchy, and AI integration points. Prototype the data flow and UI structure.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Build & Iterate',
    desc: 'Rapid development sprints with AI-assisted coding, continuous testing, and iterative refinement of every module.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Deploy & Optimize',
    desc: 'Production deployment with CI/CD pipelines, performance monitoring, and post-launch optimization cycles.',
  },
];

export default function FrameworkSection() {
  return (
    <section id="framework" className="relative bg-[#050505] text-white px-5 sm:px-8 md:px-14 py-24 sm:py-32">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#e8702a]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Description */}
          <div className="flex flex-col gap-6">
            <span className="text-[#e8702a] text-sm font-semibold uppercase tracking-widest">My Framework</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Engineering methodology for{' '}
              <span className="font-playfair italic text-[#e8702a]">AI-native</span>{' '}
              development
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              A systematic, four-phase approach to building production-grade applications. Each phase integrates AI tooling, rapid prototyping, and rigorous quality checks — ensuring every deliverable meets the highest standards of performance and design.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              This methodology has been refined through 100+ AI experiments, 50+ prompt systems, and dozens of production deployments. It's designed for speed without sacrificing quality.
            </p>

            {/* Methodology tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {['Agile Sprints', 'AI-First', 'Test-Driven', 'CI/CD'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.06] border border-white/10 text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Vertical Steps */}
          <div className="flex flex-col gap-0">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative flex gap-5 pb-10 last:pb-0">
                  {/* Vertical Line */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-[19px] top-12 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" />
                  )}

                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e8702a]/10 border border-[#e8702a]/30 flex items-center justify-center">
                    <Icon size={18} className="text-[#e8702a]" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[#e8702a]/50 text-xs font-mono">{step.step}</span>
                      <h3 className="text-white font-semibold text-base">{step.title}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
