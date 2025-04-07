
import React, { useEffect, useRef } from 'react';
import { Clock, Leaf, Truck, Shirt } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "Reliable & On-Time",
    description: "We respect your schedule and ensure timely pickups and deliveries, every single time."
  },
  {
    icon: <Leaf className="w-12 h-12 text-green-dark" />,
    title: "Eco-Friendly Products",
    description: "We use environmentally safe detergents that are gentle on your clothes and the planet."
  },
  {
    icon: <Truck className="w-12 h-12 text-primary" />,
    title: "Doorstep Pickup & Delivery",
    description: "No need to step out - we'll come to you for both pickup and delivery of your laundry."
  },
  {
    icon: <Shirt className="w-12 h-12 text-green-dark" />,
    title: "Clothes That Last Longer",
    description: "Our gentle cleaning processes ensure your garments maintain their quality and longevity."
  }
];

const WhyUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (cardsRef.current) {
            cardsRef.current.classList.add('staggered-fade-in');
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
    <section id="why-us" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Greendhobi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with eco-friendly practices to deliver a laundry service that exceeds your expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={cardsRef}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="mb-5 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
