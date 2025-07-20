gsap.fromTo(".about_section:first-of-type", 
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
      trigger: ".about_section:first-of-type",
      start: "top bottom",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".second_about_section", 
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
      trigger: ".second_about_section",
      start: "top bottom",
      toggleActions: "play none none reverse"
    }
  }
);