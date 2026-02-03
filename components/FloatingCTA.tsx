import React from 'react';
import { Smartphone } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-4 right-4 z-40 md:hidden animate-fade-in-up">
      <div className="flex gap-3">
        {/* LINE Button */}
        <a 
            href="#" 
            className="flex-1 bg-[#06C755] text-white flex flex-col items-center justify-center py-3 rounded-sm shadow-lg border border-white/10 active:scale-95 transition-transform"
        >
            <div className="flex items-center gap-2">
                <Smartphone size={16} />
                <span className="font-bold text-sm">LINE予約</span>
            </div>
            <span className="text-[10px] opacity-90 mt-0.5">500円OFF</span>
        </a>

        {/* Web Reserve Button */}
        <a 
          href="#menu" 
          className="flex-[2] btn-luxury bg-luxury-gold text-luxury-black flex flex-col items-center justify-center py-3 rounded-sm shadow-lg active:scale-95 transition-transform"
        >
          <span className="font-bold text-sm tracking-widest">WEB予約</span>
          <span className="text-[10px] opacity-80 mt-0.5">24時間受付中</span>
        </a>
      </div>
    </div>
  );
};