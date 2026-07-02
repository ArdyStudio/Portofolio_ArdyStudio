import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Live Web Works', href: '#live-works' },
  { label: 'My Framework', href: '#framework' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 bg-transparent">
      {/* Left - Logo */}
      <a href="#" className="flex items-center gap-2.5 group">
        <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
        </svg>
        <span className="text-white text-2xl font-playfair italic">ArdyStudio</span>
      </a>

      {/* Center - Desktop Nav Pill */}
      <div className="hidden md:flex items-center gap-1 px-1 py-1 rounded-full border border-white/10 bg-transparent">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white/60 hover:text-white text-xs font-medium px-3 py-1.5 rounded-full transition-all hover:bg-white/10"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right - Hire Me Button (Desktop) */}
      <a
        href="https://wa.me/6285880957196"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-block bg-white/90 text-gray-900 text-xs font-semibold px-5 py-2 rounded-full hover:bg-white transition-all backdrop-blur-sm"
      >
        Hire Me
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white text-lg font-medium py-2 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6285880957196"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-full text-center hover:bg-gray-100 transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
