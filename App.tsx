import React, { useEffect, useState, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { FloatingCTA } from './components/FloatingCTA';
import { Footer } from './components/Footer';

// Lazy Load heavy/below-the-fold components
const Reasons = React.lazy(() => import('./components/Reasons').then(module => ({ default: module.Reasons })));
const Flow = React.lazy(() => import('./components/Flow').then(module => ({ default: module.Flow })));
const Voice = React.lazy(() => import('./components/Voice').then(module => ({ default: module.Voice })));
const Staff = React.lazy(() => import('./components/Staff').then(module => ({ default: module.Staff })));
const Gallery = React.lazy(() => import('./components/Gallery').then(module => ({ default: module.Gallery })));
const Technology = React.lazy(() => import('./components/Technology').then(module => ({ default: module.Technology })));
const Menu = React.lazy(() => import('./components/Menu').then(module => ({ default: module.Menu })));
const Pricing = React.lazy(() => import('./components/Pricing').then(module => ({ default: module.Pricing })));
const FAQ = React.lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const Access = React.lazy(() => import('./components/Access').then(module => ({ default: module.Access })));
const AiConsultant = React.lazy(() => import('./components/AiConsultant').then(module => ({ default: module.AiConsultant })));

// Loading Component for Suspense
const SectionLoader = () => (
    <div className="py-20 flex justify-center items-center bg-luxury-black">
        <div className="w-8 h-8 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  useEffect(() => {
    // Scroll Observer Logic
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

    // Attach observer after loading
    if (!isLoading) {
        setTimeout(() => {
            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        }, 100);
    }

    return () => {
        observer.disconnect();
    };
  }, [isLoading]);

  // True Preloader Logic
  useEffect(() => {
      // Maximum wait time of 5 seconds (failsafe)
      const maxWait = setTimeout(() => {
          setIsLoading(false);
      }, 5000);

      // Minimum wait time of 1.5 seconds for branding impact
      const minWait = new Promise(resolve => setTimeout(resolve, 1500));

      if (heroImageLoaded) {
          minWait.then(() => {
              clearTimeout(maxWait);
              setIsLoading(false);
          });
      }

      return () => clearTimeout(maxWait);
  }, [heroImageLoaded]);

  return (
    <div className="relative w-full min-h-screen">
      
      {/* Opening Loader */}
      <div className={`loader-curtain ${!isLoading ? 'loaded' : ''}`}>
      </div>

      {/* Dynamic Backgrounds - Grain only */}
      <div className="grain-overlay"></div>
      
      <Header />
      <main>
        {/* Pass callback to Hero to detect image load */}
        <Hero onImageLoad={() => setHeroImageLoaded(true)} />
        <Concept />
        
        <Suspense fallback={<SectionLoader />}>
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
        </Suspense>
      </main>
      
      <Footer />
      <FloatingCTA />
      
      <Suspense fallback={null}>
        <AiConsultant />
      </Suspense>
    </div>
  );
};

export default App;