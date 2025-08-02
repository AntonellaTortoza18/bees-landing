
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.toast.title'),
      description: t('contact.toast.description'),
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      info: 'info@beesiot.com',
      link: 'mailto:info@beesiot.com'
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      info: '+34 900 000 000',
      link: 'tel:+34900000000'
    },
    {
      icon: MapPin,
      title: t('contact.info.location'),
      info: 'Madrid, España',
      link: '#'
    }
  ];

  return (
    <section id="contacto" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('contact.title')}{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('contact.title.innovate')}
            </span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-0 bg-card/50 backdrop-blur shadow-primary">
            <CardHeader>
              <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t('contact.form.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t('contact.form.email')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-primary">
                  <Send className="mr-2 h-4 w-4" />
                  {t('contact.form.send')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                        <item.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-muted-foreground">{item.info}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t('contact.urgent.title')}</h3>
                <p className="mb-6 opacity-90">
                  {t('contact.urgent.description')}
                </p>
                <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  {t('contact.urgent.button')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
