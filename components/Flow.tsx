import React from 'react';
import { Calendar, MessageSquare, Search, Zap, CreditCard } from 'lucide-react';

export const Flow: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Reservation",
      jp: "ご予約",
      desc: "Webフォーム、またはLINEよりご予約ください。完全予約制のため、他のお客様と顔を合わせることはありません。",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      num: "02",
      title: "Counseling",
      jp: "カウンセリング",
      desc: "専任スタッフが毛の悩みや肌質をヒアリング。毛周期や脱毛の仕組みについて丁寧にご説明します。",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      num: "03",
      title: "Skin Check",
      jp: "肌診断・テスト照射",
      desc: "肌の状態を確認し、パッチテストを行います。痛みの感じ方を確認してからの施術となるため安心です。",
      icon: <Search className="w-6 h-6" />
    },
    {
      num: "04",
      title: "Treatment",
      jp: "施術（冷却・照射）",
      desc: "専用ジェルを塗布し、-10℃の冷却ヘッドで肌を冷やしながら照射。スピーディーかつ丁寧に打ち漏らしなく行います。",
      icon: <Zap className="w-6 h-6" />
    },
    {
      num: "05",
      title: "Aftercare",
      jp: "アフターケア・お会計",
      desc: "保湿ケアを行い、肌を鎮静させます。お会計は都度払いのみ。次回のご予約も可能です。",
      icon: <CreditCard className="w-6 h-6" />
    }
  ];

  return (
    <section id="flow" className="py-32 bg-luxury-charcoal relative overflow-hidden">
      {/* Background Decorative Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 z-0 transform md:-translate-x-1/2"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 reveal-on-scroll">
            <span className="text-luxury-gold text-xs tracking-[0.2em] block mb-2">PROCESS</span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">Flow</h2>
        </div>

        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <div key={step.num} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 reveal-on-scroll ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Center Marker */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-luxury-black border border-luxury-gold z-20 mt-1 md:mt-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></div>
              </div>

              {/* Content Box */}
              <div className={`flex-1 w-full pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                <div className="group p-6 md:p-8 bg-white/[0.02] border border-white/5 hover:border-luxury-gold/30 transition-colors rounded-sm relative overflow-hidden">
                   {/* Icon Background */}
                   <div className={`absolute top-0 bottom-0 w-1 bg-luxury-gold/50 transition-all duration-500 group-hover:w-full group-hover:opacity-5 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}></div>

                   <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="font-display text-4xl text-luxury-gold/20 group-hover:text-luxury-gold transition-colors">{step.num}</span>
                            <h3 className="text-xl font-serif text-white">{step.jp}</h3>
                        </div>
                        <p className="text-luxury-muted text-sm leading-loose font-light">
                            {step.desc}
                        </p>
                   </div>
                </div>
              </div>

              {/* Spacer for alternate side */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};