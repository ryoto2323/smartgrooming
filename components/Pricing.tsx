import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Check, RefreshCw, CalendarCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 'beard',
    title: 'ヒゲ脱毛セット',
    price: '980',
    description: '鼻下・あご・あご下・ほほ・もみあげ。第一印象を変える人気のセット。',
    popular: true
  },
  {
    id: 'vio',
    title: 'VIOセット',
    price: '5,000',
    description: 'デリケートゾーンを清潔に。ムレやニオイを解消し快適な日常へ。',
  },
  {
    id: 'body',
    title: '全身脱毛 (VIOなし)',
    price: '9,800',
    description: '顔とVIOを除く首から下の全身。清潔感のあるボディを手に入れる。',
  }
];

const SIMULATOR_ITEMS = [
    { id: 'beard', name: 'ヒゲ全体', price: 6000, initial: 980 },
    { id: 'legs', name: '足全体', price: 8000 },
    { id: 'arms', name: '腕全体', price: 6000 },
    { id: 'vio', name: 'VIO', price: 10000, initial: 5000 },
    { id: 'chest', name: '胸・腹', price: 6000 },
];

export const Pricing: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const RESERVATION_URL = "https://airrsv.net/demosite0000/calendar";
  
  const toggleItem = (id: string) => {
    setSelectedItems(prev => 
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, id) => {
        const item = SIMULATOR_ITEMS.find(i => i.id === id);
        return total + (item?.price || 0);
    }, 0);
  };

  return (
    <>
    <Section id="pricing" title="MENU & PRICE" subtitle="明確で通いやすい料金設定">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className={`
              relative bg-noble-800 rounded-lg p-8 border 
              ${service.popular ? 'border-noble-gold shadow-2xl shadow-noble-gold/10 transform md:-translate-y-4' : 'border-noble-700'}
              flex flex-col transition-transform hover:-translate-y-2 duration-300
            `}
          >
            {service.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-noble-gold text-noble-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-noble-400 text-sm mb-6 h-12">{service.description}</p>
            
            <div className="mb-6">
              <span className="text-sm text-noble-400">初回限定</span>
              <div className="flex items-baseline gap-1 text-noble-gold">
                <span className="text-2xl font-bold">¥</span>
                <span className="text-5xl font-bold tracking-tight">{service.price}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-3 text-noble-300 text-sm">
                <Check className="w-4 h-4 text-noble-gold" />
                <span>無料カウンセリング付き</span>
              </li>
              <li className="flex items-center gap-3 text-noble-300 text-sm">
                <Check className="w-4 h-4 text-noble-gold" />
                <span>肌トラブル保証あり</span>
              </li>
              <li className="flex items-center gap-3 text-noble-300 text-sm">
                <Check className="w-4 h-4 text-noble-gold" />
                <span>完全個室・プライバシー重視</span>
              </li>
            </ul>

            <Button 
                fullWidth 
                variant={service.popular ? 'primary' : 'outline'}
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
              予約する
            </Button>
          </div>
        ))}
      </div>

      {/* Interactive Simulator */}
      <div className="bg-luxury-black border border-white/10 rounded-sm p-8 md:p-12 reveal-on-scroll">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
             <div>
                 <span className="text-luxury-gold text-xs tracking-widest block mb-2">SIMULATION</span>
                 <h3 className="text-2xl text-white font-serif">料金シミュレーター</h3>
                 <p className="text-luxury-muted text-sm mt-2">気になる部位を選択して、概算料金を確認できます。</p>
             </div>
             <button 
                onClick={() => setSelectedItems([])}
                className="text-xs text-luxury-muted flex items-center gap-2 hover:text-white transition-colors"
             >
                 <RefreshCw size={14} /> リセット
             </button>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
             {SIMULATOR_ITEMS.map((item) => (
                 <button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`
                        p-4 rounded-sm border transition-all duration-300 relative overflow-hidden group
                        ${selectedItems.includes(item.id) 
                            ? 'bg-luxury-gold border-luxury-gold text-luxury-black' 
                            : 'bg-luxury-charcoal border-white/10 text-white hover:border-luxury-gold/50'}
                    `}
                 >
                     <span className="relative z-10 text-sm font-bold tracking-wide">{item.name}</span>
                     <span className={`block text-xs mt-1 relative z-10 ${selectedItems.includes(item.id) ? 'text-luxury-black/70' : 'text-luxury-muted'}`}>
                        ¥{item.price.toLocaleString()}
                     </span>
                 </button>
             ))}
         </div>

         <div className="flex flex-col md:flex-row items-center justify-between bg-white/[0.02] p-6 rounded-sm border border-white/5 gap-6">
             <div className="text-white text-sm">
                 選択中: {selectedItems.length}部位
             </div>
             <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full md:w-auto">
                 <div className="flex items-baseline gap-4">
                     <span className="text-luxury-muted text-sm">合計目安 (通常価格)</span>
                     <span className="text-4xl md:text-5xl font-display text-white">
                         ¥<span className="text-luxury-gold">{calculateTotal().toLocaleString()}</span>
                     </span>
                 </div>
                 
                 {/* Simulator CTA Button */}
                 {selectedItems.length > 0 && (
                     <a
                        href={RESERVATION_URL}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="w-full md:w-auto flex items-center justify-center gap-2 bg-luxury-gold text-luxury-black px-6 py-4 rounded-sm text-sm font-bold hover:bg-white transition-colors animate-fade-in"
                     >
                         <CalendarCheck className="w-4 h-4" />
                         この内容で空き状況を確認
                     </a>
                 )}
             </div>
         </div>
      </div>
      
      <div className="mt-12 text-center text-noble-400 text-sm">
        ※表示価格は全て税込です。※初回限定価格はお一人様1回限りとなります。
      </div>
    </Section>
    </>
  );
};