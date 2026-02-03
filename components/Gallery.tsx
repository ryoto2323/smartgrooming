import React from 'react';

export const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://github.com/ryoto2323/smartgrooming/blob/main/ii.png?raw=true",
      title: "Private Room",
      desc: "完全個室の施術スペース"
    },
    {
      src: "https://github.com/ryoto2323/smartgrooming/blob/main/jj.png?raw=true",
      title: "Entrance",
      desc: "非日常への入り口"
    },
    {
      src: "https://github.com/ryoto2323/smartgrooming/blob/main/kk.png?raw=true",
      title: "Lounge",
      desc: "心を整える待合室"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-luxury-charcoal border-t border-white/5 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="mb-20 reveal-on-scroll text-center">
            <span className="text-luxury-gold text-xs tracking-[0.2em] block mb-2">ATMOSPHERE</span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 reveal-on-scroll">
            {images.map((img, i) => (
                <div key={i} className={`relative group overflow-hidden ${i === 1 ? 'md:mt-12' : ''}`}>
                    <div className="aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden rounded-sm relative">
                        <img 
                            src={img.src} 
                            alt={img.title} 
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        
                        {/* Overlay Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-white font-display text-2xl tracking-wide">{img.title}</h3>
                            <p className="text-luxury-muted text-xs mt-2">{img.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};