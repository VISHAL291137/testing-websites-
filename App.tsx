import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { Button } from './components/ui/Button';
import { About } from './components/sections/About';
import { Highlights } from './components/sections/Highlights';
import { Gallery } from './components/sections/Gallery';
import { Projects } from './components/sections/Projects';
import { Blog } from './components/sections/Blog';
import { AIConceptGenerator } from './components/AIConceptGenerator';
import { TerminalView } from './components/TerminalView';
import { ArrowDown, Diamond, Sparkles, Gem, Award, Search } from 'lucide-react';

const useHashPath = () => {
  const [path, setPath] = useState(window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const onHashChange = () => {
      setPath(window.location.hash.replace('#', '') || '/');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return path;
};

const Hero: React.FC<{ onTerminalTrigger: () => void }> = ({ onTerminalTrigger }) => (
  <section className="relative min-h-[100vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden luxury-gradient">
    {/* Background Decorative Elements */}
    <div className="absolute inset-0 z-0 pointer-events-none">
       <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] bg-nish-gold/5 rounded-full blur-[180px]"></div>
       <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[200px]"></div>
    </div>
    
    <div className="relative z-10 max-w-6xl mx-auto space-y-12 animate-in fade-in duration-1000">
      {/* Brand Icon */}
      <div className="relative inline-block mb-4">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-nish-bg rounded-full flex items-center justify-center text-nish-gold border border-nish-gold/20 shadow-2xl">
          <Diamond size={48} strokeWidth={1} className="animate-pulse" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="space-y-6">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-nish-ivory leading-tight">
          Eternal <span className="italic gold-shimmer">Elegance</span>
        </h1>
        <div className="flex items-center justify-center gap-6 py-2">
           <div className="h-px w-12 bg-nish-gold/30"></div>
           <p className="font-sans text-sm md:text-lg text-nish-gold uppercase tracking-[0.5em] font-light">
             Masterpieces of Fine Jewelry
           </p>
           <div className="h-px w-12 bg-nish-gold/30"></div>
        </div>
      </div>

      {/* Stats / Qualities */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto border-t border-nish-border">
        {[
          { icon: Gem, label: 'Gems', val: 'VVS1' },
          { icon: Award, label: 'Heritage', val: 'Est. 1924' },
          { icon: Sparkles, label: 'Craft', val: 'Bespoke' },
          { icon: Search, label: 'Source', val: 'Ethical' }
        ].map((item, i) => (
          <div key={i} className="text-center group cursor-default">
            <item.icon size={24} className="mx-auto mb-4 text-nish-gold/40 group-hover:text-nish-gold transition-colors duration-500" />
            <div className="text-lg font-serif italic text-nish-ivory">{item.val}</div>
            <div className="text-[10px] font-sans text-nish-grey uppercase tracking-widest mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center pt-16">
        <a href="#/projects">
          <Button variant="primary" className="!px-16 !py-5">View Collections</Button>
        </a>
        <Button variant="secondary" onClick={onTerminalTrigger} className="!px-16 !py-5">
           Bespoke Consultation
        </Button>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-30">
      <ArrowDown size={24} className="text-nish-gold" />
    </div>
  </section>
);

const App: React.FC = () => {
  const path = useHashPath();
  const [globalTerminalTarget, setGlobalTerminalTarget] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [path]);

  const renderContent = () => {
    switch (path) {
      case '/about': return <About />;
      case '/highlights': return <Highlights />;
      case '/gallery': return <Gallery />;
      case '/projects': return <Projects />;
      case '/blog': return <Blog />;
      case '/': 
      case '':
        return (
          <div className="space-y-48 pb-24">
            <About />
            <AIConceptGenerator />
            <Highlights />
            <Projects />
            <Gallery />
            <Blog />
          </div>
        );
      default:
        return (
          <div className="py-60 text-center">
            <Diamond className="w-16 h-16 mx-auto text-nish-gold/20 mb-8" />
            <h2 className="font-serif text-5xl text-nish-ivory italic">Collection Lost</h2>
            <p className="text-nish-grey mt-4 font-sans uppercase tracking-[0.2em] text-xs">This precious path could not be found...</p>
            <a href="#/" className="mt-12 inline-block text-nish-gold font-sans font-bold tracking-[0.3em] text-[10px] uppercase border-b border-nish-gold pb-1 hover:text-nish-ivory hover:border-nish-ivory transition-all">RECOVER ORIGIN</a>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-nish-bg selection:bg-nish-gold selection:text-nish-bg flex flex-col">
      <Header />
      
      {(path === '/' || path === '') && (
        <Hero onTerminalTrigger={() => setGlobalTerminalTarget('BESPOKE_DESIGN_INITIALIZATION')} />
      )}
      
      <main className="max-w-7xl mx-auto px-6 py-24 w-full flex-grow">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="flex-1 min-w-0">
            {renderContent()}
          </div>
          <aside className="lg:w-96 flex-shrink-0">
            <Sidebar />
          </aside>
        </div>
      </main>
      
      <Footer />
      
      <TerminalView 
        projectName={globalTerminalTarget} 
        onClose={() => setGlobalTerminalTarget(null)} 
      />
    </div>
  );
};

export default App;