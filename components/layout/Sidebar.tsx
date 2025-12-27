import React from 'react';
import { Card } from '../ui/Card';
import { Mail, Linkedin, Instagram, MapPin, ShieldCheck, Diamond } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <div className="space-y-12 sticky top-32">
      {/* Concierge Hub */}
      <div className="bg-nish-surface border border-nish-gold/10 p-10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-nish-gold/5 blur-[80px] pointer-events-none"></div>
        
        <h3 className="text-[10px] font-sans font-bold text-nish-gold mb-8 tracking-[0.4em] border-b border-nish-border pb-6 flex items-center gap-3">
          CONCIERGE_HUB
        </h3>
        
        <div className="space-y-8 font-sans text-[11px]">
          <div>
            <p className="text-nish-grey uppercase tracking-[0.2em] mb-3 font-medium">Global Inquiries</p>
            <p className="font-serif text-xl italic text-nish-ivory hover:text-nish-gold transition-colors cursor-pointer select-all">
              concierge@nishkalya.luxury
            </p>
          </div>
          
          <div>
            <p className="text-nish-grey uppercase tracking-[0.2em] mb-4 font-medium">Our Presence</p>
            <div className="flex flex-col gap-4 text-nish-gold">
              <a 
                href="#" 
                className="hover:text-nish-ivory transition-all flex items-center justify-between group/link border-b border-nish-border pb-2"
              >
                <span className="flex items-center gap-3"><Instagram size={14} /> INSTAGRAM</span>
                <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[8px] tracking-widest">FOLLOW</span>
              </a>
              <a 
                href="#" 
                className="hover:text-nish-ivory transition-all flex items-center justify-between group/link border-b border-nish-border pb-2"
              >
                <span className="flex items-center gap-3"><Linkedin size={14} /> LINKEDIN</span>
                <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[8px] tracking-widest">CONNECT</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 text-nish-grey">
             <MapPin size={16} className="text-nish-gold" />
             <span className="italic">Mayfair, London // Ginza, Tokyo</span>
          </div>
        </div>
      </div>

      {/* Boutique Status */}
      <div className="bg-nish-bg/40 p-8 border border-nish-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[9px] font-sans font-bold text-nish-grey uppercase tracking-[0.3em]">Artisan_Availability</h3>
          <ShieldCheck size={16} className="text-nish-gold" />
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center font-sans text-[10px]">
            <span className="text-nish-grey uppercase">Master Goldsmiths</span>
            <span className="text-nish-gold">BUSY_CURATING</span>
          </div>
          <div className="w-full bg-nish-border h-px">
             <div className="bg-nish-gold h-full w-[80%]"></div>
          </div>
          
          <div className="flex justify-between items-center font-sans text-[10px] pt-2">
            <span className="text-nish-grey uppercase">Gemstone Inventory</span>
            <span className="text-nish-ivory">RARE_ONLY</span>
          </div>
        </div>
        
        <button className="w-full mt-10 py-4 bg-nish-surface border border-nish-border text-[9px] font-sans font-bold text-nish-gold hover:text-nish-ivory hover:border-nish-gold transition-all uppercase tracking-[0.3em]">
          BOOK PRIVATE VIEWING
        </button>
      </div>

      {/* Authenticity Badge */}
      <div className="flex items-center gap-4 p-6 border border-nish-gold/10 bg-nish-gold/5">
        <Diamond size={24} className="text-nish-gold" strokeWidth={1} />
        <div className="font-sans">
           <div className="text-[10px] font-bold text-nish-ivory uppercase tracking-widest">Certified Origin</div>
           <div className="text-[8px] text-nish-grey uppercase tracking-tighter">100% Conflict-Free Sourcing</div>
        </div>
      </div>
    </div>
  );
};