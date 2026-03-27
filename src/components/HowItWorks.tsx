import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Settings, CreditCard, QrCode } from 'lucide-react';

const steps = [
  { icon: MapPin, colorClass: 'bg-primary text-primary-foreground', titleKey: 'step1_title' as const, descKey: 'step1_desc' as const },
  { icon: Settings, colorClass: 'bg-secondary text-secondary-foreground', titleKey: 'step2_title' as const, descKey: 'step2_desc' as const },
  { icon: CreditCard, colorClass: 'bg-accent text-accent-foreground', titleKey: 'step3_title' as const, descKey: 'step3_desc' as const },
  { icon: QrCode, colorClass: 'bg-primary text-primary-foreground', titleKey: 'step4_title' as const, descKey: 'step4_desc' as const },
];

const HowItWorks = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16">
          {t('how_title')}
        </h2>

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start justify-between gap-4 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-border" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="flex-1 text-center relative"
              >
                <div className={`w-20 h-20 rounded-2xl ${step.colorClass} flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10`}>
                  <Icon size={32} />
                </div>
                <div className="text-xs font-medium text-muted-foreground mb-2">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm lg:text-base">
                  {t(step.titleKey)}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  {t(step.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="flex gap-4 items-start"
              >
                <div className={`w-14 h-14 rounded-xl ${step.colorClass} flex items-center justify-center shrink-0 shadow-md`}>
                  <Icon size={24} />
                </div>
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1 text-sm">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-xs text-muted-foreground">{t(step.descKey)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
