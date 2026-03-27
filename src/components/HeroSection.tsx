import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import heroImage from '@/assets/hero-dougga.jpg';

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center animate-counter">
      <div className="text-2xl md:text-3xl font-heading font-bold text-accent">
        +{count.toLocaleString()}
      </div>
      <div className="text-xs md:text-sm text-primary-foreground/70 mt-1">{suffix}</div>
    </div>
  );
};

const HeroSection = () => {
  const { t } = useLanguage();
  const words = t('hero_title').split('. ').filter(Boolean);

  const tripTypes = [
    t('trip_weekend'),
    t('trip_holidays'),
    t('trip_public'),
    t('trip_multi'),
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Dougga ruins" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.4, duration: 0.6 }}
              className="inline-block mx-1"
            >
              {word}.
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8"
        >
          {t('hero_subtitle')}
        </motion.p>

        {/* Trip type pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tripTypes.map((type, i) => (
            <span
              key={type}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                i === 0
                  ? 'bg-accent text-accent-foreground border-accent golden-shimmer'
                  : 'bg-primary-foreground/10 text-primary-foreground/80 border-primary-foreground/20'
              }`}
            >
              {type}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#destinations-preview"
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            {t('cta_destinations')}
          </a>
          <Link
            to="/packs"
            className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            {t('cta_pack')}
          </Link>
          <Link
            to="/passport"
            className="px-6 py-3 border-2 border-primary-foreground/40 text-primary-foreground font-medium rounded-lg hover:bg-primary-foreground/10 transition-all text-sm md:text-base"
          >
            {t('cta_passport')}
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <AnimatedCounter target={1200} suffix={t('proof_trips')} />
          <AnimatedCounter target={85} suffix={t('proof_partners')} />
          <AnimatedCounter target={18} suffix={t('proof_destinations')} />
        </motion.div>
      </div>

      {/* Geometric border bottom */}
      <div className="absolute bottom-0 inset-x-0 h-1 geometric-border" />
    </section>
  );
};

export default HeroSection;
