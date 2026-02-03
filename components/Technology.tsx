import React, { useEffect, useState, useRef } from 'react';

export const Technology: React.FC = () => {
  const [temp, setTemp] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let currentTemp = 0;
    const targetTemp = -10;
    const duration = 1500;
    const intervalTime = 50;
    const steps = duration / intervalTime;
    const decrement = targetTemp / steps;

    const timer = setInterval(() => {
      currentTemp += decrement;
      if (currentTemp <= targetTemp) {
        currentTemp = targetTemp;
        clearInterval(timer);
      }
      setTemp(Math.floor(currentTemp));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="technology" className="relative py-32 px-6 bg-black text-white overflow-hidden border-t border-white/5">
      
      {/* Animated Tech Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black"></div>
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 hidden md:block"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 hidden md:block"></div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto reveal-on-scroll">
        <div className="text-center mb-16">
            <span className="text-blue-400 text-xs tracking-[0.2em] block mb-2 font-mono">TECHNOLOGY</span>
            <h2 className="font-display text-4xl text-white tracking-wider">瞬間冷却システム</h2>
        </div>

        <div className="relative border border-white/10 p-8 md:p-16 bg-luxury-black/50 backdrop-blur-md rounded-sm overflow-hidden group">
          {/* Tech decoration lines */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 transition-all duration-500 group-hover:w-4 group-hover:h-4"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500 transition-all duration-500 group-hover:w-4 group-hover:h-4"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500 transition-all duration-500 group-hover:w-4 group-hover:h-4"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500 transition-all duration-500 group-hover:w-4 group-hover:h-4"></div>
          
          {/* Scanning Animation */}
          <div className="scan-line opacity-50"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="text-center md:text-left">
                <p className="text-luxury-muted text-xs font-mono mb-4 tracking-widest">TARGET TEMPERATURE</p>
                <div className="text-7xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400 leading-none tabular-nums tracking-tighter">
                    {temp}<span className="text-4xl font-light align-top ml-2">℃</span>
                </div>
            </div>
            
            <div className="flex-1 border-l border-white/10 pl-0 md:pl-12 pt-8 md:pt-0 border-t md:border-t-0">
                <h3 className="text-xl text-white font-serif mb-4">痛みを「無」に近づける。</h3>
                <p className="leading-loose text-luxury-muted font-light tracking-wide text-sm">
                    照射口をマイナス10℃まで瞬間冷却。
                    熱エネルギーを毛根に届けながら、皮膚表面の感覚を麻痺させることで、
                    男性特有の太く濃い毛へのハイパワー照射と、無痛に近い快適性を両立しました。
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};