$(function () {
  $("#header").load("/common/header/header.html");
  $("#footer").load("/common/footer/footer.html");
});

window.onload = function () {
  let mm = gsap.matchMedia();
  let navbarTl = gsap.timeline();
  const menuBtn = document.querySelector(".navbar span i");
  const crossBtn = document.querySelector("#navbar-full i");

  // header-logo animations
  gsap.from(".navbar .logo", {
    duration: 1,
    x: -100,
  });

  // header nav-links animations
  gsap.from(".nav-links", {
    duration: 1,
    x: 100,
    stagger: 1,
  });

  // hero-content animations
  gsap.from(".hero .hero-content", {
    duration: 1,
    scale: 2,
    stagger: 1,
  });

  // header-menu animations for small screens
  mm.add("(max-width: 750px)", () => {
    navbarTl.to("#navbar-full", {
      right: 1,
      duration: 0.5,
      display: "block",
    });
  });

  // pause animations initially
  navbarTl.pause();

  menuBtn.addEventListener("click", () => {
    navbarTl.play();
  });

  crossBtn.addEventListener("click", () => {
    navbarTl.reverse();
  });
};
