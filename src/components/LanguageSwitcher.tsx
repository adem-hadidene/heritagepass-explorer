import { useLanguage } from '@/i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  const langs: Array<{ code: 'fr' | 'en' | 'ar'; label: string }> = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  return (
    <div dir="ltr" className="flex items-center bg-muted rounded-full p-0.5 gap-0.5">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
            lang === code
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
