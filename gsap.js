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
    y: 100,
    duration: 3,
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
main
  .add(paraAnimation('#p1'))
  .add(paraAnimation('#p2'), '<+=20%')
  .add(paraAnimation('#p3'), '<+=20%')
  .add(paraAnimation('#p4'), '<+=20%')
  .add(paraAnimation('#p5'), '<+=20%')
  .add(paraAnimation('#p6'), '<+=20%');
