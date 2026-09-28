import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'What We Do', id: 'capabilities' },
    { label: 'About Us', id: 'about' },
    { label: 'Distribution Network', id: 'network' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800 py-3'
            : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Name */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
              aria-label="Excel United International Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 aspect-square rounded-xl overflow-hidden shrink-0 shadow-xs group-hover:scale-105 transition-transform bg-[#F6EB14] flex items-center justify-center p-0.5">
                <img
                  src={COMPANY_INFO.logoSquareUrl}
                  alt="Excel United International Logo"
                  className="w-full h-full object-contain select-none"
                />
              </div>

              <span className="text-sm sm:text-base lg:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-tight">
                Excel United International
              </span>
            </button>

            {/* Clean Typographic Navigation Links (Zero-Pill Compliance) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-3 py-2 text-xs lg:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-rose-600 dark:text-rose-400 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-rose-600 dark:bg-rose-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Theme Toggle & Mobile Trigger */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-18 left-4 right-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-2 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 font-bold'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
