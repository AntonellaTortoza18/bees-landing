
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import beesLogo from '@/assets/bees-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '#inicio' },
    { name: t('nav.services'), href: '#servicios' },
    { name: t('nav.about'), href: '#nosotros' },
    { name: t('nav.contact'), href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <img src={beesLogo} alt="Bees Logo" className="h-8 w-auto" />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleLanguage}
              className="text-foreground hover:text-primary transition-colors duration-200"
          
              
            >
              {language === 'ES' ? 'EN' : 'ES'}
              
            </Button>
            {/* <Button variant="default" className="bg-gradient-primary hover:shadow-primary">
              {t('nav.contact.button')}
            </Button> */}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={toggleLanguage}
                  className="w-full justify-start text-foreground hover:text-primary"
                >
                  {language === 'ES' ? t('nav.english') : t('nav.spanish')}
                </Button>
                <Button variant="default" className="w-full bg-gradient-primary">
                  {t('nav.contact.button')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
