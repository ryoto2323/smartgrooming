import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  className = '', 
  children,
  dark = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-luxury-black' : 'bg-luxury-charcoal'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 uppercase tracking-widest font-serif">
            {title}
          </h2>
          {subtitle && (
            <div className="h-1 w-20 bg-luxury-gold mx-auto mb-6"></div>
          )}
          {subtitle && (
            <p className="text-lg text-luxury-muted max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};