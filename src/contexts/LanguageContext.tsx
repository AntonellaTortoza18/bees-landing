
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ES: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.contact.button': 'Contactar',
    'nav.english': 'English',
    'nav.spanish': 'Español',
    
    // Hero
    'hero.title.innovation': 'Innovación de las',
    'hero.title.things': 'cosas',
    'hero.title.world': 'para un mundo',
    'hero.title.hyperconnected': 'hiperconectado',
    'hero.subtitle': 'Ayudamos a personas, empresas y gobiernos a innovar mediante consultoría en transformación digital, IoT, Machine Learning, Cloud y Data Science.',
    'hero.button.services': 'Descubre nuestros servicios',
    'hero.button.demo': 'Ver demo',
    
    // Services
    'services.title': 'Nuestros',
    'services.title.services': 'Servicios',
    'services.subtitle': 'Conjunto integrado de servicios para Smart Cities, Smart Communities, Smart Industry y Smart Agro',
    'services.consulting.title': 'Consultoría',
    'services.consulting.description': 'Estrategia, planificación e innovación acelerada para la transformación digital de su negocio.',
    'services.intelligence.title': 'Inteligencia',
    'services.intelligence.description': 'Análisis de mercado, tendencias de la industria y mejores prácticas para Smart Cities y Smart Industry.',
    'services.labs.title': 'Laboratorios de Innovación',
    'services.labs.description': 'Desarrollo de casos, prueba de concepto y prototipado rápido con metodologías ágiles.',
    'services.industry.title': 'Smart Industry',
    'services.industry.description': 'Transformación digital industrial con IoT, Machine Learning y análisis de datos en tiempo real.',
    'services.acceleration.title': 'Aceleración',
    'services.acceleration.description': 'Go to market, gestión del cambio y manejo de proyectos para implementaciones exitosas.',
    'services.execution.title': 'Ejecución',
    'services.execution.description': 'Instalación, puesta en marcha, seguimiento y auditoría de soluciones tecnológicas integrales.',
    
    // About
    'about.title': 'Sobre',
    'about.title.company': 'bees IoT',
    'about.description': 'Somos un equipo de consultores en la gestión de la transformación digital que asesoramos a nuestros clientes en soluciones de tecnología, innovación, negocios y estrategias para un mundo hiperconectado.',
    'about.agile.title': 'Metodologías Ágiles',
    'about.agile.description': 'Utilizamos procesos rápidos de innovación y metodologías ágiles para prototipar y validar con usuarios',
    'about.tech.title': 'Tecnologías Emergentes',
    'about.tech.description': 'IoT, Machine Learning, Cloud y Data Science para crear valores sostenibles',
    'about.teamwork.title': 'Trabajo Colaborativo',
    'about.teamwork.description': 'Trabajamos en equipo adaptándonos a las estructuras existentes de nuestros clientes',
    'about.commitment': 'Comprometidos con la excelencia tecnológica',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.description': 'Crear soluciones y servicios utilizando nuevas tendencias tecnológicas para entregar innovaciones más rápidas, más inteligentes y con menos riesgo para nuestros clientes y sus usuarios.',
    'about.projects': 'Proyectos Completados',
    'about.experience': 'Años de Experiencia',
    'about.support': 'Soporte Técnico',
    'about.satisfaction': 'Satisfacción Cliente',
    
    // Contact
    'contact.title': '¿Listo para',
    'contact.title.innovate': 'innovar',
    'contact.subtitle': 'Hablemos sobre cómo podemos ayudarte a transformar tu empresa con nuestras soluciones tecnológicas',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Tu email',
    'contact.form.message': 'Cuéntanos sobre tu proyecto...',
    'contact.form.send': 'Enviar mensaje',
    'contact.info.title': 'Información de contacto',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Teléfono',
    'contact.info.location': 'Ubicación',
    'contact.urgent.title': '¿Necesitas ayuda urgente?',
    'contact.urgent.description': 'Nuestro equipo técnico está disponible 24/7 para resolver cualquier incidencia crítica.',
    'contact.urgent.button': 'Soporte urgente',
    'contact.toast.title': 'Mensaje enviado',
    'contact.toast.description': 'Nos pondremos en contacto contigo pronto.',
    
    // Footer
    'footer.description': 'Innovación de las cosas para un mundo hiperconectado. Consultoría en transformación digital con IoT, Machine Learning, Cloud y Data Science.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.about': 'Sobre nosotros',
    'footer.privacy': 'Política de privacidad',
    'footer.terms': 'Términos de servicio',
    'footer.rights': 'Todos los derechos reservados.',
  },
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.contact.button': 'Contact',
    'nav.english': 'English',
    'nav.spanish': 'Español',
    
    // Hero
    'hero.title.innovation': 'Innovation of',
    'hero.title.things': 'things',
    'hero.title.world': 'for a',
    'hero.title.hyperconnected': 'hyperconnected world',
    'hero.subtitle': 'We help people, companies and governments innovate through digital transformation consulting, IoT, Machine Learning, Cloud and Data Science.',
    'hero.button.services': 'Discover our services',
    'hero.button.demo': 'View demo',
    
    // Services
    'services.title': 'Our',
    'services.title.services': 'Services',
    'services.subtitle': 'Integrated set of services for Smart Cities, Smart Communities, Smart Industry and Smart Agro',
    'services.consulting.title': 'Consulting',
    'services.consulting.description': 'Strategy, planning and accelerated innovation for your business digital transformation.',
    'services.intelligence.title': 'Intelligence',
    'services.intelligence.description': 'Market analysis, industry trends and best practices for Smart Cities and Smart Industry.',
    'services.labs.title': 'Innovation Labs',
    'services.labs.description': 'Case development, proof of concept and rapid prototyping with agile methodologies.',
    'services.industry.title': 'Smart Industry',
    'services.industry.description': 'Industrial digital transformation with IoT, Machine Learning and real-time data analysis.',
    'services.acceleration.title': 'Acceleration',
    'services.acceleration.description': 'Go to market, change management and project management for successful implementations.',
    'services.execution.title': 'Execution',
    'services.execution.description': 'Installation, commissioning, monitoring and auditing of comprehensive technological solutions.',
    
    // About
    'about.title': 'About',
    'about.title.company': 'bees IoT',
    'about.description': 'We are a team of consultants in digital transformation management who advise our clients on technology, innovation, business and strategy solutions for a hyperconnected world.',
    'about.agile.title': 'Agile Methodologies',
    'about.agile.description': 'We use rapid innovation processes and agile methodologies to prototype and validate with users',
    'about.tech.title': 'Emerging Technologies',
    'about.tech.description': 'IoT, Machine Learning, Cloud and Data Science to create sustainable values',
    'about.teamwork.title': 'Collaborative Work',
    'about.teamwork.description': 'We work as a team adapting to our clients existing structures',
    'about.commitment': 'Committed to technological excellence',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'Create solutions and services using new technological trends to deliver faster, smarter and lower risk innovations for our clients and their users.',
    'about.projects': 'Completed Projects',
    'about.experience': 'Years of Experience',
    'about.support': 'Technical Support',
    'about.satisfaction': 'Client Satisfaction',
    
    // Contact
    'contact.title': 'Ready to',
    'contact.title.innovate': 'innovate',
    'contact.subtitle': 'Let\'s talk about how we can help you transform your company with our technological solutions',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.message': 'Tell us about your project...',
    'contact.form.send': 'Send message',
    'contact.info.title': 'Contact information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.urgent.title': 'Need urgent help?',
    'contact.urgent.description': 'Our technical team is available 24/7 to resolve any critical incidents.',
    'contact.urgent.button': 'Urgent support',
    'contact.toast.title': 'Message sent',
    'contact.toast.description': 'We will contact you soon.',
    
    // Footer
    'footer.description': 'Innovation of things for a hyperconnected world. Digital transformation consulting with IoT, Machine Learning, Cloud and Data Science.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.about': 'About us',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms of service',
    'footer.rights': 'All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ES');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ES' ? 'EN' : 'ES');
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
