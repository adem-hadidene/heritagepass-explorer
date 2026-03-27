import { useLanguage } from '@/i18n/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConciergeWidget from '@/components/ConciergeWidget';
import { Award, QrCode, Stamp, History } from 'lucide-react';

const stamps = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  earned: i < 3,
  label: ['Kairouan', 'Dougga', 'Zaghouan', 'Makthar', 'Gabès', 'Timgad', 'Djemila', 'Tipaza', 'Ghardaïa', 'Sidi Bel Abbès', 'Chenini', 'Batna'][i],
}));

const Passport = () => {
  const { t } = useLanguage();

  const badges = [
    { name: t('badge_aghlabid'), cond: t('badge_aghlabid_cond'), reward: t('badge_aghlabid_reward'), earned: true },
    { name: t('badge_oasis'), cond: t('badge_oasis_cond'), reward: t('badge_oasis_reward'), earned: false },
    { name: t('badge_grand'), cond: t('badge_grand_cond'), reward: t('badge_grand_reward'), earned: false },
  ];

  const earnedStamps = stamps.filter((s) => s.earned).length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Passport cover */}
          <div className="passport-cover rounded-3xl p-8 md:p-12 mb-12 text-center">
            <div className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">HeritagePass</div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">
              {t('passport_title')}
            </h1>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4 mb-6" />
            {/* Active badge */}
            <div className="inline-flex items-center gap-3 bg-primary-foreground/10 rounded-xl px-6 py-3">
              <QrCode className="text-accent" size={24} />
              <span className="text-primary-foreground text-sm font-medium">{t('passport_active_badge')}</span>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-10 bg-card rounded-2xl p-6 border border-border">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">
                {earnedStamps} {t('passport_progress')} {stamps.length} {t('passport_next_badge')}
              </span>
              <span className="font-bold text-primary">{Math.round((earnedStamps / stamps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-primary rounded-full h-3 transition-all duration-1000"
                style={{ width: `${(earnedStamps / stamps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Stamps */}
          <div className="mb-10">
            <h2 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
              <Stamp size={20} className="text-primary" />
              {t('passport_stamps')}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {stamps.map((stamp) => (
                <div
                  key={stamp.id}
                  className={`stamp-circle w-20 h-20 mx-auto ${stamp.earned ? 'earned' : ''}`}
                >
                  <span className={`text-[10px] font-medium text-center px-1 ${stamp.earned ? 'text-primary' : 'text-muted-foreground/40'}`}>
                    {stamp.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="mb-10">
            <h2 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
              <Award size={20} className="text-accent" />
              {t('passport_badges')}
            </h2>
            <div className="space-y-4">
              {badges.map((badge) => (
                <div
                  key={badge.name}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    badge.earned
                      ? 'border-accent bg-accent/5 golden-shimmer'
                      : 'border-border opacity-60'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${badge.earned ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}`}>
                    🏅
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground">{badge.name}</h3>
                    <p className="text-xs text-muted-foreground">{badge.cond}</p>
                  </div>
                  <span className="text-xs font-medium text-accent">{badge.reward}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trip history placeholder */}
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
              <History size={20} className="text-secondary" />
              {t('passport_history')}
            </h2>
            <div className="bg-card rounded-xl border border-border p-8 text-center text-muted-foreground text-sm">
              {t('passport_active_badge')}
            </div>
          </div>
        </div>
      </main>
      <ConciergeWidget />
      <Footer />
    </div>
  );
};

export default Passport;
