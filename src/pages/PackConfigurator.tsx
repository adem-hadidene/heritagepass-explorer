import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConciergeWidget from '@/components/ConciergeWidget';
import { destinations } from '@/data/destinations';
import { Bus, Hotel, UtensilsCrossed, Mic, Check } from 'lucide-react';

const services = [
  { key: 'pack_transport' as const, icon: Bus, price: 45 },
  { key: 'pack_hotel' as const, icon: Hotel, price: 120 },
  { key: 'pack_restaurant' as const, icon: UtensilsCrossed, price: 35 },
  { key: 'pack_guide' as const, icon: Mic, price: 50 },
];

const PackConfigurator = () => {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<'family' | 'young' | null>(null);
  const [selectedDest, setSelectedDest] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [duration, setDuration] = useState('weekend');
  const [paid, setPaid] = useState(false);

  const platformFee = 15;
  const total = Array.from(selectedServices).reduce((sum, key) => {
    const svc = services.find((s) => s.key === key);
    return sum + (svc?.price || 0);
  }, 0) + platformFee;

  const stepLabels = [t('pack_step1'), t('pack_step2'), t('pack_step3'), t('pack_step4')];
  const durations = [
    { key: 'weekend', label: t('pack_duration_weekend') },
    { key: 'short', label: t('pack_duration_short') },
    { key: 'vacation', label: t('pack_duration_vacation') },
    { key: 'custom', label: t('pack_duration_custom') },
  ];

  if (paid) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center animate-fade-in-up">
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Check size={64} className="text-primary" />
            </div>
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">{t('badge_ready')}</h1>
            <div className="w-48 h-48 mx-auto bg-foreground rounded-2xl flex items-center justify-center">
              <div className="text-primary-foreground text-center text-xs font-mono">
                <div className="text-2xl mb-2">📱</div>
                QR BADGE
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-8">
            {t('pack_title')}
          </h1>

          {/* Progress bar */}
          <div className="flex items-center justify-center gap-2 mb-12 max-w-lg mx-auto">
            {stepLabels.map((label, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  step > i + 1 ? 'bg-secondary text-secondary-foreground' :
                  step === i + 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                {i < 3 && <div className={`h-0.5 flex-1 ${step > i + 1 ? 'bg-secondary' : 'bg-border'}`} />}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Step 1: Profile */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { key: 'family' as const, emoji: '🏠', title: t('pack_family'), desc: t('pack_family_desc') },
                  { key: 'young' as const, emoji: '🎒', title: t('pack_young'), desc: t('pack_young_desc') },
                ].map((p) => (
                  <button
                    key={p.key}
                    onClick={() => { setProfile(p.key); setStep(2); }}
                    className={`p-8 rounded-2xl border-2 text-start transition-all hover:-translate-y-1 ${
                      profile === p.key ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-4xl mb-4">{p.emoji}</div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Destination */}
            {step === 2 && (
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {durations.map((d) => (
                    <button
                      key={d.key}
                      onClick={() => setDuration(d.key)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        duration === d.key ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destinations.map((dest) => (
                    <button
                      key={dest.id}
                      onClick={() => { setSelectedDest(dest.id); setStep(3); }}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 text-start transition-all ${
                        selectedDest === dest.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img src={dest.image} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0" loading="lazy" />
                      <div>
                        <p className="text-xs text-muted-foreground">{lang === 'ar' ? dest.cityAr : dest.city}</p>
                        <p className="font-heading font-semibold text-sm text-foreground">
                          {lang === 'ar' ? dest.monumentAr : lang === 'en' ? dest.monumentEn : dest.monument}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Services */}
            {step === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  {services.map((svc) => {
                    const Icon = svc.icon;
                    const active = selectedServices.has(svc.key);
                    return (
                      <button
                        key={svc.key}
                        onClick={() => {
                          const next = new Set(selectedServices);
                          active ? next.delete(svc.key) : next.add(svc.key);
                          setSelectedServices(next);
                        }}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-start transition-all ${
                          active ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${active ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          <Icon size={22} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-foreground">{t(svc.key)}</p>
                        </div>
                        <span className="font-heading font-bold text-foreground">{svc.price} TND</span>
                      </button>
                    );
                  })}
                </div>

                {/* Price summary */}
                <div className="bg-card border border-border rounded-2xl p-6 h-fit sticky top-24">
                  {services.filter((s) => selectedServices.has(s.key)).map((svc) => (
                    <div key={svc.key} className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{t(svc.key)}</span>
                      <span className="text-foreground font-medium">{svc.price} TND</span>
                    </div>
                  ))}
                  <div className="border-t border-border my-3" />
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">{t('pack_platform_fee')}</span>
                    <span className="text-foreground font-medium">{platformFee} TND</span>
                  </div>
                  <div className="border-t-2 border-foreground my-3" />
                  <div className="flex justify-between font-heading font-bold text-lg mb-4">
                    <span>{t('pack_total')}</span>
                    <span className="text-primary">{total} TND</span>
                  </div>
                  <button
                    onClick={() => { setStep(4); setPaid(true); }}
                    disabled={selectedServices.size === 0}
                    className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {t('pack_confirm')}
                  </button>
                </div>
              </div>
            )}

            {/* Navigation */}
            {step > 1 && step <= 3 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← {lang === 'ar' ? 'رجوع' : lang === 'en' ? 'Back' : 'Retour'}
              </button>
            )}
          </div>
        </div>
      </main>
      <ConciergeWidget />
      <Footer />
    </div>
  );
};

export default PackConfigurator;
