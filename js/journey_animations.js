gsap.fromTo(".journey_card", 
  { 
    opacity: 0, 
    scale: 0.8,
    y: 30
  },
  { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    duration: 0.7,
    ease: "back.out(1.7)",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".journey_right",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  }
);