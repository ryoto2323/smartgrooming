import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        
        {/* Brand */}
        <div className="space-y-6 max-w-sm">
          <h2 className="font-display text-3xl tracking-widest text-white">SMART GROOMING</h2>
          <p className="text-luxury-muted text-sm leading-relaxed">
            Minimalist Intelligence for Businessmen.<br/>
            合理的に、美しく。
          </p>
        </div>

        {/* Info */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
                 <h4 className="text-luxury-gold text-xs tracking-widest uppercase mb-4">LOCATION</h4>
                 <div className="space-y-2 text-sm text-luxury-muted">
                    <p className="flex items-start gap-3">
                        <MapPin size={16} className="text-luxury-gold mt-1 flex-shrink-0" />
                        <span>〒104-0061<br/>東京都中央区銀座 1-2-3<br/>銀座ビル 5F</span>
                    </p>
                    <p className="flex items-center gap-3">
                        <Phone size={16} className="text-luxury-gold flex-shrink-0" />
                        <span>03-1234-5678</span>
                    </p>
                 </div>
            </div>
            <div className="space-y-4">
                 <h4 className="text-luxury-gold text-xs tracking-widest uppercase mb-4">HOURS</h4>
                 <div className="space-y-2 text-sm text-luxury-muted">
                    <div className="flex justify-between w-48 border-b border-white/5 pb-1">
                        <span>WEEKDAY</span>
                        <span>12:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between w-48 border-b border-white/5 pb-1">
                        <span>WEEKEND</span>
                        <span>10:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between w-48 text-luxury-muted/50 pt-1">
                        <span>CLOSE</span>
                        <span>TUESDAY</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
      
      <div className="max-w-screen-xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-luxury-muted uppercase tracking-widest gap-4">
        <p>© 2024 SMART GROOMING.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};