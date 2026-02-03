import React from 'react';
import { MapPin, Clock, Phone, Smartphone } from 'lucide-react';

export const Access: React.FC = () => {
  return (
    <section id="access" className="py-32 bg-luxury-black relative border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
            <div>
                <span className="text-luxury-gold text-xs tracking-[0.2em] block mb-2">LOCATION & CONTACT</span>
                <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">Access</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 reveal-on-scroll">
            {/* Map Area */}
            <div className="relative w-full aspect-square md:aspect-[16/9] lg:aspect-auto bg-luxury-charcoal rounded-sm overflow-hidden border border-white/10 group">
                {/* Google Maps Embed with Dark Filter */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754723143!2d139.7644220767576!3d35.67111497259062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be5454f5441%3A0x255653b4991192d!2z44CSMTA0LTAwNjEg5p2x5Lqs6YO95Lit5aSu5Yy66YqA5bqn77yR5LiB55uu77yS4oiS77yT!5e0!3m2!1sja!2sjp!4v1709255000000!5m2!1sja!2sjp" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="group-hover:filter-none transition-all duration-700"
                ></iframe>
                
                <div className="absolute top-4 left-4 bg-luxury-black/90 px-4 py-2 border border-white/10 pointer-events-none">
                    <span className="text-white text-xs tracking-widest">GINZA TOKYO</span>
                </div>
            </div>

            {/* Info Area */}
            <div className="flex flex-col justify-between">
                <div className="space-y-12">
                    {/* Address Info */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-2xl text-white mb-6">SMART GROOMING 銀座本店</h3>
                        
                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                            <p className="text-luxury-muted leading-relaxed">
                                〒104-0061<br/>
                                東京都中央区銀座 1-2-3 銀座ビル 5F<br/>
                                <span className="text-xs text-luxury-muted/60 mt-2 block">
                                    銀座一丁目駅 3番出口 徒歩1分 / 銀座駅 A13出口 徒歩4分
                                </span>
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                            <div className="text-luxury-muted">
                                <p>平日: 12:00 - 21:00</p>
                                <p>土日祝: 10:00 - 20:00</p>
                                <p className="text-xs text-luxury-muted/60 mt-1">定休日: 火曜日・年末年始</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                            <p className="text-white font-display text-xl tracking-widest">03-1234-5678</p>
                        </div>
                    </div>

                    {/* LINE CTA - Elegant Version */}
                    <div className="bg-[#06C755]/10 border border-[#06C755]/30 p-8 rounded-sm relative overflow-hidden group hover:bg-[#06C755]/20 transition-colors duration-500">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="w-16 h-16 bg-[#06C755] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(6,199,85,0.4)]">
                                <Smartphone className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-white font-bold text-lg mb-1">公式LINEでスマート予約</h4>
                                <p className="text-[#06C755] text-sm mb-4">初回予約で<span className="font-bold underline ml-1">¥500 OFFクーポン</span>プレゼント</p>
                                <button className="bg-[#06C755] text-white text-xs font-bold tracking-widest px-8 py-3 rounded-full hover:bg-[#05b34c] transition-colors w-full md:w-auto shadow-lg">
                                    友だち追加・予約する
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                    <p className="text-luxury-muted text-sm leading-relaxed">
                        ※施術中は電話に出られない場合がございます。お急ぎの方はLINE、または24時間対応のWeb予約フォームをご利用ください。
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};