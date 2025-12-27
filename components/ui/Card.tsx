import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  hasAccentBorder?: boolean;
  className?: string;
  headerAction?: React.ReactNode;
  id?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  title, 
  hasAccentBorder = false, 
  className = '',
  headerAction,
  id
}) => {
  return (
    <div 
      id={id}
      className={`bg-nish-surface border border-nish-border p-8 md:p-12 mb-12 transition-all duration-700 hover:border-nish-gold/20 group relative overflow-hidden ${className}`}
    >
      {hasAccentBorder && (
        <div className="absolute top-0 left-0 w-full h-1 bg-nish-gold opacity-30"></div>
      )}
      {title && (
        <div className="flex justify-between items-center mb-10 border-b border-nish-border pb-6">
          <h2 className="text-2xl md:text-3xl font-serif italic text-nish-gold-light tracking-wide flex items-center gap-4">
            {title}
            <div className="w-8 h-px bg-nish-gold/40"></div>
          </h2>
          {headerAction}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};