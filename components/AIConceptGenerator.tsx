import React, { useState } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { generateCreativeConcept } from '../services/geminiService';
import { Sparkles, Loader2, Gem, Search } from 'lucide-react';

export const AIConceptGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    // Updated prompt for jewelry specifically
    const concept = await generateCreativeConcept(`luxury jewelry piece based on the theme: ${topic}`);
    setResult(concept);
    setLoading(false);
  };

  return (
    <Card 
      title="Bespoke Design Visionary" 
      hasAccentBorder={true} 
      className="bg-gradient-to-br from-nish-surface to-nish-bg border-nish-gold/10"
      headerAction={<Gem className="text-nish-gold animate-pulse" size={24} />}
    >
      <div className="space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <p className="font-serif italic text-2xl text-nish-ivory">Design your legacy with our AI Stylist.</p>
          <p className="font-sans text-xs text-nish-grey tracking-wide leading-loose">
            Describe an emotion, a memory, or an aesthetic. Our neural engine will synthesize a unique jewelry concept, detailing the metalwork, gemstone selection, and artistic inspiration.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input 
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. A midnight garden in Paris..."
            className="flex-1 px-6 py-4 bg-nish-bg border border-nish-border rounded-none font-sans text-xs text-white placeholder-nish-grey focus:outline-none focus:border-nish-gold transition-all"
          />
          <Button onClick={handleGenerate} disabled={loading} variant="primary" className="!px-10">
            {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <div className="flex items-center gap-2"><Sparkles size={14} /> INITIATE</div>}
          </Button>
        </div>

        {result && (
          <div className="mt-12 p-10 bg-nish-bg rounded-none border border-nish-gold/20 shadow-2xl animate-in fade-in zoom-in-95 duration-700">
            <div className="flex items-center justify-between mb-8 border-b border-nish-border pb-4">
              <h3 className="font-sans font-bold text-nish-gold text-[10px] tracking-[0.4em] uppercase">The Visionary Concept</h3>
              <div className="text-[9px] font-sans text-nish-grey uppercase">ID: BR-{Math.random().toString(36).substr(2, 6).toUpperCase()}</div>
            </div>
            <div className="text-sm text-nish-ivory/90 whitespace-pre-line leading-relaxed font-serif italic">
              {result}
            </div>
            <div className="mt-10 pt-6 border-t border-nish-border flex justify-between items-center">
              <p className="text-[10px] font-sans text-nish-grey uppercase tracking-widest">Share this vision with our head artisan</p>
              <Button variant="text" className="text-[9px]" onClick={() => setResult('')}>PURGE VISION</Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};