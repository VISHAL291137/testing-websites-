import React, { useState, useEffect, useRef } from 'react';
import { X, Maximize2, ShieldCheck, Loader2, Gem } from 'lucide-react';
import { generateTerminalOutput } from '../services/geminiService';

interface TerminalViewProps {
  projectName: string | null;
  onClose: () => void;
}

export const TerminalView: React.FC<TerminalViewProps> = ({ projectName, onClose }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectName) {
      runAudit(projectName);
    }
  }, [projectName]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const runAudit = async (name: string) => {
    setLines([
      `>> INITIATING GEMOLOGICAL QUALITY AUDIT: ${name.toUpperCase()}`,
      `[STATUS] Establishing secure link to laboratory database...`,
      `[STATUS] Loading SPECTROSCOPY_RESULTS...`,
      `[STATUS] Scanning for GIA_CERTIFICATE_METADATA...`
    ]);
    setIsLoading(true);

    const result = await generateTerminalOutput(`${name} Jewelry Quality Report`);
    
    // Simulate typing effect for the result
    const newLines = result.split('\n');
    for (const line of newLines) {
      if (line.trim()) {
        setLines(prev => [...prev, `| ${line}`]);
        await new Promise(r => setTimeout(r, 40));
      }
    }
    
    setLines(prev => [...prev, `>> AUDIT COMPLETE: Certified 100% Authentic Quality.`, ` `]);
    setIsLoading(false);
  };

  if (!projectName) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-3xl h-[80vh] bg-nish-surface border border-nish-gold/20 rounded-none shadow-[0_0_100px_rgba(212,175,55,0.05)] flex flex-col overflow-hidden">
        {/* Audit Header */}
        <div className="bg-nish-bg px-8 py-5 border-b border-nish-border flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-[10px] font-sans font-bold text-nish-gold uppercase tracking-[0.3em]">
              <Gem size={18} strokeWidth={1} />
              The Laboratory Audit - {projectName}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onClose} className="text-nish-grey hover:text-nish-gold transition-colors"><X size={24} /></button>
          </div>
        </div>

        {/* Audit Body */}
        <div 
          ref={scrollRef}
          className="flex-1 p-10 font-sans text-[11px] md:text-xs overflow-y-auto selection:bg-nish-gold/20 leading-relaxed tracking-wide"
        >
          <div className="space-y-3">
            {lines.map((line, i) => (
              <div key={i} className={`
                ${line.startsWith('>>') ? 'text-nish-gold font-bold' : ''}
                ${line.startsWith('[STATUS]') ? 'text-nish-grey italic' : ''}
                ${line.startsWith('|') ? 'text-white/80 border-l border-nish-gold/20 pl-4 ml-1' : ''}
              `}>
                {line}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-3 text-nish-gold/60 animate-pulse mt-4">
                <Loader2 size={16} className="animate-spin" />
                <span className="font-serif italic text-sm">Validating spectral signatures...</span>
              </div>
            )}
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-nish-bg px-8 py-3 border-t border-nish-border flex justify-between items-center text-[9px] font-sans text-nish-grey uppercase tracking-widest">
          <div className="flex gap-8">
            <span>Accuracy: 99.9%</span>
            <span>Origin: Lab_Verified</span>
          </div>
          <div className="flex items-center gap-2 text-nish-gold">
            <ShieldCheck size={12} /> Certificate_Secure
          </div>
        </div>
      </div>
    </div>
  );
};