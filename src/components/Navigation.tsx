import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

const LINKS = [
  { id: 'horizons', label: 'Horizons' },
  { id: 'services', label: 'Services' },
  { id: 'approach', label: 'Approach' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  // Track viewport width so the hamburger only renders on mobile sizes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false);
    }
  }, [isDesktop]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navHeight = (navRef.current?.getBoundingClientRect().height ?? 80) + 8;
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  const handleScroll = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    if (!isDesktop) {
      setIsMenuOpen(false);
      setTimeout(() => {
        requestAnimationFrame(() => scrollToSection(sectionId));
      }, 220);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <motion.nav ref={navRef} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}images/HozThink_Logo.png`} alt="HozThink Logo" className="h-10 w-auto" />
            <span className="text-2xl text-white">
              HozThink<span className="text-blue-500">!</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} onClick={(event) => handleScroll(event, id)} className="text-slate-300 hover:text-blue-400 transition-colors">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={(event) => handleScroll(event, 'contact')} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <button onClick={toggleMenu} className="text-white p-2 hover:bg-slate-800 rounded-lg transition-colors" aria-label="Toggle menu">
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden overflow-hidden">
              <div className="flex flex-col gap-4 pt-4 pb-2">
                {LINKS.map(({ id, label }) => (
                  <a key={id} href={`#${id}`} onClick={(event) => handleScroll(event, id)} className="text-slate-300 hover:text-blue-400 transition-colors py-2 px-4 hover:bg-slate-800/50 rounded-lg">
                    {label}
                  </a>
                ))}
                <a href="#contact" onClick={(event) => handleScroll(event, 'contact')} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors text-center">
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
