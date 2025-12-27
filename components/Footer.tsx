import React from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nish-surface border-t border-nish-border py-16 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Cpu size={24} className="text-nish-kali" />
            <h2 className="font-mono text-2xl font-bold tracking-tighter text-white">NISHKALYA</h2>
          </div>
          <p className="font-mono text-nish-grey text-[10px] leading-relaxed max-w-xs uppercase tracking-widest">
            Selection. Solution. Deployment. <br/>
            Peak performance digital engineering.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-nish-kali tracking-[0.5em] uppercase font-bold">Systems</h3>
          <div className="flex flex-col gap-2">
             <a 
              href="https://www.linkedin.com/in/vishal-kumar291137/" 
              target="_blank" 
              className="flex items-center gap-2 text-nish-grey hover:text-white transition-all text-xs font-mono group"
            >
              LINKEDIN_INT <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100" />
            </a>
            <a 
              href="https://github.com/VISHAL291137" 
              target="_blank" 
              className="flex items-center gap-2 text-nish-grey hover:text-white transition-all text-xs font-mono group"
            >
              GITHUB_REP <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100" />
            </a>
            <a href="#" className="flex items-center gap-2 text-nish-grey hover:text-white transition-all text-xs font-mono group">
              CONTACT_HUB <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Status */}
        <div className="space-y-4">
           <h3 className="font-mono text-xs text-nish-kali tracking-[0.5em] uppercase font-bold">Status</h3>
           <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-nish-neon rounded-full animate-pulse"></div>
             <p className="font-mono text-nish-grey text-[10px] uppercase">All Systems Nominal</p>
           </div>
           <p className="font-mono text-nish-grey text-[10px] uppercase opacity-50">Local Time: {new Date().toLocaleTimeString()}</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-nish-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-nish-grey uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Vishal Kumar // Selection Agency.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer transition-colors">Security_Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms_Of_Usage</span>
        </div>
      </div>
    </footer>
  );
};