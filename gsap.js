gsap.from('.logo', {
  scrollTrigger: {
    trigger: '.bi-bell',
    start: 'top top',
    end: '=+380',
    scrub: 1,
    // markers: true,
  },
  stagger: { amount: 2 },
  ease: 'back.out(1.4)',
  scale: 0,
  duration: 4,
});

function paraAnimation(para) {
  let paraTL = gsap.timeline();
  paraTL.from(para, {
    ease: 'back.out(1.2)',
    scale: 0,
    y: 10,
    duration: 1,
  });
  return paraTL;
}

let main = gsap.timeline({
  scrollTrigger: {
    trigger: '.bi-gem',
    start: 'top top',
    end: '=+360',
    // markers: true,
    scrub: true,
  },
});
let mm = gsap.matchMedia();
mm.add('(min-width: 800px)', () => {
  gsap.from('.formContainer', {
    scrollTrigger: {
      trigger: '#angebot',
      start: 'top top',
      end: '=+380',
      // markers: true,
      scrub: 1,
    },
    scale: 0,
    duration: 1,
  });
});
