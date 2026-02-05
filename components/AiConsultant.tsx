import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, RotateCcw, CalendarCheck } from 'lucide-react';
import { getGeminiStream } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const STORAGE_KEY = 'smart_grooming_chat_history';
const RESERVATION_URL = "https://airrsv.net/demosite0000/calendar";

export const AiConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return [{
      id: 'welcome',
      role: 'model',
      text: 'いらっしゃいませ。SMART GROOMINGのAIコンシェルジュです。プランの相談や、脱毛に関する疑問など、どのようなことでもお申し付けください。',
      timestamp: new Date().toISOString()
    }];
  });

  const [inputValue, setInputValue] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "痛みはありますか？",
    "料金プランを知りたい",
    "予約の方法は？",
    "未成年でも平気？"
  ];

  useEffect(() => {
    if (!isTyping) {
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        } catch (e) {}
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
        if (!isOpen && !hasInteracted && messages.length <= 1) {
            setUnreadCount(1);
        }
    }, 10000); 
    return () => clearTimeout(timer);
  }, [isOpen, hasInteracted, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, loadingState]);

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
        setUnreadCount(0);
        setHasInteracted(true);
    }
  }, [isOpen]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim() || loadingState === LoadingState.LOADING || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setLoadingState(LoadingState.LOADING);
    setHasInteracted(true);

    try {
      const historyForApi = messages.map(m => ({ role: m.role, text: m.text }));
      const responseStream = await getGeminiStream(historyForApi, userMsg.text);
      
      setLoadingState(LoadingState.SUCCESS);
      setIsTyping(true);

      const aiMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {
        id: aiMsgId,
        role: 'model',
        text: '',
        timestamp: new Date().toISOString()
      }]);

      let fullResponse = '';
      for await (const chunk of responseStream) {
        const chunkText = chunk.text;
        if (chunkText) {
          // ストリームの各チャンク内でもさらに一文字ずつ表示することで、より滑らかなタイプライター効果を演出
          const chars = chunkText.split('');
          for (const char of chars) {
            fullResponse += char;
            setMessages(prev => prev.map(msg => 
              msg.id === aiMsgId ? { ...msg, text: fullResponse } : msg
            ));
            // 速度向上のためディレイを短縮（30ms -> 10ms）
            await new Promise(resolve => setTimeout(resolve, 10));
          }
        }
      }
      setIsTyping(false);
    } catch (error) {
      console.error(error);
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleRetry = () => {
    const lastUserMessage = [...messages].reverse().find(m => m.role === 'user');
    if (lastUserMessage) handleSend(lastUserMessage.text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-[100] flex flex-col items-end pointer-events-none">
      {!isOpen && unreadCount > 0 && (
          <div className="pointer-events-auto mb-4 bg-white text-luxury-black p-4 rounded-sm shadow-xl animate-fade-in-up max-w-[250px] relative border-l-4 border-luxury-gold">
              <p className="text-xs font-bold mb-1">AI Concierge</p>
              <p className="text-sm">料金シミュレーションや、痛みの不安についてお答えしましょうか？</p>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
              <button onClick={() => setIsOpen(true)} className="absolute inset-0 w-full h-full" aria-label="Open Chat"></button>
          </div>
      )}

      {isOpen && (
        <div className="pointer-events-auto mb-4 w-[90vw] md:w-96 h-[600px] max-h-[60vh] md:max-h-[80vh] bg-luxury-black/95 backdrop-blur-xl rounded-sm shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right transition-all">
          <div className="bg-luxury-charcoal p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-luxury-gold/10 rounded-full border border-luxury-gold/20 relative">
                <Sparkles className="w-4 h-4 text-luxury-gold" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-luxury-charcoal"></span>
              </div>
              <div>
                <h3 className="text-white font-serif text-sm tracking-wide">AI Concierge</h3>
                <p className="text-[10px] text-luxury-muted uppercase tracking-widest">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-luxury-muted hover:text-white transition-colors" aria-label="Close Chat">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-transparent scrollbar-thin scrollbar-thumb-luxury-gold/20">
            {messages.map((msg, index) => {
              const isLastMessage = index === messages.length - 1;
              const showReservationChip = msg.role === 'model' && isLastMessage && !isTyping && msg.text.length > 0;

              return (
                <div key={msg.id} className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`flex gap-3 max-w-[90%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        {msg.role === 'model' && (
                            <div className="w-8 h-8 rounded-full border border-luxury-gold/30 flex items-center justify-center flex-shrink-0 bg-luxury-black mt-1">
                                <Sparkles className="w-4 h-4 text-luxury-gold" />
                            </div>
                        )}
                        <div className={`p-4 text-sm leading-loose font-light tracking-wide ${msg.role === 'model' ? 'bg-luxury-charcoal text-luxury-text rounded-sm border border-white/5 rounded-tl-none' : 'bg-luxury-gold text-luxury-black rounded-sm font-medium rounded-tr-none shadow-[0_0_15px_rgba(197,160,89,0.3)]'}`}>
                          {msg.text}
                          {msg.role === 'model' && isLastMessage && isTyping && (
                              <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-luxury-gold/70 animate-pulse"></span>
                          )}
                        </div>
                    </div>
                    {showReservationChip && (
                         <div className="pl-11 animate-fade-in-up">
                            <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-luxury-gold/10 hover:bg-luxury-gold/20 border border-luxury-gold/30 text-luxury-gold text-xs px-4 py-2 rounded-full transition-colors">
                                <CalendarCheck className="w-3 h-3" />
                                予約ページへ進む
                            </a>
                        </div>
                    )}
                </div>
              );
            })}
            
            {loadingState === LoadingState.LOADING && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full border border-luxury-gold/30 flex items-center justify-center flex-shrink-0 bg-luxury-black">
                    <Sparkles className="w-4 h-4 text-luxury-gold" />
                </div>
                <div className="bg-luxury-charcoal rounded-sm p-4 border border-white/5 flex items-center">
                  <Loader2 className="w-4 h-4 text-luxury-muted animate-spin" />
                  <span className="text-xs text-luxury-muted ml-3 tracking-widest">Thinking...</span>
                </div>
              </div>
            )}
            
            {loadingState === LoadingState.ERROR && (
                <div className="text-center">
                    <button onClick={handleRetry} className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-xs border border-red-500/30 px-3 py-1 rounded-sm bg-red-500/10 transition-colors">
                        <RotateCcw className="w-3 h-3" />
                        メッセージの送信に失敗しました。再試行する
                    </button>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 py-2 bg-luxury-black/50 overflow-x-auto flex gap-2 no-scrollbar border-t border-white/5">
            {suggestions.map((suggestion, idx) => (
                <button key={idx} onClick={() => handleSend(suggestion)} disabled={loadingState === LoadingState.LOADING || isTyping} className="flex-shrink-0 text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 text-luxury-muted hover:text-white px-3 py-2 rounded-full transition-colors whitespace-nowrap">
                    {suggestion}
                </button>
            ))}
          </div>

          <div className="p-4 bg-luxury-black border-t border-white/10">
            <div className="flex gap-2">
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} placeholder="メッセージを入力..." className="flex-1 bg-luxury-charcoal border border-white/10 text-white placeholder-luxury-muted/50 text-sm rounded-sm focus:ring-1 focus:ring-luxury-gold focus:border-luxury-gold p-3 outline-none transition-colors" disabled={loadingState === LoadingState.LOADING || isTyping} />
              <button onClick={() => handleSend()} disabled={!inputValue.trim() || loadingState === LoadingState.LOADING || isTyping} className="bg-luxury-gold text-luxury-black p-3 rounded-sm hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Send Message">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close Chat" : "Open AI Concierge"} className={`pointer-events-auto group flex items-center gap-3 bg-luxury-gold hover:bg-white text-luxury-black px-6 py-4 rounded-sm shadow-2xl shadow-luxury-gold/20 transition-all duration-500 ease-out hover:-translate-y-1 ${isOpen ? 'bg-white text-luxury-black' : ''}`}>
        <span className="font-bold text-xs tracking-widest hidden md:block">{isOpen ? 'CLOSE' : 'AI CONCIERGE'}</span>
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
        {!isOpen && unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        )}
      </button>
    </div>
  );
};
