import React, { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Reasons } from './components/Reasons';
import { Flow } from './components/Flow';
import { Voice } from './components/Voice';
import { Staff } from './components/Staff';
import { Gallery } from './components/Gallery';
import { Technology } from './components/Technology';
import { Menu } from './components/Menu';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Access } from './components/Access';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { AiConsultant } from './components/AiConsultant';

// Define window.Lenis type
declare global {
  interface Window {
    Lenis: any;
  }
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Custom Cursor Logic
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Opening Loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    // 2. Scroll Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    setTimeout(() => {
        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    }, 2000); 

    // 3. Initialize Lenis Smooth Scroll
    let lenis: any = null;
    let lenisRafId: number;

    const initLenis = () => {
        if (typeof window.Lenis === 'function') {
            try {
                // Initialize with default settings which usually work best for global window scroll
                lenis = new window.Lenis({
                    duration: 1.2,
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    smoothWheel: true,
                });

                const raf = (time: number) => {
                    lenis.raf(time);
                    lenisRafId = requestAnimationFrame(raf);
                }
                lenisRafId = requestAnimationFrame(raf);
                console.log("Lenis initialized");
            } catch (error) {
                console.error("Lenis init failed:", error);
            }
        } else {
            // Retry once if script hasn't loaded yet
            setTimeout(() => {
                 if (typeof window.Lenis === 'function' && !lenis) {
                     initLenis();
                 }
            }, 500);
        }
    };

    initLenis();

    // 4. Mouse Move for Spotlight and Cursor target
    const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
        document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
        
        if (cursorDotRef.current) {
            cursorDotRef.current.style.left = `${e.clientX}px`;
            cursorDotRef.current.style.top = `${e.clientY}px`;
        }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseOver = (e: MouseEvent) => {
        if ((e.target as HTMLElement).tagName === 'A' || 
            (e.target as HTMLElement).tagName === 'BUTTON' ||
            (e.target as HTMLElement).closest('a') ||
            (e.target as HTMLElement).closest('button')) {
            cursorOutlineRef.current?.classList.add('hovered');
        } else {
            cursorOutlineRef.current?.classList.remove('hovered');
        }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      clearTimeout(timer);
      if (lenis) {
          lenis.destroy();
          cancelAnimationFrame(lenisRafId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      observer.disconnect();
    };
  }, []);

  const animateCursor = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const dx = mousePos.x - cursorPos.x;
      const dy = mousePos.y - cursorPos.y;
      
      setCursorPos(prev => ({
        x: prev.x + dx * 0.15, 
        y: prev.y + dy * 0.15
      }));
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [mousePos]);

  useEffect(() => {
    if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.left = `${cursorPos.x}px`;
        cursorOutlineRef.current.style.top = `${cursorPos.y}px`;
    }
  }, [cursorPos]);

  return (
    <div className="relative w-full min-h-screen">
      
      {/* Opening Loader */}
      <div className={`loader-curtain ${!isLoading ? 'loaded' : ''}`}>
        <div className="flex flex-col items-center">
            <span className="font-display text-4xl tracking-widest text-luxury-gold animate-pulse mb-4">SMART GROOMING</span>
            <div className="w-32 h-[1px] bg-white/20 overflow-hidden">
                <div className="w-full h-full bg-luxury-gold animate-[slide-in-right_1.5s_ease-in-out]"></div>
            </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div className="hidden md:block">
          <div ref={cursorDotRef} className="cursor-dot"></div>
          <div ref={cursorOutlineRef} className="cursor-outline"></div>
      </div>

      {/* Dynamic Backgrounds */}
      <div className="grain-overlay"></div>
      <div className="spotlight"></div>
      
      <Header />
      <main>
        <Hero />
        <Concept />
        <Reasons />
        <Flow />
        <Voice />
        <Staff />
        <Gallery />
        <Technology />
        <Pricing />
        <Menu />
        <FAQ />
        <Access />
      </main>
      <Footer />
      <FloatingCTA />
      <AiConsultant />
    </div>
  );
};

export default App;