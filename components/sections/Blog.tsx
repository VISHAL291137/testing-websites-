import React from 'react';
import { Card } from '../ui/Card';
import { BlogPost } from '../../types';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const blogPosts: BlogPost[] = [
  {
    id: 'art-of-slow-design',
    title: 'The Art of Slow Design',
    excerpt: 'In a world obsessed with speed, we explore why deliberate, handcrafted design creates more value and longevity for brands.',
    date: 'October 12, 2023',
    category: 'Philosophy',
    imageUrl: 'https://picsum.photos/800/600?random=30',
    readTime: '5 min read'
  },
  {
    id: 'typography-heritage',
    title: 'Typography & Heritage',
    excerpt: 'How modern brands are reclaiming ancient serifs to convey trust and authority in digital spaces.',
    date: 'November 05, 2023',
    category: 'Design',
    imageUrl: 'https://picsum.photos/800/600?random=31',
    readTime: '3 min read'
  },
  {
    id: 'minimalism-warmth',
    title: 'Minimalism with Warmth',
    excerpt: 'Moving away from sterile tech aesthetics towards a palette of ivory, earth, and gold.',
    date: 'December 10, 2023',
    category: 'Aesthetics',
    imageUrl: 'https://picsum.photos/800/600?random=32',
    readTime: '6 min read'
  },
  {
    id: 'digital-zen',
    title: 'Digital Zen: UI Patterns',
    excerpt: 'Creating user interfaces that reduce cognitive load and promote a sense of calm focus.',
    date: 'January 15, 2024',
    category: 'UX/UI',
    imageUrl: 'https://picsum.photos/800/600?random=33',
    readTime: '4 min read'
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center max-w-2xl mx-auto mb-12">
         <p className="font-serif italic text-nish-grey text-lg mb-2">Thoughts & Process</p>
         <h2 className="font-serif text-3xl md:text-4xl text-nish-brown font-bold tracking-tight">THE JOURNAL</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id} 
            className="group bg-white rounded-lg overflow-hidden border border-nish-ivory shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-nish-brown/20 group-hover:bg-nish-brown/0 transition-colors duration-500"></div>
              <div className="absolute top-4 left-4">
                 <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-nish-brown rounded-sm shadow-sm">
                   {post.category}
                 </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-xs text-nish-grey mb-4 font-sans uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="font-serif text-2xl text-nish-brown font-bold mb-3 group-hover:text-nish-gold transition-colors">
                {post.title}
              </h3>
              
              <p className="text-nish-grey font-body leading-relaxed mb-6 flex-1">
                {post.excerpt}
              </p>

              <button className="flex items-center gap-2 text-nish-brown font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all group/btn">
                Read Article <ArrowRight className="w-4 h-4 text-nish-gold" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup (Theme Element) */}
      <Card className="bg-nish-brown text-nish-ivory border-none mt-16 text-center py-16">
         <h3 className="font-serif text-2xl text-nish-gold mb-4">Join the Inner Circle</h3>
         <p className="text-nish-ivory/80 max-w-md mx-auto mb-8 font-light">
           Receive occasional updates on design philosophy, new projects, and creative resources.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
           <input 
             type="email" 
             placeholder="Email Address" 
             className="px-4 py-3 rounded-md bg-white/10 border border-nish-gold/30 text-white placeholder-white/50 focus:outline-none focus:border-nish-gold flex-1"
           />
           <button className="bg-nish-gold text-nish-brown px-8 py-3 rounded-md font-bold uppercase tracking-widest hover:bg-white transition-colors">
             Subscribe
           </button>
         </div>
      </Card>
    </div>
  );
};