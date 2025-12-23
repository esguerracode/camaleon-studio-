
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Agency from './pages/Agency';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Marquee from './components/Marquee';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { ServiceCategory } from './types';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentCategory, setCurrentCategory] = useState<ServiceCategory | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string, category: ServiceCategory | null = null) => {
    setCurrentPage(page);
    setCurrentCategory(category);
    window.scrollTo(0, 0);
  };

  if (loading) return <Preloader />;

  const renderPage = () => {
    switch(currentPage) {
      case 'work': return <ProjectGrid />;
      case 'services': return <Services onSelectCategory={(cat) => handleNavigate('service-detail', cat)} />;
      case 'service-detail': return currentCategory ? <ServiceDetail category={currentCategory} /> : <Services onSelectCategory={(cat) => handleNavigate('service-detail', cat)} />;
      case 'agency': return <Agency />;
      case 'contact': return <Contact />;
      default: return (
        <>
          <Hero onHablemos={() => handleNavigate('contact')} />
          <Marquee text="DISEÑO • ESTRATEGIA • LLANOS • DIGITAL-FIRST • CREATIVIDAD •" />
          <ProjectGrid />
        </>
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <CustomCursor />
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="transition-page">
        {renderPage()}
      </main>

      <FloatingWhatsApp />
      <Footer onNavigate={(page) => handleNavigate(page)} />
    </div>
  );
};

export default App;
