import React from 'react';

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-32 bg-luxury-black relative">
      <div className="max-w-screen-lg mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20 reveal-on-scroll">
            <span className="text-luxury-gold text-xs tracking-[0.2em] block mb-2">PRICE LIST</span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-6">Menu</h2>
            <p className="text-luxury-muted text-sm">必要なのは、来店時の支払いのみ。</p>
        </div>

        {/* Trial Card - Premium Look */}
        <div className="bg-gradient-to-br from-luxury-charcoal to-luxury-black border border-luxury-gold/30 p-8 md:p-12 mb-16 relative overflow-hidden reveal-on-scroll shadow-2xl">
            <div className="absolute top-0 right-0 p-4 bg-luxury-gold text-luxury-black text-xs font-bold tracking-widest">
                FIRST TIME
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="text-center md:text-left">
                    <h3 className="font-serif text-2xl text-white mb-2">ヒゲ脱毛 トライアル</h3>
                    <p className="text-luxury-muted text-sm">顔全体（鼻下・あご・あご下・頬・もみあげ・首）</p>
                </div>
                <div className="flex items-baseline gap-4">
                    <span className="text-luxury-muted line-through text-sm">¥8,800</span>
                    <span className="font-display text-5xl text-luxury-gold">¥980</span>
                    <span className="text-luxury-muted text-xs">(tax in)</span>
                </div>
            </div>
             {/* Decorative shine */}
             <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 left-[-100%] animate-[shine_8s_infinite]"></div>
        </div>

        {/* Regular Menu - Dotted Leader Style */}
        <div className="space-y-12 reveal-on-scroll">
            <div>
                <h4 className="text-white text-lg border-b border-white/10 pb-2 mb-6 tracking-widest inline-block">FACIAL</h4>
                <ul className="space-y-6">
                    <MenuItem name="デザインヒゲ（3部位）" price="¥6,600" desc="あご・鼻下など、必要な部位だけを選択" />
                    <MenuItem name="顔全体パーフェクト" price="¥8,800" desc="顔の印象を劇的に変えるフルセット" />
                </ul>
            </div>
            
            <div>
                <h4 className="text-white text-lg border-b border-white/10 pb-2 mb-6 tracking-widest inline-block">BODY</h4>
                <ul className="space-y-6">
                    <MenuItem name="ビジネスハンド（指・甲）" price="¥3,300" desc="名刺交換や商談時に目立つ手元をケア" />
                    <MenuItem name="全身脱毛（VIO・顔なし）" price="¥22,000" desc="服の下の清潔感を極める" />
                </ul>
            </div>
        </div>
        
        <p className="text-center text-xs text-luxury-muted mt-16 tracking-wider opacity-60">
            ※表示価格は全て税込です。追加料金は一切ございません。
        </p>

      </div>
    </section>
  );
};

const MenuItem = ({ name, price, desc }: { name: string, price: string, desc: string }) => (
    <li className="group">
        <div className="flex items-end justify-between mb-1">
            <span className="text-white font-serif text-lg tracking-wide bg-luxury-black pr-4 z-10 relative">{name}</span>
            <div className="flex-1 border-b border-dotted border-white/20 mb-2 mx-2"></div>
            <span className="text-luxury-gold font-display text-xl bg-luxury-black pl-4 z-10 relative">{price}</span>
        </div>
        <p className="text-xs text-luxury-muted">{desc}</p>
    </li>
);