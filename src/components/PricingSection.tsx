
import React, { useState } from 'react';
import { Switch } from './ui/switch';

const perKgPricing = [
  { service: "Standard Wash & Fold", price: "₹99/kg", turnaround: "48 hours" },
  { service: "Express Wash & Fold", price: "₹129/kg", turnaround: "24 hours" },
  { service: "Delicate Wash", price: "₹149/kg", turnaround: "72 hours" },
  { service: "Wash & Iron", price: "₹119/kg", turnaround: "48 hours" },
  { service: "Express Wash & Iron", price: "₹149/kg", turnaround: "24 hours" }
];

const perPiecePricing = [
  { item: "Shirt/T-shirt", price: "₹25", turnaround: "48 hours" },
  { item: "Pants/Trousers", price: "₹35", turnaround: "48 hours" },
  { item: "Saree", price: "₹80", turnaround: "72 hours" },
  { item: "Jacket", price: "₹120", turnaround: "72 hours" },
  { item: "Suit (2 piece)", price: "₹200", turnaround: "72 hours" },
  { item: "Dress", price: "₹70", turnaround: "48 hours" },
  { item: "Bedsheet (Single)", price: "₹50", turnaround: "48 hours" },
  { item: "Bedsheet (Double)", price: "₹80", turnaround: "48 hours" }
];

const PricingSection = () => {
  const [showPerKg, setShowPerKg] = useState(true);

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing You Can Trust</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Clear pricing with no hidden fees. Choose between per-kilogram or per-piece pricing based on your needs.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg font-medium ${showPerKg ? 'text-primary' : 'text-gray-500'}`}>Per Kg</span>
            <Switch 
              checked={!showPerKg} 
              onCheckedChange={() => setShowPerKg(!showPerKg)}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-lg font-medium ${!showPerKg ? 'text-primary' : 'text-gray-500'}`}>Per Piece</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
          {showPerKg ? (
            <div className="animate-fade-in">
              <table className="w-full bg-white">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-center">Price</th>
                    <th className="px-6 py-4 text-right">Turnaround Time</th>
                  </tr>
                </thead>
                <tbody>
                  {perKgPricing.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-left">{item.service}</td>
                      <td className="px-6 py-4 text-center font-medium text-primary">{item.price}</td>
                      <td className="px-6 py-4 text-right text-gray-600">{item.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="animate-fade-in">
              <table className="w-full bg-white">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Item</th>
                    <th className="px-6 py-4 text-center">Price</th>
                    <th className="px-6 py-4 text-right">Turnaround Time</th>
                  </tr>
                </thead>
                <tbody>
                  {perPiecePricing.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-left">{item.item}</td>
                      <td className="px-6 py-4 text-center font-medium text-primary">{item.price}</td>
                      <td className="px-6 py-4 text-right text-gray-600">{item.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>* Minimum order value: ₹199</p>
          <p>* Express service charges applicable for same-day or 24-hour turnaround</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
