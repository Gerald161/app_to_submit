gsap.fromTo(".positive_reviews_container", 
  { 
    opacity: 0, 
    y: 50 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".positive_reviews_container",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  }
);