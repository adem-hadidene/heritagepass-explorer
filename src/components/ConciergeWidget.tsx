import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { MessageCircle, X, Send } from 'lucide-react';

const ConciergeWidget = () => {
  const { t, isRTL } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');

  const suggestions = [t('concierge_q1'), t('concierge_q2'), t('concierge_q3')];

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { text, isUser: true },
      { text: '...', isUser: false },
    ]);
    setInput('');
    // Simulate response
    setTimeout(() => {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          text: "Merci pour votre question ! Notre concierge IA sera bientôt disponible pour vous aider. 🏛️",
          isUser: false,
        };
        return updated;
      });
    }, 1500);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all flex items-center justify-center`}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className={`fixed bottom-24 ${isRTL ? 'left-6' : 'right-6'} z-50 w-80 md:w-96 bg-card rounded-2xl shadow-[var(--shadow-elevated)] border border-border overflow-hidden animate-fade-in-up`}
        >
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg">
              🏛
            </div>
            <div>
              <div className="font-heading font-semibold text-sm">{t('concierge_title')}</div>
              <div className="text-[10px] opacity-70 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                {t('concierge_available')}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {/* Welcome */}
            <div className="bg-muted rounded-xl rounded-tl-none px-3 py-2 text-sm text-foreground max-w-[80%]">
              {t('concierge_welcome')}
            </div>

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    msg.isUser
                      ? 'bg-primary text-primary-foreground rounded-tr-none'
                      : 'bg-muted text-foreground rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          {messages.length === 0 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {suggestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-[11px] px-2.5 py-1 bg-muted text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder={t('concierge_placeholder')}
              className="flex-1 px-3 py-2 text-sm bg-muted rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={() => sendMessage(input)}
              className="w-9 h-9 flex items-center justify-center bg-primary text-primary-foreground rounded-lg hover:opacity-90"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConciergeWidget;
