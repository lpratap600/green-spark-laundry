
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the CTA after scrolling past a certain point (800px here)
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-primary shadow-lg transform transition-transform duration-300 z-40"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
      }}
    >
      <div className="container mx-auto py-4 px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-white font-medium mb-3 sm:mb-0">
          Book Your Pickup Today & Get 20% Off
        </p>
        <Button 
          className="bg-white text-primary hover:bg-gray-100 transition-colors"
          onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Schedule Now
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
