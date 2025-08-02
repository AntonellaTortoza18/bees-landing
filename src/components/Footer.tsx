
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import beesLogo from '@/assets/bees-logo.png';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:info@beesiot.com', label: 'Email' }
  ];

  const services = [
    { name: t('services.consulting.title'), href: '#servicios' },
    { name: t('services.intelligence.title'), href: '#servicios' },
    { name: t('services.labs.title'), href: '#servicios' },
    { name: t('services.industry.title'), href: '#servicios' },
    { name: t('services.acceleration.title'), href: '#servicios' }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={beesLogo} alt="Bees Logo" className="h-8 w-auto" />
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-background/80">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="hover:text-background transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#nosotros" className="hover:text-background transition-colors">{t('footer.about')}</a></li>
              <li><a href="#contacto" className="hover:text-background transition-colors">{t('nav.contact')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2025 bees IoT. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
