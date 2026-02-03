import React from 'react';
import { Section } from './Section';
import { ShieldCheck, Zap, UserCheck, Clock } from 'lucide-react';

const FEATURES = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "痛みを最小限に",
    desc: "最新のSHR方式と強力な冷却機能で、男性特有の太い毛でも痛みをほとんど感じません。"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "スピーディーな施術",
    desc: "連射式マシンにより施術時間を大幅短縮。全身脱毛でも約60分で完了します。"
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "男性スタッフ在籍",
    desc: "VIOなどデリケートな部位も安心。男性ならではの悩みも気兼ねなくご相談いただけます。"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "明確な料金体系",
    desc: "入会金・年会費・キャンセル料は一切なし。表示価格以外の追加費用はかかりません。"
  }
];

export const Features: React.FC = () => {
  return (
    <Section id="about" title="CONCEPT" subtitle="選ばれる4つの理由" dark>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feature, index) => (
          <div key={index} className="bg-noble-800/50 p-6 rounded-lg hover:bg-noble-800 transition-colors duration-300 border border-noble-800 hover:border-noble-700 group">
            <div className="w-16 h-16 bg-noble-900 rounded-full flex items-center justify-center text-noble-gold mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-black/50">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-noble-400 leading-relaxed text-sm">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};