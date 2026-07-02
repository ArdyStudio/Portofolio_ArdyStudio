import VideoAnimasi from '../assets/VideoAnimasi.mp4';

const stats = [
  { value: '100+', label: 'AI Experiments' },
  { value: '50+', label: 'Prompt Systems Built' },
  { value: '10+', label: 'Web Applications Deployed' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-black text-white px-5 sm:px-8 md:px-14 py-24 sm:py-32 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e8702a]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Bio */}
        <div className="flex flex-col gap-6">
          <span className="text-[#e8702a] text-sm font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Building the next generation of{' '}
            <span className="font-playfair italic text-[#e8702a]">intelligent</span>{' '}
            web experiences
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            I'm Ardy Andhika Haydar, an AI-Native Full-Stack Developer passionate about merging artificial intelligence with premium web development. I engineer production-grade applications that leverage cutting-edge AI models, prompt architectures, and modern frontend frameworks to deliver experiences that are both technically sophisticated and visually stunning.
          </p>
          <p className="text-white/60 text-base leading-relaxed">
            My workflow is built on continuous experimentation — iterating through AI experiments, refining prompt systems, and deploying real-world applications that push the boundaries of what's possible when code meets creativity.
          </p>

          {/* Academic Credential */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10">
            <div className="w-10 h-10 rounded-full bg-[#e8702a]/20 flex items-center justify-center">
              <span className="text-[#e8702a] text-lg">🎓</span>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">S1 Ilmu Komputer, Teknik Informatika</p>
              <p className="text-white/50 text-xs">Universitas Esa Unggul</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-[#e8702a]">{stat.value}</p>
                <p className="text-white/50 text-xs mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Video Showreel */}
        <div className="flex flex-col gap-5">
          <div className="relative rounded-2xl overflow-hidden bg-white/[0.04] backdrop-blur-md border border-white/10 p-3">
            {/* Corner Badge */}
            <div className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8702a]/20 border border-[#e8702a]/40">
              <span className="w-2 h-2 rounded-full bg-[#e8702a] animate-pulse" />
              <span className="text-[#e8702a] text-xs font-semibold uppercase tracking-wider">Engineering Reel</span>
            </div>

            {/* Video Player */}
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black">
              <video
                src={VideoAnimasi}
                controls
                className="w-full h-full object-cover"
                poster=""
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video Description */}
          <p className="text-white/40 text-sm leading-relaxed px-1">
            A curated visual compilation of engineering projects, AI-powered workflows, and production deployments — showcasing the intersection of technical precision and creative execution.
          </p>
        </div>
      </div>
    </section>
  );
}
