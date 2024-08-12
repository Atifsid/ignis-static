gsap.from("#about-us", {
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    markers: true,
    start: "top 90%",
  },
});

gsap.from("#about-us img", {
  opacity: 0,
  duration: 0.8,
  x: -500,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    markers: false,
    start: "top 90%",
  },
});

gsap.from("#about-us p", {
  opacity: 0,
  duration: 0.8,
  x: 500,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    markers: false,
    start: "top 90%",
  },
});
