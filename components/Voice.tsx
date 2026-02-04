import React from 'react';

export const Voice: React.FC = () => {
  const cases = [
    {
      id: 1,
      title: "毎朝の髭剃りからの解放",
      age: "30代 経営者",
      course: "ヒゲ全体セット (10回)",
      comment: "夕方の青ヒゲがコンプレックスでしたが、今は清潔感を保てています。商談時の印象も良くなり、毎朝の10分が浮いたことが最大の投資効果です。",
      imageBefore: "https://github.com/ryoto2323/smartgrooming/blob/main/bb.png?raw=true",
      imageAfter: "https://github.com/ryoto2323/smartgrooming/blob/main/cc.png?raw=true"
    },
    {
      id: 2,
      title: "カミソリ負けが完治",
      age: "20代 営業職",
      course: "デザインヒゲ脱毛 (6回)",
      comment: "肌が弱く、剃るたびに出血していましたが、脱毛してからは肌トラブルがゼロに。必要な部分だけ残すデザイン脱毛で、大人の色気も演出できています。",
      imageBefore: "https://github.com/ryoto2323/smartgrooming/blob/main/dd.png?raw=true",
      imageAfter: "https://github.com/ryoto2323/smartgrooming/blob/main/ee.png?raw=true"
    },
    {
      id: 3,
      title: "腕周りの清潔感が向上",
      age: "40代 医師",
      course: "全身脱毛 (8回)",
      comment: "半袖を着る際や、腕まくりをした時の清潔感が段違いです。痛みもほとんどなく、もっと早く始めればよかったと後悔しています。",
      imageBefore: "https://github.com/ryoto2323/smartgrooming/blob/main/ffa.png?raw=true",
      imageAfter: "https://github.com/ryoto2323/smartgrooming/blob/main/ff.png?raw=true"
    }
  ];

  return (
    <section id="voice" className="py-32 bg-luxury-black relative">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll">
            <div>
                <span className="text-luxury-gold text-xs tracking-[0.2em] block mb-2">CASE STUDY</span>
                <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">Before / After</h2>
            </div>
            <p className="text-luxury-muted text-sm mt-4 md:mt-0 max-w-md text-right md:text-left">
                確かな変化と、お客様の実感。
            </p>
        </div>

        <div className="space-y-24">
          {cases.map((item, i) => (
            <div key={i} className="group reveal-on-scroll">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    
                    {/* Visual Area */}
                    <div className="w-full lg:w-3/5 flex gap-4 md:gap-8 relative">
                        {/* Before */}
                        <div className="flex-1 relative">
                            <div className="aspect-[4/5] overflow-hidden rounded-sm relative grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img src={item.imageBefore} alt="Before" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                {/* Reduced overlay opacity to make the face/beard details more visible */}
                                <div className="absolute inset-0 bg-black/20"></div>
                                <span className="absolute top-4 left-4 bg-black/80 text-white text-[10px] tracking-widest px-3 py-1 border border-white/20">BEFORE</span>
                            </div>
                        </div>
                        
                        {/* Arrow */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center shadow-xl border-4 border-luxury-black">
                            <svg className="w-4 h-4 text-luxury-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>

                        {/* After */}
                        <div className="flex-1 relative">
                            <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                                <img src={item.imageAfter} alt="After" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
                                <span className="absolute top-4 left-4 bg-luxury-gold text-luxury-black text-[10px] font-bold tracking-widest px-3 py-1 shadow-lg">AFTER</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-2/5 space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-luxury-gold font-display text-4xl italic opacity-50">0{item.id}</span>
                                <div className="h-[1px] flex-1 bg-white/10"></div>
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                            <div className="flex flex-wrap gap-4 text-xs tracking-widest text-luxury-muted uppercase mb-6">
                                <span className="border border-white/10 px-3 py-1">{item.age}</span>
                                <span className="border border-white/10 px-3 py-1 bg-white/5">{item.course}</span>
                            </div>
                            <p className="text-luxury-muted leading-loose font-light text-sm text-justify relative">
                                <span className="absolute -top-4 -left-2 text-4xl text-white/5 font-serif">“</span>
                                {item.comment}
                            </p>
                        </div>
                        
                        {/* Visual Data Representation (Fake Graph/Meter for effect) */}
                        <div className="bg-luxury-charcoal p-4 rounded-sm border border-white/5">
                            <div className="flex justify-between text-[10px] text-luxury-muted uppercase tracking-widest mb-2">
                                <span>清潔感</span>
                                <span className="text-luxury-gold">98%</span>
                            </div>
                            <div className="w-full h-1 bg-black rounded-full overflow-hidden">
                                <div className="w-[98%] h-full bg-luxury-gold"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-luxury-muted uppercase tracking-widest mt-4 mb-2">
                                <span>満足度</span>
                                <span className="text-luxury-gold">100%</span>
                            </div>
                            <div className="w-full h-1 bg-black rounded-full overflow-hidden">
                                <div className="w-[100%] h-full bg-luxury-gold"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};