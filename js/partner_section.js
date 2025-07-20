gsap.fromTo(".partners_section", 
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
      trigger: ".partners_section",
      start: "top 75%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".all_partners_container", 
  { 
    opacity: 0, 
    y: 50 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".all_partners_container",
      start: "top 75%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".partners_section_second", 
  { 
    opacity: 0, 
    y: 50 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".partners_section_second",
      start: "top 75%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".featured_comments", 
  { 
    opacity: 0, 
    y: 50 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".featured_comments",
      start: "top 75%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".download_links_container", 
  { 
    opacity: 0, 
  },
  { 
    opacity: 1, 
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".download_links_container",
      start: "top 75%",
      toggleActions: "play none none reverse"
    }
  }
);