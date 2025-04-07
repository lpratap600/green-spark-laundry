
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, MessageCircle, Check, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar as CalendarComponent } from './ui/calendar';
import { format } from 'date-fns';
import { Card } from './ui/card';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';

const HeroSection = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [zipCode, setZipCode] = useState<string>('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [service, setService] = useState<string>('Wash & Fold');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const handleQuickSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Pickup Request Submitted!",
        description: `We'll be in touch shortly to confirm your ${service} pickup for ${date ? format(date, 'PPP') : 'selected date'}.`,
        variant: "default",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const serviceOptions = [
    "Wash & Fold",
    "Dry Cleaning",
    "Wash & Iron",
    "Saree / Delicates"
  ];

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
          <source src="https://res.cloudinary.com/da8hyaxyd/video/upload/v1712496302/clothing-laundry-video_z0fhmn.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Folded clean clothes" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="sequence-container">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sequence-item">
              Your Laundry, Reimagined with Greendhobi
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-8 sequence-item">
              Reliable, Eco-Friendly, and Affordable Laundry Solutions — Just for You.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4 sequence-item md:hidden">
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
          
          {/* Quick Schedule Form - Desktop */}
          <div className="hidden md:block">
            <Card className="p-6 shadow-lg rounded-xl bg-white/95 backdrop-blur-sm animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-center">Schedule Your Pickup</h3>
              <form onSubmit={handleQuickSchedule} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    placeholder="ZIP Code" 
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Service Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map(option => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left">
                          <Calendar className="mr-2 h-4 w-4" />
                          {date ? format(date, 'PP') : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today;
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-primary" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Schedule Pickup'}
                </Button>
                
                <div className="text-xs text-gray-500 flex items-start mt-2">
                  <Check className="w-4 h-4 mr-1 flex-shrink-0 text-green-600" />
                  <span>Get confirmation via WhatsApp</span>
                </div>
              </form>
            </Card>
          </div>
          
          {/* Quick Schedule Form - Mobile */}
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button className="w-full btn-primary">Schedule Your Pickup</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Schedule Your Pickup</h3>
                  <form onSubmit={handleQuickSchedule} className="space-y-4">
                    <div className="space-y-2">
                      <Input 
                        placeholder="ZIP Code" 
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Select value={service} onValueChange={setService}>
                          <SelectTrigger>
                            <SelectValue placeholder="Service Type" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map(option => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left">
                              <Calendar className="mr-2 h-4 w-4" />
                              {date ? format(date, 'PP') : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <CalendarComponent
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={(date) => {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                return date < today;
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-primary" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Schedule Pickup'}
                    </Button>
                    
                    <div className="text-xs text-gray-500 flex items-start mt-2">
                      <Check className="w-4 h-4 mr-1 flex-shrink-0 text-green-600" />
                      <span>Get confirmation via WhatsApp</span>
                    </div>
                  </form>
                </div>
              </DrawerContent>
            </Drawer>
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
