import React from 'react';

export const Reasons: React.FC = () => {
  const reasons = [
    {
      id: "01",
      en: "Speed & Efficiency",
      jp: "圧倒的なスピードと効率",
      desc: "最新の連射式脱毛機を導入し、施術時間を劇的に短縮。忙しいビジネスマンの貴重な時間を奪いません。"
    },
    {
      id: "02",
      en: "Cost Performance",
      jp: "完全都度払いの明朗会計",
      desc: "高額なローン契約は一切なし。美容室のように「来た分だけ支払う」システムで、キャッシュフローを圧迫しません。"
    },
    {
      id: "03",
      en: "Private & Luxury",
      jp: "完全個室のプライベート空間",
      desc: "他人の目を気にすることなく、リラックスして過ごせる空間設計。誰とも顔を合わせない動線を確保しています。"
    }
  ];

  return (
    <section id="reasons" className="py-32 bg-luxury-charcoal relative">
        {/* Background Texture */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-luxury-gray via-luxury-black to-transparent opacity-50"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 reveal-on-scroll">
            <span className="text-luxury-gold text-xs tracking-[0.2em] block mb-2">WHY CHOOSE US</span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">The Standard</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="group relative reveal-on-scroll border-b border-white/5 pb-12 last:border-0 hover:bg-white/[0.02] transition-colors p-6 -mx-6 rounded-sm">
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                
                {/* Number */}
                <span className="font-display text-5xl text-luxury-gold/20 group-hover:text-luxury-gold transition-colors duration-500">
                    {reason.id}
                </span>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                        <span className="tracking-wide">{reason.en}</span>
                        <span className="text-sm md:text-base text-luxury-muted font-sans font-normal tracking-normal border-l-0 md:border-l border-white/20 pl-0 md:pl-6">{reason.jp}</span>
                    </h3>
                    <p className="text-luxury-muted mt-4 leading-loose max-w-2xl font-light">
                        {reason.desc}
                    </p>
                </div>

                {/* Arrow Icon */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500">
                    <span className="text-luxury-gold text-2xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};