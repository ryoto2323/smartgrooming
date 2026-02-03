import React from 'react';
import { ChevronDown } from 'lucide-react';
import { HERO_TEXT } from '../constants/text';

interface HeroProps {
  onImageLoad?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onImageLoad }) => {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-luxury-black">
      
      {/* Background Image with Cinemagraph feel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://github.com/ryoto2323/smartgrooming/blob/main/aab.png?raw=true" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover transition-transform duration-[20s] ease-out scale-110 opacity-50"
          style={{ animation: 'ken-burns 30s ease-out infinite alternate' }}
          onLoad={onImageLoad}
        />
        {/* Gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-black/40"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-12 h-[70vh] items-center">
            
            {/* Left Side: Main Copy */}
            <div className="md:col-span-9 relative pt-20">
                
                {/* Category Tag Area */}
                <div className="flex flex-col items-start gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="relative group">
                        <span className="relative z-10 bg-luxury-gold text-luxury-black px-6 py-2 text-sm md:text-base font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(197,160,89,0.4)] inline-block transform -skew-x-12 transition-transform group-hover:skew-x-0 duration-500">
                            <span className="block transform skew-x-12 group-hover:skew-x-0 transition-transform duration-500">
                                {HERO_TEXT.category}
                            </span>
                        </span>
                    </div>
                     <p className="text-white/70 text-[10px] md:text-xs tracking-[0.3em] uppercase font-light pl-2 mt-2">
                        {HERO_TEXT.subCategory}
                    </p>
                </div>
                
                <h1 className="text-white leading-none relative">
                    {/* Line 1 */}
                    <div className="mb-4 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <span className="block font-serif text-4xl md:text-6xl lg:text-[5.5rem] font-medium tracking-widest">
                            {HERO_TEXT.mainLine1.split('清潔感')[0]}
                            <span className="text-luxury-gold relative inline-block mx-2">
                                清潔感
                                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-luxury-gold/50"></span>
                            </span>
                            {HERO_TEXT.mainLine1.split('清潔感')[1]}
                        </span>
                    </div>
                    
                    {/* Line 2 */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <span className="block font-sans font-black italic text-6xl md:text-8xl lg:text-[9.5rem] tracking-tighter leading-[1.1] ml-[-0.05em] py-2">
                            <span className="relative inline-block z-10 group mr-[-10px] md:mr-[-20px]">
                                <span className="relative z-20 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 inline-block pr-8 md:pr-14 pb-2">
                                    {HERO_TEXT.mainLine2.replace('で。', '')}
                                </span>
                                <div className="absolute bottom-4 left-0 w-[calc(100%-2rem)] md:w-[calc(100%-3.5rem)] h-[3px] bg-luxury-gold shadow-[0_0_15px_rgba(197,160,89,0.8)] transform origin-left scale-x-0 animate-[slide-in-right_1s_cubic-bezier(0.16,1,0.3,1)_1.5s_forwards]"></div>
                            </span>
                            <span className="text-white not-italic font-serif font-light text-4xl md:text-6xl lg:text-[6rem] ml-4 md:ml-8 align-baseline">で。</span>
                        </span>
                    </div>
                </h1>

                {/* Sub-copy Area */}
                <div className="mt-12 md:mt-16 max-w-xl animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
                    <div className="relative bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-sm border-l-2 border-luxury-gold hover:bg-black/60 transition-colors duration-500 group cursor-hover">
                        <p className="text-white text-sm md:text-base leading-loose tracking-wide font-normal whitespace-pre-line">
                            {HERO_TEXT.description}
                        </p>
                    </div>

                    <div className="mt-10 pl-2">
                         <a 
                            href="https://airrsv.net/demosite0000/calendar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-4 bg-white text-luxury-black px-12 py-5 text-sm font-bold tracking-widest hover:bg-luxury-gold transition-all duration-500 ease-out group relative overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">{HERO_TEXT.buttonText}</span>
                            <div className="w-2 h-2 bg-luxury-black rounded-full group-hover:bg-white transition-colors"></div>
                            <div className="absolute inset-0 bg-luxury-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                        </a>
                        <p className="text-white/70 text-xs mt-4 tracking-wider pl-1 font-light">
                            {HERO_TEXT.note}
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Vertical Text */}
            <div className="hidden md:flex md:col-span-3 justify-end h-full items-center relative">
                <div className="absolute top-0 right-10 w-[1px] h-full bg-white/10"></div>
                
                <div className="writing-vertical text-right h-auto absolute right-0 top-1/2 transform -translate-y-1/2 pr-6 mix-blend-difference">
                    <span className="text-3xl lg:text-4xl font-display text-white/30 uppercase tracking-widest block mb-8 hover:text-white transition-colors duration-700 animate-fade-in opacity-0" style={{ animationDelay: '2s' }}>
                        {HERO_TEXT.verticalMain}
                    </span>
                    <span className="text-sm text-luxury-gold tracking-[0.3em] font-serif block animate-fade-in opacity-0" style={{ animationDelay: '2.2s' }}>
                        {HERO_TEXT.verticalSub}
                    </span>
                </div>
            </div>
        </div>

      </div>
      
      {/* Footer / Scroll Indicator */}
      <div className="absolute bottom-0 w-full px-6 md:px-12 py-8 border-t border-white/5 flex justify-between items-end z-20">
         <div className="hidden md:block">
             <span className="text-white/30 text-[10px] tracking-widest animate-pulse">SCROLL DOWN</span>
         </div>
         <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-5 h-5 text-luxury-gold" />
         </div>
         <div className="flex gap-4">
            <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
            <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            <div className="w-2 h-2 bg-white/20 rounded-full"></div>
         </div>
      </div>

    </section>
  );
};