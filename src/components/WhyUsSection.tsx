
import React, { useEffect, useRef } from 'react';
import { Clock, Leaf, Truck, Shirt, CheckCircle, CircleDollarSign, Clock3, Star } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "Reliability You Can Count On",
    description: "We promise punctual, high-quality service every time, ensuring your clothes are ready in 24 hours."
  },
  {
    icon: <Leaf className="w-12 h-12 text-green-dark" />,
    title: "Eco-Friendly Products",
    description: "We use biodegradable detergents and energy-saving processes, ensuring your laundry and the planet stay fresh and safe."
  },
  {
    icon: <Shirt className="w-12 h-12 text-primary" />,
    title: "Save Big, Keep Your Clothes Longer",
    description: "Our expert washing methods extend the life of your clothes. Why buy new when we can keep your wardrobe fresh and long-lasting?"
  },
  {
    icon: <Truck className="w-12 h-12 text-green-dark" />,
    title: "Doorstep Pickup & Delivery",
    description: "We take care of your laundry while you focus on your work. Clean clothes, delivered back to you, hassle-free."
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-primary" />,
    title: "Premium Detergents",
    description: "Our premium, gentle detergents treat your clothes with the care they deserve, preserving their look and feel."
  },
  {
    icon: <CircleDollarSign className="w-12 h-12 text-green-dark" />,
    title: "Affordable Pricing & Discounts",
    description: "We offer value-for-money pricing and special discounts for first-time customers."
  },
  {
    icon: <Clock3 className="w-12 h-12 text-primary" />,
    title: "Quick Turnaround",
    description: "With our express services, you can count on quick turnaround times - in as little as 24 hours!"
  },
  {
    icon: <Star className="w-12 h-12 text-green-dark" />,
    title: "Personalized Service",
    description: "We tailor our services to fit your preferences, whether it's delicate fabric care or urgent requests."
  }
];

const WhyUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (titleRef.current) {
            titleRef.current.classList.add('sequence-visible');
          }
          
          if (subtitleRef.current) {
            setTimeout(() => {
              subtitleRef.current?.classList.add('sequence-visible');
            }, 200);
          }
          
          if (cardsRef.current) {
            setTimeout(() => {
              cardsRef.current?.classList.add('staggered-fade-in');
            }, 400);
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
    <section id="why-us" className="section-padding bg-gray-50 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-12 h-12 rounded-full bg-green-light opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-primary opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 sequence-container">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 sequence-item">Why Choose Greendhobi</h2>
          <p ref={subtitleRef} className="text-gray-600 max-w-2xl mx-auto sequence-item">
            Experience the ultimate laundry service that combines reliability, quality, and care for your clothes and the environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={cardsRef}>
          {features.slice(0, 4).map((feature, index) => (
            <div 
              key={index} 
              className="rotating-border bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-5 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.slice(4, 8).map((feature, index) => (
            <div 
              key={index + 4} 
              className="rotating-border bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
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
