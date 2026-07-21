import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo-ardystudio.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Live Web Works', href: '#live-works' },
  { label: 'My Framework', href: '#framework' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // Deteksi posisi scroll untuk memunculkan/menghilangkan navbar
  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px ke bawah, navbar muncul. Jika di atas, navbar disembunyikan.
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setMobileOpen(false); // Tutup menu mobile jika kembali ke atas
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-500 ease-in-out ${
        showNavbar 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-5xl px-5 py-2.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-black/20 transition-all duration-300">
        {/* Left - Logo & Text */}
        <a href="#" className="flex items-center gap-0.5 group">
          <img 
            src={logoImage} 
            alt="ArdyStudio Logo" 
            className="h-7 w-auto object-contain"
          />
          <span className="text-white text-xl font-playfair italic">ArdyStudio</span>
        </a>

        {/* Center - Desktop Nav Pill */}
        <div className="hidden md:flex items-center gap-1 px-1 py-1 rounded-full border border-white/10 bg-white/[0.03]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-all hover:bg-white/10"
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
          className="hidden md:inline-block bg-white/90 text-gray-900 text-xs font-semibold px-5 py-2 rounded-full hover:bg-white transition-all shadow-sm"
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
          <div className="absolute top-full left-0 right-0 mt-3 mx-4 md:hidden bg-black/85 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-white text-base font-medium py-1 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6285880957196"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full text-center hover:bg-gray-100 transition-all"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}