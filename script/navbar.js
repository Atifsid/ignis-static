let mm = gsap.matchMedia();
let navbarTl = gsap.timeline();
const menuBtn = document.querySelector(".navbar span i");
const crossBtn = document.querySelector("#navbar-full i");

gsap.from(".logo", {
  delay: 2,
  duration: 1,
  x: -100,
});
gsap.from(".nav-links", {
  delay: 2,
  duration: 1,
  x: 100,
  stagger: 1,
});
gsap.from(".hero .hero-content", {
  delay: 2,
  duration: 1,
  scale: 2,
  stagger: 1,
});

mm.add("(max-width: 750px)", () => {
  navbarTl.to("#navbar-full", {
    right: 1,
    duration: 0.5,
    display: "block",
  });
});

navbarTl.pause();

menuBtn.addEventListener("click", () => {
  navbarTl.play();
});

crossBtn.addEventListener("click", () => {
  navbarTl.reverse();
});
