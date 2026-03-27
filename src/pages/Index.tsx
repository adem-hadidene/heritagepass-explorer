import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConciergeWidget from '@/components/ConciergeWidget';
import DestinationCard from '@/components/DestinationCard';
import { useLanguage } from '@/i18n/LanguageContext';
import { destinations } from '@/data/destinations';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const featured = destinations.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />

      {/* Featured destinations preview */}
      <section id="destinations-preview" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
            {t('nav_destinations')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onClick={() => navigate('/destinations')}
              />
            ))}
          </div>
        </div>
      </section>

      <ConciergeWidget />
      <Footer />
    </div>
  );
};

export default Index;
