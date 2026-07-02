import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/ardy__10/', color: 'hover:text-pink-400' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/6285880957196', color: 'hover:text-green-400' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ardy-andhika-haydar-4370a02b7/', color: 'hover:text-blue-400' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/ArdyStudio', color: 'hover:text-white' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-black text-white px-5 sm:px-8 md:px-14 py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#e8702a]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="text-[#e8702a] text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Let's build something{' '}
          <span className="font-playfair italic text-[#e8702a]">extraordinary</span>
        </h2>
        <p className="text-white/50 text-base max-w-xl leading-relaxed">
          Whether you need a full-stack application, an AI integration, or a premium web experience — I'm ready to engineer the solution. Let's connect.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="https://wa.me/6285880957196"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8702a] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#d4631f] transition-all"
          >
            <MessageCircle size={18} />
            Start a Conversation
            <ArrowUpRight size={16} />
          </a>
          <a
            href="mailto:ardyhaydar.work@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border border-white/20 bg-white/[0.04] backdrop-blur-md text-white hover:bg-white/10 transition-all"
          >
            <Mail size={18} />
            Send an Email
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 mt-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white/40 ${social.color} transition-colors duration-200`}
                aria-label={social.label}
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
