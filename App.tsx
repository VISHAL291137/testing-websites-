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
import { ArrowDown, Construction, Copy, Check } from 'lucide-react';

// Simple hash router hook
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

const ColorSwatch: React.FC<{ color: string, name: string, hex: string }> = ({ color, name, hex }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative flex flex-col items-center">
      <button 
        onClick={copyToClipboard}
        className="w-4 h-4 rounded-full border border-nish-brown/10 shadow-sm transition-transform hover:scale-125"
        style={{ backgroundColor: hex }}
        title={`Copy ${hex}`}
      />
      <div className="absolute top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-nish-brown text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-20 pointer-events-none">
        {copied ? 'Copied!' : `${name}: ${hex}`}
      </div>
    </div>
  );
};

const Hero: React.FC = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 mb-16 overflow-hidden">
    {/* Background Texture Elements */}
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
       <div className="absolute top-1/4 -left-20 w-80 h-80 bg-nish-brown rounded-full blur-[120px]"></div>
       <div className="absolute top-1/2 -right-20 w-96 h-96 bg-nish-gold rounded-full blur-[150px]"></div>
    </div>
    
    <div className="relative z-10 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-1000 slide-in-from-bottom-8">
      {/* Decorative Brand Icon */}
      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-nish-brown rounded-full flex items-center justify-center text-nish-gold border-2 border-nish-gold shadow-2xl mb-8 transform hover:rotate-12 transition-transform cursor-pointer">
          <span className="text-4xl md:text-5xl">🕉️</span>
      </div>

      {/* Main Brand Title - Enhanced with Gradient & Spacing */}
      <div className="space-y-4">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.1em] leading-none bg-clip-text text-transparent bg-gradient-to-b from-nish-brown via-[#4A3329] to-nish-gold drop-shadow-sm">
          NISHKALYA
        </h1>
        <p className="font-serif italic text-xl md:text-3xl text-nish-grey/80 max-w-2xl mx-auto tracking-wide">
          Power in Stillness — Handcrafted & Premium
        </p>
      </div>

      {/* Brand Specs / Color Codes as requested */}
      <div className="flex flex-col items-center gap-3 py-4">
        <p className="text-[10px] font-sans font-bold text-nish-grey/60 uppercase tracking-[0.3em] mb-1">Brand Palette</p>
        <div className="flex gap-4">
          <ColorSwatch name="Ivory" hex="#F3E9D2" color="bg-nish-ivory" />
          <ColorSwatch name="Brown" hex="#2B1F1A" color="bg-nish-brown" />
          <ColorSwatch name="Gold" hex="#DAA520" color="bg-nish-gold" />
          <ColorSwatch name="Paper" hex="#FFFDF9" color="bg-nish-paper" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 justify-center pt-6">
        <a href="#/projects">
          <Button variant="primary" className="!px-10 !py-4 text-sm shadow-xl hover:-translate-y-1">Explore Projects</Button>
        </a>
        <a href="#/gallery">
          <Button variant="secondary" className="!px-10 !py-4 text-sm shadow-lg hover:-translate-y-1">View Gallery</Button>
        </a>
        <a href="#/about">
           <Button variant="outline" className="!px-10 !py-4 text-sm hover:-translate-y-1">About Me</Button>
        </a>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-12 animate-bounce flex flex-col items-center gap-2">
      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-nish-brown/40">Scroll</span>
      <ArrowDown size={20} className="text-nish-brown/50" />
    </div>
  </section>
);

// Layout wrapper for inner pages
const PageLayout: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="lg:col-span-8 min-h-[60vh]">
          {title && (
            <div className="mb-8 border-b border-nish-brown/10 pb-4">
              <h1 className="font-serif text-4xl md:text-5xl text-nish-brown font-bold tracking-tight">{title}</h1>
            </div>
          )}
          {children}
        </main>
        <aside className="lg:col-span-4 hidden lg:block">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

// Placeholder Project Detail
const ProjectDetail: React.FC = () => {
  const projectId = window.location.hash.split('/').pop() || '';
  const formattedTitle = projectId.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="bg-white p-12 rounded-lg shadow-sm border border-nish-ivory text-center py-32 animate-in fade-in zoom-in duration-500 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-nish-brown via-nish-gold to-nish-brown"></div>
       <div className="w-20 h-20 bg-nish-ivory/50 rounded-full flex items-center justify-center mx-auto mb-6">
         <Construction className="w-10 h-10 text-nish-gold" />
       </div>
       <h2 className="font-serif text-3xl text-nish-brown mb-2 font-bold">{formattedTitle}</h2>
       <p className="font-sans text-sm text-nish-gold uppercase tracking-widest mb-6">Case Study Coming Soon</p>
       <p className="text-nish-grey max-w-md mx-auto mb-8 leading-relaxed">
         We are currently documenting the intricate details, code architecture, and design decisions for <strong>{formattedTitle}</strong>. The full case study will be available shortly.
       </p>
       <a href="#/projects">
         <Button variant="outline">Back to Projects</Button>
       </a>
    </div>
  );
};

const HomePage: React.FC = () => (
  <>
    <Hero />
    <div className="max-w-7xl mx-auto px-4 md:px-6">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <main className="lg:col-span-8 space-y-16">
            <About />
            <div className="text-center py-12">
               <h3 className="font-serif text-2xl text-nish-brown mb-4">Discover More</h3>
               <div className="flex justify-center gap-4">
                 <a href="#/highlights"><Button variant="outline">Highlights</Button></a>
                 <a href="#/projects"><Button variant="outline">Projects</Button></a>
               </div>
            </div>
            <AIConceptGenerator />
          </main>
          <aside className="lg:col-span-4 hidden lg:block">
            <Sidebar />
          </aside>
       </div>
    </div>
  </>
);

const App: React.FC = () => {
  const path = useHashPath();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  let Content = <HomePage />;
  if (path === '/' || path === '') {
    Content = <HomePage />;
  } else if (path === '/about') {
    Content = <PageLayout title="Our Story"><About /></PageLayout>;
  } else if (path === '/highlights') {
    Content = <PageLayout title="Highlights"><Highlights /></PageLayout>;
  } else if (path === '/gallery') {
    Content = <PageLayout title="Gallery"><Gallery /></PageLayout>;
  } else if (path === '/projects') {
    Content = <PageLayout title="Projects"><Projects /></PageLayout>;
  } else if (path === '/blog') {
    Content = <PageLayout title=""><Blog /></PageLayout>;
  } else if (path.startsWith('/project/')) {
    Content = <PageLayout title="Project Detail"><ProjectDetail /></PageLayout>;
  }

  return (
    <div className="min-h-screen bg-[#F3E9D2] bg-opacity-40 font-body text-nish-brown selection:bg-nish-gold selection:text-white flex flex-col justify-between">
      <Header />
      {Content}
      <Footer />
    </div>
  );
};

export default App;