gsap.registerPlugin(ScrollTrigger);

//Animation landing page
gsap.from('#landingh2', {
  opacity: 0,
  duration: 1,
  x: -50,
  delay: 0.5,
  ease: "expo.out"
});

gsap.from('#landingp', {
  opacity: 0,
  duration: 1,
  x: 50,
  delay: 1,
  ease: "expo.out"
});

gsap.from('#landingimg', {
  opacity: 0,
  duration: 1,
  x: 50,
  delay: 1.5,
  ease: "power4.out"
});

gsap.from("#landingbtn", {
  opacity: 0,
  duration: 1,
  x: 50,
  ease: "expo.out",
  scale: 0.1,
  delay: 2
})

gsap.from('#header', {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: 2.5,
  ease: "expo.out"
});

gsap.from('#nslogo', {
  opacity: 0,
  duration: 1,
  rotation: 360,
  scale: 0.1,
  delay: 2.5,
  ease: "expo.out"
});

//Animation first section
gsap.from("#firsth2", {
  scrollTrigger: {
    trigger: "#first",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  x: 50,
  ease: "expo.out"
})

gsap.from("#firstp", {
  scrollTrigger: {
    trigger: "#first",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 1
  },
  opacity: 0,
  x: -50,
  ease: "expo.out"
})
gsap.from("#firstimg", {
  scrollTrigger: {
    trigger: "#first",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 2,
  },
  opacity: 0,
  x: 50,
  ease: "expo.out",
  scale: 0.1,
  rotation: 45
})

gsap.from("#firstbtn", {
  scrollTrigger: {
    trigger: "#first",
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
    trigger: "#second",
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
    trigger: "#second",
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
    trigger: "#second",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 2,
  },
  opacity: 0,
  x: -800,
  ease: "power2.out",
  scale: 0.1,
  delay: 4
})

gsap.from("#secondbtn", {
  scrollTrigger: {
    trigger: "#second",
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
    trigger: "#third",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  x: 50,
  ease: "expo.out"
})

gsap.from("#thirdp", {
  scrollTrigger: {
    trigger: "#third",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 1
  },
  opacity: 0,
  x: -50,
  ease: "expo.out"
})

gsap.from("#thirdimg", {
  scrollTrigger: {
    trigger: "#third",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 2,
  },
  opacity: 0,
  x: 100,
  ease: "expo.out",
  scale: 0,
  rotation: -480
})

gsap.from("#thirdbtn", {
  scrollTrigger: {
    trigger: "#third",
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
    trigger: "#fourth",
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
    trigger: "#fourth",
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
    trigger: "#fourth",
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
    trigger: "#fourth",
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

gsap.from("#line", {
  scrollTrigger: {
    trigger: "#fifth",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 2,
  },
  opacity: 0,
  x: 50,
  ease: "bounce.out(1.7)",
  rotation: 360,
  scale: 0.1
})

//Animation fifth section
gsap.from("#fifthh2", {
  scrollTrigger: {
    trigger: "#fifth",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  x: 50,
  ease: "expo.out"
})

gsap.from("#fifthp", {
  scrollTrigger: {
    trigger: "#fifth",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 1
  },
  opacity: 0,
  x: -50,
  ease: "expo.out"
})

gsap.from("#fifthimg", {
  scrollTrigger: {
    trigger: "#fifth",
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

gsap.from("#fifthbtn", {
  scrollTrigger: {
    trigger: "#fifth",
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

//Animation sixth section
gsap.from("#sixthh2", {
  scrollTrigger: {
    trigger: "#sixth",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  x: 50,
  ease: "expo.out"
})

gsap.from("#sixthp", {
  scrollTrigger: {
    trigger: "#sixth",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 1
  },
  opacity: 0,
  x: -50,
  ease: "expo.out"
})

gsap.from("#sixthimg", {
  scrollTrigger: {
    trigger: "#sixth",
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

gsap.from("#sixthbtn", {
  scrollTrigger: {
    trigger: "#sixth",
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

gsap.from("#interview", {
  scrollTrigger: {
    trigger: "#sixth",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 2,
  },
  opacity: 0,
  x: 50,
  ease: "expo.out",
  scale: 3
})

gsap.from("#eighth2", {
  scrollTrigger: {
    trigger: "#eighth",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  x: 50,
  ease: "expo.out"
})

gsap.from("#eighthp", {
  scrollTrigger: {
    trigger: "#eighth",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 1
  },
  opacity: 0,
  x: -50,
  ease: "expo.out"
})

gsap.from("#eighthimg", {
  scrollTrigger: {
    trigger: "#eighth",
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

gsap.from("#eighthbtn", {
  scrollTrigger: {
    trigger: "#eighth",
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

gsap.from("#seventh2", {
  scrollTrigger: {
    trigger: "#seventh",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  x: 50,
  ease: "expo.out"
})

gsap.from("#seventhp", {
  scrollTrigger: {
    trigger: "#seventh",
    start: "20px, 80%",
    scrub: 1,
    toggleActions: "restart pause resume pause",
    delay: 1
  },
  opacity: 0,
  x: -50,
  ease: "expo.out"
})

gsap.from("#seventhimg", {
  scrollTrigger: {
    trigger: "#seventh",
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

gsap.from("#seventhbtn", {
  scrollTrigger: {
    trigger: "#seventh",
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