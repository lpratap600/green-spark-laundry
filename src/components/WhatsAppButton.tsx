
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      <div className="bg-white p-3 rounded-lg shadow-lg mb-2 max-w-xs transform translate-x-0 opacity-100 transition-all duration-300 ease-in-out">
        <p className="text-sm font-medium">Ready to simplify your laundry routine? Get a special discount on your first order!</p>
      </div>
      
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className={cn(
          "whatsapp-button float-animation flex items-center justify-center",
          "group hover:scale-110"
        )}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">1</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
