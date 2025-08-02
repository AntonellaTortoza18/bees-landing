import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-iot.jpg';
const Hero = () => {
  const {
    t
  } = useLanguage();
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img src={heroImage} alt="IoT Technology" className="w-full h-full object-cover mix-blend-overlay opacity-20" />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {t('hero.title.innovation')}{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('hero.title.things')}
            </span>{' '}
            {t('hero.title.world')}{' '}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              {t('hero.title.hyperconnected')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors duration-200">
            <Button size="lg" className="bg-gradient-primary hover:shadow-primary text-lg px-8 py-4 animate-glow">
              {t('hero.button.services')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
            
            
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{
        animationDelay: '4s'
      }} />
      </div>
    </section>;
};
export default Hero;