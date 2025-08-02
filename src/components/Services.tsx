
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Code, Wifi, Factory, Globe, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import aiImage from '@/assets/ai-service.jpg';
import webImage from '@/assets/web-dev-service.jpg';
import fiberImage from '@/assets/fiber-optic-service.jpg';
import industryImage from '@/assets/industry4-service.jpg';
import wirelessImage from '@/assets/wireless-service.jpg';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Brain,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      image: aiImage,
      gradient: 'from-primary to-primary-glow'
    },
    {
      icon: Globe,
      title: t('services.intelligence.title'),
      description: t('services.intelligence.description'),
      image: webImage,
      gradient: 'from-secondary to-secondary-glow'
    },
    {
      icon: Code,
      title: t('services.labs.title'),
      description: t('services.labs.description'),
      image: fiberImage,
      gradient: 'from-accent to-accent-glow'
    },
    {
      icon: Factory,
      title: t('services.industry.title'),
      description: t('services.industry.description'),
      image: industryImage,
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Wifi,
      title: t('services.acceleration.title'),
      description: t('services.acceleration.description'),
      image: wirelessImage,
      gradient: 'from-secondary to-accent'
    },
    {
      icon: Smartphone,
      title: t('services.execution.title'),
      description: t('services.execution.description'),
      image: aiImage,
      gradient: 'from-accent to-primary'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('services.title')}{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('services.title.services')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-primary hover:-translate-y-2 transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-60`} />
                <div className="absolute top-4 left-4 p-3 bg-background/90 rounded-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
