import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LayoutDashboard, Package, CalendarCheck, QrCode, MapPin, UserCircle } from 'lucide-react';

const menuItems = [
  { key: 'partner_overview' as const, icon: LayoutDashboard },
  { key: 'partner_offers' as const, icon: Package },
  { key: 'partner_bookings' as const, icon: CalendarCheck },
  { key: 'partner_scanner' as const, icon: QrCode },
  { key: 'partner_cities' as const, icon: MapPin },
  { key: 'partner_profile' as const, icon: UserCircle },
];

const PartnerDashboard = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState('partner_overview');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 flex gap-6">
          {/* Sidebar */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="bg-card rounded-2xl border border-border p-4 sticky top-24">
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = active === item.key;
                  return (
                    <button
                      key={item.key}
                      onClick={() => setActive(item.key)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon size={18} />
                      {t(item.key)}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-6">{t(active as any)}</h1>

            {active === 'partner_overview' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: t('partner_reservations'), value: '12', color: 'bg-primary/10 text-primary' },
                  { label: t('partner_revenue'), value: '2,450 TND', color: 'bg-accent/10 text-accent' },
                  { label: t('partner_rating'), value: '4.8 ⭐', color: 'bg-secondary/10 text-secondary' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card rounded-2xl border border-border p-6">
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <p className={`text-2xl font-heading font-bold ${stat.color} rounded-lg inline-block px-2 py-1`}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {active === 'partner_scanner' && (
              <div className="bg-card rounded-2xl border border-border p-12 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-2xl flex items-center justify-center">
                  <QrCode size={48} className="text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">{t('partner_scanner')}</p>
              </div>
            )}

            {active !== 'partner_overview' && active !== 'partner_scanner' && (
              <div className="bg-card rounded-2xl border border-border p-8 text-center text-muted-foreground text-sm">
                {t(active as any)}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerDashboard;
