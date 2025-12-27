import React from 'react';
import { Button } from '../ui/Button';
import { Gem, Sparkles, Globe, MapPin, Award, History } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div id="about" className="space-y-24 scroll-mt-32">
      
      {/* Heritage Introduction */}
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8 animate-in slide-in-from-left duration-1000">
          <div className="flex items-center gap-4 text-nish-gold mb-4">
             <History size={24} />
             <span className="font-sans text-[10px] tracking-[0.5em] uppercase font-bold">The Heritage</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-nish-ivory italic leading-tight">
            A Century of <span className="text-nish-gold">Exceptional</span> Craftsmanship.
          </h2>
          <p className="text-xl text-nish-ivory/80 font-serif leading-relaxed italic">
            Led by the visionary artistry of <span className="text-nish-gold-light border-b border-nish-gold/20">Vishal Kumar</span>, Nishkalya represents the pinnacle of handcrafted excellence.
          </p>
          <p className="text-nish-grey font-sans text-sm leading-loose tracking-wide font-light">
            Founded on the principles of timeless beauty and ethical sourcing, our atelier specializes in the curation of rare gemstones and the architectural design of bespoke signature pieces. Every creation is a story of patience, skill, and unparalleled devotion to detail.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-6">
             <a href="#/projects">
                <Button variant="primary">The Collections</Button>
             </a>
             <Button variant="outline">Our Atelier</Button>
          </div>
        </div>
        
        {/* Artistic Visual */}
        <div className="w-full md:w-[450px] aspect-[4/5] bg-nish-surface border border-nish-border p-3 rounded-none shadow-2xl relative group">
           <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000" 
              alt="Vishal Kumar Artisanship" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
           />
           <div className="absolute -bottom-6 -left-6 bg-nish-bg border border-nish-gold/30 p-8 shadow-2xl">
              <p className="font-serif text-3xl italic text-nish-gold">Est. 1924</p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-nish-grey mt-2">Certified Master Jewelers</p>
           </div>
        </div>
      </div>

      {/* Expertise Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { icon: Gem, title: 'Bespoke Design', desc: 'Collaborative visionary process to translate your personal journey into a wearable masterpiece.' },
           { icon: Award, title: 'Rare Curation', desc: 'Only the most exceptional, ethically sourced diamonds and colored gemstones pass our inspection.' },
           { icon: Sparkles, title: 'Hand-Finished', desc: 'Preserving ancestral goldsmithing techniques while integrating modern precision engineering.' }
         ].map((skill, i) => (
           <div key={i} className="bg-nish-surface p-12 text-center border border-nish-border hover:border-nish-gold/30 transition-all duration-500 group">
              <div className="w-16 h-16 mx-auto bg-nish-bg rounded-full flex items-center justify-center mb-10 border border-nish-gold/10 group-hover:border-nish-gold transition-all">
                 <skill.icon size={28} className="text-nish-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-nish-ivory mb-6 italic">{skill.title}</h3>
              <p className="text-xs text-nish-grey leading-relaxed font-sans font-light tracking-wide">
                 {skill.desc}
              </p>
           </div>
         ))}
      </div>
    </div>
  );
};