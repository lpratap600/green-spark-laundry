
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const services = [
  {
    title: "Wash & Fold",
    description: "Regular laundry, washed, dried, and neatly folded",
    features: ["24-48 hour turnaround", "Eco-friendly detergent", "Sorted by color & fabric"]
  },
  {
    title: "Dry Cleaning",
    description: "Professional cleaning for delicate fabrics & formal wear",
    features: ["Preserves fabric quality", "Removes tough stains", "Special care for dyes"]
  },
  {
    title: "Wash & Iron",
    description: "Fresh laundry with professional pressing",
    features: ["Crisp, wrinkle-free finish", "Folded or hung as preferred", "Fabric-specific treatment"]
  },
  {
    title: "Saree / Delicates",
    description: "Special care for your precious traditional wear",
    features: ["Gentle hand cleaning", "Safe for embroidery & zari", "Properly shaped & finished"]
  },
  {
    title: "Express Turnaround",
    description: "Same-day service when you need it fast",
    features: ["6-8 hour turnaround", "Priority processing", "Available 7 days a week"]
  },
  {
    title: "Eco-Care",
    description: "Sustainable cleaning for environmentally conscious customers",
    features: ["100% biodegradable products", "Low water consumption", "Energy efficient process"]
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (cardsRef.current) {
            cardsRef.current.classList.add('reveal');
            cardsRef.current.classList.add('active');
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
    <section id="services" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From everyday laundry to special garments, we've got all your cleaning needs covered with care and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardsRef}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card hover:bg-gradient-to-b hover:from-white hover:to-green-light/30"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-dark mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
