var navTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "nav",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});

navTimeline.fromTo("nav", 
  { 
    opacity: 0, 
    y: -30 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.6,
    ease: "power2.out"
  }
);

navTimeline.fromTo("nav .logo", 
  { 
    opacity: 0, 
    y: -20 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.5,
    ease: "power2.out"
  }, 
  "-=0.3"
);

navTimeline.fromTo("nav .links_container > a", 
  { 
    opacity: 0, 
    y: -15 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.1
  }, 
  "-=0.2"
);

navTimeline.fromTo("nav .dropdown_plus_options", 
  { 
    opacity: 0, 
    y: -15 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.4,
    ease: "power2.out"
  }, 
  "-=0.2"
);

navTimeline.fromTo("nav .join_links > *", 
  { 
    opacity: 0, 
    y: -15 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.08
  }, 
  "-=0.3"
);

navTimeline.to("nav", {
  y: -2,
  duration: 0.2,
  ease: "power2.out",
  yoyo: true,
  repeat: 1
}, "+=0.1");