import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-none font-sans font-medium transition-all duration-500 ease-in-out text-[10px] tracking-[0.2em] uppercase border";
  
  const variants = {
    primary: "bg-nish-gold text-nish-bg hover:bg-nish-gold-light border-nish-gold shadow-lg",
    secondary: "bg-transparent text-nish-gold border-nish-gold hover:bg-nish-gold hover:text-nish-bg",
    outline: "bg-transparent border-nish-border text-nish-grey hover:border-nish-gold hover:text-white",
    text: "border-transparent bg-transparent text-nish-grey hover:text-nish-gold px-2"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};