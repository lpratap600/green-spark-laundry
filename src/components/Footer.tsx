
import React from 'react';
import { PhoneCall, Mail, MessageCircle, Facebook, Twitter, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Green<span className="text-primary">dhobi</span></h3>
            <p className="text-gray-300 mb-4">
              Eco-friendly laundry and dry cleaning services delivered to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-primary transition-colors">Why Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-primary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#book" className="text-gray-300 hover:text-primary transition-colors">Book Pickup</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Wash & Fold</li>
              <li className="text-gray-300">Dry Cleaning</li>
              <li className="text-gray-300">Wash & Iron</li>
              <li className="text-gray-300">Saree & Delicates</li>
              <li className="text-gray-300">Express Service</li>
              <li className="text-gray-300">Eco-Care</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-300">123 Green Street, Eco Park, Bangalore, 560001</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="w-5 h-5 text-primary mr-2" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-primary transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <a href="mailto:info@greendhobi.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@greendhobi.com
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 text-primary mr-2" />
                <a href="https://wa.me/919876543210" className="text-gray-300 hover:text-primary transition-colors">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2025 Greendhobi. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
