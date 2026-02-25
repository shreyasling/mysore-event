import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-6 py-3' 
              : 'bg-transparent px-2 py-2'
          }`}
        >
          <div className="flex-shrink-0">
            <a href="#" className={`font-serif text-2xl font-semibold tracking-wide transition-colors duration-300 ${isScrolled ? 'text-ink' : 'text-white'}`}>
              Aanya Sowmyaa
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                  isScrolled ? 'text-ink/80 hover:text-ink' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2 border rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                isScrolled 
                  ? 'border-ink/20 text-ink hover:bg-ink hover:text-white' 
                  : 'border-white/30 text-white hover:bg-white hover:text-ink'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-ink' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Glassmorphism */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-3xl overflow-hidden py-4">
              <div className="flex flex-col items-center space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-3 text-base uppercase tracking-widest text-ink/80 hover:text-ink hover:bg-white/40 rounded-full transition-all w-4/5 text-center"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-3 bg-ink text-white rounded-full text-sm uppercase tracking-widest hover:bg-ink/90 transition-all"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
