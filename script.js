let mm = gsap.matchMedia();
let tl = gsap.timeline();
const menuBtn = document.querySelector('.navbar span i');
const crossBtn = document.querySelector('#navbar-full i');

mm.add("(max-width: 750px)", () => {
    tl.to('#navbar-full', {
        right: 1,
        duration: 0.5,
        display: "block"
    });
})

tl.pause();

menuBtn.addEventListener('click', () => {
    tl.play();
})

crossBtn.addEventListener('click', () => {
    tl.reverse();
})