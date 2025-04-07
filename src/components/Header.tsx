
import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-primary">Green<span className="text-green-dark">dhobi</span></span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
          <a href="#why-us" className="text-gray-700 hover:text-primary transition-colors">Why Us</a>
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
          <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</a>
          <a href="#book" className="text-gray-700 hover:text-primary transition-colors">Book Now</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <PhoneCall className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">+91 9876543210</span>
          </div>
          <Button className="btn-primary">Book Pickup</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          <a 
            href="#home" 
            className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="#why-us" 
            className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Why Us
          </a>
          <a 
            href="#services" 
            className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#pricing" 
            className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#book" 
            className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
          <div className="flex items-center mt-8">
            <PhoneCall className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">+91 9876543210</span>
          </div>
          <Button className="btn-primary mt-4 w-2/3">Book Pickup</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
