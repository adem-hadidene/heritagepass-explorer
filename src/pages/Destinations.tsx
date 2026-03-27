import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { destinations } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConciergeWidget from '@/components/ConciergeWidget';
import { X } from 'lucide-react';
import type { Destination } from '@/data/destinations';

const Destinations = () => {
  const { t, lang } = useLanguage();
  const [tab, setTab] = useState<'tunisia' | 'algeria'>('tunisia');
  const [selected, setSelected] = useState<Destination | null>(null);

  const filtered = destinations.filter((d) => d.country === tab);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-8">
            {t('nav_destinations')}
          </h1>

          {/* Country tabs */}
          <div className="flex justify-center gap-2 mb-10">
            {(['tunisia', 'algeria'] as const).map((country) => (
              <button
                key={country}
                onClick={() => setTab(country)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                  tab === country
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {country === 'tunisia' ? t('tab_tunisia') : t('tab_algeria')}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} onClick={setSelected} />
            ))}
          </div>
        </div>
      </main>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-[60] bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-[var(--shadow-elevated)]" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selected.image} alt="" className="w-full h-56 object-cover rounded-t-2xl" />
              <button onClick={() => setSelected(null)} className="absolute top-3 right-3 w-8 h-8 bg-foreground/50 text-primary-foreground rounded-full flex items-center justify-center">
                <X size={16} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-1">
                {lang === 'ar' ? selected.cityAr : selected.city}
              </p>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                {lang === 'ar' ? selected.monumentAr : lang === 'en' ? selected.monumentEn : selected.monument}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {selected.description[lang]}
              </p>
              <button className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">
                {t('view_packs')}
              </button>
            </div>
          </div>
        </div>
      )}

      <ConciergeWidget />
      <Footer />
    </div>
  );
};

export default Destinations;
