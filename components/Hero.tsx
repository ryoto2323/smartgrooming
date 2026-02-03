import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current || !textRef.current || !bgRef.current) return;
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (clientX - centerX) / 50;
        const moveY = (clientY - centerY) / 50;

        // Text moves opposite to mouse for depth
        textRef.current.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        
        // Background moves slightly with mouse for 3D feel
        bgRef.current.style.transform = `scale(1.1) translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-luxury-black">
      
      {/* Background Image with Cinemagraph feel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          ref={bgRef}
          src="https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=2680&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-100 ease-out"
          style={{ transform: 'scale(1.1)' }}
        />
        {/* Animated Mist/Smoke Effect for Cinemagraph vibe */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-black/40"></div>
        
        {/* Floating dust particles effect (simulated with texture) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay animate-pulse"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-12 h-[70vh] items-center">
            
            {/* Left Side: Main Copy with Parallax */}
            <div ref={textRef} className="md:col-span-9 relative pt-20 transition-transform duration-300 ease-out will-change-transform">
                
                {/* Category Tag Area - Enhanced Visibility */}
                <div className="flex flex-col items-start gap-3 mb-10 animate-fade-in-up">
                    <div className="relative group">
                        <span className="relative z-10 bg-luxury-gold text-luxury-black px-6 py-2 text-sm md:text-base font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(197,160,89,0.4)] inline-block transform -skew-x-12 transition-transform group-hover:skew-x-0 duration-500">
                            <span className="block transform skew-x-12 group-hover:skew-x-0 transition-transform duration-500">銀座・メンズ脱毛サロン</span>
                        </span>
                        {/* Decorative glow behind the tag */}
                        <div className="absolute inset-0 bg-white/20 blur-xl"></div>
                    </div>
                    <p className="text-white/70 text-[10px] md:text-xs tracking-[0.3em] uppercase font-light pl-2">
                        Smart Grooming for Business Leaders
                    </p>
                </div>
                
                <h1 className="text-white leading-none relative">
                    {/* Line 1: Elegant Serif */}
                    <span className="block font-serif text-4xl md:text-6xl lg:text-[5.5rem] font-medium animate-fade-in-up opacity-0 tracking-widest mb-4 md:mb-6" style={{ animationDelay: '0.2s' }}>
                        戦略的<span className="text-luxury-gold relative inline-block">
                            清潔感
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-luxury-gold/50"></span>
                        </span>を
                    </span>
                    
                    {/* Line 2: Fast, Impactful Sans-Serif Italic */}
                    <span className="block font-sans font-black italic text-6xl md:text-8xl lg:text-[9.5rem] tracking-tighter animate-fade-in-up opacity-0 leading-[1.1] ml-[-0.05em] py-2" style={{ animationDelay: '0.4s' }}>
                        {/* Wrapper for the gradient text and underline */}
                        <span className="relative inline-block z-10 group mr-[-10px] md:mr-[-20px]">
                            {/* Inner span with bg-clip-text - Fix for clipping maintained */}
                            <span className="relative z-20 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 inline-block pr-8 md:pr-14 pb-2">
                                最短距離
                            </span>
                            {/* Sharp laser underline */}
                            <div className="absolute bottom-4 left-0 w-[calc(100%-2rem)] md:w-[calc(100%-3.5rem)] h-[3px] bg-luxury-gold shadow-[0_0_15px_rgba(197,160,89,0.8)] transform origin-left scale-x-0 animate-[slide-in-right_1s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]"></div>
                        </span>
                        <span className="text-white not-italic font-serif font-light text-4xl md:text-6xl lg:text-[6rem] ml-4 md:ml-8 align-baseline">で。</span>
                    </span>
                </h1>

                {/* Sub-copy Area: Improved Readability */}
                <div className="mt-12 md:mt-16 max-w-xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
                    <div className="relative bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-sm border-l-2 border-luxury-gold hover:bg-black/60 transition-colors duration-500">
                        <p className="text-white text-sm md:text-base leading-loose tracking-wide font-normal">
                            ビジネスにおいて、第一印象は最大の資産となる。<br/>
                            痛みと時間を最小限に抑えた、<br/>
                            大人のための合理的脱毛体験を。
                        </p>
                    </div>

                    <div className="mt-10 pl-2">
                         <a 
                            href="#menu" 
                            className="inline-flex items-center justify-center gap-4 bg-white text-luxury-black px-12 py-5 text-sm font-bold tracking-widest hover:bg-luxury-gold transition-all duration-500 ease-out group relative overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">VIEW PLANS</span>
                            <div className="w-2 h-2 bg-luxury-black rounded-full group-hover:bg-white transition-colors"></div>
                            <div className="absolute inset-0 bg-luxury-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                        </a>
                        <p className="text-white/70 text-xs mt-4 tracking-wider pl-1 font-light">
                            * 初回トライアル ¥980 (税込)
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Vertical Text (Japanese Aesthetic) */}
            <div className="hidden md:flex md:col-span-3 justify-end h-full items-center relative">
                {/* Vertical Line */}
                <div className="absolute top-0 right-10 w-[1px] h-full bg-white/10"></div>
                
                <div className="writing-vertical text-right h-auto absolute right-0 top-1/2 transform -translate-y-1/2 pr-6 mix-blend-difference">
                    <span className="text-3xl lg:text-4xl font-display text-white/30 uppercase tracking-widest block mb-8 hover:text-white transition-colors duration-700">
                        Minimalist Intelligence
                    </span>
                    <span className="text-sm text-luxury-gold tracking-[0.3em] font-serif block">
                        銀座本店 / 完全個室 / 男性専門
                    </span>
                </div>
            </div>
        </div>

      </div>
      
      {/* Footer / Scroll Indicator area of Hero */}
      <div className="absolute bottom-0 w-full px-6 md:px-12 py-8 border-t border-white/5 flex justify-between items-end">
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