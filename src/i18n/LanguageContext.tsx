import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, type Language, type TranslationKey } from './translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('we-lang');
    if (saved && (saved === 'fr' || saved === 'en' || saved === 'ar')) return saved;
    return 'fr';
  });

  const [showArSuggest, setShowArSuggest] = useState(false);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('we-lang', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    return translations[lang][key] || translations.fr[key] || key;
  }, [lang]);

  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Detect Arabic browser
    if (!localStorage.getItem('we-lang') && navigator.language.startsWith('ar')) {
      setShowArSuggest(true);
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {showArSuggest && (
        <div className="fixed top-0 inset-x-0 z-[100] bg-primary text-primary-foreground py-2 px-4 flex items-center justify-center gap-4 text-sm">
          <span>{translations.fr.ar_suggest}</span>
          <button
            onClick={() => { setLang('ar'); setShowArSuggest(false); }}
            className="bg-accent text-accent-foreground px-3 py-1 rounded-md font-medium"
          >
            {translations.fr.ar_switch}
          </button>
          <button
            onClick={() => setShowArSuggest(false)}
            className="underline opacity-80"
          >
            {translations.fr.ar_dismiss}
          </button>
        </div>
      )}
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
