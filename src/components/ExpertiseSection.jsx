import { Code2, Bot, Cpu, Box, Smartphone, ExternalLink } from 'lucide-react';

const expertiseCards = [
  {
    icon: Code2,
    title: 'Frontend & Fullstack Engineering',
    project: 'KasirKu',
    desc: 'Point-of-sale system with full CRUD operations, role-based access, and clean transactional flows built end-to-end.',
    pill: 'Laravel · Herd · TablePlus',
  },
  {
    icon: Bot,
    title: 'AI-Native Web Dev',
    project: 'I-Flex Web Apps',
    desc: 'AI-native web platform powered by a Laravel backend, Gemini handling intelligent logic, and Claude driving the frontend experience.',
    pill: 'Laravel · Gemini · Claude',
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    project: 'Facemask Detector & Predictive Maintenance',
    desc: 'Real-world inference systems — computer vision for mask detection and ML pipelines for industrial predictive maintenance analytics.',
    pill: 'TensorFlow · OpenCV · Scikit-Learn',
  },
  {
    icon: Box,
    title: 'Augmented Reality',
    project: 'AR Animal Cell',
    desc: 'Immersive AR educational experience that renders interactive 3D animal cell models into the physical world via marker tracking.',
    pill: 'Unity3D · Vuforia SDK · AR',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    project: 'ResQ',
    desc: 'Cross-platform emergency response mobile application with real-time location tracking, powered by a high-performance Go backend.',
    pill: 'Flutter · Dart · Go/Golang',
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="relative bg-[#050505] text-white px-5 sm:px-8 md:px-14 py-24 sm:py-32">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#e8702a]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4">
          <span className="text-[#e8702a] text-sm font-semibold uppercase tracking-widest">Core Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Technical competencies engineered for{' '}
            <span className="font-playfair italic text-[#e8702a]">production</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            A comprehensive skill matrix spanning fullstack engineering, AI integration, augmented reality, and mobile development — each backed by real shipped projects.
          </p>
        </div>

        {/* Cards Grid — 5 cards: 3 top row + 2 bottom row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertiseCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative p-6 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-[#e8702a]/40 transition-all duration-300 hover:-translate-y-1 cursor-default flex flex-col"
              >
                {/* ExternalLink indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={14} className="text-white/40" />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#e8702a]/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#e8702a]" />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-base mb-1 leading-snug">{card.title}</h3>
                <p className="text-[#e8702a]/70 text-xs font-mono mb-3">{card.project}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">{card.desc}</p>

                {/* Pill */}
                <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-white/[0.06] border border-white/10 text-white/60 self-start">
                  {card.pill}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
