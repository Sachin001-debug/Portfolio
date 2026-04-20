import { useState } from 'react';
import text from '../assets/Sachin.png';
import { Menu, X, Download } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#blogs', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fade-in sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={text} alt="Sachin" className="w-[90px] h-14 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative transition-colors hover:text-[#00f5d4] ${
                activeSection === link.href.slice(1)
                  ? 'text-[#00f5d4]'
                  : 'text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          {/* Desktop CV Button */}
          <a 
            href="/Sachin-Kharel-Resume.pdf"
            download="Sachin-Kharel-Resume.pdf"
            className="hidden md:flex items-center gap-2 px-3 py-2 border border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4] hover:text-black rounded-3xl font-semibold transition-all"
          >
            <Download size={18} />
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050505]">
          <div className="flex flex-col px-6 py-8 gap-6 text-lg">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="py-2 text-white/80 hover:text-[#00f5d4] transition"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Download CV Button */}
            <a 
              href="/Sachin-Kharel-Resume.pdf"
              download="Sachin-Kharel-Resume.pdf"
              onClick={() => setIsMobileOpen(false)}
              className="mt-4 w-full flex items-center justify-center gap-2 py-4 border border-[#00f5d4] text-[#00f5d4] rounded-3xl font-semibold hover:bg-[#00f5d4] hover:text-black transition"
            >
              <Download size={18} />
              Download CV
            </a>

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;