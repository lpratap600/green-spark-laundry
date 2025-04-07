
// Function to check if an element is in viewport
export const isInViewport = (element: HTMLElement, offset = 150) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= 0
  );
};

// Function to initialize reveal animations
export const initRevealAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealCallback = () => {
    revealElements.forEach((element) => {
      if (isInViewport(element as HTMLElement)) {
        element.classList.add('active');
      }
    });
  };
  
  // Run once to check elements already in view on load
  revealCallback();
  
  // Add scroll listener
  window.addEventListener('scroll', revealCallback);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', revealCallback);
  };
};

// Function to add parallax effect to elements
export const initParallaxEffects = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const parallaxCallback = () => {
    parallaxElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Calculate how far the element is from the top of the viewport
      const distanceFromTop = elementTop + scrollPosition;
      
      // Calculate the percentage of the element that is visible
      const scrollPercentage = (scrollPosition - distanceFromTop + windowHeight) / (elementHeight + windowHeight);
      
      if (scrollPercentage >= 0 && scrollPercentage <= 1) {
        const intensity = element.getAttribute('data-parallax-intensity') || '0.2';
        const yOffset = scrollPercentage * 100 * parseFloat(intensity);
        element.setAttribute('style', `transform: translate3d(0, ${yOffset}px, 0)`);
      }
    });
  };
  
  // Run once on load
  parallaxCallback();
  
  // Add scroll listener
  window.addEventListener('scroll', parallaxCallback);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', parallaxCallback);
  };
};

// Function to initialize sequence animations
export const initSequenceAnimations = () => {
  const sequenceContainers = document.querySelectorAll('.sequence-container');
  
  sequenceContainers.forEach((container) => {
    const sequenceItems = container.querySelectorAll('.sequence-item');
    
    const sequenceObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sequenceItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('sequence-visible');
            }, 150 * index);
          });
          sequenceObserver.unobserve(container);
        }
      },
      { threshold: 0.2 }
    );
    
    sequenceObserver.observe(container);
  });
  
  // No event listeners to clean up in this function
  return () => {};
};

