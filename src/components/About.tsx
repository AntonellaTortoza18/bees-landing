
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t('about.agile.title'),
      description: t('about.agile.description')
    },
    {
      icon: Zap,
      title: t('about.tech.title'),
      description: t('about.tech.description')
    },
    {
      icon: Users,
      title: t('about.teamwork.title'),
      description: t('about.teamwork.description')
    }
  ];

  const achievements = [
    { number: '50+', text: t('about.projects') },
    { number: '5+', text: t('about.experience') },
    { number: '24/7', text: t('about.support') },
    { number: '100%', text: t('about.satisfaction') }
  ];

  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t('about.title')}{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {t('about.title.company')}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {t('about.description')}
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-gradient-primary rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-secondary" />
              <span className="text-lg">{t('about.commitment')}</span>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-gradient-subtle border-0 shadow-primary">
              <CardContent className="space-y-8 p-0">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.mission.description')}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={achievement.text} className="text-center">
                      <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.text}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
