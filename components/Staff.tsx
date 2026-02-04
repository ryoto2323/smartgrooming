import React from 'react';
import { STAFF_DATA } from '../constants/text';

export const Staff: React.FC = () => {
  return (
    <section id="staff" className="py-32 bg-luxury-charcoal border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll">
            <div>
                <span className="text-luxury-gold text-xs tracking-[0.2em] block mb-2">PROFESSIONAL</span>
                <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">Our Staff</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {STAFF_DATA.map((staff, index) => (
            <div key={staff.id} className={`reveal-on-scroll group cursor-pointer ${index === 1 ? 'md:mt-24' : ''}`}>
              <div className="img-zoom-container aspect-[3/4] w-full mb-8 relative">
                <img 
                  src={staff.image} 
                  alt={staff.name} 
                  loading="lazy"
                  decoding="async"
                  className="img-zoom-target w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 border border-white/5 group-hover:border-luxury-gold/50 transition-colors duration-500"></div>
              </div>
              <div className="pr-4">
                <div className="mb-4">
                    <div className="flex items-baseline gap-4 mb-2">
                        <h3 className="font-serif text-2xl text-white">{staff.name}</h3>
                        <span className="text-xs text-luxury-gold tracking-widest uppercase">{staff.role}</span>
                    </div>
                    {/* Qualification Badge */}
                    <div className="inline-block border border-white/20 px-3 py-1 text-[10px] text-luxury-muted tracking-wider">
                        {staff.qualification}
                    </div>
                </div>
                <p className="text-luxury-muted text-sm leading-loose border-t border-white/10 pt-4">
                  {staff.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};