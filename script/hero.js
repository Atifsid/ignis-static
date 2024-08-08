let enquiryRequestBtn = document.querySelector(".hero .hero-button");

let animation = gsap.to(".hero .hero-button", {
    paused: true,
    duration: 0.3,
    color: '#ffffff',
    backgroundColor: '#dc2626'
});

enquiryRequestBtn.addEventListener("mouseenter", () => animation.play());
enquiryRequestBtn.addEventListener("mouseleave", () => animation.reverse());
