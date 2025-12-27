import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { BlogPost } from '../../types';
import { ArrowRight, Calendar, Clock, X, Terminal, Share2 } from 'lucide-react';
import { Button } from '../ui/Button';

const blogPosts: BlogPost[] = [
  {
    id: 'art-of-slow-design',
    title: 'Precision Architecture: Beyond Speed',
    excerpt: 'In a landscape obsessed with rapid deployment, we analyze why deliberate, security-first architecture creates long-term resilience.',
    date: 'OCT_12_2023',
    category: 'Protocol',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    readTime: '05_MIN_EXE'
  },
  {
    id: 'typography-heritage',
    title: 'Visual Identification Systems',
    excerpt: 'Utilizing high-contrast identification markers and terminal-grade typography to establish authority in digital nodes.',
    date: 'NOV_05_2023',
    category: 'Vetting',
    imageUrl: 'https://images.unsplash.com/photo-1517139274439-b35b818fe472?auto=format&fit=crop&q=80&w=1000',
    readTime: '03_MIN_EXE'
  },
  {
    id: 'minimalism-warmth',
    title: 'The Kali Aesthetic Shift',
    excerpt: 'Deconstructing the transition from legacy ivory palettes to high-performance dark-state interfaces.',
    date: 'DEC_10_2023',
    category: 'Aesthetics',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    readTime: '06_MIN_EXE'
  },
  {
    id: 'digital-zen',
    title: 'Zero-Latency User Interfaces',
    excerpt: 'Engineering interfaces that reduce cognitive overhead and optimize operator throughput during high-stress deployments.',
    date: 'JAN_15_2024',
    category: 'Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000',
    readTime: '04_MIN_EXE'
  }
];

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div id="blog" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 scroll-mt-28">
      <div className="flex items-center justify-between border-b border-nish-border pb-6">
        <div>
          <p className="font-mono text-nish-neon text-[10px] uppercase tracking-[0.4em] mb-2">Intel & Documentation</p>
          <h2 className="font-mono text-3xl text-white font-bold tracking-tighter">OPERATIONAL_JOURNAL</h2>
        </div>
        <div className="hidden md:block">
           <Button variant="outline" className="text-[10px]">ALL_LOGS</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id} 
            onClick={() => openPost(post)}
            className="group bg-nish-surface/30 rounded-lg overflow-hidden border border-nish-border hover:border-nish-kali/50 transition-all duration-500 flex flex-col h-full cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-nish-bg/40 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute top-4 left-4">
                 <span className="bg-nish-kali px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-white rounded shadow-lg">
                   {post.category}
                 </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-[9px] text-nish-grey mb-4 font-mono uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-nish-kali" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} className="text-nish-neon" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="font-mono text-xl text-white font-bold mb-3 group-hover:text-nish-neon transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-nish-grey text-xs leading-relaxed mb-6 flex-1 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-nish-kali font-mono font-bold text-[10px] uppercase tracking-widest group-hover:gap-3 transition-all">
                READ_ENTRY <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup (Theme Element) */}
      <div className="bg-gradient-to-br from-nish-surface to-nish-bg p-12 rounded-lg border border-nish-kali/20 text-center relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-full h-0.5 bg-nish-kali opacity-20 group-hover:opacity-100 transition-opacity"></div>
         <h3 className="font-mono text-2xl text-white mb-4 tracking-tighter uppercase">Join System_Network</h3>
         <p className="text-nish-grey max-w-md mx-auto mb-8 font-mono text-xs uppercase tracking-wider">
           Receive encrypted updates on solution architecture, vetting protocols, and elite tech deployments.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
           <input 
             type="email" 
             placeholder="OPERATOR_EMAIL" 
             className="px-4 py-3 rounded bg-nish-bg border border-nish-border text-white font-mono text-xs placeholder-nish-grey focus:outline-none focus:border-nish-kali flex-1 transition-colors"
           />
           <Button variant="primary" className="!rounded">
             SUBSCRIBE
           </Button>
         </div>
      </div>

      {/* Modal / Full-screen Post View */}
      {selectedPost && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-0 md:p-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-nish-bg/95 backdrop-blur-xl"
            onClick={closePost}
          ></div>
          
          {/* Post Content */}
          <div className="relative w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] bg-nish-surface border border-nish-border rounded-none md:rounded-xl overflow-y-auto animate-in zoom-in-95 fade-in duration-300 shadow-2xl">
            {/* Header / Nav */}
            <div className="sticky top-0 z-20 bg-nish-surface/90 backdrop-blur-md border-b border-nish-border px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Terminal size={18} className="text-nish-kali" />
                <span className="font-mono text-[10px] font-bold text-nish-grey uppercase tracking-[0.3em]">
                  {selectedPost.category} // ENTRY_ID: {selectedPost.id.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-nish-grey hover:text-white transition-colors">
                  <Share2 size={18} />
                </button>
                <button 
                  onClick={closePost}
                  className="text-nish-grey hover:text-white transition-colors bg-nish-bg p-2 rounded-full border border-nish-border"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-64 md:h-96 relative">
              <img 
                src={selectedPost.imageUrl} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nish-surface via-transparent to-transparent"></div>
            </div>

            {/* Post Content Body */}
            <div className="px-6 md:px-16 py-12">
              <div className="flex items-center gap-6 text-[10px] font-mono text-nish-neon uppercase tracking-widest mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={14} /> {selectedPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} /> {selectedPost.readTime}
                </div>
              </div>

              <h1 className="font-mono text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-none">
                {selectedPost.title}
              </h1>

              <div className="prose prose-invert max-w-none font-sans text-nish-grey leading-relaxed space-y-6">
                <p className="text-lg text-white font-medium border-l-2 border-nish-kali pl-6 py-2 italic bg-nish-kali/5">
                  {selectedPost.excerpt}
                </p>
                <p>
                  Deploying a professional tech solution requires more than just code. It requires a fundamental understanding of the selection protocol—the rigorous vetting of every dependency, architecture choice, and visual marker. In this operational log, we break down the specific methodologies used to engineer the Nishkalya v2.0 environment.
                </p>
                <h3 className="font-mono text-white text-xl uppercase tracking-tighter mt-12">The Vetting Protocol</h3>
                <p>
                  Every solution deployed by our agency undergoes a three-stage audit. First, structural resilience: ensuring the core logic can withstand high-throughput demands. Second, visual integrity: maintaining the Kali-inspired aesthetic without compromising accessibility. Third, performance optimization: hitting sub-10ms response times across distributed nodes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                   <div className="p-6 bg-nish-bg rounded border border-nish-border font-mono text-[10px]">
                      <div className="text-nish-kali mb-2">OUTPUT_STATS</div>
                      <div className="space-y-1">
                        <div>Latency: 0.04ms</div>
                        <div>Uptime: 99.998%</div>
                        <div>Security: Encrypted</div>
                      </div>
                   </div>
                   <div className="p-6 bg-nish-bg rounded border border-nish-border font-mono text-[10px]">
                      <div className="text-nish-neon mb-2">SYSTEM_MODE</div>
                      <div className="space-y-1">
                        <div>Arch: ARM64/X86</div>
                        <div>Protocol: HTTP3/QUIC</div>
                        <div>State: Optimal</div>
                      </div>
                   </div>
                </div>
                <p>
                  As we continue to evolve our selection engine, the focus remains on the "Power in Stillness"—the efficiency that comes from precise design and minimal overhead. This is the hallmark of professional tech selection.
                </p>
              </div>

              {/* Footer Actions */}
              <div className="mt-16 pt-8 border-t border-nish-border flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-nish-kali flex items-center justify-center text-white">VK</div>
                  <div className="font-mono text-[10px]">
                    <div className="text-white font-bold">VISHAL KUMAR</div>
                    <div className="text-nish-grey">LEAD_SOLUTIONS_ARCH</div>
                  </div>
                </div>
                <Button variant="outline" onClick={closePost}>CLOSE_SESSION</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};