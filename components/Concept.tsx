import React, { useEffect, useRef, useState } from 'react';
import { CONCEPT_TEXT } from '../constants/text';

export const Concept: React.FC = () => {
  const [hours, setHours] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Number Counter Logic
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const end = 3000;
        const duration = 2000;
        const incrementTime = duration / (end / 100); 
        
        const timer = setInterval(() => {
          start += 50;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setHours(start);
        }, incrementTime);

        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 });

    if (counterRef.current) observer.observe(counterRef.current);
    
    return () => {
        observer.disconnect();
    };
  }, []);

  return (
    <section id="concept" className="py-32 bg-luxury-black relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-8 reveal-on-scroll">
            <div className="relative">
                <span className="text-luxury-gold text-xs tracking-[0.2em] block mb-2">{CONCEPT_TEXT.label}</span>
                <h2 className="font-display text-6xl md:text-8xl text-white/5 absolute -top-12 -left-4 -z-10 select-none">{CONCEPT_TEXT.bgText}</h2>
                {/* Mobile: Small English / PC: Big English */}
                <h2 className="font-display text-2xl md:text-5xl text-white tracking-wider relative z-10 md:block hidden">{CONCEPT_TEXT.title}</h2>
                <h2 className="font-serif text-3xl text-white relative z-10 md:hidden block mt-2">合理的思考</h2>
            </div>
            {/* Mobile: Big Japanese / PC: Standard description */}
            <p className="text-luxury-muted text-sm md:text-sm mt-4 md:mt-0 max-w-md text-left md:text-left font-serif md:font-sans">
                {CONCEPT_TEXT.subtitle}
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Composition */}
            <div className="relative reveal-on-scroll">
                <div className="aspect-[4/5] w-full max-w-md ml-auto relative z-10 overflow-hidden group rounded-sm shadow-2xl">
                    <img 
                        src="https://github.com/ryoto2323/smartgrooming/blob/main/aa.png?raw=true" 
                        alt="Man in suit" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative Frame */}
                <div className="absolute top-12 -left-4 md:left-24 w-full h-full border border-luxury-gold/30 z-0 hidden md:block"></div>
                
                {/* Float Text */}
                <div className="absolute -bottom-8 -left-8 md:left-12 bg-luxury-charcoal p-6 md:p-8 max-w-xs shadow-2xl z-20 border-l-2 border-luxury-gold cursor-hover">
                    <p className="font-serif text-lg text-white leading-relaxed whitespace-pre-line">
                        {CONCEPT_TEXT.floatText}
                    </p>
                </div>
            </div>

            {/* Text Content */}
            <div className="space-y-12 reveal-on-scroll">
                <div className="space-y-6">
                    <h3 className="font-serif text-2xl md:text-3xl text-white leading-normal whitespace-pre-line">
                        {CONCEPT_TEXT.mainHeading}
                    </h3>
                    
                    <div ref={counterRef} className="py-6 border-y border-white/5 my-6">
                        <p className="text-luxury-muted text-xs tracking-widest mb-1">{CONCEPT_TEXT.lifetimeLossLabel}</p>
                        <div className="flex items-baseline gap-2">
                             <span className="text-6xl md:text-7xl font-display font-bold text-luxury-gold tabular-nums">
                                {hours.toLocaleString()}
                             </span>
                             <span className="text-xl text-white font-serif">{CONCEPT_TEXT.lifetimeLossUnit}</span>
                        </div>
                         <p className="text-luxury-muted text-xs mt-2 text-right">{CONCEPT_TEXT.lifetimeLossNote}</p>
                    </div>

                    <p className="text-luxury-muted leading-loose font-light tracking-wide text-justify whitespace-pre-line">
                        {CONCEPT_TEXT.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                    <div className="group cursor-hover">
                        <span className="block text-3xl font-display text-white group-hover:text-luxury-gold transition-colors mb-2">
                            {CONCEPT_TEXT.statTime.value}<span className="text-sm ml-1">{CONCEPT_TEXT.statTime.unit}</span>
                        </span>
                        <p className="text-xs text-luxury-muted whitespace-pre-line">{CONCEPT_TEXT.statTime.desc}</p>
                    </div>
                    <div className="group cursor-hover">
                        <span className="block text-3xl font-display text-white group-hover:text-luxury-gold transition-colors mb-2">
                             {CONCEPT_TEXT.statCost.value}<span className="text-sm ml-1">{CONCEPT_TEXT.statCost.unit}</span>
                        </span>
                        <p className="text-xs text-luxury-muted whitespace-pre-line">{CONCEPT_TEXT.statCost.desc}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};