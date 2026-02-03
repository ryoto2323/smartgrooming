import React from 'react';

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
          {/* Staff 01 */}
          <div className="reveal-on-scroll group cursor-pointer">
            <div className="img-zoom-container aspect-[3/4] w-full mb-8 relative">
              <img 
                src="https://placehold.co/600x800/1a1a1a/FFF?text=Manager" 
                alt="佐藤 健一" 
                className="img-zoom-target w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 border border-white/5 group-hover:border-luxury-gold/50 transition-colors duration-500"></div>
            </div>
            <div className="pr-4">
              <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="font-serif text-2xl text-white">佐藤 健一</h3>
                  <span className="text-xs text-luxury-gold tracking-widest uppercase">Salon Manager</span>
              </div>
              <p className="text-luxury-muted text-sm leading-loose border-t border-white/10 pt-4">
                「痛みへの配慮」を最優先に。かつて私自身がヒゲに悩んだ経験から、お客様一人ひとりの肌質に合わせた最適な出力設定を見極めます。脱毛は痛い、という常識を変えてみせます。
              </p>
            </div>
          </div>

          {/* Staff 02 */}
          <div className="reveal-on-scroll group cursor-pointer md:mt-24">
            <div className="img-zoom-container aspect-[3/4] w-full mb-8 relative">
              <img 
                src="https://placehold.co/600x800/2a2a2a/FFF?text=Chief" 
                alt="田中 美咲" 
                className="img-zoom-target w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
               <div className="absolute inset-0 border border-white/5 group-hover:border-luxury-gold/50 transition-colors duration-500"></div>
            </div>
            <div className="pr-4">
               <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="font-serif text-2xl text-white">田中 美咲</h3>
                  <span className="text-xs text-luxury-gold tracking-widest uppercase">Chief Staff</span>
              </div>
              <p className="text-luxury-muted text-sm leading-loose border-t border-white/10 pt-4">
                女性目線での「好感度」を追求したデザイン提案が得意です。清潔感はもちろん、お顔立ちに合わせたヒゲの濃さや形の調整など、細部までこだわり抜いた施術を提供いたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};