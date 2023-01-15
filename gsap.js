gsap.from('.logo', {
  scrollTrigger: {
    trigger: '#portfolio',
    start: 'top 50%',
    end: 'center 50%',
    // markers: true,
    scrub: 1,
  },
  scale: 0,
  duration: 2.5,
  ease: 'back.out(1.7)',
});

let mm = gsap.matchMedia();
mm.add('(min-width: 800px)', () => {
  gsap.from('.formContainer', {
    scrollTrigger: {
      trigger: '#angebot',
      start: 'top top-=500',
      end: '=+380',
      // markers: true,
      scrub: 1,
    },
    scale: 0,
    duration: 3,
    ease: 'power4.out',
  });
});
