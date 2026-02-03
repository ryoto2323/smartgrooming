import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after a few seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <Section id="contact" title="CONTACT" subtitle="ご予約・お問い合わせ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white mb-6">NOBLE 銀座本店</h3>
          
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-noble-gold mt-1 flex-shrink-0" />
            <div>
              <p className="text-white font-medium">住所</p>
              <p className="text-noble-300">〒104-0061<br />東京都中央区銀座1-1-1 NOBLEビル 3F</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-noble-gold mt-1 flex-shrink-0" />
            <div>
              <p className="text-white font-medium">電話番号</p>
              <p className="text-noble-300 text-xl">03-1234-5678</p>
              <p className="text-noble-500 text-sm">受付時間: 11:00 - 20:00 (火曜定休)</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-noble-gold mt-1 flex-shrink-0" />
            <div>
              <p className="text-white font-medium">メール</p>
              <p className="text-noble-300">info@noble-salon.jp</p>
            </div>
          </div>

          <div className="bg-noble-800 p-6 rounded-lg border border-noble-700 mt-8">
             <p className="text-noble-300 text-sm mb-4">
               お電話でのご予約が混み合っている場合は、下記のWebフォーム、または右下のAIカウンセラーをご利用ください。
             </p>
          </div>
        </div>

        {/* Form */}
        <form className="bg-noble-800 p-8 rounded-lg border border-noble-700 space-y-6 relative" onSubmit={handleSubmit}>
           {isSubmitted && (
             <div className="absolute inset-0 bg-noble-800/95 z-10 flex flex-col items-center justify-center rounded-lg animate-fade-in text-center p-6">
               <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
               <h4 className="text-xl font-bold text-white mb-2">送信完了</h4>
               <p className="text-noble-300">お問い合わせありがとうございます。<br/>内容を確認次第、担当者よりご連絡いたします。</p>
             </div>
           )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-noble-300 mb-2">お名前</label>
            <input type="text" id="name" required className="w-full bg-noble-900 border border-noble-600 rounded-sm px-4 py-3 text-white focus:ring-1 focus:ring-noble-gold focus:border-noble-gold outline-none transition-colors" placeholder="山田 太郎" />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-noble-300 mb-2">メールアドレス</label>
            <input type="email" id="email" required className="w-full bg-noble-900 border border-noble-600 rounded-sm px-4 py-3 text-white focus:ring-1 focus:ring-noble-gold focus:border-noble-gold outline-none transition-colors" placeholder="tarou@example.com" />
          </div>

          <div>
            <label htmlFor="menu" className="block text-sm font-medium text-noble-300 mb-2">ご希望メニュー</label>
            <select id="menu" className="w-full bg-noble-900 border border-noble-600 rounded-sm px-4 py-3 text-white focus:ring-1 focus:ring-noble-gold focus:border-noble-gold outline-none transition-colors">
              <option>ヒゲ脱毛セット</option>
              <option>VIOセット</option>
              <option>全身脱毛</option>
              <option>無料カウンセリング</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-noble-300 mb-2">お問い合わせ内容</label>
            <textarea id="message" rows={4} className="w-full bg-noble-900 border border-noble-600 rounded-sm px-4 py-3 text-white focus:ring-1 focus:ring-noble-gold focus:border-noble-gold outline-none transition-colors" placeholder="ご質問やご希望の日時など"></textarea>
          </div>

          <Button fullWidth type="submit" className="mt-4" disabled={isSubmitting}>
            {isSubmitting ? '送信中...' : '送信する'}
          </Button>
        </form>
      </div>
    </Section>
  );
};