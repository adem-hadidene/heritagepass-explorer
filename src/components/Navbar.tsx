import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: '/', label: t('nav_home') },
    { to: '/destinations', label: t('nav_destinations') },
    { to: '/packs', label: t('nav_packs') },
    { to: '/passport', label: t('nav_passport') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold text-primary">Weekend</span>
          <span className="text-xl font-heading font-bold text-accent">Explorer</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                isActive(link.to) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            to="/auth"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            {t('nav_login')}
          </Link>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in-up">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-border/30 ${
                isActive(link.to) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/auth"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-medium text-primary"
          >
            {t('nav_login')}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
