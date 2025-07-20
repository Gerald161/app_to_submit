var aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".about_landing_section",
    start: "top 75%",
    toggleActions: "play none none reverse"
  }
});

aboutTimeline.fromTo(".content_container", 
  { 
    opacity: 0, 
    y: 50
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.8,
    ease: "power2.out"
  }
);

aboutTimeline.fromTo(".content_container > *", 
  { 
    opacity: 0, 
    y: 30 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.15
  }, 
  "-=0.5"
);

aboutTimeline.fromTo(".image_section > .image_container", 
  { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    duration: 0.7,
    ease: "back.out(1.7)"
  }, 
  "-=0.3"
);

aboutTimeline.fromTo(".bottom_two_images .image_container", 
  { 
    opacity: 0, 
    scale: 0.7,
    y: 30
  },
  { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    duration: 0.6,
    ease: "back.out(1.7)",
    stagger: 0.2
  }, 
  "-=0.2"
);

aboutTimeline.to(".image_section .image_container", {
  y: -3,
  duration: 2,
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1,
  stagger: 0.3
}, "+=0.5");