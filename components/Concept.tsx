import React, { useEffect, useRef, useState } from 'react';

export const Concept: React.FC = () => {
  const [hours, setHours] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const end = 3000;
        const duration = 2000;
        const incrementTime = duration / (end / 100); // Speed up
        
        const timer = setInterval(() => {
          start += 50; // increment by 50 for speed
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
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="concept" className="py-32 bg-luxury-black relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Broken Grid Layout */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8 reveal-on-scroll">
            <div className="relative">
                <span className="text-luxury-gold text-xs tracking-[0.2em] block mb-2">OUR PHILOSOPHY</span>
                {/* Large overlapping text */}
                <h2 className="font-display text-6xl md:text-8xl text-white/5 absolute -top-12 -left-4 -z-10 select-none">PHILOSOPHY</h2>
                <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider relative z-10">Minimalist Intelligence</h2>
            </div>
            <p className="text-luxury-muted text-sm mt-4 md:mt-0 max-w-md text-right md:text-left">
                無駄を削ぎ落とし、本質的な価値のみを追求する。
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Composition */}
            <div className="relative reveal-on-scroll">
                <div className="aspect-[4/5] w-full max-w-md ml-auto relative z-10 overflow-hidden group">
                    <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                        alt="Man in suit" 
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                    />
                    <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative Frame */}
                <div className="absolute top-12 -left-4 md:left-24 w-full h-full border border-luxury-gold/30 z-0 hidden md:block"></div>
                
                {/* Float Text */}
                <div className="absolute -bottom-8 -left-8 md:left-12 bg-luxury-charcoal p-6 md:p-8 max-w-xs shadow-2xl z-20 border-l-2 border-luxury-gold">
                    <p className="font-serif text-lg text-white leading-relaxed">
                        「時間」は、<br/>
                        最大の投資リソースだ。
                    </p>
                </div>
            </div>

            {/* Text Content */}
            <div className="space-y-12 reveal-on-scroll">
                <div className="space-y-6">
                    <h3 className="font-serif text-2xl md:text-3xl text-white leading-normal">
                        毎朝の髭剃りに、<br/>
                        人生の貴重な時間を奪われていないか。
                    </h3>
                    
                    <div ref={counterRef} className="py-6 border-y border-white/5 my-6">
                        <p className="text-luxury-muted text-xs tracking-widest mb-1">LIFETIME LOSS</p>
                        <div className="flex items-baseline gap-2">
                             <span className="text-6xl md:text-7xl font-display font-bold text-luxury-gold tabular-nums">
                                {hours.toLocaleString()}
                             </span>
                             <span className="text-xl text-white font-serif">Hours</span>
                        </div>
                         <p className="text-luxury-muted text-xs mt-2 text-right">生涯における髭剃り時間の損失概算</p>
                    </div>

                    <p className="text-luxury-muted leading-loose font-light tracking-wide text-justify">
                        これは一般的な男性が髭剃りに費やす時間と言われています。
                        さらに、カミソリによる肌へのダメージ、夕方の青ヒゲに対するストレス。<br/><br/>
                        SMART GROOMINGは、単なる「美容」を提案するのではありません。
                        ビジネスパーソンとしてのパフォーマンスを最大化するための、
                        <span className="text-white border-b border-luxury-gold pb-1 mx-1">「合理的投資」</span>としての脱毛を提案します。
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                    <div className="group">
                        <span className="block text-3xl font-display text-white group-hover:text-luxury-gold transition-colors mb-2">30<span className="text-sm ml-1">min</span></span>
                        <p className="text-xs text-luxury-muted">来店から退店まで。<br/>隙間時間で完了。</p>
                    </div>
                    <div className="group">
                        <span className="block text-3xl font-display text-white group-hover:text-luxury-gold transition-colors mb-2">0<span className="text-sm ml-1">yen</span></span>
                        <p className="text-xs text-luxury-muted">入会金・年会費・勧誘。<br/>余計なコストは一切なし。</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};