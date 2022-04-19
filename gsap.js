gsap.from('.logo', {
  scrollTrigger: {
    trigger: '.bi-bell',
    start: 'top top',
    end: '=+380',
    scrub: 1,
    // markers: true,
  },
  stagger: { amount: 2 },
  scale: 0,
  duration: 1,
});
