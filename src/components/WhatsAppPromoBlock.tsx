
import React, { useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppPromoBlock = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (contentRef.current) {
            contentRef.current.classList.add('animate-slide-up');
          }
          
          if (imageRef.current) {
            setTimeout(() => {
              imageRef.current?.classList.add('image-reveal');
            }, 300);
          }
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-green-light" ref={sectionRef}>
      {/* Decorative dots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-6 h-6 rounded-full bg-primary"></div>
        <div className="absolute top-40 right-20 w-4 h-4 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 left-40 w-5 h-5 rounded-full bg-primary"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center opacity-0" ref={contentRef}>
          <div className="sequence-container">
            <h2 className="text-3xl font-bold mb-4 sequence-item">Book, Track, & Chat — All on WhatsApp</h2>
            <p className="text-gray-700 mb-6 sequence-item">
              Our chatbot helps you schedule pickups and track orders 24/7. No app downloads required - simply chat with us on WhatsApp for instant service.
            </p>
            <div className="space-y-4 sequence-item">
              <div className="flex items-start transform transition-transform duration-300 hover:translate-x-2">
                <div className="bg-white p-2 rounded-full mr-4">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-medium">Quick Booking</h3>
                  <p className="text-sm text-gray-600">Schedule pickups in under a minute</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-transform duration-300 hover:translate-x-2">
                <div className="bg-white p-2 rounded-full mr-4">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-medium">Real-time Tracking</h3>
                  <p className="text-sm text-gray-600">Know exactly where your clothes are</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-transform duration-300 hover:translate-x-2">
                <div className="bg-white p-2 rounded-full mr-4">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-medium">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Get help anytime you need it</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 btn-primary sequence-item">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="relative z-10">Start WhatsApp Chat</span>
              <span className="absolute bottom-0 left-0 h-0 w-full bg-green-dark transition-all duration-300 group-hover:h-full -z-0"></span>
            </Button>
          </div>
          
          <div className="flex justify-center md:justify-end" ref={imageRef}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
                alt="WhatsApp on phone" 
                className="rounded-3xl shadow-lg max-w-xs relative z-10 parallax"
                data-parallax-intensity="0.1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppPromoBlock;
