
import React, { useEffect, useRef } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Sequence animation for title and subtitle
    const titleElement = document.querySelector('.hero-title');
    const subtitleElement = document.querySelector('.hero-subtitle');
    const ctaElement = document.querySelector('.hero-cta');
    
    setTimeout(() => {
      titleElement?.classList.add('sequence-visible');
      
      setTimeout(() => {
        subtitleElement?.classList.add('sequence-visible');
        
        setTimeout(() => {
          ctaElement?.classList.add('sequence-visible');
        }, 300);
      }, 300);
    }, 300);
    
    // Video playback control
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down the video for a more elegant look
    }
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-white via-white to-green-light opacity-90 z-10"></div>
        
        {/* Video Background */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="https://res.cloudinary.com/da8hyaxyd/video/upload/v1712496302/laundry-service-background-video_qohuv6.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Folded clean clothes" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl sequence-container">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sequence-item">
            Your Laundry, Reimagined with Greendhobi
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-8 sequence-item">
            Reliable, Eco-Friendly, and Affordable Laundry Solutions — Just for You.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4 sequence-item">
            <Button className="btn-primary relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-green-dark opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
              Book Pickup & Save 20%
            </Button>
            <Button variant="outline" className="btn-secondary">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#why-us" className="text-gray-500 hover:text-primary transition-colors">
          <ArrowDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
