import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      const { clientX, clientY } = e;

      // Direct movement for the dot (immediate)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
      }

      // Smooth lag for the circle cursor
      if (cursorRef.current) {
        cursorRef.current.animate({
          transform: `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`
        }, {
          duration: 500,
          fill: "forwards",
          easing: "ease-out"
        });
      }

      // Very smooth, slow movement for ambient orb
      if (orbRef.current) {
         orbRef.current.animate({
            transform: `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`
         }, {
            duration: 3000,
            fill: "forwards",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)"
         });
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.classList.contains('cursor-hover')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible && typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches) {
      return null;
  }

  return (
    <>
      {/* Ambient Orb Light - attached to mouse area but slow */}
      <div ref={orbRef} className="ambient-orb hidden md:block"></div>
      
      {/* Interactive Cursor */}
      <div 
        ref={cursorRef} 
        className={`custom-cursor hidden md:block ${isHovered ? 'hovered' : ''}`} 
      />
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
    </>
  );
};