 //Animation landing page
  gsap.from('#landingp', {opacity: 0, duration: 1, x: -50, delay: 1, ease:"expo.out"});
  gsap.from('#landingimg', {opacity: 0, duration: 1, x: 50, delay: 1.5, ease:"expo.out"});
  gsap.from('#landingh2', {opacity: 0, duration: 1, x: 50, delay: 0.5, ease:"expo.out"});
  gsap.from('#header', {opacity: 0, duration: 1, y: -50, delay: 2.5, ease:"expo.out"});
  gsap.from('#nslogo', {opacity: 0, duration: 1, rotation: 360, delay: 2.5, ease:"expo.out"});

  gsap.registerPlugin(ScrollTrigger);

//Animation first section
  gsap.from("#firsth2", {
  scrollTrigger: {
    trigger: "#firsth2",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  x: -50,
  ease: "expo.out"
  })

  gsap.from("#firstp", {
  scrollTrigger: {
    trigger: "#firstp",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 1
  },
  opacity: 0,
  x: 50,
  ease: "expo.out"
  })

  gsap.from("#firstimg", {
  scrollTrigger: {
    trigger: "#firstimg",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 2,
  },
  opacity: 0,
  x: 50,
  ease: "expo.out",
  scale: 0.1
  })

  gsap.from("#firstbtn", {
    scrollTrigger: {
      trigger: "#firstbtn",
      start: "20px, 80%",
      scrub: 1,
      toggleActions: "restart pause resume pause",
      delay: 2,
    },
    opacity: 0,
    x: 50,
    ease: "expo.out",
    scale: 0.1
    })

//Animation second section
  gsap.from("#secondh2", {
    scrollTrigger: {
      trigger: "#secondh2",
      start: "20px, 80%",
      scrub: 1,
      toggleActions: "restart pause resume pause"
    },
    opacity: 0,
    x: -50,
    ease: "expo.out"
    })
  
    gsap.from("#secondp", {
    scrollTrigger: {
      trigger: "#secondp",
      start: "20px, 80%",
      scrub: 1,
      toggleActions: "restart pause resume pause",
      delay: 1
    },
    opacity: 0,
    x: 50,
    ease: "expo.out"
    })
  
    gsap.from("#secondimg", {
    scrollTrigger: {
      trigger: "#secondimg",
      start: "20px, 80%",
      scrub: 1,
      toggleActions: "restart pause resume pause",
      delay: 2,
    },
    opacity: 0,
    x: 50,
    ease: "expo.out",
    scale: 0.1
    })

    gsap.from("#secondbtn", {
      scrollTrigger: {
        trigger: "#secondbtn",
        start: "20px, 80%",
        scrub: 1,
        toggleActions: "restart pause resume pause",
        delay: 2,
      },
      opacity: 0,
      x: 50,
      ease: "expo.out",
      scale: 0.1
      })

    //Animation third section
  gsap.from("#thirdh2", {
    scrollTrigger: {
      trigger: "#thirdh2",
      start: "20px, 80%",
      scrub: 1,
      toggleActions: "restart pause resume pause"
    },
    opacity: 0,
    x: -50,
    ease: "expo.out"
    })
  
    gsap.from("#thirdp", {
    scrollTrigger: {
      trigger: "#thirdp",
      start: "20px, 80%",
      scrub: 1,
      toggleActions: "restart pause resume pause",
      delay: 1
    },
    opacity: 0,
    x: 50,
    ease: "expo.out"
    })
  
    gsap.from("#thirdimg", {
    scrollTrigger: {
      trigger: "#thirdimg",
      start: "20px, 80%",
      scrub: 1,
      toggleActions: "restart pause resume pause",
      delay: 2,
    },
    opacity: 0,
    x: 50,
    ease: "expo.out",
    scale: 0.1
    })

    gsap.from("#thirdbtn", {
      scrollTrigger: {
        trigger: "#thirdbtn",
        start: "20px, 80%",
        scrub: 1,
        toggleActions: "restart pause resume pause",
        delay: 2,
      },
      opacity: 0,
      x: 50,
      ease: "expo.out",
      scale: 0.1
      })
    //Animation fourth section
  gsap.from("#fourthh2", {
    scrollTrigger: {
      trigger: "#fourthh2",
      start: "20px, 80%",
      scrub: 1,
      toggleActions: "restart pause resume pause"
    },
    opacity: 0,
    x: -50,
    ease: "expo.out"
    })
  
    gsap.from("#fourthp", {
    scrollTrigger: {
      trigger: "#fourthp",
      start: "20px, 80%",
      scrub: 1,
      toggleActions: "restart pause resume pause",
      delay: 1
    },
    opacity: 0,
    x: 50,
    ease: "expo.out"
    })
  
    gsap.from("#fourthimg", {
    scrollTrigger: {
      trigger: "#fourthimg",
      start: "20px, 80%",
      scrub: 1,
      toggleActions: "restart pause resume pause",
      delay: 2,
    },
    opacity: 0,
    x: 50,
    ease: "expo.out",
    scale: 0.1
    })

    gsap.from("#fourthbtn", {
      scrollTrigger: {
        trigger: "#firstbtn",
        start: "20px, 80%",
        scrub: 1,
        toggleActions: "restart pause resume pause",
        delay: 2,
      },
      opacity: 0,
      x: 50,
      ease: "expo.out",
      scale: 0.1
      })