import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Project } from '../../types';
import { ArrowRight, ShoppingBag, Eye, Heart, Diamond } from 'lucide-react';
import { TerminalView } from '../TerminalView';

const collections: Project[] = [
  {
    id: 'luna-collection',
    title: 'The Luna Suite',
    category: 'High Jewelry',
    description: "Inspired by the celestial movements of the moon, this collection features colorless diamonds set in 18k white gold, designed to capture the essence of night light.",
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Diamonds', 'White Gold', 'Platinum']
  },
  {
    id: 'heritage-gold',
    title: 'Imperial Heritage',
    category: 'Vintage Curation',
    description: "Deeply rooted in ancestral mark-making, these hand-carved yellow gold pieces celebrate the rich cultural tapestry of traditional adornment.",
    imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1000',
    techStack: ['22k Gold', 'Emeralds', 'Rubies']
  },
  {
    id: 'minimalist-arch',
    title: 'Modern Architecture',
    category: 'Bespoke Rings',
    description: 'Precision engineering meets fine art. Clean lines and bold structural forms for the modern individual who seeks subtle luxury.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Titanium', 'Black Diamonds', 'Symmetry']
  },
  {
    id: 'ocean-tide',
    title: 'The Azure Tide',
    category: 'Signature Pieces',
    description: 'A celebration of the oceanic depths featuring rare Ceylon sapphires and organic pearl structures from the deep sea.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000',
    techStack: ['Sapphires', 'South Sea Pearls', 'Silver']
  }
];

export const Projects: React.FC = () => {
  const [inspectTarget, setInspectTarget] = useState<string | null>(null);

  return (
    <>
      <div id="projects" className="scroll-mt-32">
        <div className="flex flex-col gap-32">
          {collections.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center group animate-in fade-in duration-1000`}
            >
              {/* Product Visual */}
              <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden bg-nish-surface shadow-2xl">
                 <img 
                   src={item.imageUrl} 
                   alt={item.title} 
                   className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                 
                 {/* Floating Action */}
                 <div className="absolute top-6 right-6">
                   <button 
                     onClick={() => setInspectTarget(item.title)}
                     className="bg-nish-bg/60 backdrop-blur-md p-4 text-nish-gold rounded-full border border-white/10 hover:bg-nish-gold hover:text-nish-bg transition-all"
                   >
                     <Eye size={20} />
                   </button>
                 </div>
              </div>

              {/* Product Info */}
              <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                <div className="space-y-2">
                  <p className="font-sans text-[10px] tracking-[0.5em] text-nish-gold uppercase font-bold">{item.category}</p>
                  <h3 className="font-serif text-4xl md:text-5xl text-nish-ivory italic">{item.title}</h3>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                   {item.techStack?.map(t => (
                     <span key={t} className="text-[9px] font-sans tracking-[0.2em] uppercase text-nish-grey border-b border-nish-border pb-1">
                       {t}
                     </span>
                   ))}
                </div>

                <p className="text-nish-grey font-sans text-sm font-light leading-relaxed max-w-lg">
                  {item.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center md:justify-start">
                   <button 
                     onClick={() => setInspectTarget(item.title)}
                     className="px-10 py-4 bg-nish-gold text-nish-bg font-sans text-[10px] tracking-widest uppercase font-bold hover:bg-nish-gold-light transition-all"
                   >
                     Consult Artisans
                   </button>
                   <button className="px-10 py-4 border border-nish-border text-nish-ivory font-sans text-[10px] tracking-widest uppercase font-bold hover:border-nish-gold transition-all flex items-center justify-center gap-3">
                     <ShoppingBag size={14} /> Wishlist
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TerminalView 
        projectName={inspectTarget} 
        onClose={() => setInspectTarget(null)} 
      />
    </>
  );
};