
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import PickupSchedulerForm from '@/components/PickupSchedulerForm';
import WhatsAppPromoBlock from '@/components/WhatsAppPromoBlock';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { initRevealAnimations, initParallaxEffects, initSequenceAnimations } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    // Initialize all animations
    const cleanupReveal = initRevealAnimations();
    const cleanupParallax = initParallaxEffects();
    const cleanupSequence = initSequenceAnimations();
    
    // Cleanup on component unmount
    return () => {
      cleanupReveal();
      cleanupParallax();
      cleanupSequence();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <PricingSection />
      <WhatsAppPromoBlock />
      <TestimonialsCarousel />
      <PickupSchedulerForm />
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
};

export default Index;
