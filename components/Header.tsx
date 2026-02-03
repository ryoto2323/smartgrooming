import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimized nav items for desktop to avoid overcrowding
  const desktopNavItems = [
    { label: 'CONCEPT', href: '#concept' },
    { label: 'FLOW', href: '#flow' },
    { label: 'VOICE', href: '#voice' },
    { label: 'MENU', href: '#menu' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'ACCESS', href: '#access' },
  ];

  // Full list for mobile menu
  const mobileNavItems = [
    { label: 'CONCEPT', href: '#concept' },
    { label: 'REASON', href: '#reasons' },
    { label: 'FLOW', href: '#flow' },
    { label: 'VOICE', href: '#voice' },
    { label: 'STAFF', href: '#staff' },
    { label: 'MENU', href: '#menu' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'ACCESS', href: '#access' },
  ];

  const RESERVATION_URL = "https://airrsv.net/demosite0000/calendar";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
        isScrolled 
          ? 'bg-luxury-black/90 backdrop-blur-md border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col group">
          <span className="font-display text-2xl tracking-widest text-white group-hover:text-luxury-gold transition-colors duration-300">
            SMART GROOMING
          </span>
          <span className={`text-[10px] tracking-[0.3em] uppercase text-luxury-muted transition-all duration-500 ${isScrolled ? 'opacity-0 h-0' : 'opacity-100'}`}>
            Minimalist Intelligence
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {desktopNavItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-[10px] xl:text-xs font-medium tracking-widest text-luxury-text hover:text-luxury-gold transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-luxury-gold text-luxury-black px-6 xl:px-8 py-3 rounded-sm text-xs font-bold tracking-widest hover:bg-luxury-goldLight"
          >
            RESERVE
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white hover:text-luxury-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-luxury-black z-40 flex flex-col justify-center items-center space-y-6 md:hidden overflow-y-auto py-10">
           <span className="absolute top-6 right-6 text-white/50 text-xs tracking-widest">MENU</span>
          {mobileNavItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl text-white hover:text-luxury-gold transition-colors tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-8 w-64 space-y-4">
            <a 
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-[#06C755] text-white py-4 rounded-sm font-bold tracking-widest"
            >
                LINE RESERVATION
            </a>
            <a 
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-luxury-gold text-luxury-black py-4 rounded-sm font-bold tracking-widest"
            >
                WEB RESERVATION
            </a>
          </div>
        </div>
      )}
    </header>
  );
};