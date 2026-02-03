import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  q: string;
  a: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-white/10 transition-colors duration-300 ${isOpen ? 'bg-white/[0.02]' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-start justify-between text-left focus:outline-none group px-4 md:px-0"
      >
        <div className="flex items-baseline gap-6 pr-8">
          <span className={`font-display text-2xl transition-colors duration-300 ${isOpen ? 'text-luxury-gold' : 'text-luxury-muted'}`}>Q.</span>
          <span className="font-serif text-lg md:text-xl text-white group-hover:text-luxury-gold transition-colors leading-relaxed tracking-wide">{q}</span>
        </div>
        <div className={`flex-shrink-0 pt-1 text-luxury-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex items-start gap-6 px-4 md:px-0">
           <span className="font-display text-2xl text-luxury-gold/50">A.</span>
           <p className="text-luxury-muted leading-loose tracking-wide font-light text-sm md:text-base pr-8 md:pr-16">{a}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "本当に痛みはありませんか？",
      a: "最新の冷却機能（-10℃）により、痛覚を一時的に鈍らせることで痛みを大幅に軽減しています。特に男性の太い毛に対しては、従来の熱破壊式に比べ、輪ゴムで弾かれた程度まで刺激を抑えています。ご不安な場合は、無料のテスト照射も可能です。"
    },
    {
      q: "どれくらいの期間で効果が出ますか？",
      a: "個人差はありますが、効果を実感し始めるのに3〜5回。毎日の髭剃りが不要になるレベルまでは15回前後が目安です。毛周期に合わせた最適なペース（2週間〜1ヶ月に1回）をご提案し、最短期間での完了を目指します。"
    },
    {
      q: "日焼けしていても施術できますか？",
      a: "当店の最新マシンは、毛のメラニン色素だけでなく毛包全体にアプローチする方式のため、ある程度の日焼け肌や色黒の肌でも施術可能です。ただし、直近での強い日焼け（赤みがある状態）の場合は、肌トラブルを避けるため延期をお願いすることがあります。"
    },
    {
      q: "強引な勧誘はありませんか？",
      a: "当店は「完全都度払い」を基本としており、高額なコース契約への強引な勧誘は一切行いません。美容室のように、必要な時に必要な分だけお支払いいただくシステムですので、安心してお越しください。"
    }
  ];

  return (
    <section id="faq" className="py-32 bg-luxury-black relative">
       {/* Decorative Lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block"></div>
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
            <span className="text-luxury-gold text-xs tracking-[0.2em] block mb-2">Q & A</span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">FAQ</h2>
        </div>
        
        <div className="reveal-on-scroll">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};