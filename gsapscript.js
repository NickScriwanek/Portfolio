gsap.registerPlugin(ScrollTrigger);

 //Animation landing page
  gsap.from('#landingh2', {
    opacity: 0, 
    duration: 1, 
    x: -50, 
    delay: 0.5, 
    ease:"expo.out"
  });
 
  gsap.from('#landingp', {
    opacity: 0, 
    duration: 1, 
    x: 50, 
    delay: 1, 
    ease:"expo.out"
  });

  gsap.from('#landingimg', {
    opacity: 0, 
    duration: 1, 
    x: 50, 
    delay: 1.5, 
    ease:"power4.out"
  });

  gsap.from('#header', {
    opacity: 0,
    duration: 1,
    y: -50, delay: 2.5,
    ease:"expo.out"
  });

  gsap.from('#nslogo', {
    opacity: 0,
    duration: 1,
    rotation: 360,
    scale: 0.1,
    delay: 2.5,
    ease:"expo.out"
  });

//Animation first section
  gsap.from("#firsth2", {
  scrollTrigger: {
    trigger: "#firsth2",
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
    trigger: "#firstp",
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
    trigger: "#firstimg",
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
    x: -800,
    ease: "power2.out",
    scale: 0.1,
    delay: 4
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
    x: 50,
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
    x: -50,
    ease: "expo.out"
    })
  
    gsap.from("#thirdimg", {
    scrollTrigger: {
      trigger: "#thirdimg",
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

      gsap.from("#line", {
        scrollTrigger: {
          trigger: "#line",
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
      trigger: "#fifthh2",
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
      trigger: "#fifthp",
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
      trigger: "#fifthimg",
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
        trigger: "#fifthbtn",
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
      trigger: "#sixthh2",
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
      trigger: "#sixthp",
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
      trigger: "#sixthimg",
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
        trigger: "#sixthbtn",
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
          trigger: "#interview",
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
            trigger: "#eighthh2",
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
            trigger: "#eighthp",
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
            trigger: "#eighthimg",
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
              trigger: "#eighthbtn",
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
                trigger: "#seventhh2",
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
                trigger: "#seventhp",
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
                trigger: "#seventhimg",
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
                  trigger: "#seventhbtn",
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