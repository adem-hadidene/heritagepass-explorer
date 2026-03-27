import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, Handshake, Bus, Hotel, UtensilsCrossed, Mic } from 'lucide-react';

const Auth = () => {
  const { t } = useLanguage();
  const [role, setRole] = useState<'traveler' | 'partner' | null>(null);
  const [isLogin, setIsLogin] = useState(false);

  const partnerTypes = [
    { key: 'transport', icon: Bus, label: '🚌 Transporteur' },
    { key: 'hotel', icon: Hotel, label: '🏨 Hôtel' },
    { key: 'restaurant', icon: UtensilsCrossed, label: '🍴 Restaurant' },
    { key: 'guide', icon: Mic, label: '🎙 Guide' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-lg">
          {!role && !isLogin ? (
            <>
              <h1 className="text-3xl font-heading font-bold text-foreground text-center mb-2">
                {t('auth_iam')}
              </h1>
              <div className="grid grid-cols-1 gap-4 mt-8">
                <button
                  onClick={() => setRole('traveler')}
                  className="p-6 rounded-2xl border-2 border-border hover:border-primary transition-all text-start flex items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <User size={28} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">👤 {t('auth_traveler')}</h3>
                    <p className="text-sm text-muted-foreground">{t('auth_traveler_desc')}</p>
                  </div>
                </button>
                <button
                  onClick={() => setRole('partner')}
                  className="p-6 rounded-2xl border-2 border-border hover:border-secondary transition-all text-start flex items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Handshake size={28} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">🤝 {t('auth_partner')}</h3>
                    <p className="text-sm text-muted-foreground">{t('auth_partner_desc')}</p>
                  </div>
                </button>
              </div>
              <button onClick={() => setIsLogin(true)} className="mt-6 w-full text-center text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('auth_login')}
              </button>
            </>
          ) : (
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
                {isLogin ? t('auth_login') : t('auth_register')}
              </h2>
              <div className="space-y-4">
                <input type="text" placeholder={t('auth_name')} className="w-full px-4 py-3 rounded-xl bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="email" placeholder={t('auth_email')} className="w-full px-4 py-3 rounded-xl bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="password" placeholder={t('auth_password')} className="w-full px-4 py-3 rounded-xl bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="tel" placeholder={t('auth_phone')} className="w-full px-4 py-3 rounded-xl bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />

                {role === 'partner' && !isLogin && (
                  <>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">{t('auth_partner_type')}</label>
                      <div className="grid grid-cols-2 gap-2">
                        {partnerTypes.map((pt) => (
                          <button key={pt.key} className="px-3 py-2 text-xs rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all">
                            {pt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <input type="text" placeholder={t('auth_business_name')} className="w-full px-4 py-3 rounded-xl bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    <textarea placeholder={t('auth_description')} rows={3} className="w-full px-4 py-3 rounded-xl bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  </>
                )}

                <button className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity">
                  {isLogin ? t('auth_login') : t('auth_register')}
                </button>
              </div>
              <button
                onClick={() => { setRole(null); setIsLogin(false); }}
                className="mt-4 w-full text-center text-sm text-muted-foreground hover:text-foreground"
              >
                ←
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
