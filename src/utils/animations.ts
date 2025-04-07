
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
