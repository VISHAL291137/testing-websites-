import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X, Diamond } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Heritage', href: '#/about' },
    { name: 'Collections', href: '#/projects' },
    { name: 'Bespoke', href: '#/highlights' },
    { name: 'The Gallery', href: '#/gallery' },
    { name: 'The Journal', href: '#/blog' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-nish-bg/90 backdrop-blur-xl border-b border-nish-border py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Jewelry Logo */}
          <a href="#/" className="flex items-center gap-4 group">
             <div className="w-12 h-12 bg-nish-surface rounded-full flex items-center justify-center text-nish-gold border border-nish-gold/30 transition-all group-hover:scale-110 shadow-xl">
               <Diamond size={28} strokeWidth={1.5} />
             </div>
             <div>
               <h1 className="font-serif text-2xl font-normal tracking-[0.1em] text-nish-ivory">NISHKALYA</h1>
               <p className="text-[8px] tracking-[0.4em] text-nish-gold uppercase font-sans">Fine Artisans</p>
             </div>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8">
              {navLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="font-sans text-[10px] font-medium text-nish-grey hover:text-nish-gold transition-colors uppercase tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button variant="outline" className="!py-2 !px-6 !text-[9px]">MY ACCOUNT</Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-nish-gold p-2">
               {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[110] bg-nish-bg flex flex-col p-12 lg:hidden animate-in fade-in duration-500">
           <div className="flex justify-between items-center mb-24">
              <span className="font-serif text-3xl italic">NISHKALYA</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={32} className="text-nish-gold" />
              </button>
           </div>
           
           <div className="flex flex-col gap-10 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)} 
                className="font-serif text-4xl text-nish-grey hover:text-nish-gold transition-colors italic"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" fullWidth className="mt-16 py-6">SHOP COLLECTIONS</Button>
           </div>
        </div>
      )}
    </>
  );
};