import { useLanguage } from '@/i18n/LanguageContext';
import { type Destination } from '@/data/destinations';
import type { TranslationKey } from '@/i18n/translations';

interface DestinationCardProps {
  destination: Destination;
  onClick: (dest: Destination) => void;
}

const DestinationCard = ({ destination, onClick }: DestinationCardProps) => {
  const { t, lang } = useLanguage();

  const cityName = lang === 'ar' ? destination.cityAr : destination.city;
  const monumentName = lang === 'ar' ? destination.monumentAr : lang === 'en' ? destination.monumentEn : destination.monument;

  return (
    <div
      onClick={() => onClick(destination)}
      className="group cursor-pointer bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={destination.image}
          alt={monumentName}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{cityName}</p>
        <h3 className="font-heading font-semibold text-foreground mb-3 line-clamp-1">
          {monumentName}
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground rounded-full"
            >
              {t(tag as TranslationKey)}
            </span>
          ))}
        </div>
        <button className="w-full py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
          {t('view_packs')}
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
