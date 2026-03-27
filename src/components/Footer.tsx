import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-heading font-bold mb-2">
              <span className="text-primary">Weekend</span>{' '}
              <span className="text-accent">Explorer</span>
            </h3>
            <p className="text-sm opacity-60 mb-4">HeritagePass</p>
            {/* Newsletter */}
            <div className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder={t('footer_newsletter')}
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-background/10 border border-background/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90">
                {t('footer_subscribe')}
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <a href="#" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">{t('footer_partners')}</a>
            <a href="#" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">{t('footer_about')}</a>
            <a href="#" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">{t('footer_contact')}</a>
            <a href="#" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">{t('footer_blog')}</a>
          </div>

          {/* Social */}
          <div className="flex gap-4 items-start">
            {['facebook', 'instagram', 'twitter'].map((s) => (
              <a key={s} href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-xs uppercase opacity-60 hover:opacity-100 hover:bg-primary transition-all">
                {s[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10 text-center text-sm opacity-50">
          {t('footer_made')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
